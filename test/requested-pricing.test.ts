import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { guardianshipServices, probatePackages, trustAdministrationServices } from '@/lib/services-data';
import { GUARDIANSHIP_HOURLY_NOTE } from '@/lib/pricing';
import { adultGuardianshipFAQs, minorGuardianshipFAQs } from '@/lib/practice-faqs';

describe('requested service pricing', () => {
  it('routes guardianship retainers to review without representing them as fixed purchase prices', () => {
    for (const id of ['adult-guardianship', 'minor-guardianship', 'emergency-temporary-adult-guardianship']) {
      const service = guardianshipServices.find(service => service.id === id)!;
      expect(service.fixedPrice).toBeUndefined();
      expect(service.requiresConsultation).toBe(true);
      expect(service.note).toContain(GUARDIANSHIP_HOURLY_NOTE);
      expect(service.pricingLabel).toContain('$5,000 retainer; hourly billing');
    }
  });
  it('publishes the requested standard probate and annual consulting prices while retaining separate scope', () => {
    expect(probatePackages.find(service => service.id === 'standard-probate')?.fixedPrice).toBe(5500);
    const largeEstate = probatePackages.find(service => service.id === 'large-estate-probate')!;
    expect(largeEstate.fixedPrice).toBe(6500);
    expect(largeEstate.pricingLabel).toBe('$6,500 + 0.5% of Estate Value');
    expect(largeEstate.subtitle).toContain('$4,000,000');
    const consulting = trustAdministrationServices[0];
    expect(consulting.pricingLabel).toBe('$3,500 / Year');
    expect(consulting.description).toContain('ten attorney hours');
    expect(consulting.note).toContain('separate written engagement');
  });
  it('keeps FAQ schema and the downloadable sheet clear about hourly retainers', () => {
    for (const faqs of [adultGuardianshipFAQs, minorGuardianshipFAQs]) {
      const cost = faqs.find(faq => faq.question.startsWith('How much does'))!;
      expect(cost.answer).toContain('$5,000 retainer with hourly billing');
    }
    const sheet = readFileSync('public/pricing-sheet.html', 'utf8');
    expect(sheet).toContain('$6,500');
    expect(sheet.match(/retainer; hourly billing/g)).toHaveLength(2);
    expect(sheet).not.toContain('Flat fee includes the firm');
  });
});

