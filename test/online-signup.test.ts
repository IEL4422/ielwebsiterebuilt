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
import { PORTAL_PACKAGES, UNMAPPED_REASONS, UNMAPPED_TIERS } from '../lib/portal-handoff';

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

  it('shows the 10% line with every button that hands off to the portal, and nowhere else', () => {
    expect(ONLINE_DISCOUNT_LINE).toBe('Buy online without a consultation and save 10%.');
    // Every portal-mapped service, in every category, packages and a la carte.
    for (const id of Object.keys(PORTAL_PACKAGES)) expect(hasOnlineDiscount(id), id).toBe(true);
    for (const id of ['will-package', 'trust-package', 'standard-probate', 'small-estate-administration', 'trust-admin-consulting', 'quit-claim-deed', 'residential-closing', 'fsbo-representation', 'power-of-attorney', 'medicaid-asset-protection-trust']) {
      expect(hasOnlineDiscount(id), id).toBe(true);
    }
    // /start-online/ fallbacks and consultation-only services do not carry from=website.
    for (const id of Object.keys(UNMAPPED_REASONS)) expect(hasOnlineDiscount(id), id).toBe(false);
    for (const key of Object.keys(UNMAPPED_TIERS)) {
      const [id, tier] = key.split(':') as [string, 'individual' | 'joint'];
      expect(hasOnlineDiscount(id, tier), key).toBe(false);
    }
    for (const service of allServices.filter((s) => s.requiresConsultation)) expect(hasOnlineDiscount(service.id), service.id).toBe(false);
    for (const id of ['irrevocable-life-insurance-trust', 'document-review', 'contested-probate', 'adult-guardianship', 'minor-guardianship']) {
      expect(hasOnlineDiscount(id), id).toBe(false);
    }
  });

  it('keeps the attorney promise on estate planning packages only', () => {
    const estatePlanningIds = new Set(allServices.filter((s) => s.standardizedCaseType === 'Estate Planning').map((s) => s.id));
    for (const service of allServices) {
      if (hasAttorneyPromise(service.id)) expect(estatePlanningIds.has(service.id)).toBe(true);
    }
    for (const id of ['standard-probate', 'adult-guardianship', 'minor-guardianship', 'quit-claim-deed', 'residential-closing', 'fsbo-representation']) {
      expect(hasAttorneyPromise(id)).toBe(false);
    }
  });
});
