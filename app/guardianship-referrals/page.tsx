import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, CircleCheck, Clock3, FileSearch, HeartHandshake, ShieldAlert } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const PATH = '/guardianship-referrals/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;

export const metadata: Metadata = {
  title: { absolute: 'Illinois Adult Guardianship Referral Resources' },
  description: 'Referral resources for Illinois social workers, care managers, health providers, senior communities, and professionals helping families assess guardianship.',
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
};

const schemas = [
  breadcrumbSchema([
    { name: 'Adult Guardianship', path: '/adult-guardianship-lawyer/' },
    { name: 'Professional Referrals', path: PATH },
  ]),
  serviceSchema({
    name: 'Illinois Adult Guardianship Referral Review',
    description: 'A referral pathway for professionals helping Illinois families determine whether a power of attorney, adult guardianship, or temporary guardianship may be appropriate.',
    path: PATH,
    serviceType: 'Adult guardianship referral review',
  }),
];

const audiences = [
  ['Hospital and rehabilitation teams', 'When discharge, consent, placement, or access to funds is delayed because no one has adequate authority.'],
  ['Geriatric care managers and social workers', 'When a family needs legal authority to coordinate care or protect a vulnerable adult.'],
  ['Memory-care and senior-living communities', 'When admission, payment, consent, or resident-safety questions require legal review.'],
  ['Disability-transition professionals', 'When a young adult approaching 18 may need supported decision-making, POA planning, or guardianship.'],
  ['Financial professionals', 'When an institution cannot accept instructions, exploitation is suspected, or fiduciary authority is unclear.'],
  ['Attorneys and other professionals', 'When a client needs an Illinois guardianship lawyer or county-specific probate-court representation.'],
];

export default function GuardianshipReferralsPage() {
  return (
    <main>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <InnerPageHero
        title="Adult Guardianship Referral Resources"
        subtitle="A clear referral pathway for professionals helping an Illinois family determine whether POA authority, standard guardianship, or temporary emergency guardianship may be needed."
      />

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#547298]">A practical handoff</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#33414E]">Send the family with context—not a legal conclusion</h2>
            <p className="mt-4 leading-relaxed text-slate-600">You do not need to decide whether guardianship is legally required. Tell us what decision cannot be made, what risk exists, whether authority documents have been located, and how quickly action may be needed. Our legal team will screen for the least restrictive workable option.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/submit-referral/" className="inline-flex items-center justify-center rounded-full bg-[#547298] px-6 py-3 font-bold text-white hover:bg-[#33414E]">Submit a Professional Referral</Link>
              <Link href="/adult-guardianship-lawyer/" className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] px-6 py-3 font-bold text-[#33414E] hover:bg-[#F6F9FC]">Review Adult Guardianship Services</Link>
            </div>
          </div>
          <aside className="rounded-2xl border border-[#F0C7C3] bg-[#FFF8F7] p-6">
            <div className="flex items-center gap-3"><ShieldAlert className="h-7 w-7 text-[#B44B43]" /><h2 className="text-xl font-bold text-[#33414E]">Possible emergency?</h2></div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">Flag immediate medical, safety, discharge, exploitation, eviction, foreclosure, or asset-loss concerns. Temporary guardianship is limited relief controlled by the court, and no appointment or hearing date can be guaranteed.</p>
            <Link href="/start-online/?service=emergency-temporary-adult-guardianship&clientType=individual&source=professional-referral" className="mt-5 inline-flex items-center gap-2 font-bold text-[#9A3E38] hover:underline">Request urgent legal review<ArrowRight className="h-4 w-4" /></Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-16">
        <div className="mx-auto max-w-[1140px] px-5">
          <h2 className="text-3xl font-extrabold text-[#33414E]">Who this referral pathway is for</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-[#DCE5ED] bg-white p-6">
                <Building2 className="h-7 w-7 text-[#547298]" />
                <h3 className="mt-4 text-lg font-bold text-[#33414E]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1140px] px-5">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <FileSearch className="h-8 w-8 text-[#547298]" />
              <h2 className="mt-4 text-2xl font-bold text-[#33414E]">Referral checklist</h2>
              <p className="mt-2 text-slate-600">Send what is available; do not delay a referral because one item is missing.</p>
              <ul className="mt-5 space-y-3">
                {['Family contact name, phone, email, and relationship to the adult', 'Adult’s name, age, current location, and county of residence', 'The decision or harm requiring legal authority', 'Known POAs, trusts, health-care directives, or prior guardianship orders', 'Current physician or qualified evaluator contact information', 'Known relatives and whether anyone may object', 'Upcoming discharge, hearing, closing, benefit, or safety deadline'].map((item) => <li key={item} className="flex gap-3 text-sm text-slate-700"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />{item}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#33414E] p-7 text-white">
              <HeartHandshake className="h-8 w-8 text-[#9DB8D4]" />
              <h2 className="mt-4 text-2xl font-bold">What the family can expect</h2>
              <ol className="mt-5 space-y-5">
                {[
                  ['1', 'Conflict and urgency review', 'The firm first determines whether it can evaluate the matter and whether an immediate deadline requires priority attention.'],
                  ['2', 'Authority screening', 'The attorney reviews existing POAs and less restrictive options before recommending court intervention.'],
                  ['3', 'Concrete scope and price', 'The family receives the applicable service scope, included filing fees, and disclosure that bond and GAL fees are separate.'],
                ].map(([number, title, body]) => <li key={number} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#33414E]">{number}</span><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/75">{body}</p></div></li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E3EAF1] bg-[#F6F9FC] py-12 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <Clock3 className="mx-auto h-8 w-8 text-[#547298]" />
          <h2 className="mt-3 text-2xl font-bold text-[#33414E]">Give the family one clear next step</h2>
          <p className="mt-2 text-slate-600">Submitting a referral does not create an attorney-client relationship. The firm will complete its conflict review and engagement process directly with the prospective client.</p>
          <Link href="/submit-referral/" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#547298] px-7 py-3 font-bold text-white hover:bg-[#33414E]">Submit Referral</Link>
        </div>
      </section>
    </main>
  );
}
