'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FileText, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, ChevronDown, ChevronUp, DollarSign, Scale, Clock, Users, Shield, Chrome as Home, Circle as XCircle } from 'lucide-react';
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

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-probate', title: 'What Is Probate and Why Does It Take So Long?', level: 2, numeration: '2' },
    { id: 'summary-administration', title: 'What Is Summary Administration?', level: 2, numeration: '3' },
    { id: 'when-allowed', title: 'When Is Summary Administration Allowed?', level: 2, numeration: '4' },
    { id: 'real-estate-limitation', title: 'Critical Limitation: Real Estate Cannot Be Transferred', level: 2, numeration: '5' },
    { id: 'cook-county-considerations', title: 'Cook County Practical Considerations', level: 2, numeration: '6' },
    { id: 'comparison', title: 'Comparing Summary Administration to Other Options', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'What to Do If Your Estate Qualifies', level: 2, numeration: '8' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions', level: 2, numeration: '9' }
  ];

  const faqs = [
    {
      question: 'What is the difference between summary administration and a small estate affidavit?',
      answer: 'A small estate affidavit requires no court involvement at all and can be used for personal property estates valued at $100,000 or less. Summary administration, by contrast, involves filing a petition with the court and obtaining a formal court order. Summary administration provides court oversight and legal finality that a small estate affidavit does not, but it cannot transfer real estate.'
    },
    {
      question: 'Can summary administration be used to transfer real estate?',
      answer: 'No. One of the most significant limitations of summary administration in Illinois is that the court cannot direct the transfer of title to real estate in this type of proceeding. If the estate includes real property, you will need to use formal probate or another alternative such as a bond in lieu of probate.'
    },
    {
      question: 'What is the $100,000 threshold for summary administration?',
      answer: 'The gross value of the decedent\'s real and personal estate subject to administration in Illinois cannot exceed $100,000. This applies only to probate assets. Non-probate assets such as joint tenancy property, retirement accounts with beneficiaries, payable-on-death accounts, and life insurance proceeds are not counted toward this limit.'
    },
    {
      question: 'Do all heirs need to consent to summary administration?',
      answer: 'Yes. All legatees and heirs must consent in writing to the summary administration proceeding. If even one heir or legatee objects or cannot be located, summary administration may not be available.'
    },
    {
      question: 'Is there a creditor claims period in summary administration?',
      answer: 'Summary administration does not provide the same six-month creditor bar that formal probate offers. Creditors may potentially assert claims against the estate for up to two years after the decedent\'s death, which means distributees who have already received their shares could face exposure if a claim surfaces later.'
    },
    {
      question: 'What bond is required for summary administration?',
      answer: 'Each person who will receive a distribution from the estate under summary administration must execute a bond equal to the value of the property they receive. This bond serves as protection for creditors and others who might later have a valid claim against the estate.'
    },
    {
      question: 'How long does summary administration take in Cook County?',
      answer: 'Summary administration is faster than formal probate, which typically takes 9-15 months. However, the exact timeline depends on how quickly you can gather all required documents, obtain written consents from all heirs, and satisfy the court\'s requirements. It can often be completed in a matter of weeks or months rather than over a year.'
    },
    {
      question: 'Do I need an attorney for summary administration?',
      answer: 'While not legally required, consulting with an experienced Illinois probate attorney is strongly advisable. The detailed statutory requirements, bond obligations, and potential creditor exposure mean that errors can jeopardize the entire proceeding and expose distributees to personal liability.'
    }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is Summary Probate in Cook County, Illinois — and When Can You Use It?",
    "description": "Comprehensive guide to summary administration in Cook County. Learn the $100,000 threshold, required conditions, limitations, and how this streamlined probate process compares to formal probate and small estate affidavits.",
    "author": {
      "@type": "Organization",
      "name": "Illinois Estate Law"
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

  if (!currentPost) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Probate Administration
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                What Is Summary Probate in Cook County, Illinois — and When Can You Use It?
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Understanding summary administration: the faster, streamlined alternative to formal probate for qualifying estates under $100,000
              </p>
              <div className="mt-8 flex items-center justify-center gap-6 text-white/80 text-sm">
                <span>📅 March 19, 2026</span>
                <span>⏱️ 12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Table of Contents - Sticky Sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-9">
              {/* Article Summary */}
              <section id="article-summary" className="mb-12 scroll-mt-24">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 border-l-4 border-[#77B1D4] rounded-r-xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#77B1D4] rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-4">Article Summary</h2>
                      <div className="prose prose-slate max-w-none">
                        <p className="text-slate-700 leading-relaxed mb-4">
                          <strong>Summary administration</strong> (often called "summary probate") is a streamlined court process available in Illinois for estates valued at $100,000 or less. It allows families to settle an estate faster than traditional formal probate, which typically takes 9-15 months.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          <strong>Key points:</strong>
                        </p>
                        <ul className="space-y-2 text-slate-700">
                          <li>Available for estates under $100,000 in probate assets</li>
                          <li>Requires court filing and approval (unlike small estate affidavits)</li>
                          <li>All heirs must consent in writing</li>
                          <li>Cannot transfer real estate titles</li>
                          <li>Each distributee must post a bond</li>
                          <li>Does not provide the same creditor protection as formal probate</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <div className="prose prose-slate prose-lg max-w-none mb-12">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Losing a loved one is never easy, and the legal process that follows can feel overwhelming. For many families in Cook County, the word "probate" conjures images of lengthy court proceedings, mounting attorney's fees, and months — sometimes over a year — of waiting before an estate can finally be closed. What many families do not realize is that Illinois law offers a faster, simplified path for qualifying estates called <strong>summary administration</strong>, sometimes referred to informally as "summary probate."
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Understanding what it is, when it applies, and what its limitations are can help executors, administrators, and heirs make informed decisions at a difficult time.
                </p>
              </div>

              {/* What Is Probate Section */}
              <section id="what-is-probate" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">2</span>
                  What Is Probate, and Why Does It Take So Long?
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Before diving into summary administration, it helps to understand what traditional <Link href="/chicago-probate-lawyer/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">probate</Link> involves. When a person dies leaving assets titled solely in their name — such as a bank account, vehicle, or real estate held as a tenant in common — those assets cannot simply be transferred to heirs or beneficiaries without court involvement.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Probate is the court-supervised process by which a personal representative (called an executor if there is a will, or an administrator if there is not) is appointed to collect the decedent's assets, pay valid debts and claims, and distribute the remainder to the people legally entitled to receive it.
                  </p>

                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 my-8">
                    <div className="flex items-start gap-4">
                      <Clock className="w-8 h-8 text-[#77B1D4] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Typical Formal Probate Timeline</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          In Cook County, formal probate proceedings are filed in the <Link href="/probate/cook-county/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">Probate Division of the Circuit Court of Cook County</Link>, most commonly at the Richard J. Daley Center in Chicago. A typical formal probate in Illinois takes anywhere from <strong>nine to fifteen months</strong>, largely because the law requires the estate to remain open for at least six months after publication of notice to creditors.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          That six-month window exists to give creditors a fair opportunity to file claims against the estate — and any claim not filed within that period is barred forever. While that creditor bar is a powerful protection, it means that even straightforward, uncontested estates cannot be rushed through the formal process.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    For smaller estates, however, the legislature recognized that subjecting families to this full timeline can be disproportionately burdensome. That recognition gave rise to summary administration under Section 9-8 of the Illinois Probate Act of 1975, 755 ILCS 5/9-8.
                  </p>
                </div>
              </section>

              {/* Summary Administration Definition */}
              <section id="summary-administration" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">3</span>
                  What Is Summary Administration Under 755 ILCS 5/9-8?
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Summary administration is a modified, abbreviated probate court process that permits the payment of claims and the direct distribution of a decedent's personal estate without the appointment of a full personal representative and without the lengthy timelines of formal probate.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Rather than opening a full estate and waiting through the six-month creditor claims period, an interested person — such as an heir or legatee — files a petition asking the court to direct distribution of the estate's assets in a single, streamlined proceeding.
                  </p>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-8">
                    <div className="flex items-start gap-4">
                      <Scale className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">How Summary Administration Works</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          Upon the filing of a proper petition, and after the court has ascertained heirship and admitted the <Link href="/chicago-wills-lawyer/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">will</Link> (if any) to probate, the court examines whether all the statutory conditions are met. If they are, the court enters an order directing how the estate's assets are to be distributed.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          The process cuts out most of the administrative back-and-forth of a conventional probate while still providing court oversight and finality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 my-8">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Important Distinction</h4>
                        <p className="text-slate-700 leading-relaxed">
                          It is important to note that summary administration is <strong>not the same as avoiding probate entirely</strong>. Unlike a <Link href="/learning-center/small-estate-affidavit/" className=\"text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">small estate affidavit</Link> under 755 ILCS 5/25-1 — which requires no court filing at all — summary administration does involve filing a petition in the Circuit Court of Cook County and obtaining a court order. What it eliminates is the appointment of a personal representative, the formal inventory process, and the extended creditor claims period of a full estate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* When Is Summary Administration Allowed */}
              <section id="when-allowed" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">4</span>
                  When Is Summary Administration Allowed?
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Under 755 ILCS 5/9-8, the court may grant summary administration only when all of the following conditions are satisfied:
                  </p>

                  {/* Condition 1 */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#77B1D4] flex items-center justify-center text-white font-bold">
                          1
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">The gross value of the estate does not exceed $100,000</h3>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          This is the threshold requirement. The gross value of the decedent's real and personal estate subject to administration in Illinois — as itemized in the petition — cannot exceed $100,000.
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 mt-4">
                          <p className="text-slate-700 leading-relaxed mb-2">
                            <strong>Important:</strong> Only probate assets are counted toward this limit. Non-probate assets are not included:
                          </p>
                          <ul className="space-y-1 text-slate-700 ml-4">
                            <li>• Real estate held in joint tenancy</li>
                            <li>• IRAs and 401(k) plans with named beneficiaries</li>
                            <li>• Payable-on-death (POD) financial accounts</li>
                            <li>• Life insurance proceeds payable to a named beneficiary</li>
                            <li>• Assets held in a <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">revocable living trust</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Condition 2 */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#77B1D4] flex items-center justify-center text-white font-bold">
                          2
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">All known claims against the estate are addressed</h3>
                        <p className="text-slate-700 leading-relaxed">
                          There must be no unpaid claim against the estate, or alternatively, the petitioner must list all claimants known to them, together with the amounts known to be owed to each. The court will then direct payment of those listed claims as part of its order. The petitioner must be diligent about identifying known creditors, because the consequences of overlooking a creditor can be significant.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Condition 3 */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#77B1D4] flex items-center justify-center text-white font-bold">
                          3
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">No federal or Illinois estate taxes are owed</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Summary administration is only available if no estate or death taxes will be due to the United States or to Illinois, or if any such taxes have already been paid, provided for, or are the obligation of another fiduciary. For most modest estates falling under the $100,000 threshold, this condition is easily satisfied, as Illinois's estate tax applies only to estates above $4 million and the federal estate tax exemption is considerably higher.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Condition 4 */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#77B1D4] flex items-center justify-center text-white font-bold">
                          4
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Surviving spouse's and child's awards are addressed</h3>
                        <p className="text-slate-700 leading-relaxed">
                          If a surviving spouse or dependent child is entitled to an award under the Illinois Probate Act (755 ILCS 5/15-1 and 5/15-2), the petition must identify those individuals and the applicable award amounts. This condition ensures that a decedent's surviving family members are not left without provision simply because the estate is being handled on an expedited basis.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Condition 5 */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#77B1D4] flex items-center justify-center text-white font-bold">
                          5
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">All legatees and heirs consent in writing</h3>
                        <p className="text-slate-700 leading-relaxed">
                          One of the most important practical requirements for summary administration is that <strong>all legatees and heirs must consent in writing</strong> to the proceeding. This requirement reflects the fact that the process moves quickly and without the full procedural protections of formal probate. If even one heir or legatee objects or cannot be located, summary administration may not be available.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Condition 6 */}
                  <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#77B1D4] flex items-center justify-center text-white font-bold">
                          6
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-3">All distributees must post a bond</h3>
                        <p className="text-slate-700 leading-relaxed">
                          Each person who will receive a distribution from the estate under summary administration must execute a bond equal to the value of the property they receive. This bond serves as protection for creditors and others who might later have a valid claim against the estate, since summary administration does not benefit from the same creditor bar cutoff that formal probate provides.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Real Estate Limitation */}
              <section id="real-estate-limitation" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-red-500 text-white font-bold text-lg">5</span>
                  A Critical Limitation: Summary Administration Cannot Transfer Real Estate
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-6">
                    <div className="flex items-start gap-4">
                      <XCircle className="w-10 h-10 text-red-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Cannot Transfer Real Property</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          One of the most significant constraints of summary administration in Illinois is that <strong className="text-red-700">the court cannot direct the transfer of title to real estate</strong> in this type of proceeding.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          If the decedent's probate estate includes real property — a home, a condo, a vacant lot — summary administration will not resolve that issue. Real estate transfers in a decedent's estate generally require either formal probate with the appointment of a representative, or an alternative mechanism such as a bond in lieu of probate.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    Practitioners and families should be aware of this limitation early in their planning, as it may render summary administration unavailable or insufficient even when all other conditions are met. If you need to transfer real estate from a deceased person's name, you may want to review <Link href="/blog/can-a-house-transfer-automatically-at-death-in-illinois-5-ways-it-can-and-3-ways-it-cant/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">methods for transferring a house at death in Illinois</Link>.
                  </p>
                </div>
              </section>

              {/* Cook County Considerations */}
              <section id="cook-county-considerations" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">6</span>
                  The Cook County Wrinkle: Practical Considerations
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    While summary administration is available under state law throughout Illinois, practitioners in Cook County have noted that compliance with the bond and notice requirements — which must be satisfied in the Circuit Court of Cook County's Probate Division — can add cost and complexity that partially offsets the process's efficiency benefits.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    The bond required of each distributee must be properly documented and filed with the court, which introduces a step that requires careful coordination among all heirs.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Creditor Claims Exposure</h4>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          One of the most significant practical disadvantages of summary administration — as compared to formal probate — is the creditor claims window.
                        </p>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          In <Link href="/chicago-probate-lawyer/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">formal probate</Link>, creditors who fail to file claims within six months after the date of first publication are barred from pursuing those claims. Under summary administration, however, that shortened six-month bar does not apply in the same way.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          Creditors may potentially assert claims against the estate for up to <strong>two years after the decedent's death</strong>, which means distributees who have already received their shares could face exposure if a claim surfaces later. The bond requirement is, in large part, designed to address this risk — but it is a risk that families and their attorneys should weigh carefully.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Section */}
              <section id="comparison" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">7</span>
                  Summary Administration vs. Other Alternatives
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Summary administration occupies a middle ground in the range of options available for small estates in Illinois.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Small Estate Affidavit */}
                    <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <FileText className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Small Estate Affidavit</h3>
                      <ul className="space-y-2 text-sm text-slate-700 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>No court involvement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Personal property only</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Under $100,000</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Cannot transfer real estate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Personal liability for affiant</span>
                        </li>
                      </ul>
                      <Link href="/learning-center/small-estate-affidavit/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold text-sm">
                        Learn more →
                      </Link>
                    </div>

                    {/* Summary Administration */}
                    <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-[#77B1D4] rounded-xl p-6">
                      <div className="w-12 h-12 bg-[#77B1D4] rounded-lg flex items-center justify-center mb-4">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Summary Administration</h3>
                      <ul className="space-y-2 text-sm text-slate-700 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Court oversight</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Faster than formal probate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Under $100,000</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Cannot transfer real estate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Requires all heirs to consent</span>
                        </li>
                      </ul>
                    </div>

                    {/* Formal Probate */}
                    <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-slate-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3">Formal Probate</h3>
                      <ul className="space-y-2 text-sm text-slate-700 mb-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Can transfer real estate</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>6-month creditor bar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>Full court supervision</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>9-15 month timeline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          <span>Higher costs</span>
                        </li>
                      </ul>
                      <Link href="/chicago-probate-lawyer/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold text-sm">
                        Learn more →
                      </Link>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    Formal probate, while more time-consuming and expensive, provides the strongest protections: the six-month creditor bar, court supervision of the representative's conduct, and the ability to address real estate. For estates approaching or exceeding $100,000, or where creditor exposure is uncertain, formal probate remains the most protective choice.
                  </p>
                </div>
              </section>

              {/* Next Steps */}
              <section id="next-steps" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">8</span>
                  What to Do If You Think Your Estate Qualifies
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you are an executor, administrator, or heir dealing with a Cook County estate that may qualify for summary administration, the process begins with the filing of a petition in the <Link href="/probate/cook-county/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold">Probate Division of the Circuit Court of Cook County</Link>.
                  </p>

                  <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-3">Required Elements of the Petition</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Carefully itemize all probate assets</li>
                      <li>• Identify all heirs and legatees</li>
                      <li>• List all known creditors and amounts owed</li>
                      <li>• Address any applicable spouse's or child's awards</li>
                      <li>• Include written consents from all heirs and legatees</li>
                    </ul>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    The petition for distribution on summary administration may be combined with — or filed separately from — a petition for probate of a will or for letters of administration, providing flexibility in how the overall proceeding is structured.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Legal Counsel Recommended</h4>
                        <p className="text-slate-700 leading-relaxed">
                          Given the detailed statutory requirements, the bond obligations, and the potential creditor exposure, <strong>consulting with an experienced Illinois probate attorney before proceeding is strongly advisable</strong>. A misstep in identifying creditors, obtaining consents, or calculating the value of the probate estate can jeopardize the entire summary administration and expose distributees to personal liability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed">
                    The process is faster than formal probate — but "simpler" is only true when it is executed correctly.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="frequently-asked-questions" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#77B1D4] text-white font-bold text-lg">9</span>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-[#77B1D4] transition-colors"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                      >
                        <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-[#77B1D4] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal Disclaimer */}
              <div className="bg-slate-100 border-l-4 border-slate-400 rounded-r-xl p-6 mb-12">
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  <strong>Disclaimer:</strong> This blog post is intended for general informational purposes only and does not constitute legal advice. Every estate is unique, and the facts of your specific situation may affect which procedures are available to you. If you have questions about the administration of an estate in Cook County or elsewhere in Illinois, please contact a licensed Illinois probate attorney.
                </p>
              </div>

              {/* Navigation */}
              <BlogNavigation previousPost={previous} nextPost={next} />

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="mt-16">
                  <RelatedArticles articles={relatedPosts} />
                </div>
              )}

              {/* Contact Form */}
              <div className="mt-16">
                <BlogContactForm />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
