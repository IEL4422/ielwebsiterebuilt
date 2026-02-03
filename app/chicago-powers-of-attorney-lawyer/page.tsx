'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, FileText, Shield, AlertCircle, CheckCircle, DollarSign, Home } from 'lucide-react';

export default function PowersOfAttorneyPage() {
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
            "name": "Illinois Estate Law - Powers of Attorney",
            "description": "Experienced Chicago powers of attorney lawyer helping Illinois residents create comprehensive financial and property powers of attorney for incapacity planning.",
            "url": "https://www.illinoisestatelaw.com/chicago-powers-of-attorney-lawyer/",
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
            "serviceType": "Powers of Attorney and Financial Planning"
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
                    Chicago Powers of Attorney Lawyer
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Protect your financial future with comprehensive powers of attorney tailored to Illinois law
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
                    <h3 className="text-2xl font-bold text-white mb-4">Why Powers of Attorney Matter</h3>
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Avoid costly guardianship proceedings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Ensure bills are paid during incapacity</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Protect assets and property</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                        <span>Maintain financial continuity</span>
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
                  Secure Your Financial Future with Illinois Powers of Attorney
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A power of attorney is one of the most important legal documents you can create, yet many people overlook its significance until it's too late. At Illinois Estate Law, we help Chicago residents establish comprehensive powers of attorney that protect their financial interests and provide trusted individuals with the authority to act on their behalf when needed.
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">What Is a Power of Attorney?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A power of attorney is a legal document that authorizes someone you trust (called your "agent" or "attorney-in-fact") to make financial and property decisions on your behalf. This document becomes essential if you become incapacitated due to illness, injury, or cognitive decline and cannot manage your own affairs.
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  In Illinois, powers of attorney are governed by the Illinois Power of Attorney Act, which provides specific requirements and protections for both the person granting the power (the "principal") and the agent. Understanding these legal requirements ensures your power of attorney will be effective when you need it most.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-8">Types of Powers of Attorney in Illinois</h3>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Durable Power of Attorney</h4>
                        <p className="text-slate-600">
                          Remains effective even if you become incapacitated. This is the most common type for estate planning purposes
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
                        <h4 className="text-xl font-bold text-slate-800 mb-2">General Power of Attorney</h4>
                        <p className="text-slate-600">
                          Grants broad authority to handle all financial matters but ends if you become incapacitated
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <DollarSign className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Limited Power of Attorney</h4>
                        <p className="text-slate-600">
                          Authorizes your agent to perform specific acts or manage particular transactions only
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6 hover:border-[#77B1D4] transition-colors shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#77B1D4] text-white p-3 rounded-lg">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">Springing Power of Attorney</h4>
                        <p className="text-slate-600">
                          Takes effect only when a specified event occurs, such as your incapacity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Why You Need a Power of Attorney</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Without a power of attorney, no one has automatic authority to manage your financial affairs if you become incapacitated. This includes paying your bills, managing investments, handling real estate transactions, or making important financial decisions. Your family would need to petition the court for guardianship, which is expensive, time-consuming, and invasive.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Without a Power of Attorney:</h4>
                      <ul className="text-red-800 space-y-2">
                        <li>• Court proceedings required for someone to act on your behalf</li>
                        <li>• Guardianship costs can exceed $10,000 in legal fees</li>
                        <li>• Your family loses control over who manages your affairs</li>
                        <li>• Bills may go unpaid, damaging your credit and finances</li>
                        <li>• Court supervision required for all financial decisions</li>
                        <li>• Process can take months while your affairs remain frozen</li>
                        <li>• Public court proceedings reduce your privacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Powers Granted to Your Agent</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  A properly drafted power of attorney can grant your agent extensive authority to manage your financial and property matters. The Illinois Power of Attorney Act includes a statutory short form that lists specific powers you can grant. Understanding these powers helps you decide which authorities your agent should have.
                </p>

                {/* Expandable Powers Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('powers')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Financial Powers You Can Grant</span>
                    {expandedSection === 'powers' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'powers' && (
                    <div className="bg-white">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Power Category</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Specific Authorities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Real Property</td>
                            <td className="px-6 py-4 text-slate-600">Buy, sell, mortgage, lease, and manage real estate</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Banking</td>
                            <td className="px-6 py-4 text-slate-600">Open accounts, make deposits and withdrawals, write checks</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Investments</td>
                            <td className="px-6 py-4 text-slate-600">Buy, sell, and manage stocks, bonds, mutual funds, securities</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Insurance</td>
                            <td className="px-6 py-4 text-slate-600">Purchase, modify, cancel insurance policies; file claims</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Retirement Plans</td>
                            <td className="px-6 py-4 text-slate-600">Manage retirement accounts, make contribution and distribution decisions</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Taxes</td>
                            <td className="px-6 py-4 text-slate-600">Prepare and file tax returns, represent you before IRS</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Government Benefits</td>
                            <td className="px-6 py-4 text-slate-600">Apply for and manage Social Security, Medicare, Medicaid benefits</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Business Operations</td>
                            <td className="px-6 py-4 text-slate-600">Operate, sell, or close your business interests</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Legal Matters</td>
                            <td className="px-6 py-4 text-slate-600">Hire attorneys, initiate or defend lawsuits, settle claims</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Gifts</td>
                            <td className="px-6 py-4 text-slate-600">Make gifts on your behalf for estate or tax planning purposes</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Choosing Your Agent</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Selecting the right person to serve as your agent is one of the most critical decisions in the power of attorney process. Your agent will have significant authority over your finances and property, so you need someone who is trustworthy, responsible, and capable of handling complex financial matters.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Essential Qualities for a Financial Agent</h3>

                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Absolute Trustworthiness:</strong> Must act in your best interests and resist temptation to misuse funds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Financial Competence:</strong> Understands financial matters, budgeting, investments, and property management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Organized and Detail-Oriented:</strong> Keeps accurate records and manages paperwork effectively</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Good Judgment:</strong> Makes sound decisions under pressure and considers long-term consequences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Available and Accessible:</strong> Has time to dedicate to managing your affairs when needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Financially Stable:</strong> Not facing financial difficulties that might create conflicts of interest</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] font-bold text-xl">✓</span>
                      <span><strong>Willing to Serve:</strong> Has agreed to accept this responsibility and understands the duties involved</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-8">
                  <div className="flex gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Important Considerations:</h4>
                      <p className="text-amber-800 mb-2">
                        Many people automatically choose their spouse or eldest child, but this isn't always the best decision. Consider each person's financial skills, availability, and ability to handle family dynamics. You can also name co-agents to act together or successor agents to serve if your first choice cannot.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Illinois Power of Attorney Requirements</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Illinois law imposes specific requirements for powers of attorney to be valid and enforceable. The Illinois Power of Attorney Act, which took effect in 2011, standardized many requirements and added important protections. Understanding these requirements ensures your power of attorney will be accepted by financial institutions and legally effective.
                </p>

                {/* Expandable Requirements Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('requirements')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Legal Requirements for Illinois Powers of Attorney</span>
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
                            <td className="px-6 py-4 font-medium text-slate-800">Written Document</td>
                            <td className="px-6 py-4 text-slate-600">Must be in writing and properly dated</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Principal's Signature</td>
                            <td className="px-6 py-4 text-slate-600">Must be signed by you (the principal) or someone at your direction</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Witness</td>
                            <td className="px-6 py-4 text-slate-600">Requires one witness who is not the agent</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Agent Acknowledgment</td>
                            <td className="px-6 py-4 text-slate-600">Agent must sign an acknowledgment accepting the responsibilities</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Specific Powers</td>
                            <td className="px-6 py-4 text-slate-600">Certain powers require express authorization (gifts, beneficiary changes, trusts)</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Mental Capacity</td>
                            <td className="px-6 py-4 text-slate-600">Must have capacity to understand the nature and effect of the document</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">No Notarization Required</td>
                            <td className="px-6 py-4 text-slate-600">Not required by law but strongly recommended for acceptance by institutions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Agent Duties and Responsibilities</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Under Illinois law, your agent has important legal duties when acting on your behalf. These duties exist to protect you from potential abuse and ensure your agent acts in your best interests. Understanding these duties helps you select the right agent and ensures they understand their obligations.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Fiduciary Duties</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Act in good faith and in your best interests</li>
                      <li>• Avoid conflicts of interest</li>
                      <li>• Act with care, competence, and diligence</li>
                      <li>• Keep your property separate from agent's property</li>
                      <li>• Maintain accurate records of all transactions</li>
                      <li>• Attempt to preserve your estate plan</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Practical Responsibilities</h4>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Pay your bills and manage expenses</li>
                      <li>• Make prudent investment decisions</li>
                      <li>• File tax returns and pay taxes owed</li>
                      <li>• Maintain your property and assets</li>
                      <li>• Communicate with family as appropriate</li>
                      <li>• Keep detailed financial records</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">When Does a Power of Attorney Take Effect?</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  The timing of when your power of attorney becomes effective is an important decision. In Illinois, you have two main options: immediate powers and springing powers.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white border-2 border-slate-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Immediate Power of Attorney</h4>
                    <p className="text-slate-600 mb-3">Takes effect as soon as you sign it, even though you remain capable of managing your own affairs.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Advantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-3">
                      <li>• Agent can act immediately when needed</li>
                      <li>• Useful for convenience even when you're capable</li>
                      <li>• No need to prove incapacity</li>
                    </ul>
                    <p className="text-sm text-slate-500 font-medium mb-2">Disadvantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Requires complete trust in your agent</li>
                      <li>• Potential for misuse if agent is dishonest</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-[#77B1D4] rounded-lg p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">Springing Power of Attorney</h4>
                    <p className="text-slate-600 mb-3">Takes effect only when a specified condition occurs, typically your incapacity.</p>
                    <p className="text-sm text-slate-500 font-medium mb-2">Advantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1 mb-3">
                      <li>• Agent cannot act until you're incapacitated</li>
                      <li>• Provides extra protection against abuse</li>
                      <li>• May feel more comfortable psychologically</li>
                    </ul>
                    <p className="text-sm text-slate-500 font-medium mb-2">Disadvantages:</p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• May require medical certification of incapacity</li>
                      <li>• Can cause delays in urgent situations</li>
                      <li>• Some institutions reluctant to accept them</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Protecting Against Power of Attorney Abuse</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  While powers of attorney are essential planning tools, they can be misused by dishonest agents. Illinois law provides several protections, and you can include additional safeguards in your documents to reduce the risk of financial exploitation.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Built-in Protections You Can Include:</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Require Accounting:</strong> Mandate that your agent provide regular financial reports to a designated person or attorney</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Name Co-Agents:</strong> Require two agents to act together, providing checks and balances</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Limit Powers:</strong> Grant only specific powers needed rather than broad authority</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Set Dollar Limits:</strong> Restrict certain transactions above specified amounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Prohibit Gifts:</strong> Unless specifically authorized, prevent your agent from making gifts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Designate Monitors:</strong> Allow certain people to receive copies of financial records</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span><strong>Include Expiration Date:</strong> Require renewal after a certain period</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Revoking or Changing a Power of Attorney</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  You can revoke or change your power of attorney at any time, as long as you have mental capacity. Illinois law requires specific steps to properly revoke a power of attorney and ensure third parties are notified.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Steps to Revoke a Power of Attorney:</h3>

                <div className="space-y-3 my-6 text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2D3E50] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</span>
                    <span>Execute a written revocation document clearly stating your intent to revoke</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2D3E50] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</span>
                    <span>Notify your agent in writing that the power of attorney is revoked</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2D3E50] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</span>
                    <span>Inform all financial institutions and third parties who received copies of the original power</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2D3E50] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">4</span>
                    <span>Retrieve all original and copies of the revoked document if possible</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-[#2D3E50] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">5</span>
                    <span>If creating a new power of attorney, deliver it to your new agent and relevant institutions</span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">Power of Attorney vs. Guardianship</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Understanding the difference between a power of attorney and guardianship highlights why advance planning is so important. A power of attorney is a preventive measure you create while capable, while guardianship is a court-imposed solution when you haven't planned ahead.
                </p>

                {/* Comparison Table */}
                <div className="my-8 border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('comparison')}
                    className="w-full bg-[#2D3E50] text-white px-6 py-4 flex items-center justify-between hover:bg-[#4A708B] transition-colors"
                  >
                    <span className="font-bold text-lg">Power of Attorney vs. Guardianship Comparison</span>
                    {expandedSection === 'comparison' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>

                  {expandedSection === 'comparison' && (
                    <div className="bg-white overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Factor</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Power of Attorney</th>
                            <th className="px-6 py-3 text-left font-bold text-slate-800">Guardianship</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">When Created</td>
                            <td className="px-6 py-4 text-slate-600">Before incapacity</td>
                            <td className="px-6 py-4 text-slate-600">After incapacity</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Who Chooses Agent</td>
                            <td className="px-6 py-4 text-slate-600">You choose</td>
                            <td className="px-6 py-4 text-slate-600">Court appoints</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Court Involvement</td>
                            <td className="px-6 py-4 text-slate-600">None required</td>
                            <td className="px-6 py-4 text-slate-600">Extensive court proceedings</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Cost</td>
                            <td className="px-6 py-4 text-slate-600">Minimal legal fees</td>
                            <td className="px-6 py-4 text-slate-600">$10,000+ in legal costs</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Timeline</td>
                            <td className="px-6 py-4 text-slate-600">Effective immediately or when needed</td>
                            <td className="px-6 py-4 text-slate-600">2-6 months of court process</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Privacy</td>
                            <td className="px-6 py-4 text-slate-600">Private document</td>
                            <td className="px-6 py-4 text-slate-600">Public court record</td>
                          </tr>
                          <tr className="border-b border-slate-200">
                            <td className="px-6 py-4 font-medium text-slate-800">Flexibility</td>
                            <td className="px-6 py-4 text-slate-600">Highly customizable</td>
                            <td className="px-6 py-4 text-slate-600">Court-imposed restrictions</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-medium text-slate-800">Ongoing Oversight</td>
                            <td className="px-6 py-4 text-slate-600">Optional, as specified</td>
                            <td className="px-6 py-4 text-slate-600">Required court reporting</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-12">How Illinois Estate Law Can Help</h2>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Creating an effective power of attorney requires more than filling out a form. At Illinois Estate Law, we take the time to understand your unique financial situation, family dynamics, and planning goals to create customized powers of attorney that protect your interests and provide your agent with the right level of authority.
                </p>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Power of Attorney Services Include:</h3>

                <div className="bg-slate-50 rounded-lg p-6 my-6">
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Comprehensive consultation to assess your financial situation and needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Guidance on selecting the right type of power of attorney</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Help choosing appropriate agents and successor agents</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Customized documents that grant appropriate powers and include protective provisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Coordination with your overall estate plan including trusts and wills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Discussion of powers to grant or withhold based on your comfort level</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Education for your agent about their duties and responsibilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Assistance with delivery to financial institutions and third parties</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#77B1D4] text-xl">→</span>
                      <span>Regular reviews and updates as circumstances change</span>
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
                      <span className="font-bold text-slate-800">Does a power of attorney expire in Illinois?</span>
                      {expandedSection === 'faq1' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq1' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          A durable power of attorney in Illinois does not expire unless you include a specific expiration date or the document is revoked. It remains valid until your death, revocation, or in some cases when you become incapacitated (if it's not a durable power). However, some financial institutions may require updated documents after several years.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq2')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can I have more than one power of attorney?</span>
                      {expandedSection === 'faq2' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq2' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          Yes, you can create separate powers of attorney for different purposes or different agents. For example, you might have one for financial matters and another for healthcare decisions. You can also name multiple agents to act together (co-agents) or separately, or designate successor agents who serve if your first choice cannot.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq3')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">What happens to my power of attorney when I die?</span>
                      {expandedSection === 'faq3' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq3' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          A power of attorney automatically terminates upon your death. After death, your executor or personal representative named in your will takes over management of your estate. This is why having both a power of attorney (for lifetime incapacity) and a will (for after death) is essential for comprehensive planning.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSection('faq4')}
                      className="w-full bg-slate-50 px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition-colors text-left"
                    >
                      <span className="font-bold text-slate-800">Can my agent use my power of attorney to change my will or beneficiaries?</span>
                      {expandedSection === 'faq4' ? <ChevronUp className="w-5 h-5 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" />}
                    </button>
                    {expandedSection === 'faq4' && (
                      <div className="bg-white px-6 py-4 border-t border-slate-200">
                        <p className="text-slate-600">
                          No, your agent cannot change your will under any circumstances. They also cannot change beneficiaries on life insurance or retirement accounts unless you explicitly grant that specific power in your power of attorney document. Illinois law requires express authorization for certain sensitive powers to prevent abuse.
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
                Ready to Create Your Power of Attorney?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Don't wait until it's too late. Protect your financial future with a comprehensive power of attorney tailored to your needs.
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
