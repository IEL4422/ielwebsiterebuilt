'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, CheckCircle, Shield, FileText, DollarSign, Home, Users } from 'lucide-react';
import RelatedServices from '@/components/services/RelatedServices';
import { InnerPageHero } from '@/components/layout/InnerPageHero';

export default function ChicagoDeedsLawyerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Do I need an attorney for a home sale or purchase in Illinois?',
      a: 'While Illinois law does not require an attorney, it is strongly recommended and considered standard practice. Illinois residential contracts include an attorney review period — having an attorney during this window protects your interests and can save you from costly mistakes or unfavorable terms.',
    },
    {
      q: 'When is the $750 flat fee due?',
      a: 'Our fee of $750 is due at closing — not upfront. You pay nothing out of pocket until the transaction is complete. For sellers, the fee can be deducted from proceeds at the closing table.',
    },
    {
      q: 'Do you represent buyers, sellers, or both?',
      a: 'We represent both buyers and sellers in residential real estate transactions across Illinois. The flat fee is the same regardless of which side of the transaction you are on.',
    },
    {
      q: 'What is the attorney review period in Illinois?',
      a: 'Most Illinois residential contracts include a 5-business-day attorney review period after the contract is signed. During this window your attorney can review the contract, request modifications, and protect you from unfavorable terms — or void the contract entirely if needed.',
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
            name: 'Illinois Estate Law — Real Estate Representation',
            description:
              'Flat-fee residential real estate representation for buyers and sellers in Illinois. $750 due at closing.',
            url: 'https://www.illinoisestatelaw.com/chicago-deeds-lawyer/',
            telephone: '+1-312-373-0731',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Chicago',
              addressRegion: 'IL',
              addressCountry: 'US',
            },
            areaServed: { '@type': 'State', name: 'Illinois' },
            priceRange: '$',
            serviceType: 'Residential Real Estate Representation',
          }),
        }}
      />

      <main>
        <InnerPageHero
          title="Residential Real Estate Representation"
          subtitle="Flat-fee attorney representation for buyers and sellers across Illinois — $750 due at closing, not upfront."
        />

        {/* Top CTA bar */}
        <div className="bg-[#33414E] py-8 px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col sm:flex-row gap-4">
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
                  Schedule Consultation
                </Link>
                <Link
                  href="tel:3123730731"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (312) 373-0731
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      'Contract Review &amp; Attorney Review Period',
                      'Title Review &amp; Issue Resolution',
                      'Negotiation &amp; Modification of Terms',
                      'Document Preparation &amp; Review',
                      'Closing Attendance (in-person or remote)',
                      'Unlimited Attorney Consultation',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7E9CC0]" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/70 text-sm">Flat Fee &mdash; Due at Closing</p>
                    <p className="text-3xl font-bold text-white">$750</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                We provide full-service representation for residential buyers and sellers across Illinois for a flat fee of <strong className="text-[#33414E]">$750, due at closing</strong>. There is nothing to pay upfront. For sellers, the fee is simply deducted from proceeds at the closing table.
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

        {/* Pricing callout */}
        <section className="bg-[#33414E] py-14 px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-extrabold text-[28px] lg:text-[36px] text-white mb-4">
              $750 Flat Fee &mdash; Due at Closing
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Nothing due upfront. We handle everything from the moment you sign the contract through the day you close. Sellers can deduct the fee from proceeds at the closing table.
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
