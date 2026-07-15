import Link from 'next/link';
import { Scale, FileWarning, UserX, ShieldAlert, Clock, Landmark } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';
import { RATES, RETAINERS, usd, hourly } from '@/lib/pricing';
import { BOOKING_CONTESTED_PROBATE } from '@/lib/booking';
import { guardianshipCounties } from '@/lib/guardianship-counties';
import { contestedProbateFAQs } from './faqs';

const grounds = [
  { icon: Scale, title: 'Lack of Testamentary Capacity', description: 'The testator did not understand what they owned, who their natural heirs were, or what the will actually did. Often follows a dementia or terminal diagnosis.' },
  { icon: ShieldAlert, title: 'Undue Influence', description: 'Someone in a position of trust overpowered the testator’s free will. The classic pattern: a sudden new will, signed near death, prepared by the person who now inherits everything.' },
  { icon: FileWarning, title: 'Fraud or Forgery', description: 'The signature is not the testator’s, or they were deceived about what they were signing, or about facts that shaped how they left their estate.' },
  { icon: Landmark, title: 'Improper Execution', description: 'Illinois requires a will to be in writing, signed by the testator, and attested by two credible witnesses. A will that fails those formalities can be denied admission.' },
  { icon: UserX, title: 'Removal of an Executor or Administrator', description: 'For failing to account, self-dealing, wasting estate assets, refusing to distribute, or a disabling conflict of interest — often paired with a breach of fiduciary duty claim.' },
  { icon: Clock, title: 'Disputed Heirship & Estate Claims', description: 'Fights over who the legal heirs actually are, contested creditor claims, and disputes over the ownership or valuation of estate property.' },
];

export default function ContestedProbatePage() {
  return (
    <main>
      <InnerPageHero title="Contested Probate, Will Contests & Estate Litigation" subtitle="When a family cannot agree, the estate ends up in front of a judge. We represent heirs, beneficiaries, executors and administrators in Illinois probate disputes." />

      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">What contested probate actually is</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
          <p><strong className="text-[#33414E]">Probate becomes &ldquo;contested&rdquo; the moment someone formally objects to something the court is being asked to do.</strong>{' '}That might be a will being admitted, an executor being appointed, an accounting being approved, or an estate being distributed. Until someone objects, probate is administrative. Once they do, it is litigation — with discovery, evidence, motions, and, if it does not settle, a trial.</p>
          <p>Most contested estates start the same way. A parent dies. A will surfaces that nobody expected, or that leaves everything to one child, or to a caregiver, or to a new spouse. Sometimes that will is perfectly valid and the family simply does not like it — and being unhappy with your inheritance is <em>not</em> a ground to contest a will. But sometimes the person who signed it no longer understood what they were signing, or someone was standing over their shoulder while they signed it. Those are different things, and Illinois law treats them differently.</p>
          <p><strong className="text-[#33414E]">In Illinois you generally have six months from the date the will is admitted to probate to file a will contest.</strong>{' '}That deadline is short and it is unforgiving. If you think something is wrong with an estate, the worst thing you can do is wait to see how it plays out.</p>
        </div>
      </div></div></section>

      <section className="py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-4 text-center">Grounds for a Will Contest in Illinois</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">A will contest is not an appeal against an outcome you dislike. It is a claim that the will itself is legally defective. These are the recognized grounds.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{grounds.map((g) => (<ServiceCard key={g.title} icon={g.icon} title={g.title} description={g.description} />))}</div>
      </div></div></section>

      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">How we bill contested matters — and why it is not a flat fee</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <p>Almost everything this firm does is flat-fee. Contested probate is the exception, and we want to be straightforward about why.</p>
          <p><strong className="text-[#33414E]">We can only quote a fixed price for work whose scope we control.</strong>{' '}An uncontested probate has a knowable list of filings and hearings, so we can price it to the dollar. A contested matter does not. The other side decides how many motions to file, whether to fight discovery, whether to settle at mediation or push it to trial. Any firm that quotes you a flat fee for a court fight is guessing.</p>
          <p>We would rather tell you the truth up front and bill you honestly for the hours we actually work.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border-2 border-[#33414E] rounded-xl p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">To begin</p><p className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#33414E] mb-2">{usd(RETAINERS.contestedProbate)}</p><p className="text-slate-600 text-sm">Minimum evergreen retainer, replenished as the matter proceeds.</p></div>
          <div className="border border-slate-200 rounded-xl p-6 bg-[#f8f9fa]"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Hourly rates</p><p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">{hourly(RATES.attorneyHourly)} — attorney</p><p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-2">{hourly(RATES.paralegalHourly)} — paralegal</p><p className="text-slate-600 text-sm">You receive an itemized bill so you can see exactly what you are paying for. Costs — filing, process server, transcripts — are billed to you as expenses.</p></div>
        </div>
        <div className="mt-8 max-w-4xl border-l-4 border-[#4A708B] bg-[#f8f9fa] p-6 rounded-r-lg"><p className="font-bold text-[#33414E] mb-2">If a flat-fee matter of ours becomes contested</p><p className="text-slate-600 text-sm leading-relaxed">It converts to hourly billing against a retainer — and{' '}<strong>every dollar of the flat fee you have already paid is credited against that retainer.</strong>{' '}We tell you this before you engage us, and it is written into your engagement agreement.</p></div>
        <div className="mt-8 max-w-4xl text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-6"><p><strong className="text-slate-700">A note on court approval of fees.</strong> Where attorney fees are paid out of the decedent&rsquo;s estate, Illinois law requires that those fees be reasonable and approved by the court (755 ILCS 5/27-2). Where a fee is paid personally — for example, by an heir hiring us out of their own pocket — it is governed by our engagement agreement instead.</p></div>
      </div></div></section>

      <section className="py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-4 text-center">Contested Probate by County</h2>
        <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">We litigate estates throughout Illinois, with a concentration in Chicago and the collar counties.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">{guardianshipCounties.map((c) => (<Link key={c.slug} href={`/probate/${c.slug}-county/`} className="block border border-slate-200 bg-white rounded-lg px-5 py-4 hover:border-[#33414E] hover:shadow-sm transition-all"><span className="font-bold text-[#33414E]">Probate in {c.county}</span><span className="block text-sm text-slate-500 mt-1">{c.seat} · {c.courthouseName}</span></Link>))}</div>
      </div></div></section>

      <section className="py-14 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-6">Related</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/chicago-probate-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Illinois probate &amp; estate administration</Link><span className="text-slate-300">|</span>
          <Link href="/adult-guardianship-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Adult guardianship</Link><span className="text-slate-300">|</span>
          <Link href="/minor-guardianship-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Minor guardianship</Link><span className="text-slate-300">|</span>
          <Link href="/blog/how-to-contest-a-will-in-illinois/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">How to contest a will in Illinois</Link><span className="text-slate-300">|</span>
          <Link href="/services-pricing/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">All services &amp; pricing</Link>
        </div>
      </div></div></section>

      <CTABanner title="Think something is wrong with an estate?" subtitle="The Illinois will contest deadline is six months from admission to probate. Book a consultation before it runs." bookingUrl={BOOKING_CONTESTED_PROBATE} ctaLabel="Schedule a Contested Probate Consultation" />
      <FAQAccordion title="Contested Probate & Will Contests — Frequently Asked Questions" items={contestedProbateFAQs} />
    </main>
  );
}
