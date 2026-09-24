import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CircleCheck, FileSignature, Gavel, HelpCircle, ShieldCheck } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { CTABand } from '@/components/ui/CTAButtons';
import { A_LA_CARTE, GUARDIANSHIP_FLAT, RETAINERS, usd } from '@/lib/pricing';
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/lib/seo';

const PATH = '/power-of-attorney-and-guardianship/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;
const TITLE = 'Illinois POA & Guardianship Lawyer | Which Do You Need?';
const DESCRIPTION =
  'Need authority to help someone in Illinois? Learn when a voluntary power of attorney works, when court guardianship may be needed, and what each service costs.';

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Illinois Estate Law` },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const faqs = [
  {
    question: 'Can I get power of attorney over someone in Illinois?',
    answer:
      'Not unilaterally. A power of attorney is created by the principal—the person granting authority—who must understand and voluntarily sign the document. If that person can no longer make and communicate the relevant decision, a court guardianship may be the appropriate path. Capacity is fact-specific, so an attorney should review the circumstances rather than relying only on a diagnosis.',
  },
  {
    question: 'What is the difference between power of attorney and guardianship in Illinois?',
    answer:
      'A power of attorney is a private document voluntarily signed by a principal who chooses an agent. Guardianship is a court proceeding in which a judge decides whether a person needs a guardian and what authority the guardian should receive. Guardianship includes court oversight and continuing reporting duties.',
  },
  {
    question: 'Can someone with dementia sign a power of attorney in Illinois?',
    answer:
      'A diagnosis by itself does not answer the legal-capacity question. The person must understand the nature and effect of the document when it is signed and act voluntarily. Because capacity can fluctuate and the facts matter, the proposed principal should be evaluated promptly and privately by an attorney.',
  },
  {
    question: 'Is guardianship necessary if there is already a power of attorney?',
    answer:
      'Not always. A valid, effective power of attorney may provide enough authority and can be a less restrictive alternative to guardianship. Guardianship can still become necessary if the document does not cover the needed decision, the agent cannot or will not serve, the power is disputed, or protection from abuse is needed.',
  },
  {
    question: 'Do I need both a property and health care power of attorney?',
    answer:
      'They serve different purposes. A property power of attorney addresses financial and property matters, while a health care power of attorney addresses medical decisions. Many Illinois estate plans include both so the chosen agents have authority in both areas.',
  },
];

const schemas = [
  breadcrumbSchema([{ name: 'Power of Attorney & Guardianship', path: PATH }]),
  serviceSchema({
    name: 'Illinois Power of Attorney and Guardianship Legal Services',
    description: DESCRIPTION,
    path: PATH,
    serviceType: 'Power of attorney drafting and guardianship representation',
  }),
  faqPageSchema(faqs, PATH),
];

const decisionSteps = [
  {
    title: 'The person understands and agrees',
    body: 'If the person can understand the document and voluntarily choose an agent, powers of attorney for property and health care may provide the authority the family needs without opening a court case.',
    href: '/chicago-powers-of-attorney-lawyer/',
    link: 'Explore Illinois powers of attorney',
    icon: FileSignature,
  },
  {
    title: 'The person can no longer validly appoint an agent',
    body: 'If there is no adequate existing POA and the person cannot make the relevant decisions, an interested person may need to ask the court for limited or plenary guardianship.',
    href: '/adult-guardianship-lawyer/',
    link: 'Explore Illinois guardianship',
    icon: Gavel,
  },
  {
    title: 'There is a POA, but it is not working',
    body: 'A lawyer can review whether the document covers the problem, whether another agent can serve, and whether court involvement is needed because of refusal, conflict, or suspected misuse.',
    href: '/book-consultation/',
    link: 'Book a free consultation',
    icon: HelpCircle,
  },
];

export default function PowerOfAttorneyAndGuardianshipPage() {
  return (
    <main>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <InnerPageHero
        title="Power of Attorney or Guardianship in Illinois?"
        subtitle="If you need legal authority to help a parent, spouse, adult child, or other loved one, the right path depends on whether that person can still understand and voluntarily appoint an agent."
      />
      <CTABand />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-5">
          <div className="max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#547298]">The question families ask us most</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#33414E]">Can I get power of attorney over someone?</h2>
            <div className="mt-6 rounded-2xl border-l-4 border-[#547298] bg-[#F6F9FC] p-6 text-lg leading-relaxed text-slate-700">
              <p>
                <strong className="text-[#33414E]">A person cannot simply take power of attorney over another adult.</strong>{' '}
                The person granting authority must understand the document and choose to sign it voluntarily. If that is no longer possible and no adequate POA already exists, the family may need an Illinois court to appoint a guardian.
              </p>
            </div>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              The line is not always obvious. A medical diagnosis does not automatically decide legal capacity, and an existing POA does not always eliminate every need for court involvement. We evaluate the person&apos;s present ability, the decisions that must be made, any existing documents, and the least restrictive solution that will actually work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-5">
          <h2 className="text-3xl font-extrabold text-[#33414E]">Which path fits your situation?</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Start with the person&apos;s ability to choose—not with the label the family has been using.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {decisionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex flex-col rounded-2xl border border-[#E3EAF1] bg-white p-6 shadow-sm">
                  <Icon className="h-9 w-9 text-[#547298]" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-bold text-[#33414E]">{step.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{step.body}</p>
                  <Link href={step.href} className="mt-5 inline-flex items-center gap-2 font-bold text-[#547298] hover:text-[#33414E]">
                    {step.link} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-5">
          <h2 className="text-3xl font-extrabold text-[#33414E]">Power of attorney vs. guardianship in Illinois</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#E3EAF1]">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-[#33414E] text-white">
                <tr><th className="p-4">Question</th><th className="p-4">Power of attorney</th><th className="p-4">Guardianship</th></tr>
              </thead>
              <tbody className="divide-y divide-[#E3EAF1] text-sm text-slate-700">
                <tr><th className="p-4 font-bold text-[#33414E]">Who creates the authority?</th><td className="p-4">The principal voluntarily appoints an agent.</td><td className="p-4">A judge appoints a guardian after a court case.</td></tr>
                <tr className="bg-[#F9FBFD]"><th className="p-4 font-bold text-[#33414E]">When is it available?</th><td className="p-4">While the principal can understand and voluntarily sign.</td><td className="p-4">When statutory requirements are met and the court finds guardianship necessary.</td></tr>
                <tr><th className="p-4 font-bold text-[#33414E]">What can it cover?</th><td className="p-4">Property/financial matters and health care through separate documents.</td><td className="p-4">Personal decisions, financial matters, or both, as ordered by the court.</td></tr>
                <tr className="bg-[#F9FBFD]"><th className="p-4 font-bold text-[#33414E]">Court oversight</th><td className="p-4">Usually no court case or annual court reporting.</td><td className="p-4">Court appointment plus ongoing reports and, when applicable, accountings.</td></tr>
                <tr><th className="p-4 font-bold text-[#33414E]">Firm&apos;s standard price</th><td className="p-4">{usd(A_LA_CARTE.powersOfAttorneyIndividual)} individual / {usd(A_LA_CARTE.powersOfAttorneyJoint)} joint</td><td className="p-4">{usd(GUARDIANSHIP_FLAT.adultUncontested)} uncontested; {usd(GUARDIANSHIP_FLAT.adultUncontested + GUARDIANSHIP_FLAT.emergencyTemporaryAddOn)} with the emergency add-on. Filing fees included; bond premiums and GAL fees separate.</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">The comparison is general information, not a capacity determination or legal advice for a specific person.</p>
        </div>
      </section>

      <section className="bg-[#33414E] py-16">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-5 lg:grid-cols-2">
          <div>
            <FileSignature className="h-10 w-10 text-[#7E9CC0]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">Plan ahead with powers of attorney</h2>
            <p className="mt-3 leading-relaxed text-white/80">For an individual, both the Illinois property and health care powers of attorney are {usd(A_LA_CARTE.powersOfAttorneyIndividual)}. Joint planning for two people is {usd(A_LA_CARTE.powersOfAttorneyJoint)}.</p>
            <Link href="/chicago-powers-of-attorney-lawyer/" className="mt-5 inline-flex items-center gap-2 font-bold text-white hover:text-[#B9CCE2]">Power of attorney services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div>
            <ShieldCheck className="h-10 w-10 text-[#7E9CC0]" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-white">Get authority when planning is no longer available</h2>
            <p className="mt-3 leading-relaxed text-white/80">We handle adult and minor guardianship, guardianship of the person and estate, contested matters, and the annual court compliance that follows appointment.</p>
            <Link href="/guardianship/" className="mt-5 inline-flex items-center gap-2 font-bold text-white hover:text-[#B9CCE2]">Guardianship services <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-5">
          <h2 className="text-3xl font-extrabold text-[#33414E]">Illinois POA and guardianship FAQs</h2>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#E3EAF1] p-6">
                <h3 className="flex items-start gap-3 text-lg font-bold text-[#33414E]"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />{faq.question}</h3>
                <p className="mt-3 pl-8 leading-relaxed text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#F6F9FC] p-6">
            <h3 className="text-xl font-bold text-[#33414E]">Want the detailed legal comparison?</h3>
            <p className="mt-2 text-slate-600">Read our guide to costs, timing, court involvement, and situations where an existing POA may not be enough.</p>
            <Link href="/blog/guardianship-vs-power-of-attorney-illinois/" className="mt-4 inline-flex items-center gap-2 font-bold text-[#547298] hover:text-[#33414E]">Read: Guardianship vs. Power of Attorney in Illinois <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Not sure which one you need?"
        subtitle="Tell us what the person can do today, what decisions need to be made, and whether any documents already exist. We will help identify the appropriate next step."
      />
    </main>
  );
}
