import React from 'react';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { existsSync, readFileSync } from 'node:fs';
import AboutPage, { metadata } from '@/app/about/page';
import AdultGuardianshipLawyerPage from '@/app/adult-guardianship-lawyer/page';
import { ATTORNEYS, personSchema } from '@/lib/seo';

const formerAttorney = /Anna(?: M\.)? Rafanelli|anna@illinoisestatelaw\.com|anna-rafanelli/i;

describe('current public attorney roster', () => {
  it('shows the current attorneys and preserves the support team on the About page', () => {
    const html = renderToStaticMarkup(<AboutPage />);
    for (const name of ['Mary Liberty', 'Yassmin Koudmani', 'Gina Kondraros', 'Jessica', 'Maggie Patterson']) {
      expect(html).toContain(name);
    }
    expect(html).not.toMatch(formerAttorney);
    expect(JSON.stringify(metadata)).not.toMatch(formerAttorney);
  });

  it('publishes structured attorney profiles only for the current attorneys', () => {
    expect(ATTORNEYS.map((attorney) => attorney.name)).toEqual(['Mary Liberty', 'Yassmin Koudmani']);
    expect(JSON.stringify(ATTORNEYS.map(personSchema))).not.toMatch(formerAttorney);
  });

  it('removes the former attorney feature while preserving adult guardianship services', () => {
    const html = renderToStaticMarkup(<AdultGuardianshipLawyerPage />);
    expect(html).not.toMatch(formerAttorney);
    expect(html).toContain('Full Adult Guardianship');
    expect(html).toContain('Emergency + Full Adult Guardianship');
    expect(html).toContain('/book-consultation/');
    expect(html).toContain('emergency-temporary-adult-guardianship');
    expect(html).not.toContain('Licensed in Illinois and Indiana');
  });

  it('keeps the public firm summary and AI profile current and removes the former photo', () => {
    for (const path of ['app/illinois-estate-law-answers/page.tsx', 'public/llms.txt']) {
      const text = readFileSync(path, 'utf8');
      expect(text, path).not.toMatch(formerAttorney);
      expect(text, path).toContain('Mary Liberty');
      expect(text, path).toContain('Yassmin Koudmani');
    }
    expect(existsSync('public/attorneys/anna-rafanelli.jpg')).toBe(false);
  });
});
