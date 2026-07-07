'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle2,
  CircleAlert as AlertCircle,
  FileText,
  Users,
  Shield,
  RefreshCw,
  CircleX as XCircle,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'beneficiary-designations-override-your-will-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'how-beneficiary-designations-work', title: 'How Beneficiary Designations Work in Illinois', level: 2, numeration: '2' },
    { id: 'accounts-that-use-designations', title: 'Accounts & Assets Governed by Beneficiary Designations', level: 2, numeration: '3' },
    { id: 'why-your-will-cannot-override', title: 'Why Your Will Cannot Override a Beneficiary Designation', level: 2, numeration: '4' },
    { id: 'common-mistakes', title: 'Common Mistakes That Lead to Wrong Outcomes', level: 2, numeration: '5' },
    { id: 'coordinating-will-and-designations', title: 'How to Coordinate Your Will with Your Designations', level: 2, numeration: '6' },
    { id: 'illinois-specific-rules', title: 'Illinois-Specific Rules You Need to Know', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Does a beneficiary designation override a will in Illinois?',
      answer:
        'Yes — unambiguously. Under Illinois law and the federal rules that govern retirement accounts and life insurance, a named beneficiary on an account or policy receives those assets directly, outside of probate, regardless of what your will says. If your will leaves everything to your children but your IRA names your ex-spouse as beneficiary, your ex-spouse gets the IRA. Courts in Illinois have consistently upheld beneficiary designations over contrary will provisions.',
    },
    {
      question: 'What happens if I name my estate as beneficiary of my life insurance or IRA?',
      answer:
        'Naming your estate as beneficiary is generally a bad idea. It means the asset loses its non-probate status and must pass through probate — the lengthy, costly court process you were probably trying to avoid. For IRAs and 401(k)s, it also triggers accelerated required minimum distributions, which can cause your heirs to pay more income tax. Instead, name individuals or a properly structured trust as beneficiaries.',
    },
    {
      question: 'What if my beneficiary died before me and I never updated the designation?',
      answer:
        'If your named beneficiary predeceased you and there is no contingent beneficiary listed, the asset typically passes to your estate and goes through probate — or it may be distributed according to the account custodian\'s default rules, which may not match your wishes. This is one of the most common and preventable estate planning errors. Reviewing and updating your beneficiary designations every few years, and after every major life event, prevents this outcome.',
    },
    {
      question: 'Can I use my will to direct who inherits my 401(k) in Illinois?',
      answer:
        'No. A 401(k) and other employer-sponsored retirement plans are governed by federal law (ERISA), not state probate law. Your will has no authority over these accounts. The beneficiary designation form you completed with your employer or plan administrator controls distribution entirely. The one nuance: for married participants, federal law requires your current spouse to be the primary beneficiary of a 401(k) unless your spouse signs a notarized waiver.',
    },
    {
      question: 'Does divorce automatically remove an ex-spouse as beneficiary in Illinois?',
      answer:
        'For assets that pass through your will or trust, yes — under 755 ILCS 5/4-7, Illinois law automatically revokes bequests to a former spouse after a final divorce decree. However, this does NOT apply to life insurance, IRAs, 401(k)s, annuities, or any other account with a beneficiary designation form. Federal law (for ERISA-governed plans) and Illinois law (for IRAs) do not automatically remove an ex-spouse. You must affirmatively update those forms after your divorce.',
    },
    {
      question: 'Should I name a minor child as a beneficiary directly?',
      answer:
        'No — naming a minor child directly as a beneficiary is problematic. Minors cannot legally receive assets outright. If a minor is the named beneficiary, a court will need to appoint a guardian of the estate to manage the funds until the child turns 18, which is a costly and time-consuming process. Better options include naming a custodian under the Illinois Uniform Transfers to Minors Act, creating a trust for the child\'s benefit, or using a "per stirpes" designation so the asset flows down to children only after the primary beneficiary\'s death.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Beneficiary Designations Override Your Will in Illinois: What You Need to Know',
    description:
      'Learn why beneficiary designations override your will in Illinois, which assets are affected, the most common mistakes, and how to coordinate your estate plan to avoid unintended outcomes.',
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
    datePublished: '2026-05-20',
    dateModified: '2026-05-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/beneficiary-designations-override-your-will-illinois/',
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#33414E] via-[#4A708B] to-[#33414E] py-16 sm:py-20">
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
                  Estate Planning
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Beneficiary Designations Override Your Will in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                One of the most costly estate planning mistakes in Illinois: assuming your will controls
                everything. For life insurance, IRAs, 401(k)s, and more, the beneficiary designation form
                wins — every time.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>May 20, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            {/* 1. Article Summary */}
            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4 font-['Plus_Jakarta_Sans']">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Your will does not control everything in your estate — and many Illinois residents do not
                    realize this until it is too late.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Life insurance proceeds, IRAs, 401(k)s, annuities, payable-on-death bank accounts, and
                    transfer-on-death brokerage accounts all pass directly to the named beneficiary — completely
                    outside your will and outside of probate. If those beneficiary designation forms are
                    outdated, inconsistent with your will, or simply wrong, money goes to the wrong person.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains why beneficiary designations control, which assets are affected, the
                    most common mistakes Illinois residents make, and how to build a coordinated estate plan
                    that actually works the way you intend.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How Beneficiary Designations Work */}
            <h2
              id="how-beneficiary-designations-work"
              className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']"
            >
              How Beneficiary Designations Work in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A beneficiary designation is a contractual instruction you give directly to a financial
              institution — a bank, insurance company, brokerage, or retirement plan administrator — telling
              them who receives the asset when you die. It is not part of your will. It is not a probate
              document. It is a private contract between you and that institution.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When you die, the financial institution pays the named beneficiary directly — without involving
              the probate court, without waiting for letters of office, and without consulting your will.
              Your executor has no authority over these assets. Your estate plan may be beautifully drafted,
              but if your beneficiary designation forms say something different, the forms win.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                <XCircle className="w-10 h-10 text-red-500 mb-3" />
                <h3 className="text-lg font-bold mb-2 font-['Plus_Jakarta_Sans']">What Your Will Controls</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">&#x2713;</span>
                    Solely owned bank accounts with no POD designation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">&#x2713;</span>
                    Real estate titled only in your name (absent a TODI)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">&#x2713;</span>
                    Personal property (jewelry, furniture, vehicles)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">&#x2713;</span>
                    Business interests without a succession agreement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">&#x2713;</span>
                    Receivables owed to you at death
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
                <AlertTriangle className="w-10 h-10 text-amber-500 mb-3" />
                <h3 className="text-lg font-bold mb-2 font-['Plus_Jakarta_Sans']">What Bypasses Your Will Entirely</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    Life insurance policies with a named beneficiary
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    Traditional IRAs, Roth IRAs, SEP-IRAs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    401(k), 403(b), 457, and other employer retirement plans
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    Annuities with a named beneficiary
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    Payable-on-death (POD) bank accounts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    Transfer-on-death (TOD) brokerage accounts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">&#x26A0;</span>
                    Property held in joint tenancy with right of survivorship
                  </li>
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For many Illinois families, these non-probate assets represent the <strong>majority of their
              wealth</strong> — the 401(k) built over a career, the life insurance policy, the brokerage
              account. Understanding that your will has no authority over these accounts is the first step
              toward building an estate plan that actually accomplishes your goals.
            </p>

            {/* 3. Accounts & Assets */}
            <h2
              id="accounts-that-use-designations"
              className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']"
            >
              Accounts &amp; Assets Governed by Beneficiary Designations
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Each asset type has its own rules about how beneficiary designations work and what happens when
              one is missing or outdated.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Life Insurance',
                  icon: <Shield className="w-5 h-5 text-[#4a708b]" />,
                  body: `Life insurance is the most straightforward. When you die, the insurer pays the death benefit directly to the named primary beneficiary. If the primary beneficiary predeceased you, the contingent beneficiary receives the funds. If both are deceased and no estate designation was made, proceeds may be paid to your estate and enter probate — an outcome that can delay payment to your family by months. Illinois has no specific statute governing life insurance beneficiary designations; they are governed by the policy contract and general contract law.`,
                },
                {
                  title: 'IRAs (Traditional, Roth, SEP)',
                  icon: <FileText className="w-5 h-5 text-[#4a708b]" />,
                  body: `Individual retirement accounts are governed by the account agreement with your IRA custodian (bank, brokerage, or mutual fund company). Illinois's Disposition of Property Act (755 ILCS 27) recognizes non-probate transfers, including IRA beneficiary designations, as legally controlling. One critical rule: if you are married, your spouse has no automatic right to inherit your IRA under federal law (unlike a 401(k)) — but your will cannot override the beneficiary form regardless.`,
                },
                {
                  title: '401(k) and Other ERISA Plans',
                  icon: <Users className="w-5 h-5 text-[#4a708b]" />,
                  body: `Employer-sponsored retirement plans are governed by the federal Employee Retirement Income Security Act (ERISA), which preempts Illinois probate law entirely. Your will has zero authority over your 401(k). Federal law also requires that your current spouse be the primary beneficiary of a 401(k) unless your spouse signs a notarized written waiver. This means even if you intended to leave your 401(k) to your children from a prior marriage, your current spouse must consent in writing or they inherit automatically.`,
                },
                {
                  title: 'Payable-on-Death (POD) Bank Accounts',
                  icon: <FileText className="w-5 h-5 text-[#4a708b]" />,
                  body: `Illinois law (755 ILCS 5/18-1.1) explicitly authorizes payable-on-death designations on bank accounts. At death, the account passes automatically to the named POD beneficiary — no probate, no court involvement, no waiting period. The beneficiary simply presents a death certificate and identification to the bank. If no POD beneficiary is named and the account is solely owned, it must go through probate.`,
                },
                {
                  title: 'Transfer-on-Death Brokerage Accounts',
                  icon: <RefreshCw className="w-5 h-5 text-[#4a708b]" />,
                  body: `Illinois adopted the Uniform TOD Security Registration Act, which allows brokerage and investment accounts to be registered in TOD form. When you die, your securities transfer directly to the named beneficiary by operation of law — bypassing probate entirely. Like POD designations, a TOD registration overrides any contrary provision in your will.`,
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    {item.icon}
                    <h3 className="font-bold text-lg font-['Plus_Jakarta_Sans'] text-[#33414E]">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            {/* 4. Why your will cannot override */}
            <h2
              id="why-your-will-cannot-override"
              className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']"
            >
              Why Your Will Cannot Override a Beneficiary Designation
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This surprises many people, but the legal logic is straightforward. A will is a testamentary
              document — it controls the distribution of your <em>probate estate</em>, meaning assets that are
              owned solely in your name with no other legal mechanism directing their transfer. Non-probate
              assets, by definition, are not part of your probate estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When you signed up for your IRA or named a beneficiary on your life insurance, you entered a
              private contract with that institution. That contract specifies what happens at your death.
              Illinois courts treat that contract as controlling — and they have consistently refused to allow
              a will to override a valid beneficiary designation, even when it is clear the decedent
              intended a different result.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2 font-['Plus_Jakarta_Sans']">Real-world example:</p>
                  <p className="text-gray-700 font-['Plus_Jakarta_Sans']">
                    Robert created a new will after remarrying, leaving everything to his second wife, Lisa.
                    His will stated: &ldquo;All assets, including retirement accounts, shall pass to Lisa.&rdquo;
                    However, Robert never updated the beneficiary designation on his $400,000 IRA, which still
                    named his adult son from his first marriage. When Robert died, the IRA went to his son —
                    not Lisa — regardless of the will language. Robert&apos;s will simply had no power over
                    the IRA. Lisa received only the assets that actually passed through probate.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This principle is so well established in Illinois that courts typically will not even consider
              extrinsic evidence of intent (such as statements the decedent made to family members) to
              redirect an asset away from the named beneficiary. The designation form itself is the
              controlling document.
            </p>

            {/* 5. Common Mistakes */}
            <h2
              id="common-mistakes"
              className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']"
            >
              Common Mistakes That Lead to Wrong Outcomes
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Outdated or incomplete beneficiary designations are one of the most common causes of unintended
              estate distributions in Illinois. Here are the scenarios IEL attorneys see most frequently.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  color: 'red',
                  title: 'Failing to update after divorce',
                  detail:
                    "Illinois law automatically revokes will provisions benefiting a former spouse after divorce (755 ILCS 5/4-7), but this protection does NOT extend to beneficiary designation forms. If you do not update your life insurance, IRA, or 401(k) after a divorce, your ex-spouse remains the legal beneficiary. Federal law makes this especially dangerous for 401(k) accounts, where the ex-spouse's designation can only be overridden by a new beneficiary form — not a divorce decree, QDRO, or any court order.",
                },
                {
                  color: 'red',
                  title: 'Naming a minor child directly',
                  detail:
                    'Children under 18 cannot receive assets directly in Illinois. If a minor is the named beneficiary of a life insurance policy or retirement account, the court must appoint a guardian of the estate — a probate proceeding that takes months and costs money. The funds are then managed under court supervision until the child turns 18, at which point the entire sum is distributed at once with no restrictions. A trust or UTMA custodianship avoids all of this.',
                },
                {
                  color: 'red',
                  title: 'Leaving the beneficiary line blank',
                  detail:
                    "When no beneficiary is designated on a life insurance policy or IRA, the proceeds typically pass to your estate — meaning they must go through probate. For an IRA, this also triggers accelerated required minimum distributions, which can significantly increase the income tax your heirs pay on the inherited funds. Always name both a primary and a contingent beneficiary.",
                },
                {
                  color: 'red',
                  title: 'Naming your estate as beneficiary',
                  detail:
                    'Some people intentionally name their estate as the beneficiary of a retirement account, thinking it allows the will to control the asset. This almost always backfires. It subjects the asset to probate, delays distribution, and for retirement accounts, eliminates the stretch distribution options available to individual beneficiaries — often resulting in a much larger income tax hit for your heirs.',
                },
                {
                  color: 'amber',
                  title: 'Not naming a contingent beneficiary',
                  detail:
                    'Your primary beneficiary may predecease you, disclaim the inheritance, or be legally disqualified. Without a contingent (backup) beneficiary, the asset falls back to your estate. Naming a contingent beneficiary — whether a child, sibling, charity, or trust — costs nothing and protects against this common gap.',
                },
                {
                  color: 'amber',
                  title: 'Will and designations conflict without a plan',
                  detail:
                    "Some conflict between your will and designations is intentional — certain assets go to certain people for tax or logistical reasons, while the rest of the estate follows the will. But unintentional conflicts (\"my will leaves everything equally to my three kids, but my IRA names only my oldest\") can devastate family harmony and leave one heir significantly over- or under-compensated relative to your actual wishes.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l-4 p-5 rounded-r-lg ${
                    item.color === 'red'
                      ? 'bg-red-50 border-red-400'
                      : 'bg-amber-50 border-amber-400'
                  }`}
                >
                  <h3 className="font-bold mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* 6. How to Coordinate */}
            <h2
              id="coordinating-will-and-designations"
              className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']"
            >
              How to Coordinate Your Will with Your Designations
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Effective estate planning treats beneficiary designations and your will as two parts of one
              coordinated system. Each should reinforce the other, not work against it. Here is how to bring
              them into alignment.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              {[
                {
                  num: '1',
                  title: 'Take an inventory of all non-probate assets',
                  body: 'List every account or policy that has — or could have — a beneficiary designation: life insurance, IRAs, 401(k)s, annuities, bank accounts, brokerage accounts. Contact each institution to get a current copy of the beneficiary designation on file. You may be surprised by what you find.',
                },
                {
                  num: '2',
                  title: 'Map out your intended distribution',
                  body: "Decide, in total, who should receive what percentage of your estate — both probate and non-probate assets combined. Consider tax implications: a traditional IRA left to a high-earning adult child may generate a much larger income tax bill than the same IRA left to a lower-earning child or a charity. Your attorney can help you allocate assets tax-efficiently.",
                },
                {
                  num: '3',
                  title: 'Update all designation forms consistently',
                  body: "Complete new beneficiary designation forms with each institution. Name both a primary and a contingent beneficiary. For married couples, consider whether spousal consent is required (it is for most 401(k) plans). Dated copies of completed forms belong in your estate planning file.",
                },
                {
                  num: '4',
                  title: 'Consider using a trust as beneficiary',
                  body: 'Naming a revocable living trust as the beneficiary of your life insurance or (carefully structured) retirement accounts can allow your will and trust to govern the ultimate distribution of those assets while still avoiding probate. This is especially useful when you have minor children, a blended family, or a beneficiary with special needs.',
                },
                {
                  num: '5',
                  title: 'Use per stirpes designations thoughtfully',
                  body: 'A "per stirpes" designation means that if your primary beneficiary dies before you, their share passes to their descendants (i.e., your grandchildren) rather than lapsing or going to the surviving primary beneficiaries. Most estate planning attorneys recommend per stirpes designations as the default for family members.',
                },
                {
                  num: '6',
                  title: 'Review after every major life event',
                  body: "Marriage, divorce, the birth of a child, the death of a beneficiary, and significant changes in your financial situation are all triggers for a comprehensive review of all your beneficiary designations — not just your will. Set a calendar reminder to review every three to five years even if no major events occur.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200"
                >
                  <h3 className="font-bold mb-3 flex items-center gap-2 font-['Plus_Jakarta_Sans']">
                    <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.num}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* 7. Illinois-Specific Rules */}
            <h2
              id="illinois-specific-rules"
              className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']"
            >
              Illinois-Specific Rules You Need to Know
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Several Illinois statutes specifically address non-probate transfers and interact with how
              beneficiary designations work in practice.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Key Illinois Statutes Affecting Beneficiary Designations
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    statute: '755 ILCS 5/4-7',
                    title: 'Divorce revokes will provisions — but NOT designations',
                    desc: "A final divorce decree automatically revokes bequests and fiduciary appointments in favor of the former spouse under your will. This is a strong protection, but it does not extend to beneficiary designation forms on insurance or retirement accounts. Update those forms directly after your divorce.",
                  },
                  {
                    statute: '755 ILCS 27/1 et seq.',
                    title: 'Illinois Disposition of Property Act',
                    desc: "Illinois explicitly recognizes non-probate transfers — including TOD and POD designations — as valid legal mechanisms for transferring property at death outside of the probate process. These transfers are not subject to claims of your heirs under your will.",
                  },
                  {
                    statute: '215 ILCS 5/238',
                    title: 'Life insurance beneficiary rules',
                    desc: "Illinois Insurance Code allows the owner of a life insurance policy to name any person or entity as beneficiary and to change the beneficiary at any time unless the designation is irrevocable. An irrevocable beneficiary designation requires the beneficiary's consent before it can be changed.",
                  },
                  {
                    statute: 'ERISA (federal)',
                    title: '401(k) spousal consent requirement',
                    desc: "For ERISA-governed retirement plans (401(k), 403(b), pension plans), federal law requires your current legal spouse to be the primary beneficiary unless your spouse signs a notarized written waiver. Illinois law cannot override this federal requirement. A divorce agreement or QDRO cannot retroactively strip a current spouse of this right.",
                  },
                  {
                    statute: '755 ILCS 5/18-1.1',
                    title: 'Payable-on-death bank accounts',
                    desc: "Illinois law expressly authorizes POD designations on bank accounts. The POD beneficiary has no rights in the account during the owner's lifetime — the owner can spend the funds freely, change the POD beneficiary, or close the account. At death, however, the POD beneficiary's right vests immediately and is not subject to the deceased owner's estate or will.",
                  },
                ].map((item, i) => (
                  <div key={i} className="px-6 py-5">
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <span className="bg-[#4a708b]/10 text-[#4a708b] text-xs font-bold px-2.5 py-1 rounded font-mono">
                        {item.statute}
                      </span>
                      <h4 className="font-bold text-[#33414E] font-['Plus_Jakarta_Sans']">{item.title}</h4>
                    </div>
                    <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              What About Trusts as Beneficiaries?
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Naming a{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium">
                revocable living trust
              </Link>{' '}
              as the beneficiary of a life insurance policy is a common and effective planning technique.
              The trust receives the proceeds outside of probate and then distributes them according to the
              trust&apos;s terms — giving you the flexibility of your will (or better) combined with the
              efficiency of a non-probate transfer.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Naming a trust as the beneficiary of an IRA or 401(k) is more complex and requires careful
              drafting to preserve favorable tax treatment. An improperly structured trust as IRA beneficiary
              can eliminate the &ldquo;stretch&rdquo; distribution rules and cause the entire IRA to be
              distributed — and taxed — over just five years. Illinois residents considering this strategy
              should work with an estate planning attorney who understands both the tax rules and Illinois
              trust law.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2 font-['Plus_Jakarta_Sans']">Planning Tip: The Coordination Checklist</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">
                    When IEL reviews a client&apos;s existing estate plan, we always ask for copies of all
                    beneficiary designation forms on file — not just the will and trust. In nearly half of
                    all reviews, we find at least one designation that conflicts with the client&apos;s stated
                    intentions. Bringing designations into alignment with the overall plan is often the
                    highest-value step we can take for a family&apos;s financial security.
                  </p>
                </div>
              </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure If Your Beneficiary Designations Are Aligned?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law offers a comprehensive estate plan review — including a designation
                audit — to make sure every asset in your estate goes exactly where you intend. Flat-fee
                pricing, no billing surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#33414E] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services-pricing/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  View Services &amp; Pricing
                </Link>
              </div>
            </div>

            {/* 8. FAQ */}
            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900 font-['Plus_Jakarta_Sans']">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-['Plus_Jakarta_Sans']">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 9. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Beneficiary designations are the invisible architecture of your estate plan — powerful,
              legally binding, and often overlooked until it is too late to fix them. If you have not
              reviewed your designations recently, now is the time.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For context on how these rules fit into the broader picture, see our guides on{' '}
              <Link
                href="/blog/how-transfer-on-death-instruments-work-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium"
              >
                how Transfer-on-Death Instruments work in Illinois
              </Link>
              ,{' '}
              <Link
                href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium"
              >
                the advantages and disadvantages of revocable living trusts
              </Link>
              , and{' '}
              <Link
                href="/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/"
                className="text-[#4a708b] hover:underline font-medium"
              >
                what happens to your estate plan after divorce
              </Link>
              .
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Get an Estate Plan That Works as One Coordinated System
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                At Illinois Estate Law, we review both your testamentary documents <em>and</em> your
                beneficiary designation forms — because a great will with the wrong designations still
                fails your family. We serve clients across Chicago and throughout Illinois on a flat-fee
                basis, so you always know exactly what you will pay.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/chicago-wills-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30"
                >
                  Our Wills &amp; Estate Planning Services
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4 font-['Plus_Jakarta_Sans']">
                Call{' '}
                <a href="tel:3123730731" className="text-white underline">
                  (312) 373-0731
                </a>{' '}
                to speak directly with our team.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/how-transfer-on-death-instruments-work-in-illinois/',
                    label: 'How Transfer-on-Death Instruments Work in Illinois',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Revocable Living Trusts: Pros and Cons for Illinois Residents',
                  },
                  {
                    href: '/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/',
                    label: 'What Happens to Your Estate Plan After Divorce in Illinois',
                  },
                  {
                    href: '/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/',
                    label: '7 Overlooked Steps That Make or Break an Illinois Estate Plan',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/',
                    label: 'The Financial Impact of Dying Without a Will in Illinois',
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#33414E] text-sm font-medium hover:underline transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty - Chicago Estate Planning Attorney"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#2d3e50] font-['Plus_Jakarta_Sans']">
                    Mary Liberty — Chicago Estate Planning Attorney
                  </h3>
                  <p className="mb-4 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making
                    legal planning accessible, affordable, and stress-free. Through her modern virtual law
                    practice, she helps families and individuals across Illinois create clear, effective plans
                    that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate
                    service. Known for her precision, empathy, and plain-language guidance, she operates on a
                    100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not
                constitute legal advice. No attorney-client relationship is created by reading this content.
                Illinois estate planning and beneficiary designation rules are complex and fact-specific.
                Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Review Your Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get a coordinated plan that covers
                your will, trust, and every beneficiary designation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-white text-[#2d3e50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-['Plus_Jakarta_Sans']"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-center font-['Plus_Jakarta_Sans']"
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>

            {/* Share buttons */}
            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3 font-['Plus_Jakarta_Sans']">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/beneficiary-designations-override-your-will-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/beneficiary-designations-override-your-will-illinois/')}&text=${encodeURIComponent('Beneficiary Designations Override Your Will in Illinois — here’s what you need to know')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/beneficiary-designations-override-your-will-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
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

          <div className="border-t border-gray-300 pt-8 mb-8 mt-8">
            <BlogContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
