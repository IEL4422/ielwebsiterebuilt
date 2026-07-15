import Link from 'next/link';
import { Users, HeartHandshake, Clock, ShieldAlert, FileText, CircleCheck } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';
import { GUARDIANSHIP_FLAT, RETAINERS, usd } from '@/lib/pricing';
import { BOOKING_GUARDIANSHIP } from '@/lib/booking';
import { guardianshipCounties } from '@/lib/guardianship-counties';
import { minorGuardianshipFAQs } from './faqs';

const offerings = [
  { icon: Users, title: 'Guardianship by a Relative', description: 'For a grandparent, aunt, uncle, or family friend stepping in to raise a child when the parents cannot.' },
  { icon: HeartHandshake, title: 'Parental Consent Guardianship', description: 'When a parent consents to another adult being appointed guardian — the most common and most straightforward path.' },
  { icon: Clock, title: 'Short-Term & Standby Guardianship', description: 'A parent planning ahead can designate a short-term or standby guardian that takes effect on a future event.' },
  { icon: ShieldAlert, title: 'Contested Minor Guardianship', description: `When a parent objects or files a competing petition. Billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer, with your flat fee credited.` },
  { icon: FileText, title: 'Guardianship of the Minor’s Estate', description: 'Where a child has received money or property — an inheritance or settlement — that must be managed under court supervision.' },
  { icon: CircleCheck, title: 'Termination at Majority', description: 'A minor guardianship ends when the child turns 18; we handle the closing where an estate accounting is required.' },
];

export default function MinorGuardianshipPage() {
  return (
    <main>
      <InnerPageHero title="Minor Guardianship in Illinois" subtitle="Legal authority to raise and protect a child who isn’t yours by birth — for grandparents, relatives, and family friends. Flat-fee when uncontested." />

      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Guardianship of a child, explained</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
          <p><strong className="text-[#33414E]">Minor guardianship gives an adult who is not the child’s parent the legal authority to care for and make decisions for that child.</strong> It is most often used by a grandparent or other relative raising a child because the parents have died, are unable to care for the child, or agree that someone else should.</p>
          <p>Guardianship is not adoption. It does not permanently end the parents’ rights, and it can be ended if circumstances change — which is exactly why it is the right tool when the goal is to care for a child through a difficult period rather than to permanently change the child’s legal parentage. A guardianship of a minor ends automatically when the child turns 18.</p>
          <p>We handle both <strong>uncontested</strong> minor guardianships — where the parents consent or do not object — and <strong>contested</strong> ones, where a parent objects or a competing petition is filed.</p>
        </div>
      </div></div></section>

      <section className="py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-10 text-center">What we handle</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{offerings.map((o) => (<ServiceCard key={o.title} icon={o.icon} title={o.title} description={o.description} />))}</div>
      </div></div></section>

      {/* Fees — from lib/pricing.ts */}
      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Flat-fee minor guardianship</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <p>An uncontested minor guardianship is a flat <strong>{usd(GUARDIANSHIP_FLAT.minorUncontested)}</strong>, and that fee is <strong>all-inclusive of court costs</strong> — there is nothing billed on top of it. Because Illinois eliminated minor-guardianship filing and appearance fees on October 1, 2025, there is not even a court filing fee to pass through. It is a genuine flat fee: {usd(GUARDIANSHIP_FLAT.minorUncontested)} is the price, not {usd(GUARDIANSHIP_FLAT.minorUncontested)} plus filing plus service plus court costs.</p>
          <p>If the guardianship becomes contested — a parent objects, or files a competing petition — it converts to hourly billing against a {usd(RETAINERS.contestedGuardianship)} retainer, and <strong>every dollar of the flat fee you already paid is credited against that retainer.</strong> We tell you this up front and it is written into the engagement agreement.</p>
        </div>
        <div className="mt-8 max-w-md border-2 border-[#33414E] rounded-xl p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Minor Guardianship — uncontested</p>
          <p className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-[#33414E]">{usd(GUARDIANSHIP_FLAT.minorUncontested)}</p>
          <p className="text-slate-500 text-sm mt-1">Flat, all court costs included.</p>
        </div>
      </div></div></section>

      <section className="py-14 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-6">Minor guardianship by county</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{guardianshipCounties.map((c) => (<Link key={c.slug} href={`/guardianship/${c.slug}-county/`} className="block border border-slate-200 bg-white rounded-lg px-5 py-4 hover:border-[#33414E] hover:shadow-sm transition-all"><span className="font-bold text-[#33414E]">Guardianship in {c.county}</span><span className="block text-sm text-slate-500 mt-1">{c.seat}</span></Link>))}</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/adult-guardianship-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Adult guardianship</Link><span className="text-slate-300">|</span>
          <Link href="/chicago-probate-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Probate</Link><span className="text-slate-300">|</span>
          <Link href="/services-pricing/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">All services &amp; pricing</Link>
        </div>
      </div></div></section>

      <CTABanner title="Talk to a guardianship attorney" subtitle="Adult or minor, contested or uncontested — schedule a consultation and we’ll tell you exactly what your matter needs." bookingUrl={BOOKING_GUARDIANSHIP} ctaLabel="Schedule a Guardianship Consultation" />
      <FAQAccordion title="Minor Guardianship — Frequently Asked Questions" items={minorGuardianshipFAQs} />
    </main>
  );
}
