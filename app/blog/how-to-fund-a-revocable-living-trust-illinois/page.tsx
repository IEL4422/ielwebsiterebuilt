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
  Home,
  Shield,
  CircleX as XCircle,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-fund-a-revocable-living-trust-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-funding', title: 'What Does It Mean to "Fund" a Trust?', level: 2, numeration: '2' },
    { id: 'why-funding-matters', title: 'Why Funding Your Trust Is Critical', level: 2, numeration: '3' },
    {
      id: 'what-to-transfer',
      title: 'What Assets to Transfer Into Your Illinois Trust',
      level: 2,
      numeration: '4',
      children: [
        { id: 'real-estate', title: 'Illinois Real Estate', level: 3, numeration: '4.1' },
        { id: 'bank-accounts', title: 'Bank and Financial Accounts', level: 3, numeration: '4.2' },
        { id: 'investments', title: 'Investment and Brokerage Accounts', level: 3, numeration: '4.3' },
        { id: 'other-assets', title: 'Business Interests and Other Assets', level: 3, numeration: '4.4' },
      ],
    },
    { id: 'what-not-to-transfer', title: 'What NOT to Transfer Into Your Trust', level: 2, numeration: '5' },
    { id: 'beneficiary-designations', title: 'Coordinating Beneficiary Designations', level: 2, numeration: '6' },
    { id: 'pour-over-will', title: 'The Pour-Over Will: Your Safety Net', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Do I need an attorney to fund my revocable living trust in Illinois?',
      answer:
        'For Illinois real estate, you should work with an attorney. Retitling real estate requires recording a new deed that correctly identifies the trust — errors in the trust name, trustee designation, or legal description can cloud your title and create problems for your heirs. For bank and brokerage accounts, you can often retitle accounts directly by visiting the institution with a copy of your trust agreement or a certificate of trust. Even so, having your estate planning attorney review the process ensures nothing is overlooked and that every asset category is handled appropriately.',
    },
    {
      question: 'What happens if I die with assets still outside my trust?',
      answer:
        'Any assets held in your name alone — without a beneficiary designation or other automatic transfer mechanism — that were not transferred into your trust before death will need to go through Illinois probate. A well-drafted pour-over will can capture those assets and direct them into your trust after probate, but the probate process still applies to those stray assets. This is why ongoing trust funding is so important: every time you acquire a new significant asset, you should review whether it belongs in the trust.',
    },
    {
      question: 'Can I transfer my Illinois home into a revocable trust without triggering a mortgage "due on sale" clause?',
      answer:
        "Yes. Federal law — specifically the Garn-St. Germain Depository Institutions Act — prohibits lenders from calling a loan due solely because you transfer your home into a revocable living trust of which you are the beneficiary. Your existing mortgage stays in place and your payment terms do not change. You should notify your lender of the transfer, but they cannot use it as a reason to demand immediate repayment.",
    },
    {
      question: "Does transferring my Illinois home into my trust affect my property tax exemptions?",
      answer:
        "In Illinois, transferring your primary residence into your own revocable living trust should not affect your homeowner's exemption or senior exemption, provided you remain a beneficiary of the trust and continue living in the home. The Illinois Property Tax Code allows trusts to maintain these exemptions under the same conditions as individual owners. That said, you should confirm with your county assessor's office after the transfer to make sure the exemptions remain active on your account.",
    },
    {
      question: 'How do I add new assets to my trust after it is created?',
      answer:
        "For real estate, you record a new deed conveying the property to the trust. For bank and brokerage accounts, you either open new accounts in the trust's name or retitle existing accounts. For personal property, you can execute an assignment of personal property to the trust. Going forward, whenever you acquire significant new assets — an inheritance, a new investment account, a second property — consult your estate planning attorney to determine whether and how to bring the new asset into the trust.",
    },
    {
      question: 'Should I put my IRA or 401(k) into my Illinois revocable trust?',
      answer:
        'Almost never. Transferring an IRA or 401(k) into a trust is treated as a full distribution for income tax purposes — triggering immediate tax on the entire balance, which can result in a massive and unnecessary tax bill. Instead, coordinate your retirement accounts with your trust through beneficiary designations. You can name your trust as a contingent beneficiary in some circumstances — particularly if minor children are involved — but this requires careful planning with an estate planning attorney to avoid adverse tax consequences under the SECURE Act rules for inherited IRAs.',
    },
  ];

  const doNotTransfer = [
    {
      item: 'IRAs, 401(k)s, and other retirement accounts',
      reason:
        'Transferring a retirement account into a trust is treated as a taxable distribution, triggering immediate income tax on the entire balance. Coordinate retirement accounts through beneficiary designations instead.',
    },
    {
      item: 'Vehicles (in most cases)',
      reason:
        'Retitling a car in a trust name can complicate insurance and create inconveniences at the DMV. Most Illinois estate planners recommend handling vehicles through a simple assignment or your pour-over will, not a trust.',
    },
    {
      item: 'Active S-Corporation stock',
      reason:
        'S-Corp shares have restrictions on eligible shareholders. Holding S-Corp stock in a revocable trust requires careful planning to avoid inadvertently terminating the S-Corp tax election. Always consult your attorney before any transfer.',
    },
    {
      item: 'Health Savings Accounts (HSAs)',
      reason:
        'HSAs must be owned by an individual taxpayer. Like retirement accounts, they pass through beneficiary designations — not through a trust.',
    },
    {
      item: 'Certain professional licenses and non-transferable contracts',
      reason:
        'Some professional licenses and business contracts are personal and non-transferable. Before assigning any associated business assets to a trust, review the underlying agreements for transfer restrictions.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Fund a Revocable Living Trust in Illinois: Step-by-Step Guide',
    description:
      'Learn how to fund a revocable living trust in Illinois — which assets to transfer, how to retitle real estate and bank accounts, and how to update beneficiary designations.',
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
    datePublished: '2026-07-08',
    dateModified: '2026-07-08',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-fund-a-revocable-living-trust-illinois/',
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
                  Trusts
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How to Fund a Revocable Living Trust in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A revocable living trust only protects your family if it is funded — meaning your assets have actually been transferred into it. Many Illinois families pay to create a trust, then leave it empty. This guide shows you exactly how to fund yours, asset by asset.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 8, 2026</time>
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
                    An unfunded revocable living trust provides zero protection. Creating the document is step one — funding it is what actually keeps your estate out of probate.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    &ldquo;Funding&rdquo; a trust means retitling your assets into the name of the trust, or naming the trust as beneficiary on accounts that pass by designation. In Illinois, the most important funding step for most families is recording a new deed that transfers real estate into the trust. Financial accounts and investments follow a similar process.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide walks through every major asset category — what to transfer, how to transfer it in Illinois, what to leave outside the trust, and how beneficiary designations and a pour-over will complete the overall picture.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Trust Funding at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Record a new deed to the trust name', type: 'Real Estate', color: 'blue' },
                  { label: 'Retitle at your bank or brokerage', type: 'Financial Accounts', color: 'amber' },
                  { label: 'Use beneficiary designations — do NOT retitle', type: 'IRAs &amp; 401(k)s', color: 'green' },
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
                      dangerouslySetInnerHTML={{ __html: item.type }}
                    />
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Is Funding */}
            <h2 id="what-is-funding" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Does It Mean to &ldquo;Fund&rdquo; a Revocable Living Trust?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When an estate planning attorney drafts a revocable living trust, they create a legal framework — naming you as trustee during your lifetime, designating a successor trustee to step in when you die or become incapacitated, and specifying how assets should be managed and distributed. But the document alone accomplishes nothing. The trust only controls assets that are legally titled in its name.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              <strong>Funding the trust</strong> is the process of changing the ownership of your assets from your individual name to the trust. This typically involves:
            </p>

            <div className="space-y-3 my-6">
              {[
                'Recording a new deed that transfers Illinois real estate into the trust',
                'Retitling bank accounts, savings accounts, and CDs at your financial institution',
                'Retitling non-retirement investment and brokerage accounts with your broker',
                'Naming the trust as beneficiary on accounts where appropriate (life insurance, some annuities)',
                'Executing a written Assignment of Personal Property to transfer tangible personal property',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When retitling assets, the trust&apos;s name is used for ownership purposes — something like:{' '}
              <em>&ldquo;John Smith and Jane Smith, as Co-Trustees of the Smith Family Revocable Living Trust dated January 1, 2025, and any amendments thereto.&rdquo;</em>{' '}
              Your attorney will confirm the exact name to use when retitling each asset.
            </p>

            {/* 3. Why Funding Matters */}
            <h2 id="why-funding-matters" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why Funding Your Trust Is Critical
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is the hard truth: an unfunded revocable living trust is essentially worthless as a probate-avoidance tool. If you die with assets still titled in your personal name and no automatic transfer mechanism — no beneficiary designation, no joint tenancy, no Transfer-on-Death Instrument — those assets will be subject to Illinois probate, regardless of what your trust document says.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The most common trust mistake in Illinois</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Many Illinois families pay to have a revocable living trust drafted, sign the document at the attorney&apos;s office — and then never complete the funding steps. Years later, when the trustmaker dies or becomes incapacitated, the family discovers the trust holds nothing. Their home and bank accounts are still titled in the deceased&apos;s name, forcing the estate through the very probate process the trust was meant to prevent. Funding is not optional; it is the whole point.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A properly funded revocable living trust delivers powerful benefits. Your successor trustee can step in immediately at your death or incapacity — no court petition, no Letters of Office, no mandatory waiting period. Assets pass to your beneficiaries privately, without the public court record that comes with Illinois probate. And if you become incapacitated, your successor trustee can manage your affairs without the expense and delay of court-supervised guardianship.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              None of that happens automatically. It all depends on whether your assets are actually in the trust. The Illinois Probate Act (755 ILCS 5) governs assets in your individual name. Assets in your trust are governed entirely by the Illinois Trust Code (760 ILCS 3) — a completely different and far more flexible framework that keeps everything private and out of court.
            </p>

            {/* 4. What to Transfer */}
            <h2 id="what-to-transfer" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Assets to Transfer Into Your Illinois Living Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Not every asset belongs in a trust, but most significant assets do. Here is how to handle each major category in Illinois.
            </p>

            {/* 4.1 Real Estate */}
            <h3 id="real-estate" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Illinois Real Estate
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Real estate is typically the single most valuable asset in an Illinois estate — and the most important to transfer into your trust. For many families, keeping the home out of probate is the primary reason to create a revocable living trust in the first place. Without it, even a straightforward estate is forced into a 9–18 month probate process in Cook County or elsewhere.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <Home className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    How to Transfer Illinois Real Estate Into Your Trust
                  </h4>
                  <ol className="space-y-4">
                    {[
                      'Your estate planning attorney prepares a new deed conveying the property from you personally to yourself as trustee — e.g., "John Smith, Trustee of the John Smith Revocable Living Trust dated January 1, 2025."',
                      'The deed is executed and notarized in accordance with Illinois recording statutes.',
                      'The deed is recorded with the Recorder of Deeds in the county where the property is located. For Chicago and most suburban properties, that is the Cook County Recorder of Deeds.',
                      "Notify your homeowner's insurance company that the property is now held in trust, and update the named insured if required by your policy.",
                      'Notify your mortgage lender. Federal law (the Garn-St. Germain Depository Institutions Act) prevents the lender from calling your loan due simply because you transferred the property to your own revocable trust.',
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                        <span className="bg-[#33414E] text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-5 p-4 bg-blue-50 rounded-lg text-xs text-gray-600 font-['Plus_Jakarta_Sans'] leading-relaxed">
                    <strong>Transfer tax note:</strong> Under Illinois law, transfers of real estate into your own revocable trust are exempt from Illinois Real Estate Transfer Tax. Your attorney will mark the appropriate exemption on the PTAX-203 form at the time of recording — no transfer tax is owed.
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you own investment properties, vacation homes, or vacant land in Illinois, each parcel requires its own separate deed. Out-of-state real estate must be transferred using a deed that complies with that state&apos;s law — typically requiring an attorney licensed in that state, or coordination between your Illinois attorney and local counsel.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An alternative for Illinois homeowners who want a simpler approach — without the ongoing trustee responsibilities — is a{' '}
              <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Transfer-on-Death Instrument (TODI)
              </Link>
              . A TODI names a beneficiary who automatically inherits the property at death without probate, without transferring ownership now, and without requiring a trust. However, a TODI does not provide incapacity planning — one of the key advantages of a fully funded trust.
            </p>

            {/* 4.2 Bank Accounts */}
            <h3 id="bank-accounts" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Bank and Financial Accounts
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Checking accounts, savings accounts, money market accounts, and certificates of deposit held in your name alone are subject to Illinois probate at death if no beneficiary designation is in place. The solution is straightforward: retitle these accounts in the name of your trust, or add a Payable-on-Death (POD) designation naming the trust as beneficiary.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Retitling Accounts (Preferred)</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Bring your trust document or certificate of trust to your bank',
                    'Ask to retitle the account in the trust name',
                    'Some banks close and reopen the account — that is fine',
                    'Tax ID number stays the same (your SSN) for a revocable trust',
                    'Your day-to-day access and account number typically stay the same',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-5">
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">POD Designation (Simpler Alternative)</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Add the trust as the Payable-on-Death (POD) beneficiary',
                    'Account remains in your personal name during your lifetime',
                    'On death, funds transfer to the trust without probate',
                    'Successor trustee then distributes per the trust terms',
                    'Useful if your bank resists full retitling, or for convenience accounts',
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
              Most people keep one active checking account in their personal name for day-to-day convenience. That is entirely acceptable — just keep the balance modest and add a POD designation naming your trust. That way, even this account avoids probate at death while staying easy to manage during your lifetime.
            </p>

            {/* 4.3 Investments */}
            <h3 id="investments" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Investment and Brokerage Accounts
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Non-retirement brokerage accounts — accounts holding stocks, bonds, mutual funds, and ETFs outside of any retirement account wrapper — should be retitled in the trust&apos;s name. Contact your broker or financial advisor and bring a copy of your trust agreement or a certificate of trust. Most major brokerages (Fidelity, Vanguard, Schwab, Merrill Lynch, and others) have standard forms for this purpose and process the change without requiring you to sell any securities.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Retitling a brokerage account does not trigger any tax event. No investments need to be sold. No capital gains are recognized. The account simply becomes owned by the trust, with you continuing to manage it as trustee during your lifetime — buying, selling, and withdrawing exactly as you did before.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    Certificate of Trust: The Shortcut Banks and Brokers Prefer
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Rather than sharing your full trust document — which contains private distribution terms — with every financial institution, your attorney can prepare a <strong>Certificate of Trust</strong>. This short document confirms the trust exists, identifies the trustee, and summarizes the trustee&apos;s powers, without revealing what your beneficiaries receive or when. Most Illinois banks and brokerages accept a Certificate of Trust in place of the full document, making the retitling process much smoother.
                  </p>
                </div>
              </div>
            </div>

            {/* 4.4 Other Assets */}
            <h3 id="other-assets" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Business Interests and Other Assets
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you own a business interest — LLC membership units, limited partnership interests, or closely held corporation shares — consult your estate planning attorney before transferring these into a trust. The process depends heavily on the type of entity and the terms of the operating agreement or shareholder agreement. Many LLC operating agreements require consent from other members before a membership interest can be transferred, even to your own revocable trust.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Tangible personal property — furniture, jewelry, artwork, collectibles, and household goods — can be transferred into the trust through a general <strong>Assignment of Personal Property</strong>. This is a document your attorney prepares that conveys your tangible personal property to the trust in one step, without listing every item individually. For high-value items such as significant artwork, antiques, or a jewelry collection, a separate itemized assignment that describes each piece is preferable for clarity.
            </p>

            {/* 5. What NOT to Transfer */}
            <h2 id="what-not-to-transfer" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What NOT to Transfer Into Your Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Not every asset belongs in a revocable living trust. Transferring some assets into a trust can trigger significant taxes, cause insurance complications, or violate legal restrictions you may not know exist. Here are the most important categories to keep out of your trust — and what to do with them instead.
            </p>

            <div className="space-y-3 my-8">
              {doNotTransfer.map((item, i) => (
                <div key={i} className="border-l-4 border-red-400 bg-red-50 p-5 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 font-['Plus_Jakarta_Sans'] text-sm">{item.item}</h4>
                      <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed">{item.reason}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 6. Beneficiary Designations */}
            <h2 id="beneficiary-designations" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Coordinating Beneficiary Designations With Your Trust
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              While most assets should be retitled into the trust, others pass most effectively through beneficiary designations. Life insurance policies, IRAs, 401(k)s, 403(b)s, and annuities all pass to whoever you have named as beneficiary — completely regardless of what your trust or will says. This makes keeping beneficiary designations current and coordinated with your trust absolutely essential.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For most Illinois families, the best approach to coordinating retirement accounts and life insurance with a revocable living trust is:
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Name your spouse as primary beneficiary (if married)',
                  detail:
                    'Naming a surviving spouse as primary beneficiary on retirement accounts and life insurance allows the spouse to roll over the IRA or 401(k) into their own retirement account and continue tax-deferred growth — a significant advantage that is forfeited if the trust is named as primary beneficiary.',
                  color: 'blue',
                },
                {
                  title: 'Name your revocable trust as contingent beneficiary',
                  detail:
                    "Naming your trust as the contingent (backup) beneficiary ensures that if your spouse does not survive you, the assets flow into the trust and are distributed according to your carefully drafted trust terms — rather than defaulting to your estate and going through probate.",
                  color: 'blue',
                },
                {
                  title: 'Review designations after every major life event',
                  detail:
                    'Beneficiary designations are completely separate from your will and trust. Divorce, remarriage, the death of a named beneficiary, the birth or adoption of a child — all of these require you to revisit your designations. An outdated designation can override your trust terms entirely and send assets to the wrong person.',
                  color: 'amber',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-5 ${
                    item.color === 'blue' ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <h4 className="font-bold text-gray-900 text-sm mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have minor children, a beneficiary with special needs, or other circumstances requiring controlled distributions, your attorney may recommend naming the trust as <em>primary</em> beneficiary on some accounts. This requires careful drafting to comply with IRS rules for inherited IRAs — particularly under the SECURE Act — and should not be done without professional guidance. For a deeper look at how beneficiary designations interact with your overall plan, see our guide on{' '}
              <Link
                href="/blog/beneficiary-designations-override-your-will-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                why beneficiary designations override your will in Illinois
              </Link>
              .
            </p>

            {/* 7. Pour-Over Will */}
            <h2 id="pour-over-will" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The Pour-Over Will: Your Safety Net
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Even the most diligent Illinois families leave some assets outside their trust — a small inheritance received after the trust was created, a settlement from a lawsuit, a bank account inadvertently left in personal name, or a minor asset that simply fell through the cracks. A <strong>pour-over will</strong> is the safety net designed to catch exactly these situations.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A pour-over will directs that any assets in your individual name at death that were not already in the trust should be &ldquo;poured over&rdquo; into the trust after passing through probate. The pour-over will does <em>not</em> avoid probate for those stray assets — they still go through the Illinois probate process — but it ensures they ultimately end up in your trust and are distributed according to your trust terms, rather than being left outside your plan entirely.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For this reason, virtually every Illinois revocable living trust plan includes a pour-over will as a companion document. The two work as a team: the trust handles everything properly funded into it (privately, without court involvement), and the pour-over will catches any assets that slip through. A trust without a pour-over will leaves a gap — stray assets with no clear path to your intended beneficiaries.
            </p>

            {/* Checklist */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Trust Funding Checklist
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Primary residence — record new deed to trust',
                  'Investment properties — deed each parcel separately',
                  'Checking and savings accounts — retitle or add POD to trust',
                  'CDs and money market accounts — retitle',
                  'Brokerage/investment accounts — retitle with your broker',
                  'Business interests — review operating agreement first',
                  'Life insurance — update contingent beneficiary to trust',
                  'IRA/401(k) — do NOT retitle; update beneficiary designations',
                  'Tangible personal property — execute written assignment',
                  'Out-of-state real estate — deed per that state\'s law',
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
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Already Have a Trust? Let&apos;s Make Sure It&apos;s Funded.
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create revocable living trusts, complete every funding step, and keep their estate plans current as life changes. Transparent flat-fee pricing — you always know what you&apos;ll pay before we start.
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
                  href="/chicago-revocable-trusts-lawyer/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Our Trust Services
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
              If you already have an Illinois revocable living trust, the most valuable thing you can do today is review your asset list against your trust — and identify what has and has not been transferred. If your home, investment accounts, or significant bank accounts are still in your personal name, contact your estate planning attorney to complete the funding process.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you do not yet have a revocable living trust and are evaluating whether one is right for you, see our guides on{' '}
              <Link
                href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                the advantages and disadvantages of revocable living trusts in Illinois
              </Link>{' '}
              and{' '}
              <Link
                href="/blog/should-you-put-your-house-in-a-trust-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                whether to put your house in a trust
              </Link>
              . Our{' '}
              <Link
                href="/chicago-revocable-trusts-lawyer/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                revocable trust services page
              </Link>{' '}
              explains how we help Illinois families create and fully fund their plans on a flat-fee basis, so there are no surprises on the bill.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">Speak With an Illinois Trust Attorney</h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families create revocable living trusts and complete the funding process — so your trust actually does its job when your family needs it most. Schedule a free consultation to get started.
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
                Related Illinois Trust &amp; Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/trustee-vs-executor-illinois/',
                    label: 'Trustee vs. Executor in Illinois: Roles, Duties, and Which You Need',
                  },
                  {
                    href: '/blog/selecting-a-trustee-for-your-illinois-revocable-trust/',
                    label: 'Selecting a Trustee for Your Illinois Revocable Trust',
                  },
                  {
                    href: '/blog/should-you-put-your-house-in-a-trust-in-illinois/',
                    label: 'Should You Put Your House in a Trust in Illinois?',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/how-transfer-on-death-instruments-work-in-illinois/',
                    label: 'How Transfer-on-Death Instruments Work in Illinois',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois trust and estate planning law is complex and fact-specific — the appropriate funding strategy for a revocable living trust depends on your individual assets, family circumstances, and planning goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Create and Fund a Revocable Living Trust in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a fully funded estate plan in place — protecting your home, your accounts, and your family from a lengthy probate.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-fund-a-revocable-living-trust-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-fund-a-revocable-living-trust-illinois/')}&text=${encodeURIComponent('How to Fund a Revocable Living Trust in Illinois — what to transfer and how to do it right')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-fund-a-revocable-living-trust-illinois/')}`}
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
