'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Scale, AlertCircle, CheckCircle, Clock, DollarSign, FileWarning, UserX, ShieldAlert, Landmark } from 'lucide-react';
import RelatedServices from '@/components/services/RelatedServices';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { RATES, RETAINERS, usd, hourly } from '@/lib/pricing';
import { probateFAQs, contestedProbateFAQs } from '@/lib/practice-faqs';
import { BOOKING_UNCONTESTED_PROBATE, BOOKING_CONTESTED_PROBATE } from '@/lib/booking';

// Contested probate / will contests, consolidated into this page. The former
// standalone /contested-probate-lawyer/ page 301-redirects to #contested below.
const contestedGrounds = [
  { icon: Scale, title: 'Lack of Testamentary Capacity', description: 'The testator did not understand what they owned, who their natural heirs were, or what the will actually did. Often follows a dementia or terminal diagnosis.' },
  { icon: ShieldAlert, title: 'Undue Influence', description: 'Someone in a position of trust overpowered the testator’s free will. The classic pattern: a sudden new will, signed near death, prepared by the person who now inherits everything.' },
  { icon: FileWarning, title: 'Fraud or Forgery', description: 'The signature is not the testator’s, or they were deceived about what they were signing, or about facts that shaped how they left their estate.' },
  { icon: Landmark, title: 'Improper Execution', description: 'Illinois requires a will to be in writing, signed by the testator, and attested by two credible witnesses. A will that fails those formalities can be denied admission.' },
  { icon: UserX, title: 'Removal of an Executor or Administrator', description: 'For failing to account, self-dealing, wasting estate assets, refusing to distribute, or a disabling conflict of interest — often paired with a breach of fiduciary duty claim.' },
  { icon: Clock, title: 'Disputed Heirship & Estate Claims', description: 'Fights over who the legal heirs actually are, contested creditor claims, and disputes over the ownership or valuation of estate property.' },
];

export default function ChicagoProbateLawyerPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>

      <main>
        <InnerPageHero title="Probate Administration" subtitle="Compassionate, experienced guidance through Illinois probate administration" />
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
                  <h3 className="text-2xl font-bold text-white mb-4">Probate Services</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Executor representation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Beneficiary protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Estate administration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Will contests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#7E9CC0] rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Navigate Illinois Probate with Experienced Legal Guidance
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The passing of a loved one is difficult enough without the added stress of probate court proceedings. At Illinois Estate Law, we provide compassionate, expert guidance through every step of the probate process in Cook County and throughout Illinois. Whether you're serving as an executor, administrator, or beneficiary, we help you fulfill your responsibilities and protect your rights during this challenging time.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">What Is Probate?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Probate is the court-supervised legal process of administering a deceased person's estate. During probate, the court validates the will (if one exists), appoints a personal representative (executor or administrator), inventories the deceased's assets, pays debts and taxes, and distributes remaining property to beneficiaries according to the will or Illinois intestacy laws.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The Illinois Probate Act (755 ILCS 5/1-1 et seq.) governs probate proceedings in Illinois. While probate serves important purposes—protecting creditors' rights, ensuring proper asset distribution, and providing oversight—it can be time-consuming, expensive, and public. Understanding the process helps you navigate it more effectively.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Key Participants in Illinois Probate</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#7E9CC0] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#7E9CC0] text-white p-3 rounded-lg">
                        <Scale className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Executor/Administrator</h4>
                        <p className="text-slate-600">
                          The person appointed to manage the estate, pay debts, and distribute assets to beneficiaries
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#7E9CC0] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#7E9CC0] text-white p-3 rounded-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Beneficiaries/Heirs</h4>
                        <p className="text-slate-600">
                          Individuals entitled to receive assets from the estate under the will or intestacy law
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#7E9CC0] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#7E9CC0] text-white p-3 rounded-lg">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Creditors</h4>
                        <p className="text-slate-600">
                          Individuals or entities owed money by the deceased, with rights to payment from the estate
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#7E9CC0] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#7E9CC0] text-white p-3 rounded-lg">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Probate Court</h4>
                        <p className="text-slate-600">
                          The Cook County Circuit Court supervises the administration and ensures proper procedures
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">When Is Probate Required in Illinois?</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Not every estate must go through probate in Illinois. Understanding when probate is necessary helps you determine the appropriate course of action after a loved one's death.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Probate Is Generally Required When:</h4>
                      <ul className="text-amber-800 space-y-2">
                        <li>• The deceased owned real estate in their individual name</li>
                        <li>• Assets exceed $100,000 in total value (Illinois small estate threshold)</li>
                        <li>• Property needs to be transferred and no other transfer mechanism exists</li>
                        <li>• There is a will that needs court validation</li>
                        <li>• There are disputes among heirs or concerns about the will's validity</li>
                        <li>• Creditors need a formal claims process</li>
                        <li>• The deceased owned business interests requiring transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#7E9CC0] p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-[#7E9CC0] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Probate May Be Avoided When:</h4>
                      <ul className="text-slate-800 space-y-2">
                        <li>• All assets were in a properly funded revocable living trust</li>
                        <li>• Property was owned jointly with right of survivorship</li>
                        <li>• All accounts had valid payable-on-death (POD) or transfer-on-death (TOD) beneficiary designations</li>
                        <li>• Real estate transferred via transfer-on-death instrument (TODI)</li>
                        <li>• Estate qualifies for small estate affidavit (under $100,000 and no real estate)</li>
                        <li>• All significant assets pass outside probate through beneficiary designations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">The Illinois Probate Process</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Understanding the probate process helps you know what to expect and how long estate administration will take. While every case is unique, most probate proceedings follow a similar pattern established by Illinois law.
                </p>

                {/* Expandable Probate Process Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('process')}
                    className="w-full bg-[#33414E] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Illinois Probate Process Steps</span>
                    {expandedSection === 'process' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'process' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Step</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Action Required</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Timeline</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">1. File Petition</td>
                            <td className="px-6 py-4 text-slate-600">Executor files petition with probate court along with original will and death certificate</td>
                            <td className="px-6 py-4 text-slate-600">Within 30 days of death</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">2. Notice to Heirs</td>
                            <td className="px-6 py-4 text-slate-600">Provide formal notice to all beneficiaries, heirs, and interested parties</td>
                            <td className="px-6 py-4 text-slate-600">Within 14 days of filing</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">3. Appointment</td>
                            <td className="px-6 py-4 text-slate-600">Court issues Letters of Office appointing executor/administrator</td>
                            <td className="px-6 py-4 text-slate-600">2-4 weeks after filing</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">4. Publish Notice</td>
                            <td className="px-6 py-4 text-slate-600">Publish notice to creditors in local newspaper for 3 consecutive weeks</td>
                            <td className="px-6 py-4 text-slate-600">Immediately after appointment</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">5. Inventory Assets</td>
                            <td className="px-6 py-4 text-slate-600">Identify, locate, and value all estate assets; file inventory with court</td>
                            <td className="px-6 py-4 text-slate-600">Within 60 days of appointment</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">6. Claims Period</td>
                            <td className="px-6 py-4 text-slate-600">Creditors have time to file claims against the estate</td>
                            <td className="px-6 py-4 text-slate-600">6 months from notice publication</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">7. Pay Debts & Taxes</td>
                            <td className="px-6 py-4 text-slate-600">Pay valid claims, final expenses, and all applicable taxes</td>
                            <td className="px-6 py-4 text-slate-600">As claims are approved</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">8. File Accounting</td>
                            <td className="px-6 py-4 text-slate-600">Prepare detailed accounting of all estate transactions for court</td>
                            <td className="px-6 py-4 text-slate-600">After claims period ends</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">9. Distribute Assets</td>
                            <td className="px-6 py-4 text-slate-600">Distribute remaining assets to beneficiaries according to will or law</td>
                            <td className="px-6 py-4 text-slate-600">After debts paid</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">10. Close Estate</td>
                            <td className="px-6 py-4 text-slate-600">File final accounting and petition to close estate with court approval</td>
                            <td className="px-6 py-4 text-slate-600">6-18 months total (typical)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Executor Duties and Responsibilities</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Serving as an executor (also called personal representative) is a significant responsibility. You are taking on a fiduciary duty to act in the best interests of the estate and its beneficiaries. Understanding your duties helps you fulfill them properly and avoid personal liability.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Primary Executor Responsibilities</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Locate and Secure Assets:</strong> Find all estate property, secure valuables, and maintain property during administration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Notify Interested Parties:</strong> Provide proper notice to beneficiaries, heirs, and creditors as required by law</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Inventory and Value Assets:</strong> Create comprehensive list of all estate property with current fair market values</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Manage Estate Assets:</strong> Prudently invest and manage assets; maintain insurance; collect income</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Pay Debts and Expenses:</strong> Identify valid claims; pay legitimate debts, taxes, and administration expenses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>File Tax Returns:</strong> Prepare and file all required federal and state tax returns for the estate and decedent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Maintain Records:</strong> Keep detailed records of all transactions, receipts, and disbursements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Distribute Property:</strong> Transfer remaining assets to beneficiaries according to will or intestacy law</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span><strong>Account to Court:</strong> Provide detailed accounting of estate administration to probate court</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Common Probate Issues and Disputes</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  While many probate cases proceed smoothly, disputes and complications can arise. Being aware of potential problems helps you address them proactively or seek legal assistance when needed.
                </p>

                {/* Expandable Disputes Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('disputes')}
                    className="w-full bg-[#33414E] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Common Probate Disputes and Resolutions</span>
                    {expandedSection === 'disputes' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'disputes' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Issue Type</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Description</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Resolution Options</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Will Contests</td>
                            <td className="px-6 py-4 text-slate-600">Challenges to will validity based on lack of capacity, undue influence, or improper execution</td>
                            <td className="px-6 py-4 text-slate-600">Mediation, evidence presentation, court hearing</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Executor Misconduct</td>
                            <td className="px-6 py-4 text-slate-600">Allegations of breach of fiduciary duty, self-dealing, or mismanagement</td>
                            <td className="px-6 py-4 text-slate-600">Accounting review, removal petition, surcharge action</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Asset Valuation Disputes</td>
                            <td className="px-6 py-4 text-slate-600">Disagreements about proper valuation of estate property</td>
                            <td className="px-6 py-4 text-slate-600">Professional appraisals, court determination</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Creditor Claims</td>
                            <td className="px-6 py-4 text-slate-600">Disputes over validity or priority of creditor claims against estate</td>
                            <td className="px-6 py-4 text-slate-600">Claims review, objections, priority determination</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Missing Heirs</td>
                            <td className="px-6 py-4 text-slate-600">Unknown or unlocatable beneficiaries entitled to estate share</td>
                            <td className="px-6 py-4 text-slate-600">Heir search, notice by publication, court procedures</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Distribution Disputes</td>
                            <td className="px-6 py-4 text-slate-600">Conflicts about how assets should be divided or distributed</td>
                            <td className="px-6 py-4 text-slate-600">Will interpretation, family settlement agreement, court ruling</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Probate Costs and Timeline</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  One of the most common questions about probate is "How much will it cost?" and "How long will it take?" While every case is different, understanding typical costs and timelines helps you plan appropriately.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Typical Probate Costs in Illinois</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Fixed Costs</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Court filing fees: $400-$500</li>
                      <li>• Publication costs: $200-$400</li>
                      <li>• Probate bond (if required): Varies by estate size</li>
                      <li>• Certified copies: $25-$50</li>
                      <li>• Death certificates: $15-$20 each</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-2 border-[#7E9CC0]">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Variable Costs</h4>
                    <ul className="text-sm text-slate-600 space-y-2">
                      <li>• Attorney fees: $3,000-$10,000+ (depends on complexity)</li>
                      <li>• Executor fees: Reasonable compensation (often 2-4% of estate)</li>
                      <li>• Appraisal fees: $300-$1,500 per asset type</li>
                      <li>• Accounting fees: $500-$3,000</li>
                      <li>• Property maintenance: Varies</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Probate Timeline Factors</h3>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <p className="text-slate-700 mb-4">
                    <strong>Simple Estate (Uncontested, Few Assets):</strong> 6-9 months minimum (due to 6-month creditor claims period)
                  </p>
                  <p className="text-slate-700 mb-4">
                    <strong>Average Estate (Some Complexity):</strong> 9-18 months
                  </p>
                  <p className="text-slate-700 mb-4">
                    <strong>Complex Estate (Disputes, Taxes, Business Interests):</strong> 18 months - 3+ years
                  </p>
                  <p className="text-slate-700 font-medium">
                    Timeline extends with: will contests, missing heirs, tax audits, real estate sales, business valuations, or beneficiary disputes
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Independent vs. Supervised Administration</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Illinois law provides two types of probate administration. Understanding the difference helps determine the most efficient approach for your case.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Independent Administration</h4>
                    <p className="text-slate-600 mb-3">Executor manages estate with minimal court supervision. Available when all heirs consent.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Advantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-3">
                      <li>• Faster process</li>
                      <li>• Lower costs</li>
                      <li>• More flexibility</li>
                      <li>• Less court involvement</li>
                    </ul>
                    <p className="text-sm text-slate-500 font-medium mb-2">Requirements:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• All heirs must consent</li>
                      <li>• Executor must be qualified</li>
                      <li>• No disputes among beneficiaries</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border-2 border-[#7E9CC0]">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Supervised Administration</h4>
                    <p className="text-slate-600 mb-3">Court actively oversees executor's actions. Required when heirs don't all consent or disputes exist.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Characteristics:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-3">
                      <li>• Court approval for major decisions</li>
                      <li>• More oversight and protection</li>
                      <li>• Slower process</li>
                      <li>• Higher costs</li>
                    </ul>
                    <p className="text-sm text-slate-500 font-medium mb-2">When Used:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Beneficiary disputes exist</li>
                      <li>• Concerns about executor</li>
                      <li>• Not all heirs consent</li>
                      <li>• Complex estate issues</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Small Estate Affidavit: Avoiding Probate</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Illinois provides a simplified procedure for small estates that allows heirs to avoid formal probate entirely. If the estate qualifies, this can save significant time and money.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Small Estate Qualifications</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <p className="text-slate-700 font-bold mb-3">Your estate qualifies for Small Estate Affidavit if:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span>Total estate value is less than $100,000</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span>Deceased did not own any real estate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span>At least 6 months have passed since death</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span>No probate proceedings have been filed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-xl">✓</span>
                      <span>All known debts have been paid or provided for</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">How Illinois Estate Law Can Help</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Probate can be complex, time-consuming, and emotionally draining. Having experienced legal guidance makes the process smoother and helps you avoid costly mistakes. At Illinois Estate Law, we represent executors, administrators, and beneficiaries throughout the probate process.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Probate Services Include:</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Complete probate administration from filing to closing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Executor representation and guidance through fiduciary duties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Beneficiary representation to protect inheritance rights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Preparation and filing of all court documents and petitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Asset inventory and valuation assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Creditor claims review and resolution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Estate tax return preparation and filing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Will contest litigation and defense</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Small estate affidavit preparation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#7E9CC0] text-xl">→</span>
                      <span>Distribution planning and execution</span>
                    </li>
                  </ul>
                </div>

                <FAQAccordion title="Frequently Asked Questions" items={probateFAQs} />
              </div>
            </div>
          </div>
        </section>

        {/* ============================ CONTESTED PROBATE ============================ */}
        {/* Consolidated from the former /contested-probate-lawyer/ page, which now */}
        {/* 301-redirects here to #contested. Keyword H2s + Service/FAQPage schema */}
        {/* (in layout.tsx) preserve the standalone page's SEO. */}
        <section id="contested" className="scroll-mt-24 py-16 lg:py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="max-w-[1140px] mx-auto">
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Contested Probate & Will Contests in Illinois</h2>
              <div className="w-16 h-1 bg-[#4A708B] mb-8" />
              <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
                <p><strong className="text-[#33414E]">Probate becomes &ldquo;contested&rdquo; the moment someone formally objects to something the court is being asked to do</strong> — a will being admitted, an executor being appointed, an accounting being approved, or an estate being distributed. Until someone objects, probate is administrative. Once they do, it is litigation, with discovery, evidence, motions, and, if it does not settle, a trial. We represent heirs, beneficiaries, executors, and administrators on both sides of these disputes.</p>
                <p>A <strong>will contest</strong> is not an appeal against an outcome you dislike — being unhappy with your inheritance is not a ground to contest a will. It is a claim that the will itself is legally defective. <strong className="text-[#33414E]">In Illinois you generally have six months from the date the will is admitted to probate to file a will contest.</strong> That deadline is short and unforgiving; if you think something is wrong with an estate, the worst thing you can do is wait.</p>
              </div>

              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mt-12 mb-6">Grounds for a will contest &amp; other probate disputes</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{contestedGrounds.map((g) => (<ServiceCard key={g.title} icon={g.icon} title={g.title} description={g.description} />))}</div>

              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mt-12 mb-6">How we bill contested matters — and why it is not a flat fee</h3>
              <div className="max-w-4xl space-y-4 text-slate-600 leading-relaxed">
                <p>Almost everything this firm does is flat-fee. Contested probate is the exception. <strong className="text-[#33414E]">We can only quote a fixed price for work whose scope we control.</strong> An uncontested probate has a knowable list of filings and hearings, so we price it to the dollar. A contested matter does not — the other side decides how many motions to file, whether to fight discovery, and whether to settle or push to trial. Any firm quoting a flat fee for a court fight is guessing. We would rather bill you honestly for the hours we actually work.</p>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl">
                <div className="border-2 border-[#33414E] rounded-xl p-6"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">To begin</p><p className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#33414E] mb-2">{usd(RETAINERS.contestedProbate)}</p><p className="text-slate-600 text-sm">Minimum evergreen retainer, replenished as the matter proceeds.</p></div>
                <div className="border border-slate-200 rounded-xl p-6 bg-[#f8f9fa]"><p className="text-xs font-bold uppercase tracking-wider text-[#4A708B] mb-2">Hourly rates</p><p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">{hourly(RATES.attorneyHourly)} — attorney</p><p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-2">{hourly(RATES.paralegalHourly)} — paralegal</p><p className="text-slate-600 text-sm">You receive an itemized bill. Costs — filing, process server, transcripts — are billed to you as expenses.</p></div>
              </div>

              <div className="mt-8 max-w-4xl border-l-4 border-[#4A708B] bg-[#f8f9fa] p-6 rounded-r-lg">
                <p className="font-bold text-[#33414E] mb-2">If a flat-fee probate of ours becomes contested</p>
                <p className="text-slate-600 text-sm leading-relaxed">If someone files an objection or a competing petition in a matter we took on a flat fee, it converts to representation billed hourly against a {usd(RETAINERS.contestedProbate)} retainer. The <strong>unearned portion</strong> of the flat fee you have already paid — the part we have not yet earned, as determined by the firm — is credited toward that retainer and held in <strong>our client trust account</strong>, drawn down only as fees are actually earned and billed. We notify you in writing of the exact amount credited. We explain all of this before you engage us, and it is written into your engagement agreement, so it is never a surprise.</p>
              </div>

              <div className="mt-8 max-w-4xl text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-6"><p><strong className="text-slate-700">A note on court approval of fees.</strong> Where attorney fees are paid out of the decedent&rsquo;s estate, Illinois law requires that those fees be reasonable and approved by the court (755 ILCS 5/27-2). Where a fee is paid personally — for example, by an heir hiring us out of their own pocket — it is governed by our engagement agreement instead.</p></div>

              {/* Dual scheduling: uncontested and contested probate use SEPARATE booking links. */}
              <div className="mt-10 max-w-4xl rounded-xl border border-slate-200 bg-[#f8f9fa] p-6">
                <p className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E] mb-1">Schedule a probate consultation</p>
                <p className="text-slate-600 text-sm mb-5">Not sure which one you need? Uncontested probate (administering an estate) and contested probate (a will contest or estate dispute) book onto different calendars — choose the one that fits.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={BOOKING_UNCONTESTED_PROBATE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#33414E] text-white px-6 py-3 rounded-full font-bold hover:bg-[#4A708B] transition-colors text-center">Schedule an Uncontested Probate Consultation</a>
                  <a href={BOOKING_CONTESTED_PROBATE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-[#33414E] border-2 border-[#33414E] px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors text-center">Schedule a Contested Probate Consultation</a>
                </div>
              </div>

              <div className="mt-8 max-w-4xl flex flex-wrap items-center gap-3">
                <Link href="/blog/how-to-contest-a-will-in-illinois/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">How to contest a will in Illinois</Link><span className="text-slate-300">|</span>
                <Link href="/guardianship/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Guardianship</Link><span className="text-slate-300">|</span>
                <Link href="/services-pricing/" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">All services &amp; pricing</Link>
              </div>
            </div>
          </div>
        </section>

        <FAQAccordion title="Contested Probate & Will Contests — Frequently Asked Questions" items={contestedProbateFAQs} />

        <section className="py-10 px-4 sm:px-5 bg-gray-50">
          <div className="max-w-[1140px] mx-auto">
            <RelatedServices currentPage="probate" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#33414E] to-[#4A708B] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need Help with Probate Administration?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let us guide you through the probate process with compassion and expertise. Contact Illinois Estate Law today for experienced probate representation.
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
