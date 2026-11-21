import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { HeroLogo } from '../components/home/HeroLogo';
import { HeroSection } from '../components/home/HeroSection';
import { Header } from '../components/layout/Header';

describe('IEL logo presentation', () => {
  it('uses the original local artwork with a decorative, non-interactive reveal', () => {
    const html = renderToStaticMarkup(<HeroLogo />);
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('focusable="false"');
    expect(html).toContain('/brands/illinois-estate-law.png');
    expect(html).toContain('mask="url(#iel-hero-handwriting)"');
    expect((html.match(/<image /g) || []).length).toBe(2);
  });
  it('keeps homepage messaging and both calls to action', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('We Help Illinois Families');
    expect(html).toContain('Get Started Online');
    expect(html).toContain('Book a Free Consultation');
    expect(html).toContain('Flat-fee, virtual, same week.');
  });
  it('keeps the 10% online savings and package prices out of the homepage hero (Mary, Nov 21)', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).not.toMatch(/10%/);
    expect(html).not.toContain('Will packages from');
    expect(html).not.toContain('trust packages from');
    expect(html).not.toMatch(/\$\d/);
  });
  it('enlarges only the desktop header image', () => {
    const html = renderToStaticMarkup(<Header />);
    expect(html).toContain('h-24 w-auto');
    expect(html).toContain('h-[112px]');
    expect(html).toContain('max-w-[1280px] px-5');
    expect(html).toContain('flex items-center gap-4');
    expect(html).toContain('Toggle menu');
  });
  it('only animates when allowed, settles once, and preserves a static fallback', () => {
    const css = readFileSync('components/home/HeroLogo.module.css', 'utf8');
    expect(css).toContain('prefers-reduced-motion: no-preference');
    expect(css).toContain('.complete { opacity: 1; }');
    expect(css).not.toContain('infinite');
    expect(css).toContain('min-width: 1280px');
    expect(css).toContain('pointer-events: none');
  });
});
