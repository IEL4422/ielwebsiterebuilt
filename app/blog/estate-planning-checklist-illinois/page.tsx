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
  Users,
  RefreshCw,
  ClipboardList,
} from 'lucide-react';
import type { Metadata } from 'next';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'estate-planning-checklist-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'why-checklist', title: 'Why Illinois Residents Need a Checklist', level: 2, numeration: '2' },
    {
      id: 'core-documents',
      title: 'The Core Documents Checklist',
      level: 2,
      numeration: '3',
      children: [
        { id: 'will', title: 'Last Will and Testament', level: 3, numeration: '3.1' },
        { id: 'trust', title: 'Revocable Living Trust', level: 3, numeration: '3.2' },
        { id: 'poa-financial', title: 'Durable Power of Attorney (Financial)', level: 3, numeration: '3.3' },
        { id: 'poa-healthcare', title: 'Healthcare Power of Attorney & Advance Directive', level: 3, numeration: '3.4' },
      ],
    },
    { id: 'beneficiary-titling', title: 'Beneficiary Designations & Asset Titling Checklist', level: 2, numeration: '4' },
    { id: 'guardianship', title: 'Guardian Nominations & Family Checklist', level: 2, numeration: '5' },
    { id: 'review-update', title: 'Review & Update Triggers', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const faqs = [
    {
      question: 'How much does it cost to complete an estate plan in Illinois?',
      answer:
        'The cost of an Illinois estate plan varies significantly depending on the complexity of your situation and the attorney you work with. A basic package — a will, durable power of attorney, and healthcare power of attorney — typically ranges from $500 to $1,500 at a flat-fee estate planning firm. A more complete plan including a revocable living trust, pour-over will, and both powers of attorney commonly runs $1,500 to $3,500 or more. Illinois Estate Law uses transparent, flat-fee pricing so clients know the exact cost before engaging. See our services and pricing page for current rates.',
    },
    {
      question: 'Do I need a trust or just a will in Illinois?',
      answer:
        'That depends on your goals and the size and composition of your estate. A will alone is sufficient for many Illinois residents — it names your beneficiaries and executor, nominates guardians for minor children, and directs the distribution of your probate assets. However, a will must go through Illinois probate court, which takes time and costs money. A revocable living trust, when properly funded, allows assets to pass to beneficiaries privately and immediately — without probate. If you own real estate, have significant assets, value privacy, or want to avoid the delay and cost of probate, a trust is usually worth the additional investment. An estate planning attorney can help you decide which structure fits your situation.',
    },
    {
      question: 'What happens if I become incapacitated without a power of attorney in Illinois?',
      answer:
        'Without a durable power of attorney for finances, no one — including your spouse or adult children — has automatic legal authority to manage your bank accounts, pay your bills, or handle financial transactions on your behalf. Your family may need to petition an Illinois court for a guardianship or conservatorship, which is an expensive, time-consuming process that can take months and cost thousands of dollars. Similarly, without a healthcare power of attorney, medical providers may be unable to accept direction from your family regarding your care, and courts may become involved in medical decision-making. These documents are among the most important — and least expensive — components of any estate plan.',
    },
    {
      question: 'How often should I update my Illinois estate plan?',
      answer:
        "Estate planning attorneys generally recommend reviewing your plan every three to five years — or sooner when a major life event occurs. Key triggers in Illinois include marriage, divorce, birth or adoption of a child, death of a beneficiary or named agent, significant changes in assets, moving to or from Illinois, changes in Illinois or federal tax law, and retirement. Even when no specific event has occurred, a periodic review catches outdated beneficiary designations, agents who are no longer appropriate, or changes in your wishes that you haven't yet formalized. A short review conversation with an attorney is far less expensive than the problems created by an outdated plan.",
    },
    {
      question: 'Are beneficiary designations more important than my will in Illinois?',
      answer:
        'Yes — beneficiary designations override your will for the accounts and policies that carry them. If your will leaves everything to your children equally, but your 401(k) names only your eldest child as beneficiary, that retirement account passes entirely to the eldest child regardless of what your will says. The same principle applies to life insurance, IRAs, annuities, payable-on-death bank accounts, and transfer-on-death investment accounts. Because these designations can easily become outdated — especially after a divorce or the death of a named beneficiary — reviewing and updating them is one of the most important and most commonly overlooked parts of estate planning.',
    },
    {
      question: 'What is a pour-over will and do I need one with my Illinois trust?',
      answer:
        'A pour-over will is a companion document to a revocable living trust. It directs that any assets remaining in your individual name at death — assets you forgot to transfer into the trust, or that came to you unexpectedly — are transferred ("poured over") into the trust at your death and distributed according to the trust\'s terms. If you have a revocable living trust, you should have a pour-over will as a safety net. Without it, any assets outside the trust at your death would be distributed according to Illinois intestate succession law — or not at all, if the trust was designed to be the sole distribution mechanism. Illinois Estate Law drafts pour-over wills as part of every complete trust package.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Illinois Estate Planning Checklist: Everything You Need in 2026',
    description:
      'Step-by-step Illinois estate planning checklist covering wills, trusts, powers of attorney, beneficiary designations, asset titling, and when to update your plan.',
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
    datePublished: '2026-11-25',
    dateModified: '2026-11-25',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/estate-planning-checklist-illinois/',
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
                Illinois Estate Planning Checklist: Everything You Need in 2026
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A complete, step-by-step checklist for Illinois residents — from core legal documents to beneficiary designations, asset titling, and when to update your plan. Use it to identify exactly what you have, what you are missing, and what to do next.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>November 25, 2026</time>
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
                <ClipboardList className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    A complete Illinois estate plan involves more than signing a will. It requires the right legal documents, properly titled assets, up-to-date beneficiary designations, and a commitment to reviewing and updating your plan as your life changes.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    This checklist walks through every component of a sound Illinois estate plan — the four core legal documents (will, trust, financial power of attorney, and healthcare power of attorney), the asset-titling and beneficiary steps that make those documents work, the family decisions you need to make, and the life events that should trigger a review.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Whether you are starting from scratch or reviewing an existing plan, use this checklist to find exactly what you have, what you are missing, and what to do next.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick status widget */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Estate Plan: Quick Status Check
              </h3>
              <div className="grid sm:grid-cols-4 gap-4">
                {[
                  { label: 'Core Documents', items: 'Will, Trust, 2 POAs', color: 'blue' },
                  { label: 'Beneficiary Review', items: 'Life insurance, IRAs, 401(k)s, TOD accounts', color: 'amber' },
                  { label: 'Asset Titling', items: 'Home, bank accounts, investment accounts', color: 'green' },
                  { label: 'Review Cadence', items: 'Every 3–5 years or after major life events', color: 'purple' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'blue'
                        ? 'bg-blue-50 border-blue-200'
                        : item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : item.color === 'green'
                        ? 'bg-green-50 border-green-200'
                        : 'bg-purple-50 border-purple-200'
                    }`}
                  >
                    <p
                      className={`text-sm font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'amber'
                          ? 'text-amber-700'
                          : item.color === 'green'
                          ? 'text-green-700'
                          : 'text-purple-700'
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-600 font-['Plus_Jakarta_Sans']">{item.items}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Why a Checklist */}
            <h2 id="why-checklist" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Illinois Residents Need a Checklist
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Estate planning in Illinois involves a web of legal documents, financial accounts, and personal decisions that must work together. A will that names your children as beneficiaries can be undermined by a life insurance policy that still names an ex-spouse. A carefully drafted revocable trust can fail to protect your home from probate if the deed was never re-titled into the trust&apos;s name. A healthcare power of attorney that names your oldest child may be outdated if that child has moved abroad or developed their own health challenges.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The checklist approach matters because estate planning is not a single event — it is an ongoing process. The documents you sign today need to be integrated with your financial accounts and revisited as your circumstances change. Illinois-specific rules add another layer: Illinois has its own estate tax (which applies to estates over $4 million), its own intestate succession law, its own statutory forms for powers of attorney, and its own probate code — all of which affect how your estate plan should be structured.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The most dangerous estate plan is an incomplete one</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Many Illinois families believe they have done their estate planning because they signed a will years ago — without realizing that outdated beneficiary designations, an unfunded trust, or missing powers of attorney have left critical gaps. Use this checklist to confirm that your plan is complete, not just partially done.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Core Documents */}
            <h2 id="core-documents" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Core Documents Checklist
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A complete Illinois estate plan typically includes four foundational legal documents. Here is what each one does, and what to look for when reviewing an existing document.
            </p>

            <h3 id="will" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Last Will and Testament
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>last will and testament</strong> is the foundation of most Illinois estate plans. It names the people who will receive your property after you die (your beneficiaries), appoints an executor to manage and distribute your estate through the Illinois probate process, nominates a guardian for any minor children, and can direct that specific assets go to specific people. Under Illinois law (755 ILCS 5/4-1 through 4-7), a valid will must be in writing, signed by you, and witnessed by at least two credible witnesses.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-6">
              <h4 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">Will Checklist</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You have a signed, witnessed will that meets Illinois execution requirements',
                  'Your executor is named, with an alternate if the first cannot serve',
                  'Your beneficiaries are clearly identified — full names, not just "my children"',
                  'You have named a guardian for minor children (if applicable)',
                  'Your will reflects your current wishes — not a plan from a prior marriage or relationship',
                  'The original is stored safely and your executor knows where to find it',
                  'Your will was reviewed within the last five years',
                  'If you have a trust, your will is a pour-over will that directs assets into the trust',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One important limitation: a will only controls <em>probate assets</em> — property titled in your individual name with no beneficiary designation. It has no effect on jointly owned property, life insurance with named beneficiaries, retirement accounts, or payable-on-death accounts. This is why a will alone is rarely a complete estate plan. For more on what makes a will valid and enforceable in Illinois, see our guide on{' '}
              <Link href="/blog/what-makes-a-will-valid-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">what makes a will valid in Illinois</Link>.
            </p>

            <h3 id="trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Revocable Living Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>revocable living trust</strong> is a legal arrangement in which you transfer ownership of your assets to the trust during your lifetime, while retaining full control as the trustee. At your death — or if you become incapacitated — a successor trustee you have named steps in and manages or distributes the trust assets according to your instructions, without going through Illinois probate court. This avoids the cost, delay, and public nature of probate, which in Cook County typically takes nine months to two or more years.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A trust is especially valuable if you own real estate (which must be re-titled into the trust to avoid probate), have significant assets, want to maintain privacy (trust documents are not public court records), or want to provide for a beneficiary with special needs through a sub-trust. For a detailed look at the advantages and disadvantages of revocable trusts in Illinois, see our guide on{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust services</Link>.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-6">
              <h4 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">Revocable Trust Checklist</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You have a signed, properly executed revocable living trust agreement',
                  'You are named as the initial trustee and you have named a successor trustee',
                  'Your home is titled in the name of the trust (deed has been re-recorded)',
                  'Bank accounts and investment accounts have been re-titled to the trust',
                  'You have a pour-over will as a safety net for any assets outside the trust',
                  'The trust clearly names beneficiaries and distribution instructions',
                  'You have reviewed the trust since any major life or financial change',
                  'If you have a spouse, your joint trust or separate trusts are coordinated',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">An unfunded trust does nothing</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Many Illinois families sign a trust agreement but never transfer their assets into it — leaving everything to pass through probate anyway. Trust funding (transferring your home, bank accounts, and investment accounts into the trust&apos;s name) is just as important as signing the trust document itself. See our detailed guide on{' '}
                    <Link href="/blog/how-to-fund-a-revocable-living-trust-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">how to fund a revocable living trust in Illinois</Link>.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="poa-financial" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Durable Power of Attorney (Financial)
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>durable power of attorney for finances</strong> appoints a person — your &ldquo;agent&rdquo; — to manage your financial and legal affairs if you become incapacitated and unable to act for yourself. &ldquo;Durable&rdquo; means the authority continues even after you lose capacity — a critical feature, since that is exactly when you need it most. Illinois has a specific statutory short form power of attorney for property under 755 ILCS 45/3-3, which provides broad authority to manage bank accounts, pay bills, file taxes, manage real estate, and handle other financial transactions.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Without a durable power of attorney in place, your family may need to petition an Illinois court for guardianship to gain legal authority over your finances — an expensive, time-consuming process that typically takes several months and costs thousands of dollars in legal fees. This document is one of the most important — and least expensive — components of any Illinois estate plan.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-6">
              <h4 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">Financial Power of Attorney Checklist</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You have a signed, witnessed financial (property) power of attorney',
                  'Your agent is someone you trust completely with your finances',
                  'You have named an alternate agent if the primary cannot serve',
                  'The document is durable — it remains valid if you become incapacitated',
                  'Your agent knows where the original document is kept',
                  'Your financial institutions have a copy on file (or will accept it)',
                  'You have reviewed the agent designation within the last five years',
                  'Your chosen agent lives nearby or can act remotely if needed',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3 id="poa-healthcare" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Healthcare Power of Attorney &amp; Advance Directive
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois uses two separate documents for healthcare planning. The <strong>Healthcare Power of Attorney</strong> (755 ILCS 45/4-1 et seq.) appoints an agent to make medical decisions on your behalf if you cannot make them yourself — from consenting to surgery to directing end-of-life care. The <strong>Living Will Declaration</strong> (755 ILCS 35/1 et seq.) expresses your own wishes about life-sustaining treatment when you have a terminal condition and cannot communicate. Together, these documents give your healthcare providers clear legal authority and clear instructions.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Without these documents, Illinois hospitals and physicians may default to aggressive life-sustaining treatment regardless of your wishes, and your family may have no legal authority to intervene. For a full explanation of how these documents work together, see our guide on{' '}
              <Link href="/blog/illinois-advance-directive-living-will/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Illinois advance directives and living wills</Link>.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-6">
              <h4 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">Healthcare Documents Checklist</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You have a signed, witnessed Illinois Healthcare Power of Attorney',
                  'Your healthcare agent is someone who shares your values and will advocate for you',
                  'You have named an alternate healthcare agent',
                  'You have an Illinois Living Will Declaration expressing your end-of-life wishes',
                  'Your primary physician has copies of both documents',
                  'Your agent has copies and knows where the originals are stored',
                  'Your documents reflect your current wishes — not views you have changed',
                  'You have discussed your wishes with your agent so they can act confidently',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <Shield className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Complete Your Illinois Estate Plan?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create complete, integrated estate plans — wills, trusts, powers of attorney, and all the supporting documents — with flat-fee pricing so you always know the cost upfront.
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

            {/* 4. Beneficiary Designations & Titling */}
            <h2 id="beneficiary-titling" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Beneficiary Designations &amp; Asset Titling Checklist
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Your legal documents set the framework for your estate plan, but it is your financial accounts and how they are titled that determine what actually happens to your wealth. Beneficiary designations and account titling bypass your will and your trust entirely — they control distribution directly. This makes them simultaneously the most powerful and the most commonly overlooked component of Illinois estate planning.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <FileText className="w-7 h-7 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Beneficiary Designation Checklist</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Life insurance policies: primary and contingent beneficiaries named and current',
                    'IRA accounts (traditional and Roth): beneficiaries reviewed and updated',
                    '401(k), 403(b), and other employer retirement plans: beneficiaries confirmed',
                    'Annuity contracts: beneficiary designations reviewed',
                    'Payable-on-death (POD) bank accounts: beneficiaries correct',
                    'Transfer-on-death (TOD) investment and brokerage accounts: beneficiaries correct',
                    'No ex-spouse remains as a beneficiary on any account',
                    'Contingent beneficiaries named in case primary predeceases you',
                    'No minor child named directly as beneficiary without a trust or custodian',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <Users className="w-7 h-7 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Asset Titling Checklist</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Home: deed re-recorded into the name of your revocable trust (or holds TODI)',
                    'Other real estate: same review applied to each parcel',
                    'Bank accounts: re-titled to trust or have POD designation',
                    'Investment and brokerage accounts: re-titled to trust or have TOD designation',
                    'Vehicle titles: reviewed — Illinois has a simple procedure to transfer at death',
                    'Business interests (LLC, S-corp): operating agreement reviewed for death / incapacity',
                    'No asset is in your individual name without a plan to avoid probate',
                    'Joint tenancy with right of survivorship used intentionally, not accidentally',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Never name a minor child directly as a beneficiary</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    If you name a minor child as a beneficiary of a life insurance policy or retirement account and that child is under 18 when you die, an Illinois court must appoint a guardian of the estate to manage the funds until the child reaches adulthood. This is expensive and cumbersome. The better approach is to name a trust as the beneficiary, with a trustee who manages the funds for the child&apos;s benefit under terms you have specified. If you have minor children, review every beneficiary designation with this issue in mind.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For Illinois real estate owners who want to pass their home outside of probate without creating a full revocable trust, the Illinois Transfer on Death Instrument (TODI) is an option worth exploring. It allows you to record a deed-like document that names who receives your property at death, without giving up ownership or control during your lifetime. For a full explanation, see our guide on{' '}
              <Link href="/blog/illinois-transfer-on-death-instrument-guide/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Illinois Transfer on Death Instruments</Link>.
            </p>

            {/* 5. Guardianship & Family */}
            <h2 id="guardianship" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Guardian Nominations &amp; Family Checklist
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have minor children, naming a guardian in your will is one of the most important decisions in your entire estate plan. Without a guardian nomination, an Illinois probate court will decide who raises your children — potentially choosing someone you would not have chosen yourself. The court will consider the child&apos;s best interests, but it will not automatically follow the preferences of the surviving parent&apos;s family, and it may not know your values, your relationships, or your wishes.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Family Planning Checklist
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Guardian nominated for each minor child — both guardian of the person and guardian of the estate if you have one',
                  'Alternate guardian named in case the primary cannot serve',
                  'The proposed guardian knows and has accepted the role',
                  'If you have a trust, the trustee managing children\'s funds is a separate person from the guardian of the person',
                  'Adult children who might receive an inheritance understand your wishes',
                  'If a beneficiary has special needs, you have a special needs trust to avoid disqualifying them from government benefits',
                  'If you have a blended family, your plan is designed to protect all intended beneficiaries',
                  'You have discussed your healthcare wishes with your agent so they can advocate for you',
                  'Key documents (will, trust, POA) are stored securely and your executor knows where they are',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Blended families present some of the most complex estate planning challenges in Illinois. If you have children from a prior relationship, your surviving spouse&apos;s interests and your children&apos;s interests may conflict. Without a carefully structured plan, a surviving spouse could inadvertently — or intentionally — divert assets away from your children from a prior relationship. For a detailed look at this issue, see our guide on{' '}
              <Link href="/blog/blended-family-estate-planning-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">estate planning for blended families in Illinois</Link>.
            </p>

            {/* 6. Review & Update Triggers */}
            <h2 id="review-update" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Review &amp; Update Triggers
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An estate plan is not a one-time event. Life changes, relationships change, tax laws change, and your plan needs to keep pace. Illinois estate planning attorneys generally recommend reviewing your plan every three to five years — but certain life events require an immediate review regardless of when you last updated your documents.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  trigger: 'Marriage or divorce',
                  action: 'Update your will and trust beneficiaries, change POA agents, review beneficiary designations. Illinois law automatically revokes bequests to a former spouse in a will after a final divorce judgment — but it does NOT automatically update beneficiary designations on financial accounts.',
                  color: 'blue',
                },
                {
                  trigger: 'Birth or adoption of a child',
                  action: 'Add the child to your will, name a guardian, review trust provisions for children, and update beneficiary designations if appropriate. Consider whether your existing estate plan addresses the child\'s needs through adulthood.',
                  color: 'green',
                },
                {
                  trigger: 'Death of a named beneficiary, agent, or guardian',
                  action: 'Remove the deceased person from all roles and designations, name a replacement, and confirm that your plan still functions as intended with the new cast of people involved.',
                  color: 'amber',
                },
                {
                  trigger: 'Significant change in assets',
                  action: 'If your estate has grown to approach the Illinois estate tax threshold ($4 million as of 2026), or if you have acquired real estate, a business interest, or other significant assets, your plan may need restructuring. Illinois has its own estate tax separate from the federal estate tax.',
                  color: 'purple',
                },
                {
                  trigger: 'Moving to or from Illinois',
                  action: 'Estate planning laws differ by state. If you have moved to Illinois from another state, or are planning to leave, have your documents reviewed by an Illinois attorney. Powers of attorney, trust requirements, and estate tax rules all vary.',
                  color: 'blue',
                },
                {
                  trigger: 'Changes in Illinois or federal law',
                  action: 'Tax law changes — including adjustments to the federal estate tax exemption or Illinois estate tax thresholds — may require plan restructuring. Tax law changed significantly in recent years, and further changes are anticipated. Keep in touch with your attorney to stay current.',
                  color: 'amber',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-5 ${
                    item.color === 'blue'
                      ? 'bg-blue-50 border-blue-200'
                      : item.color === 'green'
                      ? 'bg-green-50 border-green-200'
                      : item.color === 'amber'
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-purple-50 border-purple-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <RefreshCw
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        item.color === 'blue'
                          ? 'text-blue-600'
                          : item.color === 'green'
                          ? 'text-green-600'
                          : item.color === 'amber'
                          ? 'text-amber-600'
                          : 'text-purple-600'
                      }`}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1 font-['Plus_Jakarta_Sans']">{item.trigger}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For a detailed look at how life transitions affect your estate plan, see our guide on{' '}
              <Link href="/blog/how-to-update-estate-plan-after-divorce-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">how to update your estate plan after divorce in Illinois</Link> and our post on{' '}
              <Link href="/blog/why-review-estate-plan-every-few-years/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">why you should review your estate plan every few years</Link>.
            </p>

            {/* 7. FAQ */}
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

            {/* 8. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Use this checklist as a starting point. Work through each section and note which items you have covered and which are gaps. If you are starting from scratch, the most important first step is to schedule a consultation with an Illinois estate planning attorney who can help you determine which documents and structures are right for your situation. If you have an existing plan, the most valuable step is to review it — particularly your beneficiary designations, which are often the first thing to become outdated.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law helps Chicago-area families build complete, integrated estate plans — a{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">will</Link> or{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable trust</Link>, both{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">powers of attorney</Link>, guidance on beneficiary designations, and coordination of asset titling — all at transparent flat-fee pricing. See our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> to learn more, or{' '}
              <Link href="/book-consultation/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">book a free consultation</Link> to get started.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Get Your Illinois Estate Plan in Place</h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps families across Chicagoland check every box on this list — from drafting core documents to guiding you through funding your trust and updating beneficiary designations. Book a free consultation to get started.
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
                  Wills &amp; Estate Planning Services
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
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/why-review-estate-plan-every-few-years/',
                    label: 'Why You Should Review Your Estate Plan Every Few Years',
                  },
                  {
                    href: '/blog/illinois-advance-directive-living-will/',
                    label: 'Illinois Advance Directive & Living Will Guide',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law is complex and fact-specific — the right estate plan for you depends on your individual circumstances, assets, family structure, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Check Every Box on Your Illinois Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get a complete, integrated estate plan — built to work the way you intend it to.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-checklist-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-checklist-illinois/')}&text=${encodeURIComponent('Illinois Estate Planning Checklist: Everything You Need in 2026')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-checklist-illinois/')}`}
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
