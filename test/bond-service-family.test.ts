import { describe, it, expect } from 'vitest';
import { allServices, realEstateServices, probatePackages } from '../lib/services-data';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ServicesPage from '../app/services-pricing/page';
import { serviceCategories } from '../components/services/CategorizedServicesDisplay';

describe('Bond in Lieu service family', () => {
  it('places the public pricing display entry only in Real Estate with its existing scope', () => {
    const entries = serviceCategories.flatMap(category =>
      category.packages.filter(service => service.name === 'Bond in Lieu of Probate')
        .map(service => ({ category: category.id, service })));
    expect(entries).toEqual([{
      category: 'real-estate',
      service: {
        name: 'Bond in Lieu of Probate',
        subtitle: 'When the sole estate asset is real estate',
        fixedPrice: 1500,
        includes: [
          'Title Transfer Documentation',
          'Coordination with Title Company for Out-of-Court Title Transfer',
          'Attorney consultations related to the included scope'
        ],
        note: 'Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.'
      }
    }]);
  });
  it('renders the actual pricing page bond card under Real Estate, not Probate', () => {
    const html = renderToStaticMarkup(createElement(ServicesPage));
    const section = (id: string) => html.match(new RegExp(`<section id="${id}"[^>]*>([\\s\\S]*?)</section>`))?.[1];
    const realEstate = section('realestate');
    const probate = section('probate');
    expect(realEstate).toBeDefined();
    expect(probate).toBeDefined();
    expect(realEstate).toContain('Bond in Lieu of Probate');
    expect(realEstate).toContain('$1,500');
    expect(realEstate).toContain('Surety bond premium, if required, is paid directly to the bond provider and is NOT included in the flat fee.');
    expect(realEstate).toContain('/start-online/?service=bond-in-lieu-of-probate');
    expect(probate).not.toContain('Bond in Lieu of Probate');
    expect(html.match(/<h3[^>]*>Bond in Lieu of Probate<\/h3>/g)).toHaveLength(1);
  });
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
