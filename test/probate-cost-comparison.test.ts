import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { PROBATE, usd } from '../lib/pricing';

describe('Probate cost article illustrative comparison', () => {
  const source = readFileSync('app/blog/how-much-does-probate-cost-in-illinois/page.tsx', 'utf8');
  it('calculates the comparison using the current package price', () => {
    expect(42 * 350).toBe(14700);
    expect(usd(42 * 350 - PROBATE.standard)).toBe('$9,200');
    expect(source).toContain('{usd(42 * 350 - PROBATE.standard)}');
    expect(source).not.toContain('saving over $9,000.');
  });
  it('does not present the scenario as a verified client result or identical work', () => {
    expect(source).toContain('Hypothetical fee comparison:');
    expect(source).toContain('not an actual client result or a prediction of savings');
    expect(source).toContain('Compare the written scope and included costs');
    expect(source).not.toContain('Real-world example:');
    expect(source).not.toContain('An hourly firm billed 42 hours');
    expect(source).not.toContain('The legal work is identical;');
  });
});

