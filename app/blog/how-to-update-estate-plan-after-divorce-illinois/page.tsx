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
  RefreshCw,
  Shield,
  Users,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-update-estate-plan-after-divorce-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'what-illinois-law-does-automatically',
      title: 'What Illinois Law Does Automatically After Divorce',
      level: 2,
      numeration: '2',
      children: [
        { id: 'revocation-by-divorce', title: 'The Revocation-by-Divorce Rule', level: 3, numeration: '2.1' },
        { id: 'what-it-does-not-revoke', title: 'What It Does NOT Automatically Revoke', level: 3, numeration: '2.2' },
      ],
    },
    {
      id: 'documents-to-update',
      title: 'Documents to Update Immediately',
      level: 2,
      numeration: '3',
      children: [
        { id: 'your-will', title: 'Your Will', level: 3, numeration: '3.1' },
        { id: 'revocable-living-trust', title: 'Your Revocable Living Trust', level: 3, numeration: '3.2' },
        { id: 'financial-power-of-attorney', title: 'Financial Power of Attorney', level: 3, numeration: '3.3' },
        { id: 'healthcare-documents', title: 'Healthcare Power of Attorney & Advance Directive', level: 3, numeration: '3.4' },
      ],
    },
    { id: 'beneficiary-designations', title: 'Beneficiary Designations — Often the Biggest Mistake', level: 2, numeration: '4' },
    { id: 'property-and-title', title: 'Property Title and Real Estate After Divorce', level: 2, numeration: '5' },
    { id: 'blended-family-planning', title: 'Planning for a Blended or Reconstituted Family', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const faqs = [
    {
      question: 'Does my divorce automatically update my will in Illinois?',
      answer:
        'Partially. Under 755 ILCS 5/4-7, a final Illinois divorce judgment revokes all bequests and fiduciary appointments in favor of your former spouse. So if your will left everything to your ex-spouse, those provisions are treated as if your ex predeceased you. However, the rest of your will remains intact — which may mean your estate passes to unintended beneficiaries if no alternate plan was in place. Illinois law does not create a new, updated will for you; it only nullifies the ex-spouse provisions. You still need to execute a new will to reflect your current wishes.',
    },
    {
      question: 'What happens to my revocable living trust after divorce in Illinois?',
      answer:
        "Unlike a will, a revocable living trust is NOT automatically modified by an Illinois divorce. The 755 ILCS 5/4-7 revocation-by-divorce rule applies to wills — it does not extend to trusts under current Illinois law. This means if your trust still names your ex-spouse as successor trustee or a beneficiary, those provisions remain legally valid even after your divorce is finalized. Your ex-spouse could still inherit trust assets or take control of the trust as successor trustee. Updating a revocable living trust after divorce is not optional — it is urgent.",
    },
    {
      question: 'Can my ex-spouse still receive my life insurance after our Illinois divorce?',
      answer:
        "Yes — if your ex-spouse is still the named beneficiary on your life insurance policy, they will receive the proceeds regardless of what your will or divorce decree says. Illinois's revocation-by-divorce statute does not automatically remove a former spouse as a beneficiary on life insurance, retirement accounts, annuities, or payable-on-death accounts. Federal law governs most retirement accounts (like 401(k)s and IRAs), and federal courts have consistently held that the named beneficiary controls — not a divorce decree. Updating beneficiary designations on every financial account is one of the most critical steps after an Illinois divorce.",
    },
    {
      question: 'How soon after my Illinois divorce should I update my estate plan?',
      answer:
        "Ideally, you should start the process before your divorce is finalized — particularly by revoking powers of attorney that name your spouse. You legally cannot revoke most powers of attorney during the divorce without court permission if they are subject to a standing order, so consult your estate planning attorney about what steps are possible during the proceedings. Once the divorce is final, update all documents as soon as possible. There is no grace period: if you die the day after your divorce becomes final and your trust still names your ex-spouse as successor trustee, they step into that role. Don't wait.",
    },
    {
      question: 'Do I need to update my estate plan if the divorce settlement already divided our assets?',
      answer:
        "Yes. The divorce decree divides the marital estate — it does not update your estate planning documents. A marital settlement agreement may give you full ownership of the house, but if your revocable living trust still lists your ex-spouse as a beneficiary or successor trustee, the trust document controls what happens to that house after your death. The decree and the estate plan are separate legal instruments. After every Illinois divorce, all estate planning documents — will, trust, powers of attorney, advance directive, and beneficiary designations — must be reviewed and updated independently of what the divorce settlement says.",
    },
    {
      question: 'What should I do about my powers of attorney during an Illinois divorce?',
      answer:
        "This is one of the most time-sensitive issues in divorce-related estate planning. If your spouse holds your financial or healthcare power of attorney, you may want to revoke it as soon as possible — before the divorce is final. In Illinois, you can revoke a power of attorney at any time in writing, and many people do so the moment they decide to separate. However, if there is a pending divorce proceeding and the court has issued standing orders governing financial conduct, consult your divorce attorney before revoking a financial POA to make sure revocation does not create an issue in the case. In most situations, revoking and replacing these documents immediately is the right move.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Update Your Estate Plan After Divorce in Illinois',
    description:
      'A step-by-step guide to updating your will, trust, powers of attorney, and beneficiary designations after an Illinois divorce — and what the law automatically changes vs. what it does not.',
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
    datePublished: '2026-10-07',
    dateModified: '2026-10-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-update-estate-plan-after-divorce-illinois/',
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
                How to Update Your Estate Plan After Divorce in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                Illinois law automatically revokes some provisions in your will when a divorce is finalized — but it does not update your trust, your beneficiary designations, or your powers of attorney. Here is exactly what changes automatically and what you must fix yourself.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>October 7, 2026</time>
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
                <RefreshCw className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Divorce is one of the most disruptive events an estate plan can experience — and Illinois law only cleans up part of the mess automatically.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Under 755 ILCS 5/4-7, a final Illinois divorce judgment revokes bequests and fiduciary appointments to a former spouse in a will. But that statute does not reach your revocable living trust, your financial and healthcare powers of attorney, your life insurance beneficiary designations, or your retirement account designations. All of those can still direct assets to your ex-spouse unless you change them yourself.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide walks through every document you need to review and update — in the order you should address them — so nothing slips through after your Illinois divorce is finalized.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Post-Divorce Estate Plan Checklist at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Will: ex-spouse provisions revoked by Illinois law (755 ILCS 5/4-7)', type: 'Auto-Updated', color: 'green' },
                  { label: 'Trust, POAs, beneficiary designations: NOT automatically changed', type: 'Must Update Yourself', color: 'amber' },
                  { label: 'Failure to update can send assets to your ex-spouse', type: 'Serious Risk', color: 'blue' },
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

            {/* 2. What Illinois Law Does Automatically */}
            <h2 id="what-illinois-law-does-automatically" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Illinois Law Does Automatically After Divorce
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Many Illinois residents assume that a divorce decree automatically wipes their former spouse from their entire estate plan. It does not — but it does provide some protection for your will. Understanding exactly what the statute covers (and what it does not) is the first step to knowing where you are exposed.
            </p>

            <h3 id="revocation-by-divorce" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Revocation-by-Divorce Rule
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Section 4-7 of the Illinois Probate Act (755 ILCS 5/4-7) provides that when an Illinois marriage is dissolved by a final judgment of divorce, all provisions in the will that benefit the former spouse — including bequests, devises, and appointments to fiduciary roles such as executor or guardian — are revoked automatically. The will is read as if the former spouse had died before the testator.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This means, for example, that if your will says &ldquo;I leave my entire estate to my spouse, John Smith&rdquo; and John becomes your former spouse, he will not inherit under that provision. The bequest is treated as void, and the estate passes to whatever alternate beneficiary you named — or, if there is none, under Illinois intestacy rules to your closest heirs.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    What 755 ILCS 5/4-7 Automatically Revokes in Your Will
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        rule: 'Bequests to your former spouse',
                        detail: 'Any property left directly to your ex-spouse — cash, real estate, personal property, or residual estate — is treated as revoked.',
                      },
                      {
                        rule: 'Appointment of your former spouse as executor',
                        detail: 'If your ex-spouse was named executor (personal representative) of your estate, that appointment is revoked. A successor executor takes over, or the court appoints one.',
                      },
                      {
                        rule: 'Appointment of your former spouse as guardian',
                        detail: 'Any nomination of your former spouse as guardian of your children\'s persons or estates is revoked — though the family court may still appoint them if it is in the children\'s best interest.',
                      },
                      {
                        rule: 'Appointment of your former spouse as trustee under the will',
                        detail: 'If your will created a testamentary trust and named your ex-spouse as trustee, that appointment is revoked.',
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

            <h3 id="what-it-does-not-revoke" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              What It Does NOT Automatically Revoke
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The revocation-by-divorce rule is narrower than most people realize. It applies only to <strong>wills</strong> — not to every document in your estate plan. The following are <em>not</em> automatically updated by an Illinois divorce:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Revocable living trusts',
                  body: 'Illinois law does not extend the revocation-by-divorce rule to revocable living trusts. If your trust names your former spouse as successor trustee, co-trustee, or beneficiary, those provisions remain fully valid and enforceable after your divorce. This is one of the most dangerous gaps in post-divorce estate planning.',
                  color: 'amber',
                },
                {
                  title: 'Beneficiary designations on financial accounts',
                  body: 'Life insurance policies, IRAs, 401(k)s, 403(b)s, annuities, payable-on-death bank accounts, and transfer-on-death brokerage accounts are governed by the account contract and, for retirement accounts, federal law (ERISA). Illinois divorce law does not override these. Your former spouse remains the beneficiary until you change the form with the institution.',
                  color: 'amber',
                },
                {
                  title: 'Powers of attorney',
                  body: 'A financial power of attorney or healthcare power of attorney that names your former spouse as your agent does not automatically terminate when your divorce is finalized. Your ex could still have legal authority to manage your finances or make medical decisions for you until you revoke and replace these documents.',
                  color: 'amber',
                },
                {
                  title: 'Healthcare directives (living wills)',
                  body: 'An advance directive or living will that references your former spouse as a surrogate or agent for healthcare decisions is also not automatically revoked. Illinois\'s Healthcare Surrogate Act may provide some protection in certain situations, but you should not rely on it — update your documents explicitly.',
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

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Do not assume you are protected</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The statutory revocation-by-divorce rule covers only your will. Everything else in your estate plan — your trust, your beneficiary designations, and your powers of attorney — can still send assets to your former spouse or give them decision-making authority over your life and finances. The only way to be protected is to update each document individually.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Documents to Update */}
            <h2 id="documents-to-update" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Documents to Update Immediately
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              After your Illinois divorce is finalized, work through each of the following documents in order of urgency. Powers of attorney are the most time-sensitive because they can give your former spouse immediate authority over your life today — not just after your death.
            </p>

            <h3 id="your-will" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Your Will
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Even though Illinois law partially protects you by revoking bequests to your former spouse, relying on this automatic revocation is not a substitute for a properly updated will. There are several reasons to execute a new will promptly after your divorce:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  label: 'Alternate beneficiaries may no longer be appropriate',
                  detail: 'Most wills name an alternate beneficiary — often a parent or sibling — to receive assets if the primary beneficiary (your spouse) is not available. After a divorce, you may want your children, a new partner, or others to inherit instead.',
                },
                {
                  label: 'Your executor should change',
                  detail: 'Even if your ex-spouse\'s appointment as executor is technically revoked, the next-in-line successor may not be who you would choose today. Name a new executor who reflects your current life circumstances.',
                },
                {
                  label: 'Children\'s guardian nominations may need updating',
                  detail: 'Your will likely names a guardian for your minor children if both parents die. After divorce, this nomination may need to reflect new preferences, particularly if your former spouse\'s family circumstances have changed.',
                },
                {
                  label: 'The revocation rule may not apply if a court voids the divorce',
                  detail: 'If your divorce decree is later set aside or vacated for any reason, the revocation of your will provisions may also be undone. A new will removes any ambiguity entirely.',
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

            <h3 id="revocable-living-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Your Revocable Living Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have a <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link>, updating it after divorce is not optional — it is urgent. Unlike your will, Illinois law provides <em>no automatic protection</em> for a trust after divorce. Your former spouse could still be named as:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <AlertCircle className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Risks if Trust Is Not Updated</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Ex-spouse as successor trustee gains control of all trust assets upon your incapacity or death',
                    'Ex-spouse as beneficiary inherits assets from the trust',
                    'Ex-spouse as co-trustee during your lifetime can block your decisions',
                    'Children from your prior marriage may be inadvertently disinherited if trust terms favor ex-spouse',
                    'No court will step in automatically — the trust document controls',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <Shield className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">What to Update in Your Trust</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Remove ex-spouse as successor trustee and name a new one',
                    'Remove ex-spouse as beneficiary and redirect those shares',
                    'Update distribution provisions for children if circumstances changed',
                    'Review co-trustee provisions if your ex held that role',
                    'Confirm a successor trustee is in place — do not leave it blank',
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
              In some cases, amending an existing trust is appropriate. In others — particularly when the trust was heavily structured around the marriage — executing an entirely new trust and transferring your assets into it is cleaner and less likely to produce ambiguity. Your Illinois estate planning attorney can advise on the best approach for your specific trust document.
            </p>

            <h3 id="financial-power-of-attorney" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Financial Power of Attorney
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">financial power of attorney</Link> authorizes your named agent to manage your bank accounts, investments, real estate, and other financial affairs — sometimes immediately, sometimes only upon incapacity, depending on how it is drafted. If your former spouse is still your financial agent under an Illinois power of attorney, they may have access to or control over your finances right now, regardless of the divorce.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Revoking a power of attorney in Illinois requires a written revocation notice delivered to the agent and — for real property — recorded with the county recorder. Simply signing a new power of attorney does not automatically revoke the old one in all contexts, so taking the formal revocation step is important. Once revoked, execute a new financial power of attorney naming someone you currently trust: a parent, sibling, adult child, or close friend.
            </p>

            <h3 id="healthcare-documents" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Healthcare Power of Attorney &amp; Advance Directive
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Your Illinois healthcare power of attorney names a healthcare agent who makes medical decisions on your behalf if you cannot make them yourself. Your advance directive (sometimes called a living will) states your wishes about end-of-life care. If your former spouse holds either role, they retain that authority after divorce unless you formally revoke the document.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Revoking an Illinois healthcare power of attorney requires notifying your agent in writing and informing your healthcare providers. A new healthcare power of attorney should be executed simultaneously so there is no gap in coverage — someone you trust must always be authorized to make medical decisions for you in a crisis.
            </p>

            {/* 4. Beneficiary Designations */}
            <h2 id="beneficiary-designations" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Beneficiary Designations — Often the Biggest Mistake
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Of all the steps in post-divorce estate planning, updating beneficiary designations is the one most often overlooked — and the one with the most catastrophic consequences when missed. Illinois law does not revoke beneficiary designations when you divorce. Federal law governs most retirement accounts and explicitly overrides state divorce decrees. The named beneficiary on a financial account receives the money, period.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The U.S. Supreme Court&apos;s 2009 decision in <em>Kennedy v. Plan Administrator for DuPont Savings &amp; Investment Plan</em> confirmed that ERISA plan documents control over a divorce decree — a surviving ex-spouse named on a 401(k) receives the money even if the divorce settlement awarded the account to someone else. Illinois courts have reached similar conclusions for state-law accounts. <strong>There is no workaround: you must change the form.</strong>
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Accounts Requiring Beneficiary Designation Updates After Divorce
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Life insurance policies (term, whole, universal)',
                  '401(k), 403(b), and other employer-sponsored retirement plans',
                  'Traditional and Roth IRAs',
                  'Annuity contracts',
                  'Payable-on-death (POD) bank and savings accounts',
                  'Transfer-on-death (TOD) brokerage accounts',
                  'Health savings accounts (HSAs)',
                  'Illinois Transfer on Death Instruments (TODIs) for real estate',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For each account, you will need to contact the financial institution, request a beneficiary change form, and submit the completed form — often requiring a notarized signature or medallion stamp. Do not assume your employer will update your 401(k) beneficiary automatically; most plans require you to log into the plan portal and make the change yourself. Confirm with each institution that the change was processed and keep a copy of the confirmation.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Need Help Updating Your Illinois Estate Plan After Divorce?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps individuals across the Chicago area update every document — will, trust, powers of attorney, and beneficiary coordination — into a clean, complete post-divorce estate plan. Flat-fee pricing so you always know what you&apos;ll pay before we start.
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

            {/* 5. Property and Title */}
            <h2 id="property-and-title" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Property Title and Real Estate After Divorce
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When a divorce settlement awards you sole ownership of real estate that was previously titled jointly, you need to ensure the deed reflects your new ownership — and that your estate plan reflects it too. A marital settlement agreement obligates your former spouse to transfer ownership, but it does not automatically change the title. You typically need a new deed (often a quitclaim deed from your former spouse to you) recorded with the county recorder.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Once real estate is in your sole name, think about how you hold title going forward. If you have a revocable living trust, the property should be transferred into the trust to avoid probate. If you do not have a trust, consider whether an Illinois <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Transfer on Death Instrument (TODI)</Link> is appropriate for your home — it allows you to name a beneficiary who receives the property at your death without going through probate.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    If the home was held in joint tenancy with your former spouse
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Joint tenancy carries a right of survivorship — the surviving co-owner inherits the property automatically. If you and your former spouse still hold property in joint tenancy and one of you dies before the deed is updated, the survivor takes the entire property regardless of the divorce decree or your will. This is especially dangerous during the period between separation and final decree. Consult your attorney about severing the joint tenancy into tenancy in common as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Blended Family Planning */}
            <h2 id="blended-family-planning" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Planning for a Blended or Reconstituted Family
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have children from your prior marriage and are considering remarriage or already in a new relationship, post-divorce estate planning becomes more layered. Without a carefully updated estate plan, your children from your first marriage can find themselves with little or nothing if you remarry and predecease your new spouse.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois intestacy law — which governs what happens when someone dies without a valid will — would give your surviving spouse a large share of your estate even if you intended for your children from a prior relationship to inherit. Remarriage also automatically revokes an existing will under Illinois law (755 ILCS 5/4-7(b)), meaning a will executed during or after your first marriage may not reflect your wishes in your new family structure.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Tools for Blended Family Estate Planning in Illinois
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: 'Qualified Terminable Interest Property (QTIP) trust',
                    detail: 'Provides income to a surviving new spouse for life while preserving the principal for your children from a prior marriage.',
                  },
                  {
                    label: 'Revocable living trust with per-stirpes distributions',
                    detail: 'Clearly allocates assets to your children from all relationships and prevents a new spouse from inadvertently disinheriting them.',
                  },
                  {
                    label: 'Prenuptial or postnuptial agreement',
                    detail: 'Establishes what each spouse keeps as separate property and how the marital estate will be divided, protecting children from prior marriages.',
                  },
                  {
                    label: 'Life insurance to equalize inheritances',
                    detail: 'Can be used to leave a comparable amount to children from a prior marriage while leaving other assets to a new spouse.',
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
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Blended family estate planning is one of the most complex areas of Illinois estate law. The decisions made in your post-divorce estate plan — which assets go to which beneficiaries, how a new spouse is provided for, how children from a prior marriage are protected — have profound and lasting effects on your family. This is exactly the situation where working with an experienced <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Illinois estate planning attorney</Link> pays for itself many times over.
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
              Updating your estate plan after an Illinois divorce is not a one-document task. It requires a systematic review of every legal document and financial account that could still direct assets to or give authority to your former spouse. The starting point is almost always the powers of attorney — revoke them first, then work through the trust and will, then tackle beneficiary designations account by account.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law helps clients across the Chicago area create clean, complete post-divorce estate plans — including a new <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">will</Link>, an updated or new <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link>, and new <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">powers of attorney</Link> for both financial and healthcare matters. Our flat-fee pricing means you will always know the cost before we begin. See our <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> for details.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps individuals rebuild their estate plans after divorce — quickly, completely, and at a transparent flat fee. Schedule a free consultation to get started.
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
                    href: '/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/',
                    label: 'What Happens to Your Estate Plan When You Get Divorced',
                  },
                  {
                    href: '/blog/why-review-estate-plan-every-few-years/',
                    label: 'Why You Should Review Your Illinois Estate Plan Every Few Years',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/estate-planning-for-blended-families-in-illinois-8-mistakes-that-break-hearts-and-budgets/',
                    label: 'Estate Planning for Blended Families in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning and divorce law are complex and fact-specific — the appropriate steps after a divorce depend on your individual documents, assets, family circumstances, and planning goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Update Your Illinois Estate Plan After Divorce?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a complete, updated estate plan in place — protecting your assets and your family&apos;s future.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-update-estate-plan-after-divorce-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-update-estate-plan-after-divorce-illinois/')}&text=${encodeURIComponent('How to update your estate plan after divorce in Illinois — what changes automatically and what you must fix yourself')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-update-estate-plan-after-divorce-illinois/')}`}
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
