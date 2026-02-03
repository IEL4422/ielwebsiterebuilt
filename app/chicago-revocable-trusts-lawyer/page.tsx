'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Lock, AlertCircle, CheckCircle, TrendingUp, Building } from 'lucide-react';

export default function ChicagoRevocableTrustsLawyerPage() {
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
            "name": "Illinois Estate Law - Revocable Trusts",
            "description": "Experienced Chicago revocable trusts lawyer helping Illinois residents avoid probate, protect privacy, and create comprehensive trust-based estate plans.",
            "url": "https://www.illinoisestatelaw.com/chicago-revocable-trusts-lawyer/",
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
            "serviceType": "Revocable Trust Planning and Administration"
          })
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] min-h-[400px] flex items-center py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="font-['Lobster_Two'] text-[45px] md:text-[55px] lg:text-[65px] font-normal text-white leading-tight mb-6">
                    Chicago Revocable Trusts Lawyer
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Avoid probate, protect privacy, and secure your family's future with a comprehensive revocable living trust
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
                    <h3 className="text-2xl font-bold text-white mb-4">Benefits of a Revocable Trust</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Avoid probate court entirely</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Maintain complete privacy</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Plan for incapacity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Control asset distribution</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Protect Your Legacy with an Illinois Revocable Living Trust
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A revocable living trust is one of the most powerful estate planning tools available to Illinois residents. It allows you to avoid probate, maintain privacy, plan for incapacity, and control exactly how and when your assets are distributed to your beneficiaries. At Illinois Estate Law, we help Chicago families create comprehensive trust-based estate plans that provide security and peace of mind for generations.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">What Is a Revocable Living Trust?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A revocable living trust is a legal entity you create during your lifetime to hold and manage your assets. You transfer ownership of your property into the trust, and the trust then owns those assets on your behalf. As the "grantor" (creator) of the trust, you maintain complete control over all trust assets while you're alive and mentally capable. You can modify, amend, or even completely revoke the trust at any time.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The trust is "living" because you create it during your lifetime, and "revocable" because you can change it. This flexibility distinguishes it from an irrevocable trust, which generally cannot be changed once created. The Illinois Trust Code (760 ILCS 3/101 et seq.) governs the creation and administration of trusts in Illinois, providing a comprehensive legal framework that protects both grantors and beneficiaries.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Key Roles in a Revocable Living Trust</h3>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Grantor</h4>
                        <p className="text-slate-600">
                          The person who creates the trust and transfers assets into it. You typically serve as grantor.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Lock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Trustee</h4>
                        <p className="text-slate-600">
                          The person or institution that manages the trust assets. You usually serve as your own trustee during your lifetime.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Beneficiary</h4>
                        <p className="text-slate-600">
                          The people or organizations that benefit from the trust and receive distributions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Why Create a Revocable Living Trust?</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Revocable living trusts offer numerous advantages over simple wills, particularly for Illinois residents facing Cook County's complex and time-consuming probate process. Understanding these benefits helps you decide whether a trust-based estate plan is right for your family.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Avoiding Probate</h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The primary reason most people create revocable trusts is to avoid probate. Assets held in a properly funded trust pass directly to your beneficiaries without court involvement. This saves time, money, and stress for your family during an already difficult time.
                </p>

                <div className="bg-blue-50 border-l-4 border-[#77B1D4] p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#77B1D4] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Benefits of Avoiding Probate:</h4>
                      <ul className="text-slate-800 space-y-2">
                        <li>• Distribution typically occurs within weeks rather than months or years</li>
                        <li>• Saves thousands of dollars in court costs and legal fees</li>
                        <li>• Maintains complete privacy (probate is public record)</li>
                        <li>• Avoids delays from court backlogs and scheduling</li>
                        <li>• Reduces opportunity for will contests and family disputes</li>
                        <li>• Simplifies administration for your successor trustee</li>
                        <li>• Protects assets in multiple states from ancillary probate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Privacy Protection</h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Unlike wills, which become public record when filed with the probate court, revocable trusts remain completely private. Your trust document, asset inventory, and beneficiary designations never become part of the public record. This protects your family's financial privacy and reduces the risk of predatory targeting of your beneficiaries.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Incapacity Planning</h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  A revocable trust provides seamless management if you become incapacitated due to illness, injury, or cognitive decline. Your successor trustee can immediately step in to manage trust assets without court involvement, guardianship proceedings, or delays. This ensures your bills are paid, investments are managed, and your financial affairs continue smoothly even when you cannot manage them yourself.
                </p>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">How Revocable Trusts Work in Illinois</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Understanding the mechanics of how a revocable trust operates helps you appreciate its effectiveness as an estate planning tool. The process involves creating the trust document, funding it with your assets, and managing it during your lifetime.
                </p>

                {/* Expandable Process Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('process')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Trust Creation and Administration Process</span>
                    {expandedSection === 'process' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'process' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Phase</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Actions</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Outcome</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Creation</td>
                            <td className="px-6 py-4 text-slate-600">Attorney drafts trust document according to your wishes; you sign the document</td>
                            <td className="px-6 py-4 text-slate-600">Trust is established and ready to receive assets</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Funding</td>
                            <td className="px-6 py-4 text-slate-600">Transfer real estate, bank accounts, investments, and other assets into trust name</td>
                            <td className="px-6 py-4 text-slate-600">Assets owned by trust will avoid probate</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Lifetime Management</td>
                            <td className="px-6 py-4 text-slate-600">You manage trust assets as trustee with complete control; can amend or revoke trust</td>
                            <td className="px-6 py-4 text-slate-600">Assets protected and managed according to your wishes</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Upon Incapacity</td>
                            <td className="px-6 py-4 text-slate-600">Successor trustee takes over management seamlessly without court involvement</td>
                            <td className="px-6 py-4 text-slate-600">Financial affairs continue smoothly; no guardianship needed</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">After Death</td>
                            <td className="px-6 py-4 text-slate-600">Successor trustee distributes assets to beneficiaries according to trust terms</td>
                            <td className="px-6 py-4 text-slate-600">Quick, private distribution without probate court</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Funding Your Revocable Trust</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Creating a trust document is only the first step. To make your trust effective, you must "fund" it by transferring assets into the trust's name. An unfunded trust provides no benefits and won't help your family avoid probate. Proper funding is absolutely essential to a successful trust-based estate plan.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Critical Warning About Unfunded Trusts:</h4>
                      <p className="text-amber-800 mb-2">
                        Many people create trusts but never properly fund them. This is one of the most common and costly estate planning mistakes. If your assets aren't titled in your trust's name when you die, they will still go through probate—defeating the entire purpose of creating the trust.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Assets to Transfer Into Your Trust</h3>

                {/* Expandable Funding Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('funding')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Trust Funding Methods by Asset Type</span>
                    {expandedSection === 'funding' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'funding' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Asset Type</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Funding Method</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Real Estate</td>
                            <td className="px-6 py-4 text-slate-600">Deed property from your name to trust name; record new deed with county recorder</td>
                            <td className="px-6 py-4 text-slate-600">Most important asset to transfer; must follow specific deed requirements</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Bank Accounts</td>
                            <td className="px-6 py-4 text-slate-600">Work with bank to retitle accounts in trust name or name trust as POD beneficiary</td>
                            <td className="px-6 py-4 text-slate-600">Each bank has different procedures; bring trust certificate</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Investment Accounts</td>
                            <td className="px-6 py-4 text-slate-600">Contact brokerage firm to retitle accounts; may need to open new trust account</td>
                            <td className="px-6 py-4 text-slate-600">Usually requires trust certification and documentation</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Business Interests</td>
                            <td className="px-6 py-4 text-slate-600">Assign ownership interest to trust; may require operating agreement amendments</td>
                            <td className="px-6 py-4 text-slate-600">Consult with business partners and review governing documents first</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Vehicles</td>
                            <td className="px-6 py-4 text-slate-600">Generally not recommended; keep in individual name with TOD beneficiary instead</td>
                            <td className="px-6 py-4 text-slate-600">Insurance and liability issues make trust ownership impractical</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Retirement Accounts</td>
                            <td className="px-6 py-4 text-slate-600">Do NOT transfer; name trust as beneficiary only if needed for specific planning goals</td>
                            <td className="px-6 py-4 text-slate-600">Transferring IRAs/401(k)s to trust creates immediate tax liability</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Personal Property</td>
                            <td className="px-6 py-4 text-slate-600">Use assignment of personal property document for tangible items</td>
                            <td className="px-6 py-4 text-slate-600">Covers furniture, jewelry, art, collectibles, and other valuables</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Choosing Your Successor Trustee</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Your successor trustee is the person or institution that will manage your trust if you become incapacitated or after your death. This is one of the most important decisions in your trust planning. Your successor trustee must be trustworthy, organized, and capable of managing potentially complex financial and legal responsibilities.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Qualities of an Effective Successor Trustee</h3>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Trustworthy and Ethical:</strong> Must act in beneficiaries' best interests and resist conflicts of interest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Financially Competent:</strong> Understands investments, taxes, and financial management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Organized and Detail-Oriented:</strong> Can manage paperwork, records, and administrative tasks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Good Communicator:</strong> Can work effectively with beneficiaries, attorneys, and financial institutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Impartial:</strong> Can treat all beneficiaries fairly without favoritism</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Available:</strong> Has time to dedicate to trust administration duties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Younger Than You:</strong> Likely to survive you and be available when needed</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Individual vs. Corporate Trustee</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Individual Trustee</h4>
                    <p className="text-slate-600 mb-3">A family member, friend, or trusted individual serves as trustee.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Advantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-3">
                      <li>• Personal knowledge of family</li>
                      <li>• No fees (unless you choose to pay)</li>
                      <li>• Flexible and accessible</li>
                      <li>• Familiar with your wishes</li>
                    </ul>
                    <p className="text-sm text-slate-500 font-medium mb-2">Disadvantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• May lack financial expertise</li>
                      <li>• Could face family pressure or conflicts</li>
                      <li>• May become incapacitated or die</li>
                      <li>• Limited accountability</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-2 border-[#77B1D4]">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Corporate Trustee</h4>
                    <p className="text-slate-600 mb-3">A bank, trust company, or professional fiduciary serves as trustee.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Advantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-3">
                      <li>• Professional investment management</li>
                      <li>• Expertise in trust administration</li>
                      <li>• Institutional permanence</li>
                      <li>• Impartial and objective</li>
                    </ul>
                    <p className="text-sm text-slate-500 font-medium mb-2">Disadvantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Charges annual fees (typically 1-2% of assets)</li>
                      <li>• Less personal relationship</li>
                      <li>• May have minimum asset requirements</li>
                      <li>• More formal and bureaucratic</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Revocable Trust vs. Will: Understanding the Differences</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Many people wonder whether they need a will if they have a revocable trust, or vice versa. The answer is that both documents serve important but different purposes in a comprehensive estate plan. Understanding the distinctions helps you make informed decisions about your planning needs.
                </p>

                {/* Expandable Comparison Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('comparison')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Revocable Trust vs. Will Comparison</span>
                    {expandedSection === 'comparison' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'comparison' && (
                    <div className="bg-white overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Factor</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Revocable Trust</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Will</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Probate</td>
                            <td className="px-6 py-4 text-slate-600">Avoids probate for trust assets</td>
                            <td className="px-6 py-4 text-slate-600">Requires probate</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Privacy</td>
                            <td className="px-6 py-4 text-slate-600">Remains private</td>
                            <td className="px-6 py-4 text-slate-600">Becomes public record</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Incapacity Planning</td>
                            <td className="px-6 py-4 text-slate-600">Successor trustee manages assets</td>
                            <td className="px-6 py-4 text-slate-600">No incapacity protection</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Cost</td>
                            <td className="px-6 py-4 text-slate-600">Higher initial cost</td>
                            <td className="px-6 py-4 text-slate-600">Lower initial cost</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Timeline</td>
                            <td className="px-6 py-4 text-slate-600">Distribution in weeks</td>
                            <td className="px-6 py-4 text-slate-600">Distribution in 6-18 months</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Guardian Nominations</td>
                            <td className="px-6 py-4 text-slate-600">Cannot name guardians</td>
                            <td className="px-6 py-4 text-slate-600">Names guardians for minors</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Ongoing Management</td>
                            <td className="px-6 py-4 text-slate-600">Requires funding and maintenance</td>
                            <td className="px-6 py-4 text-slate-600">No ongoing management</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Effective Date</td>
                            <td className="px-6 py-4 text-slate-600">Immediately upon creation</td>
                            <td className="px-6 py-4 text-slate-600">Only after death</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 border-l-4 border-[#77B1D4] p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#77B1D4] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">You Still Need a "Pour-Over" Will:</h4>
                      <p className="text-slate-800">
                        Even with a revocable trust, you should also have a will (called a "pour-over will"). This backup document transfers any assets you forgot to put in your trust into the trust after your death, names guardians for minor children, and handles other matters that a trust cannot address. Think of it as a safety net for your trust-based plan.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Modifying Your Revocable Trust</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  One of the key advantages of a revocable trust is your ability to modify it at any time during your lifetime as long as you have mental capacity. Life changes constantly, and your estate plan should adapt to reflect new circumstances, changed relationships, and updated goals.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">When to Update Your Trust:</h3>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Family Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Marriage or divorce</li>
                      <li>• Birth or adoption of children/grandchildren</li>
                      <li>• Death of beneficiary or trustee</li>
                      <li>• Changes in family relationships</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Financial Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Significant change in assets</li>
                      <li>• Acquisition or sale of major property</li>
                      <li>• Starting or selling business</li>
                      <li>• Change in tax laws</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Other Circumstances</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Relocation to another state</li>
                      <li>• Trustee becomes unavailable</li>
                      <li>• Change in distribution wishes</li>
                      <li>• Every 3-5 years (general review)</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Common Trust Planning Mistakes</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Even well-intentioned people make mistakes when creating and maintaining their trusts. Being aware of these common pitfalls helps you avoid problems that could undermine your estate plan.
                </p>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Failing to Fund the Trust:</strong> Creating a trust but not transferring assets into it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Incomplete Funding:</strong> Transferring some assets but missing important ones like real estate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Forgetting to Update After Funding:</strong> Acquiring new assets in individual name instead of trust name</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Not Coordinating Beneficiary Designations:</strong> Life insurance and retirement accounts that conflict with trust plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Choosing Wrong Successor Trustee:</strong> Naming someone incapable or unwilling to serve</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Never Updating:</strong> Keeping an outdated trust that no longer reflects your life or wishes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Vague Distribution Instructions:</strong> Ambiguous language that creates disputes among beneficiaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>No Pour-Over Will:</strong> Failing to create backup will for assets outside trust</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">How Illinois Estate Law Can Help</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Creating an effective revocable trust requires more than just a standard form document. It requires careful analysis of your assets, family dynamics, goals, and Illinois-specific legal requirements. At Illinois Estate Law, we create customized trust-based estate plans that protect your family and accomplish your specific objectives.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Revocable Trust Services Include:</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Comprehensive consultation to understand your assets, family, and goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Customized trust drafting that complies with Illinois Trust Code</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Complete funding assistance for all asset types</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Preparation of deeds for real estate transfers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Coordination with financial institutions for account transfers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Pour-over will to complement your trust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Powers of attorney and healthcare directives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Regular reviews and amendments as your life changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Successor trustee guidance and support</span>
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
                      <span className="font-bold text-slate-800">How much does it cost to create a revocable trust in Chicago?</span>
                      {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq1' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          The cost of creating a revocable trust typically ranges from $2,000 to $5,000 depending on the complexity of your situation. This usually includes the trust document, pour-over will, powers of attorney, healthcare directives, and initial funding assistance. While this is more expensive than a simple will, the savings in probate costs and the benefits to your family far exceed the initial investment. At Illinois Estate Law, we provide transparent flat-fee pricing with no hidden costs.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq2')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Do I lose control of my assets if I put them in a trust?</span>
                      {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq2' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          No. With a revocable living trust, you maintain complete control over all trust assets during your lifetime. As trustee, you can buy, sell, transfer, or use trust assets exactly as you did before. You can modify the trust terms, change beneficiaries, or even revoke the trust entirely at any time. The only difference is that assets are titled in the trust name instead of your individual name, but you retain all beneficial ownership and control.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq3')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Does a revocable trust save estate taxes?</span>
                      {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq3' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          A basic revocable living trust does not reduce estate taxes. Because you maintain control over the assets, they are still part of your taxable estate. However, trusts can be designed with specific provisions to reduce estate taxes for larger estates. This might include credit shelter trusts (also called bypass trusts) or generation-skipping provisions. The primary benefits of revocable trusts are avoiding probate and providing incapacity planning, not tax savings. If estate tax planning is a concern, we can discuss more advanced trust strategies.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq4')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">What happens if I forget to put an asset in my trust?</span>
                      {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq4' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Any assets not in your trust when you die will need to go through probate. This is why we prepare a "pour-over will" as part of your trust-based plan. This will transfers any probate assets into your trust, where they are then distributed according to your trust terms. However, this still requires probate (though usually simplified), which is why proper funding is so important. We recommend periodic reviews to ensure all assets are properly titled in your trust name, especially after acquiring new property.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq5')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can I have a trust for each spouse or do we need a joint trust?</span>
                      {expandedSection === 'faq5' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq5' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Married couples in Illinois can choose either separate trusts for each spouse or a joint revocable trust. Joint trusts are simpler and less expensive to create and maintain, which works well for most couples with straightforward estates. Separate trusts may be better for blended families, significant separate property, second marriages, or situations where spouses have very different estate planning goals. We'll help you evaluate which approach best suits your specific circumstances and family dynamics.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Create Your Revocable Living Trust?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Protect your family from probate and ensure your wishes are honored. Schedule a consultation to discuss your trust-based estate plan.
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
