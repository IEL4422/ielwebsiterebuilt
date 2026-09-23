'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, CheckCircle, Shield, FileText, DollarSign, Home, Users } from 'lucide-react';
import RelatedServices from '@/components/services/RelatedServices';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { REAL_ESTATE, usd } from '@/lib/pricing';

const closingPackages = [
  {
    id: 'residential-closing',
    name: 'Standard Residential Closing',
    audience: 'Buyer or seller represented by a real estate agent',
    price: REAL_ESTATE.residentialClosing,
    description: 'Full-service representation for a standard single-family home or condominium purchase or sale.',
    includes: ['Attorney review and contract negotiation', 'Title, survey, and closing-document review', 'Closing representation'],
  },
  {
    id: 'multi-unit-investment-closing',
    name: 'Multi-Unit or Investment Closing',
    audience: 'Buyer or seller of an investment property',
    price: REAL_ESTATE.multiUnitOrInvestmentClosing,
    description: 'Representation for a residential multi-unit building or other investment-property transaction.',
    includes: ['Attorney review and contract negotiation', 'Investment-property title and document review', 'Closing representation'],
  },
  {
    id: 'estate-trust-nonstandard-closing',
    name: 'Estate, Trust, or Nonstandard Title Closing',
    audience: 'Property held by an estate, trust, or under other authority',
    price: REAL_ESTATE.estateTrustOrNonstandardTitleClosing,
    description: 'For transactions requiring additional review of fiduciary authority or nonstandard ownership documents.',
    includes: ['Authority and governing-document review', 'Contract, title, survey, and closing-document review', 'Closing representation'],
  },
  {
    id: 'fsbo-representation',
    name: 'For Sale By Owner (FSBO)',
    audience: 'Seller without a listing agent',
    price: REAL_ESTATE.fsboRepresentation,
    description: 'Expanded seller representation that includes contract drafting and coordination normally handled by a listing agent.',
    includes: ['Purchase contract drafting or review', 'Transaction and title coordination', 'Closing representation'],
  },
];

export default function RealEstateClosingsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need an attorney for a real estate closing in Illinois?',
      a: 'While Illinois law does not require an attorney, it is strongly recommended and is standard practice. Most Illinois residential contracts include a 5-business-day attorney review period — having an attorney from the start means your interests are protected well before closing day.',
    },
    {
      q: 'When is the real estate attorney fee due?',
      a: 'The applicable flat fee is due at closing, not upfront. For sellers, the fee is generally deducted from the closing proceeds. The package price depends on whether the transaction is a standard residential closing, an investment or multi-unit property, an estate or trust closing, or a For Sale By Owner transaction.',
    },
    {
      q: 'Do you represent buyers, sellers, or both?',
      a: 'We represent both buyers and sellers in residential real estate transactions throughout Illinois. A standard agent-assisted residential purchase or sale is $750. Different concrete prices apply to multi-unit or investment properties, estate or trust transactions, nonstandard title, and For Sale By Owner sales.',
    },
    {
      q: 'What is the attorney review period in Illinois?',
      a: 'Most Illinois residential contracts include a 5-business-day attorney review period after the contract is signed. During this window your attorney can review the contract, request modifications, or void the contract entirely — protecting you before you are legally bound.',
    },
    {
      q: 'Can the closing be done remotely?',
      a: 'Yes. We offer both in-person and remote closing attendance depending on the transaction requirements and the preferences of all parties.',
    },
    {
      q: 'What areas of Illinois do you serve?',
      a: 'We represent buyers and sellers throughout Illinois, including Cook County, DuPage County, Lake County, Will County, Kane County, and surrounding areas.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Illinois Estate Law — Real Estate Closing Representation',
            description:
              'Flat-fee Illinois real estate closing representation for buyers, sellers, investment properties, estate and trust transactions, and For Sale By Owner sales.',
            url: 'https://www.illinoisestatelaw.com/chicago-real-estate-closings-lawyer/',
            telephone: '+1-312-373-0731',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Chicago',
              addressRegion: 'IL',
              addressCountry: 'US',
            },
            areaServed: { '@type': 'State', name: 'Illinois' },
            priceRange: '$',
            serviceType: 'Residential Real Estate Closing Representation',
          }),
        }}
      />

      <main>
        <InnerPageHero
          title="Real Estate Closing Representation"
          subtitle="Concrete flat-fee representation for Illinois buyers and sellers — from $750 to $1,500, due at closing rather than upfront."
        />

        {/* Included services and primary actions */}
        <section className="bg-[#33414E] py-10 px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
              <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-2">What Every Closing Package Includes</h2>
                <p className="mb-6 text-white/70">The exact work is tailored to your transaction, but every package includes the core legal protection below.</p>
                <ul className="grid gap-3 text-white/90 sm:grid-cols-2">
                  {[
                    'Contract and attorney-review guidance',
                    'Title and document review',
                    'Negotiation within the included scope',
                    'Settlement statement review',
                    'Closing attendance or representation',
                    'Attorney consultations throughout the transaction',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#9DB8D4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="flex flex-col justify-center rounded-2xl bg-white p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-[#547298]">Ready to move forward?</p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#33414E]">Start your closing</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">Choose the appropriate transaction type below, or schedule a consultation if you are not sure which package applies.</p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/get-started/"
                    className="inline-flex items-center justify-center rounded-full bg-[#547298] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#33414E]"
                  >
                    Get Started Online
                  </Link>
                  <Link
                    href="/book-consultation/"
                    className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] px-6 py-3 font-bold text-[#33414E] transition-colors hover:bg-[#F6F9FC]"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="tel:3123730731"
                    className="inline-flex items-center justify-center gap-2 py-2 font-bold text-[#547298] hover:text-[#33414E]"
                  >
                    <Phone className="h-5 w-5" />
                    (312) 373-0731
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Pricing packages */}
        <section className="bg-[#F6F9FC] py-16 lg:py-20">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-[#547298]">Flat-fee options</p>
              <h2 className="mt-2 text-[32px] font-extrabold text-[#33414E] lg:text-[36px]">Choose Your Closing Representation</h2>
              <p className="mt-3 text-lg text-slate-600">Each transaction type has a concrete price. Attorney fees are due at closing; closing costs and third-party charges are separate.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {closingPackages.map((pkg, index) => (
                <article key={pkg.name} className={`flex flex-col rounded-2xl bg-white p-7 shadow-sm ${index === 0 ? 'border-2 border-[#547298]' : 'border border-slate-200'}`}>
                  {index === 0 && <span className="mb-4 w-fit rounded-full bg-[#E8F1F8] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#547298]">Most common</span>}
                  <h3 className="text-2xl font-extrabold text-[#33414E]">{pkg.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#547298]">{pkg.audience}</p>
                  <p className="mt-5 text-4xl font-extrabold text-[#33414E]">{usd(pkg.price)}</p>
                  <p className="text-sm text-slate-500">Flat attorney fee · due at closing</p>
                  <p className="mt-4 leading-relaxed text-slate-600">{pkg.description}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-slate-700">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/start-online/?service=${pkg.id}&clientType=individual&source=closing-pricing`} className="mt-7 inline-flex items-center justify-center rounded-full bg-[#33414E] px-6 py-3 font-bold text-white transition-colors hover:bg-[#547298]">
                    Start This Closing
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[1140px] mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-extrabold text-[32px] lg:text-[36px] text-[#33414E] mb-6">
                Your Attorney From Contract to Keys
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Buying or selling a home is one of the largest financial transactions of your life. In Illinois, residential contracts include an attorney review period — and having an attorney in your corner from day one means you are protected at every step, not just at the closing table.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We provide full-service representation for residential buyers and sellers across Illinois. Standard agent-assisted representation is <strong className="text-[#33414E]">{usd(REAL_ESTATE.residentialClosing)}</strong>; multi-unit or investment closings are <strong className="text-[#33414E]">{usd(REAL_ESTATE.multiUnitOrInvestmentClosing)}</strong>; and estate, trust, or nonstandard-title closings are <strong className="text-[#33414E]">{usd(REAL_ESTATE.estateTrustOrNonstandardTitleClosing)}</strong>. Each fee is due at closing rather than upfront.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Selling <strong className="text-[#33414E]">For Sale By Owner</strong> is a different engagement. With no listing agent involved, we also handle the coordination an agent would normally carry, from drafting the contract through the closing table. FSBO representation is a flat <strong className="text-[#33414E]">{usd(REAL_ESTATE.fsboRepresentation)}</strong>, paid at closing out of the sale proceeds.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                No hourly billing. No surprise invoices. Just clear, flat-fee representation from contract to keys.
              </p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="bg-[#F6F9FC] py-16 lg:py-20">
          <div className="max-w-[1140px] mx-auto px-4">
            <h2 className="font-extrabold text-[32px] lg:text-[36px] text-[#33414E] mb-3 text-center">
              What We Handle for You
            </h2>
            <p className="text-slate-500 text-lg text-center mb-12 max-w-2xl mx-auto">
              Everything from the first contract review through closing day — all included in the flat fee.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: 'Contract Review',
                  body: 'We review your purchase or sale contract in detail during the attorney review period, flagging unfavorable terms and negotiating modifications to protect your position.',
                },
                {
                  icon: Shield,
                  title: 'Attorney Review Period',
                  body: 'Illinois contracts provide a 5-business-day attorney review window. We use this time to review, modify, or void the contract on your behalf before you are legally bound.',
                },
                {
                  icon: Home,
                  title: 'Title Review',
                  body: 'We examine the title commitment for liens, encumbrances, or defects that could affect the transaction and work to resolve any issues before closing.',
                },
                {
                  icon: Users,
                  title: 'Negotiation',
                  body: 'From repair credits to closing date adjustments, we negotiate on your behalf throughout the transaction — not just during the attorney review period.',
                },
                {
                  icon: DollarSign,
                  title: 'Closing Statement Review',
                  body: 'We review the closing disclosure and settlement statement to verify that all charges, credits, and prorations are accurate before you sign anything.',
                },
                {
                  icon: CheckCircle,
                  title: 'Closing Attendance',
                  body: 'Your attorney attends the closing in person or remotely to review final documents, answer questions, and make sure everything is handled correctly.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-[#7E9CC0] hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-[#7E9CC0]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#547298]" />
                  </div>
                  <h3 className="font-extrabold text-lg text-[#33414E] mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#33414E] py-14 px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-extrabold text-[28px] lg:text-[36px] text-white mb-4">
              Know Your Legal Fee Before the Transaction Begins
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Every package has a concrete flat price, with nothing due upfront. Sellers can generally deduct the attorney fee from proceeds at the closing table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started/"
                className="inline-flex items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white px-8 py-4 rounded-full font-bold transition-colors"
              >
                Get Started Online
              </Link>
              <Link
                href="/book-consultation/"
                className="inline-flex items-center justify-center bg-white text-[#33414E] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[1140px] mx-auto px-4">
            <h2 className="font-extrabold text-[32px] lg:text-[36px] text-[#33414E] mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center py-4 text-left text-[#33414E] font-semibold text-lg hover:text-[#547298] transition-colors"
                  >
                    {faq.q}
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5 text-slate-600 leading-relaxed">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-10 px-4 sm:px-5 bg-[#F6F9FC]">
          <div className="max-w-[1140px] mx-auto">
            <RelatedServices currentPage="closing" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#33414E] py-14 px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-extrabold text-[28px] lg:text-[32px] text-white mb-4">
              Ready to Move Forward?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get started online in minutes or book a free consultation. We represent buyers and sellers throughout Illinois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-started/"
                className="inline-flex items-center justify-center bg-[#7E9CC0] hover:bg-[#547298] text-white px-8 py-4 rounded-full font-bold transition-colors"
              >
                Get Started Online
              </Link>
              <Link
                href="/book-consultation/"
                className="inline-flex items-center justify-center bg-white text-[#33414E] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="tel:3123730731"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                (312) 373-0731
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
