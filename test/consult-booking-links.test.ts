import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// Mary (Nov 19): booking a consultation must stay easy for anyone who wants one.
// Each page where a visitor chooses how to start keeps a link to the booking page.
const PAGES = [
  'components/layout/Header.tsx',
  'components/home/HeroSection.tsx',
  'components/services/ServicesPricingModern.tsx',
  'app/select-service/page.tsx',
  'app/recommended-service/page.tsx',
];

describe('consultation booking stays one click away', () => {
  it.each(PAGES)('%s links to the booking page', (file) => {
    expect(readFileSync(file, 'utf8')).toContain('/book-consultation/');
  });

  it('the service selection page offers a consultation in its intro and its closing box', () => {
    const source = readFileSync('app/select-service/page.tsx', 'utf8');
    expect(source.match(/href="\/book-consultation\/"/g)?.length).toBeGreaterThanOrEqual(2);
  });
});
