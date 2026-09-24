import Link from 'next/link';
import { ArrowRight, BadgeDollarSign, Building2, CircleCheck, FileSearch, Scale, Users } from 'lucide-react';
import { PROBATE, RATES, RETAINERS, hourly, usd } from '@/lib/pricing';

const paths = [
  {
    icon: FileSearch,
    eyebrow: 'No court case may be needed',
    title: 'Small Estate Administration',
    price: usd(PROBATE.smallEstateAdministration),
    description: 'For a qualifying personal estate of $150,000 or less when no individually owned real estate must be transferred.',
    details: 'Includes the Small Estate Affidavit, Attorney Letter of Direction, and asset search.',
    href: '/start-online/?service=small-estate-administration&clientType=individual&source=probate-paths',
    cta: 'Review small-estate service',
  },
  {
    icon: Scale,
    eyebrow: 'Full uncontested court administration',
    title: 'Standard Probate',
    price: usd(PROBATE.standard),
    description: 'For an uncontested Illinois probate estate valued at $4,000,000 or less, from opening through closing.',
    details: 'Court filing fees, creditor publication, and applicable recording fees are included. A required surety-bond premium is separate.',
    href: '/start-online/?service=standard-probate&clientType=individual&source=probate-paths',
    cta: 'Start standard probate',
    featured: true,
  },
  {
    icon: Building2,
    eyebrow: 'Illinois estate-tax complexity',
    title: 'Estate Over $4 Million',
    price: `${usd(PROBATE.largeEstateBase)} + ${PROBATE.largeEstatePercent}%`,
    description: 'For a full uncontested probate when the estate value exceeds $4,000,000.',
    details: `The ${PROBATE.largeEstatePercent}% estate-value charge applies at administration only when the estate exceeds $4,000,000.`,
    href: '/start-online/?service=large-estate-probate&clientType=individual&source=probate-paths',
    cta: 'Review large-estate service',
  },
];

const roleServices = [
  { title: 'Only real estate, and all heirs agree', detail: `Bond in Lieu of Probate — ${usd(PROBATE.bondInLieu)}`, href: '/start-online/?service=bond-in-lieu-of-probate&clientType=individual&source=probate-role' },
  { title: 'The estate is already open', detail: `Partial Probate — ${usd(PROBATE.partialProbate)}`, href: '/start-online/?service=partial-probate&clientType=individual&source=probate-role' },
  { title: 'I am an heir, not the executor', detail: `Heir Representation — ${usd(PROBATE.heirRepresentation)} per heir`, href: '/start-online/?service=heir-representation&clientType=individual&source=probate-role' },
  { title: 'I am the surviving spouse', detail: `Spousal Representation — ${usd(PROBATE.spousalRepresentation)}`, href: '/start-online/?service=spousal-representation&clientType=individual&source=probate-role' },
];

export function ProbateServicePaths() {
  return (
    <section className="border-b border-[#DCE5ED] bg-[#F6F9FC] py-16" aria-labelledby="probate-service-heading">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#547298]"><BadgeDollarSign className="h-5 w-5" />Concrete probate pricing</span>
          <h2 id="probate-service-heading" className="mt-2 text-3xl font-extrabold text-[#33414E]">Choose the path that matches the estate</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">You do not need to diagnose the case perfectly. Start with the closest situation, and we will confirm whether probate is required before substantive work begins.</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <article key={path.title} className={`flex flex-col rounded-3xl border-2 bg-white p-6 shadow-sm ${path.featured ? 'border-[#547298] shadow-lg' : 'border-[#DCE5ED]'}`}>
                <Icon className="h-8 w-8 text-[#547298]" aria-hidden="true" />
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-[#547298]">{path.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#33414E]">{path.title}</h3>
                <p className="mt-2 text-3xl font-extrabold text-[#33414E]">{path.price}</p>
                <p className="mt-4 leading-relaxed text-slate-600">{path.description}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{path.details}</p>
                <Link href={path.href} className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${path.featured ? 'bg-[#547298] text-white hover:bg-[#33414E]' : 'border-2 border-[#7E9CC0] text-[#33414E] hover:bg-[#F6F9FC]'}`}>{path.cta}<ArrowRight className="h-4 w-4" /></Link>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl border border-[#DCE5ED] bg-white p-6">
            <div className="flex items-center gap-3"><Users className="h-7 w-7 text-[#547298]" /><h3 className="text-xl font-bold text-[#33414E]">Alternative and limited-scope probate services</h3></div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {roleServices.map((service) => (
                <Link key={service.title} href={service.href} className="rounded-xl border border-[#DCE5ED] p-4 hover:border-[#7E9CC0] hover:bg-[#F6F9FC]">
                  <p className="font-bold text-[#33414E]">{service.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#33414E] p-6 text-white">
            <h3 className="text-xl font-bold">Is there a dispute?</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">A will contest, competing representative, removal request, or filed objection is contested probate—not a flat-fee administration.</p>
            <p className="mt-4 text-lg font-bold">{usd(RETAINERS.contestedProbate)} retainer</p>
            <p className="mt-1 text-sm text-white/75">{hourly(RATES.attorneyHourly)} attorney · {hourly(RATES.paralegalHourly)} paralegal</p>
            <Link href="/book-consultation/" className="mt-5 inline-flex items-center gap-2 font-bold text-white underline underline-offset-4">Discuss a contested estate<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#33414E]">
          {['All 102 Illinois counties', 'Virtual representation available', 'No consultation required to start', 'Written scope and fee before work begins'].map((item) => <span key={item} className="inline-flex items-center gap-2"><CircleCheck className="h-5 w-5 text-[#547298]" />{item}</span>)}
        </div>
      </div>
    </section>
  );
}
