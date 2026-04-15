'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, ArrowRight, Shield, KeyRound, Lock, Scale, FileText, DollarSign, Users, Building, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, CircleHelp as HelpCircle } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [activeComparison, setActiveComparison] = useState<'control' | 'taxes' | 'protection' | 'cost' | 'flexibility'>('control');

  const quizQuestions = [
    {
      question: 'What is your primary goal for creating a trust?',
      options: [
        { label: 'Avoid probate and maintain flexibility', value: 'revocable' },
        { label: 'Protect assets from creditors or lawsuits', value: 'irrevocable' },
        { label: 'Reduce estate taxes', value: 'irrevocable' },
        { label: 'Plan for a loved one with special needs', value: 'irrevocable' },
      ],
    },
    {
      question: 'How important is it that you retain full control over your assets?',
      options: [
        { label: 'Very important — I want to change things anytime', value: 'revocable' },
        { label: 'Somewhat important — I\'m open to giving up some control', value: 'either' },
        { label: 'Not a priority — protection and tax savings matter more', value: 'irrevocable' },
      ],
    },
    {
      question: 'What is the approximate total value of your estate?',
      options: [
        { label: 'Under $1 million', value: 'revocable' },
        { label: '$1 million to $4 million', value: 'either' },
        { label: 'Over $4 million', value: 'irrevocable' },
      ],
    },
    {
      question: 'Are you concerned about potential lawsuits, creditors, or Medicaid planning?',
      options: [
        { label: 'No, these are not concerns for me', value: 'revocable' },
        { label: 'Somewhat — I\'d like some protection', value: 'either' },
        { label: 'Yes, asset protection is a major priority', value: 'irrevocable' },
      ],
    },
    {
      question: 'How do you feel about the ongoing cost and complexity of trust administration?',
      options: [
        { label: 'I want something simple and low-cost', value: 'revocable' },
        { label: 'I\'m willing to invest in a more complex structure if it saves money long-term', value: 'irrevocable' },
      ],
    },
  ];

  const getQuizResult = () => {
    let revocableScore = 0;
    let irrevocableScore = 0;
    Object.values(quizAnswers).forEach((answer) => {
      if (answer === 'revocable') revocableScore++;
      else if (answer === 'irrevocable') irrevocableScore++;
      else { revocableScore += 0.5; irrevocableScore += 0.5; }
    });
    if (irrevocableScore > revocableScore) return 'irrevocable';
    if (revocableScore > irrevocableScore) return 'revocable';
    return 'both';
  };

  const comparisonData: Record<string, { revocable: string; irrevocable: string; detail: string }> = {
    control: {
      revocable: 'You retain full control. You can amend, revoke, or dissolve the trust at any time during your lifetime. You remain the trustee and the beneficiary.',
      irrevocable: 'Once established, you generally cannot change, amend, or revoke the trust without the consent of the beneficiaries or a court order. You give up ownership and control of the assets.',
      detail: 'Control is the defining difference between these two trust types. A revocable trust is essentially an extension of yourself — you manage it, you benefit from it, and you can tear it up tomorrow. An irrevocable trust is a separate legal entity that owns the assets independently of you.',
    },
    taxes: {
      revocable: 'No estate tax benefits. Assets in a revocable trust are included in your taxable estate because you retain control. Illinois\u2019s $4 million exemption and the federal exemption both apply to these assets.',
      irrevocable: 'Significant estate tax benefits. Assets transferred to an irrevocable trust are removed from your taxable estate. For estates approaching or exceeding Illinois\u2019s $4 million threshold, this can save tens or hundreds of thousands of dollars.',
      detail: 'Illinois has one of the lowest estate tax exemptions in the country at $4 million. For families with estates near or above this threshold, an irrevocable trust can be a powerful tool to reduce or eliminate Illinois estate tax liability entirely.',
    },
    protection: {
      revocable: 'No asset protection. Because you retain control over the assets, creditors, lawsuits, and Medicaid can reach the trust assets just as if they were in your personal name.',
      irrevocable: 'Strong asset protection. Once assets are transferred to an irrevocable trust, they are generally shielded from your personal creditors, lawsuits, and — after the applicable look-back period — Medicaid spend-down requirements.',
      detail: 'This is one of the most compelling reasons people choose irrevocable trusts. However, the protection is not immediate — transfers made within two years of a lawsuit may be challenged as fraudulent conveyances, and Medicaid has a five-year look-back period in Illinois.',
    },
    cost: {
      revocable: 'Lower initial cost, typically $2,000 to $5,000 for a comprehensive plan including trust funding. Minimal ongoing costs — you manage the trust yourself as trustee.',
      irrevocable: 'Higher initial cost, typically $3,500 to $10,000+ depending on complexity. May require separate tax returns (Form 1041), ongoing trustee fees if you appoint a professional trustee, and periodic legal review.',
      detail: 'While irrevocable trusts cost more upfront and to maintain, the savings in estate taxes, asset protection, and probate avoidance can dwarf these costs for larger estates. The right choice depends on a cost-benefit analysis specific to your situation.',
    },
    flexibility: {
      revocable: 'Maximum flexibility. You can add or remove assets, change beneficiaries, modify distribution terms, switch trustees, or dissolve the trust entirely at any point during your life.',
      irrevocable: 'Limited flexibility. Changes typically require beneficiary consent or court approval. Some modern irrevocable trusts include provisions for trust protectors or decanting that add modest flexibility, but the core terms are locked in.',
      detail: 'Life changes — marriage, divorce, new children, business changes, health issues — make flexibility valuable. A revocable trust accommodates these easily. An irrevocable trust requires advance planning to account for possible future changes, often through carefully drafted provisions.',
    },
  };

  const comparisonTabs = [
    { key: 'control', label: 'Control', icon: KeyRound },
    { key: 'taxes', label: 'Tax Benefits', icon: DollarSign },
    { key: 'protection', label: 'Asset Protection', icon: Shield },
    { key: 'cost', label: 'Cost', icon: FileText },
    { key: 'flexibility', label: 'Flexibility', icon: Scale },
  ] as const;

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-a-revocable-trust', title: 'What Is a Revocable Trust?', level: 2, numeration: '2' },
    { id: 'what-is-an-irrevocable-trust', title: 'What Is an Irrevocable Trust?', level: 2, numeration: '3' },
    { id: 'side-by-side-comparison', title: 'Side-by-Side Comparison', level: 2, numeration: '4' },
    { id: 'when-revocable-trust-is-right', title: 'When a Revocable Trust Is the Right Choice', level: 2, numeration: '5' },
    { id: 'when-irrevocable-trust-is-right', title: 'When an Irrevocable Trust Is the Right Choice', level: 2, numeration: '6' },
    { id: 'illinois-specific-considerations', title: 'Illinois-Specific Considerations', level: 2, numeration: '7' },
    { id: 'common-misconceptions', title: 'Common Misconceptions', level: 2, numeration: '8' },
    { id: 'trust-selection-quiz', title: 'Interactive: Which Trust Is Right for You?', level: 2, numeration: '9' },
    { id: 'frequently-asked-questions', title: 'Frequently Asked Questions', level: 2, numeration: '10' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '11' },
  ];

  const faqs = [
    {
      question: 'Can I have both a revocable and an irrevocable trust?',
      answer: 'Yes, and many Illinois families do. A common strategy is to establish a revocable living trust as your primary estate planning vehicle for probate avoidance and flexibility, while also creating an irrevocable trust for specific purposes like life insurance (an irrevocable life insurance trust, or ILIT), estate tax reduction, or asset protection. The two trusts work together as part of a comprehensive estate plan. Your attorney can help you determine whether a dual-trust strategy makes sense for your situation.',
    },
    {
      question: 'Does a revocable trust protect my assets from nursing home costs?',
      answer: 'No. A revocable trust provides zero protection from Medicaid spend-down requirements or nursing home costs. Because you retain control over the assets, Medicaid counts them as available resources when determining eligibility. Only an irrevocable trust — established at least five years before applying for Medicaid — can potentially shelter assets from nursing home costs. This is known as the Medicaid five-year look-back period. If you anticipate long-term care needs, advance planning with an irrevocable trust is essential.',
    },
    {
      question: 'What happens to my revocable trust when I die?',
      answer: 'Upon your death, a revocable trust typically becomes irrevocable by its own terms. The successor trustee you named takes over management and distributes assets according to the trust instructions — without probate. The trust may also split into sub-trusts for tax planning or to provide ongoing management for minor children or other beneficiaries. This transition is automatic and does not require court involvement, which is one of the primary advantages of a revocable trust.',
    },
    {
      question: 'Can I be my own trustee with an irrevocable trust?',
      answer: 'Generally, no. Serving as your own trustee of an irrevocable trust can undermine the trust\'s tax benefits and asset protection. If you retain too much control, the IRS may treat the trust assets as part of your taxable estate, and creditors may argue the trust is a sham. Most irrevocable trusts appoint an independent trustee — either a trusted family member, a professional trustee, or a trust company. Some structures allow you to serve as a co-trustee with limited powers, but this requires careful drafting.',
    },
    {
      question: 'How long does it take to set up a trust in Illinois?',
      answer: 'A revocable living trust can typically be drafted and executed within two to four weeks. The trust document itself takes a few days to prepare, but the process includes gathering information about your assets, discussing your goals with your attorney, reviewing the draft, and signing. Funding the trust — transferring assets into the trust\'s name — takes additional time, especially for real estate (which requires recording a new deed) and financial accounts. An irrevocable trust may take longer due to its complexity and the need for more detailed planning.',
    },
    {
      question: 'Is a revocable trust a substitute for a will?',
      answer: 'Not entirely. While a revocable trust handles the distribution of assets held within the trust, you still need a pour-over will to catch any assets that were not transferred into the trust during your lifetime. The pour-over will directs those assets into the trust at death, but they must pass through probate first. You also need a will to name guardians for minor children — trusts cannot do this. A comprehensive estate plan typically includes both a revocable trust and a will, along with powers of attorney and healthcare directives.',
    },
    {
      question: 'Can an irrevocable trust be changed after it is created?',
      answer: 'In limited circumstances, yes. Illinois law allows for trust modification through several mechanisms: all beneficiaries can agree to modify or terminate the trust if it does not defeat a material purpose; a court can modify the trust if circumstances have changed substantially since its creation; and some trusts include provisions for a trust protector who has authority to make certain changes. Additionally, Illinois permits trust decanting — pouring assets from one irrevocable trust into a new one with different terms — under specific conditions. However, these are exceptions, not the rule. You should plan an irrevocable trust with the expectation that its core terms will not change.',
    },
    {
      question: 'Do I need to file a separate tax return for my trust?',
      answer: 'For a revocable trust, no — while you are alive and serving as trustee, the trust is a "grantor trust" and all income is reported on your personal tax return using your Social Security number. No separate return is needed. For an irrevocable trust, yes — it is a separate tax entity with its own EIN and must file Form 1041 annually. Irrevocable trusts face compressed tax brackets, reaching the highest federal rate (37%) at just $14,450 of income in 2026, which makes tax planning for these trusts particularly important.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Revocable vs. Irrevocable Trust: Which Is Right for You in Illinois?',
    description:
      'Comprehensive guide comparing revocable and irrevocable trusts in Illinois. Learn the key differences in control, taxes, asset protection, cost, and flexibility to determine which trust type fits your estate planning goals.',
    author: {
      '@type': 'Person',
      name: 'Mary Liberty',
      jobTitle: 'Estate Planning Attorney',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Illinois Estate Law',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.illinoisestatelaw.com/logo.png',
      },
    },
    datePublished: '2026-04-15',
    dateModified: '2026-04-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Revocable vs. Irrevocable Trust Comparison',
    description: 'Interactive comparison of revocable and irrevocable trusts covering control, tax benefits, asset protection, cost, and flexibility for Illinois residents.',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#article-summary', '#side-by-side-comparison'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">&larr;</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  Trusts
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Revocable vs. Irrevocable Trust: Which Is Right for You in Illinois?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A detailed comparison of the two most common trust types, with Illinois-specific tax thresholds, real-world scenarios, and an interactive quiz to help you decide.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>April 15, 2026</time>
              </div>
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
                <Scale className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg">
                    Choosing between a revocable and irrevocable trust is one of the most important decisions in estate planning. The right choice depends on your priorities: control and flexibility, or tax savings and asset protection.
                  </p>
                  <p className="mb-4">
                    A <strong>revocable trust</strong> lets you maintain full control over your assets during your lifetime. You can change it, revoke it, or dissolve it at any time. It avoids probate but does not provide estate tax benefits or asset protection.
                  </p>
                  <p className="mb-0">
                    An <strong>irrevocable trust</strong> removes assets from your taxable estate and shields them from creditors, but you give up control. Once assets are transferred, the terms are generally locked in. For Illinois families with estates approaching the $4 million estate tax threshold, this trade-off can save significant money.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="what-is-a-revocable-trust" className="text-2xl font-bold mt-12 mb-4">
              What Is a Revocable Trust?
            </h2>

            <p className="mb-6">
              A revocable living trust is a legal arrangement where you transfer ownership of your assets into a trust during your lifetime. You serve as both the trustee (the person managing the trust) and the beneficiary (the person benefiting from the trust). Because you retain complete control, the trust is considered &quot;revocable&quot; &mdash; you can amend, restate, or revoke it at any time for any reason.
            </p>

            <p className="mb-6">
              From a practical standpoint, your daily life does not change after creating a revocable trust. You continue to use your bank accounts, live in your home, and manage your investments exactly as before. The legal ownership changes from your personal name to the trust, but you maintain signing authority and decision-making power over everything. For an in-depth look at how revocable trusts work in Illinois, see our <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] underline hover:text-[#2D3E50]">revocable trusts practice page</Link>.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <KeyRound className="w-10 h-10 text-[#4a708b] mb-3" />
                <h3 className="text-lg font-bold mb-2">Full Control</h3>
                <p className="text-sm text-gray-700">
                  You remain the trustee and can modify or revoke the trust at any time during your lifetime.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <Building className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Probate Avoidance</h3>
                <p className="text-sm text-gray-700">
                  Assets in the trust pass directly to beneficiaries without court involvement when you die.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <Users className="w-10 h-10 text-amber-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Privacy</h3>
                <p className="text-sm text-gray-700">
                  Unlike a will, a trust is not filed with the court. Your estate details remain private.
                </p>
              </div>
            </div>

            <p className="mb-6">
              The primary advantage of a revocable trust is <strong>probate avoidance</strong>. When you die, the assets held in the trust pass directly to your named beneficiaries without going through the Illinois probate court system. This means faster distribution, lower costs, and complete privacy. To understand more about the <Link href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/" className="text-[#4a708b] underline hover:text-[#2D3E50]">advantages and disadvantages of revocable living trusts</Link>, see our detailed analysis.
            </p>

            <p className="mb-6">
              However, a revocable trust does <strong>not</strong> provide estate tax benefits or asset protection. Because you retain control, the IRS and Illinois treat the trust assets as if you still own them personally. Creditors can reach them, lawsuits can target them, and they count toward your taxable estate.
            </p>

            <h2 id="what-is-an-irrevocable-trust" className="text-2xl font-bold mt-12 mb-4">
              What Is an Irrevocable Trust?
            </h2>

            <p className="mb-6">
              An irrevocable trust is a fundamentally different animal. When you create an irrevocable trust and transfer assets into it, you are making a permanent gift. You give up ownership, control, and the ability to reclaim those assets. The trust becomes its own legal entity, with its own tax identification number and its own tax returns.
            </p>

            <p className="mb-6">
              This sounds drastic, and it is. But the trade-off is substantial: assets inside an irrevocable trust are no longer part of your taxable estate, they are generally protected from your personal creditors and lawsuits, and after the applicable look-back period, they may be shielded from Medicaid spend-down requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-lg border border-emerald-200">
                <DollarSign className="w-10 h-10 text-emerald-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Estate Tax Reduction</h3>
                <p className="text-sm text-gray-700">
                  Removes assets from your taxable estate, potentially saving thousands in Illinois estate tax.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <Shield className="w-10 h-10 text-[#4a708b] mb-3" />
                <h3 className="text-lg font-bold mb-2">Creditor Protection</h3>
                <p className="text-sm text-gray-700">
                  Assets are generally shielded from personal lawsuits, creditors, and Medicaid after look-back periods.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <Lock className="w-10 h-10 text-amber-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">Permanent Structure</h3>
                <p className="text-sm text-gray-700">
                  Terms are locked in, ensuring your wishes are carried out regardless of future pressures or disputes.
                </p>
              </div>
            </div>

            <p className="mb-6">
              Common types of irrevocable trusts in Illinois include irrevocable life insurance trusts (ILITs), special needs trusts, charitable remainder trusts, and Medicaid asset protection trusts. Each serves a specific purpose and requires careful drafting to achieve its intended benefits. For more on the benefits trusts can provide, read our guide on <Link href="/blog/what-are-the-key-benefits-of-setting-up-a-trust-in-illinois/" className="text-[#4a708b] underline hover:text-[#2D3E50]">the key benefits of setting up a trust in Illinois</Link>.
            </p>

            <h2 id="side-by-side-comparison" className="text-2xl font-bold mt-12 mb-4">
              Side-by-Side Comparison
            </h2>

            <p className="mb-6">
              The differences between revocable and irrevocable trusts span five key dimensions. Select each category below to see how the two trust types compare.
            </p>

            <div className="my-8 border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="flex flex-wrap border-b border-gray-200">
                {comparisonTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveComparison(tab.key)}
                      className={`flex-1 min-w-[140px] px-4 py-3 text-sm font-semibold transition-colors border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-200 flex items-center justify-center gap-2 ${
                        activeComparison === tab.key
                          ? 'bg-[#4a708b] text-white'
                          : 'text-gray-600 hover:bg-gray-100 bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <div className="p-6 bg-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <KeyRound className="w-5 h-5 text-[#4a708b]" />
                      <h3 className="text-lg font-bold text-[#4a708b]">Revocable Trust</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {comparisonData[activeComparison].revocable}
                    </p>
                  </div>
                  <div className="p-5 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Lock className="w-5 h-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-emerald-700">Irrevocable Trust</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {comparisonData[activeComparison].irrevocable}
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {comparisonData[activeComparison].detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-8 border border-gray-200">
              <h3 className="font-bold text-lg mb-4">Quick-Reference Comparison Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">Revocable Trust</th>
                      <th className="text-left py-3 px-4 font-bold">Irrevocable Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 font-semibold">Can be changed?</td>
                      <td className="py-3 px-4 text-green-700">Yes, anytime</td>
                      <td className="py-3 px-4 text-red-700">Generally no</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Avoids probate?</td>
                      <td className="py-3 px-4 text-green-700">Yes</td>
                      <td className="py-3 px-4 text-green-700">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Estate tax benefits?</td>
                      <td className="py-3 px-4 text-red-700">No</td>
                      <td className="py-3 px-4 text-green-700">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Asset protection?</td>
                      <td className="py-3 px-4 text-red-700">No</td>
                      <td className="py-3 px-4 text-green-700">Yes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Separate tax return?</td>
                      <td className="py-3 px-4 text-green-700">No (grantor trust)</td>
                      <td className="py-3 px-4 text-amber-700">Yes (Form 1041)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Medicaid protection?</td>
                      <td className="py-3 px-4 text-red-700">No</td>
                      <td className="py-3 px-4 text-green-700">After 5-year look-back</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Typical cost</td>
                      <td className="py-3 px-4">$2,000 &ndash; $5,000</td>
                      <td className="py-3 px-4">$3,500 &ndash; $10,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 id="when-revocable-trust-is-right" className="text-2xl font-bold mt-12 mb-4">
              When a Revocable Trust Is the Right Choice
            </h2>

            <p className="mb-6">
              A revocable living trust is the right fit for the majority of Illinois families. It is the workhorse of estate planning &mdash; practical, flexible, and effective for its primary purpose: avoiding probate and keeping your affairs private.
            </p>

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Your estate is under $4 million</h3>
                  <p className="text-gray-700 text-sm">
                    If your total estate (including real estate, retirement accounts, life insurance, and other assets) is below Illinois&apos;s $4 million estate tax exemption, you do not need the tax benefits of an irrevocable trust. A revocable trust gives you probate avoidance without sacrificing control.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You want flexibility for life changes</h3>
                  <p className="text-gray-700 text-sm">
                    Marriage, divorce, new children or grandchildren, changes in financial situation, moves between states &mdash; a revocable trust accommodates all of these easily. You can update beneficiaries, change distribution terms, or restructure the trust entirely. For more on how life events affect estate planning, see our article on <Link href="/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/" className="text-[#4a708b] underline hover:text-[#2D3E50]">what happens to your estate plan after divorce</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You own real estate in Illinois</h3>
                  <p className="text-gray-700 text-sm">
                    Real property that passes through a will must go through probate. A revocable trust holding your home or investment properties avoids this entirely. This is especially valuable in Cook County, where probate can be slow and expensive. Learn more about <Link href="/blog/can-a-house-transfer-automatically-at-death-in-illinois-5-ways-it-can-and-3-ways-it-cant/" className="text-[#4a708b] underline hover:text-[#2D3E50]">how houses can transfer automatically at death</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You want simplicity and low cost</h3>
                  <p className="text-gray-700 text-sm">
                    Revocable trusts are straightforward to manage. You do not need a separate tax return, you do not need an independent trustee, and ongoing maintenance is minimal. Properly funded, a revocable trust makes your passing far simpler for your family than a will-only estate plan.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="when-irrevocable-trust-is-right" className="text-2xl font-bold mt-12 mb-4">
              When an Irrevocable Trust Is the Right Choice
            </h2>

            <p className="mb-6">
              Irrevocable trusts are not for everyone, but when the situation calls for one, no other tool comes close. These are the scenarios where giving up control is worth it.
            </p>

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Your estate exceeds $4 million</h3>
                  <p className="text-gray-700 text-sm">
                    Illinois taxes estates above $4 million at rates from 0.8% to 16%. For a $5 million estate, the Illinois estate tax alone can exceed $300,000. An irrevocable trust that removes assets from your taxable estate can substantially reduce or eliminate this liability. Our <Link href="/illinois-estate-tax-calculator/" className="text-[#4a708b] underline hover:text-[#2D3E50]">Illinois estate tax calculator</Link> can help you estimate your potential exposure. For a deeper understanding of how the tax works, read our guide on <Link href="/blog/how-estate-taxes-work-in-illinois/" className="text-[#4a708b] underline hover:text-[#2D3E50]">how estate taxes work in Illinois</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You need asset protection from creditors or lawsuits</h3>
                  <p className="text-gray-700 text-sm">
                    Business owners, medical professionals, real estate investors, and others in high-liability professions face real risks. An irrevocable trust can shelter assets from future creditors and lawsuit judgments. For broader protection strategies, see our article on <Link href="/blog/ways-to-protect-your-assets-for-the-future/" className="text-[#4a708b] underline hover:text-[#2D3E50]">ways to protect your assets for the future</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You are planning for Medicaid or long-term care</h3>
                  <p className="text-gray-700 text-sm">
                    Medicaid requires you to spend down most of your assets before qualifying for benefits. An irrevocable trust can protect assets, but only if established at least five years before applying. Timing is critical &mdash; the sooner you plan, the better. For related planning considerations, read about <Link href="/blog/what-happens-if-you-become-incapacitated-without-a-plan-in-illinois/" className="text-[#4a708b] underline hover:text-[#2D3E50]">what happens if you become incapacitated without a plan</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You have a loved one with special needs</h3>
                  <p className="text-gray-700 text-sm">
                    A special needs trust (a type of irrevocable trust) allows you to provide for a disabled beneficiary without disqualifying them from Medicaid, SSI, or other government benefits. Assets in the trust supplement &mdash; rather than replace &mdash; government assistance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">You want to remove life insurance from your estate</h3>
                  <p className="text-gray-700 text-sm">
                    Life insurance proceeds paid to your estate or to you as owner are included in your taxable estate. An irrevocable life insurance trust (ILIT) owns the policy instead, keeping the death benefit out of your estate entirely. For a $1 million policy, this can save your family significant estate tax.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="illinois-specific-considerations" className="text-2xl font-bold mt-12 mb-4">
              Illinois-Specific Considerations
            </h2>

            <p className="mb-6">
              Illinois has several unique features that make trust planning particularly important &mdash; and that can influence which type of trust makes more sense for your situation.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Illinois Estate Tax Threshold: $4 Million</p>
                  <p className="text-gray-700 mb-4">
                    Illinois has one of the lowest estate tax exemptions in the country. While the federal exemption exceeds $13 million, Illinois taxes estates above $4 million. This means Illinois residents face estate tax at levels that would be tax-free in most other states. If your estate is anywhere near $4 million &mdash; and remember, this includes your home, retirement accounts, life insurance death benefits, and all other assets &mdash; you should seriously evaluate whether an irrevocable trust could reduce your tax liability.
                  </p>
                  <p className="text-gray-700 mb-0">
                    For 2026 law changes that may affect your planning, see our article on <Link href="/blog/illinois-estate-planning-laws-changing-2026-cook-county-families/" className="text-[#4a708b] underline hover:text-[#2D3E50]">Illinois estate planning laws changing in 2026</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cook County probate is expensive and slow</h3>
                  <p className="text-gray-700 text-sm">
                    The Cook County Probate Division handles a high volume of cases, which means delays, crowded courtrooms, and administrative backlogs. Any trust &mdash; revocable or irrevocable &mdash; that keeps assets out of probate is particularly valuable for Cook County residents. For details on what probate costs, see our breakdown of <Link href="/blog/how-much-does-probate-cost-in-illinois/" className="text-[#4a708b] underline hover:text-[#2D3E50]">probate costs in Illinois</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Illinois recognizes trust decanting</h3>
                  <p className="text-gray-700 text-sm">
                    Illinois law (760 ILCS 3/1303) allows trustees to &quot;decant&quot; an irrevocable trust &mdash; essentially transferring assets from one irrevocable trust into a new one with different terms. This provides more flexibility than the irrevocable label suggests, though it has limitations and requires legal guidance to execute properly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Trust funding requires recording deeds</h3>
                  <p className="text-gray-700 text-sm">
                    Transferring real estate into a trust requires recording a new deed with the county recorder. In Cook County, this involves transfer tax considerations and proper legal descriptions. If not done correctly, the property remains in your personal name and will go through probate regardless of what your trust says. For a complete guide, see our <Link href="/blog/trust-funding-check-list/" className="text-[#4a708b] underline hover:text-[#2D3E50]">trust funding checklist</Link>.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="bg-[#4a708b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Powers of attorney are still essential</h3>
                  <p className="text-gray-700 text-sm">
                    Neither type of trust replaces the need for <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] underline hover:text-[#2D3E50]">powers of attorney</Link> and <Link href="/chicago-healthcare-directives-lawyer/" className="text-[#4a708b] underline hover:text-[#2D3E50]">healthcare directives</Link>. A trust manages your assets, but you still need someone authorized to make financial and medical decisions on your behalf if you become incapacitated. These documents should be part of every estate plan. Learn more about <Link href="/blog/do-you-really-need-a-power-of-attorney-in-illinois/" className="text-[#4a708b] underline hover:text-[#2D3E50]">why you need a power of attorney in Illinois</Link>.
                  </p>
                </div>
              </div>
            </div>

            <h2 id="common-misconceptions" className="text-2xl font-bold mt-12 mb-4">
              Common Misconceptions
            </h2>

            <p className="mb-6">
              Misinformation about trusts is widespread. These are the most common mistakes we see Illinois families make when choosing between revocable and irrevocable trusts.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-200">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-red-700">
                    <AlertCircle className="w-5 h-5" />
                    Myths
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>&quot;A revocable trust protects my assets from creditors&quot; &mdash; It does not. You retain control, so creditors can reach the assets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>&quot;An irrevocable trust means I lose everything&quot; &mdash; You lose ownership and direct control, but you can still be a beneficiary of the trust.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>&quot;Trusts are only for wealthy people&quot; &mdash; Any Illinois homeowner benefits from probate avoidance through a revocable trust.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>&quot;An irrevocable trust can never be changed&quot; &mdash; Illinois allows modifications through decanting, beneficiary consent, or court order.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 p-4 border-b border-green-200">
                  <h3 className="font-bold text-lg flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    Realities
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Asset protection requires an irrevocable trust that permanently removes assets from your control.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Many irrevocable trusts allow you to receive income or distributions as a beneficiary under defined terms.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>A revocable trust costing $3,000 can save your family $10,000+ in probate costs and months of delays.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Modern irrevocable trusts can include trust protector provisions and decanting options for limited flexibility.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="trust-selection-quiz" className="text-2xl font-bold mt-12 mb-4">
              Which Trust Is Right for You?
            </h2>

            <p className="mb-6">
              Answer these five questions to get a preliminary sense of which trust type might be the better fit for your situation. This is a starting point &mdash; not a substitute for personalized legal advice.
            </p>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-[#4a708b]/30 rounded-lg p-6 my-8">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 text-[#4a708b]" />
                <div>
                  <h3 className="text-xl font-bold">Trust Selection Quiz</h3>
                  <p className="text-sm text-gray-600">
                    {showResult
                      ? 'Your results are below.'
                      : `Question ${quizStep + 1} of ${quizQuestions.length}`}
                  </p>
                </div>
              </div>

              {!showResult ? (
                <div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                    <div
                      className="h-full bg-[#4a708b] rounded-full transition-all duration-300"
                      style={{ width: `${((quizStep) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  <p className="font-semibold text-lg mb-4">
                    {quizQuestions[quizStep].question}
                  </p>

                  <div className="space-y-3">
                    {quizQuestions[quizStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const newAnswers = { ...quizAnswers, [quizStep]: option.value };
                          setQuizAnswers(newAnswers);
                          if (quizStep < quizQuestions.length - 1) {
                            setQuizStep(quizStep + 1);
                          } else {
                            setQuizAnswers(newAnswers);
                            setShowResult(true);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          quizAnswers[quizStep] === option.value
                            ? 'border-[#4a708b] bg-blue-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <span className="font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>

                  {quizStep > 0 && (
                    <button
                      onClick={() => setQuizStep(quizStep - 1)}
                      className="mt-4 px-4 py-2 text-sm font-semibold text-[#4a708b] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      Back to Previous Question
                    </button>
                  )}
                </div>
              ) : (
                <div>
                  <div className="w-full h-2 bg-[#4a708b] rounded-full mb-6" />

                  {getQuizResult() === 'revocable' && (
                    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-3">
                        <KeyRound className="w-6 h-6 text-[#4a708b]" />
                        <h4 className="text-xl font-bold text-[#4a708b]">A Revocable Trust May Be Your Best Fit</h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Based on your answers, your priorities align with a revocable living trust. You value flexibility, control, and simplicity. A revocable trust will help you avoid probate, maintain privacy, and keep your estate plan easy to manage and update as life changes.
                      </p>
                      <p className="text-gray-700">
                        Consider our <Link href="/compare-packages/" className="text-[#4a708b] underline hover:text-[#2D3E50] font-semibold">trust packages</Link> to see which plan includes a revocable trust tailored to your needs.
                      </p>
                    </div>
                  )}

                  {getQuizResult() === 'irrevocable' && (
                    <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Lock className="w-6 h-6 text-emerald-600" />
                        <h4 className="text-xl font-bold text-emerald-700">An Irrevocable Trust May Be Worth Considering</h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Your answers suggest that estate tax reduction, asset protection, or Medicaid planning are priorities. An irrevocable trust can address these goals, though it requires giving up control of the transferred assets. Many families use both a revocable trust for everyday management and an irrevocable trust for specific protection goals.
                      </p>
                      <p className="text-gray-700">
                        We recommend <Link href="/book-consultation/" className="text-[#4a708b] underline hover:text-[#2D3E50] font-semibold">scheduling a consultation</Link> to discuss whether an irrevocable trust makes sense for your specific situation.
                      </p>
                    </div>
                  )}

                  {getQuizResult() === 'both' && (
                    <div className="p-6 bg-amber-50 rounded-lg border border-amber-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Scale className="w-6 h-6 text-amber-600" />
                        <h4 className="text-xl font-bold text-amber-700">You May Benefit from Both Trust Types</h4>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Your answers indicate mixed priorities &mdash; you value both flexibility and protection. Many Illinois families in this situation use a dual-trust strategy: a revocable trust for everyday estate management and probate avoidance, plus an irrevocable trust for specific goals like estate tax reduction or asset protection.
                      </p>
                      <p className="text-gray-700">
                        A personalized conversation with an estate planning attorney will help clarify the right approach. <Link href="/book-consultation/" className="text-[#4a708b] underline hover:text-[#2D3E50] font-semibold">Schedule a consultation</Link> to discuss your options.
                      </p>
                    </div>
                  )}

                  <button
                    onClick={() => { setQuizStep(0); setQuizAnswers({}); setShowResult(false); }}
                    className="mt-4 px-4 py-2 text-sm font-semibold text-[#4a708b] hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
              )}
            </div>

            <h2 id="frequently-asked-questions" className="text-2xl font-bold mt-12 mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
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

            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4">
              Next Steps
            </h2>

            <p className="mb-6">
              Choosing between a revocable and irrevocable trust is not a one-size-fits-all decision. The right answer depends on the size of your estate, your goals for asset protection, your tax situation, your family circumstances, and how much control you want to retain. For many Illinois families, the answer involves both types of trusts working together.
            </p>

            <p className="mb-6">
              The most important step is to start the conversation. An experienced estate planning attorney can evaluate your specific situation and recommend a trust strategy that fits. Whether you need a straightforward revocable trust, a specialized irrevocable trust, or a combination of both, the right plan protects your family and gives you peace of mind.
            </p>

            <p className="mb-6">
              For a broader view of all the documents that go into a complete estate plan, see our guide on <Link href="/blog/understanding-the-basics-of-estate-planning/" className="text-[#4a708b] underline hover:text-[#2D3E50]">understanding the basics of estate planning</Link>, or explore our <Link href="/services-pricing/" className="text-[#4a708b] underline hover:text-[#2D3E50]">services and pricing page</Link> to see our flat-fee trust packages.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Ready to Decide? Let Us Help.
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                At Illinois Estate Law, we help families choose and implement the right trust strategy for their goals. Our flat-fee trust packages include drafting, funding assistance, and all supporting documents &mdash; no hourly billing surprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/compare-packages"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
                >
                  Compare Trust Packages
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Call <a href="tel:3123730731" className="text-white underline">(312) 373-0731</a> to speak directly with our team.
              </p>
            </div>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map((post) => ({
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/')}&text=${encodeURIComponent('Revocable vs. Irrevocable Trust: Which Is Right for You in Illinois?')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/revocable-vs-irrevocable-trust-which-is-right-for-you-in-illinois/')}&title=${encodeURIComponent('Revocable vs. Irrevocable Trust: Which Is Right for You in Illinois?')}`}
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
