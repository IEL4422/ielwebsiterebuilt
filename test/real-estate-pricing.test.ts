import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { realEstateServices } from '../lib/services-data';
import { REAL_ESTATE } from '../lib/pricing';

const EXPECTED = [
  ['Sale Representation', 750],
  ['For Sale By Owner (FSBO) Representation', 1500],
  ['Bond in Lieu of Probate', 1500],
] as const;

describe('public real-estate pricing', () => {
  it('offers exactly the three approved fee structures', () => {
    expect(realEstateServices).toHaveLength(3);
    expect(realEstateServices.map(({ name, fixedPrice }) => [name, fixedPrice]).sort())
      .toEqual([...EXPECTED].sort());
    expect(REAL_ESTATE).toEqual({
      saleRepresentation: 750,
      fsboRepresentation: 1500,
      bondInLieuOfProbate: 1500,
    });
  });

  it('explains the scope and exclusions of every option', () => {
    const sale = realEstateServices.find(service => service.name === 'Sale Representation')!;
    expect(sale.description).toContain('licensed listing agent');
    expect(sale.description).toContain('does not include buyer representation');
    expect(sale.includes.join(' ')).toContain('closing');
    expect(sale.note).toContain('third-party closing costs');

    const fsbo = realEstateServices.find(service => service.id === 'fsbo-representation')!;
    expect(fsbo.description).toContain('without a listing agent');
    expect(fsbo.description).toContain('does not act as a broker');
    expect(fsbo.note).toContain('marketing');

    const bond = realEstateServices.find(service => service.id === 'bond-in-lieu-of-probate')!;
    expect(bond.description).toContain('only asset requiring administration is real estate');
    expect(bond.description).toContain('all heirs agree');
    expect(bond.description).toContain('not a full probate');
    expect(bond.note).toContain('surety bond premium');
  });

  it('keeps the printable pricing sheet limited to the same three options', () => {
    const source = readFileSync('scripts/pricing-sheet.template.html', 'utf8');
    const section = source.split('REAL ESTATE -->')[1].split('<div class="footer">')[0];
    const names = [...section.matchAll(/<div class="service-name">([^<]+)<\/div>/g)].map(match => match[1]);
    expect(names).toEqual(EXPECTED.map(([name]) => name));
    expect(section).not.toMatch(/Multi-Unit|Nonstandard Title|Buyer or Seller/);
  });
});
