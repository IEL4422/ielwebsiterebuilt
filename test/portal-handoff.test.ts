import { describe, expect, it } from 'vitest';
import { PROBATE, usd } from '../lib/pricing';
import { allServices } from '../lib/services-data';
import { buyButtonLabel, packagePriceText } from '../lib/online-signup';
import {
  MAX_ANSWERS_BYTES,
  PORTAL_GET_STARTED_URL,
  PORTAL_PACKAGES,
  UNMAPPED_REASONS,
  UNMAPPED_TIERS,
  buyHref,
  encodeAnswers,
  portalHandoffUrl,
  withUtm,
} from '../lib/portal-handoff';
// Checked-in copy of the portal's catalog projection (see its _source field).
// The portal lives in a separate repo, so the build cannot read it directly.
import snapshot from './fixtures/portal-catalog-snapshot.json';

type PortalOption = { catalogId: string | null; category: string | null; list: string | null; price: number | null; active: boolean | null; consult: boolean | null };
const portal = snapshot.byId as Record<string, PortalOption>;

function decodeAnswers(value: string): Record<string, string> {
  const b64 = value.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(Buffer.from(b64, 'base64').toString('utf8'));
}

describe('website to portal package mapping', () => {
  it('points every mapped package at a live portal option in the same category and catalog entry', () => {
    for (const [serviceId, pkg] of Object.entries(PORTAL_PACKAGES)) {
      for (const optionId of [pkg.individual, pkg.joint].filter(Boolean) as string[]) {
        const option = portal[optionId];
        expect(option, `${serviceId} -> ${optionId} missing from the portal catalog`).toBeTruthy();
        expect(option.category, `${serviceId} -> ${optionId} category`).toBe(pkg.category);
        expect(option.catalogId, `${serviceId} -> ${optionId} catalog id`).toBe(pkg.catalogId);
        expect(option.active, `${serviceId} -> ${optionId} is inactive`).toBe(true);
        expect(option.consult, `${serviceId} -> ${optionId} is consult-only in the portal`).toBe(false);
      }
    }
  });

  it('only maps a package when the portal charges the same price the website shows', () => {
    for (const [serviceId, pkg] of Object.entries(PORTAL_PACKAGES)) {
      const tiers: Array<['individual' | 'joint', string | undefined]> = [['individual', pkg.individual], ['joint', pkg.joint]];
      for (const [tier, optionId] of tiers) {
        if (!optionId) continue;
        const portalPrice = portal[optionId].price as number;
        const service = allServices.find((s) => s.id === serviceId);
        const websitePrice = serviceId === 'large-estate-probate'
          ? usd(PROBATE.largeEstateBase) // base fee; the percentage is added at administration
          : packagePriceText(serviceId, tier)?.replace(/ a year$/, '')
            ?? (service?.fixedPrice != null ? usd(service.fixedPrice) : undefined);
        expect(usd(portalPrice), `${serviceId} (${tier}) price`).toBe(websitePrice);
      }
    }
  });

  it('accounts for every website service: mapped, or listed with the reason it is not', () => {
    for (const service of allServices) {
      const mapped = service.id in PORTAL_PACKAGES;
      const explained = service.id in UNMAPPED_REASONS;
      expect(mapped || explained, `${service.id} is neither mapped nor explained`).toBe(true);
      expect(mapped && explained, `${service.id} is both mapped and listed as unmapped`).toBe(false);
    }
  });

  it('keeps tiers whose prices differ on the website review page', () => {
    for (const key of Object.keys(UNMAPPED_TIERS)) {
      const [serviceId, tier] = key.split(':') as [string, 'individual' | 'joint'];
      expect(serviceId in PORTAL_PACKAGES, key).toBe(true);
      expect(portalHandoffUrl(serviceId, { clientType: tier }), key).toBeNull();
      expect(buyHref(serviceId, { clientType: tier, source: 'test' })).toBe(`/start-online/?service=${serviceId}&clientType=${tier}&source=test`);
    }
    // The website has one MAPT price ($4,000), which matches the portal's one-person tier only.
    const mapt = allServices.find((s) => s.id === 'medicaid-asset-protection-trust')!;
    expect(mapt.jointPrice).toBeUndefined();
    expect(usd(mapt.fixedPrice as number)).toBe(usd(portal['mapt-individual'].price as number));
    expect(portal['mapt-joint'].price).not.toBe(mapt.fixedPrice);
    expect(new URL(portalHandoffUrl('medicaid-asset-protection-trust') as string).searchParams.get('package')).toBe('mapt-individual');
  });

  it('never deep-links a consultation-only service', () => {
    for (const service of allServices.filter((s) => s.requiresConsultation)) {
      expect(service.id in PORTAL_PACKAGES).toBe(false);
    }
    expect('contested-probate' in PORTAL_PACKAGES).toBe(false);
  });
});

describe('hand-off URL', () => {
  it('sends the portal category, the option id and from=website', () => {
    const url = new URL(portalHandoffUrl('trust-package', { clientType: 'joint' }) as string);
    expect(`${url.origin}${url.pathname}`).toBe(PORTAL_GET_STARTED_URL);
    expect(url.searchParams.get('service')).toBe('estate-planning');
    expect(url.searchParams.get('package')).toBe('trust-joint');
    expect(url.searchParams.get('from')).toBe('website');
    expect(url.searchParams.has('answers')).toBe(false);
    expect(new URL(portalHandoffUrl('trust-package') as string).searchParams.get('package')).toBe('trust-individual');
    // A one-tier option ignores the couple choice.
    expect(new URL(portalHandoffUrl('standard-probate', { clientType: 'joint' }) as string).searchParams.get('package')).toBe('standard-probate');
  });

  it('sends Probate + Guardianship to the portal group option, where the client picks minor or adult', () => {
    const url = new URL(buyHref('probate-guardianship', { source: 'test' }));
    expect(`${url.origin}${url.pathname}`).toBe(PORTAL_GET_STARTED_URL);
    expect(url.searchParams.get('service')).toBe('probate');
    expect(url.searchParams.get('package')).toBe('probate-guardianship');
    expect(url.searchParams.get('from')).toBe('website');
    expect(packagePriceText('probate-guardianship')).toBe(usd(PROBATE.probateGuardianship));
    // The two real portal catalog entries the group resolves to, both at the same flat fee.
    for (const id of ['probate-minor-guardianship', 'probate-adult-guardianship']) {
      expect(portal[id], id).toMatchObject({ catalogId: id, category: 'probate', price: PROBATE.probateGuardianship, active: true, consult: false });
    }
  });

  it('falls back to the website review page for unmapped services', () => {
    expect(portalHandoffUrl('adult-guardianship')).toBeNull();
    expect(buyHref('contested-probate', { source: 'test' })).toBe('/start-online/?service=contested-probate&clientType=individual&source=test');
  });

  it('sends the ILIT and Document Review to the portal to start online', () => {
    const ilit = new URL(buyHref('irrevocable-life-insurance-trust', { source: 'test' }));
    expect(`${ilit.origin}${ilit.pathname}`).toBe(PORTAL_GET_STARTED_URL);
    expect(ilit.searchParams.get('service')).toBe('estate-planning');
    expect(ilit.searchParams.get('package')).toBe('irrevocable-trust');
    expect(ilit.searchParams.get('from')).toBe('website');
    // Staff see that the client asked for an ILIT, not just any irrevocable trust.
    expect(decodeAnswers(ilit.searchParams.get('answers') as string)).toEqual({ website_service: 'Irrevocable Life Insurance Trust (ILIT)' });
    expect(buyButtonLabel('irrevocable-life-insurance-trust')).toBe('Start my trust, $4,000');

    const review = new URL(buyHref('document-review', { source: 'test' }));
    expect(`${review.origin}${review.pathname}`).toBe(PORTAL_GET_STARTED_URL);
    expect(review.searchParams.get('service')).toBe('probate');
    expect(review.searchParams.get('package')).toBe('document-review');
    expect(review.searchParams.has('answers')).toBe(false);
    expect(buyButtonLabel('document-review')).toBe('Start my review, $500');

    for (const id of ['irrevocable-life-insurance-trust', 'document-review']) {
      expect(allServices.find((s) => s.id === id)?.requiresConsultation, id).toBeFalsy();
      expect(UNMAPPED_REASONS[id], id).toBeUndefined();
    }
  });

  it('keeps quiz answers alongside the ILIT note', () => {
    const url = new URL(portalHandoffUrl('irrevocable-life-insurance-trust', { answers: { goal: 'insurance' } }) as string);
    expect(decodeAnswers(url.searchParams.get('answers') as string)).toEqual({ goal: 'insurance', website_service: 'Irrevocable Life Insurance Trust (ILIT)' });
  });

  it('passes through utm_* values and nothing else', () => {
    const url = new URL(portalHandoffUrl('will-package', { utm: { utm_source: 'google', utm_campaign: 'wills', gclid: 'x', 'utm_bad-key': 'y' } }) as string);
    expect(url.searchParams.get('utm_source')).toBe('google');
    expect(url.searchParams.get('utm_campaign')).toBe('wills');
    expect(url.searchParams.has('gclid')).toBe(false);
    expect(url.searchParams.has('utm_bad-key')).toBe(false);
    const added = new URL(withUtm(portalHandoffUrl('will-package') as string, { utm_medium: 'cpc' }));
    expect(added.searchParams.get('utm_medium')).toBe('cpc');
    expect(withUtm('/start-online/?service=x', { utm_medium: 'cpc' })).toBe('/start-online/?service=x');
  });

  it('encodes quiz answers as base64url JSON without personal details', () => {
    const answers = { situation: 'planning', married: 'yes', email: 'a@b.com', fullName: 'Pat', note: 'call me at a@b.com' };
    const url = new URL(portalHandoffUrl('trust-package', { answers }) as string);
    const encoded = url.searchParams.get('answers') as string;
    expect(encoded).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(decodeAnswers(encoded)).toEqual({ situation: 'planning', married: 'yes' });
  });

  it('drops answers that would not fit in about 1.5 KB', () => {
    const big: Record<string, string> = {};
    for (let i = 0; i < 60; i += 1) big[`question_${i}`] = 'x'.repeat(60);
    expect(encodeAnswers(big)).toBeUndefined();
    const small = encodeAnswers({ situation: 'death', docs: 'will' }) as string;
    expect(small.length).toBeLessThanOrEqual(MAX_ANSWERS_BYTES);
  });
});
