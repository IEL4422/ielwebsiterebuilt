import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp as HelpCircle, Scale, ShieldCheck } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { allServices, type Service } from '@/lib/services-data';

export const metadata: Metadata = {
  title: 'Select a Service',
  description: 'Choose an Illinois Estate Law service directly. Browse estate planning, probate, trust administration, real estate, deed, and guardianship services without taking a quiz.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/select-service/',
  },
};

const deedServiceIds = new Set([
  'deed-transfer-to-trust',
  'additional-deed-transfer-to-trust',
  'quit-claim-deed',
  'transfer-on-death',
  'life-estate-deed',
]);

type ServiceGroup = {
  id: string;
  title: string;
  description: string;
  services: Service[];
};

function servicePrice(service: Service, clientType: 'individual' | 'joint' = 'individual') {
  if (service.pricingLabel) return service.pricingLabel;
  if (clientType === 'joint' && service.jointPrice) return `$${service.jointPrice.toLocaleString()}`;
  if (service.individualPrice) return `$${service.individualPrice.toLocaleString()}`;
  if (service.fixedPrice) return `$${service.fixedPrice.toLocaleString()}`;
  return 'Price confirmed with the firm';
}

function serviceHref(service: Service, clientType: 'individual' | 'joint' = 'individual') {
  return `/start-online/?service=${service.id}&clientType=${clientType}&source=direct-selection`;
}

function serviceGroups(): ServiceGroup[] {
  return [
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      description: 'Wills, trusts, powers of attorney, healthcare directives, document reviews, and related planning services.',
      services: allServices.filter((service) => service.category === 'estate-planning' || (service.category === 'a-la-carte' && !deedServiceIds.has(service.id))),
    },
    {
      id: 'trust-administration',
      title: 'Trust Administration',
      description: 'Attorney guidance for trustees handling trust accounting, distributions, and fiduciary responsibilities.',
      services: allServices.filter((service) => service.standardizedCaseType === 'Trust Administration'),
    },
    {
      id: 'probate',
      title: 'Probate & Estate Administration',
      description: 'Uncontested, contested, reopened, heir, and other probate representation options.',
      services: allServices.filter((service) => service.category === 'probate' && service.standardizedCaseType !== 'Trust Administration'),
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Deed Services',
      description: 'Residential closings and common Illinois deed-transfer services.',
      services: allServices.filter((service) => service.category === 'real-estate' || deedServiceIds.has(service.id)),
    },
    {
      id: 'guardianship',
      title: 'Guardianship',
      description: 'Adult and minor guardianship, annual compliance, and contested guardianship matters.',
      services: allServices.filter((service) => service.category === 'guardianship'),
    },
  ].filter((group) => group.services.length > 0);
}

function ServiceCard({ service }: { service: Service }) {
  const hasIndividualAndJointPricing = Boolean(service.individualPrice && service.jointPrice);
  const actionLabel = service.requiresConsultation ? 'Review service' : 'Select service';

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#DCE5ED] bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">{service.name}</h3>
      {service.subtitle && <p className="mt-1 font-['Plus_Jakarta_Sans'] text-xs leading-relaxed text-[#547298]">{service.subtitle}</p>}
      <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">{service.description}</p>

      <div className="mt-4 rounded-lg bg-[#F6F9FC] px-4 py-3">
        {hasIndividualAndJointPricing ? (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wide text-slate-500">Individual</p>
              <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">{servicePrice(service)}</p>
            </div>
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wide text-slate-500">Couple</p>
              <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">{servicePrice(service, 'joint')}</p>
            </div>
          </div>
        ) : (
          <>
            <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wide text-slate-500">Service fee</p>
            <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">{servicePrice(service)}</p>
          </>
        )}
      </div>

      {service.note && <p className="mt-3 font-['Plus_Jakarta_Sans'] text-xs leading-relaxed text-slate-500">{service.note}</p>}

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link
          href={serviceHref(service)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#33414E] px-4 py-2.5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-white transition-colors hover:bg-[#4A708B]"
        >
          {actionLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        {hasIndividualAndJointPricing && (
          <Link
            href={serviceHref(service, 'joint')}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-[#7E9CC0] bg-white px-4 py-2.5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E] transition-colors hover:border-[#547298] hover:text-[#547298]"
          >
            Select for a couple
          </Link>
        )}
      </div>
    </article>
  );
}

export default function SelectServicePage() {
  const groups = serviceGroups();

  return (
    <main>
      <InnerPageHero
        title="Select the service you need"
        subtitle="Browse every practice area and choose a service directly. You do not need to take the service finder first."
      />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-2xl border border-[#C6D7E7] bg-[#F4F8FC] p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#4A708B]" aria-hidden="true" />
                <div>
                  <h1 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">Choose directly, then review before you proceed.</h1>
                  <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                    Select a service to review its fee, scope, and next step. Services that need an attorney review will clearly direct you to a consultation instead of sending you into an online intake.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-10">
              {groups.map((group, groupIndex) => (
                <section key={group.id} aria-labelledby={`${group.id}-heading`} className={groupIndex === 0 ? '' : 'border-t border-slate-200 pt-10'}>
                  <div className="max-w-3xl">
                    <p className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.14em] text-[#547298]">Practice area</p>
                    <h2 id={`${group.id}-heading`} className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">{group.title}</h2>
                    <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">{group.description}</p>
                  </div>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.services.map((service) => <ServiceCard key={service.id} service={service} />)}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-[#33414E] p-6 text-white sm:p-8">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                <div>
                  <div className="flex items-center gap-2 text-[#B7CBE0]"><HelpCircle className="h-5 w-5" aria-hidden="true" /><span className="font-['Plus_Jakarta_Sans'] text-sm font-bold">Not sure which service fits?</span></div>
                  <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-xl font-bold">Use the service finder for guided help.</h2>
                  <p className="mt-2 max-w-2xl font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-white/75">The finder covers estate planning, trust administration, probate, real estate, and guardianship. It gives guidance only; you can still review and change services before proceeding.</p>
                </div>
                <Link href="/recommended-service/" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E] transition-colors hover:bg-[#E8F1F8]">
                  Use the service finder
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <p className="mt-6 flex items-start gap-2 font-['Plus_Jakarta_Sans'] text-xs leading-relaxed text-slate-500">
              <Scale className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Selecting a service does not create an attorney-client relationship. The applicable Client Service Agreement is provided before substantive work begins.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
