import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { BUSINESS } from '../lib/pricing';

describe('business pricing', () => {
  it('lists the business packages, LLC formation and trademark registration with government fees included', () => {
    expect(BUSINESS).toEqual({ llcFormation: 750, trademarkRegistration: 1500, smallBusinessPackage: 2000, businessEssentials: 1000 });
    const sheet = readFileSync('scripts/pricing-sheet.template.html', 'utf8');
    expect(sheet).toContain('{{LLC_FORMATION}}');
    expect(sheet).toContain('{{TRADEMARK_REGISTRATION}}');
    expect(sheet).toContain('{{SMALL_BUSINESS_PACKAGE}}');
    expect(sheet).toContain('{{BUSINESS_ESSENTIALS}}');
    const llms = readFileSync('public/llms.txt', 'utf8');
    expect(llms).toContain('$750 LLC Formation');
    expect(llms).toContain('$1,500 Trademark Registration');
    expect(llms).toContain('$2,000 Small Business Package');
    expect(llms).toContain('$1,000 Business Essentials Package');
  });
});
