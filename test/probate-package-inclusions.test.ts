import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { probatePackages } from '../lib/services-data';

const additions = [
  'ALL filing fees and publication fees are included in the price',
  'All required notices',
  'Estate accounting',
  'Heir and attorney communications',
  'Responses to creditors',
];

describe('Probate package inclusions', () => {
  for (const id of ['standard-probate', 'large-estate-probate']) {
    it(id + ' states the complete administration inclusions', () => {
      const service = probatePackages.find((item) => item.id === id)!;
      for (const inclusion of additions) expect(service.includes).toContain(inclusion);
      expect(service.includes).toContain('Asset & Debt Search');
      expect(service.includes.join(' ')).toContain('court appearances');
      expect(service.note).toContain('Surety bond premium');
    });
  }

  it('probate-guardianship is a flat fee that includes everything in Standard Probate plus the guardianship', () => {
    const standard = probatePackages.find((item) => item.id === 'standard-probate')!;
    const combined = probatePackages.find((item) => item.id === 'probate-guardianship')!;
    expect(combined.fixedPrice).toBe(7500);
    expect(combined.pricingLabel).toBeUndefined();
    expect(combined.requiresConsultation).toBeFalsy();
    for (const inclusion of standard.includes) expect(combined.includes).toContain(inclusion);
    const text = combined.includes.join(' ');
    expect(text).toContain('minor guardianship');
    expect(text).toContain('adult guardianship');
    expect(text).toContain('Guardianship court filing fees');
    expect(combined.note).toContain('Surety bond premiums');
    expect(combined.note).toContain('guardian ad litem');
  });

  it('keeps recommendation and legacy card inclusions in step', () => {
    // The service finder renders includes straight from lib/services-data.ts.
    const finder = readFileSync('app/recommended-service/page.tsx', 'utf8');
    expect(finder).toContain("from '@/lib/services-data'");
    expect(finder).toContain('service.includes.map');
    for (const path of [
      'components/services/CategorizedServices.tsx',
      'components/services/CategorizedServicesDisplay.tsx',
    ]) {
      const source = readFileSync(path, 'utf8');
      for (const inclusion of additions) expect(source, path).toContain(inclusion);
    }
  });

  it('states the inclusions on public explanatory and printable surfaces', () => {
    for (const path of [
      'app/services-pricing/page.tsx', 'app/probate/[slug]/page.tsx',
      'app/chicago-probate-lawyer/page.tsx', 'app/probate/dupage-county/page.tsx',
      'app/flat-fee-vs-hourly-probate-illinois/page.tsx',
      'lib/practice-faqs.ts', 'lib/comparison-faqs.ts',
      'scripts/pricing-sheet.template.html', 'public/pricing-sheet.html',
      'public/llms.txt',
    ]) {
      const source = readFileSync(path, 'utf8');
      for (const phrase of ['estate accounting', 'heir and attorney communications', 'responses to creditors']) {
        expect(source, path).toContain(phrase);
      }
    }
  });

  it('preserves the separate small-estate and contested scopes', () => {
    const small = probatePackages.find((item) => item.id === 'small-estate-administration')!;
    expect(small.includes).toEqual(['Small Estate Affidavit', 'Attorney Letter of Direction', 'Asset Search']);
    const contested = probatePackages.find((item) => item.id === 'contested-probate')!;
    expect(contested.includes).toContain('Additional flat fees apply only when listed litigation events actually occur');
    expect(contested.includes).not.toContain('Estate accounting');
  });
});
