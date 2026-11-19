import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { BUSINESS } from '../lib/pricing';

describe('business pricing', () => {
  it('lists LLC formation and trademark registration with government fees included', () => {
    expect(BUSINESS).toEqual({ llcFormation: 750, trademarkRegistration: 1500 });
    const sheet = readFileSync('scripts/pricing-sheet.template.html', 'utf8');
    expect(sheet).toContain('{{LLC_FORMATION}}');
    expect(sheet).toContain('{{TRADEMARK_REGISTRATION}}');
    const llms = readFileSync('public/llms.txt', 'utf8');
    expect(llms).toContain('$750 LLC Formation');
    expect(llms).toContain('$1,500 Trademark Registration');
  });
});
