'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Download, Clock, DollarSign, Users, Scale } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export default function Page() {
  const currentSlug = 'how-to-complete-a-small-estate-affidavit-in-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [activeTab, setActiveTab] = useState('eligibility');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const tocItems = [
    {
      id: 'article-summary',
      title: 'Article Summary',
      level: 2,
      numeration: '1',
    },
    {
      id: 'what-is-a-small-estate-affidavit',
      title: 'What Is a Small Estate Affidavit in Illinois?',
      level: 2,
      numeration: '2',
    },
    {
      id: 'eligibility-requirements',
      title: 'Eligibility Requirements for Small Estate Affidavit',
      level: 2,
      numeration: '3',
    },
    {
      id: 'step-by-step-guide',
      title: 'Step-by-Step Guide to Completing the Affidavit',
      level: 2,
      numeration: '4',
    },
    {
      id: 'required-information',
      title: 'Required Information and Documentation',
      level: 2,
      numeration: '5',
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes to Avoid',
      level: 2,
      numeration: '6',
    },
    {
      id: 'timeline-and-costs',
      title: 'Timeline and Costs',
      level: 2,
      numeration: '7',
    },
    {
      id: 'frequently-asked-questions',
      title: 'Frequently Asked Questions',
      level: 2,
      numeration: '8',
    },
    {
      id: 'when-to-seek-legal-help',
      title: 'When to Seek Legal Help',
      level: 2,
      numeration: '9',
    },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Complete a Small Estate Affidavit in Illinois: Complete 2026 Guide",
    "description": "Learn how to complete a small estate affidavit in Illinois with our comprehensive step-by-step guide. Understand eligibility requirements, required documents, and avoid common mistakes.",
    "author": {
      "@type": "Person",
      "name": "Mary Liberty",
      "jobTitle": "Estate Planning Attorney"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Illinois Estate Law",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.illinoisestatelaw.com/logo.png"
      }
    },
    "datePublished": "2026-01-27",
    "dateModified": "2026-01-27"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">←</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="mb-6">
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Jan 27, 2026</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                How to Complete a Small Estate Affidavit in Illinois: Complete 2026 Guide
              </h1>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    The Illinois Small Estate Affidavit provides a simplified way to transfer estate assets without full probate when the estate value is $100,000 or less.
                  </p>
                  <p className="mb-4">
                    This comprehensive guide walks you through every step of completing a small estate affidavit in Illinois, from determining eligibility to filing the completed affidavit. You'll learn the specific requirements under Illinois law, what information you need to gather, which assets qualify, and common mistakes that can delay or invalidate the process.
                  </p>
                  <p className="mb-0">
                    We cover the complete step-by-step process, required documentation, timeline expectations, associated costs, and when you should consider consulting an attorney. Whether you're handling the estate of a parent, spouse, or other family member, this guide provides the practical information you need to navigate the small estate affidavit process successfully.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-is-a-small-estate-affidavit" className="text-2xl font-bold mt-8 mb-4">
              What Is a Small Estate Affidavit in Illinois?
            </h2>

            <p className="mb-6">
              A small estate affidavit is a legal document that allows the family or heirs of a deceased person to claim and distribute estate assets without going through formal probate court proceedings. Under Illinois law (755 ILCS 5/25-1), this simplified procedure is available when the total value of the estate is $100,000 or less, excluding certain exempt property and funeral expenses.
            </p>

            <p className="mb-6">
              The small estate affidavit process saves significant time and money compared to regular probate. Instead of filing a probate case with the circuit court, appointing an executor or administrator, and going through months of court supervision, you can typically transfer assets within a few weeks using just the affidavit and death certificate.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Benefits of Small Estate Affidavit
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>No court filing required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Significantly lower costs (usually under $100)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Faster process (2-4 weeks vs 6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>No need to hire an attorney (in simple cases)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Minimal paperwork and documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Limitations to Consider
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Only available for estates under $100,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Must wait at least 6 months after death</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Cannot be used if probate already opened</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Requires all heirs to agree on distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Affiant personally liable for debts up to estate value</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 id="eligibility-requirements" className="text-2xl font-bold mt-8 mb-4">
              Eligibility Requirements for Small Estate Affidavit
            </h2>

            <p className="mb-6">
              To use the small estate affidavit procedure in Illinois, the estate must meet several specific requirements. Understanding these requirements before starting the process is crucial to avoid wasted time and effort.
            </p>

            <div className="my-8 border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('eligibility')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'eligibility'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Eligibility Criteria</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('included')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'included'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    <span>Included Assets</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('excluded')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'excluded'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Scale className="w-5 h-5" />
                    <span>Excluded Assets</span>
                  </div>
                </button>
              </div>

              <div className="p-6 bg-white">
                {activeTab === 'eligibility' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Required Eligibility Criteria</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold mb-2">Estate Value Limit</h4>
                        <p className="text-gray-700 text-sm">
                          The gross value of the entire estate, wherever located, must not exceed $100,000. This includes all personal property and real estate owned by the deceased, minus funeral expenses and amounts owed to the surviving spouse and minor children.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold mb-2">Waiting Period</h4>
                        <p className="text-gray-700 text-sm">
                          At least 6 months must have passed since the date of death. This waiting period ensures creditors have time to file claims against the estate.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold mb-2">No Pending Probate</h4>
                        <p className="text-gray-700 text-sm">
                          No petition for probate can be pending or already granted in Illinois. Once probate proceedings begin, you cannot use the small estate affidavit.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold mb-2">Representative Authorization</h4>
                        <p className="text-gray-700 text-sm">
                          The person filing must be either named as a representative in the decedent's will or be an heir entitled to receive assets under Illinois intestacy laws (755 ILCS 5/2-1).
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold mb-2">Heir Agreement</h4>
                        <p className="text-gray-700 text-sm">
                          All heirs and beneficiaries must agree on the distribution of assets. If there is any dispute, formal probate is required.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'included' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Assets Counted Toward $100,000 Limit</h3>
                    <p className="mb-4 text-gray-700">These assets must be included when calculating the total estate value:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Bank Accounts:</span>
                          <p className="text-sm text-gray-600 mt-1">Checking, savings, and certificates of deposit solely in the decedent's name (not payable-on-death accounts)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Personal Property:</span>
                          <p className="text-sm text-gray-600 mt-1">Vehicles, jewelry, furniture, electronics, collections, and other tangible personal property</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Investment Accounts:</span>
                          <p className="text-sm text-gray-600 mt-1">Brokerage accounts, stocks, bonds, and mutual funds without beneficiary designations</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Business Interests:</span>
                          <p className="text-sm text-gray-600 mt-1">Ownership in sole proprietorships, partnerships, or small businesses</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Real Estate:</span>
                          <p className="text-sm text-gray-600 mt-1">Property owned solely by the decedent or as tenants in common (but not joint tenancy with right of survivorship)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Amounts Owed to Deceased:</span>
                          <p className="text-sm text-gray-600 mt-1">Money owed by others to the decedent, including loans and unpaid invoices</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'excluded' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Assets NOT Counted (Pass Outside Estate)</h3>
                    <p className="mb-4 text-gray-700">These assets transfer automatically and don't count toward the $100,000 limit:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Joint Tenancy Property:</span>
                          <p className="text-sm text-gray-600 mt-1">Real estate or accounts held as joint tenants with right of survivorship automatically transfer to the surviving owner</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Transfer-on-Death Accounts:</span>
                          <p className="text-sm text-gray-600 mt-1">Bank accounts, brokerage accounts, and securities with valid TOD or POD designations transfer directly to named beneficiaries</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Life Insurance:</span>
                          <p className="text-sm text-gray-600 mt-1">Proceeds from life insurance policies with named beneficiaries (except if estate is named beneficiary)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Retirement Accounts:</span>
                          <p className="text-sm text-gray-600 mt-1">401(k)s, IRAs, pensions with designated beneficiaries transfer directly outside probate</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Trust Assets:</span>
                          <p className="text-sm text-gray-600 mt-1">Assets held in a revocable living trust or other trust structures distribute according to trust terms</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Scale className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">Amounts Owed to Spouse/Children:</span>
                          <p className="text-sm text-gray-600 mt-1">Amounts owed under Illinois law for support of surviving spouse and minor children</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <h2 id="step-by-step-guide" className="text-2xl font-bold mt-8 mb-4">
              Step-by-Step Guide to Completing the Affidavit
            </h2>

            <p className="mb-6">
              Completing the Illinois small estate affidavit requires careful attention to detail. Follow these steps in order to ensure your affidavit is complete and legally valid. You can download the official form from the Illinois Courts website or obtain it from your county clerk's office.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  step: 1,
                  title: 'Gather Required Information',
                  content: 'Before starting the affidavit, collect all necessary information and documents. You will need the decedent\'s full legal name, date of death, Social Security number, last address, and marital status. Gather certified copies of the death certificate (you\'ll need multiple copies), a complete list of all estate assets with values, information about all heirs and beneficiaries, and if applicable, the original will. Create a detailed inventory of assets including bank statements, property deeds, vehicle titles, and investment account statements. Having everything organized before you start will make the process much smoother.'
                },
                {
                  step: 2,
                  title: 'Calculate Total Estate Value',
                  content: 'Determine the gross value of all estate assets that count toward the $100,000 limit. Use fair market values as of the date of death. For real estate, you may need a professional appraisal or use the county assessor\'s records. For personal property, use reasonable fair market values (what items would sell for, not what they cost when new). For bank accounts and investments, use the balance as of the death date. Document your valuation methods and keep records of how you determined each value. Remember to subtract funeral expenses and amounts owed to spouse and minor children from the gross value. If the total exceeds $100,000 after these deductions, you cannot use the small estate affidavit.'
                },
                {
                  step: 3,
                  title: 'Complete the Affidavit Form',
                  content: 'Fill out the small estate affidavit form completely and accurately. The form requires specific information in each section. In the heading, enter the county where the decedent lived at death. In the body of the affidavit, state your relationship to the deceased, confirm that 6 months have passed since death, state that the estate value is under $100,000, list all known heirs and their addresses, describe all estate assets and their values, and list all known debts and funeral expenses. Sign the affidavit before a notary public. The notary will verify your identity and watch you sign. The affidavit must include a statement that you understand you are personally liable for estate debts up to the value of assets distributed.'
                },
                {
                  step: 4,
                  title: 'Attach Required Documentation',
                  content: 'Attach certified copies of supporting documents to your affidavit. You must include a certified copy of the death certificate issued by the Illinois Department of Public Health or the county clerk. If there is a will, attach the original or a certified copy. Some institutions may require additional proof of authority, such as letters of office from the court (though this defeats the purpose of avoiding probate). Keep multiple certified copies of the death certificate as you will need separate copies for each institution holding assets (banks, brokerages, title companies, etc.). Consider getting at least 10 certified copies initially.'
                },
                {
                  step: 5,
                  title: 'Provide Notice to Heirs',
                  content: 'While Illinois law does not require formal notice to all heirs when using a small estate affidavit, it is good practice to inform all beneficiaries of your intention to distribute the estate. Send copies of the completed affidavit to all persons named as heirs or beneficiaries. Document that you sent this notice by using certified mail or getting written acknowledgment. This helps prevent disputes later and demonstrates that you acted in good faith. If any heir objects to your use of the affidavit or the proposed distribution, you should consult an attorney about whether formal probate is necessary.'
                },
                {
                  step: 6,
                  title: 'Present Affidavit to Asset Holders',
                  content: 'Take the completed, notarized affidavit and certified death certificate to each institution or person holding estate assets. Banks typically have their own forms in addition to the affidavit. Bring photo identification proving you are the affiant. Some institutions may take several days or weeks to process the affidavit and release assets. Be patient and follow up if you don\'t hear back within two weeks. For vehicle titles, take the affidavit to the Illinois Secretary of State office. For real estate, record the affidavit with the county recorder\'s office where the property is located. Each county has its own recording fees and procedures.'
                },
                {
                  step: 7,
                  title: 'Distribute Assets to Heirs',
                  content: 'After collecting all estate assets, pay legitimate debts and funeral expenses first. Then distribute remaining assets to heirs according to the will (if there is one) or Illinois intestacy laws (755 ILCS 5/2-1 if no will). Keep detailed records of all distributions including who received what assets, the date of distribution, and signed receipts from heirs acknowledging receipt. Consider having heirs sign a receipt and release document confirming they received their share and releasing you from further liability. This protects you if questions arise later. If significant time passes between collecting assets and distribution (for example, if you need to sell real estate first), keep the funds in a separate estate account, not commingled with your personal funds.'
                },
                {
                  step: 8,
                  title: 'Maintain Records',
                  content: 'Keep copies of all completed affidavits, supporting documents, receipts, and distribution records for at least seven years. These records protect you if questions arise about the estate administration or if the IRS audits the decedent\'s final tax returns. Store documents in a safe, organized location. Consider keeping both physical and digital copies. If you distributed personal property, take photos of items with the heir who received them as additional documentation. If you paid debts, keep receipts and canceled checks. Your thorough record-keeping demonstrates you fulfilled your duties properly and can prevent legal challenges to your administration of the estate.'
                }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#4a708b] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                    </div>
                    {expandedStep === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedStep === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="required-information" className="text-2xl font-bold mt-8 mb-4">
              Required Information and Documentation
            </h2>

            <p className="mb-6">
              Having all necessary information ready before you start will make completing the affidavit much easier. Here's a comprehensive checklist of what you need:
            </p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#4a708b] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Required Information</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Where to Find It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Decedent Information</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Full legal name, date of birth, date of death, Social Security number, last residential address
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Death certificate, Social Security card, driver's license
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Death Certificate</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Multiple certified copies (at least 10 recommended)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      County clerk where death occurred, funeral home, or VitalChek online
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Will (if any)</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Original will or certified copy showing signatures and witnesses
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Safe deposit box, attorney's office, home files
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Heir Information</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Full names, addresses, relationship to deceased, birthdates
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Family records, address book, holiday card list
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Bank Accounts</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Account numbers, balances at death, bank name and branch
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Bank statements, checkbooks, online banking
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Real Estate</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Property addresses, legal descriptions, estimated values, mortgage information
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Property deeds, tax bills, mortgage statements, county assessor
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Vehicles</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Make, model, year, VIN, current value, title information
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Vehicle titles, registration, Kelley Blue Book for values
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Personal Property</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Description and fair market value of significant items (jewelry, collectibles, etc.)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Appraisals, receipts, online pricing guides
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Debts</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Creditor names, amounts owed, account numbers
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Mail, email, credit report, account statements
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Funeral Expenses</td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Itemized bill from funeral home, cemetery, related costs
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      Funeral home invoice, cemetery contract, receipts for flowers, obituary
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="common-mistakes" className="text-2xl font-bold mt-8 mb-4">
              Common Mistakes to Avoid
            </h2>

            <p className="mb-6">
              Even with the simplified small estate affidavit process, mistakes can cause delays or require starting over. Here are the most common errors and how to avoid them:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Filing Too Early
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Mistake:</span> Filing the affidavit before 6 months have passed since death.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> Wait the full 6 months. Mark your calendar and don't file early, even if you're anxious to complete the process. The law requires this waiting period to protect creditors' rights.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Incorrect Valuation
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Mistake:</span> Using current values instead of date-of-death values, or significantly underestimating asset values to stay under the limit.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> Use accurate fair market values as of the date of death. Get appraisals for significant items if needed. Being honest about values protects you from liability.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Missing Heirs
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Mistake:</span> Failing to identify and list all legal heirs, especially children from previous marriages or estranged family members.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> Research thoroughly to find all heirs. Check family records, marriage certificates, birth certificates. Include heirs even if you think they won't claim anything.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Incomplete Information
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Mistake:</span> Leaving sections blank or providing vague descriptions of assets.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> Complete every section of the form. Provide specific details about each asset including account numbers, addresses, and precise descriptions. If something doesn't apply, write "none" or "N/A."
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Using Regular Copy of Death Certificate
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Mistake:</span> Presenting photocopies or non-certified copies of the death certificate to institutions.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> Always use certified copies with the official seal from the issuing authority. Order multiple certified copies (10-15) initially, as each institution will likely keep one.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Ignoring Outstanding Debts
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-semibold">Mistake:</span> Distributing all assets without paying legitimate debts, making the affiant personally liable.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> Identify all debts before distribution. Pay funeral expenses and legitimate creditor claims first. Keep sufficient funds in reserve for unknown debts that may surface later.
                </p>
              </div>
            </div>

            <h2 id="timeline-and-costs" className="text-2xl font-bold mt-8 mb-4">
              Timeline and Costs
            </h2>

            <p className="mb-6">
              Understanding the expected timeline and costs helps you plan appropriately and set realistic expectations with heirs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#4a708b]" />
                  Expected Timeline
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-20 flex-shrink-0 text-sm font-semibold text-[#4a708b]">Months 1-6:</div>
                    <div className="text-sm">
                      Waiting period. Use this time to gather documents, inventory assets, and prepare the affidavit.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-20 flex-shrink-0 text-sm font-semibold text-[#4a708b]">Week 1:</div>
                    <div className="text-sm">
                      Complete and notarize the affidavit. Make copies for each institution and keep originals for your records.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-20 flex-shrink-0 text-sm font-semibold text-[#4a708b]">Weeks 2-4:</div>
                    <div className="text-sm">
                      Present affidavits to asset holders. Banks and financial institutions typically process within 1-3 weeks.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-20 flex-shrink-0 text-sm font-semibold text-[#4a708b]">Weeks 4-6:</div>
                    <div className="text-sm">
                      Collect all assets, pay debts and expenses, distribute remaining assets to heirs.
                    </div>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded border border-blue-200">
                  <p className="text-sm font-semibold text-[#4a708b]">Total Expected Time:</p>
                  <p className="text-sm text-gray-700">6-8 months from death to final distribution (including 6-month waiting period)</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  Expected Costs
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-start gap-3">
                    <div className="text-sm">Certified death certificates (10-15 copies)</div>
                    <div className="text-sm font-semibold text-green-600 whitespace-nowrap">$150-$300</div>
                  </li>
                  <li className="flex justify-between items-start gap-3">
                    <div className="text-sm">Notary fee for affidavit signature</div>
                    <div className="text-sm font-semibold text-green-600 whitespace-nowrap">$10-$25</div>
                  </li>
                  <li className="flex justify-between items-start gap-3">
                    <div className="text-sm">Property appraisal (if needed)</div>
                    <div className="text-sm font-semibold text-green-600 whitespace-nowrap">$300-$500</div>
                  </li>
                  <li className="flex justify-between items-start gap-3">
                    <div className="text-sm">Recording fees (if real estate involved)</div>
                    <div className="text-sm font-semibold text-green-600 whitespace-nowrap">$25-$75</div>
                  </li>
                  <li className="flex justify-between items-start gap-3">
                    <div className="text-sm">Attorney consultation (optional)</div>
                    <div className="text-sm font-semibold text-green-600 whitespace-nowrap">$500-$1,500</div>
                  </li>
                  <li className="flex justify-between items-start gap-3">
                    <div className="text-sm">Miscellaneous (postage, copies, etc.)</div>
                    <div className="text-sm font-semibold text-green-600 whitespace-nowrap">$25-$50</div>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded border border-green-200">
                  <p className="text-sm font-semibold text-green-600">Total Expected Cost:</p>
                  <p className="text-sm text-gray-700">$500-$2,400 (compare to $3,000-$10,000+ for full probate)</p>
                </div>
              </div>
            </div>

            <h2 id="frequently-asked-questions" className="text-2xl font-bold mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {[
                {
                  question: 'Can I use a small estate affidavit if there is a will?',
                  answer: 'Yes, you can use a small estate affidavit even if the deceased had a will, as long as all other requirements are met (estate under $100,000, 6 months passed, no probate pending). The affidavit simply becomes the method for transferring assets to the beneficiaries named in the will. You must attach a copy of the will to the affidavit and distribute assets according to the will\'s terms, not according to intestacy laws. The will does not need to be admitted to probate if you use the small estate affidavit process.'
                },
                {
                  question: 'What happens if I discover additional assets after filing the affidavit?',
                  answer: 'If you discover additional assets that bring the total estate value over $100,000, you may need to open formal probate proceedings. If the additional assets keep the total under $100,000, you can file a supplemental affidavit for those assets. Be honest about this situation. Knowingly underreporting asset values or hiding assets can result in personal liability and potential fraud charges. If you\'re uncertain about whether to report discovered assets, consult with an estate planning attorney before proceeding.'
                },
                {
                  question: 'Do I need an attorney to complete a small estate affidavit?',
                  answer: 'Illinois law does not require you to hire an attorney to complete a small estate affidavit. Many people successfully complete the process without legal help, especially for straightforward estates with only bank accounts and personal property. However, you should consider hiring an attorney if: the estate is close to the $100,000 limit, there is real estate involved, there are disputes among heirs, you are uncertain about identifying all heirs, there are significant debts, or the estate includes business interests or complex assets. An attorney consultation (typically $500-$1,500) is much less expensive than making mistakes that require opening full probate later.'
                },
                {
                  question: 'What if an heir disagrees with the distribution?',
                  answer: 'If an heir objects to your proposed distribution or claims they are entitled to more than you are offering, you have limited options. The small estate affidavit process works best when all heirs agree. If there is significant disagreement, you may need to open formal probate proceedings where a judge can resolve disputes. Document all your communications with heirs and your reasoning for the proposed distribution. If you are following the will\'s instructions or Illinois intestacy laws correctly, an objecting heir has less ground to stand on. However, the objection itself may be enough to require formal probate. Consult an attorney if heirs cannot reach agreement.'
                },
                {
                  question: 'Can I be held personally liable when using a small estate affidavit?',
                  answer: 'Yes. When you sign a small estate affidavit, you become personally liable for the decedent\'s debts up to the value of the assets you collect and distribute. This means if you distribute $80,000 to heirs and a creditor later presents a valid $20,000 claim, you could be personally responsible for paying it. This is why you should: identify all debts before distribution, keep some funds in reserve for unknown claims, pay legitimate debts in order of priority, and keep detailed records of all payments and distributions. The personal liability risk is one reason to be careful and thorough when using the small estate affidavit process.'
                },
                {
                  question: 'How do I handle real estate with a small estate affidavit?',
                  answer: 'Real estate can be transferred using a small estate affidavit, but the process is more complex than transferring personal property or bank accounts. First, ensure the property value (minus mortgage) plus all other estate assets totals less than $100,000. Get a professional appraisal or use the county assessor\'s valuation. Complete the affidavit including specific legal description of the property from the deed. Have the affidavit notarized. Record the affidavit with the Recorder of Deeds in the county where the property is located. Pay required recording fees (typically $50-75). Once recorded, the affidavit transfers title to the heirs named in the affidavit. The new owners can then decide to keep, sell, or otherwise deal with the property. If there is a mortgage, contact the lender about assuming or paying off the loan.'
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="when-to-seek-legal-help" className="text-2xl font-bold mt-8 mb-4">
              When to Seek Legal Help
            </h2>

            <p className="mb-6">
              While the small estate affidavit process is designed to be simple enough for most people to handle without an attorney, certain situations warrant professional legal assistance:
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                Consider Hiring an Attorney If:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>The estate value is close to the $100,000 limit and you're uncertain about valuations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>The estate includes real estate or business interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>There are disputes among heirs about the distribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>You cannot locate all heirs or there are questions about who should inherit</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>The will is unclear or appears to have been improperly executed</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>There are significant debts or complex creditor claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>You are concerned about personal liability for estate debts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>The deceased died without a will and you're uncertain about Illinois intestacy laws</span>
                </li>
              </ul>
            </div>

            <p className="mb-6">
              At Illinois Estate Law, Chicago estate planning attorney Mary Liberty helps families navigate both simple and complex estate matters. If you're unsure whether the small estate affidavit process is right for your situation, or if you need help completing the affidavit correctly, we can provide guidance and ensure everything is handled properly.
            </p>

            <p className="mb-6">
              Contact Illinois Estate Law today at <a href="tel:3123730731" className="text-[#4a708b] hover:underline font-semibold">(312) 373-0731</a> or <a href="/contact/" className="text-[#4a708b] hover:underline font-semibold">schedule a consultation online</a> to discuss your estate administration needs.
            </p>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map(post => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>

          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[var(--e-global-color-text)]">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-complete-a-small-estate-affidavit-in-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-complete-a-small-estate-affidavit-in-illinois/')}&text=${encodeURIComponent('How to Complete a Small Estate Affidavit in Illinois')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-complete-a-small-estate-affidavit-in-illinois/')}&title=${encodeURIComponent('How to Complete a Small Estate Affidavit in Illinois')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <BlogContactForm />
        </div>
      </div>
    </>
  );
}
