import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { HeroSection } from '../components/home/HeroSection';
import { TwoPathsSection } from '../components/home/TwoPathsSection';
import { QuickFactsBar } from '../components/home/QuickFactsBar';
import { ContactSection } from '../components/home/ContactSection';
import { PROBATE, usd } from '../lib/pricing';

describe('organized homepage probate path', () => {
  it('shows both primary needs without waiting for a rotating headline', () => {
    const html = renderToStaticMarkup(<HeroSection />);
    expect(html).toContain('Find your way through probate.');
    expect(html).toMatch(/href="\/chicago-probate-lawyer\/"[^>]*data-home-cta="probate-path"/);
    expect(html).toContain('A loved one passed away');
    expect(html).toContain('I want to plan ahead');
    expect(html).toContain('href="/estate-planning/"');
    expect(html).toContain('href="tel:+13123730731"');
    expect(html).toContain('Book a Free Consultation');
  });
  it('uses canonical price and includes scope and separate bond premium', () => {
    const html = renderToStaticMarkup(<TwoPathsSection />);
    expect(html).toContain(usd(PROBATE.standard));
    expect(html).toContain(usd(PROBATE.largeEstateThreshold));
    for (const text of ['uncontested Illinois probate', 'surety-bond premium is separate', 'Contested matters', 'different pricing and scope', 'Court filing fees', 'Creditor publication']) expect(html).toContain(text);
    expect(readFileSync('components/home/TwoPathsSection.tsx', 'utf8')).not.toMatch(/\$5,000|\$4,000,000/);
  });
  it('explains steps without assuming probate or promising an outcome', () => {
    const html = renderToStaticMarkup(<TwoPathsSection />);
    expect(html).toContain('whether an estate needs probate');
    for(const text of ['Tell us about the estate', 'Understand your next step', 'Move forward with guidance', 'When you engage us']) expect(html).toContain(text);
  });
  it('matches the existing current-client in-person policy', () => {
    const html = renderToStaticMarkup(<><TwoPathsSection /><QuickFactsBar /></>);
    expect(html).toContain('Free virtual consultation');
    expect(html).toContain('In-person meetings are available for current clients');
    expect(html).not.toContain('Meet virtually or in person');
    expect(html).not.toContain('Virtual &amp; in-person available');
  });
  it('puts focused probate help before promotional blocks without losing services or resilience', () => {
    const src=readFileSync('app/page.tsx','utf8');
    expect(src.indexOf('<TwoPathsSection />')).toBeLessThan(src.indexOf('<LogosCarousel />'));
    expect(src).toContain('<PracticeAreasSection />');
    expect(src).toContain("export const dynamic = 'force-dynamic'");
    expect(src).toContain('<Suspense fallback={null}>');
  });
  it('keeps late contact relevant to both audiences and monitor intact', () => {
    const html = renderToStaticMarkup(<ContactSection />);
    expect(html).toContain('handling a loved one');
    expect(html).toContain('id="form-field-message"');
  });
});
