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

describe('the 10% online savings is easy to see next to the consultation option', () => {
  it.each([
    'components/home/HeroSection.tsx',
    'components/home/TwoPathsSection.tsx',
    'app/select-service/page.tsx',
    'app/book-consultation/page.tsx',
  ])('%s shows the 10% savings', (file) => {
    expect(readFileSync(file, 'utf8')).toMatch(/ONLINE_DISCOUNT_BADGE|ONLINE_VS_CONSULT_LINE|ONLINE_DISCOUNT_LINE/);
  });

  it('the comparison line names the 10% and leaves deeds out', async () => {
    const { ONLINE_VS_CONSULT_LINE, ONLINE_DISCOUNT_BADGE } = await import('../lib/online-signup');
    expect(ONLINE_VS_CONSULT_LINE).toContain('save 10%');
    expect(ONLINE_VS_CONSULT_LINE).toContain('deeds excluded');
    expect(ONLINE_DISCOUNT_BADGE).toBe('Save 10%');
  });
});
