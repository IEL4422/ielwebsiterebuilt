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
  RefreshCw,
  Heart,
  FileText,
  Scale,
  Users,
  DollarSign,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'why-review-estate-plan-every-few-years';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'life-events',
      title: 'Life Events That Trigger a Review',
      level: 2,
      numeration: '2',
      children: [
        { id: 'marriage-divorce', title: 'Marriage or Divorce', level: 3, numeration: '2.1' },
        { id: 'birth-adoption', title: 'Birth or Adoption of a Child', level: 3, numeration: '2.2' },
        { id: 'death-of-named-person', title: 'Death of a Beneficiary, Executor, or Trustee', level: 3, numeration: '2.3' },
        { id: 'relocation', title: 'Moving to or from Illinois', level: 3, numeration: '2.4' },
      ],
    },
    {
      id: 'financial-changes',
      title: 'Financial Changes That Require Updates',
      level: 2,
      numeration: '3',
    },
    {
      id: 'law-changes',
      title: 'Legal and Tax Law Changes in Illinois',
      level: 2,
      numeration: '4',
    },
    {
      id: 'how-often',
      title: 'How Often Should You Review?',
      level: 2,
      numeration: '5',
    },
    {
      id: 'what-to-review',
      title: 'What to Look at During a Review',
      level: 2,
      numeration: '6',
    },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '8' },
  ];

  const faqs = [
    {
      question: 'How often should I review my estate plan in Illinois?',
      answer:
        'Most estate planning attorneys recommend a comprehensive review every three to five years — or sooner if a major life event occurs. Illinois-specific triggers include the state\'s $4 million estate tax threshold (which can shift with legislative changes), changes to the Illinois Power of Attorney Act, and any updates to the Illinois Trust Code or Probate Act. Even if nothing has changed in your life, a five-year-old estate plan may reference outdated laws, deceased beneficiaries, or assets that no longer exist. A periodic check-in with an Illinois estate planning attorney is the most reliable way to keep your plan current.',
    },
    {
      question: 'Does divorce automatically update my Illinois will?',
      answer:
        'Partially, but not completely. Under the Illinois Probate Act (755 ILCS 5/4-7), a divorce or annulment automatically revokes any provision of a will that benefits your former spouse, and revokes any appointment of your former spouse as executor. However, this revocation applies only to your will — it does NOT automatically update beneficiary designations on life insurance policies, retirement accounts, or payable-on-death accounts. It also does not update your revocable living trust, healthcare power of attorney, or financial power of attorney. After a divorce, you should update every document and beneficiary designation individually rather than relying on the automatic statutory revocation.',
    },
    {
      question: 'What happens if my named executor or trustee dies before me?',
      answer:
        'If your named executor dies before you and you have not updated your will, the court will appoint an administrator from among your heirs — someone you may not have chosen. If your successor trustee dies and no alternate is named, your trust document may become administratively unworkable and require court intervention. This is why naming at least one backup (and ideally two) for every fiduciary role — executor, successor executor, trustee, successor trustee, and agent under your powers of attorney — is so important. A routine review ensures the people named are still living, still willing, and still the best choice.',
    },
    {
      question: 'Does Illinois estate tax affect my estate plan review?',
      answer:
        'Yes. Illinois imposes a separate estate tax on estates exceeding $4 million (as of 2026), with rates ranging from 0.8% to 16%. Illinois has no portability between spouses, unlike the federal estate tax — meaning you cannot simply transfer unused exemption to a surviving spouse. For married couples in Illinois with combined assets approaching $4 million, proper estate tax planning — including the possible use of AB trusts, SLATs, or other structures — can save hundreds of thousands of dollars. If your estate has grown significantly since your last review, or if Illinois changes its estate tax threshold, a review with an estate planning attorney is essential.',
    },
    {
      question: 'Can I review my estate plan myself, or do I need an attorney?',
      answer:
        'You can and should review your estate plan documents periodically on your own — reading through your will, trust, and beneficiary designations to check that the people named are still your choices and that your asset list reflects reality. But for anything beyond a self-check — changes to document language, new trust provisions, tax planning adjustments, or updating powers of attorney — you need a licensed Illinois attorney. Illinois estate planning documents have specific execution requirements (witnesses, notarization), and DIY changes that fail to meet those requirements may render the entire document invalid.',
    },
    {
      question: 'What should I bring to an estate plan review appointment?',
      answer:
        'For the most productive review, bring copies of your existing estate planning documents (will, trust, powers of attorney, healthcare directive), a current list of assets and how they are titled, copies of beneficiary designations for retirement accounts and life insurance, any recent changes in your family situation (marriages, divorces, births, deaths), and a rough sense of your current net worth. If significant assets have been acquired since your last plan was drafted — real estate, a business interest, an inheritance — flagging those upfront allows the attorney to assess whether your current plan still accomplishes your goals.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why You Should Review Your Illinois Estate Plan Every Few Years',
    description:
      'Learn when and why to update your Illinois estate plan, what triggers an immediate review, and how life events and law changes can leave your plan dangerously out of date.',
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
    datePublished: '2026-09-23',
    dateModified: '2026-09-23',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/why-review-estate-plan-every-few-years/',
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
                  9 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                Why You Should Review Your Illinois Estate Plan Every Few Years
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                An estate plan you made five years ago may no longer reflect your family, your assets, or Illinois law. Here is how to know when your plan needs a refresh — and what could go wrong if you wait too long.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>September 23, 2026</time>
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

            <div className="bg-blue-50 border-l-4 border-[#4A708B] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <RefreshCw className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    Estate plans are not set-and-forget documents. In Illinois, life events, financial changes, and shifts in state law can all leave your plan dangerously out of date — sometimes within a year or two of signing.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Most Illinois families should review their estate plan at least every three to five years, and immediately following major life changes such as marriage, divorce, the birth of a child, or a significant inheritance. A plan that no longer matches your life can fail to protect your loved ones, trigger unnecessary taxes, or deliver assets to the wrong people.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide walks through the most common reasons Illinois residents need to update their estate plan, the legal changes that can make existing documents obsolete, and a practical checklist for what to review.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#2D3E50] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                When to Review Your Illinois Estate Plan
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Every 3–5 years even if nothing has changed', type: 'Routine Review', color: 'blue' },
                  { label: 'After any major life event: marriage, divorce, birth, death', type: 'Triggered Review', color: 'amber' },
                  { label: 'After significant financial or legal changes in Illinois', type: 'Law & Tax Review', color: 'green' },
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

            {/* 2. Life Events */}
            <h2 id="life-events" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Life Events That Trigger a Review
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              No estate plan survives life unchanged. The people you named years ago may have died, moved, or become estranged. Assets you counted on may have been sold or replaced by new ones your plan never anticipated. The following life events should each prompt an immediate review of every estate planning document you have.
            </p>

            <h3 id="marriage-divorce" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Marriage or Divorce
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Marriage and divorce are two of the most disruptive events for an existing estate plan — and the way Illinois law handles each is different, and often misunderstood.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you marry and have an existing will, Illinois law does <em>not</em> automatically revoke that will or add your new spouse as a beneficiary. Your prior beneficiaries remain in place unless you act. More importantly, if you die without a will after marriage, Illinois intestacy law under 755 ILCS 5/2-1 gives your spouse a significant share of your estate — potentially displacing children from a prior relationship. A new estate plan after marriage is not optional; it is essential.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              After a divorce, Illinois law under 755 ILCS 5/4-7 automatically revokes will provisions benefiting your former spouse and revokes their appointment as executor. But that protection is narrower than most people realize. It does <strong>not</strong> update beneficiary designations on retirement accounts, life insurance, or payable-on-death bank accounts — those are governed by federal and contract law, not Illinois statute. It also does not update your revocable living trust, your financial power of attorney, or your healthcare power of attorney. Without a comprehensive update after divorce, your ex-spouse could still receive your retirement account or make healthcare decisions for you.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Divorce does not update your beneficiary designations</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Beneficiary designations on IRAs, 401(k)s, and life insurance policies are contractual and override your will entirely. Illinois courts have repeatedly seen estates where the divorce-era ex-spouse collected a retirement account or life insurance payout because the owner never updated the form. Update every designation immediately after a divorce — do not wait until your estate plan review.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="birth-adoption" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Birth or Adoption of a Child
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The arrival of a new child is one of the most compelling reasons to create — or update — an estate plan. If you have minor children, your will needs to name a <strong>guardian</strong> to care for them if both parents die. Without a named guardian, an Illinois court decides for you — a process that can be contentious, delayed, and deeply stressful for the family.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Beyond guardianship, you also need to plan for how assets will be managed for young children. Minor children cannot inherit directly in Illinois — a court-supervised guardianship of the estate or a testamentary trust must manage any significant inheritance. If your existing plan leaves assets outright to your children, a new child may be partially omitted, or the distribution structure may no longer fit your family. A{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trust
              </Link>{' '}
              with clear terms for how assets are held and distributed for each child by name is typically the better approach.
            </p>

            <h3 id="death-of-named-person" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Death of a Beneficiary, Executor, or Trustee
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When someone named in your estate plan dies, the plan does not automatically adjust. A deceased primary beneficiary may mean assets pass to an unintended alternate — or into a residuary clause that distributes them in a way you never intended. A deceased executor or trustee with no named backup forces a court to appoint someone you might not have chosen.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Review your plan any time a named beneficiary, executor, trustee, or agent under a power of attorney passes away. While you are at it, confirm that every backup you named is still living and still willing to serve in that role.
            </p>

            <h3 id="relocation" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Moving to or from Illinois
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Estate planning documents are governed by the state law of the state in which they were executed. If you moved to Illinois from another state, your will and powers of attorney may be technically valid here — but they may not be in the form Illinois professionals and institutions expect, and they may not take advantage of Illinois-specific tools like the{' '}
              <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Transfer on Death Instrument
              </Link>{' '}
              or summary probate. If you move out of Illinois, the reverse is true. Any relocation across state lines should trigger a review with an attorney licensed in the new state.
            </p>

            {/* 3. Financial Changes */}
            <h2 id="financial-changes" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Financial Changes That Require Updates
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              An estate plan built around a $400,000 estate looks very different from one designed for a $4 million estate — and Illinois law treats them very differently too. Financial changes that should prompt a review include:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Significant increase in net worth',
                  detail: 'Illinois imposes a separate estate tax on estates over $4 million (as of 2026), with rates up to 16%. If your estate has grown close to or past that threshold through investment gains, real estate appreciation, or an inheritance, your plan may need tax planning strategies — such as irrevocable trusts, charitable vehicles, or spousal gifting — that were unnecessary before.',
                },
                {
                  title: 'Acquiring real estate',
                  detail: 'Real estate purchased after your trust was created may not be in the trust. Untitled property passes through probate. If you purchased a vacation home, investment property, or a new primary residence since your last review, confirm that the deed reflects the correct ownership structure for your estate plan — and that the property is titled in your trust if you want it to avoid probate.',
                },
                {
                  title: 'Starting or selling a business',
                  detail: 'Business interests require specialized planning — buy-sell agreements, valuation provisions, and succession arrangements that coordinate with your personal estate plan. A business started after your last review may be entirely omitted from your plan, leaving it subject to intestacy or default probate rules that could disrupt operations for surviving partners and employees.',
                },
                {
                  title: 'Receiving a large inheritance',
                  detail: 'If you inherited significant assets — particularly an IRA, real estate, or a business interest — your estate may have grown substantially. Inherited assets often come with their own tax and titling complexities that require updated planning.',
                },
                {
                  title: 'Significant change in debts or liabilities',
                  detail: 'If you have taken on substantial new debt — a large mortgage, a business loan, or a personal guarantee — your estate plan should account for how those liabilities affect what will actually pass to your beneficiaries after creditor claims are satisfied.',
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

            {/* 4. Law Changes */}
            <h2 id="law-changes" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Legal and Tax Law Changes in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Estate planning law does not stand still. Both Illinois state law and federal law have changed significantly in recent years, and further changes are always possible. An estate plan drafted under a prior legal regime may contain provisions that no longer work as intended — or that miss planning opportunities that did not exist when it was signed.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  icon: <Scale className="w-5 h-5 text-[#4a708b]" />,
                  title: 'Illinois Trust Code (2020)',
                  body: 'The Illinois Trust Code took effect on January 1, 2020, replacing the prior Illinois Trusts and Trustees Act. Trusts drafted before 2020 are still valid, but they may not align with or take full advantage of Trust Code provisions around trustee powers, beneficiary rights, and modification procedures.',
                },
                {
                  icon: <DollarSign className="w-5 h-5 text-[#4a708b]" />,
                  title: 'Illinois Estate Tax Threshold',
                  body: 'Illinois\'s estate tax exemption is $4 million — far lower than the federal exemption. The state legislature can and has adjusted this threshold over time. Couples with combined assets near or above $4 million should review their plan any time Illinois tax law changes, and consider AB trust planning or other structures to maximize both spouses\' exemptions.',
                },
                {
                  icon: <FileText className="w-5 h-5 text-[#4a708b]" />,
                  title: 'Power of Attorney Act Updates',
                  body: 'Illinois updated its statutory short form power of attorney in 2012 and has made additional changes since. Older powers of attorney may use outdated language that some institutions decline to honor. Reviewing and re-executing your financial and healthcare powers of attorney every several years ensures they remain current and effective.',
                },
                {
                  icon: <Users className="w-5 h-5 text-[#4a708b]" />,
                  title: 'Federal Estate and Gift Tax',
                  body: 'The federal estate tax exemption has fluctuated significantly. Changes at the federal level — particularly any reduction in the lifetime exemption — can turn a modest estate tax exposure into a significant one overnight. Federal law changes require immediate coordination with your Illinois estate plan.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-[#2D3E50] text-sm mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#2D3E50] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Not Sure If Your Estate Plan Is Still Current?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law offers estate plan reviews for Chicago-area families — flat-fee pricing, no surprises, and clear guidance on what needs updating and what can stay as is.
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

            {/* 5. How Often */}
            <h2 id="how-often" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How Often Should You Review Your Illinois Estate Plan?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The standard recommendation among Illinois estate planning attorneys is a comprehensive review <strong>every three to five years</strong>, regardless of whether any obvious life event has occurred. A five-year-old plan can be stale even if nothing dramatic has changed in your life — asset values shift, the people you named age, Illinois law evolves, and your own priorities and values may have changed without you fully realizing it.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In addition to that baseline, certain events should trigger an <em>immediate</em> review regardless of when you last updated:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'Marriage or divorce',
                'Birth, adoption, or death of a child or grandchild',
                'Death of a named beneficiary, executor, or trustee',
                'Significant increase or decrease in your net worth',
                'Acquiring or selling real estate',
                'Starting, buying, or selling a business',
                'Moving to or from Illinois',
                'A major change in your health',
                'Receiving a large inheritance or gift',
                'Major changes to Illinois or federal estate tax law',
                'A named person becoming incapacitated or unwilling to serve',
                'Estrangement from a beneficiary or named fiduciary',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <CheckCircle2 className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* 6. What to Review */}
            <h2 id="what-to-review" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What to Look at During an Estate Plan Review
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A thorough estate plan review is not just rereading your will. It covers every document in your plan, every asset title, and every beneficiary designation — because they all work together, and a gap in any one can undermine the rest. Here is what a complete Illinois estate plan review should cover:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  heading: 'Your will',
                  body: 'Confirm that the beneficiaries named still reflect your wishes, that your executor and successor executor are still living and willing to serve, that the guardian named for minor children is still your choice, and that specific bequests still make sense given your current assets. If you have a pour-over will that works with a revocable living trust, confirm that it properly references the trust.',
                  color: 'blue',
                },
                {
                  heading: 'Your revocable living trust',
                  body: 'Confirm that the trust is fully funded — meaning all significant assets have been transferred into the trust or carry beneficiary designations. Review the distribution terms for each beneficiary, the named successor trustee and backups, and any special provisions for minor or disabled beneficiaries. Make sure the trust document still reflects your intentions and that no assets have been accidentally removed from the trust.',
                  color: 'green',
                  link: '/chicago-revocable-trusts-lawyer/',
                  linkLabel: "Learn about IEL's revocable trust services",
                },
                {
                  heading: 'Powers of attorney',
                  body: 'Review your financial power of attorney (naming your agent to handle financial matters if you are incapacitated) and your healthcare power of attorney (naming your healthcare agent and setting out your healthcare wishes). Confirm the agents named are still living, willing, and your choice — and that the documents use current Illinois statutory forms.',
                  color: 'amber',
                  link: '/chicago-powers-of-attorney-lawyer/',
                  linkLabel: "Learn about IEL's power of attorney services",
                },
                {
                  heading: 'Beneficiary designations',
                  body: 'Pull current beneficiary designation forms for every retirement account (IRA, 401(k), 403(b)), life insurance policy, annuity, and payable-on-death bank account. Confirm that the named beneficiaries are still living and still your intended recipients. Confirm that primary and contingent beneficiaries are both named. Outdated designations on a large retirement account can easily override a carefully drafted will.',
                  color: 'blue',
                },
                {
                  heading: 'Asset titling',
                  body: 'Review how every significant asset is titled. Real property, brokerage accounts, and bank accounts should be titled consistent with your estate plan — in the name of your trust if you have one, or in joint tenancy or with appropriate transfer-on-death designations if that is the intended strategy. Assets titled in your name alone without any beneficiary designation or automatic transfer mechanism will pass through probate.',
                  color: 'green',
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
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.heading}</h3>
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
              The most important thing an estate plan review tells you is whether your plan still matches your life. In many cases, the answer is yes — a quick check gives you peace of mind and you move on. In some cases, a review uncovers a beneficiary who has died, a trustee who has moved away, or an asset worth far more than when your plan was written. Catching those gaps now, rather than after your death, protects the people you care about.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have not reviewed your Illinois estate plan in the past three years — or if any of the life events described above have occurred — now is the right time. Illinois Estate Law offers flat-fee estate plan reviews for individuals and couples across the Chicago area, with virtual appointments available throughout Illinois. Our team will walk through every document, identify gaps or outdated provisions, and give you a clear picture of what your plan does and does not accomplish today.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For related reading, see our guides on{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois wills
              </Link>
              ,{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts
              </Link>
              , and{' '}
              <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                powers of attorney
              </Link>{' '}
              — or explore our{' '}
              <Link href="/services-pricing/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                services and flat-fee pricing
              </Link>
              .
            </p>

            <div className="bg-[#2D3E50] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Schedule an Illinois Estate Plan Review
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area families review, update, and strengthen their estate plans — with transparent flat-fee pricing and a free initial consultation. Virtual appointments available statewide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg font-['Plus_Jakarta_Sans']"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/services-pricing/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  View Services &amp; Pricing
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
                    href: '/blog/what-happens-to-your-estate-plan-when-you-get-divorced-and-why-you-should-update-it/',
                    label: 'What Happens to Your Estate Plan After Divorce in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Beneficiary Designations Override Your Will in Illinois',
                  },
                  {
                    href: '/blog/how-to-fund-a-revocable-living-trust-illinois/',
                    label: 'How to Fund a Revocable Living Trust in Illinois',
                  },
                  {
                    href: '/blog/illinois-estate-tax-cliff-explained/',
                    label: 'Illinois Estate Tax Cliff Explained',
                  },
                  {
                    href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/',
                    label: 'What Is a Simple Estate Plan in Chicago, Illinois?',
                  },
                  {
                    href: '/blog/7-overlooked-steps-that-make-or-break-an-illinois-estate-plan/',
                    label: '7 Overlooked Steps That Make or Break an Illinois Estate Plan',
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois estate planning law is complex and fact-specific — the right approach depends on your individual circumstances, family situation, and goals. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#2D3E50] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Review and Refresh Your Illinois Estate Plan?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and find out exactly what your current plan does — and what it might be missing.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/why-review-estate-plan-every-few-years/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/why-review-estate-plan-every-few-years/')}&text=${encodeURIComponent('Why you should review your Illinois estate plan every few years — and what to look for')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/why-review-estate-plan-every-few-years/')}`}
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
