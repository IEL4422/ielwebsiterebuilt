import { describe, expect, it } from 'vitest';
import { ESTATE_PLANNING, PROBATE, usd } from '../lib/pricing';
import { allServices } from '../lib/services-data';
import {
  ONLINE_DISCOUNT_LINE,
  buyButtonLabel,
  hasAttorneyPromise,
  hasOnlineDiscount,
  packagePriceText,
} from '../lib/online-signup';

describe('buy-button labels and the online-purchase line', () => {
  it('reads prices from lib/pricing.ts', () => {
    expect(buyButtonLabel('trust-package', { clientType: 'individual' })).toBe(`Start my trust, ${usd(ESTATE_PLANNING.trustPackageIndividual)}`);
    expect(buyButtonLabel('trust-package', { clientType: 'joint' })).toBe(`Start my trust, ${usd(ESTATE_PLANNING.trustPackageJoint)}`);
    expect(buyButtonLabel('will-package')).toBe(`Start my will, from ${usd(ESTATE_PLANNING.willPackageIndividual)}`);
    expect(buyButtonLabel('standard-probate')).toBe(`Start probate, ${usd(PROBATE.standard)}`);
  });

  it('agrees with every fixed price the service catalog shows', () => {
    for (const service of allServices) {
      const individual = packagePriceText(service.id, 'individual');
      if (!individual || service.pricingLabel) continue;
      expect(individual).toBe(usd((service.individualPrice ?? service.fixedPrice) as number));
      if (service.jointPrice) expect(packagePriceText(service.id, 'joint')).toBe(usd(service.jointPrice));
    }
  });

  it('keeps a plain label for services without one fixed price', () => {
    for (const id of ['adult-guardianship', 'minor-guardianship', 'contested-guardianship', 'contested-probate', 'large-estate-probate']) {
      expect(packagePriceText(id)).toBeNull();
      expect(buyButtonLabel(id, { fallback: 'Get Started' })).toBe('Get Started');
    }
  });

  it('limits the 10% line and the attorney promise to estate planning packages', () => {
    expect(ONLINE_DISCOUNT_LINE).toBe('Buy online without a consultation and save 10%.');
    for (const id of ['will-package', 'probate-avoidance-package', 'trust-package']) expect(hasOnlineDiscount(id)).toBe(true);
    const estatePlanningIds = new Set(allServices.filter((s) => s.standardizedCaseType === 'Estate Planning').map((s) => s.id));
    for (const service of allServices) {
      if (hasOnlineDiscount(service.id)) expect(estatePlanningIds.has(service.id)).toBe(true);
      if (hasAttorneyPromise(service.id)) expect(estatePlanningIds.has(service.id)).toBe(true);
    }
    for (const id of ['standard-probate', 'adult-guardianship', 'minor-guardianship', 'quit-claim-deed', 'residential-closing', 'fsbo-representation']) {
      expect(hasOnlineDiscount(id)).toBe(false);
      expect(hasAttorneyPromise(id)).toBe(false);
    }
  });
});
