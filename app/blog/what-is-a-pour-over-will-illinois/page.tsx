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
  Scale,
  CircleX as XCircle,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-is-a-pour-over-will-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-pour-over-will', title: 'What Is a Pour-Over Will?', level: 2, numeration: '2' },
    {
      id: 'how-it-works',
      title: 'How a Pour-Over Will Works: Step by Step',
      level: 2,
      numeration: '3',
      children: [
        { id: 'assets-outside-trust', title: 'Assets Left Outside the Trust', level: 3, numeration: '3.1' },
        { id: 'probate-step', title: 'The Probate Step', level: 3, numeration: '3.2' },
      ],
    },
    { id: 'validity-requirements', title: 'What Makes a Pour-Over Will Valid in Illinois?', level: 2, numeration: '4' },
    { id: 'what-it-cannot-do', title: 'What a Pour-Over Will Cannot Do', level: 2, numeration: '5' },
    { id: 'vs-regular-will', title: 'Pour-Over Will vs. Regular Will: Key Differences', level: 2, numeration: '6' },
    { id: 'fully-funded', title: 'Do You Still Need One If Your Trust Is Fully Funded?', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: 'Does a pour-over will avoid probate in Illinois?',
      answer:
        'No — and this is one of the most important things to understand about a pour-over will. Any assets that pass through a pour-over will must still go through Illinois probate before they reach your trust. The pour-over will does not bypass probate; it redirects assets that are already going through probate into your trust. The goal is to ensure those stray assets ultimately land in the trust and are distributed according to your trust terms — not to avoid the probate process for them. This is exactly why a fully funded revocable living trust is so valuable: assets already in the trust avoid probate entirely, without any need for the pour-over mechanism.',
    },
    {
      question: 'Can a pour-over will be used without a revocable living trust in Illinois?',
      answer:
        'No. A pour-over will only works if you already have a valid trust in place for the assets to flow into. The will directs assets "into the trust" — if no trust exists, or if the trust was revoked before death, the pour-over provision has nowhere to send the assets. In that case, Illinois courts would treat the pour-over clause as invalid and distribute the assets as if it were not there, applying Illinois intestacy law or other provisions of the will. The trust must exist and be valid at the time of death for the pour-over to function.',
    },
    {
      question: 'What happens to assets in a pour-over will if the estate is large?',
      answer:
        'If the assets passing through the pour-over will exceed the Illinois small estate affidavit threshold (currently $100,000 in total gross value), a full probate proceeding is required in the Circuit Court of the county where you lived. The executor opens the estate, handles creditor claims during the mandatory six-month notice period, and then distributes assets to the trust. Depending on the complexity of the assets involved, this can take 9–18 months or more in Cook County. The larger and more complex the assets flowing through the pour-over, the more time-consuming and expensive the probate process. This underscores why thorough trust funding — getting assets into the trust while you are alive — is so important.',
    },
    {
      question: 'Do I need both a pour-over will and a regular will in Illinois?',
      answer:
        'You do not need both. A pour-over will is itself a type of will — it satisfies all the formal requirements of an Illinois will and can address everything a regular will does, including naming guardians for minor children and expressing other final wishes. Families with a revocable living trust typically use a pour-over will in place of a standard will. The pour-over will handles any assets that were not placed in the trust during your lifetime, while the trust controls assets that were funded into it.',
    },
    {
      question: 'Can a pour-over will name a guardian for my minor children in Illinois?',
      answer:
        'Yes — and this is one of the most important functions of the pour-over will that the trust itself cannot perform. A revocable living trust manages property, but only a will can nominate a guardian for your minor children in Illinois. The Circuit Court has final authority over guardianship appointments, but it gives substantial weight to the guardian named in your will. If you have minor children, this reason alone makes a pour-over will essential even if your trust is nearly fully funded.',
    },
    {
      question: 'What if I amend my trust after I sign my pour-over will?',
      answer:
        'In Illinois, a pour-over will can incorporate a trust as it exists at the time of the will signing, or — more commonly — it can incorporate the trust "as amended from time to time." When drafted properly, future amendments to your trust are automatically captured by the pour-over provision, so you do not need to rewrite your will every time you amend the trust. Your estate planning attorney should draft the pour-over provision to reference the trust as it may be amended so your plan stays cohesive as your life circumstances change.',
    },
  ];

  const cannotDoItems = [
    {
      item: 'Avoid probate for assets that pass through it',
      reason:
        'Assets directed through a pour-over will must still go through the Illinois probate process before reaching the trust. The pour-over will redirects assets into the trust — it does not exempt them from probate.',
    },
    {
      item: 'Transfer real estate without a deed',
      reason:
        'Illinois real estate cannot be transferred by will alone without recording a new deed. A pour-over will can direct that real estate be transferred into the trust, but the executor must still record a deed as part of the probate process.',
    },
    {
      item: 'Override beneficiary designations',
      reason:
        'Life insurance, retirement accounts, and payable-on-death accounts pass directly to named beneficiaries — completely outside of the will and the pour-over provision. These assets cannot be redirected by a pour-over will.',
    },
    {
      item: 'Manage assets during your incapacity',
      reason:
        'A pour-over will has no effect until death. It does nothing to address incapacity planning. A fully funded revocable living trust, paired with a durable power of attorney, handles incapacity. The pour-over will only kicks in at death.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Is a Pour-Over Will in Illinois?',
    description:
      'Learn what a pour-over will does in Illinois, how it works alongside a revocable living trust, and why this key document is essential for your estate plan.',
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
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/what-is-a-pour-over-will-illinois/',
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
                  9 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                What Is a Pour-Over Will in Illinois?
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                A pour-over will is the essential safety net for any Illinois revocable living trust plan — but it is widely misunderstood. Most people assume it avoids probate. It does not. Here is exactly what it does, how it works, and why every trust-based estate plan in Illinois needs one.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 22, 2026</time>
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
                    A pour-over will is a special type of will that directs any assets left in your name at death into your revocable living trust. It acts as a backstop — catching assets that were never transferred into the trust during your lifetime.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Assets captured by a pour-over will still go through Illinois probate before reaching the trust. The pour-over will does not skip the probate process — it simply ensures stray assets ultimately end up in your trust and are distributed according to your trust&apos;s terms, rather than passing under Illinois intestacy law or a separate will.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Almost every Illinois estate plan that includes a revocable living trust should also include a pour-over will. This guide explains what the pour-over will does, how it works step by step, what it cannot do, and how it fits into a complete Illinois estate plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Pour-Over Will at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Catches assets left outside your trust at death', type: 'What It Does', color: 'blue' },
                  { label: 'Assets still go through Illinois probate first', type: 'Key Limitation', color: 'amber' },
                  { label: 'Required alongside every Illinois revocable trust', type: 'Best Practice', color: 'green' },
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

            {/* 2. What Is a Pour-Over Will */}
            <h2 id="what-is-pour-over-will" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is a Pour-Over Will in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A <strong>pour-over will</strong> is a type of last will and testament that contains a specific provision directing that any assets held in your name at death — assets that were never transferred into your revocable living trust during your lifetime — should be transferred into (or &ldquo;poured over&rdquo; into) that trust after you die.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Think of the pour-over will as a funnel. Instead of distributing your assets to named individuals directly from the will (as a traditional will does), the pour-over will routes everything through the trust. Once inside the trust, assets are distributed according to the trust&apos;s terms — by the successor trustee, privately, without further court involvement.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Pour-over wills are authorized under Illinois law by the Uniform Testamentary Additions to Trusts Act (UTATA), which Illinois has adopted as part of the Probate Act of 1975, 755 ILCS 5/4-4. Under this provision, a testator may direct that all or part of an estate pass into a trust established before or simultaneously with the execution of the will.
            </p>

            <div className="border border-gray-200 rounded-xl p-6 bg-white my-6">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                    How a Pour-Over Provision Reads
                  </h4>
                  <p className="text-sm text-gray-700 font-['Plus_Jakarta_Sans'] leading-relaxed mb-3">
                    The core pour-over clause in an Illinois will typically reads something like this:
                  </p>
                  <blockquote className="border-l-4 border-[#4a708b] pl-4 italic text-gray-600 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    &ldquo;I give all of my remaining property — whether real, personal, or mixed — to the then-acting trustee of the [Name] Revocable Living Trust, dated [Date], as amended from time to time, to be held, administered, and distributed in accordance with the terms of that trust.&rdquo;
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-3 font-['Plus_Jakarta_Sans']">
                    The phrase &ldquo;as amended from time to time&rdquo; is critical. It means future amendments to the trust are automatically captured, so you do not need to rewrite the will every time the trust changes.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. How It Works */}
            <h2 id="how-it-works" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How a Pour-Over Will Works in Illinois: Step by Step
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Understanding the mechanics of a pour-over will requires understanding what happens to assets that were <em>not</em> transferred into the trust during your lifetime. Here is the step-by-step flow.
            </p>

            <h3 id="assets-outside-trust" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Assets Left Outside the Trust at Death
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Even the most diligent Illinois estate planners sometimes leave assets outside the trust. Common examples include:
            </p>

            <div className="space-y-3 my-6">
              {[
                'A bank account that was never retitled in the trust\'s name',
                'An inheritance received after the trust was created, deposited into a personal account',
                'A settlement from a lawsuit or insurance claim paid to you individually',
                'Personal property — furniture, jewelry, art — never formally assigned to the trust',
                'A small investment account overlooked during the trust funding process',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Without a pour-over will, these assets would either be distributed under a separate traditional will (if you had one) or — if no other will exists — pass under Illinois intestacy law, which distributes assets to heirs in an order set by statute, regardless of your wishes.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              With a pour-over will, these stray assets are swept into the trust — so they ultimately pass to the same beneficiaries, in the same manner, as everything else in your estate plan. The plan stays cohesive.
            </p>

            <h3 id="probate-step" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Probate Step
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is the critical point that surprises many Illinois families: assets that pass through a pour-over will do <em>not</em> skip probate. The pour-over will is still a will — and assets directed by a will must go through the Illinois probate process before they can be transferred anywhere, including into your trust.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">The most common misconception about pour-over wills</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Many people believe a pour-over will avoids probate because it &ldquo;sends everything to the trust.&rdquo; It does not. Assets passing through a pour-over will still go through Illinois probate — the executor must open an estate, publish the required creditor notices, and wait out the six-month creditor claim period under 755 ILCS 5/18-3. Only after probate closes do those assets transfer into the trust. The probate avoidance happens on the trust side — for assets that were already inside the trust before death — not through the pour-over will.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 my-6">
              {[
                {
                  step: '1',
                  title: 'Death occurs — executor opens probate in the Circuit Court',
                  detail: 'For Chicago-area residents, that is the Circuit Court of Cook County, Probate Division. The executor files a petition to admit the will to probate and receives Letters of Office.',
                },
                {
                  step: '2',
                  title: 'Creditor notice period runs (6 months)',
                  detail: 'The executor publishes a Notice to Creditors in a local newspaper for three consecutive weeks. Creditors have six months from first publication to file claims against the estate.',
                },
                {
                  step: '3',
                  title: 'Debts, expenses, and taxes are paid',
                  detail: 'Valid creditor claims are paid from estate assets in the statutory priority order. The final income tax return is filed. Illinois estate tax applies only to estates over $4 million as of 2026.',
                },
                {
                  step: '4',
                  title: 'Remaining assets transfer into the trust',
                  detail: 'After probate concludes, the executor transfers the remaining assets into the revocable living trust (now an irrevocable trust after death). The successor trustee then distributes them per the trust terms.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The key takeaway: the pour-over will ensures that stray assets end up in the right place. But the probate process still applies to those assets. This is why thorough{' '}
              <Link href="/blog/how-to-fund-a-revocable-living-trust-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                trust funding
              </Link>{' '}
              is so important — every asset transferred into the trust during your lifetime avoids probate entirely and passes directly under the trustee&apos;s management, without waiting for a court to close an estate.
            </p>

            {/* 4. Validity Requirements */}
            <h2 id="validity-requirements" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Makes a Pour-Over Will Valid in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A pour-over will must satisfy all the same formal requirements as any other Illinois will under the Probate Act of 1975, 755 ILCS 5/4-3. These requirements are not relaxed just because the will contains a pour-over provision.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Will Validity Requirements
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'The testator must be at least 18 years old',
                  'The testator must be of sound mind and legal capacity at signing',
                  'The will must be in writing (oral wills are not valid in Illinois)',
                  'The testator must sign the will, or direct another to sign on their behalf',
                  'Two credible witnesses must sign the will in the testator\'s presence',
                  'The trust referenced must already exist or be created simultaneously with the will',
                  'The trust terms must be in a written document',
                  'Amendments to the trust after the will is signed are typically valid if the pour-over clause says "as amended"',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                    <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois does not require wills to be notarized to be valid, though a <strong>self-proving affidavit</strong> — signed before a notary — makes the probate process easier by eliminating the need for witness testimony when the will is admitted to probate. Most Illinois estate planning attorneys recommend including a self-proving affidavit as a matter of course.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The trust referenced in the pour-over will does not need to be funded (i.e., hold any assets) at the time the will is signed. The trust simply needs to exist as a valid legal document. Assets will flow into it at death when the pour-over provision activates.
            </p>

            {/* 5. What It Cannot Do */}
            <h2 id="what-it-cannot-do" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What a Pour-Over Will Cannot Do
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Understanding the limits of a pour-over will is just as important as understanding what it accomplishes. Here are four things a pour-over will does not do, no matter how well it is drafted.
            </p>

            <div className="space-y-3 my-8">
              {cannotDoItems.map((item, i) => (
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

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              These limitations reinforce why a pour-over will works best as one piece of a complete estate plan — not as a standalone solution. The revocable living trust does the heavy lifting (holding funded assets, managing them during incapacity, distributing them privately after death), while the pour-over will serves as the backstop.
            </p>

            {/* 6. Pour-Over Will vs. Regular Will */}
            <h2 id="vs-regular-will" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Pour-Over Will vs. Regular Will: Key Differences
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Both a pour-over will and a traditional will are valid Illinois wills — both require the same execution formalities, both must go through probate, and both can be contested. The fundamental difference is in what they do with the assets they capture.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Pour-Over Will vs. Traditional Will
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-6 font-bold text-gray-700">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Pour-Over Will</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Traditional Will</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Who receives assets', 'Assets flow into the revocable living trust', 'Assets distributed directly to named beneficiaries'],
                      ['Distribution terms', 'Set by the trust document', 'Set in the will itself'],
                      ['Privacy', 'Distribution terms stay private (in the trust)', 'All distribution terms become public record in probate'],
                      ['Trust required?', 'Yes — must have a companion trust', 'No — standalone document'],
                      ['Probate required?', 'Yes, for any assets passing through it', 'Yes, for any assets passing through it'],
                      ['Can name guardians for children?', 'Yes', 'Yes'],
                      ['Ongoing asset management', 'Trust can hold assets for years under trustee management', 'Assets typically distributed outright after probate'],
                      ['Best used when…', 'You have (or plan to have) a revocable living trust', 'You want a simple will-only estate plan'],
                    ].map(([factor, pourOver, traditional], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-gray-600">{pourOver}</td>
                        <td className="py-3 px-4 text-gray-600">{traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One significant advantage of the pour-over structure over a traditional will is <strong>privacy</strong>. A traditional will is filed with the probate court and becomes a public document — anyone can read it. Your trust, by contrast, is never filed with any court. The distribution terms, your beneficiaries, and the amounts they receive all remain private. The pour-over will itself, which is filed with the court, simply says &ldquo;everything goes to the trust,&rdquo; without revealing what happens inside the trust.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Need a Pour-Over Will for Your Illinois Trust Plan?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create complete estate plans — revocable living trusts, pour-over wills, powers of attorney, and every supporting document. Transparent flat-fee pricing. Free initial consultation.
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
                  href="/chicago-wills-lawyer/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Our Wills Services
                </Link>
              </div>
            </div>

            {/* 7. Fully Funded Trust */}
            <h2 id="fully-funded" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Do You Still Need a Pour-Over Will If Your Trust Is Fully Funded?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Yes — and here is why. Even if you do an excellent job funding your revocable living trust today, the future is unpredictable. You may receive an inheritance or legal settlement that is deposited into a personal account before you have time to retitle it. You may open a new checking account for convenience and forget to add it to the trust. A small asset may slip through the cracks.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Beyond catching stray assets, the pour-over will serves another function that the trust itself cannot: <strong>naming a guardian for your minor children</strong>. A revocable living trust manages property — it cannot nominate who will raise your children. In Illinois, only a will can nominate a guardian for a minor child. The Circuit Court has final say over guardianship, but it gives great weight to the guardian named in the will. For parents of minor children, this alone makes the pour-over will indispensable.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">
                    A pour-over will and a revocable trust are designed to work as a team
                  </p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The trust does the heavy lifting — holding funded assets, managing them during incapacity, and distributing them privately after death. The pour-over will plays a supporting role: it names a guardian for children, handles any assets that miss the trust, and provides a complete legal document to admit to probate if needed. Together, they give you a cohesive estate plan with no gaps.
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Another practical reason to always have a pour-over will: if your trust is somehow invalidated or revoked after you die — a rare but not impossible scenario — the pour-over will still functions as a traditional will and distributes your assets to your intended beneficiaries. It is a second line of defense.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois estate planning attorneys recommend viewing a pour-over will not as optional &ldquo;extra paperwork,&rdquo; but as a required companion document to any revocable living trust. The cost to add a pour-over will to your estate plan is minimal; the cost of not having one — assets distributed outside your trust terms, or no guardian nominated for your children — can be enormous.
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
              If you have a revocable living trust and no pour-over will, your estate plan has a gap. Contact your estate planning attorney to add one. The process is straightforward — your attorney will draft a will that incorporates your existing trust by reference and satisfies all Illinois will execution requirements.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are just starting the estate planning process and are considering whether a revocable living trust is right for you, see our guides on{' '}
              <Link
                href="/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                the advantages and disadvantages of revocable living trusts in Illinois
              </Link>{' '}
              and{' '}
              <Link
                href="/blog/what-is-a-simple-estate-plan-in-chicago-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                what a simple estate plan looks like in Chicago
              </Link>
              . Once you decide a trust is right for you, read our step-by-step guide on{' '}
              <Link
                href="/blog/how-to-fund-a-revocable-living-trust-illinois/"
                className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']"
              >
                how to fund a revocable living trust in Illinois
              </Link>{' '}
              to make sure your plan actually works when your family needs it.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois Estate Law offers flat-fee estate planning packages that include a revocable living trust, pour-over will,{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                powers of attorney
              </Link>
              , and all supporting documents. Visit our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                services and pricing page
              </Link>{' '}
              to see exactly what is included — with no hourly billing surprises.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families create complete estate plans — revocable living trusts, pour-over wills, powers of attorney, and every document needed to protect your assets and your family. Schedule a free consultation to get started.
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
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/advantages-and-disadvantages-of-revocable-living-trusts-in-illinois/',
                    label: 'Advantages and Disadvantages of Revocable Living Trusts in Illinois',
                  },
                  {
                    href: '/blog/trustee-vs-executor-illinois/',
                    label: 'Trustee vs. Executor in Illinois: Roles, Duties, and Which You Need',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Why Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/what-makes-a-will-valid-in-illinois/',
                    label: 'What Makes a Will Valid in Illinois?',
                  },
                  {
                    href: '/blog/should-you-put-your-house-in-a-trust-in-illinois/',
                    label: 'Should You Put Your House in a Trust in Illinois?',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law is complex and fact-specific — the right documents for your estate plan depend on your individual assets, family circumstances, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Create a Complete Illinois Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and put a fully coordinated revocable trust and pour-over will in place — protecting your family and your assets from gaps in your plan.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-a-pour-over-will-illinois/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-a-pour-over-will-illinois/')}&text=${encodeURIComponent('What Is a Pour-Over Will in Illinois? How it works and why every trust plan needs one')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-is-a-pour-over-will-illinois/')}`}
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
