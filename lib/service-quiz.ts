/**
 * The service finder at /recommended-service/.
 *
 * Staff can edit this file without touching the page. It has three plain tables:
 *
 *   QUESTIONS     the questions, in the order they are asked. A question is shown
 *                 only when every answer in its `showIf` matches (a list means
 *                 "any of these"). Questions whose `showIf` does not match are skipped.
 *   RESULT_RULES  checked top to bottom once the questions run out; the first rule
 *                 whose `when` matches every listed answer is the result. A result is
 *                 either one package (by its id in lib/services-data.ts) or a free
 *                 consultation with a short reason.
 *   WHY_EXTRAS    one optional extra sentence added to a package result.
 *
 * Prices are never written here. The page reads them from lib/pricing.ts, and a
 * package's name and what it includes come from lib/services-data.ts.
 *
 * Wording rules: plain English, one short question at a time, and no promotional
 * wording for guardianship (that situation always goes to a consultation).
 * test/service-quiz.test.ts walks the main paths.
 */

export type Answers = Record<string, string>;

/** Every listed key must match; a list means any of those values. */
export type Match = Record<string, string | string[]>;

export type QuizOption = { value: string; label: string; hint?: string };

export type QuizQuestion = {
  id: string;
  title: string;
  /** A few words that explain a term or why we ask. */
  help?: string;
  showIf?: Match;
  options: QuizOption[];
};

export type PackageResult = { type: 'package'; serviceId: string; why: string };
export type ConsultResult = { type: 'consult'; reason: string };
export type QuizOutcome = PackageResult | ConsultResult;
export type ResultRule = { when: Match; result: QuizOutcome };

const PLANNING = { situation: 'planning' };
const PLANNING_IN_RANGE = { situation: 'planning', assets: ['under-150k', '150k-3.5m'] };
const DEATH = { situation: 'death' };
const DEATH_NO_DISPUTE = { situation: 'death', dispute: 'no' };
const PROBATE_PATH = { situation: 'death', dispute: 'no', docs: ['will', 'neither', 'notSure'] };
const RUNNING_ESTATE = { ...PROBATE_PATH, role: 'handling', caseOpen: ['no', 'notSure'] };

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'situation',
    title: 'What is going on?',
    help: 'Pick the closest one. You can go back and change any answer.',
    options: [
      { value: 'planning', label: 'I want to plan ahead for my family', hint: 'A will, a trust, or powers of attorney' },
      { value: 'death', label: 'Someone passed away', hint: 'I need help passing on what they owned' },
      { value: 'deed', label: 'I just need to change who owns a home', hint: 'A new deed' },
      { value: 'sale', label: 'I am selling a home', hint: 'I need a lawyer for the closing' },
      { value: 'diy', label: 'I made my own will or trust and want it checked' },
      { value: 'nursing', label: 'A parent is going into a nursing home' },
      { value: 'decisions', label: 'A family member can no longer make their own decisions' },
      { value: 'unsure', label: 'Something else, or I am not sure' },
    ],
  },

  /* ---------- Planning ahead ---------- */
  {
    id: 'married',
    title: 'Are you married?',
    help: 'Couples can plan together at the couple price. Each of you gets your own documents.',
    showIf: { situation: ['planning', 'diy'] },
    options: [
      { value: 'yes', label: 'Yes, and we want to plan together' },
      { value: 'no', label: 'No, or just planning for myself' },
    ],
  },
  {
    id: 'home',
    title: 'Do you own a home or other real estate?',
    showIf: PLANNING,
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'assets',
    title: 'Roughly how much do you own in total?',
    help: 'Count your home, savings, retirement accounts, and life insurance. A rough guess is fine.',
    showIf: PLANNING,
    options: [
      { value: 'under-150k', label: 'Less than $150,000' },
      { value: '150k-3.5m', label: '$150,000 to $3.5 million' },
      { value: 'over-3.5m', label: 'More than $3.5 million' },
    ],
  },
  {
    id: 'family',
    title: 'Do you have children under 18, or a family member with special needs?',
    showIf: PLANNING_IN_RANGE,
    options: [
      { value: 'minor', label: 'Children under 18' },
      { value: 'special', label: 'A family member with special needs', hint: 'Choose this even if you also have young children' },
      { value: 'neither', label: 'Neither' },
    ],
  },
  {
    id: 'avoidCourt',
    title: 'Do you want to keep your estate out of court after you pass?',
    help: 'Probate is the court process for passing on property after someone dies. It can take a year or more.',
    showIf: { ...PLANNING_IN_RANGE, family: ['minor', 'neither'] },
    options: [
      { value: 'yes', label: 'Yes, keep it out of court' },
      { value: 'no', label: 'No, that is not important to me' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },

  /* ---------- Someone passed away ---------- */
  {
    id: 'docs',
    title: 'Did they leave a will, a trust, or neither?',
    help: 'A trust is a document that holds property and names someone to manage it.',
    showIf: DEATH,
    options: [
      { value: 'will', label: 'A will' },
      { value: 'trust', label: 'A trust', hint: 'Choose this even if there is also a will' },
      { value: 'neither', label: 'Neither' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },
  {
    id: 'dispute',
    title: 'Is anyone disagreeing about the estate, or likely to?',
    help: 'For example, someone challenging the will or arguing over who is in charge.',
    showIf: DEATH,
    options: [
      { value: 'no', label: 'No, everyone gets along' },
      { value: 'yes', label: 'Yes' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },
  {
    id: 'outsideTrust',
    title: 'Did they own anything that was not in the trust?',
    help: 'For example, a bank account or a house in their own name only.',
    showIf: { ...DEATH_NO_DISPUTE, docs: 'trust' },
    options: [
      { value: 'no', label: 'No, everything is in the trust' },
      { value: 'yes', label: 'Yes' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },
  {
    id: 'role',
    title: 'What is your part in the estate?',
    showIf: PROBATE_PATH,
    options: [
      { value: 'handling', label: 'I am handling the estate', hint: 'The executor, or the family member taking care of things' },
      { value: 'heir', label: 'I am inheriting and want my own lawyer' },
      { value: 'spouse', label: 'I am the surviving spouse and want my own lawyer', hint: 'Someone else is handling the estate' },
    ],
  },
  {
    id: 'caseOpen',
    title: 'Has a probate court case already been started?',
    help: 'Probate is the court process for passing on property after someone dies.',
    showIf: { ...PROBATE_PATH, role: 'handling' },
    options: [
      { value: 'no', label: 'No' },
      { value: 'open', label: 'Yes, and I need a new lawyer to finish it' },
      { value: 'closed', label: 'It was closed, but more property turned up' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },
  {
    id: 'realEstate',
    title: 'Did they own a home or other real estate in their own name?',
    help: 'Not counting property owned jointly with someone who is still living.',
    showIf: RUNNING_ESTATE,
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },
  {
    id: 'onlyHome',
    title: 'Is the home the only thing left to pass on?',
    help: 'Nothing else needs to go through court, such as a bank account in their name only.',
    showIf: { ...RUNNING_ESTATE, realEstate: 'yes' },
    options: [
      { value: 'yes', label: 'Yes, just the home' },
      { value: 'no', label: 'No, there is more' },
    ],
  },
  {
    id: 'value',
    title: 'Roughly how much did they own, not counting real estate?',
    help: 'Bank accounts, investments, and cars in their name. Leave out accounts that name a beneficiary.',
    showIf: { ...RUNNING_ESTATE, onlyHome: ['no', '__unanswered__'] },
    options: [
      { value: 'under-150k', label: 'Less than $150,000' },
      { value: '150k-4m', label: '$150,000 to $4 million' },
      { value: 'over-4m', label: 'More than $4 million' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },

  /* ---------- Deeds and home sales ---------- */
  {
    id: 'deedGoal',
    title: 'What do you want the new deed to do?',
    help: 'A deed is the document that says who owns a home.',
    showIf: { situation: 'deed' },
    options: [
      { value: 'addRemove', label: 'Add or remove someone as an owner', hint: 'For example, a spouse' },
      { value: 'atDeath', label: 'Pass the home to someone when I die, without court' },
      { value: 'keepLiving', label: 'Give the home to someone but keep living there for life' },
      { value: 'notSure', label: 'Not sure' },
    ],
  },
  {
    id: 'agent',
    title: 'Are you working with a real estate agent?',
    showIf: { situation: 'sale' },
    options: [
      { value: 'yes', label: 'Yes, I have a listing agent' },
      { value: 'no', label: 'No, I am selling it myself' },
    ],
  },
];

const consult = (reason: string): ConsultResult => ({ type: 'consult', reason });
const pkg = (serviceId: string, why: string): PackageResult => ({ type: 'package', serviceId, why });

export const RESULT_RULES: ResultRule[] = [
  // Situations that always start with a conversation.
  { when: { situation: 'unsure' }, result: consult('Every family is different. A short call with an attorney is the quickest way to find the right help.') },
  { when: { situation: 'nursing' }, result: consult('Protecting savings when a parent needs nursing home care depends on timing and Medicaid rules, so an attorney should go over it with you first.') },
  { when: { situation: 'decisions' }, result: consult('What to do depends on whether they signed powers of attorney and what decisions need to be made. An attorney should look at the details with you first.') },

  // Checking documents you made yourself.
  { when: { situation: 'diy' }, result: pkg('diy-estate-plan-review', 'You already have documents. An attorney will review them, mark up what needs fixing, and go over it with you.') },

  // Deeds.
  { when: { situation: 'deed', deedGoal: 'addRemove' }, result: pkg('quit-claim-deed', 'A quitclaim deed adds or removes an owner. We prepare it and record it with the county.') },
  { when: { situation: 'deed', deedGoal: 'atDeath' }, result: pkg('transfer-on-death', 'A transfer on death instrument passes your home to the person you name when you die, without probate court.') },
  { when: { situation: 'deed', deedGoal: 'keepLiving' }, result: pkg('life-estate-deed', 'A life estate deed lets you keep living in your home for life, then passes it to the person you name without probate court.') },
  { when: { situation: 'deed' }, result: consult('There are a few kinds of deeds. A short call will tell you which one fits.') },

  // Selling a home.
  { when: { situation: 'sale', agent: 'yes' }, result: pkg('residential-closing', 'You have an agent, so you need a lawyer for the contract, title, and closing. The fee is paid at closing.') },
  { when: { situation: 'sale', agent: 'no' }, result: pkg('fsbo-representation', 'Selling without an agent means more paperwork. We prepare the contract and handle the closing. The fee is paid at closing.') },

  // Planning ahead.
  { when: { situation: 'planning', assets: 'over-3.5m' }, result: consult('Estates near or over $4 million can owe Illinois estate tax. An attorney should look at your plan with you first.') },
  { when: { situation: 'planning', family: 'special' }, result: consult('Leaving money to someone with special needs has to protect their benefits. An attorney should plan this with you.') },
  { when: { situation: 'planning', avoidCourt: 'no' }, result: pkg('will-package', 'A will-based plan says who gets what and who is in charge, and includes powers of attorney for money and health care.') },
  { when: { situation: 'planning', home: 'no', assets: 'under-150k' }, result: pkg('will-package', 'With no real estate and less than $150,000, your family can usually skip probate court with a simple affidavit, so a will-based plan is enough.') },
  { when: { situation: 'planning', home: 'yes', assets: 'under-150k' }, result: pkg('probate-avoidance-package', 'You own a home and want to keep it out of court. This plan adds a transfer on death instrument so the home passes without probate.') },
  { when: { situation: 'planning', assets: '150k-3.5m' }, result: pkg('trust-package', 'A living trust keeps your home and savings out of probate court and lets someone you trust take over without a judge.') },

  // Someone passed away.
  { when: { situation: 'death', dispute: ['yes', 'notSure'] }, result: consult('When family members disagree, the case can end up in front of a judge. An attorney should look at it with you before anything is filed.') },
  { when: { situation: 'death', docs: 'trust', outsideTrust: 'no' }, result: pkg('trust-admin-consulting', 'Everything is in the trust, so there is no court case. We guide the trustee through each step for a flat yearly fee.') },
  { when: { situation: 'death', docs: 'trust' }, result: consult('Property outside the trust may need its own court process. An attorney should sort out what goes where.') },
  { when: { situation: 'death', role: 'heir' }, result: pkg('heir-representation', 'You are inheriting, not running the estate. We protect your share and go to court hearings for you.') },
  { when: { situation: 'death', role: 'spouse' }, result: pkg('spousal-representation', 'As the surviving spouse you have your own rights in probate. We protect them and go to court hearings for you.') },
  { when: { situation: 'death', caseOpen: 'open' }, result: pkg('partial-probate', 'The case is already open. We take over and finish it for a flat fee.') },
  { when: { situation: 'death', caseOpen: 'closed' }, result: pkg('probate-reopening', 'More property turned up after the case closed. We reopen it, handle the new property, and close it again.') },
  { when: { situation: 'death', onlyHome: 'yes' }, result: pkg('bond-in-lieu-of-probate', 'The home is the only thing left and everyone agrees, so it may pass without a full court case.') },
  { when: { situation: 'death', value: 'over-4m' }, result: consult('Estates over $4 million can owe Illinois estate tax. An attorney should look at it with you first.') },
  { when: { situation: 'death', value: 'notSure' }, result: consult('The right package depends on what they owned. A short call will sort that out.') },
  { when: { situation: 'death', realEstate: 'no', value: 'under-150k' }, result: pkg('small-estate-administration', 'With no real estate and less than $150,000, Illinois lets you skip probate court with a small estate affidavit.') },
  { when: { situation: 'death', realEstate: 'notSure', value: 'under-150k' }, result: consult('Whether you can skip court depends on whether they owned real estate. A short call will sort that out.') },
  { when: { situation: 'death', docs: 'will', value: ['under-150k', '150k-4m'] }, result: pkg('standard-probate', 'They left a will, so we ask the court to put the executor named in it in charge, then handle the case from start to finish.') },
  { when: { situation: 'death', docs: 'neither', value: ['under-150k', '150k-4m'] }, result: pkg('standard-probate', 'Without a will, Illinois law decides who inherits and the court names someone to handle the estate. We handle the case from start to finish.') },
  { when: { situation: 'death', value: ['under-150k', '150k-4m'] }, result: pkg('standard-probate', 'The estate needs a court case to pass on what they owned. We handle it from start to finish, whether or not there is a will.') },
];

/** One extra sentence for a package result. The first match wins. */
export const WHY_EXTRAS: Array<{ when: Match; text: string }> = [
  { when: { situation: 'planning', married: 'yes' }, text: 'As a couple, you each get your own documents at the couple price.' },
  { when: { situation: 'diy', married: 'yes' }, text: 'The couple review covers up to 5 documents for each of you.' },
  { when: { situation: 'planning', family: 'minor' }, text: 'Your will also names who would raise your children.' },
];

export const FALLBACK_RESULT: ConsultResult = consult('We could not match your answers to one package. A short call with an attorney will find the right help.');

/* ---------------- Logic (no need to edit below) ---------------- */

/** `__unanswered__` in a match means "this question was not asked". */
function matches(match: Match | undefined, answers: Answers): boolean {
  if (!match) return true;
  return Object.entries(match).every(([key, expected]) => {
    const actual = answers[key] ?? '__unanswered__';
    return Array.isArray(expected) ? expected.includes(actual) : expected === actual;
  });
}

/** The next question to ask, or null when it is time to show the result. */
export function nextQuestion(answers: Answers): QuizQuestion | null {
  return QUESTIONS.find((q) => answers[q.id] === undefined && matches(q.showIf, answers)) ?? null;
}

/** Could this question still be asked, given what we know so far? Unknown answers count as "maybe". */
function mightAsk(question: QuizQuestion, answers: Answers): boolean {
  if (answers[question.id] !== undefined) return false;
  return Object.entries(question.showIf ?? {}).every(([key, expected]) => {
    if (answers[key] === undefined) return true;
    return Array.isArray(expected) ? expected.includes(answers[key]) : expected === answers[key];
  });
}

/** Rough progress from 0 to 1 for the progress bar. */
export function progress(answers: Answers): number {
  const answered = QUESTIONS.filter((q) => answers[q.id] !== undefined).length;
  if (!nextQuestion(answers)) return 1;
  // Branches never overlap, so count the questions still possible on the longest branch.
  const remaining = answers.situation === undefined ? 5 : QUESTIONS.filter((q) => mightAsk(q, answers)).length;
  return answered / (answered + Math.max(remaining, 1));
}

export function recommend(answers: Answers): QuizOutcome {
  const rule = RESULT_RULES.find((r) => matches(r.when, answers));
  return rule ? rule.result : FALLBACK_RESULT;
}

export function whyExtra(answers: Answers): string | undefined {
  return WHY_EXTRAS.find((e) => matches(e.when, answers))?.text;
}

/** Couples get the couple tier when they said they plan together. */
export function clientTypeFor(answers: Answers): 'individual' | 'joint' {
  return answers.married === 'yes' ? 'joint' : 'individual';
}
