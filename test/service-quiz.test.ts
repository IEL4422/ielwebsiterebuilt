import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { allServices } from '../lib/services-data';
import { packagePriceText } from '../lib/online-signup';
import { hasPortalPackage, portalHandoffUrl } from '../lib/portal-handoff';
import {
  QUESTIONS,
  RESULT_RULES,
  WHY_EXTRAS,
  clientTypeFor,
  nextQuestion,
  progress,
  recommend,
  type Answers,
} from '../lib/service-quiz';

/**
 * Answers the quiz the way a visitor would: one question at a time, only the
 * questions the quiz actually shows. `script` maps question id to answer; the
 * walk fails if the quiz asks something the script did not expect.
 */
function walk(script: Answers) {
  const answers: Answers = {};
  const asked: string[] = [];
  for (let guard = 0; guard < QUESTIONS.length + 1; guard += 1) {
    const q = nextQuestion(answers);
    if (!q) break;
    expect(script, `quiz asked "${q.id}" which this path did not expect`).toHaveProperty(q.id);
    expect(q.options.map((o) => o.value)).toContain(script[q.id]);
    answers[q.id] = script[q.id];
    asked.push(q.id);
  }
  expect(Object.keys(script).sort(), 'every scripted answer should have been asked').toEqual([...asked].sort());
  return { answers, asked, result: recommend(answers) };
}

function expectPackage(script: Answers, serviceId: string, clientType: 'individual' | 'joint' = 'individual') {
  const { answers, result } = walk(script);
  expect(result.type).toBe('package');
  if (result.type !== 'package') return;
  expect(result.serviceId).toBe(serviceId);
  expect(clientTypeFor(answers)).toBe(clientType);
  // The page can show a price and hand off straight to the portal.
  expect(packagePriceText(serviceId, clientType)).toBeTruthy();
  expect(hasPortalPackage(serviceId)).toBe(true);
  const url = new URL(portalHandoffUrl(serviceId, { clientType, answers }) as string);
  expect(url.searchParams.get('from')).toBe('website');
  expect(url.searchParams.get('answers')).toBeTruthy();
}

function expectConsult(script: Answers) {
  const { result } = walk(script);
  expect(result.type).toBe('consult');
  if (result.type === 'consult') expect(result.reason.length).toBeGreaterThan(20);
}

describe('service finder: planning ahead', () => {
  it('single, no home, modest savings, does not mind court -> Will Package', () => {
    expectPackage({ situation: 'planning', married: 'no', home: 'no', assets: 'under-150k', family: 'neither', avoidCourt: 'no' }, 'will-package');
  });
  it('married couple with young kids who do not mind court -> Joint Will Package', () => {
    expectPackage({ situation: 'planning', married: 'yes', home: 'yes', assets: '150k-3.5m', family: 'minor', avoidCourt: 'no' }, 'will-package', 'joint');
  });
  it('single homeowner who wants to stay out of court -> Trust Package', () => {
    expectPackage({ situation: 'planning', married: 'no', home: 'yes', assets: '150k-3.5m', family: 'neither', avoidCourt: 'yes' }, 'trust-package');
  });
  it('married couple who wants to stay out of court -> Joint Trust Package', () => {
    expectPackage({ situation: 'planning', married: 'yes', home: 'yes', assets: '150k-3.5m', family: 'minor', avoidCourt: 'yes' }, 'trust-package', 'joint');
  });
  it('homeowner with a small estate who wants to avoid court -> Probate Avoidance Package', () => {
    expectPackage({ situation: 'planning', married: 'no', home: 'yes', assets: 'under-150k', family: 'neither', avoidCourt: 'notSure' }, 'probate-avoidance-package');
  });
  it('large estates and special needs go to a consultation', () => {
    expectConsult({ situation: 'planning', married: 'yes', home: 'yes', assets: 'over-3.5m' });
    expectConsult({ situation: 'planning', married: 'no', home: 'no', assets: '150k-3.5m', family: 'special' });
  });
});

describe('service finder: someone passed away', () => {
  const handling = { situation: 'death', dispute: 'no', role: 'handling', caseOpen: 'no' };
  it('small estate, no real estate -> Small Estate Administration', () => {
    expectPackage({ ...handling, docs: 'neither', realEstate: 'no', value: 'under-150k' }, 'small-estate-administration');
  });
  it('probate with a will -> Standard Probate, explained with the will', () => {
    const { result } = walk({ ...handling, docs: 'will', realEstate: 'yes', onlyHome: 'no', value: '150k-4m' });
    expect(result).toMatchObject({ type: 'package', serviceId: 'standard-probate' });
    if (result.type === 'package') expect(result.why).toContain('left a will');
  });
  it('probate without a will -> Standard Probate, explained without one', () => {
    const { result } = walk({ ...handling, docs: 'neither', realEstate: 'no', value: '150k-4m' });
    expect(result).toMatchObject({ type: 'package', serviceId: 'standard-probate' });
    if (result.type === 'package') expect(result.why).toContain('Without a will');
  });
  it('everything in a trust -> Trust Administration Consulting', () => {
    expectPackage({ situation: 'death', docs: 'trust', dispute: 'no', outsideTrust: 'no' }, 'trust-admin-consulting');
  });
  it('only the home is left -> Bond in Lieu of Probate (no full court case)', () => {
    expectPackage({ ...handling, docs: 'will', realEstate: 'yes', onlyHome: 'yes' }, 'bond-in-lieu-of-probate');
  });
  it('heirs, spouses and cases already under way get their own packages', () => {
    expectPackage({ situation: 'death', docs: 'will', dispute: 'no', role: 'heir' }, 'heir-representation');
    expectPackage({ situation: 'death', docs: 'neither', dispute: 'no', role: 'spouse' }, 'spousal-representation');
    expectPackage({ situation: 'death', docs: 'will', dispute: 'no', role: 'handling', caseOpen: 'open' }, 'partial-probate');
    expectPackage({ situation: 'death', docs: 'will', dispute: 'no', role: 'handling', caseOpen: 'closed' }, 'probate-reopening');
  });
  it('a dispute always goes to a consultation, never a purchase', () => {
    for (const docs of ['will', 'trust', 'neither', 'notSure']) {
      expectConsult({ situation: 'death', docs, dispute: 'yes' });
      expectConsult({ situation: 'death', docs, dispute: 'notSure' });
    }
  });
  it('large or unclear estates go to a consultation', () => {
    expectConsult({ ...handling, docs: 'will', realEstate: 'no', value: 'over-4m' });
    expectConsult({ ...handling, docs: 'will', realEstate: 'no', value: 'notSure' });
    expectConsult({ situation: 'death', docs: 'trust', dispute: 'no', outsideTrust: 'yes' });
  });
});

describe('service finder: deeds, sales and other situations', () => {
  it('deed only -> the matching deed', () => {
    expectPackage({ situation: 'deed', deedGoal: 'addRemove' }, 'quit-claim-deed');
    expectPackage({ situation: 'deed', deedGoal: 'atDeath' }, 'transfer-on-death');
    expectPackage({ situation: 'deed', deedGoal: 'keepLiving' }, 'life-estate-deed');
    expectConsult({ situation: 'deed', deedGoal: 'notSure' });
  });
  it('selling a home -> closing representation', () => {
    expectPackage({ situation: 'sale', agent: 'yes' }, 'residential-closing');
    expectPackage({ situation: 'sale', agent: 'no' }, 'fsbo-representation');
  });
  it('checking your own documents -> DIY review, couple price for couples', () => {
    expectPackage({ situation: 'diy', married: 'yes' }, 'diy-estate-plan-review', 'joint');
  });
  it('nursing home, decision-making and unsure all go to a consultation', () => {
    for (const situation of ['nursing', 'decisions', 'unsure']) expectConsult({ situation });
  });
});

describe('service finder data', () => {
  it('only recommends real, deep-linkable, fixed-price packages', () => {
    const ids = new Set(allServices.map((s) => s.id));
    for (const rule of RESULT_RULES) {
      if (rule.result.type !== 'package') continue;
      expect(ids.has(rule.result.serviceId), rule.result.serviceId).toBe(true);
      expect(hasPortalPackage(rule.result.serviceId), rule.result.serviceId).toBe(true);
      const service = allServices.find((s) => s.id === rule.result.serviceId)!;
      expect(service.requiresConsultation, rule.result.serviceId).toBeFalsy();
    }
  });

  it('never sells contested matters or guardianship, and keeps guardianship out of the wording', () => {
    for (const rule of RESULT_RULES) {
      if (rule.result.type === 'package') {
        expect(rule.result.serviceId).not.toMatch(/contested|guardianship|annual-report-ward/);
      }
    }
    const source = readFileSync('lib/service-quiz.ts', 'utf8');
    const userFacing = [
      ...QUESTIONS.flatMap((q) => [q.title, q.help ?? '', ...q.options.flatMap((o) => [o.label, o.hint ?? ''])]),
      ...RESULT_RULES.map((r) => (r.result.type === 'package' ? r.result.why : r.result.reason)),
      ...WHY_EXTRAS.map((e) => e.text),
    ].join(' ');
    expect(userFacing).not.toMatch(/guardianship/i);
    expect(source).not.toContain('annual-guardianship-compliance');
  });

  it('writes no prices into the quiz table', () => {
    const source = readFileSync('lib/service-quiz.ts', 'utf8');
    // Dollar figures in the file are only the $150,000 / $3.5M / $4M thresholds, never fees.
    const amounts = source.match(/\$\d(?:[\d,.]*\d)?/g) ?? [];
    for (const amount of amounts) expect(['$150,000', '$3.5', '$4']).toContain(amount);
  });

  it('shows a moving progress bar that ends at 100%', () => {
    const script: Answers = { situation: 'planning', married: 'no', home: 'yes', assets: '150k-3.5m', family: 'neither', avoidCourt: 'yes' };
    const answers: Answers = {};
    let last = progress(answers);
    expect(last).toBe(0);
    while (nextQuestion(answers)) {
      const q = nextQuestion(answers)!;
      answers[q.id] = script[q.id];
      const now = progress(answers);
      expect(now).toBeGreaterThan(last);
      last = now;
    }
    expect(last).toBe(1);
  });

  it('keeps the questions short and the answers easy to tap', () => {
    for (const q of QUESTIONS) {
      expect(q.title.length, q.id).toBeLessThanOrEqual(80);
      expect(q.options.length, q.id).toBeGreaterThanOrEqual(2);
      expect(q.options.length, q.id).toBeLessThanOrEqual(8);
    }
  });
});
