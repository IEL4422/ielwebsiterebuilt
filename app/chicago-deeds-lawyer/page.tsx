'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Users, AlertCircle, CheckCircle, Heart, Shield, Home } from 'lucide-react';

export default function ChicagoDeedsLawyerPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Illinois Estate Law - Deeds Attorney",
            "description": "Experienced Chicago deeds lawyer helping Illinois residents with Transfer on Death Instruments, Quit Claim Deeds, and Life Estate Deeds.",
            "url": "https://www.illinoisestatelaw.com/chicago-deeds-lawyer/",
            "telephone": "+1-312-373-0731",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "Illinois"
            },
            "priceRange": "$$",
            "serviceType": "Real Estate Deeds"
          })
        }}
      />

      <main>
        <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] min-h-[400px] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="font-['Lobster_Two'] text-[45px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-6">
                    Chicago Deeds Lawyer
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Expert guidance on Transfer on Death Instruments, Quit Claim Deeds, and Life Estate Deeds in Illinois
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book-consultation/"
                      className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
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
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Deed Services We Offer</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Transfer on Death Instruments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Quit Claim Deeds</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Life Estate Deeds</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Avoid Probate</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Protect Your Property with the Right Deed Strategy
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Real estate is often your most valuable asset. Using the right type of deed can help you avoid probate, protect your property, and ensure it passes to your loved ones according to your wishes. At Illinois Estate Law, we help Chicago residents choose and prepare the right deed for their unique situation.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Understanding Your Deed Options</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  In Illinois, there are several types of deeds that can help you accomplish different estate planning goals. Each type of deed serves a specific purpose, and choosing the right one depends on your individual circumstances, family situation, and long-term objectives.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Our Deed Services</h3>

                <div className="grid md:grid-cols-1 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Home className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Transfer on Death Instrument (TODI)</h4>
                        <p className="text-lg text-slate-600 mb-4">
                          A Transfer on Death Instrument allows you to designate who will receive your residential real estate when you pass away—without going through probate.
                        </p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <h5 className="font-bold text-slate-800 mb-3">Key Benefits:</h5>
                      <ul className="space-y-2 text-slate-600 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Avoids probate entirely for residential real estate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>You maintain full control and ownership during your lifetime</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Can be revoked or changed at any time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Beneficiary has no rights until your death</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Simple and cost-effective probate avoidance tool</span>
                        </li>
                      </ul>
                      <h5 className="font-bold text-slate-800 mb-3">Best For:</h5>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Residential property (single-family homes, condos, townhouses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>People who want to avoid probate but maintain full control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Those who want flexibility to change beneficiaries</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Quit Claim Deed</h4>
                        <p className="text-lg text-slate-600 mb-4">
                          A Quit Claim Deed transfers whatever ownership interest you have in a property to someone else—without making any promises about the title.
                        </p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <h5 className="font-bold text-slate-800 mb-3">Common Uses:</h5>
                      <ul className="space-y-2 text-slate-600 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Adding or removing a spouse from the title</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Transferring property into a trust</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Correcting title defects or errors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Transferring property between family members</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Clarifying ownership interests</span>
                        </li>
                      </ul>
                      <h5 className="font-bold text-slate-800 mb-3">Important to Know:</h5>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Provides no warranties about the title or liens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Typically used between people who know and trust each other</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>Not recommended for property sales to unrelated parties</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-8 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Shield className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">Life Estate Deed</h4>
                        <p className="text-lg text-slate-600 mb-4">
                          A Life Estate Deed lets you keep the right to live in and control your home for the rest of your life, while naming who will automatically receive the property after you pass away.
                        </p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <h5 className="font-bold text-slate-800 mb-3">Key Benefits:</h5>
                      <ul className="space-y-2 text-slate-600 mb-4">
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Property transfers outside of probate automatically</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>You retain full rights to use and live in the property</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>Can qualify for Medicaid planning in some situations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#77B1D4] font-bold">•</span>
                          <span>May provide capital gains tax benefits for beneficiaries</span>
                        </li>
                      </ul>
                      <h5 className="font-bold text-slate-800 mb-3">Important Considerations:</h5>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Difficult to revoke—requires consent of remainder beneficiaries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Cannot sell or mortgage property without beneficiary consent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>Less flexible than a Transfer on Death Instrument</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span>May affect eligibility for certain benefits</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Which Deed is Right for You?</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Choosing the right deed depends on your goals, family situation, and long-term plans. Here's a comparison to help you understand which option might work best for your circumstances:
                </p>

                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('comparison')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Deed Comparison Chart</span>
                    {expandedSection === 'comparison' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'comparison' && (
                    <div className="bg-white overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Feature</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">TODI</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Quit Claim Deed</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Life Estate Deed</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Avoids Probate</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Yes</td>
                            <td className="px-6 py-4 text-slate-600">Depends on how used</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Yes</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Maintain Full Control</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Yes</td>
                            <td className="px-6 py-4 text-red-600 font-bold">No (transfers ownership)</td>
                            <td className="px-6 py-4 text-amber-600 font-bold">Limited (need consent)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Easy to Revoke</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Yes</td>
                            <td className="px-6 py-4 text-red-600 font-bold">No (permanent transfer)</td>
                            <td className="px-6 py-4 text-red-600 font-bold">No (needs consent)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Can Sell/Mortgage Alone</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Yes</td>
                            <td className="px-6 py-4 text-slate-600">N/A (no longer owner)</td>
                            <td className="px-6 py-4 text-red-600 font-bold">No</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Property Types</td>
                            <td className="px-6 py-4 text-slate-600">Residential only</td>
                            <td className="px-6 py-4 text-slate-600">Any property</td>
                            <td className="px-6 py-4 text-slate-600">Any property</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Medicaid Planning</td>
                            <td className="px-6 py-4 text-red-600 font-bold">No</td>
                            <td className="px-6 py-4 text-slate-600">Possibly</td>
                            <td className="px-6 py-4 text-green-600 font-bold">Possibly</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Best For</td>
                            <td className="px-6 py-4 text-slate-600">Most people wanting probate avoidance</td>
                            <td className="px-6 py-4 text-slate-600">Trust funding, title corrections</td>
                            <td className="px-6 py-4 text-slate-600">Advanced planning scenarios</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Why Work with an Attorney for Deeds?</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  While it's technically possible to prepare deeds yourself, working with an experienced attorney ensures your deed is properly prepared, executed, and recorded. Mistakes in deed preparation can be costly and difficult to fix.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <h4 className="font-bold text-slate-800 mb-4">Our Deed Services Include:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Consultation to determine which deed type best fits your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Review of current property ownership and title</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Professional deed preparation with accurate legal descriptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Proper execution and witnessing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Recording with the county recorder's office</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Coordination with your overall estate plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span>Guidance on tax implications and benefits</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Frequently Asked Questions</h2>

                <div className="space-y-4 my-8">
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq1')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">What's the difference between a TODI and adding someone to my deed?</span>
                      {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq1' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          A Transfer on Death Instrument (TODI) allows you to name a beneficiary who will receive your property when you die, but they have NO rights or ownership while you're alive. You maintain complete control and can change or revoke it anytime. Adding someone to your deed (joint ownership) gives them immediate ownership rights and interest in the property. They can sell, mortgage, or transfer their share, and their creditors could potentially place liens on the property. A TODI is generally safer because you retain full control.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq2')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can I use a TODI for investment property or commercial real estate?</span>
                      {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq2' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          No. Illinois law limits Transfer on Death Instruments to residential real property—meaning single-family homes, condominiums, and townhouses that are used as residences. You cannot use a TODI for commercial property, farmland, vacant land, or investment properties. For these types of real estate, you should consider other estate planning options such as creating a trust or using a life estate deed.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq3')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">What happens to my mortgage when I use a TODI?</span>
                      {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq3' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          A Transfer on Death Instrument does not affect any mortgages, liens, or other encumbrances on the property. When your beneficiary receives the property through the TODI, they receive it subject to any existing mortgages and liens. The beneficiary will need to either continue making mortgage payments, pay off the mortgage, refinance, or sell the property. The mortgage doesn't disappear just because the property transfers through a TODI.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq4')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Should I use a quit claim deed to transfer property into my trust?</span>
                      {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq4' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Yes, a quit claim deed is commonly used to transfer property into a revocable living trust because you're essentially transferring the property from yourself as an individual to yourself as trustee. Since you're both the grantor and the grantee, the lack of warranties in a quit claim deed isn't a concern. However, it's important to have an attorney prepare the deed to ensure it's done correctly, properly references your trust, and won't trigger any due-on-sale clauses in your mortgage.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq5')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">How much does it cost to prepare a deed in Illinois?</span>
                      {expandedSection === 'faq5' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq5' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          At Illinois Estate Law, we charge $500 for deed preparation services, including Transfer on Death Instruments, Quit Claim Deeds, and Life Estate Deeds. This flat fee includes consultation, deed preparation, proper execution, and guidance on recording. Recording fees charged by the county recorder's office are separate and vary by county. Our transparent pricing means no surprises—you'll know exactly what you're paying upfront.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Protect Your Property?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let us help you choose and prepare the right deed for your situation. Protect your real estate and ensure it passes to your loved ones according to your wishes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors"
                >
                  Schedule Your Consultation
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
          </div>
        </section>
      </main>
    </>
  );
}
