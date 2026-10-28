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
  Scale,
  BookOpen,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-transfer-on-death-instrument-guide';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'what-is-todi',
      title: 'What Is an Illinois Transfer on Death Instrument?',
      level: 2,
      numeration: '2',
      children: [
        { id: 'todi-vs-will', title: 'How It Differs from a Will', level: 3, numeration: '2.1' },
        { id: 'todi-vs-trust', title: 'How It Differs from a Living Trust', level: 3, numeration: '2.2' },
      ],
    },
    {
      id: 'illinois-todi-law',
      title: 'Illinois TODI Law: What the Statute Requires',
      level: 2,
      numeration: '3',
      children: [
        { id: 'eligible-property', title: 'What Property Qualifies', level: 3, numeration: '3.1' },
        { id: 'execution-recording', title: 'How to Execute and Record a TODI', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'benefits', title: 'Benefits of an Illinois Transfer on Death Instrument', level: 2, numeration: '4' },
    { id: 'limitations', title: 'Limitations and Risks You Need to Know', level: 2, numeration: '5' },
    { id: 'comparison', title: 'TODI vs. Living Trust vs. Joint Tenancy', level: 2, numeration: '6' },
    { id: 'revoke-change', title: 'How to Revoke or Change Your Illinois TODI', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Does an Illinois Transfer on Death Instrument avoid probate?',
      answer:
        'Yes — that is its primary purpose. When you record a properly executed TODI, the property described in it passes directly to the named beneficiary (or beneficiaries) at your death, completely outside of the probate process. The beneficiary simply records an affidavit of survivorship with the county recorder, presents a certified copy of the death certificate, and the title transfers. No court petition, no probate case, no waiting 9–18 months. Keep in mind, however, that a TODI only covers the specific real property named in it. Any other assets — bank accounts, investment accounts, personal property — still need their own transfer mechanisms if you want to avoid probate on those items too.',
    },
    {
      question: 'Can I name more than one beneficiary on an Illinois TODI?',
      answer:
        'Yes. You can name multiple beneficiaries on a single TODI, and you can specify how they will hold the property — for example, as joint tenants with right of survivorship, or as tenants in common with stated percentage interests. You can also name contingent (backup) beneficiaries who take the property if your primary beneficiary predeceases you or dies within a certain period after you do. Naming contingent beneficiaries is strongly recommended; without them, if your primary beneficiary dies before you, the TODI designation lapses and the property may need to pass through probate.',
    },
    {
      question: 'Can creditors of my estate reach property transferred by a TODI?',
      answer:
        'Yes, and this is one of the most important limitations of a TODI that Illinois homeowners overlook. Under 755 ILCS 27/55, the property transferred by a TODI remains subject to the claims of your creditors and to estate taxes for a period of time after your death — typically two years. If your estate does not have enough other assets to pay valid creditor claims, your beneficiary could be required to contribute their interest in the inherited property to satisfy those debts. A revocable living trust, by contrast, also does not fully shield assets from creditors — but it can provide a more flexible framework for managing and satisfying creditor claims during administration.',
    },
    {
      question: 'Does a TODI affect my property taxes while I am alive?',
      answer:
        "No. Recording a TODI does not affect your property taxes, your homestead exemption, or your senior freeze or senior exemption in any way. You continue to own the property outright while you are alive and pay property taxes as you normally would. The TODI is entirely invisible from a tax assessment standpoint during your lifetime. Your right to any and all property tax exemptions you currently claim is completely unaffected by the existence of a recorded TODI. This is one of the distinct advantages of the TODI compared to adding a beneficiary to a deed as a co-owner, which can affect exemptions.",
    },
    {
      question: 'What happens to my TODI if I sell or refinance my home?',
      answer:
        'If you sell or transfer your property during your lifetime, the TODI is automatically revoked as to that property — you cannot pass something to a beneficiary that you no longer own. The sale proceeds are yours and are not affected by the TODI. If you refinance, your lender may ask you to revoke the TODI during the refinancing process and re-record it afterward; this is a relatively common request, though not universal. Always check with your lender and your attorney if you are refinancing property subject to a TODI.',
    },
    {
      question: 'Is a Transfer on Death Instrument a good substitute for a complete estate plan?',
      answer:
        "A TODI is a useful tool for a single asset — your home — but it is not a substitute for a complete estate plan. It does nothing for your financial accounts, retirement accounts, personal property, or decisions about who manages your affairs if you become incapacitated during your lifetime. You still need powers of attorney for property and healthcare to address incapacity, and you likely need a will or revocable living trust to manage everything else. Think of a TODI as one layer of a complete plan, not the whole plan. Illinois Estate Law can help you decide how a TODI fits — or doesn't fit — into your broader planning goals.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Illinois Transfer on Death Instrument Guide (TODI)',
    description:
      'Learn how Illinois Transfer on Death Instruments work under 755 ILCS 27, how to execute and record one, the key benefits and limitations, and how a TODI compares to a living trust.',
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
    datePublished: '2026-10-28',
    dateModified: '2026-10-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/illinois-transfer-on-death-instrument-guide/',
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
                Illinois Transfer on Death Instrument Guide (TODI): Pass Your Home Without Probate
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                An Illinois Transfer on Death Instrument lets you name a beneficiary for your home on a recorded deed — so the property passes directly to them at your death, completely outside of probate. Here is exactly how TODIs work, what the law requires, and when a living trust is a better fit.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>October 28, 2026</time>
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
                    An Illinois Transfer on Death Instrument (TODI) is a recorded deed-like document that lets real property pass to a named beneficiary at your death — with no probate court involvement.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Authorized by the Illinois Residential Real Property Transfer on Death Instrument Act (755 ILCS 27), a TODI is one of the simplest and least expensive ways to keep your home out of probate. You retain full ownership and control of the property during your lifetime, and you can revoke or change the beneficiary designation at any time. The TODI only takes effect at your death.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains how TODIs work under Illinois law, how to execute and record one properly, their key limitations — especially around creditor claims — and how a TODI compares to a revocable living trust and joint tenancy as alternatives for transferring real estate.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois TODI at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Authorized by 755 ILCS 27 (the Illinois TODI Act)', type: 'Illinois Law', color: 'blue' },
                  { label: 'Real property passes to beneficiary without probate', type: 'Core Benefit', color: 'green' },
                  { label: 'Must be recorded; revocable at any time during lifetime', type: 'Key Rule', color: 'amber' },
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

            {/* 2. What Is a TODI */}
            <h2 id="what-is-todi" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is an Illinois Transfer on Death Instrument?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>Transfer on Death Instrument</strong>, commonly abbreviated as <strong>TODI</strong>, is a legal document that functions like a beneficiary designation for real property. Just as you can name a beneficiary on a life insurance policy or a retirement account — so that those assets pass automatically to the named person at your death — a TODI lets you do the same thing for your home or other Illinois real estate.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The document is executed like a deed (with the same formality requirements: in writing, signed, witnessed, notarized) and must be <strong>recorded with the county recorder</strong> in the county where the property is located while you are still alive. Recording is what gives it legal effect. An unrecorded TODI is not valid.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Once recorded, the TODI creates no present transfer of the property. You remain the sole owner. You can sell, mortgage, lease, or give the property away. You can change your mind and revoke the TODI entirely. The beneficiary has no rights in the property while you are alive — they cannot object to a sale, they cannot use it as collateral, and they owe no property taxes on it. The TODI only activates — and the beneficiary only becomes the owner — at the moment of your death.
            </p>

            <h3 id="todi-vs-will" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              How It Differs from a Will
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A will is a testamentary document — it has no legal effect until you die, and even then it must pass through the probate court before it can transfer any property. In Cook County, a probate case for real estate typically takes 9–18 months and involves court filings, a creditor notice period, and judicial oversight before the property can be transferred to your heirs.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A TODI, by contrast, passes property entirely outside of probate. At your death, the beneficiary records an <strong>affidavit of survivorship</strong> with the county recorder, attaches a certified copy of the death certificate, and the title transfers — no court petition, no probate case, no waiting. If speed, privacy, and cost savings on your home are your primary goals, a TODI achieves them more directly than a will.
            </p>

            <h3 id="todi-vs-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              How It Differs from a Living Trust
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link> can hold your home and all other assets — bank accounts, investment accounts, personal property — in one unified legal structure that avoids probate for everything. A TODI, by contrast, covers only the specific real property named in it. It does nothing for your other assets.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A living trust also offers features a TODI cannot match: built-in incapacity planning (the successor trustee can manage trust assets if you become disabled), ongoing management of assets for minor or vulnerable beneficiaries, and greater flexibility in distributing assets to multiple heirs over time. For most Illinois families with significant assets beyond their home, a living trust provides far more comprehensive protection than a TODI alone.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">A TODI only covers real property</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The biggest limitation of a TODI is its narrow scope. It applies only to the residential real property specifically named in the document. Your bank accounts, investment accounts, vehicles, retirement accounts, and personal property are unaffected. If probate avoidance is your goal across your entire estate — not just your home — you need a broader plan.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Illinois TODI Law */}
            <h2 id="illinois-todi-law" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Illinois TODI Law: What the Statute Requires
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Transfer on Death Instruments are governed by the <strong>Illinois Residential Real Property Transfer on Death Instrument Act</strong>, codified at <strong>755 ILCS 27</strong>. The Act was enacted in 2012 and has become an increasingly common tool for Illinois homeowners who want a simple, low-cost way to keep their residence out of probate.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h4 className="font-bold text-[#33414E] mb-4 font-['Plus_Jakarta_Sans']">
                    Key Requirements Under 755 ILCS 27
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        rule: 'Must be in writing and properly executed',
                        detail: 'The TODI must be signed by the property owner (the grantor-owner) before two witnesses, both of whom also sign in the presence of the owner. It must be acknowledged (notarized) before a notary public.',
                      },
                      {
                        rule: 'Must be recorded before the owner\'s death',
                        detail: 'This is a hard requirement — there is no grace period. If the TODI is not recorded with the county recorder\'s office where the property is located before the owner dies, it has no effect whatsoever. The property would then pass through probate as if no TODI existed.',
                      },
                      {
                        rule: 'Owner must have legal capacity',
                        detail: 'The grantor-owner must have testamentary capacity at the time of execution — meaning they must understand the nature of the act, the property involved, and the beneficiaries named. A TODI signed by someone who lacked capacity can be challenged and invalidated.',
                      },
                      {
                        rule: 'Transfer is subject to encumbrances at death',
                        detail: 'The beneficiary takes the property subject to any mortgages, liens, or other encumbrances that exist at the time of the owner\'s death. The TODI does not wipe out a mortgage — the beneficiary inherits whatever financial obligations attach to the property.',
                      },
                      {
                        rule: 'Creditor claims survive for a period after death',
                        detail: 'Under 755 ILCS 27/55, the property transferred by a TODI remains subject to valid claims of the owner\'s creditors and to estate taxes for a period after death. This is a critical limitation explored in detail below.',
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

            <h3 id="eligible-property" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              What Property Qualifies
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The Illinois TODI Act applies specifically to <strong>residential real property</strong> — meaning real estate used primarily as a personal residence. This includes single-family homes, condominiums, townhouses, and multi-family residential buildings with up to four units when at least one unit is occupied by the owner.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Commercial real estate, vacant land, farm property, and investment properties used solely as rentals do not qualify under the Act. If you own property that falls into one of these categories and want to avoid probate on it, a revocable living trust — which can hold any type of real property — is the appropriate vehicle.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The property must be located in Illinois. A TODI executed under Illinois law has no effect on real estate located in another state, which is governed by that state&apos;s laws. If you own a vacation home in Wisconsin or Florida, you will need to address that property separately under those states&apos; rules.
            </p>

            <h3 id="execution-recording" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              How to Execute and Record a TODI
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Executing a TODI is a formal legal process with specific requirements. Cutting corners — even seemingly small ones — can invalidate the entire document and leave your property subject to probate, defeating the purpose. The proper process is:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  step: 'Draft the TODI document',
                  detail: 'The document must contain a legal description of the property (taken from your deed — not just the street address), identify the grantor-owner, and clearly name the beneficiary or beneficiaries. An attorney should draft or review this document to ensure it complies with the Act and reflects your intent accurately.',
                },
                {
                  step: 'Sign before two witnesses and a notary',
                  detail: 'The grantor-owner must sign the TODI in the presence of two adult witnesses, both of whom sign in the owner\'s presence. The signature must also be notarized. Witnesses should be disinterested — meaning they should not be named as beneficiaries of the TODI or otherwise stand to inherit under it.',
                },
                {
                  step: 'Record with the county recorder before death',
                  detail: 'The executed TODI must be recorded with the county recorder\'s office (or registrar of titles for Torrens-registered property) in the county where the property is located while the owner is still alive. Recording fees vary by county; in Cook County, expect to pay a recording fee per page plus applicable transfer taxes if any apply. Your attorney can handle the recording on your behalf.',
                },
                {
                  step: 'Beneficiary records affidavit of survivorship after death',
                  detail: 'After the owner dies, the beneficiary records an affidavit of survivorship with the same county recorder\'s office, along with a certified copy of the owner\'s death certificate. This publicly confirms that the transfer has occurred and completes the title transfer. The beneficiary then owns the property with clear title, without ever opening a probate case.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.step}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Benefits */}
            <h2 id="benefits" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Benefits of an Illinois Transfer on Death Instrument
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For Illinois homeowners whose primary estate planning goal is to keep their home out of probate, a TODI offers a compelling combination of simplicity, low cost, and flexibility.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Key Advantages of an Illinois TODI
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Avoids probate for the named real property — fast, private title transfer',
                  'Costs far less than establishing a revocable living trust',
                  'You retain full ownership and control during your lifetime',
                  'Revocable and amendable at any time — no permanent commitment',
                  'Does not affect your property tax exemptions (homestead, senior freeze, etc.)',
                  'No present transfer of the property — beneficiary has no current rights',
                  'Beneficiary takes title free of any new liens created after the TODI is recorded',
                  'Can name multiple beneficiaries and specify how they will hold title',
                  'Can name contingent (backup) beneficiaries',
                  'No gift tax consequences — no gift occurs until death',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The cost difference between a TODI and a revocable living trust is worth highlighting. A professionally drafted and recorded TODI typically costs a fraction of what a full revocable living trust package costs. For a homeowner who has few other assets, is not worried about incapacity planning, and simply wants to pass their home to an adult child without probate, the TODI is an attractive and proportionate solution.
            </p>

            {/* 5. Limitations */}
            <h2 id="limitations" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Limitations and Risks You Need to Know
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A TODI is not a complete estate planning solution, and for some Illinois families it is the wrong tool entirely. Understanding its limitations is just as important as understanding its benefits.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Creditor claims can reach TODI property',
                  color: 'amber',
                  body: 'Under 755 ILCS 27/55, the real property transferred by a TODI is not fully shielded from the claims of the deceased owner\'s creditors. If the estate lacks sufficient assets to satisfy valid creditor claims — including medical bills, credit card debt, or a Medicaid estate recovery claim — the property transferred by the TODI can be reached to satisfy those debts within the applicable claims period. Families who assume a TODI makes the home untouchable by creditors are often unpleasantly surprised.',
                },
                {
                  title: 'Medicaid estate recovery applies',
                  color: 'amber',
                  body: 'If the deceased owner received Medicaid benefits in Illinois, the Illinois Department of Healthcare and Family Services (IDHFS) has the right to file a claim against the estate for reimbursement of those benefits. Under Illinois law, TODI property can be subject to Medicaid estate recovery. If Medicaid planning is a concern, a revocable living trust does not provide a magic shield either — but there are other planning strategies (including irrevocable trusts) that an elder law attorney can discuss.',
                },
                {
                  title: 'Does not address incapacity',
                  color: 'blue',
                  body: 'A TODI only operates at death. If you become incapacitated — unable to manage your finances or make healthcare decisions — a TODI does nothing. You still need a durable power of attorney for property and a healthcare power of attorney to authorize someone to act on your behalf. Without these documents, a family may need to petition the court for guardianship, which is a costly and time-consuming process.',
                },
                {
                  title: 'Beneficiary must survive you (without contingent designation)',
                  color: 'amber',
                  body: 'If your named beneficiary dies before you and you have not named a contingent beneficiary, the TODI lapses. The property would then fall back into your probate estate and be distributed under your will — or by Illinois intestacy law if you have no will. Always name at least one contingent beneficiary, and revisit your TODI any time a named beneficiary dies or your circumstances change.',
                },
                {
                  title: 'Only covers residential real property',
                  color: 'blue',
                  body: 'A TODI has no effect on your bank accounts, investment accounts, retirement accounts, vehicles, or personal property. If you have significant assets beyond your home and want to avoid probate on those as well, you need additional planning tools — beneficiary designations on financial accounts, transfer-on-death registrations on vehicles (Illinois allows TOD vehicle registrations), or a revocable living trust.',
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

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure Whether a TODI Is Right for Your Situation?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area homeowners decide whether a Transfer on Death Instrument, a revocable living trust, or a combination of planning tools best fits their goals. Flat-fee pricing so you always know what you&apos;ll pay before we start.
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

            {/* 6. TODI vs. Living Trust vs. Joint Tenancy */}
            <h2 id="comparison" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              TODI vs. Living Trust vs. Joint Tenancy: Which Is Right for You?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois homeowners who want to avoid probate on their real estate have three main options: a TODI, a revocable living trust, or holding the property in joint tenancy with right of survivorship. Each has distinct advantages, disadvantages, and appropriate use cases.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Illinois Property Transfer Options Compared
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">TODI</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Revocable Living Trust</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-600">Joint Tenancy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Avoids probate?', 'Yes — for named property only', 'Yes — for all trust assets', 'Yes — at first death'],
                      ['Addresses incapacity?', 'No', 'Yes — successor trustee steps in', 'No'],
                      ['Covers all assets?', 'No — real property only', 'Yes — any type of asset', 'No — co-owned property only'],
                      ['Owner retains control?', 'Yes — full control during lifetime', 'Yes — grantor is own trustee', 'Shared — co-owner must agree to sell'],
                      ['Revocable?', 'Yes — easily revocable', 'Yes — by grantor during lifetime', 'No — requires co-owner consent'],
                      ['Creditor protection?', 'No — subject to estate creditors', 'No — subject to estate creditors', 'No — subject to each owner\'s creditors'],
                      ['Cost to create', 'Low — a few hundred dollars', 'Higher — full estate plan fee', 'Low — simple deed recording'],
                      ['Property tax exemptions affected?', 'No', 'No', 'May affect if non-spouse added'],
                      ['Gift tax risk?', 'No — no present gift', 'No — revocable is not a gift', 'Yes — adding a non-spouse co-owner may be a gift'],
                      ['Best for', 'Simple plans; single residence; lower cost priority', 'Complex plans; multiple assets; incapacity concern', 'Spouses; co-owners who already share title'],
                    ].map(([factor, todi, trust, joint], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{todi}</td>
                        <td className="py-3 px-4 text-gray-600">{trust}</td>
                        <td className="py-3 px-4 text-gray-600">{joint}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The right choice depends on your specific situation. A TODI is the right tool when your primary concern is keeping your home out of probate, your overall estate is not complex, and cost is a meaningful consideration. A revocable living trust makes more sense when you have significant assets beyond your home, you want incapacity protection built into your plan, or you need greater flexibility in distributing assets to multiple heirs or over time. Joint tenancy can work for couples who own property together and want it to pass seamlessly to the survivor — but it is generally not recommended as a strategy for passing property to the next generation, because it creates co-ownership complications during your lifetime.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    TODI plus beneficiary designations: a low-cost alternative to a trust
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    For Illinois homeowners whose estate consists mainly of a home, a retirement account, and a bank account, a TODI combined with beneficiary designations on the financial accounts can achieve nearly full probate avoidance without the cost of a full revocable living trust. This approach works well when the beneficiaries are adults, there are no blended family complications, and incapacity planning is addressed separately through a power of attorney. An estate planning attorney can help you evaluate whether this combination is sufficient for your specific circumstances.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Revoke or Change */}
            <h2 id="revoke-change" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Revoke or Change Your Illinois TODI
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most appealing features of a TODI is how easy it is to change your mind. The Act gives property owners the ability to revoke or amend a TODI at any time during their lifetime, as long as they have legal capacity when they do so.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#33414E] text-white rounded-xl p-5">
                <Scale className="w-6 h-6 mb-3 opacity-80" />
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Ways to Revoke a TODI</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Record a new TODI — a later TODI naming different beneficiaries replaces the earlier one',
                    'Record a separate instrument of revocation — a written revocation signed, witnessed, notarized, and recorded',
                    'Sell or transfer the property — a TODI is automatically revoked as to property you no longer own',
                    'A recorded deed transferring the property to someone else during your lifetime revokes the TODI',
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
                <h4 className="font-bold text-base mb-3 font-['Plus_Jakarta_Sans']">Important Revocation Rules</h4>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'A verbal statement or unrecorded document does NOT revoke a TODI',
                    'A provision in your will revoking a TODI is NOT effective — the will cannot override a recorded TODI',
                    'Revocation must be recorded before your death to be valid',
                    'Review your TODI after major life events: divorce, beneficiary\'s death, or change in plans',
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
              A particularly important rule: <strong>a provision in your will cannot revoke a recorded TODI.</strong> Many people assume that if they write &ldquo;I revoke all prior Transfer on Death Instruments&rdquo; in their will, that is sufficient. It is not. Under 755 ILCS 27/35, a TODI can only be revoked by a subsequently executed instrument that meets the same formal requirements as the original TODI and is recorded before the owner&apos;s death. If your circumstances change — you change beneficiaries, divorce, or simply change your mind — you must execute and record a new TODI or a formal revocation, not merely update your will.
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
              If you own a home in Illinois and you want to keep it out of probate, a TODI is worth considering as part of your estate plan. The most important first steps are simple: gather your current deed (you will need the legal description to prepare the TODI), think about who you want to receive the property and whether you want to name a contingent beneficiary, and schedule a consultation with an Illinois estate planning attorney to discuss whether a TODI, a revocable living trust, or a combination of tools is the right approach for your overall situation.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law helps Chicago-area homeowners create Transfer on Death Instruments as part of complete, integrated estate plans — often alongside a <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">will</Link>, <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">revocable living trust</Link>, and <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">powers of attorney</Link> that address incapacity as well as death. Our flat-fee pricing means you know exactly what you are paying before we start. See our <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">services and pricing page</Link> for details.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area homeowners decide whether a Transfer on Death Instrument, a revocable living trust, or another strategy is the right fit — and then puts the right documents in place with transparent flat-fee pricing and a free initial consultation.
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
                    href: '/blog/joint-tenancy-vs-tenancy-in-common-illinois/',
                    label: 'Joint Tenancy vs. Tenancy in Common in Illinois',
                  },
                  {
                    href: '/blog/illinois-small-estate-affidavit-avoid-probate/',
                    label: 'Illinois Small Estate Affidavit: How to Avoid Probate',
                  },
                  {
                    href: '/blog/protecting-home-from-medicaid-estate-recovery-illinois/',
                    label: 'Protecting Your Home From Medicaid Estate Recovery in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'How Beneficiary Designations Override Your Will in Illinois',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois Transfer on Death Instrument law and estate planning law are complex and fact-specific — the appropriate planning strategy depends on your individual property, assets, family circumstances, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Create a Transfer on Death Instrument in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a legally valid TODI — or a complete estate plan — in place to protect your home and your family.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-transfer-on-death-instrument-guide/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-transfer-on-death-instrument-guide/')}&text=${encodeURIComponent('Illinois Transfer on Death Instrument (TODI) Guide — how to pass your home without probate')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-transfer-on-death-instrument-guide/')}`}
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
