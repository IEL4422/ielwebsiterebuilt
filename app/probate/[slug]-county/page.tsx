import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Gavel, FileText, Users, UserCheck, CreditCard, Search, CircleCheck as CheckCircle } from 'lucide-react';
import { countyProbateLocations, CountyProbateLocation } from '@/lib/locations-data';
import { LocationHero } from '@/components/geo/LocationHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { PricingCard } from '@/components/geo/PricingCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';
import { CourthouseCard } from '@/components/geo/CourthouseCard';

export async function generateStaticParams() {
  return countyProbateLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

function getLocation(slug: string): CountyProbateLocation | undefined {
  return countyProbateLocations.find((loc) => loc.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const loc = getLocation(params.slug);
  if (!loc) return { title: 'Not Found' };

  const title = `${loc.county} Probate Lawyer`;
  const description = `Illinois Estate Law handles probate in ${loc.county}. Experienced estate administration, court filings & heir representation. Serving ${loc.seat} & all of ${loc.county}. Free consultation.`;
  const url = `https://www.illinoisestatelaw.com/probate/${loc.slug}-county/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Illinois Estate Law`,
      description,
      url,
      siteName: 'Illinois Estate Law',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${title} | Illinois Estate Law`,
      description,
    },
  };
}

const probateServices = [
  { icon: Gavel, title: 'Full Probate Representation', description: 'Complete legal representation from petition filing through final distribution of estate assets.' },
  { icon: FileText, title: 'Summary Probate', description: 'Expedited probate for qualifying smaller estates, reducing time and costs significantly.' },
  { icon: Users, title: 'Executor / Administrator Support', description: 'Guidance and legal support for executors and administrators throughout the probate process.' },
  { icon: UserCheck, title: 'Heir & Beneficiary Representation', description: 'Protecting the interests and inheritance rights of heirs and beneficiaries during probate.' },
  { icon: CreditCard, title: 'Creditor Notification & Debt Settlement', description: 'Proper notification of creditors and negotiation of outstanding debts owed by the estate.' },
  { icon: Search, title: 'Estate Asset Search & Inventory', description: 'Comprehensive identification, location, and inventory of all estate assets for court reporting.' },
];

const probatePricing = [
  { name: 'Full Probate Package', price: '$7,500' },
  { name: 'Summary Probate Package', price: '$4,000', featured: true },
  { name: 'Partial Probate Package', price: '$3,500' },
  { name: 'Surviving Spouse', price: '$5,000' },
  { name: 'Heir Representation', price: '$2,500' },
];

function getCountyFAQs(county: string) {
  return [
    {
      question: `How long does probate take in ${county}, Illinois?`,
      answer: `Probate in ${county} typically takes 6 to 12 months, depending on the complexity of the estate, whether there are disputes, and the current court calendar at the ${county} Circuit Court. Simpler estates may qualify for summary probate, which can be resolved in as little as 2-3 months.`,
    },
    {
      question: `How much does a probate lawyer cost in ${county}?`,
      answer: `Illinois Estate Law offers flat-fee probate representation starting at $7,500 for full probate, $4,000 for summary probate, and $3,500 for partial probate. There are no hourly rates or hidden fees. Payment plans are available for all services.`,
    },
    {
      question: 'Can probate be avoided in Illinois?',
      answer: 'Yes. Common probate avoidance strategies include revocable living trusts, joint tenancy with right of survivorship, transfer-on-death instruments for real estate, and payable-on-death designations for financial accounts. An estate planning attorney can help you determine the best approach for your situation.',
    },
    {
      question: 'What assets go through probate in Illinois?',
      answer: 'Assets that are solely owned by the deceased without a beneficiary designation or transfer mechanism must go through probate. This includes real estate held in the decedent\'s name alone, bank accounts without POD designations, and personal property. Assets held in trust, jointly owned property, and accounts with named beneficiaries generally bypass probate.',
    },
    {
      question: `Do I need to hire a probate attorney in ${county}?`,
      answer: `While Illinois law does not require you to hire an attorney for probate, the process involves complex court filings, strict deadlines, and legal obligations that can create liability for the executor. Working with an experienced ${county} probate attorney ensures compliance with all requirements and protects both the estate and its beneficiaries.`,
    },
  ];
}

function getProcessSteps(countyCourtName: string) {
  return [
    { step: 1, title: `File Petition with ${countyCourtName}`, description: 'The probate process begins with filing a petition to open the estate and admit the will (if one exists) with the court.' },
    { step: 2, title: 'Appointment of Executor/Administrator', description: 'The court appoints an executor (named in the will) or administrator (if no will exists) to manage the estate.' },
    { step: 3, title: 'Notify Creditors & Beneficiaries', description: 'All known creditors and beneficiaries must be formally notified, and a public notice is published for unknown creditors.' },
    { step: 4, title: 'Inventory & Appraise Estate Assets', description: 'A comprehensive inventory of all estate assets is prepared and filed with the court, including appraisals where required.' },
    { step: 5, title: 'Pay Debts, File Taxes & Distribute Assets', description: 'Outstanding debts are paid, tax returns are filed, and remaining assets are distributed to beneficiaries according to the will or Illinois law.' },
  ];
}

export default function CountyProbatePage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const countyCourtName = `${loc.county} Circuit Court`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getCountyFAQs(loc.county).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${loc.county} Probate Services - Illinois Estate Law`,
    description: `Expert probate and estate administration services in ${loc.county}, Illinois`,
    url: `https://www.illinoisestatelaw.com/probate/${loc.slug}-county/`,
    telephone: '+1-312-373-0731',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${loc.county}, Illinois`,
    },
    serviceType: ['Probate', 'Estate Administration', 'Heir Representation'],
    provider: {
      '@type': 'LegalService',
      name: 'Illinois Estate Law',
      telephone: '(312) 373-0731',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4422 N. Ravenswood Ave, Ste 212',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60640',
        addressCountry: 'US',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <LocationHero
          title={`${loc.county} Probate Lawyer`}
          subtitle={`Expert probate and estate administration in ${loc.county}, Illinois \u2014 from court filings to final distribution`}
        />

        {/* Intro */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-6">
                Probate Attorney Serving {loc.county}
              </h2>
              <div className="w-16 h-1 bg-[#4A708B] mb-8" />
              <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
                <p>
                  Probate is the legal process of administering a deceased person&apos;s estate under court supervision. In Illinois, probate involves validating the will (if one exists), appointing an executor or administrator, notifying creditors, inventorying assets, and distributing the estate to beneficiaries.
                </p>
                <p>
                  {loc.localNote} Illinois Estate Law provides experienced probate representation throughout {loc.county}, handling all aspects of the process from the initial petition through final distribution.
                </p>
                <p>
                  Probate cases in {loc.county} are filed at the {countyCourtName} located at {loc.courthouseAddress}. {loc.filingSystems} Our firm has extensive experience navigating {loc.county}&apos;s probate system and can guide you through every step.
                </p>
                <p>
                  Whether you are an executor named in a will, an heir seeking representation, or a family member trying to understand the process, Illinois Estate Law offers transparent flat-fee pricing with no hourly billing. We serve all of {loc.county} from {loc.seat} and every community in the county.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-10 text-center">
                Probate Services in {loc.county}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {probateServices.map((svc) => (
                  <ServiceCard
                    key={svc.title}
                    icon={svc.icon}
                    title={svc.title}
                    description={svc.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Probate Process Steps */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-12 text-center">
                The {loc.county} Probate Process
              </h2>
              <div className="max-w-3xl mx-auto space-y-0">
                {getProcessSteps(countyCourtName).map((item, index) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[#2D3E50] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      {index < 4 && (
                        <div className="w-0.5 h-full bg-slate-200 my-1" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#2D3E50] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CourthouseCard
          county={loc.county}
          address={loc.courthouseAddress}
          phone={loc.courthousePhone}
          filingSystems={loc.filingSystems}
        />

        {/* Pricing */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-10 text-center">
                Transparent Flat-Fee Probate Pricing
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {probatePricing.map((pkg) => (
                  <PricingCard key={pkg.name} name={pkg.name} price={pkg.price} featured={pkg.featured} />
                ))}
              </div>
              <p className="text-center text-slate-500 text-sm mt-8">
                All packages include unlimited attorney consultation. Payment plans available.
              </p>
              <div className="text-center mt-6">
                <Link
                  href="https://www.illinoisestatelaw.com/services-pricing/"
                  className="inline-flex items-center justify-center border-2 border-[#2D3E50] text-[#2D3E50] px-8 py-3 rounded-full font-bold hover:bg-[#2D3E50] hover:text-white transition-colors text-sm"
                >
                  View All Services &amp; Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to Navigate Probate with Confidence?"
          subtitle={`Schedule your free consultation today. Serving ${loc.seat}, ${loc.county}, and all of Illinois.`}
        />

        <FAQAccordion
          title={`Frequently Asked Questions \u2014 Probate in ${loc.county}`}
          items={getCountyFAQs(loc.county)}
        />
      </main>
    </>
  );
}
