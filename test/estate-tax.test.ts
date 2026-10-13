import { describe, expect, it } from 'vitest';
import { calculateIllinoisEstateTax as ilTax, estimateFederalEstateTax, parseTaxInput } from '../lib/estate-tax';

describe('Illinois interrelated estate tax', () => {
  // AG CalcHtm.js outputs verified 2026-10-13. Values below are dollars;
  // allow < $1 for the official iterative calculator's stopping tolerance.
  it.each([
    [4_000_000, 0, 0], [4_000_100, 0, 28.5714],
    [4_100_000, 0, 28_571.4286], [4_500_000, 0, 142_857.1429],
    [5_000_000, 0, 285_714.2857], [6_000_000, 0, 456_071.4286],
    [7_000_000, 0, 565_602.8369], [8_000_000, 0, 680_633.8028],
    [10_000_000, 0, 926_923.0769], [15_000_000, 0, 1_609_310.3448],
    [3_000_100, 1_000_000, 28.5714],
  ])('estate %s plus gifts %s gives %s', (estate, gifts, expected) => {
    expect(ilTax(estate, gifts).tax).toBeCloseTo(expected, 2);
  });
  it('does not use gifts as part of the credit-table estate base', () => {
    expect(ilTax(6_000_000, 2_000_000).tax).toBeCloseTo(ilTax(6_000_000).tax, 6);
    expect(ilTax(0, 6_000_000).tax).toBe(0);
  });
  it('apportions the completed tax for residents and nonresidents', () => {
    expect(ilTax(5_000_000, 0, 50).tax).toBeCloseTo(142857.142857, 5);
    expect(ilTax(6_000_000, 0, 0).tax).toBe(0);
  });
  it('is continuous and monotone through the threshold and bracket transitions', () => {
    let previous = 0;
    for (let estate = 3_900_000; estate <= 30_000_000; estate += 10_000) {
      const tax = ilTax(estate).tax;
      expect(tax).toBeGreaterThanOrEqual(previous);
      expect(tax - previous).toBeLessThan(3000);
      expect(tax).toBeLessThan(estate);
      previous = tax;
    }
  });
  it.each([[-1, 0, 100], [NaN, 0, 100], [Infinity, 0, 100], [6e6, -1, 100], [6e6, 0, 101]])('rejects invalid inputs %s %s %s', (estate, gifts, pct) => {
    expect(() => ilTax(estate, gifts, pct)).toThrow(RangeError);
  });
  it('distinguishes the reported shortcut from the correct result', () => {
    expect(402800 + .12 * (6_000_000 - 5_040_000)).toBe(518000);
    expect(Math.round(ilTax(6_000_000).tax)).toBe(456071);
  });
});

describe('federal estimate and validated inputs', () => {
  it('deducts actual apportioned Illinois tax, not the full preallocation tax', () => {
    const state = ilTax(20_000_000, 0, 50).tax;
    expect(estimateFederalEstateTax(20_000_000, 0, state, 15_000_000)).toBeCloseTo((5_000_000 - state) * .4, 5);
    expect(estimateFederalEstateTax(6_000_000, 0, ilTax(6_000_000).tax, 15_000_000)).toBe(0);
  });
  it.each(['abc', '-5', '6 million', '6,00,000', '1e6', 'Infinity', '1.2.3', ''])('rejects malformed amount %s', input => {
    expect(parseTaxInput(input)).toBeNaN();
  });
  it('accepts conventional formatted money and optional zero gifts', () => {
    expect(parseTaxInput('$6,000,000.00')).toBe(6_000_000);
    expect(parseTaxInput('50.5')).toBe(50.5);
    expect(parseTaxInput('0')).toBe(0);
    expect(parseTaxInput('', true)).toBe(0);
  });
});
