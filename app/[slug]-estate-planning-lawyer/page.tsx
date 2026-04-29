import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FileText, Shield, Scale, Heart, Gavel, Chrome as Home, CircleCheck as CheckCircle, Clock, DollarSign, User, MapPin } from 'lucide-react';
import { cityLocations, CityLocation } from '@/lib/locations-data';
import { LocationHero } from '@/components/geo/LocationHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { PricingCard } from '@/components/geo/PricingCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';

export async function generateStaticParams() {
  return cityLocations.map((loc) => ({
    slug: loc.slug,
  }));
}

function getLocation(slug: string): CityLocation | undefined {
  return cityLocations.find((loc) => loc.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const loc = getLocation(params.slug);
  if (!loc) return { title: 'Not Found' };

  const title = `${loc.city} Estate Planning Lawyer`;
  const description = `Illinois Estate Law provides flat-fee estate planning in ${loc.city}, IL. Wills, trusts, powers of attorney & probate. Serving ${loc.county}. Free consultation.`;
  const url = `https://www.illinoisestatelaw.com/${loc.slug}-estate-planning-lawyer/`;

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

const services = [
  { icon: FileText, title: 'Wills — Last Will & Testament', description: 'Create a legally binding will that ensures your assets are distributed according to your wishes and names guardians for minor children.' },
  { icon: Shield, title: 'Revocable Living Trusts', description: 'Protect your assets, avoid probate, and maintain control over how and when your beneficiaries receive their inheritance.' },
  { icon: Scale, title: 'Powers of Attorney', description: 'Designate a trusted person to manage your financial and legal affairs if you become unable to do so yourself.' },
  { icon: Heart, title: 'Healthcare Directives & Living Wills', description: 'Ensure your medical wishes are honored with legally binding healthcare directives and a living will.' },
  { icon: Gavel, title: 'Probate & Estate Administration', description: 'Guidance through the Illinois probate process — from filing the initial petition to final distribution of assets.' },
  { icon: Home, title: 'Real Estate / Deeds & Property Transfers', description: 'Transfer property efficiently with quit claim deeds, transfer-on-death instruments, and life estate deeds.' },
];

const pricingPackages = [
  { name: 'Individual Trust Package', price: '$3,500' },
  { name: 'Joint Trust Package', price: '$5,000', featured: true },
  { name: 'Married Will Package', price: '$1,750' },
  { name: 'Individual Will', price: '$750' },
  { name: 'Probate Package', price: '$7,500' },
];

function getCityFAQs(city: string) {
  return [
    {
      question: 'Do I need to visit an office to create my estate plan?',
      answer: `No. Illinois Estate Law offers a fully virtual process, so ${city} residents can complete their entire estate plan from home. We handle everything via video conference, phone, and secure document sharing. In-person meetings are available for current clients at select locations.`,
    },
    {
      question: `How much does estate planning cost in ${city}?`,
      answer: `Illinois Estate Law uses transparent flat-fee pricing for all services. Individual wills start at $750, married will packages at $1,750, individual trust packages at $3,500, and joint trust packages at $5,000. There are no hourly rates or hidden fees, and payment plans are available.`,
    },
    {
      question: 'How long does it take to complete an estate plan?',
      answer: 'Most estate plans are completed within 1-2 weeks from the initial consultation. More complex plans involving trusts and multiple property transfers may take slightly longer, but attorney Mary Liberty prioritizes fast turnaround for all clients.',
    },
    {
      question: 'What is the difference between a will and a trust in Illinois?',
      answer: 'A will is a legal document that directs how your assets are distributed after death and must go through probate. A trust manages and distributes assets during your lifetime and after death, often bypassing probate entirely. Trusts offer more privacy and control, but both serve important roles in a comprehensive estate plan.',
    },
    {
      question: 'Do I need a lawyer to create a will or trust in Illinois?',
      answer: 'While Illinois law does not require an attorney to create a will, working with an experienced estate planning lawyer helps ensure your documents are properly drafted, legally valid, and tailored to your unique family and financial situation. DIY documents often contain errors that cause costly problems later.',
    },
  ];
}

export default function CityEstatePlanningPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  const meetingText = loc.meetingAddress
    ? `In-person meetings are also available for current clients at our ${loc.city} location at ${loc.meetingAddress}.`
    : `While our service is fully virtual, in-person meetings are available for current clients at our ${loc.nearbyCity}-area office locations.`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getCityFAQs(loc.city).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Illinois Estate Law - ${loc.city} Estate Planning`,
    description: `Flat-fee estate planning services for ${loc.city}, ${loc.county} residents`,
    url: `https://www.illinoisestatelaw.com/${loc.slug}-estate-planning-lawyer/`,
    telephone: '+1-312-373-0731',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: loc.city },
      { '@type': 'AdministrativeArea', name: loc.county },
    ],
    priceRange: '$$',
    serviceType: [
      'Estate Planning',
      'Wills',
      'Trusts',
      'Powers of Attorney',
      'Probate',
    ],
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
          title={`${loc.city} Estate Planning Lawyer`}
          subtitle={`Serving ${loc.city} and ${loc.county} with flat-fee estate planning \u2014 fully virtual, no office visit required`}
        />

        {/* Intro Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-6">
                    Estate Planning Attorney Serving {loc.city}, {loc.county}
                  </h2>
                  <div className="w-16 h-1 bg-[#4A708B] mb-8" />
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Illinois Estate Law provides comprehensive, flat-fee estate planning services to residents of {loc.city} and the surrounding {loc.county} area. Located {loc.distanceFromChicago}, {loc.city} (population {loc.population}) is a community we are proud to serve.
                    </p>
                    <p>
                      {loc.localNote} Whether you need a simple will, a revocable living trust, powers of attorney, or healthcare directives, our firm offers a fully virtual process that allows you to complete your entire estate plan from the comfort of your home.
                    </p>
                    <p>
                      Attorney Mary Liberty works directly with every client, offering clear communication, transparent pricing, and fast turnaround. There are no hourly bills, no hidden fees, and no surprises. {meetingText}
                    </p>
                    <p>
                      If you need probate assistance in {loc.county}, our firm also handles full probate administration, summary probate, and heir representation at the {loc.countyCourtName}. We serve all of Illinois and can help with estate matters in any county.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="bg-[#f8f9fa] rounded-xl border border-slate-200 p-6">
                    <div className="w-16 h-16 bg-[#2D3E50] rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#2D3E50] text-center mb-3">
                      Mary Liberty
                    </h3>
                    <p className="text-sm text-slate-500 text-center mb-4">Estate Planning Attorney</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Mary Liberty is a graduate of Loyola University Chicago School of Law and a SuperLawyers Rising Star in 2025 and 2026. She operates on a 100% flat-fee model with no hourly billing, no hidden fees, and no surprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-10 text-center">
                Estate Planning Services in {loc.city}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc) => (
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

        {/* Why Illinois Estate Law */}
        <section className="bg-[#2D3E50] py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-white mb-12 text-center">
                Why {loc.city} Residents Choose Illinois Estate Law
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: DollarSign, title: 'Flat-Fee Pricing', desc: 'Know the exact cost upfront. No hourly billing, no surprises.' },
                  { icon: Home, title: 'Fully Virtual', desc: 'Complete your entire estate plan from home. No office visits required.' },
                  { icon: Clock, title: 'Fast Turnaround', desc: 'Most estate plans completed within 1\u20132 weeks.' },
                  { icon: User, title: 'Personal Attention', desc: 'Work directly with attorney Mary Liberty from start to finish.' },
                ].map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-10 text-center">
                Transparent Flat-Fee Pricing
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
                {pricingPackages.map((pkg) => (
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

        {/* Local Section */}
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-6 text-center">
                Serving {loc.city} and {loc.county}
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-center mb-10">
                {loc.city} is part of {loc.county}, where probate and estate matters are handled by the {loc.countyCourtName}. Illinois Estate Law has deep experience working with {loc.county} courts and serves the entire community through our fully virtual practice. We proudly serve all of Illinois.
              </p>

              {loc.meetingAddress ? (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-lg mx-auto text-center">
                  <div className="w-12 h-12 bg-[#2D3E50] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#2D3E50] mb-2">In-Person Meetings Available</h3>
                  <p className="text-slate-600 text-sm">{loc.meetingAddress}</p>
                  <p className="text-slate-500 text-xs mt-2">Available for current clients by appointment</p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 md:p-8 max-w-lg mx-auto text-center">
                  <div className="w-12 h-12 bg-[#2D3E50] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#2D3E50] mb-2">Fully Virtual Service</h3>
                  <p className="text-slate-600 text-sm">No office visit needed. We serve {loc.city} residents remotely from our Chicago-area offices.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <CTABanner
          title="Ready to Protect Your Family's Future?"
          subtitle={`Schedule your free consultation today. Serving ${loc.city}, ${loc.county}, and all of Illinois.`}
        />

        <FAQAccordion
          title={`Frequently Asked Questions \u2014 Estate Planning in ${loc.city}`}
          items={getCityFAQs(loc.city)}
        />
      </main>
    </>
  );
}
