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
  Heart,
  Shield,
  Users,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'estate-planning-for-young-families-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'why-now', title: 'Why Young Families Cannot Afford to Wait', level: 2, numeration: '2' },
    {
      id: 'core-documents',
      title: 'The Core Documents Every Illinois Parent Needs',
      level: 2,
      numeration: '3',
      children: [
        { id: 'will', title: 'Last Will and Testament', level: 3, numeration: '3.1' },
        { id: 'trust', title: 'Revocable Living Trust', level: 3, numeration: '3.2' },
        { id: 'powers-of-attorney', title: 'Powers of Attorney', level: 3, numeration: '3.3' },
      ],
    },
    {
      id: 'naming-guardian',
      title: 'Naming a Guardian for Your Minor Children in Illinois',
      level: 2,
      numeration: '4',
      children: [
        { id: 'who-can-serve', title: 'Who Can Serve as Guardian', level: 3, numeration: '4.1' },
        { id: 'backup-guardians', title: 'Naming Backup Guardians', level: 3, numeration: '4.2' },
      ],
    },
    { id: 'life-insurance', title: 'Life Insurance and Beneficiary Designations', level: 2, numeration: '5' },
    { id: 'children-and-trusts', title: 'Protecting Inheritances for Minor Children', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const faqs = [
    {
      question: 'What happens to my children if I die without a will in Illinois?',
      answer:
        "If you die without a will in Illinois, the state's intestacy laws (755 ILCS 5/2-1) determine who inherits your assets — which may not be who you would have chosen. More critically for parents, there is no legally named guardian in your documents, so the court must appoint one. This creates uncertainty, potential family disputes, and a process that can take months before your children are formally placed with a caregiver. The person who steps in temporarily may not be the person you would have chosen. A will lets you name a guardian and an alternate so the court almost always defers to your preference, eliminating the uncertainty.",
    },
    {
      question: 'At what age should I create an estate plan in Illinois?',
      answer:
        "The honest answer: the moment you have children, a spouse, or meaningful assets, you should have an estate plan. For Illinois parents, the trigger is almost always the birth of the first child. At that point you need at minimum a will that names a guardian, a healthcare power of attorney, a property power of attorney, and updated beneficiary designations on life insurance and retirement accounts. These documents can typically be completed in one or two meetings with an attorney. Waiting 'until we accumulate more assets' is a common mistake — the most valuable purpose of an estate plan for young families is not protecting wealth, it is protecting your children.",
    },
    {
      question: 'Can I leave money directly to my minor children in my will?',
      answer:
        'You can name minor children as beneficiaries in your will, but Illinois law does not allow minors to manage inherited property directly. If a child under 18 inherits assets without a trust in place, the court will appoint a property guardian or conservator to manage the money until the child reaches 18 — at which point they receive everything outright, with no restrictions. Many parents do not want an 18-year-old to receive a large sum all at once. A testamentary trust in your will, or a revocable living trust established during your lifetime, lets you control the age and conditions under which your children receive their inheritance — for example, a portion at 25, the balance at 30.',
    },
    {
      question: 'Do both spouses need separate estate planning documents in Illinois?',
      answer:
        "Yes. While many couples use 'mirror' or 'reciprocal' estate plans — where each spouse's documents largely mirror the other's — each spouse needs their own will, healthcare power of attorney, and property power of attorney. These are individual legal documents that govern each person's own assets and healthcare decisions. Joint documents do not exist under Illinois law for these purposes. For a revocable living trust, married couples in Illinois often create a single joint trust or two coordinated individual trusts, depending on their asset structure and planning goals. An attorney can explain which approach makes more sense for your situation.",
    },
    {
      question: 'What is the difference between a healthcare power of attorney and a living will in Illinois?',
      answer:
        "In Illinois, a healthcare power of attorney (also called a healthcare proxy or patient advocate designation) is a document in which you name a trusted person to make medical decisions on your behalf if you are incapacitated. A living will (sometimes called an advance directive) is a separate document stating your wishes about end-of-life care — for example, whether you want life-sustaining treatment continued if you are in an irreversible coma. Illinois law recognizes both documents. For young families, the healthcare power of attorney is typically the more critical document, because it covers a broader range of medical decisions — not just end-of-life situations. A complete estate plan for Illinois parents includes both.",
    },
    {
      question: 'How much does estate planning cost for a young family in Illinois?',
      answer:
        "The cost varies by attorney and the complexity of your plan. A basic estate plan for a young family in Illinois — typically including a will for each spouse, a healthcare power of attorney for each spouse, and a property power of attorney for each spouse — commonly ranges from $800 to $2,000 for a flat-fee package. Adding a revocable living trust (which is often recommended for families with real estate or minor children) adds to the cost but also provides significant probate-avoidance and asset-protection benefits. Illinois Estate Law uses a 100% flat-fee pricing model so you always know exactly what you will pay before the engagement begins. See our services and pricing page for current rates.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Estate Planning for Young Families in Illinois: A Complete Guide for New Parents',
    description:
      'Illinois parents: learn what estate planning documents you need, how to name a guardian for your children, how to protect inherited assets for minors, and how to get started.',
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
    datePublished: '2026-11-04',
    dateModified: '2026-11-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/estate-planning-for-young-families-illinois/',
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
                Estate Planning for Young Families in Illinois: A Complete Guide for New Parents
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Having a child changes everything — including your legal obligations to them. Here is what Illinois parents need to know about guardianship, wills, trusts, life insurance, and powers of attorney to protect their family if the unexpected happens.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>November 4, 2026</time>
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
                <Heart className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    For Illinois parents, estate planning is not primarily about wealth — it is about making sure the right person raises your children and that the right assets reach them at the right time.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    A complete estate plan for a young Illinois family includes a will (naming a guardian for minor children), a revocable living trust (managing and protecting assets for children), powers of attorney (covering incapacity during your lifetime), and updated beneficiary designations on life insurance and retirement accounts. Without these documents, the state makes the decisions — and those decisions may be very different from what you would choose.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide walks through each component, explains what Illinois law requires, and shows you how to build a plan that actually protects your family.
                  </p>
                </div>
              </div>
            </div>

            {/* At a Glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Young Family Estate Plan: At a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Names a guardian for minor children and directs your assets', type: 'Will', color: 'blue' },
                  { label: 'Protects inherited assets; controls the age children receive funds', type: 'Living Trust', color: 'amber' },
                  { label: 'Names a trusted person to act for you during incapacity', type: 'Powers of Attorney', color: 'green' },
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

            {/* 2. Why Now */}
            <h2 id="why-now" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Young Families Cannot Afford to Wait
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Most young parents in Illinois assume estate planning is something you do &ldquo;eventually&rdquo; — once you own a home, once you have more savings, once things settle down. The problem is that the most catastrophic scenarios that estate planning protects against do not wait for a convenient time.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you die without a will in Illinois, three things happen immediately. First, the state&apos;s intestacy laws (755 ILCS 5/2-1) determine who inherits your assets — which may not be your intended beneficiaries. Second, there is no legally named guardian for your children, so the Circuit Court must appoint one — a process that takes time, costs money, and may produce a result you would not have chosen. Third, any assets your minor children inherit are placed under court-supervised conservatorship until they turn 18, at which point they receive everything with no strings attached.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              None of those outcomes requires you to be wealthy, to own significant property, or to have a complicated financial situation. They apply to virtually every Illinois parent who dies without a plan. Creating a basic estate plan — will, powers of attorney, and updated beneficiary designations — typically takes two to three hours spread across two meetings with an attorney. It is one of the most effective things you can do for your family.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">What happens if both parents die without a plan</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    When both parents die without naming a guardian, Illinois courts must hold a hearing to determine who will raise the children. Family members may disagree — a scenario that can produce prolonged conflict, legal expenses, and genuine uncertainty about where your children will live while the dispute is pending. A will that names a guardian resolves this in advance. Courts in Illinois give strong weight to a parent&apos;s expressed preference.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Core Documents */}
            <h2 id="core-documents" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Core Documents Every Illinois Parent Needs
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A complete estate plan for a young Illinois family typically includes five documents: a will for each parent, a healthcare power of attorney for each parent, a property power of attorney for each parent, and — depending on your assets and goals — one or two revocable living trusts. Each document serves a distinct purpose. None of them substitutes for the others.
            </p>

            <h3 id="will" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Last Will and Testament
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For Illinois parents with minor children, the most important function of a{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                last will and testament
              </Link>{' '}
              is not asset distribution — it is <strong>naming a guardian</strong>. Your will is the only legal document in which you can name the person you want to raise your children if you and your spouse both die before they reach adulthood. Without a will that names a guardian, an Illinois court decides who takes custody — and may not choose the same person you would have.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Your will also directs how your probate assets — assets held in your name alone, without a beneficiary designation — are distributed. For young families, this typically includes personal property, vehicles, bank accounts, and any real estate not yet transferred into a trust. The will can also create a testamentary trust that holds assets for your children, controlling when and how they receive their inheritance.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                What a Valid Illinois Will Requires
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'You must be at least 18 years old',
                  'The will must be in writing (Illinois does not recognize oral wills)',
                  'You must sign the will in the presence of two witnesses',
                  'The two witnesses must sign in your presence',
                  'Witnesses should not be named beneficiaries in the will',
                  'Notarization is not required but a self-proving affidavit simplifies probate',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <h3 id="trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Revocable Living Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trust
              </Link>{' '}
              is a legal arrangement you create during your lifetime in which you transfer ownership of your assets to the trust, naming yourself as the initial trustee. During your lifetime you retain full control. When you die or become incapacitated, your named successor trustee steps in automatically — with no court involvement, no probate, and no public record.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For young Illinois families, the living trust serves two critical purposes beyond probate avoidance. First, it eliminates the possibility of minor children receiving large sums outright at age 18 — the trust can specify that distributions happen at ages 25, 30, or on specific milestones. Second, it ensures that the successor trustee can begin managing and distributing assets immediately after your death, without waiting months for a probate court to open and close an estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A trust is typically paired with a <strong>pour-over will</strong> — a simple will that captures any assets left outside the trust at your death and &ldquo;pours&rdquo; them into it. This catches stray assets and ensures that everything eventually lands under the trust&apos;s terms.
            </p>

            <h3 id="powers-of-attorney" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Powers of Attorney
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Your will and trust take effect only at death — but incapacity during your lifetime is statistically more likely than dying young. A{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                durable power of attorney for property
              </Link>{' '}
              names a person to manage your finances, pay bills, and handle legal matters if you become incapacitated. A <strong>healthcare power of attorney</strong> names a person to make medical decisions on your behalf. Without these documents, your spouse or family members may need to petition the court for guardianship over you — an expensive, time-consuming process that can be entirely avoided with a properly drafted power of attorney.
            </p>

            {/* 4. Naming a Guardian */}
            <h2 id="naming-guardian" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Naming a Guardian for Your Minor Children in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Choosing a guardian is the most emotionally difficult part of estate planning for most parents — and also the most important. Under Illinois law (755 ILCS 5/11-5), when both parents of a minor child are deceased, the Circuit Court appoints a guardian of the person, who has custody of and responsibility for the child&apos;s daily care. While the court is not legally bound by a parent&apos;s preference, Illinois courts consistently give strong deference to the guardian named in a deceased parent&apos;s will.
            </p>

            <h3 id="who-can-serve" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Who Can Serve as Guardian
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Almost any adult can serve as guardian for your children — a sibling, a parent, a close friend, or another trusted relative. Illinois law disqualifies individuals who are minors themselves, those who have been convicted of certain crimes, or those whom the court determines are not in the child&apos;s best interest. Geographic location is not a legal barrier, though choosing someone who lives nearby (or who is willing to relocate) minimizes disruption to your children&apos;s schooling and relationships.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <Users className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">What to Look for in a Guardian</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Shares your values and parenting philosophy',
                    'Has a stable home and family environment',
                    'Is willing and committed — confirm before naming them',
                    "Is young enough to serve through your children's adulthood",
                    'Has financial stability and good judgment',
                    'Has an existing relationship with your children',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <Shield className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Guardian vs. Trustee: Keep Them Separate</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'The guardian raises your children day-to-day',
                    'The trustee manages the money for their benefit',
                    'Keeping roles separate reduces conflicts of interest',
                    'The guardian may request funds from the trustee',
                    'The trustee ensures funds are used for the children',
                    'Two roles can be the same person if you trust them fully',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h3 id="backup-guardians" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Naming Backup Guardians
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Every Illinois will that names a guardian should also name at least one <strong>successor guardian</strong> — a backup in case the primary guardian predeceases you, becomes incapacitated, or is otherwise unable or unwilling to serve. If you name only one guardian and that person is unavailable, you are right back where you started: a court deciding who raises your children without guidance from you.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If your primary and backup guardians are geographically separated — for example, one in Chicago and one in another state — consider including a letter of guidance in your estate plan explaining your reasoning and your wishes for how your children should be raised. This letter is not legally binding, but it gives the guardian context and helps them make decisions aligned with your values.
            </p>

            {/* 5. Life Insurance */}
            <h2 id="life-insurance" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Life Insurance and Beneficiary Designations
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For most young Illinois families, life insurance is the financial foundation of the estate plan. It creates an immediate pool of assets to support children and surviving spouses when the earning power of a parent is suddenly gone — regardless of how much wealth the family has accumulated at the time of death.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The critical planning point: <strong>never name a minor child as a direct beneficiary</strong> of a life insurance policy or retirement account. Illinois law does not allow minors to receive life insurance proceeds directly. If you name your two-year-old as a beneficiary, the insurance company will refuse to pay the proceeds until the court appoints a property guardian or conservator to receive the funds — a process that can delay payment for months and ultimately produces a lump-sum distribution when your child turns 18.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  label: 'Name your trust as the beneficiary',
                  detail:
                    'If you have a revocable living trust, naming the trust as the beneficiary of your life insurance and retirement accounts ensures that proceeds flow into the trust — where the trustee can manage and distribute them according to your instructions, over time, as the children grow.',
                },
                {
                  label: 'Use a testamentary trust in your will as an alternative',
                  detail:
                    'If you have a simple will (not a living trust), you can include a testamentary trust provision that holds the proceeds for your children. The trust comes into existence at your death through the probate process and governs how the funds are managed and distributed.',
                },
                {
                  label: 'Review beneficiary designations annually',
                  detail:
                    'Life insurance policies and retirement accounts (401(k), IRA, 403(b)) pass by beneficiary designation — completely outside of your will and trust. If the designation is outdated or names a deceased person, the proceeds may go nowhere you intended. Review them every year and after any major life event.',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">{item.label}:</strong> {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Protect Your Children With a Complete Illinois Estate Plan
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area parents create clear, affordable estate plans — naming the right guardian, the right trustee, and putting every document in place. Flat-fee pricing so you always know what you&apos;ll pay before we start.
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

            {/* 6. Protecting Inheritances for Minor Children */}
            <h2 id="children-and-trusts" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Protecting Inheritances for Minor Children
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most overlooked risks in estate planning for young families is the problem of an 18-year-old receiving a large inheritance all at once. Without a trust in place, any assets your minor children inherit — whether through your will, a life insurance policy, or a retirement account — are held by a court-supervised conservator until the child turns 18, then distributed outright with no conditions or restrictions.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An 18-year-old who inherits $300,000 may make financial decisions you would not have sanctioned. A well-drafted trust addresses this directly. You can specify, for example:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Staggered distributions',
                  body: 'Common trust provisions for minor beneficiaries include a partial distribution at age 25 (for education, housing, or other expenses), a larger distribution at 30, and the balance at 35. This spreads the inheritance across the period of young adulthood when financial decisions are most consequential.',
                  color: 'blue',
                },
                {
                  title: 'Discretionary distributions before the final age',
                  body: 'The trustee may also be granted discretion to make distributions before the specified ages for health, education, maintenance, and support (the "HEMS" standard). This covers emergencies or significant opportunities — medical expenses, graduate school, a down payment on a first home — without giving the child unrestricted access to the full balance.',
                  color: 'blue',
                },
                {
                  title: 'Spendthrift protections',
                  body: "A spendthrift clause in the trust prevents your children from pledging or assigning their future trust interest to a creditor. If a child faces a lawsuit or accumulates debt, creditors generally cannot reach the trust assets until they are actually distributed. This protection disappears once assets leave the trust.",
                  color: 'amber',
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

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Will vs. Trust for Illinois Families with Minor Children
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Will Only</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Will + Living Trust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Goes through probate?', 'Yes', 'No (for trust assets)'],
                      [
                        'Minor children receive assets at 18?',
                        'Yes, unless will includes testamentary trust',
                        'No — trust controls the age and terms',
                      ],
                      [
                        'Assets available immediately after death?',
                        'No — probate takes 9–18 months',
                        'Yes — trustee can act immediately',
                      ],
                      ['Privacy', 'Public court record', 'Private — not filed with any court'],
                      ['Can name a guardian for children?', 'Yes', 'Yes (in the pour-over will)'],
                      ['Covers incapacity during lifetime?', 'No — wills only work at death', 'Yes — successor trustee takes over'],
                      [
                        'Cost to create',
                        'Lower',
                        'Somewhat higher, but significant long-term benefits',
                      ],
                    ].map(([factor, will, trust], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{will}</td>
                        <td className="py-3 px-4 text-gray-600">{trust}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For most young Illinois families who own a home — or who expect to in the near future — a revocable living trust is the stronger choice. It eliminates probate, ensures immediate access to assets for the surviving spouse or guardian, and gives you complete control over when and how your children receive their inheritance. See our guide on{' '}
              <Link
                href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                revocable trust advantages and disadvantages in Illinois
              </Link>{' '}
              to understand the tradeoffs in detail.
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
              If you have children and do not yet have a will that names a guardian, start there. It is the single most important document for any Illinois parent. Add powers of attorney so that your spouse or a trusted person can act for you if you are incapacitated. Then review your life insurance and beneficiary designations to make sure they align with your plan. And if you own real estate or have significant assets, talk to an Illinois estate planning attorney about whether a revocable living trust makes sense for your family.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law helps Chicago-area parents create complete, affordable estate plans — wills,{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts
              </Link>
              ,{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                powers of attorney
              </Link>
              , and guidance on beneficiary designations — all on a flat-fee basis. See our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                services and pricing page
              </Link>{' '}
              for details, or{' '}
              <Link href="/book-consultation/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                book a free consultation
              </Link>{' '}
              to get started.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney for Families
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps parents across the Chicago area create clear, complete estate plans that protect their children — from guardian designation to trust distribution ages. Schedule a free consultation to get started today.
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
                    href: '/blog/guardianship-vs-power-of-attorney-illinois/',
                    label: 'Guardianship vs. Power of Attorney in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/what-is-a-pour-over-will-illinois/',
                    label: 'What Is a Pour-Over Will in Illinois?',
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
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law is complex and fact-specific — the right plan for your family depends on your individual assets, family circumstances, and planning goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Family With an Illinois Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a complete, legally sound estate plan in place for your family — guardian named, children protected, every document in order.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-for-young-families-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-for-young-families-illinois/')}&text=${encodeURIComponent('Estate Planning for Young Families in Illinois — what new parents need to know about wills, trusts, and guardians')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/estate-planning-for-young-families-illinois/')}`}
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
