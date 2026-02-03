'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Users, AlertCircle, CheckCircle, Heart, Shield } from 'lucide-react';

export default function ChicagoPrenuptialAgreementsLawyerPage() {
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
            "name": "Illinois Estate Law - Prenuptial Agreements Attorney",
            "description": "Experienced Chicago prenuptial agreements lawyer helping couples protect their assets and clarify financial expectations before marriage.",
            "url": "https://www.illinoisestatelaw.com/chicago-prenuptial-agreements-lawyer/",
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
            "serviceType": "Prenuptial Agreements and Family Law Planning"
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
                    Chicago Prenuptial Agreements Lawyer
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Protect your assets and clarify expectations with a comprehensive prenuptial agreement
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
                    <h3 className="text-2xl font-bold text-white mb-4">Why Consider a Prenup?</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Protect pre-marriage assets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Clarify financial responsibilities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Safeguard family businesses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Reduce future conflict</span>
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
                  Professional Prenuptial Agreement Services in Chicago
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A prenuptial agreement is a practical tool for couples entering marriage who want to protect their individual assets, clarify financial expectations, and reduce potential conflicts. At Illinois Estate Law, we help Chicago couples create fair, enforceable prenuptial agreements that provide peace of mind and financial clarity for both partners.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">What Is a Prenuptial Agreement?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A prenuptial agreement (also called a "prenup" or "premarital agreement") is a legal contract created by two people before they marry. This agreement outlines how assets, debts, and financial matters will be handled during the marriage and in the event of divorce or death. Prenuptial agreements are governed by the Illinois Uniform Premarital Agreement Act and must meet specific legal requirements to be enforceable.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Prenuptial agreements aren't just for the wealthy. They benefit any couple who wants financial clarity, especially those with children from previous relationships, significant assets or debts, family businesses, or different financial philosophies. A well-drafted prenup protects both parties and promotes honest financial communication before marriage.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">What Can a Prenuptial Agreement Cover?</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Asset Protection</h4>
                        <p className="text-slate-600">
                          Identify and protect separate property, including property owned before marriage, inheritance, and gifts
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Property Division</h4>
                        <p className="text-slate-600">
                          Specify how marital property will be divided in the event of divorce or legal separation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Spousal Support</h4>
                        <p className="text-slate-600">
                          Address whether spousal maintenance (alimony) will be paid and under what circumstances
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Heart className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Debt Responsibility</h4>
                        <p className="text-slate-600">
                          Clarify responsibility for debts incurred before or during the marriage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Common Reasons to Create a Prenuptial Agreement</h2>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Protecting Separate Property:</strong> Keep assets you owned before marriage as your separate property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Protecting Children from Prior Relationships:</strong> Ensure assets pass to children from previous marriages or relationships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Protecting Family Businesses:</strong> Keep family business interests separate and prevent dilution through divorce</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Clarifying Financial Roles:</strong> Define how expenses, accounts, and property will be managed during marriage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Managing Student Loans or Debt:</strong> Ensure one spouse isn't responsible for the other's pre-existing debts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Protecting Future Inheritance:</strong> Preserve inheritance rights for specific beneficiaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Second Marriages:</strong> Address complex financial situations when both parties have established assets and possibly children</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Significant Income Disparity:</strong> Create fair expectations when partners have very different earning capacities</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Illinois Requirements for Valid Prenuptial Agreements</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  For a prenuptial agreement to be enforceable in Illinois, it must comply with the Illinois Uniform Premarital Agreement Act. Understanding these requirements ensures your prenup will be upheld if ever challenged.
                </p>

                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('requirements')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Legal Requirements for Valid Illinois Prenuptial Agreements</span>
                    {expandedSection === 'requirements' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'requirements' && (
                    <div className="bg-white p-6">
                      <ul className="space-y-4 text-slate-700">
                        <li className="flex items-start gap-3">
                          <span className="text-[#77B1D4] font-bold">1.</span>
                          <div>
                            <strong className="text-slate-800">Written Agreement:</strong> The prenuptial agreement must be in writing and signed by both parties
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#77B1D4] font-bold">2.</span>
                          <div>
                            <strong className="text-slate-800">Voluntary Agreement:</strong> Both parties must enter the agreement voluntarily, without coercion or duress
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#77B1D4] font-bold">3.</span>
                          <div>
                            <strong className="text-slate-800">Full Disclosure:</strong> Both parties must provide fair and reasonable disclosure of their assets and financial obligations
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#77B1D4] font-bold">4.</span>
                          <div>
                            <strong className="text-slate-800">Not Unconscionable:</strong> The agreement cannot be unconscionable when executed or when enforcement is sought
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#77B1D4] font-bold">5.</span>
                          <div>
                            <strong className="text-slate-800">Independent Legal Counsel:</strong> While not legally required, each party should have their own attorney to review the agreement
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#77B1D4] font-bold">6.</span>
                          <div>
                            <strong className="text-slate-800">Adequate Time for Review:</strong> Both parties should have sufficient time to review and understand the agreement before signing
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Our Prenuptial Agreement Services</h2>

                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Prenuptial Agreement Drafting & Negotiation</h3>
                    <p className="text-3xl font-bold mb-4">$5,000</p>
                    <p className="mb-4">Comprehensive prenuptial agreement services including:</p>
                    <ul className="space-y-2 text-white/90">
                      <li>• Initial consultation with both parties</li>
                      <li>• Full financial disclosure review</li>
                      <li>• Custom drafting tailored to your situation</li>
                      <li>• Negotiation between parties</li>
                      <li>• Finalization and execution</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-lg p-8 border-2 border-[#77B1D4]">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Prenuptial Agreement Review & Negotiation</h3>
                    <p className="text-3xl font-bold text-slate-800 mb-4">$3,000</p>
                    <p className="text-slate-700 mb-4">Professional review of existing prenup including:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Comprehensive legal review</li>
                      <li>• Analysis of fairness and enforceability</li>
                      <li>• Negotiation on your behalf</li>
                      <li>• Recommendations for modifications</li>
                      <li>• Protection of your interests</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#4A708B] to-[#2D3E50] rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Prenuptial Agreement Drafting</h3>
                    <p className="text-3xl font-bold mb-4">$3,000</p>
                    <p className="mb-4">Professional drafting services when both parties agree on terms:</p>
                    <ul className="space-y-2 text-white/90">
                      <li>• Initial consultation</li>
                      <li>• Custom agreement drafting</li>
                      <li>• Legal compliance review</li>
                      <li>• Finalization and execution guidance</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-lg p-8 border-2 border-slate-300">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Prenuptial Agreement Review</h3>
                    <p className="text-3xl font-bold text-slate-800 mb-4">$2,000</p>
                    <p className="text-slate-700 mb-4">Independent review of prenup drafted by other party's attorney:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Detailed legal analysis</li>
                      <li>• Identification of unfair provisions</li>
                      <li>• Consultation on implications</li>
                      <li>• Recommendations for protection</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Frequently Asked Questions</h2>

                <div className="space-y-4 my-8">
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq1')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">When should we create a prenuptial agreement?</span>
                      {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq1' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          The ideal time to create a prenuptial agreement is several months before your wedding. This allows adequate time for financial disclosure, negotiation, attorney review, and thoughtful consideration. Creating a prenup too close to the wedding date can raise questions about whether both parties entered into it voluntarily. We recommend starting the process at least 3-6 months before your wedding to avoid any appearance of coercion.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq2')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Will a prenup ruin the romance of our marriage?</span>
                      {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq2' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          A prenuptial agreement actually strengthens marriages by promoting honest financial communication and reducing future conflict. Couples who discuss finances openly before marriage tend to have stronger relationships. A prenup is simply a practical tool that protects both parties and provides clarity about expectations. Think of it like insurance—you hope you never need it, but you're glad to have it if circumstances change.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq3')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can a prenup address child custody or child support?</span>
                      {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq3' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          No. Illinois law does not allow prenuptial agreements to address child custody, visitation, or child support. These matters must be determined at the time of divorce based on the child's best interests at that time. Courts will not enforce prenuptial provisions that attempt to predetermine child-related issues, as these decisions must always prioritize the welfare of the children involved.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq4')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Do we each need our own attorney?</span>
                      {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq4' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          While not legally required in Illinois, it is strongly recommended that each party have independent legal counsel. Having separate attorneys ensures that both parties understand their rights, the agreement is fair to both sides, and the prenup is more likely to be enforceable if challenged. If one party drafted the agreement without the other having an attorney review it, a court may find the agreement was signed involuntarily or without adequate understanding.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq5')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can we modify our prenup after we're married?</span>
                      {expandedSection === 'faq5' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq5' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Yes. After marriage, you can create a postnuptial agreement to modify or replace your prenuptial agreement. Both parties must agree to the changes, and the postnuptial agreement must meet the same legal requirements as a prenup. Many couples update their agreements after major life events like the birth of children, significant changes in assets, or changes in career status.
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
                Ready to Protect Your Financial Future?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Start your marriage with clarity and confidence. Contact us to discuss your prenuptial agreement needs.
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
