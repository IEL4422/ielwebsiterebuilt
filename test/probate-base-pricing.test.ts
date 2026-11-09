import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { CONTESTED, CONTESTED_EVENT_FEES, CONTESTED_PROBATE_FEE_NOTE, CONTESTED_GUARDIANSHIP_FEE_NOTE, PROBATE } from '../lib/pricing';
import { probatePackages, guardianshipServices } from '../lib/services-data';

const source = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

describe('prospective probate base pricing', () => {
  it('uses $5,500 for standard, large-estate, and contested probate bases', () => {
    expect(PROBATE.standard).toBe(5500);
    expect(probatePackages.find(service => service.id === 'standard-probate')?.fixedPrice).toBe(5500);
    expect(CONTESTED.probateInitialFlatFee).toBe(5500);
    expect(probatePackages.find(service => service.id === 'contested-probate')?.pricingLabel).toBe('Starts with $5,500');
    expect(PROBATE.largeEstateBase).toBe(5500);
    expect(PROBATE.largeEstatePercent).toBe(0.5);
    expect(PROBATE.largeEstateThreshold).toBe(4000000);
    expect(CONTESTED.guardianshipInitialFlatFee).toBe(5000);
    expect(guardianshipServices.find(service => service.id === 'contested-guardianship')?.pricingLabel).toBe('Starts with $5,000');
  });

  it('keeps all event amounts unchanged and prevents duplicate initial-scope wording', () => {
    expect(CONTESTED_EVENT_FEES.map(fee => [fee.id, fee.amount])).toEqual([
      ['subpoena', 750], ['nonroutine-unopposed-motion', 1250], ['discovery-citation', 3500],
      ['deposition', 3500], ['contested-motion', 3500], ['mediation', 3500],
      ['initial-contested-scope', 5000], ['written-discovery', 5000], ['extended-expert-deposition', 5000],
      ['dispositive-motion', 5000], ['evidentiary-hearing', 5000], ['additional-trial-day', 5000],
      ['formal-proof-will', 5500], ['contested-creditor-claim', 10000], ['contested-accounting', 12500],
      ['will-trust-construction', 12500], ['contested-heirship', 15000], ['asset-recovery-title-citation', 20000],
      ['full-will-contest-pretrial', 25000], ['will-contest-trial', 25000], ['fiduciary-removal-surcharge', 25000],
    ]);
    expect(CONTESTED_PROBATE_FEE_NOTE).toContain('Existing signed engagements are honored');
    expect(CONTESTED_PROBATE_FEE_NOTE).toContain('not charged again');
    expect(CONTESTED_GUARDIANSHIP_FEE_NOTE).toContain('$5,000');
  });

  it('does not turn contested probate into a purchase or add a base plus event charge', () => {
    const contested = probatePackages.find(service => service.id === 'contested-probate');
    expect(contested?.fixedPrice).toBeUndefined();
    const recommendation = source('app/recommended-service/page.tsx');
    expect(recommendation).toMatch(/serviceId: 'contested-probate',\s*requiresConsultation: true/);
    expect(recommendation).toContain('price: usd(PROBATE.standard)');
    expect(contested?.description).toContain('not charged again');
  });

  it('keeps the generated pricing sheet and AI summary aligned', () => {
    const sheet = source('public/pricing-sheet.html');
    expect(sheet).toMatch(/Large Estate Probate<\/div>[\s\S]*?\$5,500 \+ 0\.5% of Estate Value/);
    expect(source('public/llms.txt')).toContain('**$5,500 plus 0.5% of estate value**');
    expect(source('public/llms.txt')).not.toContain('$6,500 plus 0.5%');
    expect(sheet).not.toContain('$6,500 + 0.5%');
    expect(sheet).toMatch(/Contested Probate<\/div>[\s\S]*?Starts with \$5,500/);
    expect(sheet).toMatch(/Contested Guardianship<\/div>[\s\S]*?Starts with \$5,000/);
    expect(source('public/llms.txt')).toContain('**$5,500** Standard Probate');
  });
});
