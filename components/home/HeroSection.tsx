'use client';

import Link from 'next/link';
import Image from 'next/image';

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

          <h1 className="text-[38px] sm:text-[52px] md:text-[62px] lg:text-[72px] font-extrabold text-white leading-[1.05] mb-6">
            We Help Illinois Families<br className="hidden sm:block" /> Plan, Protect &amp; Pass On<br className="hidden sm:block" /> What Matters.
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
              '100% Flat-Fee',
              'All of Illinois',
              'Same-Week Appointments',
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7E9CC0]" />
                <span className="text-white/75 text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
