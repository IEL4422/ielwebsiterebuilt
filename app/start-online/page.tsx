import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, CheckCircle2, FileText, LockKeyhole, MessageSquare, ShieldCheck, UserRoundCheck } from 'lucide-react';
import { TrackedLeadLink } from '@/components/analytics/TrackedLeadLink';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { allServices, type Service } from '@/lib/services-data';

type SearchParams = {
  service?: string;
  clientType?: string;
  source?: string;
};

export const metadata: Metadata = {
  title: 'Start Online with Confidence',
  description: 'Review your service details, flat fee, and next steps before beginning a secure Illinois Estate Law intake online.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/start-online/',
  },
};

function priceLabel(service: Service, clientType: 'individual' | 'joint') {
  if (service.pricingLabel) return service.pricingLabel;

  if (clientType === 'joint' && service.jointPrice) {
    return `$${service.jointPrice.toLocaleString()}`;
  }

  if (service.individualPrice) {
    return `$${service.individualPrice.toLocaleString()}`;
  }

  if (service.fixedPrice) {
    return `$${service.fixedPrice.toLocaleString()}`;
  }

  return 'Price confirmed with the firm';
}

function confidenceItems(service?: Service) {
  const items = [
    'Your flat fee and the scope of your selected service are shown before you proceed.',
    'The firm will present the applicable Client Service Agreement before substantive work begins.',
    service?.requiresConsultation
      ? 'This service begins with an attorney review so the firm can confirm the relevant facts, scope, and next steps.'
      : 'You can use the secure client portal to share information, follow next steps, and access documents.',
    'Standard packages include attorney consultations through final documents, where listed in the package details.',
  ];

  if (service?.note) {
    items.push(service.note);
  }

  return items;
}

export default function StartOnlinePage({ searchParams }: { searchParams: SearchParams }) {
  const clientType = searchParams.clientType === 'joint' ? 'joint' : 'individual';
  const selectedService = searchParams.service
    ? allServices.find((service) => service.id === searchParams.service)
    : undefined;
  const selectedPrice = selectedService ? priceLabel(selectedService, clientType) : undefined;
  const visibleIncludes = selectedService?.includes.slice(0, 6) ?? [];
  const additionalIncludes = Math.max((selectedService?.includes.length ?? 0) - visibleIncludes.length, 0);
  const needsConsultation = Boolean(selectedService?.requiresConsultation);

  return (
    <main>
      <InnerPageHero
        title={selectedService ? 'Review your service before you start' : 'Start online with confidence'}
        subtitle={needsConsultation
          ? 'Review the service details, then schedule an attorney consultation to confirm the facts, scope, and next steps.'
          : 'No appointment is required to begin. Review the process, see what happens next, and move forward at your own pace.'}
      />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 rounded-2xl border border-[#B9CDE0] bg-[#F4F8FC] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#4A708B]" aria-hidden="true" />
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#33414E]">
                    You are still on Illinois Estate Law&apos;s website.
                  </p>
                  <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                    {needsConsultation
                      ? 'This service requires an attorney review before engagement. You can review the details below, then schedule a consultation when you are ready.'
                      : 'When you choose to continue, you will move to the Illinois Estate Law client portal to begin your secure intake. You can review the details below first—there is no appointment required to reach this step.'}
                  </p>
                </div>
              </div>
            </div>

            {selectedService ? (
              <div className="overflow-hidden rounded-2xl bg-[#33414E] shadow-xl">
                <div className="border-b border-white/15 px-6 py-7 sm:px-8">
                  <p className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.16em] text-[#B7CBE0]">
                    Selected service
                  </p>
                  <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                      <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white sm:text-3xl">
                        {clientType === 'joint' && selectedService.jointPrice ? `Joint ${selectedService.name}` : selectedService.name}
                      </h1>
                      <p className="mt-2 max-w-2xl font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-white/80">
                        {selectedService.description}
                      </p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="font-['Plus_Jakarta_Sans'] text-sm font-medium text-[#B7CBE0]">Your fee</p>
                      <p className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-white">{selectedPrice}</p>
                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-white/70">
                        {selectedService.pricingLabel ? 'See scope and pricing details below.' : 'Flat fee for the defined service scope.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 bg-white px-6 py-7 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h2 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">What&apos;s included</h2>
                    <ul className="mt-4 space-y-3">
                      {visibleIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4A708B]" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {additionalIncludes > 0 && (
                      <p className="mt-4 font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#4A708B]">
                        Plus {additionalIncludes} additional included item{additionalIncludes === 1 ? '' : 's'}.
                      </p>
                    )}
                  </div>

                  <div className="rounded-xl border border-[#D6E1EC] bg-[#F6F9FC] p-5">
                    <h2 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">Before you continue</h2>
                    <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                      You selected this service. You can compare options or speak with the team before proceeding if your situation changes.
                    </p>
                    <Link
                      href="/services-pricing/"
                      className="mt-4 inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]"
                    >
                      Compare services and pricing
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-[#D6E1EC] bg-white p-7 shadow-sm sm:p-9">
                <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-[0.14em] text-[#4A708B]">Choose your next step</p>
                <h1 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E] sm:text-3xl">
                  Start when you feel ready—not when you can fit in an appointment.
                </h1>
                <p className="mt-3 max-w-3xl font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-slate-600">
                  If you already know the service you need, you can continue to the secure client portal. If you would like help choosing, take the short service finder first. Both paths keep the fee and next steps clear before substantive work begins.
                </p>
              </div>
            )}

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <FileText className="h-6 w-6 text-[#4A708B]" aria-hidden="true" />
                <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-base font-bold text-[#33414E]">1. Review</h2>
                <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">Confirm the service, flat fee, inclusions, and any important service notes.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <LockKeyhole className="h-6 w-6 text-[#4A708B]" aria-hidden="true" />
                <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-base font-bold text-[#33414E]">{needsConsultation ? '2. Discuss your matter' : '2. Begin securely'}</h2>
                <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                  {needsConsultation
                    ? 'Schedule a consultation so the firm can confirm the relevant facts and scope before engagement.'
                    : 'Continue to the client portal and complete the information needed for your service.'}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <UserRoundCheck className="h-6 w-6 text-[#4A708B]" aria-hidden="true" />
                <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-base font-bold text-[#33414E]">3. Work with the firm</h2>
                <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">The firm will guide the next steps and provide the applicable client-services agreement.</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#D6E1EC] bg-[#F6F9FC] p-6 sm:p-7">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">
                    {needsConsultation ? 'This service begins with an attorney review' : 'Ready to begin online?'}
                  </h2>
                  <p className="mt-2 max-w-2xl font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                    {needsConsultation
                      ? 'A consultation lets the firm confirm the facts, scope, and next steps before engagement.'
                      : 'Your information is collected through the Illinois Estate Law client portal. Review the client-services agreement before substantive work begins.'}
                  </p>
                </div>
                {needsConsultation ? (
                  <Link
                    href="/book-consultation/"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#33414E] px-6 py-3.5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-white transition-colors hover:bg-[#4A708B]"
                  >
                    Book a free consultation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <TrackedLeadLink
                    href="https://portal.illinoisestatelaw.com/get-started"
                    source="PORTAL_HANDOFF"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#33414E] px-6 py-3.5 font-['Plus_Jakarta_Sans'] text-sm font-bold text-white transition-colors hover:bg-[#4A708B]"
                  >
                    Continue to secure portal
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </TrackedLeadLink>
                )}
              </div>

              <div className="mt-5 border-t border-[#D6E1EC] pt-5">
                <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#33414E]">Need a different kind of support?</p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/select-service/" className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    Select a different service
                  </Link>
                  <Link href="/recommended-service/" className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    Use the service finder
                  </Link>
                  <Link href="/contact/" className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    Ask a process question
                  </Link>
                  <Link href="/book-consultation/" className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]">
                    Book a free consultation
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">What you can expect</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {confidenceItems(selectedService).map((item) => (
                  <li key={item} className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4A708B]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
