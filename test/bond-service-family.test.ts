import { describe, it, expect } from 'vitest';
import { allServices, realEstateServices, probatePackages } from '../lib/services-data';
import fs from 'node:fs';

describe('Bond in Lieu service family', () => {
  it('lists once under Real Estate while preserving distinct procedure and existing fee', () => {
    const matches = allServices.filter(row => row.id === 'bond-in-lieu-of-probate');
    expect(matches).toHaveLength(1);
    expect(matches[0]).toMatchObject({ category: 'real-estate', standardizedCaseType: 'Bond in Lieu of Probate', fixedPrice: 1500 });
    expect(realEstateServices).toContain(matches[0]);
    expect(probatePackages).not.toContain(matches[0]);
    expect(matches[0].description).toContain('all heirs agree');
    expect(matches[0].note).toContain('NOT included');
    expect(matches[0].description).not.toContain('paid at closing');
  });
  it('keeps the legacy categorized page in the same family without rewriting scope', () => {
    const source = fs.readFileSync('components/services/CategorizedServices.tsx', 'utf8');
    const bond = source.indexOf("id: 'bond-in-lieu-of-probate'");
    expect(bond).toBeGreaterThan(source.indexOf("id: 'real-estate'"));
    expect(source.match(/id: 'bond-in-lieu-of-probate'/g)).toHaveLength(1);
  });
});
