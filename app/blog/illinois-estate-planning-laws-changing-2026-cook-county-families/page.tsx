'use client';

import { useState } from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';
import { ChevronDown, ChevronUp, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Info, ArrowRight, Calculator, BookOpen, FileText } from 'lucide-react';

export default function IllinoisEstatePlanningLaws2026Page() {
  const currentSlug = 'illinois-estate-planning-laws-changing-2026-cook-county-families';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeChange, setActiveChange] = useState<string>('estate-tax');
  const [estateValue, setEstateValue] = useState<string>('');
  const [calculatorResult, setCalculatorResult] = useState<{ exempt: boolean; estimatedTax: number; threshold: number } | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCalculate = () => {
    const value = parseFloat(estateValue.replace(/[^0-9.]/g, ''));
    if (isNaN(value) || value <= 0) return;
    const threshold = 4000000;
    const exempt = value <= threshold;
    let estimatedTax = 0;
    if (!exempt) {
      const taxable = value - threshold;
      if (taxable <= 1000000) estimatedTax = taxable * 0.08;
      else if (taxable <= 2000000) estimatedTax = 80000 + (taxable - 1000000) * 0.10;
      else if (taxable <= 4000000) estimatedTax = 180000 + (taxable - 2000000) * 0.12;
      else estimatedTax = 420000 + (taxable - 4000000) * 0.16;
    }
    setCalculatorResult({ exempt, estimatedTax, threshold });
  };

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  const lawChanges = [
    {
      id: 'estate-tax',
      label: 'Estate Tax Exemption',
      icon: <Calculator className="w-5 h-5" />,
      color: 'bg-[#2D3E50]',
      oldRule: '$2,000,000 exemption (unchanged since 2013)',
      newRule: '$4,000,000 exemption (effective January 1, 2026)',
      impact: 'Estates between $2M–$4M are newly exempt from Illinois estate tax, potentially saving families $100,000–$250,000 or more.',
      action: 'Review your estate plan if your net worth is between $2M–$6M. Prior tax-minimization strategies may need updating.',
    },
    {
      id: 'probate-threshold',
      label: 'Probate Threshold',
      icon: <FileText className="w-5 h-5" />,
      color: 'bg-[#4a708b]',
      oldRule: '$100,000 small estate affidavit threshold',
      newRule: '$100,000 threshold remains — but Cook County has updated court fees and filing requirements',
      impact: 'While the dollar threshold holds, new Cook County administrative rules affect how small estates are processed and which forms are required.',
      action: 'If you are administering an estate under $100,000 in Cook County, confirm current form requirements before filing.',
    },
    {
      id: 'power-of-attorney',
      label: 'Power of Attorney Updates',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'bg-[#5a8a6a]',
      oldRule: 'Illinois Statutory Short Form Power of Attorney for Property (2012 form)',
      newRule: 'Updated statutory form with enhanced agent accountability provisions and clearer gift-giving authority language',
      impact: 'Older POA documents remain valid, but the updated statutory form provides stronger protections against agent abuse and reduces ambiguity.',
      action: 'Consider replacing POAs drafted before 2024 with the updated statutory form, especially if your agent has broad authority.',
    },
    {
      id: 'digital-assets',
      label: 'Digital Asset Access',
      icon: <Info className="w-5 h-5" />,
      color: 'bg-[#8a6a5a]',
      oldRule: 'Limited fiduciary access to digital accounts under RUFADAA (2016)',
      newRule: 'Expanded fiduciary rights with clearer platform compliance obligations and online tool recognition',
      impact: 'Executors and trustees now have a stronger legal basis to access cryptocurrency wallets, online accounts, and digital property.',
      action: 'Update your estate plan to explicitly address digital assets, including instructions for accessing accounts and wallet seed phrases.',
    },
  ];

  const activeChangeData = lawChanges.find(c => c.id === activeChange)!;

  const faqs = [
    {
      q: 'Does the new $4 million estate tax exemption apply to estates that are currently in probate?',
      a: 'The exemption applies based on the date of death. If the decedent passed away on or after January 1, 2026, the $4 million exemption applies regardless of when the probate proceeding was opened. Estates where death occurred before January 1, 2026 remain subject to the prior $2 million exemption.',
    },
    {
      q: 'My estate is worth $3.5 million. Do I still need an irrevocable trust to avoid Illinois estate tax?',
      a: 'Under the new exemption, a $3.5 million estate would fall entirely below the threshold and owe no Illinois estate tax. However, you should still consult an attorney — estate values fluctuate, life insurance and retirement accounts are often included in your taxable estate, and federal estate tax rules (currently with a $13.99 million exemption) may still apply depending on your circumstances.',
    },
    {
      q: 'Are the changes to the Power of Attorney form mandatory? Does my old POA become invalid?',
      a: 'No. Powers of attorney executed under prior statutory forms remain legally valid. The updated form is not retroactively required. That said, if your existing POA was drafted more than a few years ago, it may lack clarity around digital assets, gift authority, or agent accountability that the newer form provides. An attorney review is worthwhile.',
    },
    {
      q: 'How does the new estate tax exemption affect married couples in Cook County?',
      a: 'Illinois does not have portability of the estate tax exemption between spouses (unlike federal law). Each spouse has their own $4 million exemption. For married couples with combined estates over $4 million, proper planning — such as a bypass trust or AB trust structure — remains important to maximize both exemptions. An estate plan that worked under $2 million thresholds may need revision.',
    },
    {
      q: 'Do these changes affect my existing revocable living trust?',
      a: 'Your trust itself remains valid. However, if your trust was drafted with tax planning provisions triggered at the $2 million threshold, those provisions may now produce unintended results — for example, forcing a trust split that is no longer tax-necessary. An attorney should review your trust documents to ensure they still reflect your wishes.',
    },
    {
      q: 'I have a small business. How do the 2026 changes affect business succession planning?',
      a: 'The higher estate tax exemption is particularly beneficial for small business owners whose enterprise value previously pushed them above the old $2 million threshold. Strategies like FLPs (family limited partnerships) and buy-sell agreements remain important for valuation purposes, but the immediate tax pressure on mid-sized businesses is reduced. Business owners with estates over $4 million still need active planning.',
    },
  ];

  const tocItems = [
    { id: 'why-2026-matters', title: 'Why 2026 Is a Pivotal Year for Illinois Estates', level: 2, numeration: '1' },
    {
      id: 'estate-tax-exemption-change', title: 'The Estate Tax Exemption Is Doubling', level: 2, numeration: '2',
      children: [
        { id: 'who-benefits', title: 'Who Benefits Most', level: 3, numeration: '2.1' },
        { id: 'married-couples', title: 'The Married Couples Problem: No Portability', level: 3, numeration: '2.2' },
        { id: 'estate-tax-calculator', title: 'Interactive Estate Tax Impact Calculator', level: 3, numeration: '2.3' },
      ],
    },
    {
      id: 'law-changes-overview', title: 'All Four Major Law Changes Explained', level: 2, numeration: '3',
      children: [
        { id: 'poa-updates', title: 'Power of Attorney Updates', level: 3, numeration: '3.1' },
        { id: 'digital-assets-update', title: 'Digital Asset Access Expanded', level: 3, numeration: '3.2' },
        { id: 'cook-county-probate', title: 'Cook County Probate Procedures', level: 3, numeration: '3.3' },
      ],
    },
    {
      id: 'action-steps', title: '6 Action Steps Cook County Families Should Take Now', level: 2, numeration: '4',
    },
    {
      id: 'what-stays-the-same', title: 'What Has NOT Changed', level: 2, numeration: '5',
    },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '6' },
  ];

  const actionSteps = [
    {
      step: '1',
      title: 'Get Your Estate Valued',
      description: 'Before anything else, get a realistic picture of your estate: home equity, retirement accounts, life insurance death benefits, business interests, and investment accounts. Many Cook County homeowners are surprised to find their estate exceeds $4 million once all assets are counted.',
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      step: '2',
      title: 'Review Existing Trust Documents for Outdated Tax Triggers',
      description: 'If you have a revocable living trust with a credit shelter or bypass trust provision keyed to the old $2 million exemption, those provisions now activate at the wrong threshold. An attorney review can update the trigger or convert it to a more flexible formula clause.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: '3',
      title: 'Update or Replace Older Powers of Attorney',
      description: 'Documents drafted before 2022 likely lack digital asset authority and may use outdated gift-giving language. The updated Illinois statutory form is more protective — but it still must be executed correctly to be enforceable.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      step: '4',
      title: 'Document Your Digital Assets',
      description: 'Create a secure inventory of online accounts, cryptocurrency wallets, subscription services, and digital property. Provide your agent and executor with instructions — not just passwords, but the authority language in your legal documents to access these assets.',
      icon: <Info className="w-6 h-6" />,
    },
    {
      step: '5',
      title: 'Revisit Beneficiary Designations',
      description: 'Retirement accounts, life insurance policies, and TOD designations pass outside your will and trust. If these designations are outdated (naming an ex-spouse, a deceased person, or a minor), no estate plan change will override them. Review them annually.',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: '6',
      title: 'Schedule a Formal Estate Plan Review',
      description: 'Even if you think nothing applies to you, a 2026 review is worthwhile. Illinois law changes, family circumstances change, and asset values change. What was a solid plan in 2020 may have gaps today. An attorney review typically takes one meeting and may save your family significantly.',
      icon: <ArrowRight className="w-6 h-6" />,
    },
  ];

  const cookCountyProbateLink = '/blog/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/';

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Illinois Estate Planning Laws Changing in 2026: What Cook County Families Need to Know',
            description: 'A comprehensive guide to the Illinois estate planning law changes taking effect in 2026, including the doubled estate tax exemption, power of attorney updates, digital asset access, and what Cook County families should do now.',
            datePublished: '2026-03-26',
            dateModified: '2026-03-26',
            author: {
              '@type': 'Organization',
              name: 'Illinois Estate Law',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Illinois Estate Law',
              url: 'https://illinoisestatelaw.com',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://illinoisestatelaw.com/blog/illinois-estate-planning-laws-changing-2026-cook-county-families/',
            },
          }),
        }}
      />

      <div className="bg-[#2D3E50] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowRight className="w-4 h-4 mr-1 rotate-180" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-[#4a708b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Estate Planning</span>
            <span className="bg-[#4a708b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">2026 Updates</span>
            <span className="bg-[#4a708b] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Cook County</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Illinois Estate Planning Laws Changing in 2026: What Cook County Families Need to Know
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl">
            The estate tax exemption is doubling. Power of attorney rules are updated. Digital asset access is expanding. Here is what changed, what it means for your family, and what to do next.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>March 26, 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Illinois Estate Law</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-6 space-y-6">
              <TableOfContents items={tocItems} />
              <div className="bg-[#f0f5f8] rounded-xl p-5 border border-[#d0e4ef]">
                <p className="font-semibold text-[#2D3E50] text-sm mb-2">Ready to update your plan?</p>
                <p className="text-gray-600 text-xs mb-3">Schedule a consultation to review how 2026 changes affect your estate.</p>
                <Link href="/book-consultation" className="block text-center bg-[#2D3E50] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-[#4a708b] transition-colors">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </aside>

          <article className="flex-1 min-w-0">
            <section id="why-2026-matters" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">Why 2026 Is a Pivotal Year for Illinois Estates</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For Cook County families, 2026 brings the most significant changes to Illinois estate planning law in more than a decade. The centerpiece — a doubling of the state estate tax exemption from $2 million to $4 million — will eliminate the estate tax burden for thousands of families who had been caught in the middle: too wealthy to ignore the tax, not wealthy enough to absorb it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                But the exemption change is just one piece. Updates to the Illinois Power of Attorney Act, expanded fiduciary rights over digital assets, and new Cook County probate filing procedures all combine to create an environment where an outdated estate plan may actually work against your family — even if it was perfectly drafted five years ago.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800 mb-1">Important Clarification</p>
                    <p className="text-amber-700 text-sm">
                      This article explains the law changes taking effect in 2026 and their practical implications. It does not constitute legal advice. Estate planning is highly individual — consult a qualified Illinois attorney for guidance specific to your situation.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                This guide walks through each change, who it affects, and what action Cook County families should take. We have also included an interactive tax impact calculator so you can see how the new exemption affects your estate specifically.
              </p>
            </section>

            <section id="estate-tax-exemption-change" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">The Estate Tax Exemption Is Doubling</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Illinois has its own separate estate tax, entirely independent of the federal estate tax. Unlike many states that have eliminated their estate taxes, Illinois has maintained its tax since 2003. For years, the Illinois exemption sat at just $2 million — far lower than the federal exemption (currently $13.99 million) and lower than most neighboring states.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Effective January 1, 2026, the Illinois estate tax exemption increases to $4 million per person. This is not an inflation adjustment — it is a deliberate policy change intended to reduce the burden on middle-market estates and closely held family businesses.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Before 2026</p>
                  <p className="text-3xl font-bold text-red-700 mb-1">$2,000,000</p>
                  <p className="text-sm text-red-600">Illinois estate tax exemption per person</p>
                  <p className="text-xs text-gray-500 mt-2">Unchanged since 2012 — did not adjust for inflation</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">2026 and Beyond</p>
                  <p className="text-3xl font-bold text-green-700 mb-1">$4,000,000</p>
                  <p className="text-sm text-green-600">Illinois estate tax exemption per person</p>
                  <p className="text-xs text-gray-500 mt-2">Effective January 1, 2026 — a full $2M increase</p>
                </div>
              </div>

              <div id="who-benefits" className="mb-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Who Benefits Most</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The families who benefit most from this change are those with estates in the $2 million to $4 million range — a group that is far more common in Cook County than many people assume. When you add together a Wilmette or Lincoln Park home, retirement accounts, life insurance death benefits, and investment portfolios, many families who think of themselves as comfortable — not wealthy — find themselves in this range.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Families with estates between $2M and $4M previously faced Illinois estate taxes ranging from approximately $100,000 to $250,000. Under the new law, those same estates owe zero. For a family where the estate is largely illiquid — tied up in a home or a small business — that difference was often devastating, forcing a rushed sale of property to pay the tax bill.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Small business owners benefit particularly. If the enterprise value of a family business pushed the estate above $2 million, heirs frequently had to take distributions, sell equity, or take loans just to satisfy the tax. The doubled exemption provides meaningful relief.
                </p>
              </div>

              <div id="married-couples" className="mb-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">The Married Couples Problem: No Portability</h3>
                <div className="bg-blue-50 border-l-4 border-[#4a708b] p-4 rounded-r-xl mb-4">
                  <p className="font-semibold text-[#2D3E50] mb-1">What is portability?</p>
                  <p className="text-gray-700 text-sm">
                    At the federal level, a surviving spouse can inherit their deceased spouse&apos;s unused estate tax exemption. Illinois does not have this feature. Each Illinois resident gets their own exemption — and if you do not plan correctly, the first spouse&apos;s exemption may be partially or entirely wasted.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For married couples with combined estates over $4 million, the lack of portability in Illinois means that careful planning is still essential. A simple everything-to-my-spouse plan may preserve the estate intact for the survivor but leave the first spouse&apos;s $4 million exemption unused at death — resulting in a larger taxable estate later.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Traditional solutions include a bypass trust (also called a credit shelter trust), a qualified disclaimer strategy, or other planning techniques. The higher exemption changes the math — but it does not eliminate the need to plan. A couple with a $6 million combined estate still needs to think carefully about how the exemptions are used. Learn more about these strategies in our guide on{' '}
                  <Link href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/" className="text-[#4a708b] hover:underline font-medium">
                    revocable living trusts in Illinois
                  </Link>.
                </p>
              </div>

              <div id="estate-tax-calculator" className="mb-4">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Interactive Estate Tax Impact Calculator</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Use the tool below to estimate how the new $4 million exemption affects your estate. Enter your estimated gross estate value (include home equity, retirement accounts, life insurance death benefits, and investments).
                </p>
                <div className="bg-[#f5f9fc] border border-[#d0e4ef] rounded-xl p-6">
                  <p className="text-xs text-gray-500 mb-3 italic">This is an educational estimate only. Actual tax calculations require professional analysis.</p>
                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-[#2D3E50] mb-1">Estimated Gross Estate Value</label>
                      <input
                        type="text"
                        value={estateValue}
                        onChange={(e) => setEstateValue(e.target.value)}
                        placeholder="e.g. 3500000"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={handleCalculate}
                        className="bg-[#2D3E50] text-white px-6 py-2.5 rounded-lg hover:bg-[#4a708b] transition-colors font-medium text-sm whitespace-nowrap"
                      >
                        Calculate Impact
                      </button>
                    </div>
                  </div>
                  {calculatorResult && (
                    <div className={`rounded-xl p-5 border ${calculatorResult.exempt ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                      {calculatorResult.exempt ? (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <p className="font-bold text-green-700">Exempt Under 2026 Law</p>
                          </div>
                          <p className="text-green-700 text-sm">
                            Your estimated estate of{' '}
                            <strong>{formatCurrency(parseFloat(estateValue.replace(/[^0-9.]/g, '')))}</strong>{' '}
                            falls below the new $4 million exemption. Under 2026 law, this estate would owe <strong>$0 in Illinois estate tax</strong>.
                          </p>
                          {parseFloat(estateValue.replace(/[^0-9.]/g, '')) > 2000000 && (
                            <p className="text-green-600 text-xs mt-2 font-medium">Under the prior $2M exemption, this estate would have owed an estimated Illinois estate tax. The 2026 change eliminates that obligation.</p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <p className="font-bold text-red-700">Estate Tax May Apply</p>
                          </div>
                          <p className="text-red-700 text-sm mb-2">
                            Your estimated estate of{' '}
                            <strong>{formatCurrency(parseFloat(estateValue.replace(/[^0-9.]/g, '')))}</strong>{' '}
                            exceeds the $4 million exemption. Estimated Illinois estate tax:{' '}
                            <strong>{formatCurrency(calculatorResult.estimatedTax)}</strong>.
                          </p>
                          <p className="text-red-600 text-xs">This is an approximation using Illinois&apos;s graduated rate structure. Actual liability depends on deductions, business valuations, and other factors. Contact an attorney for a precise analysis.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section id="law-changes-overview" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">All Four Major Law Changes Explained</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Select each change below to see the old rule, the new rule, and what action you should take.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {lawChanges.map((change) => (
                  <button
                    key={change.id}
                    onClick={() => setActiveChange(change.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeChange === change.id ? `${change.color} text-white shadow-md` : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    {change.icon}
                    {change.label}
                  </button>
                ))}
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className={`${activeChangeData.color} text-white px-6 py-4`}>
                  <h3 className="text-lg font-bold">{activeChangeData.label}</h3>
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Old Rule</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.oldRule}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2">New Rule (2026)</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.newRule}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-[#4a708b] uppercase tracking-wide mb-2">Impact on Your Estate</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.impact}</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">Recommended Action</p>
                    <p className="text-gray-700 text-sm">{activeChangeData.action}</p>
                  </div>
                </div>
              </div>

              <div id="poa-updates" className="mt-10">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Power of Attorney Updates in Depth</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Illinois updated its Power of Attorney Act in part to address a persistent problem: agents misusing their authority, particularly around gifts. Under the updated statutory form, an agent&apos;s authority to make gifts — to themselves or others — is more tightly defined and requires explicit authorization.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are concerned about an agent&apos;s authority over your finances, the updated form allows you to specify dollar limits, require co-agent approval, and restrict certain transactions. These are protections the old form did not offer as clearly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For more on why powers of attorney matter and what they should include, see our guide:{' '}
                  <Link href="/blog/do-you-really-need-a-power-of-attorney-in-illinois/" className="text-[#4a708b] hover:underline font-medium">
                    Do You Really Need a Power of Attorney in Illinois?
                  </Link>
                </p>
              </div>

              <div id="digital-assets-update" className="mt-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Digital Asset Access: A Growing Concern</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Illinois adopted the Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA) in 2016, giving fiduciaries limited rights to access digital accounts. The 2026 updates strengthen those rights and clarify the obligations of platform providers to honor fiduciary requests.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In practical terms: if you own cryptocurrency, have significant funds in digital payment apps, maintain valuable online accounts (streaming subscriptions, loyalty points, domain names, online businesses), or store important documents in the cloud, your estate plan needs to address these assets explicitly. Without proper planning, even a willing executor may find themselves locked out.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-[#2D3E50] mb-2 text-sm">Digital Assets Your Estate Plan Should Address</p>
                  <ul className="grid sm:grid-cols-2 gap-1.5 text-sm text-gray-600">
                    {['Cryptocurrency and digital wallets', 'Online investment and brokerage accounts', 'Email and cloud storage accounts', 'Social media accounts', 'Online business platforms', 'Loyalty and reward points', 'Domain names and websites', 'Digital media libraries (music, books, film)'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="cook-county-probate" className="mt-8">
                <h3 className="text-xl font-bold text-[#2D3E50] mb-3">Cook County Probate: What Has Changed Procedurally</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cook County&apos;s Probate Division has updated filing procedures, fee schedules, and form requirements. While the $100,000 small estate affidavit threshold remains in place under Illinois statute, the administrative process — including required attachments, court filing fees, and processing timelines — has changed.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For estates above the threshold, the formal probate process in Cook County now involves updated inventory forms and a revised approach to notice requirements for certain creditors. These are procedural updates, not substantive law changes, but they matter if you are currently administering an estate or preparing documents in advance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For a comprehensive overview of when probate is required and how Cook County handles the process, see:{' '}
                  <Link href="/blog/when-is-probate-required-in-illinois/" className="text-[#4a708b] hover:underline font-medium">
                    When Is Probate Required in Illinois?
                  </Link>{' '}
                  and{' '}
                  <Link href={cookCountyProbateLink} className="text-[#4a708b] hover:underline font-medium">
                    Cook County Probate Paperwork: Every Form, One Bookmark
                  </Link>.
                </p>
              </div>
            </section>

            <section id="action-steps" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">6 Action Steps Cook County Families Should Take Now</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Knowing the law changed is not enough. The benefit only materializes if your estate plan reflects the new rules. Here is a prioritized action list for Cook County families in 2026.
              </p>
              <div className="space-y-4">
                {actionSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-[#2D3E50] text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D3E50] mb-1">{step.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="what-stays-the-same" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-4">What Has NOT Changed</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Amid the changes, it is equally important to understand what remains constant — because misunderstanding the scope of 2026 changes can lead to unnecessary panic or, conversely, unwarranted complacency.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { title: 'Wills still require proper execution', desc: 'Two adult witnesses and a testator signature are still required for a valid Illinois will. No shortcuts.' },
                  { title: 'Revocable trusts avoid probate', desc: 'A properly funded revocable living trust still passes assets to beneficiaries outside of probate — this benefit is unchanged.' },
                  { title: 'Intestate succession rules', desc: 'If you die without a will, Illinois intestate succession law distributes your assets on a fixed statutory formula. No 2026 updates to this.' },
                  { title: 'Beneficiary designations override wills', desc: 'Retirement accounts and life insurance still pass by beneficiary designation, not under your will or trust.' },
                  { title: 'Healthcare directives remain critical', desc: 'Living wills and healthcare powers of attorney govern end-of-life decisions. The 2026 updates do not change these requirements.' },
                  { title: 'No Illinois inheritance tax', desc: 'Illinois has an estate tax (paid by the estate) but no inheritance tax (paid by heirs). This has not changed.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#2D3E50] text-sm mb-0.5">{item.title}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                If your estate plan does not currently include a will, a revocable trust, durable power of attorney, and healthcare directive, those gaps are more urgent than any 2026 update. A comprehensive estate plan covering all four documents remains the gold standard. Learn what a complete plan looks like:{' '}
                <Link href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/" className="text-[#4a708b] hover:underline font-medium">
                  What Is a Simple Estate Plan in Chicago, Illinois?
                </Link>
              </p>
            </section>

            <section className="mb-12 bg-[#2D3E50] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-3">Is Your Estate Plan Ready for 2026?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Whether your estate is newly exempt under the $4 million threshold or you need to update trust provisions that reference the old limit, 2026 is the year to take action. Our Cook County estate planning attorneys can review your existing documents and identify what needs to change.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/book-consultation" className="bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center text-sm">
                  Book a Free Consultation
                </Link>
                <Link href="/services-pricing" className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-center text-sm">
                  View Estate Planning Packages
                </Link>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D3E50] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      className="w-full text-left flex items-start justify-between gap-4 p-5 bg-white hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(i)}
                    >
                      <span className="font-semibold text-[#2D3E50] text-sm leading-relaxed pr-2">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12 bg-[#f0f5f8] rounded-2xl p-6 border border-[#d0e4ef]">
              <h3 className="text-lg font-bold text-[#2D3E50] mb-2">More Illinois Estate Planning Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Explore related topics to build a complete picture of your Illinois estate plan.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { href: '/blog/how-estate-taxes-work-in-illinois/', label: 'How Estate Taxes Work in Illinois' },
                  { href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/', label: 'Revocable Living Trusts: Pros and Cons' },
                  { href: '/blog/when-is-probate-required-in-illinois/', label: 'When Is Probate Required in Illinois?' },
                  { href: '/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/', label: '7 Overlooked Steps in an Illinois Estate Plan' },
                  { href: '/blog/estate-planning-for-blended-families-in-illinois-8-mistakes-that-break-hearts-and-budgets/', label: 'Estate Planning for Blended Families' },
                  { href: '/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/', label: 'What Happens Without an Incapacity Plan' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#2D3E50] text-sm font-medium hover:underline transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <BlogContactForm />

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />
          </article>
        </div>

        <div className="mt-12">
          <RelatedArticles articles={relatedPosts.map(p => ({ title: p.title, url: p.url, date: p.date, excerpt: p.excerpt }))} />
        </div>
      </div>
    </div>
  );
}
