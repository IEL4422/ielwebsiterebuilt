'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Users, AlertCircle, CheckCircle, Heart, Shield } from 'lucide-react';

export default function ChicagoWillsLawyerPage() {
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
            "name": "Illinois Estate Law - Wills Attorney",
            "description": "Experienced Chicago wills lawyer helping Illinois residents create comprehensive last will and testament documents that protect their families and assets.",
            "url": "https://www.illinoisestatelaw.com/chicago-wills-lawyer/",
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
            "serviceType": "Wills and Testament Planning"
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
                    Chicago Wills Lawyer
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Protect your family's future with a comprehensive will tailored to Illinois law
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
                    <h3 className="text-2xl font-bold text-white mb-4">Why You Need a Will</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Decide who inherits your property</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Name guardians for minor children</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Choose your executor</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Avoid family disputes</span>
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
                  Create Your Legacy with a Comprehensive Illinois Will
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Your last will and testament is one of the most important documents you'll ever create. It ensures your wishes are honored, your loved ones are protected, and your assets are distributed according to your intentions. At Illinois Estate Law, we help Chicago residents draft clear, legally enforceable wills that provide peace of mind and protect what matters most.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">What Is a Last Will and Testament?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A last will and testament is a legal document that specifies how you want your property and assets distributed after your death. It allows you to name beneficiaries, designate an executor to manage your estate, appoint guardians for minor children, and make specific bequests to individuals or charitable organizations. Without a valid will, Illinois intestacy laws determine how your estate is distributed, which may not align with your wishes.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  In Illinois, wills must meet specific legal requirements to be valid. The Illinois Probate Act governs the creation, execution, and administration of wills. Understanding these requirements ensures your will is legally enforceable and accomplishes your estate planning goals.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Essential Components of an Illinois Will</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Beneficiary Designations</h4>
                        <p className="text-slate-600">
                          Name specific individuals or organizations to receive your property, assets, and personal belongings
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Executor Appointment</h4>
                        <p className="text-slate-600">
                          Designate a trusted person to manage your estate, pay debts, and distribute assets according to your wishes
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
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Guardian Nominations</h4>
                        <p className="text-slate-600">
                          Choose who will care for your minor children if you and the other parent cannot
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
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Specific Bequests</h4>
                        <p className="text-slate-600">
                          Make gifts of specific property, cash amounts, or sentimental items to particular individuals
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Why Every Illinois Resident Needs a Will</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Many people believe they don't need a will because their estate is "too small" or "not complicated enough." This is a dangerous misconception. Without a will, you lose control over who inherits your property, who manages your estate, and who cares for your children. Illinois intestacy laws make these decisions for you, and the results often don't match what you would have wanted.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Dying Without a Will in Illinois Means:</h4>
                      <ul className="text-red-800 space-y-2">
                        <li>• State law determines who inherits your property</li>
                        <li>• Court appoints an administrator (may not be who you'd choose)</li>
                        <li>• Judge decides who becomes guardian of your minor children</li>
                        <li>• Unmarried partners receive nothing under intestacy law</li>
                        <li>• Step-children typically don't inherit</li>
                        <li>• Probate process becomes more complicated and expensive</li>
                        <li>• Family disputes are more likely to occur</li>
                        <li>• Specific personal items go to whoever the law says, not who you'd choose</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Illinois Will Requirements</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  For a will to be legally valid in Illinois, it must comply with specific statutory requirements. Understanding these requirements is crucial to ensuring your will is enforceable and accomplishes your goals. The Illinois Probate Act Section 755 ILCS 5/4-3 establishes the formal requirements for a valid will.
                </p>

                {/* Expandable Requirements Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('requirements')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Legal Requirements for Valid Illinois Wills</span>
                    {expandedSection === 'requirements' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'requirements' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Requirement</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Age Requirement</td>
                            <td className="px-6 py-4 text-slate-600">Must be 18 years or older (or an emancipated minor)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Mental Capacity</td>
                            <td className="px-6 py-4 text-slate-600">Must be of sound mind and memory, understanding the nature and extent of property and natural beneficiaries</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Written Document</td>
                            <td className="px-6 py-4 text-slate-600">Must be in writing (handwritten, typed, or printed)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Signature</td>
                            <td className="px-6 py-4 text-slate-600">Must be signed by the testator or by someone at the testator's direction in their presence</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Witnesses</td>
                            <td className="px-6 py-4 text-slate-600">Requires two credible witnesses who observe the signing</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Witness Requirements</td>
                            <td className="px-6 py-4 text-slate-600">Witnesses must be "credible" but not necessarily disinterested (though interested witnesses may affect inheritances)</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Notarization</td>
                            <td className="px-6 py-4 text-slate-600">Not required, but self-proving affidavit can simplify probate</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Choosing Your Executor</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Your executor (also called a personal representative) plays a crucial role in your estate plan. This person will be responsible for gathering your assets, paying debts and taxes, and distributing property to beneficiaries according to your will. Choosing the right executor is one of the most important decisions you'll make when creating your will.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Qualities of an Effective Executor</h3>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Trustworthy and Honest:</strong> Must handle your estate with integrity and follow your wishes faithfully</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Organized and Detail-Oriented:</strong> Needs to manage paperwork, deadlines, and financial records carefully</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Financially Responsible:</strong> Should understand basic financial concepts and money management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Available and Willing:</strong> Has agreed to serve and has time to dedicate to the role</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Good Communicator:</strong> Can work with family members, attorneys, and institutions effectively</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Mature and Responsible:</strong> Can handle stress and make difficult decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Impartial and Fair:</strong> Will treat all beneficiaries fairly according to your wishes</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Naming Guardians for Minor Children</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  For parents of minor children, naming a guardian is often the most important reason to create a will. A guardian is the person who will raise your children if both you and the other parent cannot. Without a will naming your preferred guardian, the court will decide who raises your children, and that person may not be who you would have chosen.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  In Illinois, your will can nominate both a guardian of the person (who makes decisions about the child's upbringing, education, and health) and a guardian of the estate (who manages the child's financial affairs). Often, these roles are filled by the same person, but you can designate different individuals if appropriate.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Important Considerations When Choosing Guardians:</h4>
                      <ul className="text-amber-800 space-y-2">
                        <li>• Choose someone who shares your values and parenting philosophy</li>
                        <li>• Consider the guardian's age, health, and family situation</li>
                        <li>• Ensure they are willing and able to take on this responsibility</li>
                        <li>• Think about geographic location and lifestyle compatibility</li>
                        <li>• Name alternate guardians in case your first choice cannot serve</li>
                        <li>• Discuss your wishes with the proposed guardians beforehand</li>
                        <li>• Review and update guardian nominations as circumstances change</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Types of Bequests in Your Will</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Your will can include various types of bequests to distribute your property according to your wishes. Understanding these different bequest types helps you create a comprehensive estate plan that addresses all your assets and intentions.
                </p>

                {/* Expandable Bequests Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('bequests')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Types of Bequests You Can Include</span>
                    {expandedSection === 'bequests' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'bequests' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Bequest Type</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Description</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Examples</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Specific Bequest</td>
                            <td className="px-6 py-4 text-slate-600">A gift of a particular item or specific property</td>
                            <td className="px-6 py-4 text-slate-600">"My diamond ring to my daughter Sarah"</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">General Bequest</td>
                            <td className="px-6 py-4 text-slate-600">A gift of a stated dollar amount</td>
                            <td className="px-6 py-4 text-slate-600">"$10,000 to my nephew John"</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Demonstrative Bequest</td>
                            <td className="px-6 py-4 text-slate-600">A dollar amount to be paid from a specific source</td>
                            <td className="px-6 py-4 text-slate-600">"$5,000 from my savings account to my sister"</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Residuary Bequest</td>
                            <td className="px-6 py-4 text-slate-600">All remaining property after specific and general bequests</td>
                            <td className="px-6 py-4 text-slate-600">"The rest of my estate to my spouse"</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Contingent Bequest</td>
                            <td className="px-6 py-4 text-slate-600">A gift that only takes effect if certain conditions are met</td>
                            <td className="px-6 py-4 text-slate-600">"If my brother predeceases me, his share to his children"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Charitable Bequest</td>
                            <td className="px-6 py-4 text-slate-600">A gift to a charitable organization or cause</td>
                            <td className="px-6 py-4 text-slate-600">"$25,000 to the American Cancer Society"</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Illinois Intestacy Laws: What Happens Without a Will</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  When someone dies without a valid will in Illinois, their estate is distributed according to the state's intestacy laws found in the Illinois Probate Act (755 ILCS 5/2-1). These laws create a fixed distribution scheme based on your family relationships at the time of death. Understanding intestacy helps you appreciate why creating a will is so important.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The intestacy distribution depends on which relatives survive you. The law gives priority to spouses and descendants, then extends to more distant relatives if closer ones don't exist. This statutory scheme may not reflect your actual wishes or your family's unique circumstances.
                </p>

                {/* Expandable Intestacy Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('intestacy')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Illinois Intestacy Distribution Rules</span>
                    {expandedSection === 'intestacy' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'intestacy' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Surviving Family Members</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Distribution Under Illinois Law</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Spouse and descendants (all descendants are also descendants of spouse)</td>
                            <td className="px-6 py-4 text-slate-600">Entire estate to spouse</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Spouse and descendants (at least one descendant is not descendant of spouse)</td>
                            <td className="px-6 py-4 text-slate-600">1/2 to spouse, 1/2 to descendants</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Spouse, no descendants, but parent or sibling</td>
                            <td className="px-6 py-4 text-slate-600">Entire estate to spouse</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">No spouse, but descendants</td>
                            <td className="px-6 py-4 text-slate-600">Entire estate to descendants (per stirpes)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">No spouse or descendants, but parents</td>
                            <td className="px-6 py-4 text-slate-600">Entire estate to parents equally (or to surviving parent)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">No spouse, descendants, or parents, but siblings</td>
                            <td className="px-6 py-4 text-slate-600">Entire estate to siblings and descendants of deceased siblings</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">No close relatives</td>
                            <td className="px-6 py-4 text-slate-600">Estate continues to more distant relatives; if none, escheats to county</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Updating and Revoking Your Will</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Your will should evolve with your life circumstances. Major life events often require updates to your estate plan to ensure your will continues to reflect your current wishes and family situation. Illinois law allows you to modify or revoke your will at any time, as long as you have testamentary capacity.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">When to Update Your Will:</h3>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Family Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Marriage or divorce</li>
                      <li>• Birth or adoption of children</li>
                      <li>• Death of beneficiary or executor</li>
                      <li>• Changes in family relationships</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Financial Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Significant increase in assets</li>
                      <li>• Major property purchases</li>
                      <li>• Starting a business</li>
                      <li>• Receiving inheritance</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-slate-800 mb-2">Other Changes</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Relocation to another state</li>
                      <li>• Changes in tax laws</li>
                      <li>• Guardian no longer suitable</li>
                      <li>• Change in estate goals</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Methods of Updating Your Will:</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Codicil (Amendment)</h4>
                    <p className="text-slate-600 mb-3">A separate document that modifies specific provisions of your existing will without replacing it entirely.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Best for:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Minor changes</li>
                      <li>• Adding small bequests</li>
                      <li>• Changing executor</li>
                      <li>• Updating addresses</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-2 border-[#77B1D4]">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">New Will</h4>
                    <p className="text-slate-600 mb-3">Creating a completely new will that automatically revokes all previous wills and codicils.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Best for:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Major life changes</li>
                      <li>• Significant revisions</li>
                      <li>• Multiple changes needed</li>
                      <li>• Simplicity and clarity</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Common Will Mistakes to Avoid</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Even with the best intentions, people make mistakes when creating their wills that can cause problems later. Being aware of these common pitfalls helps you create a more effective estate plan.
                </p>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Not Creating a Will:</strong> The most common mistake is simply not having a will at all</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>DIY Wills with Errors:</strong> Using online forms without legal guidance can lead to invalid documents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Improper Execution:</strong> Failing to follow Illinois witnessing requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Not Naming Alternate Beneficiaries:</strong> Forgetting to name backups if primary beneficiaries predecease you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Ignoring Non-Probate Assets:</strong> Not coordinating beneficiary designations with your will</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Vague Language:</strong> Using ambiguous terms that lead to interpretation disputes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Not Funding Bequests:</strong> Leaving specific property you no longer own</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">✗</span>
                      <span><strong>Never Updating:</strong> Keeping an outdated will that no longer reflects your life</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">How Illinois Estate Law Can Help</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Creating a will is more than just filling out a form. It requires careful consideration of your assets, family dynamics, and long-term goals. At Illinois Estate Law, we take the time to understand your unique situation and create a customized will that protects your family and honors your wishes.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Will Drafting Services Include:</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Comprehensive consultation to understand your family structure and goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Review of all assets and property to ensure complete coverage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Guidance on choosing executors, guardians, and beneficiaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Drafting clear, unambiguous will provisions that comply with Illinois law</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Proper execution with witnesses and self-proving affidavits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Coordination with trusts, powers of attorney, and healthcare directives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Tax planning considerations for larger estates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Secure storage and easy updating as your life changes</span>
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
                      <span className="font-bold text-slate-800">Do I need a lawyer to write my will in Illinois?</span>
                      {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq1' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          While Illinois law doesn't require you to use an attorney, working with an experienced wills lawyer ensures your document is legally valid, comprehensive, and tailored to your specific situation. DIY wills often contain errors that can make them invalid or create ambiguities that lead to disputes. An attorney can also help you consider tax implications and coordinate your will with other estate planning documents.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq2')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">How much does it cost to make a will in Chicago?</span>
                      {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq2' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          The cost of a will varies depending on the complexity of your estate and family situation. At Illinois Estate Law, we offer transparent, flat-fee pricing for will preparation. A simple will for an individual or couple typically costs between $500-$1,500, while more complex wills with trusts or tax planning may cost more. We provide clear pricing upfront with no hidden fees, and the cost is a small investment compared to the problems and expenses your family could face without a proper will.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq3')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can I disinherit a family member in Illinois?</span>
                      {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq3' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          In Illinois, you generally have the right to leave your property to whomever you choose. However, there are important exceptions. Your surviving spouse has certain statutory rights, including the right to elect against the will and take a statutory share of your estate (typically one-third or one-half depending on circumstances). You cannot completely disinherit your spouse. You can disinherit children, but you must be explicit about your intention to do so in your will to avoid claims that you accidentally omitted them.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq4')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Where should I keep my will?</span>
                      {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq4' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Store your original will in a safe, accessible location such as a fireproof home safe or with your attorney. Do NOT keep it in a bank safe deposit box, as these can be difficult to access after death. Inform your executor where to find your will. Provide copies (not originals) to your executor and close family members, but keep control of the original since destruction of the original can revoke the will. Many attorneys offer secure document storage as part of their estate planning services.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq5')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Does my will from another state work in Illinois?</span>
                      {expandedSection === 'faq5' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq5' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Illinois generally recognizes wills that were validly executed in other states under that state's laws at the time of execution. However, if you've moved to Illinois, it's wise to have an Illinois attorney review your out-of-state will. Different states have different laws regarding property rights, estate administration, and taxes. Your will may need updates to address Illinois-specific issues or to reflect changes in your life since moving. Creating a new Illinois will often provides greater certainty and simplifies the probate process.
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
                Ready to Protect Your Family's Future?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Don't leave your family's future to chance. Create a comprehensive will that ensures your wishes are honored and your loved ones are protected.
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
