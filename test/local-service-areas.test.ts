import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { cityLocations } from '../lib/locations-data';
import { guardianshipCounties } from '../lib/guardianship-counties';

describe('local service-area content', () => {
  it('keeps every city slug and local note unique', () => {
    expect(new Set(cityLocations.map((city) => city.slug)).size).toBe(cityLocations.length);
    expect(new Set(cityLocations.map((city) => city.localNote)).size).toBe(cityLocations.length);
  });

  it('gives every city substantive, distinct local planning considerations', () => {
    const allConsiderations = cityLocations.flatMap((city) => city.localPlanningConsiderations);

    for (const city of cityLocations) {
      expect(city.localPlanningConsiderations).toHaveLength(3);
      city.localPlanningConsiderations.forEach((consideration) => {
        expect(consideration.length).toBeGreaterThan(60);
      });
    }

    expect(new Set(allConsiderations).size).toBe(allConsiderations.length);
  });

  it('only links nearby communities that have a real city guide', () => {
    const cityNames = new Set(cityLocations.map((city) => city.city));

    for (const city of cityLocations) {
      expect(city.nearbyCommunities.length).toBeGreaterThan(0);
      expect(city.nearbyCommunities).not.toContain(city.city);
      city.nearbyCommunities.forEach((nearby) => expect(cityNames.has(nearby)).toBe(true));
    }
  });

  it('keeps county probate and guardianship hubs aligned', () => {
    const countySlugs = guardianshipCounties.map((county) => county.slug).sort();
    expect(countySlugs).toEqual(['cook', 'dupage', 'kane', 'lake', 'mchenry', 'will']);
  });

  it('keeps the location hero typography aligned with the site heading system', () => {
    const hero = readFileSync('components/geo/LocationHero.tsx', 'utf8');
    expect(hero).toContain("font-['Plus_Jakarta_Sans']");
    expect(hero).toContain('text-3xl');
    expect(hero).toContain('sm:text-4xl');
    expect(hero).toContain('lg:text-5xl');
    expect(hero).toContain('font-extrabold');
    expect(hero).not.toContain('font-normal text-white');
  });

  it('does not publish unsupported speed or attorney-review claims', () => {
    const hero = readFileSync('components/geo/LocationHero.tsx', 'utf8');
    const cityPage = readFileSync('app/[slug]/page.tsx', 'utf8');
    const localInsights = readFileSync('components/geo/CityLocalInsights.tsx', 'utf8');
    const serviceAreas = readFileSync('app/areas-we-serve/page.tsx', 'utf8');
    const combined = [hero, cityPage, localInsights, serviceAreas].join('\n');

    expect(combined).not.toContain('Same-Week Appointments');
    expect(combined).not.toContain('Most estate plans are completed within');
    expect(combined).not.toContain('reviewed by Illinois attorney');
    expect(combined).not.toContain('reviewedBy');
  });
});
