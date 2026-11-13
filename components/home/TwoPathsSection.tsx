import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PROBATE, usd } from '@/lib/pricing';

/** A focused probate introduction, without another competing service chooser. */
export function TwoPathsSection() {
  return (
    <section id="probate-help" aria-labelledby="probate-help-heading" className="bg-[#F6F9FC] py-14 lg:py-20">
      <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#547298]">Help after a loss</p>
            <h2 id="probate-help-heading" className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-[#33414E] sm:text-4xl">You don&rsquo;t have to figure out probate alone.</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">Not sure whether an estate needs probate? Start with a conversation. We will help identify the appropriate path before substantive work begins.</p>
            <ol className="mt-8 space-y-6">
              {[
                ['Tell us about the estate', 'Share what you know. You do not need every document or answer to ask for help.'],
                ['Understand your next step', 'We review the situation and explain the recommended service, scope, and fee.'],
                ['Move forward with guidance', 'When you engage us for standard probate, we handle the court process from opening through closing.'],
              ].map(([title, detail], index) => (
                <li key={title} className="flex gap-4">
                  <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7E9CC0]/40 bg-white text-sm font-bold text-[#547298]">{index + 1}</span>
                  <div><h3 className="font-bold text-[#33414E]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{detail}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-[#547298]">Standard Probate</p>
            <p className="mt-3 text-5xl font-extrabold tracking-tight text-[#33414E]">{usd(PROBATE.standard)} <span className="text-base font-medium tracking-normal text-slate-600">flat fee</span></p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">Full uncontested Illinois probate for estates valued at {usd(PROBATE.largeEstateThreshold)} or less.</p>
            <ul className="my-6 space-y-3 border-y border-slate-100 py-6">
              {['Court filings and appearances', 'Creditor publication and required notices', 'Estate accounting and administration', 'Court filing fees and applicable recording fees'].map(item => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#547298]" />{item}</li>
              ))}
            </ul>
            <p className="mb-6 text-xs leading-relaxed text-slate-600">A required surety-bond premium is separate. Contested matters and estates over {usd(PROBATE.largeEstateThreshold)} have different pricing and scope. Your written agreement confirms the services and fee before work begins.</p>
            <Link href="/book-consultation/" rel="nofollow" data-home-cta="probate-consultation" className="flex items-center justify-center gap-2 rounded-full bg-[#33414E] px-5 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-[#232D36] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#547298]">Talk with us about probate <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link>
            <div className="mt-4 text-center"><Link href="/chicago-probate-lawyer/" data-home-cta="probate-details" className="text-sm font-semibold text-[#547298] underline underline-offset-4">View probate services and full details</Link></div>
            <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">Free virtual consultation. In-person meetings are available for current clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
