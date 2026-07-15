import Link from 'next/link';
import { HeartHandshake, Landmark, ShieldAlert, ClipboardCheck, UserCheck, FileText } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';
import { RATES, RETAINERS, GUARDIANSHIP_COMPLIANCE, usd, hourly, retainerLabel } from '@/lib/pricing';
import { BOOKING_GUARDIANSHIP } from '@/lib/booking';
import { guardianshipCounties } from '@/lib/guardianship-counties';
import { adultGuardianshipFAQs } from './faqs';

const offerings = [
  { icon: HeartHandshake, title: 'Guardianship of the Person', description: 'Authority over care, residence, and medical decisions for an adult who can no longer make them.' },
  { icon: Landmark, title: 'Guardianship of the Estate', description: 'Authority over money, property, benefits, and income — with a duty to account to the court for every dollar.' },
  { icon: ShieldAlert, title: 'Contested Guardianship', description: `When the respondent objects, a sibling files a competing petition, or a guardian faces removal. Billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer.` },
  { icon: UserCheck, title: 'GAL & Physician’s Report', description: 'We coordinate the court-appointed guardian ad litem and the physician’s report (CCP 0211 / CIC-2) required to establish disability.' },
  { icon: ClipboardCheck, title: 'Annual Compliance', description: 'The annual report on the ward and the estate accounting that Illinois requires for the life of the guardianship.' },
  { icon: FileText, title: 'Interim Petitions & Termination', description: 'Sale of real estate, extraordinary expenditures, change of placement, and restoration of the ward’s rights.' },
];

export default function AdultGuardianshipPage() {
  return (
    <main>
      <InnerPageHero title="Adult Guardianship in Illinois" subtitle="Guardianship of the person and estate for an adult who can no longer decide — contested and uncontested. We handle the petition, the physician’s report, the guardian ad litem, and the years of court reporting that follow." />

      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">When an adult can no longer decide</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
          <p><strong className="text-[#33414E]">Adult guardianship is how an Illinois court gives one person the legal authority to make decisions for another adult who can no longer make them safely.</strong> It is used for a parent with advancing dementia, an adult child with a developmental disability who is turning 18, or a spouse after a stroke or serious injury — in each case where no adequate power of attorney is already in place.</p>
          <p>Illinois law requires the <em>least restrictive</em> arrangement that meets the person’s needs, so the first thing we do is check whether guardianship is even necessary, or whether an existing power of attorney or a supported decision-making arrangement would do the job. When guardianship is the right tool, we handle the whole proceeding: the petition, the physician’s report, personal service on the respondent, coordination with the court-appointed guardian ad litem, the surety bond and inventory for the estate, and the hearing.</p>
          <p>We handle both <strong>uncontested</strong> adult guardianships and <strong>contested</strong> ones — where the respondent objects to being found disabled, a family member files a competing petition, or an existing guardian is challenged.</p>
        </div>
      </div></div></section>

      <section className="py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-10 text-center">What we handle</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{offerings.map((o) => (<ServiceCard key={o.title} icon={o.icon} title={o.title} description={o.description} />))}</div>
      </div></div></section>

      {/* Fees — all figures from lib/pricing.ts */}
      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">How adult guardianship is billed</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <p>Adult guardianship of the person and estate is billed <strong>hourly against a {usd(RETAINERS.adultGuardianshipUncontested)} retainer</strong> — not a flat fee — at {hourly(RATES.attorneyHourly)} attorney and {hourly(RATES.paralegalHourly)} paralegal. We bill it this way because even an uncontested adult guardianship carries work we do not fully control: a physician’s report that has to be obtained and sometimes re-obtained, a respondent who must be personally served, and a guardian ad litem whose recommendations we must answer. Billing it honestly by the hour is fairer than a flat fee that quietly absorbs those hours.</p>
          <p>If the guardianship is <strong>contested</strong>, it is billed against a {usd(RETAINERS.contestedGuardianship)} retainer. In every hourly matter, costs — including the guardian ad litem fee, filing fees, and the process server — are billed to you as expenses.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl">
          <div className="border-2 border-[#33414E] rounded-xl p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Uncontested — person &amp; estate</p><p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{retainerLabel(RETAINERS.adultGuardianshipUncontested)}</p></div>
          <div className="border border-slate-200 rounded-xl p-5 bg-[#f8f9fa]"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Contested</p><p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{retainerLabel(RETAINERS.contestedGuardianship)}</p></div>
          <div className="border border-slate-200 rounded-xl p-5 bg-[#f0f7f4]"><p className="text-xs font-bold uppercase tracking-wider text-[#1d6a4f] mb-2">Annual Compliance Plan</p><p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{usd(GUARDIANSHIP_COMPLIANCE.compliancePlanBundled)} / yr</p></div>
        </div>
        <p className="mt-6 max-w-4xl text-sm text-slate-500">Where fees are paid from the ward’s estate, Illinois law requires that they be reasonable and approved by the court (755 ILCS 5/27-2; 755 ILCS 5/11a-18).</p>
      </div></div></section>

      <section className="py-14 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-6">Adult guardianship by county</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{guardianshipCounties.map((c) => (<Link key={c.slug} href={`/guardianship/${c.slug}-county/`} className="block border border-slate-200 bg-white rounded-lg px-5 py-4 hover:border-[#33414E] hover:shadow-sm transition-all"><span className="font-bold text-[#33414E]">Guardianship in {c.county}</span><span className="block text-sm text-slate-500 mt-1">{c.seat} · {c.courthouseName}</span></Link>))}</div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/minor-guardianship-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Minor guardianship</Link><span className="text-slate-300">|</span>
          <Link href="/contested-probate-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Contested probate &amp; will contests</Link><span className="text-slate-300">|</span>
          <Link href="/chicago-probate-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Probate</Link><span className="text-slate-300">|</span>
          <Link href="/services-pricing/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">All services &amp; pricing</Link>
        </div>
      </div></div></section>

      <CTABanner title="Talk to a guardianship attorney" subtitle="Adult or minor, contested or uncontested — schedule a consultation and we’ll tell you exactly what your matter needs and what it will cost." bookingUrl={BOOKING_GUARDIANSHIP} ctaLabel="Schedule a Guardianship Consultation" />
      <FAQAccordion title="Adult Guardianship — Frequently Asked Questions" items={adultGuardianshipFAQs} />
    </main>
  );
}
