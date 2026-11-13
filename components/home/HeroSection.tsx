import Link from 'next/link';
import Image from 'next/image';
import { FEE_STRUCTURE_NOTE, FEE_STRUCTURE_HREF } from '@/lib/fee-structure';

export function HeroSection() {
  return (
    <section className="relative  bg-[#232D36]">
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

      <div className="relative mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0 flex flex-col justify-center  py-12 lg:py-16">
        <div className="max-w-4xl">
          <p className="text-[#7E9CC0] font-semibold text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            Estate Planning &middot; Trusts &middot; Probate &middot; Real Estate
          </p>

          <h1 className="text-[34px] sm:text-[50px] lg:text-[60px] font-extrabold text-white leading-[1.12] tracking-tight mb-6">
            Plan for the future.<br /><span className="text-[#B6CCE5]">Find your way through probate.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl mb-3 leading-relaxed">
            Clear guidance for Illinois families, whether you are protecting the people you love or settling a loved one&rsquo;s estate.
          </p>

          <div className="grid gap-4 md:grid-cols-2 my-8" aria-label="Find your starting point">
            <Link href="/chicago-probate-lawyer/" data-home-cta="probate-path" className="rounded-2xl bg-white p-6 text-[#232D36] transition-colors hover:bg-[#EDF3FA] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#B6CCE5]">
              <span className="block text-xl font-bold">A loved one passed away</span>
              <span className="mt-2 block text-sm leading-relaxed text-slate-600">Understand probate, your responsibilities, and your next step.</span>
              <span className="mt-4 block text-sm font-bold text-[#547298]">Explore probate help →</span>
            </Link>
            <Link href="/estate-planning/" data-home-cta="planning-path" className="rounded-2xl border border-white/30 bg-white/5 p-6 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#B6CCE5]">
              <span className="block text-xl font-bold">I want to plan ahead</span>
              <span className="mt-2 block text-sm leading-relaxed text-slate-200">Explore wills, trusts, and a plan that reflects your wishes.</span>
              <span className="mt-4 block text-sm font-bold text-[#B6CCE5]">Explore estate planning →</span>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Link
              href="/get-started/"
              className="inline-flex items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors text-center"
            >
              See All Services
            </Link>
            <Link
              href="/book-consultation/"
              rel="nofollow"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/80 hover:border-white text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors text-center"
            >
              Book a Free Consultation
            </Link>
          </div>

          <a href="tel:+13123730731" data-home-cta="hero-call" className="inline-block mb-7 py-2 text-sm font-semibold text-white underline underline-offset-4">Prefer to call? (312) 373-0731</a>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl">
            {[
              'Free Consultation',
              'Transparent Pricing*',
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
          <p className="mt-5 max-w-xl text-slate-300 text-xs leading-relaxed">
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
