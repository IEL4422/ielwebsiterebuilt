import Link from 'next/link';
import {
  HeartHandshake,
  Landmark,
  ShieldAlert,
  ClipboardCheck,
  UserCheck,
  FileText,
  Users,
  Clock,
  CircleCheck,
} from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';
import {
  RATES,
  RETAINERS,
  GUARDIANSHIP_FLAT,
  GUARDIANSHIP_COMPLIANCE,
  usd,
  hourly,
  retainerLabel,
} from '@/lib/pricing';
import { BOOKING_GUARDIANSHIP } from '@/lib/booking';
import { guardianshipCounties } from '@/lib/guardianship-counties';
import { guardianshipFAQs } from '@/lib/practice-faqs';

const adultOfferings = [
  { icon: HeartHandshake, title: 'Guardianship of the Person', description: 'Authority over care, residence, and medical decisions for an adult who can no longer make them.' },
  { icon: Landmark, title: 'Guardianship of the Estate', description: 'Authority over money, property, benefits, and income — with a duty to account to the court for every dollar.' },
  { icon: ShieldAlert, title: 'Contested Guardianship', description: `When the respondent objects, a sibling files a competing petition, or a guardian faces removal. Billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer.` },
  { icon: UserCheck, title: 'GAL & Physician’s Report', description: 'We coordinate the court-appointed guardian ad litem and the physician’s report (CCP 0211 / CIC-2) required to establish disability.' },
  { icon: ClipboardCheck, title: 'Annual Compliance', description: 'The annual report on the ward and the estate accounting that Illinois requires for the life of the guardianship.' },
  { icon: FileText, title: 'Interim Petitions & Termination', description: 'Sale of real estate, extraordinary expenditures, change of placement, and restoration of the ward’s rights.' },
];

const minorOfferings = [
  { icon: Users, title: 'Guardianship by a Relative', description: 'For a grandparent, aunt, uncle, or family friend stepping in to raise a child when the parents cannot.' },
  { icon: HeartHandshake, title: 'Parental Consent Guardianship', description: 'When a parent consents to another adult being appointed guardian — the most common and most straightforward path.' },
  { icon: Clock, title: 'Short-Term & Standby Guardianship', description: 'A parent planning ahead can designate a short-term or standby guardian that takes effect on a future event.' },
  { icon: ShieldAlert, title: 'Contested Minor Guardianship', description: `When a parent objects or files a competing petition. Billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer, with your flat fee credited.` },
  { icon: FileText, title: 'Guardianship of the Minor’s Estate', description: 'Where a child has received money or property — an inheritance or settlement — that must be managed under court supervision.' },
  { icon: CircleCheck, title: 'Termination at Majority', description: 'A minor guardianship ends when the child turns 18; we handle the closing where an estate accounting is required.' },
];

export default function GuardianshipPage() {
  return (
    <main>
      <InnerPageHero
        title="Guardianship in Illinois"
        subtitle="Guardianship of an adult who can no longer decide, or of a minor child — contested and uncontested. One firm for the petition, the physician’s report, the guardian ad litem, and the years of court reporting that follow appointment."
      />

      {/* Overview + in-page nav */}
      <section className="py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Adult and minor guardianship, in one place</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
          <p><strong className="text-[#33414E]">Guardianship is how an Illinois court gives one person the legal authority to make decisions for another person who cannot safely make them.</strong> There are two very different situations: an <em>adult</em> who has lost the ability to decide because of dementia, a disability, or an injury; and a <em>minor</em> child who needs an adult other than a parent to care for them. We handle both, and within each we handle guardianship of the <strong>person</strong> (care and medical decisions) and of the <strong>estate</strong> (money and property), whether the matter is uncontested or contested.</p>
          <p>Use the links below to jump to the situation that fits yours.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#adult" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-[#33414E] hover:border-[#33414E] hover:bg-slate-50 transition-colors">Adult guardianship</a>
          <a href="#person-vs-estate" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-[#33414E] hover:border-[#33414E] hover:bg-slate-50 transition-colors">Person vs. estate</a>
          <a href="#minor" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-[#33414E] hover:border-[#33414E] hover:bg-slate-50 transition-colors">Minor guardianship</a>
          <a href="#contested" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-[#33414E] hover:border-[#33414E] hover:bg-slate-50 transition-colors">Contested guardianship</a>
          <a href="#compliance" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-[#33414E] hover:border-[#33414E] hover:bg-slate-50 transition-colors">Annual compliance</a>
        </div>
      </div></div></section>

      {/* ADULT GUARDIANSHIP */}
      <section id="adult" className="scroll-mt-24 py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Adult Guardianship in Illinois</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
          <p><strong className="text-[#33414E]">Adult guardianship is how an Illinois court gives one person the legal authority to make decisions for another adult who can no longer make them safely.</strong> It is used for a parent with advancing dementia, an adult child with a developmental disability who is turning 18, or a spouse after a stroke or serious injury — in each case where no adequate power of attorney is already in place.</p>
          <p>Illinois law requires the <em>least restrictive</em> arrangement that meets the person’s needs, so the first thing we do is check whether guardianship is even necessary, or whether an existing power of attorney or a supported decision-making arrangement would do the job. When guardianship is the right tool, we handle the whole proceeding: the petition, the physician’s report, personal service on the respondent, coordination with the court-appointed guardian ad litem, the surety bond and inventory for the estate, and the hearing.</p>
          <p>We handle both <strong>uncontested</strong> adult guardianships and <strong>contested</strong> ones — where the respondent objects to being found disabled, a family member files a competing petition, or an existing guardian is challenged.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">{adultOfferings.map((o) => (<ServiceCard key={o.title} icon={o.icon} title={o.title} description={o.description} />))}</div>

        {/* Adult fees — all figures from lib/pricing.ts */}
        <div className="mt-12 max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">How adult guardianship is billed</h3>
          <p>An uncontested adult guardianship of the person and estate is a <strong>flat {usd(GUARDIANSHIP_FLAT.adultUncontested)}</strong> — all-inclusive of the firm’s work: the petition, the physician’s report, personal service on the respondent, coordinating the guardian ad litem, and the surety bond, inventory, and hearing. The one separate charge is the guardian ad litem (GAL) fee, a court-set pass-through we disclose to you up front — like the surety bond premium in probate — not a hidden add-on.</p>
          <p>A guardianship is billed hourly only when it is <strong>contested</strong> — the respondent objects, a competing petition is filed, or a sitting guardian is challenged. A contested guardianship is billed against a {usd(RETAINERS.contestedGuardianship)} retainer at {hourly(RATES.attorneyHourly)} attorney and {hourly(RATES.paralegalHourly)} paralegal, and costs — the GAL fee, filing fees, the process server — are billed to you as expenses.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl">
          <div className="border-2 border-[#33414E] rounded-xl p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Uncontested — person &amp; estate</p><p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{usd(GUARDIANSHIP_FLAT.adultUncontested)} flat</p><p className="text-slate-500 text-xs mt-1">All-inclusive of the firm’s work; GAL fee separate.</p></div>
          <div className="border border-slate-200 rounded-xl p-5 bg-white"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Contested</p><p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{retainerLabel(RETAINERS.contestedGuardianship)}</p></div>
          <div className="border border-slate-200 rounded-xl p-5 bg-[#f0f7f4]"><p className="text-xs font-bold uppercase tracking-wider text-[#1d6a4f] mb-2">Annual Compliance Plan</p><p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{usd(GUARDIANSHIP_COMPLIANCE.compliancePlanBundled)} / yr</p></div>
        </div>
        <p className="mt-6 max-w-4xl text-sm text-slate-500">Where fees are paid from the ward’s estate, Illinois law requires that they be reasonable and approved by the court (755 ILCS 5/27-2; 755 ILCS 5/11a-18).</p>
      </div></div></section>

      {/* PERSON VS ESTATE */}
      <section id="person-vs-estate" className="scroll-mt-24 py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Guardian of the Person vs. Guardian of the Estate</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <div className="border border-slate-200 rounded-xl p-6 bg-[#f8f9fa]">
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E] mb-3">Guardian of the Person</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Authority over care, residence, and medical decisions — where the ward lives, what treatment they receive, and their day-to-day well-being. A guardian of the person files an annual report on the ward (755 ILCS 5/11a-17(b)) but is subject to lighter financial reporting.</p>
          </div>
          <div className="border border-slate-200 rounded-xl p-6 bg-[#f8f9fa]">
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E] mb-3">Guardian of the Estate</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Authority over money and property — paying bills, managing accounts and benefits, and handling contracts. A guardian of the estate must file a court accounting and personally bears the burden of proving that every disbursement was proper (755 ILCS 5/24-11), which is why it requires a surety bond and an inventory.</p>
          </div>
        </div>
        <p className="mt-6 max-w-4xl text-slate-600 leading-relaxed">Where the person has assets, the guardianship usually covers <strong>both</strong>. Illinois courts can appoint one person as both guardian of the person and of the estate, or different people for each role — and can limit a guardian’s authority to only the areas where the ward actually needs help (a <em>limited</em> guardianship) rather than granting full <em>plenary</em> authority.</p>
      </div></div></section>

      {/* MINOR GUARDIANSHIP */}
      <section id="minor" className="scroll-mt-24 py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Minor Guardianship in Illinois</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
          <p><strong className="text-[#33414E]">Minor guardianship gives an adult who is not the child’s parent the legal authority to care for and make decisions for that child.</strong> It is most often used by a grandparent or other relative raising a child because the parents have died, are unable to care for the child, or agree that someone else should.</p>
          <p>Guardianship is not adoption. It does not permanently end the parents’ rights, and it can be ended if circumstances change — which is exactly why it is the right tool when the goal is to care for a child through a difficult period rather than to permanently change the child’s legal parentage. A guardianship of a minor ends automatically when the child turns 18.</p>
          <p>We handle both <strong>uncontested</strong> minor guardianships — where the parents consent or do not object — and <strong>contested</strong> ones, where a parent objects or a competing petition is filed.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">{minorOfferings.map((o) => (<ServiceCard key={o.title} icon={o.icon} title={o.title} description={o.description} />))}</div>

        <div className="mt-12 max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">Flat-fee minor guardianship</h3>
          <p>An uncontested minor guardianship is a flat <strong>{usd(GUARDIANSHIP_FLAT.minorUncontested)}</strong>, and that fee is <strong>all-inclusive of court costs</strong> — there is nothing billed on top of it. Because Illinois eliminated minor-guardianship filing and appearance fees on October 1, 2025, there is not even a court filing fee to pass through. It is a genuine flat fee: {usd(GUARDIANSHIP_FLAT.minorUncontested)} is the price, not {usd(GUARDIANSHIP_FLAT.minorUncontested)} plus filing plus service plus court costs.</p>
        </div>
        <div className="mt-8 max-w-md border-2 border-[#33414E] rounded-xl p-6 bg-white">
          <p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Minor Guardianship — uncontested</p>
          <p className="font-['Plus_Jakarta_Sans'] text-4xl font-bold text-[#33414E]">{usd(GUARDIANSHIP_FLAT.minorUncontested)}</p>
          <p className="text-slate-500 text-sm mt-1">Flat, all court costs included.</p>
        </div>
      </div></div></section>

      {/* CONTESTED GUARDIANSHIP + conversion policy */}
      <section id="contested" className="scroll-mt-24 py-16 lg:py-20 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Contested Guardianship in Illinois</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <p>A guardianship becomes <strong>contested</strong> the moment someone formally opposes it — the respondent objects to being found disabled, a family member files a competing petition to be the guardian instead, or an existing guardian is challenged and faces removal. At that point the matter is litigation: discovery, evidence, and, if it does not settle, a hearing before the judge.</p>
          <p>A contested guardianship — adult or minor — is billed <strong>hourly against a {usd(RETAINERS.contestedGuardianship)} retainer</strong> at {hourly(RATES.attorneyHourly)} attorney and {hourly(RATES.paralegalHourly)} paralegal, because the amount of work is driven by the opposing party, not by us. Costs, including the guardian ad litem fee, are billed to you as expenses on a separate line.</p>
        </div>
        <div className="mt-8 max-w-4xl border-l-4 border-[#4A708B] bg-[#f8f9fa] p-6 rounded-r-lg">
          <p className="font-bold text-[#33414E] mb-2">If a flat-fee guardianship becomes contested</p>
          <p className="text-slate-600 text-sm leading-relaxed">Uncontested guardianship — adult or minor — is a flat fee. If a matter we took on that flat fee becomes contested, it converts to representation billed hourly against a {usd(RETAINERS.contestedGuardianship)} retainer. The <strong>unearned portion</strong> of the flat fee you have already paid — the part we have not yet earned, as determined by the firm — is credited toward that retainer and held in <strong>our client trust account</strong>, drawn down only as fees are actually earned and billed. We notify you in writing of the exact amount credited. We explain all of this before you engage us, and it is written into your engagement agreement, so it is never a surprise.</p>
        </div>
      </div></div></section>

      {/* ANNUAL COMPLIANCE */}
      <section id="compliance" className="scroll-mt-24 py-16 lg:py-20 bg-[#f8f9fa]"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Annual Guardianship Compliance</h2>
        <div className="w-16 h-1 bg-[#4A708B] mb-8" />
        <div className="max-w-4xl space-y-4 text-slate-600 leading-relaxed">
          <p>Being appointed guardian is the beginning, not the end. Illinois requires ongoing court reporting for the life of the guardianship: a guardian of the person files an <strong>annual report on the ward</strong> (755 ILCS 5/11a-17(b)), and a guardian of the estate files an <strong>accounting</strong> within 30 days of the one-year anniversary of appointment and thereafter on the court’s schedule (755 ILCS 5/24-11). Missing these deadlines is one of the most common reasons a guardian gets into trouble with the court.</p>
          <p>Our <strong>Guardianship Compliance Plan ({usd(GUARDIANSHIP_COMPLIANCE.compliancePlanBundled)} per year)</strong> prepares and files both on the court’s schedule so you never miss a deadline.</p>
        </div>
      </div></div></section>

      {/* COUNTIES */}
      <section className="py-14 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-6">Guardianship by county</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{guardianshipCounties.map((c) => (<Link key={c.slug} href={`/guardianship/${c.slug}-county/`} className="block border border-slate-200 bg-white rounded-lg px-5 py-4 hover:border-[#33414E] hover:shadow-sm transition-all"><span className="font-bold text-[#33414E]">Guardianship in {c.county}</span><span className="block text-sm text-slate-500 mt-1">{c.seat} · {c.courthouseName}</span></Link>))}</div>
        <div className="mt-8">
          <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E] mb-4">Related</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/chicago-probate-lawyer/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Probate &amp; estate administration</Link><span className="text-slate-300">|</span>
            <Link href="/chicago-probate-lawyer/#contested" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Contested probate &amp; will contests</Link><span className="text-slate-300">|</span>
            <Link href="/blog/guardianship-vs-power-of-attorney-illinois/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Guardianship vs. power of attorney</Link><span className="text-slate-300">|</span>
            <Link href="/services-pricing/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">All services &amp; pricing</Link>
          </div>
        </div>
      </div></div></section>

      <CTABanner title="Talk to a guardianship attorney" subtitle="Adult or minor, contested or uncontested — schedule a consultation and we’ll tell you exactly what your matter needs and what it will cost." bookingUrl={BOOKING_GUARDIANSHIP} ctaLabel="Schedule a Guardianship Consultation" />
      <FAQAccordion title="Illinois Guardianship — Frequently Asked Questions" items={guardianshipFAQs} />
    </main>
  );
}
