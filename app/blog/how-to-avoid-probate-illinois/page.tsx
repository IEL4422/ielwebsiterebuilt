'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle2,
  CircleAlert as AlertCircle,
  FileText,
  Shield,
  Home,
  DollarSign,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-avoid-probate-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-probate', title: 'What Is Probate and Why Do People Want to Avoid It?', level: 2, numeration: '2' },
    {
      id: 'strategy-1',
      title: 'Strategy 1: Revocable Living Trust',
      level: 2,
      numeration: '3',
      children: [
        { id: 'how-trust-avoids-probate', title: 'How a Trust Bypasses Probate', level: 3, numeration: '3.1' },
        { id: 'trust-funding', title: 'The Critical Step: Funding the Trust', level: 3, numeration: '3.2' },
      ],
    },
    {
      id: 'strategy-2',
      title: 'Strategy 2: Beneficiary Designations on Financial Accounts',
      level: 2,
      numeration: '4',
    },
    {
      id: 'strategy-3',
      title: 'Strategy 3: Transfer on Death Instrument for Illinois Real Estate',
      level: 2,
      numeration: '5',
    },
    {
      id: 'strategy-4',
      title: 'Strategy 4: Joint Tenancy with Right of Survivorship',
      level: 2,
      numeration: '6',
    },
    {
      id: 'strategy-5',
      title: 'Strategy 5: Illinois Small Estate Affidavit',
      level: 2,
      numeration: '7',
    },
    { id: 'combining-strategies', title: 'Combining Strategies Into a Complete Plan', level: 2, numeration: '8' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '9' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '10' },
  ];

  const faqs = [
    {
      question: 'Can I avoid probate in Illinois without a trust?',
      answer:
        'Yes — but only partially. You can keep financial accounts, retirement accounts, and life insurance out of probate by naming beneficiaries directly on those accounts. For Illinois real estate, a Transfer on Death Instrument (TODI) lets you designate a beneficiary without going through probate. Joint tenancy with right of survivorship achieves a similar result for property co-owned with another person. However, if you own any assets solely in your own name without a beneficiary designation or automatic transfer mechanism — including real estate without a TODI and personal property with significant value — probate will generally be required unless the estate qualifies for the Small Estate Affidavit. A fully funded revocable living trust remains the most comprehensive and reliable probate-avoidance tool for Illinois residents with more than minimal assets.',
    },
    {
      question: 'How much does probate cost in Illinois?',
      answer:
        'Illinois probate costs vary significantly by estate size and complexity. At a minimum, expect filing fees of a few hundred dollars and attorney fees for preparing and filing the required court documents. For larger or contested estates, attorney fees can reach several thousand dollars or more, and the process typically takes 9 to 18 months. Executor compensation is also authorized under Illinois law — the executor is entitled to reasonable compensation from the estate. Additionally, the estate may need to pay for court-ordered appraisals, bond premiums, and publication fees for the creditor notice. For estates with significant real property or business interests, total probate costs — including attorney fees, court costs, and executor compensation — can easily run $5,000 to $15,000 or more. Probate avoidance strategies typically cost far less upfront than the probate they prevent.',
    },
    {
      question: 'Does a will avoid probate in Illinois?',
      answer:
        'No — a will does not avoid probate; it guides probate. A will is the document that tells the court how to distribute your probate estate, but the assets governed by the will must still pass through the Illinois probate process before they can be distributed to your beneficiaries. The Circuit Court must admit the will, appoint the executor, oversee administration, and approve the final distribution. If you want to keep assets out of probate, you need tools other than — or in addition to — a will: a funded revocable living trust, beneficiary designations, joint tenancy, a TODI for real estate, or some combination of these.',
    },
    {
      question: "What assets can't be kept out of probate in Illinois?",
      answer:
        "Most assets can be structured to avoid probate with proper planning. However, assets titled solely in your name without a beneficiary designation, joint owner, or trust assignment will generally require probate. This includes real estate titled solely in your name without a TODI on file, bank accounts without a payable-on-death designation, vehicles, valuable personal property (art, jewelry, collectibles), and business interests without a buy-sell or succession agreement. The key is advanced planning: once you die, the opportunity to transfer these assets outside of probate is gone. The Illinois Small Estate Affidavit can collect some assets without probate if the total estate value is under $150,000, but it has significant limitations, particularly for real estate.",
    },
    {
      question: 'Is joint tenancy a good way to avoid probate in Illinois?',
      answer:
        "Joint tenancy with right of survivorship does avoid probate for the surviving co-owner — when one co-owner dies, the surviving owner automatically inherits the deceased owner's share without probate. However, joint tenancy carries significant risks as an estate planning strategy. Adding a co-owner to your property or account gives that person immediate ownership rights, which could expose the asset to their creditors, their divorcing spouse, or their poor financial decisions. It also means they can sell or mortgage a jointly owned property without your permission in some situations. Joint tenancy also does not help if both co-owners die together or close in time. For most Illinois families, a revocable living trust provides probate avoidance without these risks.",
    },
    {
      question: 'Can I use a Transfer on Death Instrument if I have a mortgage on my home in Illinois?',
      answer:
        "Yes. Under the Illinois Residential Real Property Transfer on Death Instrument Act (755 ILCS 27), you can record a TODI even if your home has a mortgage. The mortgage is not affected by the TODI — it stays with the property, and the beneficiary who inherits the home inherits it subject to the existing mortgage balance. The mortgage servicer's consent is not required to record a TODI. One important note: a beneficiary who inherits through a TODI is not personally liable for the mortgage simply by accepting the property, but the lender can foreclose on the property if the mortgage is not paid. The beneficiary typically must either pay off the mortgage, refinance into their own name, or sell the property.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Avoid Probate in Illinois: 5 Strategies That Work',
    description:
      'Learn five proven strategies to avoid Illinois probate — revocable living trusts, beneficiary designations, Transfer on Death Instruments, joint tenancy, and the Small Estate Affidavit.',
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
    datePublished: '2026-11-18',
    dateModified: '2026-11-18',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-avoid-probate-illinois/',
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
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How to Avoid Probate in Illinois: 5 Strategies That Work
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois probate is public, slow, and costly — but it is not inevitable. With the right planning tools, most families can pass their assets directly to loved ones without ever setting foot in a courtroom. Here is exactly how to do it.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>November 18, 2026</time>
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
                <Shield className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Illinois probate is not mandatory. With proper planning, most families can pass the vast majority of their assets to loved ones privately and quickly — without court involvement.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    The five main tools for avoiding probate in Illinois are: (1) a funded revocable living trust, (2) beneficiary designations on financial accounts, (3) a Transfer on Death Instrument (TODI) for real estate, (4) joint tenancy with right of survivorship, and (5) the Illinois Small Estate Affidavit for small estates. Used strategically, these tools work together to route virtually all of your assets outside of probate court.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains how each strategy works under Illinois law, when to use each one, and how to combine them into a plan that protects your family from an unnecessary court process.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Probate Avoidance: At a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Probate is public, slow (9–18 months), and costly', type: 'The Problem', color: 'amber' },
                  { label: '5 proven strategies to bypass probate court entirely', type: 'The Solution', color: 'blue' },
                  { label: 'Most Illinois families can achieve near-complete probate avoidance', type: 'The Goal', color: 'green' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'blue'
                        ? 'bg-blue-50 border-blue-200'
                        : item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-green-50 border-green-200'
                    }`}
                  >
                    <p
                      className={`text-base font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'amber'
                          ? 'text-amber-700'
                          : 'text-green-700'
                      }`}
                    >
                      {item.type}
                    </p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Is Probate */}
            <h2 id="what-is-probate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Probate and Why Do People Want to Avoid It?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Probate</strong> is the court-supervised legal process for validating a deceased person&apos;s will, paying their debts, and distributing their remaining assets to beneficiaries. In Illinois, probate is administered by the Circuit Court in the county where the deceased person lived — most commonly the Cook County Circuit Court, Probate Division, for Chicago-area residents.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Not every death triggers probate. Only assets titled solely in the deceased person&apos;s name, without a beneficiary designation or automatic transfer mechanism, become part of the <strong>probate estate</strong>. If you own a home only in your name, have a bank account without a payable-on-death designation, and have a brokerage account without a beneficiary, those assets will likely require probate before they can reach your heirs.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              People work hard to avoid probate for three reasons:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Time',
                  body: 'Illinois probate typically takes 9 to 18 months from opening the estate to final distribution. For families who need access to estate assets quickly — to pay ongoing expenses, settle a home, or receive an inheritance — that delay is a serious hardship. During this period, the executor manages the estate under court supervision, and no assets can be distributed to beneficiaries until the process is complete.',
                  color: 'amber',
                },
                {
                  title: 'Cost',
                  body: 'Probate is not free. Executor compensation, attorney fees, court filing fees, publication costs, appraisal fees, and bond premiums all come out of the estate before beneficiaries see a dollar. For a mid-size Illinois estate with real property, total probate costs of $5,000 to $15,000 or more are realistic. Those costs reduce the inheritance your family receives.',
                  color: 'amber',
                },
                {
                  title: 'Public record',
                  body: 'Probate is a court proceeding — which means the will, the inventory of assets, the debts, and the final distribution are all public records filed with the Circuit Court. Anyone can read them. For families who prefer privacy about their financial affairs, probate avoidance is not just about convenience; it is about keeping their legacy private.',
                  color: 'blue',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'amber' ? 'bg-amber-50 border-amber-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            {/* 3. Strategy 1: Revocable Living Trust */}
            <h2 id="strategy-1" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategy 1: Revocable Living Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>revocable living trust</strong> is the most comprehensive and flexible probate-avoidance tool available to Illinois residents. When properly created and funded, a revocable living trust keeps virtually all of your assets — real estate, bank accounts, investment accounts, business interests, and personal property — outside of probate entirely.
            </p>

            <h3 id="how-trust-avoids-probate" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              How a Trust Bypasses Probate
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Probate is triggered when assets are owned in a deceased person&apos;s individual name. A trust sidesteps this by holding assets in the trust&apos;s name rather than your personal name. When you die, those assets do not belong to you individually — they belong to the trust. There is no probate estate to administer, because the assets were never titled in your personal name in the first place.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Your <strong>successor trustee</strong> — the person you name to take over the trust when you die or become incapacitated — steps in automatically and distributes the trust assets to your beneficiaries according to the trust document. No court petition is required. No Letters of Office must be obtained. No creditor notice period delays distribution. The process is private, efficient, and entirely outside of judicial supervision.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    A trust also protects against incapacity — not just death
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    If you become incapacitated due to illness, injury, or cognitive decline, your successor trustee takes over management of the trust assets without any court involvement. A will provides no protection during incapacity — it only takes effect at death. A revocable living trust, by contrast, includes both a death plan and an incapacity plan, making it the cornerstone of a complete Illinois estate plan.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="trust-funding" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Critical Step: Funding the Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Creating the trust document is only half the work. For a revocable living trust to avoid probate, you must <strong>fund it</strong> — meaning you must actually transfer your assets into the trust. A trust that holds no assets provides no probate protection. This means re-titling real estate by recording a new deed naming the trust as owner, changing the account title on bank and investment accounts, and assigning business interests and other property to the trust.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law helps clients with the full trust funding process — not just the document drafting. See our guide on <Link href="/blog/how-to-fund-a-revocable-living-trust-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">how to fund a revocable living trust in Illinois</Link> for a step-by-step walkthrough of what needs to be transferred and how.
            </p>

            {/* 4. Strategy 2: Beneficiary Designations */}
            <h2 id="strategy-2" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategy 2: Beneficiary Designations on Financial Accounts
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For financial accounts — checking accounts, savings accounts, brokerage accounts, retirement accounts, and life insurance policies — the simplest and most direct way to avoid probate is to name a beneficiary directly on the account. When you die, the account passes to the named beneficiary automatically, completely outside of probate.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Account Types and Their Probate-Avoidance Mechanism
              </h3>
              <div className="space-y-3">
                {[
                  {
                    type: 'Retirement accounts (IRAs, 401(k), 403(b))',
                    mechanism: 'Named beneficiary on file with the plan custodian — passes directly at death, bypasses probate entirely',
                  },
                  {
                    type: 'Life insurance policies',
                    mechanism: 'Named beneficiary on the policy — proceeds paid directly to beneficiary without probate involvement',
                  },
                  {
                    type: 'Bank accounts (checking, savings, CDs)',
                    mechanism: 'Payable-on-death (POD) or Totten trust designation — add at your bank at any time',
                  },
                  {
                    type: 'Brokerage and investment accounts',
                    mechanism: 'Transfer-on-death (TOD) designation — add through your broker; account passes directly to beneficiary',
                  },
                  {
                    type: '529 college savings plans',
                    mechanism: 'Named successor account owner and beneficiary — typically passes without probate by plan terms',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">{item.type}:</strong>{' '}
                      <span className="text-gray-700">{item.mechanism}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Beneficiary designations override your will</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    This is one of the most important — and most overlooked — facts in estate planning. The beneficiary named on a financial account receives that account regardless of what your will says. If your will leaves everything to your children equally, but your IRA names only one child, that child receives the entire IRA. Keep beneficiary designations updated, especially after marriage, divorce, the birth of a child, or the death of a named beneficiary. See our guide on <Link href="/blog/beneficiary-designations-override-your-will-illinois/" className="text-amber-800 hover:underline font-medium font-['Plus_Jakarta_Sans']">how beneficiary designations override your will in Illinois</Link> for more detail.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Strategy 3: TODI */}
            <h2 id="strategy-3" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategy 3: Transfer on Death Instrument for Illinois Real Estate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For Illinois homeowners who want to keep their real estate out of probate without the expense and complexity of a trust, the <strong>Transfer on Death Instrument (TODI)</strong> is an increasingly popular option. Under the Illinois Residential Real Property Transfer on Death Instrument Act (755 ILCS 27), you can record a deed-like instrument that designates a beneficiary to receive your home at your death — without probate, without changing current ownership, and without giving up any rights during your lifetime.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <Home className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">What a TODI Does</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Designates a beneficiary to receive real estate at your death',
                    'Takes effect only at death — you retain full ownership and control during life',
                    'Passes real estate outside of probate to the named beneficiary',
                    'Can be revoked or changed at any time while you are alive',
                    'Does not affect existing mortgages or liens',
                    'Must be recorded in the county recorder\'s office before death',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <AlertCircle className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">TODI Limitations</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Only available for Illinois residential real estate',
                    'Does not cover other assets — only real property',
                    'Beneficiary must survive you by 60 hours or the TODI lapses',
                    'Creditors of the estate can still reach the property in some cases',
                    'No trust protections (spendthrift, age-based distribution, etc.)',
                    'Only covers the specific property named — not future real estate',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For more detail on executing and recording a TODI in Illinois, see our comprehensive guide on <Link href="/blog/illinois-transfer-on-death-instrument-guide/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Transfer on Death Instruments in Illinois</Link>. A TODI works well as a standalone tool for homeowners with limited other assets, or as a complement to a revocable trust for real estate that was inadvertently left out of the trust.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Want to Build a Probate-Free Illinois Estate Plan?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create complete estate plans designed to minimize or eliminate probate — revocable trusts, beneficiary designations, TODIs, and everything in between. Transparent flat-fee pricing so you always know what you&apos;ll pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#33414E] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services-pricing/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  View Services &amp; Pricing
                </Link>
              </div>
            </div>

            {/* 6. Strategy 4: Joint Tenancy */}
            <h2 id="strategy-4" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategy 4: Joint Tenancy with Right of Survivorship
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Joint tenancy with right of survivorship</strong> is one of the oldest and most common ways to pass property outside of probate in Illinois. When two or more people own property as joint tenants, and one co-owner dies, the surviving co-owner(s) automatically inherit the deceased person&apos;s share by operation of law — no probate required, no court order needed.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Married couples in Illinois frequently own their home and financial accounts as joint tenants (or as tenants by the entirety, which is similar and limited to married couples). When one spouse dies, the surviving spouse takes full ownership automatically. The property never enters the probate estate, so the survivor has immediate access and control.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Why joint tenancy is not a complete estate plan</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Joint tenancy only defers probate — it does not eliminate it. When both co-owners die (or the survivor eventually dies), the surviving owner&apos;s estate must still go through probate unless other planning is in place. Adding someone as a joint owner also creates immediate shared ownership, which can expose the property to their creditors, legal judgments, or divorce proceedings. For most Illinois families, joint tenancy works best as a supplement to a revocable trust — not as the primary estate planning strategy. See our detailed comparison of <Link href="/blog/joint-tenancy-vs-tenancy-in-common-illinois/" className="text-amber-800 hover:underline font-medium font-['Plus_Jakarta_Sans']">joint tenancy vs. tenancy in common in Illinois</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Strategy 5: Small Estate Affidavit */}
            <h2 id="strategy-5" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategy 5: Illinois Small Estate Affidavit
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For families dealing with a relatively small estate, the <strong>Illinois Small Estate Affidavit</strong> under 755 ILCS 5/25-1 provides a streamlined way to collect certain assets without opening a formal probate proceeding. It is not advance planning — it is a reactive tool used after someone dies — but it is worth understanding as part of the broader probate-avoidance landscape.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    Illinois Small Estate Affidavit: Key Requirements
                  </h4>
                  <div className="space-y-3">
                    {[
                      {
                        rule: 'Total estate value under $150,000',
                        detail: 'The entire probate estate — all assets subject to probate — must have a combined value of $150,000 or less. Assets with beneficiary designations and joint tenancy property do not count toward this threshold.',
                      },
                      {
                        rule: 'At least 30 days must have passed since death',
                        detail: 'The affidavit cannot be used until 30 days after the decedent\'s death. This waiting period is mandatory under the statute.',
                      },
                      {
                        rule: 'No formal probate proceeding may be pending',
                        detail: 'If someone has already opened a probate estate in Circuit Court, the Small Estate Affidavit cannot be used as an alternative.',
                      },
                      {
                        rule: 'Illinois real estate cannot be transferred by affidavit',
                        detail: 'The Small Estate Affidavit does not work for transferring title to Illinois real property. Real estate requires either probate, a TODI, or a trust to pass outside of probate.',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                        <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900">{item.rule}:</strong> {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The Small Estate Affidavit is a useful safety net but not a substitute for proactive planning. Families who rely on it must still deal with the limitation that it does not transfer real property, cannot be used until 30 days after death, and comes with potential personal liability for the person who signs it if assets turn out to exceed the $150,000 threshold. For a full explanation of how to use the affidavit and what it covers, see our guide on the <Link href="/blog/illinois-small-estate-affidavit-avoid-probate/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Illinois Small Estate Affidavit</Link>.
            </p>

            {/* 8. Combining Strategies */}
            <h2 id="combining-strategies" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Combining Strategies Into a Complete Plan
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              No single strategy covers every asset. The most effective approach is a coordinated plan that uses the right tool for each category of asset. Here is how a typical Illinois estate plan achieves near-complete probate avoidance:
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Asset-by-Asset Probate Avoidance Guide
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Asset Type</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Best Probate-Avoidance Tool</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Backup Option</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Primary residence', 'Transfer to revocable living trust', 'Transfer on Death Instrument (TODI)'],
                      ['Investment real estate', 'Transfer to revocable living trust', 'Joint tenancy (with caution)'],
                      ['Bank accounts', 'Payable-on-death (POD) designation', 'Transfer to revocable living trust'],
                      ['Brokerage accounts', 'Transfer-on-death (TOD) designation', 'Transfer to revocable living trust'],
                      ['Retirement accounts (IRA, 401k)', 'Named beneficiary on the account', 'Contingent beneficiary if primary predeceases'],
                      ['Life insurance', 'Named beneficiary on the policy', 'Revocable living trust as beneficiary (if no living beneficiary fits)'],
                      ['Vehicles', 'Transfer to revocable trust or rely on small estate (low value)', 'Joint ownership or TOD title (some states; check IL DMV)'],
                      ['Business interests', 'Transfer to revocable trust with buy-sell agreement', 'Operating agreement with succession provisions'],
                      ['Personal property (furniture, jewelry)', 'Assignment to revocable living trust', 'Small estate affidavit if total estate qualifies'],
                    ].map(([asset, best, backup], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{asset}</td>
                        <td className="py-3 px-4 text-gray-600">{best}</td>
                        <td className="py-3 px-4 text-gray-600">{backup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The goal of a well-designed Illinois estate plan is to leave as little as possible in the probate estate. Most Chicago-area families who work with an estate planning attorney can achieve a situation where the probate estate — if any — consists of only incidental personal property and modest cash. The result: a faster, cheaper, and completely private transfer of wealth to the people they love.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you want to understand your complete estate planning options in Illinois, start with our <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable trust services page</Link>, our <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">wills services page</Link>, or our overview of <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">all services and flat-fee pricing</Link>.
            </p>

            {/* 9. FAQ */}
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

            {/* 10. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Avoiding probate in Illinois is not complicated — but it does require deliberate action. A will alone will not do it. The right combination of a funded revocable living trust, up-to-date beneficiary designations, and a TODI for your home can keep virtually your entire estate out of the courthouse, saving your family months of waiting and thousands of dollars in unnecessary costs.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law helps Chicago-area families build integrated estate plans designed around probate avoidance from the start. Our flat-fee pricing model means you will know exactly what the plan costs before we begin — no hourly surprises. See our <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> for details, or schedule a free consultation to discuss your specific situation.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families create complete, probate-smart estate plans — revocable living trusts, beneficiary designations, Transfer on Death Instruments, and more. Schedule a free consultation and start protecting your family today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg font-['Plus_Jakarta_Sans']"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/chicago-revocable-trusts-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Revocable Trust Services
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

            {/* Related articles */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/illinois-transfer-on-death-instrument-guide/',
                    label: 'Illinois Transfer on Death Instrument: Complete Guide',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/illinois-small-estate-affidavit-avoid-probate/',
                    label: 'Illinois Small Estate Affidavit: How to Avoid Probate',
                  },
                  {
                    href: '/blog/how-long-does-probate-take-in-illinois/',
                    label: 'How Long Does Probate Take in Illinois?',
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
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making legal planning accessible, affordable, and stress-free. Through her modern virtual law practice, she helps families and individuals across Illinois create clear, effective plans that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a transparent pricing model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois probate and estate planning law is complex and fact-specific — the best strategies for avoiding probate depend on your individual assets, family circumstances, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Keep Your Family Out of Illinois Probate Court?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law. We will review your assets, explain which strategies apply, and build you a plan that keeps your estate private, efficient, and probate-free.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-avoid-probate-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-avoid-probate-illinois/')}&text=${encodeURIComponent('How to Avoid Probate in Illinois — 5 proven strategies to keep your estate out of court')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-avoid-probate-illinois/')}`}
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
