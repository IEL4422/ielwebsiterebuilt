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
  Scale,
  Users,
  Shield,
  Gavel,
  BookOpen,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'trustee-vs-executor-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'what-is-executor',
      title: 'What Is an Executor in Illinois?',
      level: 2,
      numeration: '2',
      children: [
        { id: 'executor-duties', title: 'Core Executor Duties Under Illinois Law', level: 3, numeration: '2.1' },
        { id: 'executor-authority', title: 'Where an Executor Gets Authority', level: 3, numeration: '2.2' },
      ],
    },
    {
      id: 'what-is-trustee',
      title: 'What Is a Trustee in Illinois?',
      level: 2,
      numeration: '3',
      children: [
        { id: 'trustee-duties', title: 'Core Trustee Duties Under Illinois Law', level: 3, numeration: '3.1' },
        { id: 'trustee-authority', title: 'Where a Trustee Gets Authority', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'comparison', title: 'Trustee vs. Executor: Side-by-Side Comparison', level: 2, numeration: '4' },
    { id: 'do-you-need-both', title: 'Do You Need Both a Trustee and an Executor?', level: 2, numeration: '5' },
    { id: 'how-to-choose', title: 'How to Choose the Right Person for Each Role', level: 2, numeration: '6' },
    { id: 'same-person', title: 'When the Same Person Can Serve Both Roles', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Can the same person be both the trustee and executor in Illinois?',
      answer:
        'Yes, and it is quite common in straightforward Illinois estate plans. A spouse, adult child, or trusted friend is often named as both the executor of the will and the successor trustee of the revocable living trust. This works well when the estate is not particularly complex, the person is organized and financially responsible, and there are no significant conflict-of-interest concerns. For larger or more complex estates — particularly those with ongoing trusts for minor children or significant investment assets — naming a professional or corporate trustee for the trust role (while keeping a family member as executor) is often the better approach.',
    },
    {
      question: "What happens if the named executor or trustee can't serve?",
      answer:
        'A well-drafted Illinois will and trust document each name at least one successor. For an executor, if the primary executor cannot or will not serve, the named successor steps in; if no successor is named or available, the Circuit Court appoints an administrator. For a trustee, if the named successor trustee is unavailable, the trust document should include a mechanism to appoint a replacement — often the beneficiaries, a trust protector, or a court. This is why designating backups is so important: the named executor or trustee may predecease you, become incapacitated, or simply decline the role.',
    },
    {
      question: 'Does an executor have any authority over trust assets?',
      answer:
        "No. An executor's authority is limited to the probate estate — assets held in the decedent's name alone without a beneficiary designation or automatic transfer mechanism. Assets held in a revocable living trust are not part of the probate estate; they belong to the trust. The executor has no authority over those assets. Only the trustee manages trust property. This is exactly why a fully funded revocable trust is so powerful: the trust assets bypass both the executor and probate court entirely, moving directly under the trustee's management.",
    },
    {
      question: 'How is a trustee compensated in Illinois?',
      answer:
        "Under the Illinois Trust Code (760 ILCS 3/708), a trustee is entitled to reasonable compensation from trust assets. What counts as \"reasonable\" depends on the complexity of the trust, the amount of assets managed, the time devoted, and the skill required. Individual trustees often waive compensation when they are also a beneficiary. Corporate trustees typically charge a percentage of assets under management — often 0.5% to 1.5% annually, depending on the trust's size. Executor compensation in Illinois is also governed by a \"reasonable\" standard under 755 ILCS 5/27-1, and courts have discretion to approve or adjust it.",
    },
    {
      question: 'Can an executor also be a beneficiary of the estate in Illinois?',
      answer:
        'Yes. It is extremely common for an executor to also be a beneficiary — for example, an adult child who is named both executor and a primary heir. Illinois law does not prohibit this dual role, but it does impose a fiduciary duty on the executor to act in the interests of all beneficiaries, not just themselves. An executor who is also a beneficiary must be careful not to make decisions that unfairly favor their own inheritance over other beneficiaries\' shares. Proper accounting and transparency help protect an executor-beneficiary from later challenges.',
    },
    {
      question: 'What is a successor trustee and how does it differ from an executor?',
      answer:
        'A successor trustee takes over management of a revocable living trust when the original trustee (usually the trust creator) dies or becomes incapacitated. Unlike an executor — who is appointed by the court through the probate process — a successor trustee steps in automatically based on the terms of the trust document itself. No court involvement is required. This private, seamless transition is one of the key advantages of a revocable living trust over a will-only estate plan. The successor trustee manages and distributes trust assets to beneficiaries according to the trust terms, completely outside of probate.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Trustee vs. Executor in Illinois: Roles, Duties, and Which You Need',
    description:
      'Learn the difference between a trustee and executor in Illinois, what each role requires, and how to choose the right person for each job in your estate plan.',
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
    datePublished: '2026-06-24',
    dateModified: '2026-06-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/trustee-vs-executor-illinois/',
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
        <section className="bg-gradient-to-br from-[#2D3E50] via-[#4A708B] to-[#2D3E50] py-16 sm:py-20">
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
                Trustee vs. Executor in Illinois: Roles, Duties, and Which You Need
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When you create a will or a revocable living trust in Illinois, you will be asked to name an executor and, if you have a trust, a trustee. Most people assume these roles are interchangeable — they are not. Understanding the difference shapes who you choose, what authority they have, and how your estate plan works.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>June 24, 2026</time>
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

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    An executor administers your probate estate — the assets in your name alone, distributed through the Circuit Court. A trustee manages trust assets — privately, without court involvement, and potentially for years or decades after your death.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Illinois residents who have both a will and a revocable living trust need both roles filled. Those with a will only need an executor. Those whose entire estate is held in trust and beneficiary-designated accounts may need little more than a successor trustee.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains what each role involves under Illinois law, compares them side by side, and walks through how to choose the right person — or people — for each job.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#2D3E50] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                At a Glance: Executor vs. Trustee
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Court-supervised, temporary, handles probate assets', type: 'Executor', color: 'blue' },
                  { label: 'Private, ongoing, manages trust assets', type: 'Trustee', color: 'amber' },
                  { label: 'Many estates need both — the same person can fill both roles', type: 'Key Takeaway', color: 'green' },
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

            {/* 2. What Is an Executor */}
            <h2 id="what-is-executor" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is an Executor in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An <strong>executor</strong> — sometimes called a <strong>personal representative</strong> — is the person responsible for administering your estate through the Illinois probate court after you die. You name your executor in your will. If you die without a will, the Circuit Court appoints an <strong>administrator</strong> to fill the same function.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The executor&apos;s authority extends only to <em>probate assets</em>: property held in your name alone, without a beneficiary designation or automatic transfer mechanism. Assets held in joint tenancy, payable-on-death accounts, retirement accounts with named beneficiaries, life insurance proceeds, and assets held in a living trust all pass outside of probate — and completely outside the executor&apos;s reach.
            </p>

            <h3 id="executor-duties" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Core Executor Duties Under Illinois Law
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois executor duties are governed by the Probate Act of 1975, 755 ILCS 5. In a typical estate, the executor must:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'File the probate petition and admit the will',
                  detail: 'The executor petitions the Circuit Court in the county where the decedent lived to open the estate and admit the will to probate. For most Chicago-area estates, that is the Circuit Court of Cook County, Probate Division. The court issues Letters of Office — the legal credential the executor needs to act on behalf of the estate.',
                },
                {
                  title: 'Notify creditors and beneficiaries',
                  detail: 'The executor must publish a Notice to Creditors in a local newspaper for three consecutive weeks and send formal notice to all beneficiaries and heirs. Under 755 ILCS 5/18-3, creditors then have six months from the first publication to file claims.',
                },
                {
                  title: 'Inventory and value all probate assets',
                  detail: 'Within 60 days of receiving Letters of Office, the executor must file a verified inventory of all probate assets with the court, including fair market values as of the date of death. Real estate, business interests, and unusual assets typically require independent appraisals.',
                },
                {
                  title: 'Pay valid debts, expenses, and taxes',
                  detail: 'After the creditor notice period closes, the executor pays valid claims in the statutory priority order set by Illinois law. The executor also files the decedent\'s final income tax return and, if applicable, an Illinois estate tax return (required for estates over $4 million as of 2026).',
                },
                {
                  title: 'Distribute remaining assets and close the estate',
                  detail: 'Once all debts and taxes are paid, the executor prepares a final accounting and distributes the remaining estate to beneficiaries as directed by the will. The executor then files a Proof of Closing with the court, formally ending the probate case.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#2D3E50] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#2D3E50] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="executor-authority" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Where an Executor Gets Authority
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An executor derives authority from two sources: the will itself and the court&apos;s issuance of <strong>Letters of Office</strong>. Until the Circuit Court issues Letters of Office, the executor has no legal power to act. Banks, title companies, and financial institutions require Letters of Office before they will cooperate with an executor.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The executor role is inherently <strong>temporary</strong>. Once the estate is fully administered — all debts paid, taxes filed, and assets distributed — the executor&apos;s authority terminates. A typical Illinois probate lasts 9–18 months for a straightforward estate.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The executor has no authority over trust assets</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    A common misconception: people assume the executor controls everything in the estate. In reality, an executor only controls assets that pass through probate. Assets in a properly funded revocable living trust are managed exclusively by the trustee — the executor cannot touch them, sell them, or distribute them. This is by design, and one of the core reasons a trust is a powerful estate planning tool.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. What Is a Trustee */}
            <h2 id="what-is-trustee" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is a Trustee in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>trustee</strong> is the person or institution responsible for managing assets held in a trust — following the trust&apos;s terms, investing prudently, and distributing assets to beneficiaries as directed. Unlike an executor, a trustee is appointed by the trust document itself, not by a court. There is no probate filing, no Letters of Office, and no court oversight (absent misconduct or a dispute).
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In a <strong>revocable living trust</strong> — the most common trust used in Illinois estate planning — the trust creator (the <strong>grantor</strong>) typically serves as their own trustee during their lifetime. When the grantor dies or becomes incapacitated, the <strong>successor trustee</strong> named in the trust document steps in automatically. No court order is required. The successor trustee simply presents the trust document to financial institutions and takes over.
            </p>

            <h3 id="trustee-duties" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Core Trustee Duties Under Illinois Law
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Trustee duties in Illinois are governed by the Illinois Trust Code, 760 ILCS 3, which took effect in 2020. The Trust Code codifies fiduciary duties that trustees have long been held to — but now with greater specificity and enforceability. Core duties include:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'Administer the trust in accordance with its terms',
                'Act solely in the interests of the beneficiaries',
                'Invest assets prudently under the Prudent Investor Act (760 ILCS 5/5)',
                'Keep trust assets separate from personal assets',
                'Keep beneficiaries reasonably informed',
                'Provide accountings on request or as required by the trust',
                'Avoid conflicts of interest',
                'Distribute income or principal as directed by the trust',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <h3 id="trustee-authority" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Where a Trustee Gets Authority
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A trustee&apos;s authority comes entirely from the trust document. The trust spells out what assets are held, who the beneficiaries are, when and how distributions are made, what powers the trustee has (to sell, invest, borrow, etc.), and who succeeds the trustee if they cannot serve.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Unlike an executor&apos;s role, a trustee&apos;s role can be <strong>long-term</strong>. A successor trustee for a revocable living trust may manage assets and make distributions for years. A trustee of a discretionary trust for a minor beneficiary may serve for decades — until the beneficiary reaches the age specified in the trust for final distribution.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#2D3E50] mb-1 font-['Plus_Jakarta_Sans']">The Illinois Trust Code and the Prudent Investor Standard</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Illinois trustees are held to a <strong>prudent investor standard</strong> under 760 ILCS 5/5. This means a trustee must invest and manage trust assets as a prudent investor would — considering risk, return, diversification, and the specific needs of the trust&apos;s beneficiaries. A trustee who concentrates all trust assets in a single stock, or who lets cash sit idle for years without reason, may face personal liability to the beneficiaries for investment losses.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Comparison Table */}
            <h2 id="comparison" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Trustee vs. Executor: Side-by-Side Comparison
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The differences between these two roles are fundamental — from how they get authority to how long they serve and how much court oversight applies.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#2D3E50] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Executor vs. Trustee: Key Differences
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#2D3E50]">Executor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Trustee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Source of appointment', 'Named in the will; confirmed by Circuit Court', 'Named in the trust document; no court required'],
                      ['Source of authority', 'Letters of Office issued by the court', 'The trust document itself'],
                      ['Assets controlled', 'Probate assets only (held in decedent\'s name alone)', 'Trust assets only'],
                      ['Court oversight', 'Yes — ongoing during probate administration', 'None, absent dispute or misconduct'],
                      ['Privacy', 'Public court record', 'Private — trust is not filed with any court'],
                      ['Duration of role', 'Temporary — ends when probate closes (9–18 months typical)', 'Can be long-term — years or decades'],
                      ['Governing law', '755 ILCS 5 (Probate Act)', '760 ILCS 3 (Illinois Trust Code)'],
                      ['Compensation', 'Reasonable fee from estate assets; approved by court', 'Reasonable fee from trust assets; set by trust terms'],
                      ['Successor named by', 'Will (or court appoints if will is silent)', 'Trust document'],
                      ['Key goal', 'Wind down the estate and distribute assets', 'Manage and protect assets for beneficiaries'],
                    ].map(([factor, executor, trustee], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{executor}</td>
                        <td className="py-3 px-4 text-gray-600">{trustee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Do You Need Both? */}
            <h2 id="do-you-need-both" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Do You Need Both a Trustee and an Executor?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The answer depends on how your estate plan is structured. Here are the three most common scenarios:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Will only — executor needed, no trustee',
                  color: 'blue',
                  body: 'If your estate plan consists of a will and beneficiary designations, you only need an executor. Your executor handles the probate estate — everything in your name alone — while beneficiary-designated accounts (retirement accounts, life insurance, payable-on-death accounts) pass directly to the named beneficiaries without going through the executor at all.',
                },
                {
                  title: 'Will + revocable living trust — you likely need both',
                  color: 'green',
                  body: 'The most common Illinois estate plan for families with significant assets includes both a revocable living trust and a "pour-over will." The trust holds most assets and is managed by the successor trustee. The pour-over will captures any assets left outside the trust at death and "pours" them into it — passing through probate first. This means an executor is needed to handle the pour-over, and a trustee manages the trust assets. In a well-funded trust plan, the probate estate subject to the executor\'s authority should be minimal.',
                  link: '/chicago-revocable-trusts-lawyer/',
                  linkLabel: 'Learn about our revocable trust services',
                },
                {
                  title: 'Fully funded trust — trustee does most of the work',
                  color: 'amber',
                  body: 'If your revocable living trust is fully funded — meaning all significant assets have been transferred into the trust or carry beneficiary designations — the probate estate may be very small or nonexistent. The successor trustee handles virtually everything. The executor may still be needed for incidental assets that never made it into the trust, but their role is minimal. This is the ideal outcome of careful trust funding.',
                  link: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                  linkLabel: 'How to fund a revocable living trust in Illinois',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : item.color === 'green'
                      ? 'bg-green-50 border-green-200'
                      : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-3">{item.body}</p>
                  {item.link && (
                    <Link
                      href={item.link}
                      className={`inline-flex items-center gap-1.5 font-medium text-sm hover:underline font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'green'
                          ? 'text-green-700'
                          : 'text-amber-700'
                      }`}
                    >
                      {item.linkLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* 6. How to Choose */}
            <h2 id="how-to-choose" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Choose the Right Person for Each Role
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The qualities that make someone a good executor are not identical to the qualities that make someone a good trustee. Here is what to look for in each role — and where the considerations diverge.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#2D3E50] text-white rounded-xl p-6">
                <Gavel className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Qualities of a Good Executor</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Organized and detail-oriented — probate involves paperwork',
                    'Honest and fair-minded toward all beneficiaries',
                    'Willing and able to dedicate time over 12–18 months',
                    'Comfortable dealing with courts, banks, and attorneys',
                    'Ideally located in or near Illinois for practical access',
                    'Younger than you (or a professional if no one fits)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <Shield className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Qualities of a Good Trustee</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Financially savvy — must invest prudently over the long term',
                    'Trustworthy and free from conflicts of interest',
                    'Available for the full duration of the trust (potentially decades)',
                    'Understands and respects the needs of all beneficiaries',
                    'Willing to communicate regularly with beneficiaries',
                    'For larger trusts, consider a professional or corporate trustee',
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
              One practical consideration for the trustee role that does not apply equally to executors: <strong>longevity</strong>. An executor finishes the job in a year or two. A trustee of a trust for minor children may serve for 20 or 30 years. Naming a 75-year-old sibling as successor trustee of a trust intended to benefit your 5-year-old child is a planning mistake — they may not be available or capable when you need them most.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For trusts with significant assets or complex distribution terms, a <strong>corporate or professional trustee</strong> — such as a bank trust department — is worth considering. Professional trustees bring investment expertise, administrative infrastructure, and institutional continuity that individual family members cannot match. They also eliminate the risk of a family member playing favorites among beneficiaries or co-mingling trust assets with personal funds.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure Who to Name as Executor or Trustee?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families build complete, carefully considered estate plans — including guidance on who to name in each role and why. Flat-fee pricing so you always know what you&apos;ll pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#2D3E50] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm font-['Plus_Jakarta_Sans']"
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

            {/* 7. Same Person */}
            <h2 id="same-person" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              When the Same Person Can Serve Both Roles
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              There is nothing in Illinois law that prohibits the same individual from serving as both executor of the will and successor trustee of the revocable living trust. For most families with straightforward estate plans, naming the same trusted person for both roles is entirely appropriate and simplifies estate administration.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Consider naming different people in these situations:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  scenario: 'The trust is intended to last for many years',
                  detail: 'If the trust will continue for 10, 20, or 30 years — for example, a trust that holds assets for minor children until they reach age 30 — you may want a younger or more financially experienced trustee, while the executor can be a peer your own age.',
                  color: 'amber',
                },
                {
                  scenario: 'There are potential conflicts among beneficiaries',
                  detail: 'If the will and trust benefit different people — for example, children from different relationships — having separate executors and trustees with distinct loyalties can reduce the risk of conflict and the appearance of favoritism.',
                  color: 'amber',
                },
                {
                  scenario: 'The trust holds significant or complex assets',
                  detail: 'Investment portfolios, real estate holdings, business interests, or other complex assets benefit from a trustee with relevant financial or business expertise. A family member who is well-suited to handle probate paperwork may not be the best long-term investment manager.',
                  color: 'amber',
                },
                {
                  scenario: 'The named person lives out of state',
                  detail: 'An executor working through Cook County Probate Court benefits from being geographically accessible — attending hearings, coordinating with local attorneys, and managing Illinois property. A trustee, whose role is often more financial than administrative, can more easily serve from another state.',
                  color: 'blue',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`border-l-4 p-5 rounded-r-lg ${
                    item.color === 'amber' ? 'bg-amber-50 border-amber-400' : 'bg-blue-50 border-blue-300'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 mb-2 font-['Plus_Jakarta_Sans'] text-sm">{item.scenario}</h4>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Whatever you decide, <strong>always name at least one successor</strong> for each role. The person you choose may predecease you, become incapacitated, or decline to serve. A well-drafted Illinois will and trust plan should name a primary and at least one backup for every fiduciary position — executor, successor executor, trustee, and successor trustee.
            </p>

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
              Understanding the distinction between a trustee and an executor is one of the first steps toward a coherent estate plan. The next step is deciding which structure — will only, will plus trust, or trust-centered — best fits your family, and then choosing the right people to fill each role.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you already have a revocable living trust and want to make sure it is properly funded so that the trustee can actually step in without probate involvement, see our guide on{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois revocable living trusts
              </Link>
              . If you need a will or want to understand how a{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                pour-over will works with a trust
              </Link>
              , our wills page has you covered. And if you are currently serving as executor of an Illinois estate, our guide{' '}
              <Link href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                on executor responsibilities
              </Link>{' '}
              walks through every step of the Cook County probate process.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area individuals and families create clear, complete estate plans — naming the right executor, the right trustee, and putting the right documents in place to protect every asset. Transparent flat-fee pricing with a free initial consultation.
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
                  href="/chicago-wills-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Wills &amp; Trusts Services
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
              <h3 className="font-bold text-[#2D3E50] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/',
                    label: "So You've Been Named Executor: A Comprehensive Guide",
                  },
                  {
                    href: '/blog/understanding-the-responsibilities-of-an-estate-executor-in-illinois/',
                    label: 'Responsibilities of an Estate Executor in Illinois',
                  },
                  {
                    href: '/blog/selecting-a-trustee-for-your-illinois-revocable-trust/',
                    label: 'Selecting a Trustee for Your Illinois Revocable Trust',
                  },
                  {
                    href: '/blog/how-long-does-probate-take-in-illinois/',
                    label: 'How Long Does Probate Take in Illinois?',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#2D3E50] text-sm font-medium hover:underline transition-colors font-['Plus_Jakarta_Sans']"
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
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois trust and probate law is complex and fact-specific — the roles and responsibilities of executors and trustees vary by the terms of each document and the specific circumstances of each estate. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Build an Estate Plan With the Right People in Every Role?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a clear, complete plan in place — the right executor, the right trustee, and every asset protected.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/trustee-vs-executor-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/trustee-vs-executor-illinois/')}&text=${encodeURIComponent('Trustee vs. Executor in Illinois — roles, duties, and which you need in your estate plan')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/trustee-vs-executor-illinois/')}`}
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
