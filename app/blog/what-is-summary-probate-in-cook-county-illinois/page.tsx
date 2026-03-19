'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, ChevronDown, ChevronUp, DollarSign, Clock, Scale, Users, Building2 } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export default function Page() {
  const currentSlug = 'what-is-summary-probate-in-cook-county-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [activeTab, setActiveTab] = useState('summary');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const tocItems = [
    {
      id: 'article-summary',
      title: 'Article Summary',
      level: 2,
      numeration: '1',
    },
    {
      id: 'what-is-summary-probate',
      title: 'What Is Summary Probate in Cook County?',
      level: 2,
      numeration: '2',
    },
    {
      id: 'when-can-you-use',
      title: 'When Can You Use Summary Administration?',
      level: 2,
      numeration: '3',
    },
    {
      id: 'key-requirements',
      title: 'Key Requirements and Limitations',
      level: 2,
      numeration: '4',
    },
    {
      id: 'process-overview',
      title: 'The Summary Probate Process',
      level: 2,
      numeration: '5',
    },
    {
      id: 'comparison',
      title: 'Comparing Your Options',
      level: 2,
      numeration: '6',
    },
    {
      id: 'costs-timeline',
      title: 'Costs and Timeline',
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
      id: 'next-steps',
      title: 'Next Steps',
      level: 2,
      numeration: '9',
    },
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is Summary Probate in Cook County, Illinois — and When Can You Use It?",
    "description": "Discover when summary probate (summary administration) is available in Cook County, Illinois, and whether it's the right choice for your estate.",
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
    "datePublished": "2026-03-19",
    "dateModified": "2026-03-19"
  };

  const faqs = [
    {
      question: "Does summary administration completely avoid probate?",
      answer: "No. Summary administration is still a court-supervised probate process. You must file a petition in the Circuit Court of Cook County and obtain a court order. What it eliminates is the appointment of a personal representative, the formal inventory process, and the extended creditor claims period. If you want to avoid court entirely, you may qualify for a small estate affidavit (for estates under $100,000) or can use non-probate transfer methods like trusts or transfer-on-death designations."
    },
    {
      question: "Can I use summary administration if the estate has debts?",
      answer: "Yes, but with caution. Summary administration allows for payment of debts, but creditors have a shorter window to file claims (generally 6 months from the date of death rather than the extended period in regular probate). If the estate has significant unpaid debts or potential creditor disputes, regular probate may provide better protection through its more formal creditor claims process."
    },
    {
      question: "How long does summary administration take in Cook County?",
      answer: "Typically 3-6 months from filing the petition to distribution of assets. This is significantly faster than regular probate, which often takes 9-18 months or longer. The exact timeline depends on court scheduling, whether all heirs consent, asset complexity, and how quickly required notices are completed."
    },
    {
      question: "What happens if the estate is valued slightly over $100,000?",
      answer: "If the estate exceeds $100,000 (excluding the homestead exemption and statutory allowances), you cannot use summary administration. However, you may be able to use certain strategies to reduce the probate estate value, such as accounting for exempt property, funeral expenses, or non-probate assets. Consult with an attorney to explore your options."
    },
    {
      question: "Do all heirs need to agree for summary administration?",
      answer: "While not strictly required by statute, obtaining consent from all interested parties (heirs and beneficiaries) makes the process much smoother. If any heir objects to summary administration or the proposed distribution, the court may require regular probate proceedings instead. Disagreements among heirs are a common reason summary administration petitions are denied."
    },
    {
      question: "Can I handle summary administration without a lawyer?",
      answer: "Legally, yes, but it's generally not recommended. While simpler than full probate, summary administration still requires proper legal filings, court appearances, compliance with notice requirements, and understanding of probate law. Most people benefit from at least consulting with an attorney to ensure the petition is properly prepared and filed. The cost of legal help is typically much less than in regular probate."
    }
  ];

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
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Mar 19, 2026</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                What Is Summary Probate in Cook County, Illinois — and When Can You Use It?
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
                    Summary probate (also called summary administration) is a streamlined probate process available in Cook County for estates valued at $100,000 or less, offering a middle ground between full probate and small estate affidavits.
                  </p>
                  <p className="mb-4">
                    Unlike a small estate affidavit which avoids court entirely, summary administration still requires court filing but eliminates many time-consuming requirements of regular probate. There's no need to appoint a personal representative, no formal inventory process, and a shortened creditor claims period.
                  </p>
                  <p className="mb-0">
                    This guide explains exactly when you can use summary administration in Cook County, what requirements must be met, how the process works, and how it compares to your other options. Whether you're planning ahead or handling a loved one's estate, understanding summary probate can save significant time and money while ensuring proper legal compliance.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-is-summary-probate" className="text-2xl font-bold mt-8 mb-4">
              What Is Summary Probate in Cook County?
            </h2>

            <p className="mb-6">
              Summary probate, formally known as summary administration under Illinois law (755 ILCS 5/25-1), is a simplified probate procedure available for smaller estates. It sits between full probate proceedings and the small estate affidavit process in terms of complexity and requirements.
            </p>

            <p className="mb-6">
              The key distinction is that summary administration <strong>does require court involvement</strong> — you must file a petition with the Circuit Court of Cook County and obtain a court order. However, it eliminates several burdensome aspects of regular probate that make traditional proceedings so time-consuming and expensive.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Important Distinction</h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    Summary administration is <strong>not the same as avoiding probate entirely</strong>. Unlike a <Link href="/learning-center/small-estate-affidavit/" className=\"text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">small estate affidavit</Link> which requires no court filing at all, summary administration does involve filing a petition in the Circuit Court of Cook County and obtaining a court order. What it eliminates is the appointment of a personal representative, the formal inventory process, and the extended creditor claims period of full probate.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800">What's Eliminated</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>No personal representative appointment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>No formal inventory required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Shorter creditor claims period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Reduced court supervision</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800">Time Savings</h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <div>
                    <div className="font-semibold mb-1">Regular Probate:</div>
                    <div className="text-slate-600">9-18+ months typically</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Summary Probate:</div>
                    <div className="text-slate-600">3-6 months typically</div>
                  </div>
                  <div className="bg-white p-2 rounded mt-3">
                    <strong className="text-blue-600">Save 6-12+ months</strong>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-lg border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-800">Cost Savings</h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <div>
                    <div className="font-semibold mb-1">Regular Probate:</div>
                    <div className="text-slate-600">$3,000-$7,000+ typically</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Summary Probate:</div>
                    <div className="text-slate-600">$1,500-$3,500 typically</div>
                  </div>
                  <div className="bg-white p-2 rounded mt-3">
                    <strong className="text-purple-600">Save 40-60% in costs</strong>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="when-can-you-use" className="text-2xl font-bold mt-12 mb-4">
              When Can You Use Summary Administration?
            </h2>

            <p className="mb-6">
              To qualify for summary administration in Cook County, the estate must meet specific statutory requirements under 755 ILCS 5/25-1. These are strict requirements — if any one is not met, you must use regular probate instead.
            </p>

            <div className="my-8 border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'summary'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Summary Administration</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('small-estate')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'small-estate'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Small Estate Affidavit</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('regular')}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'regular'
                      ? 'bg-[#4a708b] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>Regular Probate</span>
                  </div>
                </button>
              </div>

              <div className="p-6 bg-white">
                {activeTab === 'summary' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Summary Administration Requirements</h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Estate Value Must Be $100,000 or Less</div>
                          <p className="text-sm text-slate-700 mb-0">
                            The gross value of the estate (excluding certain exemptions like homestead allowance, family and child support allowances, and exempt property) must not exceed $100,000. This is calculated as of the date of death.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Court Petition Required</div>
                          <p className="text-sm text-slate-700 mb-0">
                            You must file a formal petition with the Circuit Court of Cook County Probate Division. The court will review the petition and, if approved, issue an order directing distribution of the estate assets.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">All Heirs Must Be Identified</div>
                          <p className="text-sm text-slate-700 mb-0">
                            The petition must identify all heirs at law and legatees (beneficiaries under a will, if one exists). All interested parties must receive proper notice of the proceeding.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">No Personal Representative Appointed</div>
                          <p className="text-sm text-slate-700 mb-0">
                            Unlike regular probate, no executor or administrator is formally appointed. The court order itself authorizes the transfer of assets directly to the entitled parties.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'small-estate' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Small Estate Affidavit Requirements</h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Estate Value Must Be $100,000 or Less</div>
                          <p className="text-sm text-slate-700 mb-0">
                            Same threshold as summary administration, but calculated after deducting funeral expenses, reasonable expenses of last illness, and certain statutory allowances.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">No Court Filing Required</div>
                          <p className="text-sm text-slate-700 mb-0">
                            The major advantage: you don't file anything with the court. You simply present the affidavit and death certificate to asset holders (banks, etc.) who then release the assets to you.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Must Wait 6 Months</div>
                          <p className="text-sm text-slate-700 mb-0">
                            You cannot use a small estate affidavit until at least 6 months after the decedent's death. This waiting period allows time for creditors to come forward.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Personal Liability for Debts</div>
                          <p className="text-sm text-slate-700 mb-0">
                            The person signing the affidavit becomes personally liable for the decedent's debts up to the value of the estate assets received. This is a significant risk factor to consider.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'regular' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Regular Probate Overview</h3>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <Building2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Required for Estates Over $100,000</div>
                          <p className="text-sm text-slate-700 mb-0">
                            If the estate exceeds $100,000 in probate assets, you must use regular probate (also called independent administration or supervised administration).
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <Building2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Executor or Administrator Appointed</div>
                          <p className="text-sm text-slate-700 mb-0">
                            The court appoints a personal representative (executor if named in a will, administrator if not) who is responsible for managing the estate throughout the probate process.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <Building2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Formal Inventory and Accounting</div>
                          <p className="text-sm text-slate-700 mb-0">
                            The personal representative must file a detailed inventory of all estate assets with the court, and typically must file periodic accountings showing all receipts and disbursements.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <Building2 className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-800 mb-1">Extended Creditor Claims Period</div>
                          <p className="text-sm text-slate-700 mb-0">
                            Creditors have up to 6 months from when notice is published to file claims against the estate. The personal representative must review and either pay or object to each claim, which adds time and complexity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h2 id="key-requirements" className="text-2xl font-bold mt-12 mb-4">
              Key Requirements and Limitations
            </h2>

            <p className="mb-6">
              Understanding the specific requirements and limitations of summary administration is crucial before deciding to use this process. While it offers significant advantages over regular probate, it's not available in all situations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  When Summary Administration Works Well
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Estate value is clearly under $100,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>All heirs are in agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Debts are minimal or manageable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>Assets are straightforward (bank accounts, simple real estate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>You want court oversight but simplified process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                    <span>No disputes or litigation expected</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  When You Cannot Use Summary Administration
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>Estate exceeds $100,000 threshold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>Significant heir disputes or will contests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>Complex estate with business interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>Multiple parcels of real estate or out-of-state property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>Substantial creditor claims or debt disputes expected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                    <span>Need ongoing estate administration over extended period</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 id="process-overview" className="text-2xl font-bold mt-12 mb-4">
              The Summary Probate Process
            </h2>

            <p className="mb-6">
              While simpler than regular probate, summary administration still follows a structured legal process. Here's what to expect at each stage:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a708b] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Gather Required Information</h3>
                  <p className="text-slate-700 mb-3">
                    Collect the death certificate, identify all assets and their values, compile a list of heirs and beneficiaries, and gather any will or trust documents. Calculate the total estate value to confirm you're under the $100,000 threshold.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-slate-800">Documents needed:</strong> Death certificate, asset statements, property deeds, will (if any), list of heirs with addresses
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a708b] text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Prepare and File Petition</h3>
                  <p className="text-slate-700 mb-3">
                    Draft a petition for summary administration that includes all required information about the decedent, heirs, assets, and proposed distribution. File the petition with the Circuit Court of Cook County Probate Division along with the filing fee.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-slate-800">Filing location:</strong> Richard J. Daley Center, 50 W. Washington Street, Chicago, IL 60602 (Probate Division, Room 1202)
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a708b] text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Provide Notice to Interested Parties</h3>
                  <p className="text-slate-700 mb-3">
                    After filing, you must provide proper legal notice to all heirs, legatees, and known creditors. This typically involves certified mail to interested parties and may require publication in a local newspaper.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-slate-800">Timeline:</strong> Notice must be provided at least 14 days before the court hearing
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a708b] text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Attend Court Hearing</h3>
                  <p className="text-slate-700 mb-3">
                    Appear at the scheduled court hearing where the judge will review the petition, confirm that all requirements are met, and hear any objections from interested parties. If everything is in order, the judge will approve the petition.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-slate-800">What to bring:</strong> Photo ID, copies of all filed documents, proof of notice to all parties
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a708b] text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Obtain Court Order</h3>
                  <p className="text-slate-700 mb-3">
                    Once approved, the court will issue an order for summary administration. This order directs asset holders (banks, title companies, etc.) to transfer assets according to the distribution plan approved by the court.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-slate-800">Important:</strong> Get certified copies of the court order — you'll need these to actually transfer assets
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#4a708b] text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Transfer Assets</h3>
                  <p className="text-slate-700 mb-3">
                    Present certified copies of the court order along with the death certificate to banks, investment firms, and other asset holders. They will transfer the assets according to the court's order. For real estate, record the order with the county recorder's office.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm">
                    <strong className="text-slate-800">Timeline:</strong> Most asset transfers can be completed within 2-4 weeks of receiving the court order
                  </div>
                </div>
              </div>
            </div>

            <h2 id="comparison" className="text-2xl font-bold mt-12 mb-4">
              Comparing Your Options: Which Process Is Right?
            </h2>

            <p className="mb-6">
              Choosing between summary administration, small estate affidavit, and regular probate depends on your specific situation. Here's a detailed comparison to help you decide:
            </p>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full bg-gradient-to-r from-[#4a708b] to-[#5d8aa8] text-white px-6 py-4 rounded-lg font-semibold text-lg flex items-center justify-between hover:from-[#3d5e73] hover:to-[#4a708b] transition-all mb-6"
            >
              <span>View Detailed Comparison Table</span>
              {showComparison ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>

            {showComparison && (
              <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left font-bold text-slate-800 border-b border-gray-200">Feature</th>
                      <th className="p-4 text-left font-bold text-slate-800 border-b border-gray-200">Small Estate Affidavit</th>
                      <th className="p-4 text-left font-bold text-slate-800 border-b border-gray-200 bg-blue-50">Summary Administration</th>
                      <th className="p-4 text-left font-bold text-slate-800 border-b border-gray-200">Regular Probate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Estate Value Limit</td>
                      <td className="p-4 border-b border-gray-200">$100,000 or less</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">$100,000 or less</td>
                      <td className="p-4 border-b border-gray-200">Any amount (required if over $100k)</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Court Filing Required?</td>
                      <td className="p-4 border-b border-gray-200">No</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">Yes</td>
                      <td className="p-4 border-b border-gray-200">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Waiting Period</td>
                      <td className="p-4 border-b border-gray-200">6 months after death</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">No waiting period</td>
                      <td className="p-4 border-b border-gray-200">No waiting period</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Personal Representative</td>
                      <td className="p-4 border-b border-gray-200">Not appointed</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">Not appointed</td>
                      <td className="p-4 border-b border-gray-200">Required appointment</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Typical Timeline</td>
                      <td className="p-4 border-b border-gray-200">2-4 weeks (after waiting period)</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">3-6 months</td>
                      <td className="p-4 border-b border-gray-200">9-18+ months</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Typical Cost</td>
                      <td className="p-4 border-b border-gray-200">$50-$500</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">$1,500-$3,500</td>
                      <td className="p-4 border-b border-gray-200">$3,000-$7,000+</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Court Supervision</td>
                      <td className="p-4 border-b border-gray-200">None</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">Limited (court order required)</td>
                      <td className="p-4 border-b border-gray-200">Full supervision</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Formal Inventory</td>
                      <td className="p-4 border-b border-gray-200">Not required</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">Not required</td>
                      <td className="p-4 border-b border-gray-200">Required</td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-semibold">Attorney Recommended?</td>
                      <td className="p-4 border-b border-gray-200">Optional (simple cases)</td>
                      <td className="p-4 border-b border-gray-200 bg-blue-50">Yes (court filing involved)</td>
                      <td className="p-4 border-b border-gray-200">Highly recommended</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Personal Liability</td>
                      <td className="p-4">High (personally liable for debts)</td>
                      <td className="p-4 bg-blue-50">Lower (court oversight)</td>
                      <td className="p-4">Lowest (court supervised throughout)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            <h2 id="costs-timeline" className="text-2xl font-bold mt-12 mb-4">
              Costs and Timeline for Summary Administration
            </h2>

            <p className="mb-6">
              Understanding the expected costs and timeline can help you plan accordingly and set realistic expectations for the summary administration process.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-[#4a708b]" />
                  Expected Costs
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-start p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-800">Court Filing Fees</div>
                      <div className="text-sm text-slate-600">Petition filing and certified copies</div>
                    </div>
                    <div className="font-bold text-slate-800">$300-$500</div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-800">Legal Notice Publication</div>
                      <div className="text-sm text-slate-600">Required newspaper publication</div>
                    </div>
                    <div className="font-bold text-slate-800">$100-$200</div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-800">Attorney Fees</div>
                      <div className="text-sm text-slate-600">Legal assistance (recommended)</div>
                    </div>
                    <div className="font-bold text-slate-800">$1,000-$2,500</div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-800">Certified Death Certificates</div>
                      <div className="text-sm text-slate-600">Multiple copies needed</div>
                    </div>
                    <div className="font-bold text-slate-800">$50-$100</div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-slate-800">Miscellaneous Fees</div>
                      <div className="text-sm text-slate-600">Postage, copies, recording fees</div>
                    </div>
                    <div className="font-bold text-slate-800">$50-$200</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#4a708b] text-white rounded-lg font-bold">
                    <div>Total Estimated Cost</div>
                    <div className="text-xl">$1,500-$3,500</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#4a708b]" />
                  Expected Timeline
                </h3>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold text-slate-800">Preparation</div>
                      <div className="font-bold text-slate-800">1-2 weeks</div>
                    </div>
                    <div className="text-sm text-slate-600">Gathering documents, valuing assets, preparing petition</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold text-slate-800">Filing to Hearing</div>
                      <div className="font-bold text-slate-800">4-8 weeks</div>
                    </div>
                    <div className="text-sm text-slate-600">Court scheduling, notice period, waiting for hearing date</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold text-slate-800">Order to Asset Transfer</div>
                      <div className="font-bold text-slate-800">2-4 weeks</div>
                    </div>
                    <div className="text-sm text-slate-600">Obtaining certified copies, presenting to asset holders</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold text-slate-800">Final Distribution</div>
                      <div className="font-bold text-slate-800">1-2 weeks</div>
                    </div>
                    <div className="text-sm text-slate-600">Completing transfers, distributing to heirs</div>
                  </div>

                  <div className="p-4 bg-[#4a708b] text-white rounded-lg font-bold">
                    <div className="flex justify-between items-center">
                      <div>Total Timeline</div>
                      <div className="text-xl">3-6 months</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
                  <p className="text-sm text-slate-700 mb-0">
                    <strong>Note:</strong> Timeline can vary based on court scheduling, complexity of assets, and whether any issues arise during the process. Cook County probate courts can have significant backlogs, which may extend timelines.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="frequently-asked-questions" className="text-2xl font-bold mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center gap-4"
                  >
                    <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="p-5 pt-0 bg-white border-t border-gray-200">
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4">
              Next Steps: Getting Started with Summary Administration
            </h2>

            <p className="mb-6">
              If you've determined that summary administration is appropriate for your situation, here are the recommended next steps:
            </p>

            <div className="bg-gradient-to-br from-[#4a708b] to-[#5d8aa8] text-white p-8 rounded-xl my-8">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Schedule a Consultation</div>
                    <div className="text-white/90 text-sm">Discuss your specific situation with an experienced probate attorney to confirm eligibility and strategy</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Gather Essential Documents</div>
                    <div className="text-white/90 text-sm">Death certificate, asset documentation, will (if any), and heir contact information</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Calculate Estate Value</div>
                    <div className="text-white/90 text-sm">Confirm the estate is under $100,000 threshold with proper valuations</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">File Petition</div>
                    <div className="text-white/90 text-sm">Work with your attorney to prepare and file the summary administration petition</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/book-consultation"
                  className="bg-white text-[#4a708b] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-800 mb-2">Important Legal Notice</h3>
                  <p className="text-slate-700 leading-relaxed mb-0">
                    This article provides general information about summary administration in Cook County, Illinois. It is not legal advice and should not be relied upon as a substitute for consultation with a qualified attorney. Probate law can be complex, and every estate situation is unique. Always consult with a licensed Illinois probate attorney before making decisions about estate administration.
                  </p>
                </div>
              </div>
            </div>

          </article>

          <BlogNavigation previousPost={previous} nextPost={next} />
          <RelatedArticles articles={relatedPosts} />
          <BlogContactForm />
        </div>
      </div>
    </>
  );
}
