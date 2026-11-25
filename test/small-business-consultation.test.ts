import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// Mary (Nov 24 2026): small business gets its own consultation on the booking page.
const page = readFileSync('app/book-consultation/page.tsx', 'utf8');

describe('small business consultation', () => {
  it('is offered on the booking page with its own team calendar', () => {
    expect(page).toContain("id: 'small-business'");
    expect(page).toContain('id="my-lunacal-inline-initial-consult-smallbusiness"');
    expect(page).toContain('calLink: "team/illinois-estate-law/initial-consult-smallbusiness"');
  });

  it('opens straight on the small business calendar from the small business page', () => {
    expect(readFileSync('app/small-business/page.tsx', 'utf8')).toContain('href="/book-consultation/?type=small-business"');
    expect(page).toContain("new URLSearchParams(window.location.search).get('type')");
  });

  it('every consultation option has a calendar', () => {
    const options = [...page.matchAll(/^\s{4}id: '([a-z-]+)',$/gm)].map((m) => m[1]);
    expect(options).toContain('small-business');
    for (const id of options) expect(page).toContain(`'${id}': 'my-lunacal-inline-`);
  });
});

describe('the small business calendar on the time picker', () => {
  it('books the team event Mary made', async () => {
    const { CONSULTS, isCaseType } = await import('../lib/lunacal-booking');
    expect(isCaseType('small-business')).toBe(true);
    expect(CONSULTS['small-business']).toMatchObject({ eventTypeId: 22293, slug: 'initial-consult-smallbusiness' });
  });
});
