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
  Users,
  Scale,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'protecting-home-from-medicaid-estate-recovery-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-merp', title: 'What Is Medicaid Estate Recovery in Illinois?', level: 2, numeration: '2' },
    { id: 'probate-only', title: 'Illinois Is a Probate-Only Recovery State', level: 2, numeration: '3' },
    {
      id: 'exemptions',
      title: 'Who Is Exempt from Medicaid Estate Recovery?',
      level: 2,
      numeration: '4',
    },
    {
      id: 'strategies',
      title: 'Strategies to Protect Your Home from Medicaid Recovery',
      level: 2,
      numeration: '5',
      children: [
        { id: 'mapt', title: 'Irrevocable Medicaid Asset Protection Trust', level: 3, numeration: '5.1' },
        { id: 'todi', title: 'Transfer-on-Death Instrument (TODI)', level: 3, numeration: '5.2' },
        { id: 'revocable-trust', title: 'Revocable Living Trust', level: 3, numeration: '5.3' },
        { id: 'life-estate', title: 'Life Estate Deed', level: 3, numeration: '5.4' },
        { id: 'outright-transfer', title: 'Outright Transfer to Children', level: 3, numeration: '5.5' },
      ],
    },
    { id: 'lookback', title: 'The 5-Year Lookback Rule and Why Timing Matters', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const exemptions = [
    {
      title: 'Surviving spouse',
      detail:
        'Illinois will not seek recovery while a surviving spouse is alive. Recovery is deferred until the surviving spouse also passes away. At that point, the estate of the Medicaid recipient — including any home that passed to the surviving spouse — may become subject to MERP claims.',
    },
    {
      title: 'Minor children (under 21)',
      detail:
        'If the Medicaid recipient is survived by a child under the age of 21, Illinois defers recovery. Once the youngest child turns 21, the deferral ends and recovery can begin against the estate.',
    },
    {
      title: 'Blind or permanently disabled children',
      detail:
        'A child of any age who is blind or permanently and totally disabled (as defined by Social Security) qualifies for a MERP exemption. Illinois will not seek recovery when such a child survived the Medicaid recipient.',
    },
    {
      title: 'Caretaker child',
      detail:
        "An adult child who lived in the Medicaid recipient's home for at least two years immediately before the recipient entered a nursing facility, and who provided care that delayed the need for institutionalization, may qualify for an exemption. Documentation of the caregiving history is critical to establishing this exemption.",
    },
    {
      title: 'Sibling with equity interest',
      detail:
        'A sibling who has an equity interest in the home and who was residing in the home for at least one year before the Medicaid recipient entered a nursing facility may qualify for a MERP exemption. Again, documentation is essential.',
    },
    {
      title: 'Undue hardship waiver',
      detail:
        'Illinois allows heirs to request a hardship waiver if recovery would deprive them of their primary home or primary income-producing asset, or would result in exceptional and unduly burdensome hardship. Hardship waivers are evaluated case by case and are not guaranteed.',
    },
  ];

  const strategies = [
    {
      id: 'mapt',
      number: '01',
      title: 'Irrevocable Medicaid Asset Protection Trust (MAPT)',
      badge: 'Most Protective',
      badgeColor: 'green',
      summary:
        'Transfer your home into an irrevocable trust that keeps it out of your estate — and out of MERP — if done at least 5 years before applying for Medicaid.',
      detail: `A Medicaid Asset Protection Trust (MAPT) is an irrevocable trust specifically designed to protect assets from Medicaid estate recovery. You transfer your home into the trust, retaining the right to live there during your lifetime but giving up ownership and control of the underlying asset. Because the home is no longer in your estate, it cannot be reached by MERP after your death.

The catch — and it is a significant one — is the 5-year lookback period. Transferring your home to a MAPT within five years of applying for Medicaid long-term care benefits creates a period of Medicaid ineligibility. For a MAPT to be effective, it must be established and funded at least five full years before you apply for Medicaid.

This makes early planning absolutely critical. A MAPT set up at age 65 or 70 — while you are healthy and well before any nursing home need — can provide ironclad protection for your home. A MAPT set up at age 80 when a health crisis is already looming may do little to help.

A well-drafted MAPT for an Illinois home should be prepared by an attorney experienced in both estate planning and Medicaid law. The trust terms, trustee selection, and retained rights must be carefully calibrated to achieve the protective goals without triggering adverse tax consequences.`,
    },
    {
      id: 'todi',
      number: '02',
      title: 'Transfer-on-Death Instrument (TODI)',
      badge: 'Probate Avoidance',
      badgeColor: 'blue',
      summary:
        'A recorded TODI passes your home directly to your named beneficiary at death — bypassing probate entirely and, in Illinois, bypassing MERP.',
      detail: `Illinois law (765 ILCS 170) allows homeowners to record a Transfer-on-Death Instrument that names a beneficiary to receive the property automatically at death. The TODI is revocable — you can change beneficiaries or cancel it at any time while you are alive — and the named beneficiary has no legal rights to the property during your lifetime.

Because Illinois currently uses "probate-only" Medicaid estate recovery, assets that pass outside of probate — including homes transferred by a TODI — are not reachable by MERP under current Illinois law. This makes a TODI a powerful and relatively simple planning tool for homeowners concerned about Medicaid recovery.

Important caveats: First, a TODI recorded within five years of a Medicaid application is a disqualifying transfer that can create a period of Medicaid ineligibility — the same lookback concern that applies to all property transfers. Second, Illinois's probate-only recovery approach could change if the state expands MERP to non-probate transfers, which federal law permits states to do. Third, a TODI does not provide protection during the applicant's lifetime — the home may still need to be included as an asset when calculating Medicaid eligibility (subject to the homestead exemption, discussed below).

For homeowners who plan far enough ahead and want a simpler solution than an irrevocable trust, a TODI is worth discussing with an Illinois estate planning attorney.`,
    },
    {
      id: 'revocable-trust',
      number: '03',
      title: 'Revocable Living Trust',
      badge: 'Probate Avoidance',
      badgeColor: 'blue',
      summary:
        'A funded revocable trust avoids probate — and under current Illinois MERP rules, trust assets are generally outside the recovery reach.',
      detail: `A revocable living trust is the cornerstone of modern Illinois estate planning. You transfer your home (and other assets) into the trust, remain as trustee during your lifetime with full control, and name a successor trustee to manage and distribute assets at your death — all without probate court involvement.

Because Illinois is a probate-only state for Medicaid estate recovery purposes, assets held in a revocable living trust at death are generally not subject to MERP claims under current Illinois law. The home passes privately to the successor trustee and then to trust beneficiaries without going through the probate process that MERP depends on.

However, there is an important distinction between Medicaid estate recovery (what happens after death) and Medicaid eligibility (what happens when you apply). A home held in a revocable trust is still considered a countable asset for Medicaid eligibility purposes during the grantor's lifetime — it does not provide protection when applying for benefits. It only helps avoid MERP claims after death.

Additionally, because a revocable trust can be amended or revoked at any time, it does not protect assets from Medicaid look-back scrutiny the way an irrevocable trust does. If the goal is to protect a home from being counted in a Medicaid eligibility determination, an irrevocable trust or another strategy is needed.

That said, for families primarily concerned about MERP after death (rather than upfront eligibility), funding a revocable living trust with the family home is a well-established and effective strategy under current Illinois law.`,
    },
    {
      id: 'life-estate',
      number: '04',
      title: 'Life Estate Deed',
      badge: 'Use With Caution',
      badgeColor: 'amber',
      summary:
        'A life estate deed transfers remainder interest in your home to your children while you retain the right to live there — but carries several risks that a TODI or MAPT avoids.',
      detail: `A life estate deed splits ownership of your home into two parts: a life estate (your right to live in and use the home for the rest of your life) and a remainder interest (ownership that automatically transfers to the named remaindermen — usually your children — at your death). Because the remainder interest passes outside of probate, it avoids MERP under Illinois's current probate-only approach.

Life estate deeds have been used for Medicaid planning for decades, but they come with meaningful drawbacks compared to more modern tools like TODIs and MAPTs. First, a life estate deed is much harder to undo than a TODI — once you deed away the remainder interest, reversing it requires the cooperation of all the named remaindermen. Second, the fair market value of the remainder interest at the time of the deed is a countable transfer for Medicaid lookback purposes. Third, a life estate gives the remaindermen an immediate interest in the property, which can create complications if a remainderman faces creditors, files for bankruptcy, or predeceases you.

For most Illinois homeowners today, a TODI accomplishes the same probate-avoidance goal as a life estate deed with fewer complications, since a TODI is freely revocable and does not give the named beneficiary any current interest in the property. An Illinois estate planning attorney can help you evaluate which tool makes more sense for your situation.`,
    },
    {
      id: 'outright-transfer',
      number: '05',
      title: 'Outright Transfer to Children',
      badge: 'High Risk',
      badgeColor: 'red',
      summary:
        'Transferring the home outright to your children removes it from your estate — but creates a period of Medicaid ineligibility and potential tax and control issues.',
      detail: `Some families consider simply deeding the home to their children as a straightforward way to remove it from the parent's estate before Medicaid is needed. While this technically removes the home from the estate, it creates serious risks that often outweigh the benefit.

The most significant risk is the 5-year lookback period. Any transfer of the home for less than fair market value within five years of applying for Medicaid long-term care generates a penalty period — a length of time during which the applicant is ineligible for Medicaid benefits. The penalty is calculated by dividing the value of the transferred asset by the average monthly nursing home cost in Illinois (approximately $7,000–$9,000 per month in 2026). A $350,000 home transferred to children could create a penalty period of 40–50 months — over three years during which Medicaid pays nothing.

Beyond the lookback risk, an outright transfer means you lose all control over the home. Your children become the legal owners; they can sell it, mortgage it, or lose it to their own creditors. If a child goes through a divorce, their spouse could have a claim to the home. If a child predeceases you, the home may pass to their estate rather than back to you.

Outright transfers are rarely the right tool for Medicaid planning when a MAPT, TODI, or revocable trust can accomplish the goal more safely and with appropriate timing. If this strategy is being considered, it should only be done in close consultation with an attorney who can assess the lookback risk and structure the transfer appropriately.`,
    },
  ];

  const faqs = [
    {
      question: 'What is Medicaid estate recovery and does it apply in Illinois?',
      answer:
        'Medicaid estate recovery (MERP) is a federally required program under which states must seek repayment from a deceased Medicaid recipient\'s estate for the cost of long-term care services paid by Medicaid. In Illinois, this program is administered by the Department of Healthcare and Family Services (HFS) under 305 ILCS 5/5-13. Illinois MERP applies to individuals who received Medicaid long-term care benefits (typically nursing home care) and were age 55 or older at the time they received those benefits. After the recipient\'s death — and after the death of any surviving spouse — Illinois can file a claim against the probate estate for the cost of care paid. The family home is often the largest asset in the estate, making MERP a significant concern for many Illinois families.',
    },
    {
      question: "Is my parent's home automatically protected from Medicaid recovery if they have a will leaving it to us?",
      answer:
        "No. A will does not protect a home from Medicaid estate recovery. In fact, a will typically means the home passes through probate — and probate is exactly where Illinois MERP can file its recovery claim. A will is a helpful document for many estate planning purposes, but it provides no protection against MERP. To protect a home from Medicaid estate recovery in Illinois, you need a strategy that either keeps the home out of the probate estate (such as a TODI, revocable trust, or irrevocable trust) or qualifies for one of the MERP exemptions (such as a surviving spouse or caretaker child).",
    },
    {
      question: 'Does Illinois Medicaid count the family home as an asset when determining eligibility?',
      answer:
        "The home is generally exempt from Medicaid eligibility calculations while the applicant (or their spouse) intends to return home or while a qualifying family member resides there. This is the homestead exemption. However, the exemption is not unlimited — Illinois can place a lien on the home during the Medicaid recipient's lifetime in certain circumstances, which is collected at death. The homestead exemption protects the home for eligibility purposes, but MERP can still recover from the home's value after the recipient's death (subject to the exemptions described in this article). This is why planning for both Medicaid eligibility and post-death MERP recovery requires a coordinated strategy.",
    },
    {
      question: 'How long does the 5-year lookback period last in Illinois?',
      answer:
        "The Medicaid lookback period is five years (60 months) before the date of application for Medicaid long-term care benefits. Any transfers of assets (including real estate) made for less than fair market value during that 60-month window are scrutinized. Transfers that do not qualify for an exemption generate a penalty period — a length of time during which Medicaid will not pay for nursing home care. The penalty period begins when the applicant would otherwise be eligible for Medicaid (i.e., after they have spent down other assets), not when the transfer was made. This means the lookback and penalty period can trap families who wait until a health crisis to start planning.",
    },
    {
      question: 'What happens to the family home after the Medicaid recipient dies if there is a surviving spouse?',
      answer:
        "If a Medicaid recipient is survived by a spouse, Illinois defers estate recovery until the surviving spouse also passes away. During the surviving spouse's lifetime, Illinois will not pursue the recovery claim. After the surviving spouse dies, however, the state may then seek recovery from whatever estate or assets remain — which could include the home if it passed to the surviving spouse through probate and then to the surviving spouse's own probate estate. This delayed recovery risk makes planning for both spouses' estates important, even when one spouse is currently healthy.",
    },
    {
      question: 'Do I need a Medicaid planning attorney or can an estate planning attorney help?',
      answer:
        "Medicaid planning sits at the intersection of elder law, estate planning, and government benefits law — and ideally, your attorney is experienced in all three. Not all estate planning attorneys are equally fluent in Medicaid rules, and not all elder law attorneys focus on proactive planning (versus crisis planning after nursing home entry is imminent). When evaluating attorneys, ask specifically about their experience with Medicaid Asset Protection Trusts, the 5-year lookback period, and Illinois MERP. Illinois Estate Law works with clients on proactive estate planning strategies including trust planning and document coordination that can help position families for Medicaid planning conversations with appropriate specialists.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Protecting Your Home from Medicaid Estate Recovery in Illinois',
    description:
      'Learn how Illinois Medicaid estate recovery works and what steps you can take to protect your family home — including trusts, TODIs, and planning strategies.',
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
    datePublished: '2026-07-15',
    dateModified: '2026-07-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/protecting-home-from-medicaid-estate-recovery-illinois/',
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
                  Medicaid &amp; Estate Planning
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Protecting Your Home from Medicaid Estate Recovery in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                After a Medicaid recipient dies, the state of Illinois can file a claim against their estate to recover the cost of nursing home care — and the family home is often the biggest asset at risk. Here is what Medicaid estate recovery is, who it affects, and the planning strategies Illinois homeowners can use to protect what they have built.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 15, 2026</time>
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
                <Home className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Medicaid Estate Recovery (MERP) allows Illinois to recoup nursing home costs from a deceased Medicaid recipient&apos;s estate. For most families, the family home is the primary asset at risk.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Illinois is a &ldquo;probate-only&rdquo; recovery state, meaning the state can only pursue assets that pass through probate. This creates a real opportunity: assets that pass outside of probate — through a revocable trust, a Transfer-on-Death Instrument, or other mechanisms — are generally shielded from MERP under current Illinois law.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    But timing is everything. The 5-year Medicaid lookback period means that most protective strategies must be put in place well before a nursing home need arises. This guide explains how MERP works, who qualifies for exemptions, and which planning tools Illinois homeowners can use to protect their most valuable asset.
                  </p>
                </div>
              </div>
            </div>

            {/* At a glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Key Facts About Illinois Medicaid Estate Recovery
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Illinois is a probate-only recovery state — non-probate transfers are generally protected', icon: 'shield', color: 'green' },
                  { label: '5-year lookback applies to all asset transfers — plan early or risk a penalty period', icon: 'clock', color: 'amber' },
                  { label: 'Surviving spouse, minor children, and caretaker children qualify for MERP exemptions', icon: 'users', color: 'blue' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border ${
                      item.color === 'green'
                        ? 'bg-green-50 border-green-200'
                        : item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. What Is MERP */}
            <h2 id="what-is-merp" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Medicaid Estate Recovery in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Medicaid Estate Recovery (MERP) is a federal requirement — mandated under 42 U.S.C. § 1396p — that states seek repayment from deceased Medicaid recipients&apos; estates for the cost of long-term care services paid on their behalf. In Illinois, the program is administered by the Department of Healthcare and Family Services (HFS) under 305 ILCS 5/5-13.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              MERP applies when all of the following are true:
            </p>

            <div className="space-y-2 my-6">
              {[
                'The person received Medicaid long-term care services (typically nursing home care, home- and community-based waiver services, or related hospital and prescription drug services)',
                'The person was age 55 or older at the time they received those services',
                'The person has died',
                'There is no surviving spouse, minor child, or other qualifying dependent',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When MERP applies, Illinois HFS files a claim against the deceased recipient&apos;s probate estate — often a claim for tens or hundreds of thousands of dollars representing years of nursing home costs paid by the Medicaid program. Because Medicaid covered those costs, HFS now seeks to recover them from whatever assets remain in the estate. For many Illinois families, the family home is the only significant asset in the probate estate, which is why MERP and the family home are so closely linked.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">MERP is not a lien on the home while you are alive</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Medicaid estate recovery happens <em>after death</em>, not during the recipient&apos;s lifetime. While HFS can place a lien on real property in limited circumstances during the recipient&apos;s lifetime (for example, when the recipient is not expected to return home), the primary recovery mechanism is a post-death claim against the estate. The home is generally exempt from Medicaid eligibility calculations while the recipient or their spouse intends to return to it — this is the homestead exemption.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Probate-Only State */}
            <h2 id="probate-only" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois Is a Probate-Only Recovery State
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Federal law gives states two options for the scope of Medicaid estate recovery: they can limit recovery to the&nbsp;<strong>probate estate</strong>, or they can expand recovery to reach assets that pass outside of probate (such as joint tenancy property, revocable trusts, and accounts with beneficiary designations). Illinois has chosen the narrower approach: under current Illinois law, MERP can only reach assets that pass through the probate court process.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This is genuinely important for Illinois homeowners. Assets that bypass probate — including homes held in a funded revocable living trust, homes transferred by a Transfer-on-Death Instrument (TODI), or homes held in joint tenancy with right of survivorship — are <strong>generally not reachable by Illinois MERP under current law</strong>. Only assets that are in the deceased Medicaid recipient&apos;s name alone, without any automatic transfer mechanism, pass through probate and into MERP&apos;s reach.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">This could change — planning today protects you under both current and future rules</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Illinois&apos;s probate-only approach is a matter of state policy, not federal law. The federal statute permits — but does not require — states to expand MERP to non-probate assets. Illinois could change its approach in the future. An irrevocable Medicaid Asset Protection Trust (MAPT), properly established and funded more than five years before a Medicaid application, provides the most durable protection under both current and any future expanded MERP rules.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Exemptions */}
            <h2 id="exemptions" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Who Is Exempt from Medicaid Estate Recovery?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Even when a home is in the probate estate and subject to MERP, Illinois law recognizes several exemptions that either defer or eliminate the recovery obligation. If any of the following apply, speak with an attorney about whether MERP can be contested or deferred:
            </p>

            <div className="space-y-3 my-8">
              {exemptions.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <Users className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              These exemptions are not automatic — you must assert them and provide supporting documentation when responding to a MERP claim. An attorney familiar with Illinois estate recovery procedures can help you evaluate whether an exemption applies and how to document it effectively.
            </p>

            {/* 5. Strategies */}
            <h2 id="strategies" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Strategies to Protect Your Home from Medicaid Estate Recovery
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The most effective MERP protection strategies work by either (a) keeping the home outside of the probate estate so it is not reachable under Illinois&apos;s probate-only approach, or (b) establishing irrevocable ownership structures that predate the 5-year lookback window. Here is how each major strategy works.
            </p>

            <div className="space-y-4 my-8">
              {strategies.map((strategy, index) => (
                <div key={index} id={strategy.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="px-6 py-4 bg-gray-50 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#33414E] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {strategy.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900 font-['Plus_Jakarta_Sans']">{strategy.title}</span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium font-['Plus_Jakarta_Sans'] ${
                            strategy.badgeColor === 'green'
                              ? 'bg-green-100 text-green-700'
                              : strategy.badgeColor === 'blue'
                              ? 'bg-blue-100 text-blue-700'
                              : strategy.badgeColor === 'amber'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {strategy.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 italic font-['Plus_Jakarta_Sans']">{strategy.summary}</p>
                    </div>
                  </div>
                  <div className="px-6 py-5 bg-white border-t border-gray-200">
                    {strategy.detail.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-gray-700 mb-4 leading-relaxed text-sm font-['Plus_Jakarta_Sans'] last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 6. Lookback */}
            <h2 id="lookback" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              The 5-Year Lookback Rule and Why Timing Matters
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Every strategy for protecting a home from Medicaid runs directly into the 5-year Medicaid lookback period. When an Illinois resident applies for Medicaid long-term care (nursing home) benefits, the state reviews all asset transfers made within the five years (60 months) before the application date. Transfers of assets — including real estate — made for less than fair market value during this window are treated as disqualifying transfers.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Each disqualifying transfer generates a <strong>penalty period</strong> — a number of months during which the applicant is ineligible for Medicaid benefits. The penalty is calculated by dividing the uncompensated value of the transferred asset by the average monthly private-pay nursing home cost in Illinois, which in 2026 is approximately $8,000–$9,000 per month in the Chicago area. A home transferred for no consideration at a value of $400,000 could generate a penalty period of more than 44 months — nearly four years without Medicaid coverage.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                What the 5-Year Lookback Means in Practice
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: 'Transfer home to a MAPT in 2021',
                    outcome: 'Protected — if you apply for Medicaid in 2026 or later, the lookback window does not reach the 2021 transfer',
                    color: 'green',
                  },
                  {
                    label: 'Transfer home to children in 2024, apply for Medicaid in 2026',
                    outcome: 'Within lookback — generates a penalty period. Medicaid will not cover nursing home costs for months equivalent to the home\'s value',
                    color: 'red',
                  },
                  {
                    label: 'Record a TODI in 2021 naming children as beneficiaries',
                    outcome: 'TODI does not transfer the home during your lifetime — it only transfers at death. No lookback issue for eligibility (but the home is still a countable asset while you are alive)',
                    color: 'amber',
                  },
                  {
                    label: 'Transfer home to a MAPT in 2024, apply for Medicaid in 2026',
                    outcome: 'Within lookback — generates a penalty period. The MAPT will protect the home from MERP after death, but does not help with eligibility',
                    color: 'red',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border ${
                      item.color === 'green'
                        ? 'bg-green-50 border-green-200'
                        : item.color === 'red'
                        ? 'bg-red-50 border-red-200'
                        : 'bg-amber-50 border-amber-200'
                    }`}
                  >
                    <p className="text-sm font-semibold text-gray-800 font-['Plus_Jakarta_Sans'] mb-1">{item.label}</p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans'] leading-snug">{item.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The takeaway is straightforward: Medicaid planning that involves transferring or restructuring assets must be done <strong>well in advance of any anticipated nursing home need</strong> — ideally at least five full years before any Medicaid application. Families that wait until a health crisis forces the issue often find that their planning options are either unavailable or create penalty periods that leave them without coverage precisely when they need it most.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are currently within the lookback period (less than 5 years before a Medicaid application), a <Link href="/chicago-probate-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">Medicaid planning specialist</Link> can help you evaluate what options remain — including spousal impoverishment rules, qualified income trusts, and other tools that do not trigger the lookback penalty.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Concerned About Medicaid and the Family Home?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families put proactive estate plans in place — including revocable trusts, Transfer-on-Death Instruments, and coordinated strategies designed to protect the assets you have worked a lifetime to build. Flat-fee pricing so you always know what you&apos;ll pay.
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
              Medicaid estate recovery is one of the most important — and most overlooked — threats to family wealth in Illinois. The good news is that with enough lead time, it is also one of the most preventable. Whether you are planning for yourself or helping an aging parent think through options, the key actions are the same: start early, understand the lookback period, and choose the right legal tools to keep the family home where you intend it to go.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you want to explore the estate planning options most relevant to protecting your home, our{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trust services
              </Link>{' '}
              and guidance on{' '}
              <Link href="/blog/how-to-fund-a-revocable-living-trust-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how to fund a revocable living trust in Illinois
              </Link>{' '}
              are good starting points. For Illinois homeowners interested in the Transfer-on-Death Instrument as a simpler first step, our guide on{' '}
              <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how TODIs work in Illinois
              </Link>{' '}
              explains the process in detail. And if you are navigating a probate estate and facing a MERP claim, our{' '}
              <Link href="/chicago-probate-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Chicago probate attorneys
              </Link>{' '}
              can help you evaluate available exemptions and respond effectively to HFS.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families put proactive plans in place to protect their homes and assets — including revocable trusts, Transfer-on-Death Instruments, powers of attorney, and coordinated estate plans. Our flat-fee model means you always know exactly what you will pay. Schedule a free initial consultation to discuss your situation.
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
                  Our Trust Services
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
                    href: '/blog/how-transfer-on-death-instruments-work-in-illinois/',
                    label: 'How Transfer-on-Death Instruments Work in Illinois',
                  },
                  {
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts',
                  },
                  {
                    href: '/blog/should-you-put-your-house-in-a-trust-in-illinois/',
                    label: 'Should You Put Your House in a Trust in Illinois?',
                  },
                  {
                    href: '/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/',
                    label: 'Updating Your Estate Plan After a Life Change',
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
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois Medicaid and estate planning law is complex and fact-specific — eligibility rules, lookback periods, and estate recovery procedures can change. Medicaid planning involves federal and state law considerations that require individualized analysis. Consult a licensed Illinois attorney experienced in Medicaid planning and elder law for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Protect Your Home with a Solid Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and find out which tools — revocable trust, TODI, powers of attorney, or a combination — best protect your home and your family&apos;s future.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/protecting-home-from-medicaid-estate-recovery-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/protecting-home-from-medicaid-estate-recovery-illinois/')}&text=${encodeURIComponent('Protecting Your Home from Medicaid Estate Recovery in Illinois — what every family needs to know')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/protecting-home-from-medicaid-estate-recovery-illinois/')}`}
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
