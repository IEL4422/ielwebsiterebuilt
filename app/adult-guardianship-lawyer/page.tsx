import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Brain, Building2, CircleAlert, CircleCheck, Clock3, FileCheck2, HeartPulse, Scale, ShieldCheck, UserRound } from 'lucide-react';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { GUARDIANSHIP_FLAT, RETAINERS, usd } from '@/lib/pricing';
import { adultGuardianshipFAQs } from '@/lib/practice-faqs';

const standardFee = GUARDIANSHIP_FLAT.adultUncontested;
const emergencyAddOn = GUARDIANSHIP_FLAT.emergencyTemporaryAddOn;
const emergencyTotal = standardFee + emergencyAddOn;

const situations = [
  { icon: Brain, title: 'A parent has dementia', body: 'You need authority over care, residence, bills, property, or benefits because no adequate POA is available.', href: '/start-online/?service=adult-guardianship&clientType=individual&source=dementia-situation', cta: 'Review adult guardianship' },
  { icon: HeartPulse, title: 'A stroke or injury changed everything', body: 'A spouse or family member suddenly cannot make or communicate responsible personal or financial decisions.', href: '/start-online/?service=adult-guardianship&clientType=individual&source=stroke-situation', cta: 'See the standard service' },
  { icon: UserRound, title: 'An adult child is turning 18', body: 'Your child has a significant disability and may need continued decision-making support after becoming a legal adult.', href: '/start-online/?service=adult-guardianship&clientType=individual&source=transition-situation', cta: 'Plan the transition' },
  { icon: CircleAlert, title: 'Immediate harm cannot wait', body: 'There is an urgent medical, placement, safety, exploitation, or asset-protection issue requiring temporary court authority.', href: '/start-online/?service=emergency-temporary-adult-guardianship&clientType=individual&source=urgent-situation', cta: 'Request urgent review' },
];

const included = [
  'Petition for adjudication of disability and appointment of guardian',
  'All court filing fees',
  'Physician-report coordination',
  'Personal-service and notice coordination',
  'Guardian ad litem coordination',
  'Hearing preparation and representation',
  'Inventory and surety-bond coordination when estate guardianship is required',
  'Attorney consultations within the written scope',
];

export default function AdultGuardianshipLawyerPage() {
  return (
    <main>
      <InnerPageHero
        title="Illinois Adult Guardianship Lawyer"
        subtitle="Clear, fixed-fee representation when a parent, spouse, adult child, or other loved one can no longer safely make personal or financial decisions."
      />

      <section className="border-b border-[#E3EAF1] bg-white py-8">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-4 px-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#547298]">Need authority now?</p>
            <h2 className="mt-1 text-2xl font-extrabold text-[#33414E]">Tell us what is happening—not which legal form you think you need.</h2>
            <p className="mt-2 max-w-3xl text-slate-600">We will screen for an existing POA, immediate danger, family objections, the physician&apos;s report, and whether temporary guardianship may be justified.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/start-online/?service=emergency-temporary-adult-guardianship&clientType=individual&source=adult-guardianship-hero" className="inline-flex items-center justify-center rounded-full bg-[#B44B43] px-6 py-3 text-sm font-bold text-white hover:bg-[#963C36]">I Need Urgent Authority</Link>
            <Link href="/book-consultation/" className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] px-6 py-3 text-sm font-bold text-[#33414E] hover:bg-[#F6F9FC]">Find Out What I Need</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-16">
        <div className="mx-auto max-w-[1140px] px-5">
          <span className="text-sm font-bold uppercase tracking-wider text-[#547298]">Start with your situation</span>
          <h2 className="mt-2 text-3xl font-extrabold text-[#33414E]">Which description sounds most like your family?</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {situations.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col rounded-2xl border border-[#DCE5ED] bg-white p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-[#547298]" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold text-[#33414E]">{item.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-slate-600">{item.body}</p>
                  <Link href={item.href} className="mt-5 inline-flex items-center gap-2 font-bold text-[#547298] hover:text-[#33414E]">{item.cta}<ArrowRight className="h-4 w-4" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-5">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#547298]">Concrete pricing</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#33414E]">Choose the level of court intervention the facts require</h2>
            <p className="mt-3 leading-relaxed text-slate-600">Every flat-fee guardianship package includes all court filing fees. Bond premiums and court-appointed guardian ad litem fees are separate third-party charges and are not included.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-3xl border-2 border-[#547298] bg-white p-7 shadow-lg">
              <span className="w-fit rounded-full bg-[#E8F1F8] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#547298]">Standard uncontested case</span>
              <h3 className="mt-4 text-2xl font-bold text-[#33414E]">Full Adult Guardianship</h3>
              <p className="mt-2 text-4xl font-extrabold text-[#33414E]">{usd(standardFee)}</p>
              <p className="mt-2 text-sm text-slate-500">One flat attorney fee. All court filing fees included.</p>
              <ul className="mt-6 space-y-3">
                {included.map((item) => <li key={item} className="flex gap-3 text-sm text-slate-700"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />{item}</li>)}
              </ul>
              <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-900"><strong>Not included:</strong> surety-bond premiums and court-appointed GAL fees.</p>
              <Link href="/start-online/?service=adult-guardianship&clientType=individual&source=adult-pricing" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#547298] px-6 py-3 font-bold text-white hover:bg-[#33414E]">Review the $5,000 service</Link>
            </article>

            <article id="emergency" className="scroll-mt-28 flex flex-col rounded-3xl border-2 border-[#B44B43] bg-[#FFF9F8] p-7 shadow-lg">
              <span className="w-fit rounded-full bg-[#FCE8E6] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#9A3E38]">Immediate protection requested</span>
              <h3 className="mt-4 text-2xl font-bold text-[#33414E]">Emergency + Full Adult Guardianship</h3>
              <p className="mt-2 text-4xl font-extrabold text-[#33414E]">{usd(emergencyTotal)}</p>
              <p className="mt-2 text-sm text-slate-500">{usd(standardFee)} full case + {usd(emergencyAddOn)} emergency add-on. All court filing fees included.</p>
              <ul className="mt-6 space-y-3">
                {[
                  'Everything included in the full adult-guardianship package',
                  'Priority preparation of the temporary petition and proposed order',
                  'One temporary-guardianship hearing',
                  'Notice and supporting-document coordination',
                  'Continued representation through the uncontested permanent-guardianship hearing',
                ].map((item) => <li key={item} className="flex gap-3 text-sm text-slate-700"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#B44B43]" />{item}</li>)}
              </ul>
              <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-900"><strong>Not included:</strong> surety-bond premiums and court-appointed GAL fees. The court controls the hearing date and whether temporary authority is granted.</p>
              <Link href="/start-online/?service=emergency-temporary-adult-guardianship&clientType=individual&source=emergency-pricing" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#B44B43] px-6 py-3 font-bold text-white hover:bg-[#963C36]">Request urgent case review</Link>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-[#DCE5ED] bg-[#F6F9FC] p-6">
            <h3 className="text-lg font-bold text-[#33414E]">If the matter becomes contested</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">An objection, competing petition, or dispute over the proposed guardian changes the case into litigation billed hourly against a {usd(RETAINERS.contestedGuardianship)} retainer. The engagement agreement explains how any unearned flat-fee amount is credited.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#33414E] py-16">
        <div className="mx-auto max-w-[1140px] px-5">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Clock3 className="h-10 w-10 text-[#9DB8D4]" />
              <h2 className="mt-4 text-3xl font-extrabold text-white">What “emergency guardianship” means in Illinois</h2>
              <p className="mt-4 leading-relaxed text-white/80">Illinois law calls this a temporary guardianship. The court may grant specifically limited powers when immediate welfare or estate protection requires action before the full guardianship can be decided.</p>
              <p className="mt-4 leading-relaxed text-white/80">The temporary petition must accompany or follow the full guardianship petition. Notice is generally required at least three days before the hearing unless the court finds good cause to waive it. A temporary appointment ordinarily expires within 60 days or when the regular guardian is appointed, whichever comes first.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <a href="https://www.ilga.gov/legislation/ilcs/fulltext?DocName=075500050K11a-4" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline underline-offset-4">Read 755 ILCS 5/11a-4</a>
                <a href="https://www.cookcountycourtil.gov/division/probate-division/adult-guardianship" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline underline-offset-4">Cook County adult guardianship resources</a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6">
              <h3 className="text-xl font-bold text-white">Examples that may require urgent review</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {['Unsafe discharge or immediate placement decision', 'Urgent medical decision without effective authority', 'Active financial exploitation or rapidly disappearing assets', 'Immediate risk of eviction, foreclosure, utility shutoff, or loss of benefits', 'A current guardian has died, resigned, or become unable to serve'].map((item) => <li key={item} className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#9DB8D4]" />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-5 lg:grid-cols-[340px_1fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-[#F6F9FC]">
            <Image src="/attorneys/anna-rafanelli.jpg" alt="Illinois adult guardianship attorney Anna M. Rafanelli" width={680} height={760} className="h-auto w-full object-cover" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#547298]"><BadgeCheck className="h-5 w-5" />Your guardianship attorney</span>
            <h2 className="mt-3 text-3xl font-extrabold text-[#33414E]">Meet Anna M. Rafanelli</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">Anna focuses on probate and elder law, particularly adult guardianships. Her civil-litigation background helps families navigate evidentiary issues, court procedure, and the sensitive conflicts that can arise when a loved one&apos;s safety and autonomy are both at stake.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Licensed in Illinois and Indiana', 'Admitted in the Northern District of Illinois', 'Adult guardianship and elder-law focus', 'Civil-litigation experience'].map((item) => <div key={item} className="flex items-start gap-2 rounded-xl bg-[#F6F9FC] p-4 text-sm font-semibold text-[#33414E]"><FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />{item}</div>)}
            </div>
            <Link href="/about/" className="mt-6 inline-flex items-center gap-2 font-bold text-[#547298] hover:text-[#33414E]">Meet the legal team<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-16">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-5 lg:grid-cols-2">
          <div>
            <Building2 className="h-9 w-9 text-[#547298]" />
            <h2 className="mt-4 text-3xl font-extrabold text-[#33414E]">Referring a patient, resident, client, or family?</h2>
            <p className="mt-3 leading-relaxed text-slate-600">Hospital teams, geriatric care managers, social workers, disability-transition professionals, memory-care communities, and financial professionals can use our guardianship referral pathway to give families a clear next step.</p>
            <Link href="/guardianship-referrals/" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#547298] px-6 py-3 font-bold text-white hover:bg-[#33414E]">Professional referral resources</Link>
          </div>
          <div className="rounded-2xl border border-[#DCE5ED] bg-white p-6">
            <h3 className="text-xl font-bold text-[#33414E]">Helpful information to send with a referral</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {['The immediate decision or risk requiring authority', 'Any existing POA, trust, or health-care directive', 'The person’s current location and county of residence', 'Whether a physician can provide a current report', 'Known family objections, exploitation concerns, or court dates'].map((item) => <li key={item} className="flex gap-3"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <FAQAccordion title="Illinois Adult Guardianship — Frequently Asked Questions" items={adultGuardianshipFAQs} />

      <section className="bg-[#33414E] py-14 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <Scale className="mx-auto h-10 w-10 text-[#9DB8D4]" />
          <h2 className="mt-4 text-3xl font-extrabold text-white">Get the right authority—not more court involvement than necessary</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">Tell us what decisions must be made, what documents already exist, and whether anything is urgent. We will identify the appropriate next step.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/start-online/?service=adult-guardianship&clientType=individual&source=adult-final-cta" className="rounded-full bg-white px-7 py-3 font-bold text-[#33414E] hover:bg-[#F6F9FC]">Review Standard Guardianship</Link>
            <Link href="/start-online/?service=emergency-temporary-adult-guardianship&clientType=individual&source=adult-final-urgent" className="rounded-full bg-[#B44B43] px-7 py-3 font-bold text-white hover:bg-[#963C36]">Request Urgent Review</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
