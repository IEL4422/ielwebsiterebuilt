'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, CheckCircle, FileText, Home, Shield, Users, RefreshCw, AlertCircle } from 'lucide-react';
import RelatedServices from '@/components/services/RelatedServices';
import { InnerPageHero } from '@/components/layout/InnerPageHero';

export default function ChicagoDeedsLawyerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is a Transfer on Death Instrument (TODI) in Illinois?',
      a: 'A Transfer on Death Instrument (TODI) is an Illinois deed that transfers real estate directly to a named beneficiary upon the owner\'s death — without going through probate. The owner retains full control of the property during their lifetime and can revoke or change the beneficiary at any time.',
    },
    {
      q: 'What is a quit claim deed and when is it used?',
      a: 'A quit claim deed transfers whatever interest the grantor currently holds in a property — without any warranty of title. Quit claim deeds are commonly used between family members, divorcing spouses, to add or remove a co-owner, or to correct a name on an existing deed.',
    },
    {
      q: 'What is the difference between a quit claim deed and a warranty deed?',
      a: 'A warranty deed guarantees that the grantor holds clear title and will defend against any future title claims — it is the standard deed used in arm\'s-length real estate sales. A quit claim deed makes no such guarantee and simply conveys whatever interest the grantor has.',
    },
    {
      q: 'What is a life estate deed?',
      a: 'A life estate deed transfers ownership of real property while reserving the right to live in or use the property for the rest of the grantor\'s life. At the grantor\'s death, the property automatically passes to the named remainderman — avoiding probate on that asset.',
    },
    {
      q: 'Do I need an attorney to transfer real estate in Illinois?',
      a: 'Illinois law does not require an attorney for deed transfers, but having one protects you from errors that can cloud title, create tax problems, or trigger unintended tax consequences. A correctly drafted and recorded deed prevents costly complications down the road.',
    },
    {
      q: 'What areas of Illinois do you serve?',
      a: 'We draft and record deeds for properties throughout Illinois, including Cook County, DuPage County, Lake County, Will County, Kane County, and all surrounding counties.',
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
            name: 'Illinois Estate Law — Real Estate Deed Transfers',
            description:
              'Flat-fee deed drafting and recording for Illinois property owners — Transfer on Death Instruments, quit claim deeds, warranty deeds, and life estate deeds.',
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
            serviceType: 'Real Estate Deed Transfers',
          }),
        }}
      />

      <main>
        <InnerPageHero
          title="Real Estate Deed Transfers"
          subtitle="Flat-fee deed drafting and recording for Illinois property owners — Transfer on Death Instruments, quit claim deeds, warranty deeds, and more."
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
                  <h3 className="text-2xl font-bold text-white mb-4">Deed Types We Handle</h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      'Transfer on Death Instruments (TODI)',
                      'Quit Claim Deeds',
                      'Warranty Deeds',
                      'Life Estate Deeds',
                      'Joint Tenancy &amp; Tenancy in Common',
                      'Corrective &amp; Scrivener\'s Deeds',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#7E9CC0]" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
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
                Transfer Property the Right Way
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Whether you are adding a family member to a title, removing an ex-spouse, avoiding probate on your home, or correcting an error on an existing deed, the deed must be drafted correctly and recorded with the county — or it can create title problems that are expensive to undo.
              </p>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We draft and record all types of Illinois real estate deeds for a flat fee. There are no hourly billing surprises, and we handle the recording with the county recorder so you do not have to.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Deed transfers are one of the most common estate planning and property planning tools — and one of the most commonly mishandled without an attorney.
              </p>
            </div>
          </div>
        </section>

        {/* Deed types grid */}
        <section className="bg-[#F6F9FC] py-16 lg:py-20">
          <div className="max-w-[1140px] mx-auto px-4">
            <h2 className="font-extrabold text-[32px] lg:text-[36px] text-[#33414E] mb-3 text-center">
              Deed Types We Draft
            </h2>
            <p className="text-slate-500 text-lg text-center mb-12 max-w-2xl mx-auto">
              Each deed type serves a different purpose. We help you select the right instrument and draft it correctly.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Home,
                  title: 'Transfer on Death Instrument (TODI)',
                  body: 'Pass your Illinois home directly to a named beneficiary at death — without probate. You retain full ownership and control during your lifetime and can revoke or amend the TODI at any time.',
                },
                {
                  icon: RefreshCw,
                  title: 'Quit Claim Deed',
                  body: 'Transfer whatever interest you hold in a property without warranty of title. Commonly used between spouses, family members, or co-owners to add or remove someone from title.',
                },
                {
                  icon: Shield,
                  title: 'Warranty Deed',
                  body: 'The standard deed in arm\'s-length real estate sales. The grantor warrants clear title and agrees to defend against any future claims — giving the buyer maximum protection.',
                },
                {
                  icon: Users,
                  title: 'Life Estate Deed',
                  body: 'Retain the right to live in the property for life while transferring the remainder interest to a named person. At death, the property passes automatically to the remainderman without probate.',
                },
                {
                  icon: FileText,
                  title: 'Joint Tenancy & Tenancy in Common',
                  body: 'Convert how co-owners hold title — joint tenancy includes right of survivorship, while tenancy in common allows each owner to pass their share through a will or trust.',
                },
                {
                  icon: AlertCircle,
                  title: 'Corrective Deed',
                  body: 'Fix errors in a previously recorded deed — misspelled names, incorrect legal descriptions, or other scrivener\'s errors that need to be corrected in the public record.',
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

        {/* What's included */}
        <section className="bg-[#33414E] py-14 px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-extrabold text-[28px] lg:text-[36px] text-white mb-4">
              Flat-Fee Deed Service &mdash; We Handle Everything
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              From consultation to county recording — we take care of every step so your deed is correct and properly recorded.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-10">
              {[
                { step: '01', title: 'Consultation', body: 'We discuss your goals and identify the right deed type for your situation.' },
                { step: '02', title: 'Drafting', body: 'We prepare the deed to Illinois legal standards with the correct legal description.' },
                { step: '03', title: 'Execution', body: 'We guide you through the signing and notarization requirements.' },
                { step: '04', title: 'Recording', body: 'We record the deed with the county recorder so the transfer is in the public record.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <p className="text-[#7E9CC0] font-extrabold text-sm mb-2">{step}</p>
                  <h3 className="text-white font-extrabold text-lg mb-2">{title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
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
            <RelatedServices currentPage="deed" />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#33414E] py-14 px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h2 className="font-extrabold text-[28px] lg:text-[32px] text-white mb-4">
              Ready to Transfer Your Property?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get started online in minutes or book a free consultation. We handle deed transfers throughout Illinois.
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
