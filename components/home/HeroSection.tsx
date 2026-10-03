'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FEE_STRUCTURE_NOTE, FEE_STRUCTURE_HREF } from '@/lib/fee-structure';

const PRACTICE_AREAS = [
  'Estate Planning',
  'Probate',
  'Trusts',
  'Guardianship',
  'Real Estate',
  'Wills',
  'Trust Administration',
] as const;

function RotatingPracticeArea() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    const interval = window.setInterval(() => {
      setVisible(false);
      fadeTimer = setTimeout(() => {
        setIndex((current) => (current + 1) % PRACTICE_AREAS.length);
        setVisible(true);
      }, 350);
    }, 2400);

    return () => {
      window.clearInterval(interval);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className={`block min-w-[20ch] text-[#9DB6D6] transition-opacity duration-300 sm:inline-block ${visible ? 'opacity-100' : 'opacity-0'}`}
    >
      {PRACTICE_AREAS[index]}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[580px] md:min-h-[660px] lg:min-h-[700px] bg-[#232D36]">
      <div className="absolute inset-0">
        <Image
          src="https://i.imgur.com/UpbuKrM.png"
          alt="Chicago Estate Planning"
          fill
          className="object-cover object-center lg:hidden opacity-20"
          priority
        />
        <Image
          src="/hero_option_1_hq.png"
          alt="Chicago Estate Planning"
          fill
          className="hidden lg:block object-cover object-center opacity-20"
          priority
        />
      </div>

      <div className="relative mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0 flex flex-col justify-center min-h-[580px] md:min-h-[660px] lg:min-h-[700px] py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[#7E9CC0] font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            Estate Planning &middot; Trusts &middot; Probate &middot; Real Estate
          </p>

          <h1
            aria-label="Illinois estate planning, probate, guardianship, and real estate attorneys"
            className="text-[32px] sm:text-[50px] md:text-[62px] lg:text-[68px] font-extrabold text-white leading-[1.06] mb-6"
          >
            <span aria-hidden="true">We Help Illinois Families<br className="hidden sm:block" /> With{' '}</span>
            <RotatingPracticeArea />
          </h1>

          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl mb-3 leading-relaxed">
            Whether you&rsquo;re drafting your first will, setting up a trust, navigating probate, or buying or selling your home &mdash; we&rsquo;re here for every step, with flat-fee pricing and same-week appointments.
          </p>

          <p className="text-[#7E9CC0] text-sm sm:text-base mb-8 leading-relaxed">
            Flat-fee, virtual, same week.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Link
              href="/get-started/"
              className="inline-flex items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors text-center"
            >
              Get Started Online
            </Link>
            <Link
              href="/book-consultation/"
              rel="nofollow"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/80 hover:border-white text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors text-center"
            >
              Book a Free Consultation
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl">
            {[
              'Free Consultation',
              '100% Flat-Fee*',
              'All of Illinois',
              'Same-Week Appointments',
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7E9CC0]" />
                <span className="text-white/75 text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/*
            The asterisk. Previously this claim read "No hourly billing, ever" — which
            was false, and which the firm's own services page already contradicted.
            The flat-fee positioning stays (it is true for the overwhelming majority of
            the work); the absolute claim goes. Wording lives in lib/fee-structure.ts.
          */}
          <p className="mt-5 max-w-xl text-white/50 text-[11px] leading-relaxed">
            <Link
              href={FEE_STRUCTURE_HREF}
              className="hover:text-white/80 underline underline-offset-2 decoration-white/25 transition-colors"
            >
              * {FEE_STRUCTURE_NOTE}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
