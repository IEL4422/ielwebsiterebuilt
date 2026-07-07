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
  CircleX as XCircle,
  Gavel,
  Heart,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-inheritance-laws-dying-without-a-will';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'what-is-intestate', title: 'What Is Intestate Succession in Illinois?', level: 2, numeration: '2' },
    {
      id: 'who-inherits',
      title: 'Who Inherits Under Illinois Intestate Succession',
      level: 2,
      numeration: '3',
      children: [
        { id: 'surviving-spouse', title: 'Surviving Spouse', level: 3, numeration: '3.1' },
        { id: 'children-descendants', title: 'Children and Descendants', level: 3, numeration: '3.2' },
        { id: 'parents-siblings', title: 'Parents, Siblings, and Extended Family', level: 3, numeration: '3.3' },
      ],
    },
    { id: 'special-situations', title: 'Special Situations Under Illinois Intestate Law', level: 2, numeration: '4' },
    { id: 'assets-outside', title: 'Assets That Pass Outside Intestate Succession', level: 2, numeration: '5' },
    { id: 'limits-intestate', title: 'What Intestate Succession Cannot Do for Your Family', level: 2, numeration: '6' },
    { id: 'why-will-matters', title: 'Why a Will Beats the Default Intestate Rules', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const distributionRows = [
    { situation: 'Spouse + children survive', spouseShare: '½ of estate', childrenShare: '½ of estate split equally', othersShare: 'Nothing' },
    { situation: 'Spouse survives, no children', spouseShare: 'Entire estate', childrenShare: 'N/A', othersShare: 'Nothing' },
    { situation: 'Children survive, no spouse', spouseShare: 'N/A', childrenShare: 'Entire estate split equally', othersShare: 'Nothing' },
    { situation: 'No spouse, no children', spouseShare: 'N/A', childrenShare: 'N/A', othersShare: 'Parents equally (or surviving parent)' },
    { situation: 'No spouse, children, or parents', spouseShare: 'N/A', childrenShare: 'N/A', othersShare: 'Siblings equally (or their descendants)' },
    { situation: 'No close family at all', spouseShare: 'N/A', childrenShare: 'N/A', othersShare: 'Distant relatives or escheats to Illinois' },
  ];

  const limits = [
    {
      title: 'No control over who receives your assets',
      detail: 'Intestate succession distributes your estate to whoever Illinois law specifies — not whoever you would choose. A beloved sibling receives nothing if you have a spouse and children. A charity you supported receives nothing at all. Estranged relatives may inherit property you would never voluntarily leave them.',
    },
    {
      title: 'No protection for minor children',
      detail: 'A will lets you name a guardian for your minor children and set up a trust to manage inherited money until they reach adulthood. Without a will, a court appoints a guardian — possibly not the person you would choose — and children may receive a lump sum at age 18 with no restrictions on how they spend it.',
    },
    {
      title: 'No specific bequests',
      detail: 'Intestate succession distributes your estate in fractional shares of cash and property — it cannot give a specific item (your grandmother\'s ring, your car, your business) to a specific person. Every probate asset goes into the pot and gets divided by formula.',
    },
    {
      title: 'No protection for unmarried partners',
      detail: 'Illinois intestate succession law does not recognize unmarried partners — no matter how long you have been together. A long-term partner who shared your home and life receives nothing under default inheritance rules unless they are specifically named in a will or other estate planning document.',
    },
    {
      title: 'No tax or creditor planning',
      detail: 'A well-drafted will can include provisions to minimize Illinois estate tax (which applies to estates over $4 million), protect inherited assets from a beneficiary\'s creditors, or provide for a special needs beneficiary without disqualifying them from government benefits. Intestate succession offers none of these tools.',
    },
  ];

  const faqs = [
    {
      question: 'Does a surviving spouse automatically inherit everything in Illinois?',
      answer: 'Only if the deceased person had no surviving descendants. Under 755 ILCS 5/2-1, if the decedent is survived by both a spouse and children (or other descendants), the spouse inherits half of the probate estate — not everything. The other half goes to the children equally. Many spouses are surprised to learn they must share with their children. This can create complications when the estate includes real estate, requiring a child\'s cooperation (or a court order) to sell the family home.',
    },
    {
      question: 'Do children from a prior marriage inherit under Illinois intestate succession?',
      answer: 'Yes. Illinois intestate succession does not distinguish between children from different relationships. All of a decedent\'s biological and legally adopted children inherit equally. This means if a person dies leaving a current spouse and children from a prior marriage, the prior-marriage children are entitled to their intestate share — half the estate — alongside the surviving spouse. This is a common reason why blended-family estate planning requires a will (or trust) rather than relying on default inheritance rules.',
    },
    {
      question: 'Does an unmarried partner inherit anything in Illinois without a will?',
      answer: 'No. Illinois intestate succession law does not recognize unmarried partners, regardless of how long they lived together or how intertwined their finances were. If you die without a will and are not legally married, your partner receives nothing from your probate estate. The only way to provide for an unmarried partner is through a will, a living trust, joint tenancy with right of survivorship, or a beneficiary designation on a specific account or policy.',
    },
    {
      question: 'What happens to a jointly-owned house when someone dies without a will in Illinois?',
      answer: 'It depends on how the property is titled. If the home is held in joint tenancy with right of survivorship, it passes automatically to the surviving co-owner outside of intestate succession — no probate required. If the home is held as tenants in common (each owner holds a distinct fractional share), the deceased owner\'s share becomes part of their probate estate and passes under intestate succession laws. That means a surviving spouse may now co-own the home with the children, which can create real complications if they disagree on whether to sell.',
    },
    {
      question: 'Are illegitimate or non-marital children treated differently under Illinois law?',
      answer: 'Illinois law does not use the term "illegitimate." Under 755 ILCS 5/2-2, a child born outside of marriage inherits from and through the mother automatically. The child inherits from the father if paternity has been legally established — either by the father\'s acknowledgment, by a court order of paternity, or if the parents later married. Once paternity is established, the child inherits the same intestate share as any other child.',
    },
    {
      question: 'Can intestate succession be avoided even after someone has already died?',
      answer: 'Not entirely — but there are limited tools. An heir can disclaim (refuse) their intestate share, which passes the disclaimed share as if the heir had predeceased. A disclaimer must be in writing, filed with the court, and completed within 9 months of the decedent\'s death. In some cases, family members can reach a private settlement agreement to divide the estate differently than the intestate rules would dictate — but all heirs must agree and the court must approve. The only real way to avoid intestate succession is to create a will or other estate planning documents before death.',
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Illinois Inheritance Laws: Who Inherits When You Die Without a Will',
    description:
      'Understand Illinois intestate succession laws — who inherits your estate if you die without a will, how assets are divided among spouses, children, and other heirs, and why a will gives you far more control.',
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
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/illinois-inheritance-laws-dying-without-a-will/',
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
                Illinois Inheritance Laws: Who Inherits When You Die Without a Will
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                If you die without a will in Illinois, the state decides who gets your property — and the results often surprise families. Understanding intestate succession laws helps you see exactly what the default rules are, and why a will almost always produces a better outcome.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 1, 2026</time>
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
                <Scale className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    When an Illinois resident dies without a valid will, their estate is distributed under the state&apos;s intestate succession laws (755 ILCS 5/2-1). These laws follow a fixed formula based on family relationships — spouse, children, parents, siblings — with no regard for your actual wishes, personal relationships, or financial needs.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    The core rule: if you leave behind a spouse and children, each gets half. If only a spouse survives, the spouse inherits everything. If only children survive, they split everything equally. The further down the family tree the law must travel to find heirs, the more surprising the outcomes often are.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    This guide explains exactly how Illinois intestate succession works, walks through who inherits in every common scenario, covers special situations like blended families and unmarried partners, and explains why even a simple will gives you far more control over your estate.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reference table */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Intestate Succession at a Glance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-300 bg-gray-100">
                      <th className="text-left py-3 px-4 font-bold text-gray-700">Situation</th>
                      <th className="text-left py-3 px-4 font-bold text-[#33414E]">Surviving Spouse</th>
                      <th className="text-left py-3 px-4 font-bold text-[#4a708b]">Children</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-600">Other Heirs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {distributionRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-4 font-medium text-gray-800">{row.situation}</td>
                        <td className="py-3 px-4 text-gray-600">{row.spouseShare}</td>
                        <td className="py-3 px-4 text-gray-600">{row.childrenShare}</td>
                        <td className="py-3 px-4 text-gray-600">{row.othersShare}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3 font-['Plus_Jakarta_Sans']">
                Source: 755 ILCS 5/2-1. &ldquo;Descendants&rdquo; includes grandchildren if a child predeceased the decedent (they inherit their parent&apos;s share by representation).
              </p>
            </div>

            {/* 2. What Is Intestate Succession */}
            <h2 id="what-is-intestate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Is Intestate Succession in Illinois?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When a person dies without a valid will — or with a will that fails to dispose of all their property — their assets pass under Illinois&apos;s law of intestate succession. The governing statute is <strong>755 ILCS 5/2-1</strong>, which sets out a fixed priority order of heirs based solely on family relationships. No matter how close you were to someone, no matter what they promised you during their lifetime, and no matter what a deceased person actually wanted — intestate succession ignores all of that and applies the state&apos;s default formula.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Intestate succession applies only to <strong>probate assets</strong> — property held in the decedent&apos;s name alone at death, with no automatic transfer mechanism. Assets with a named beneficiary (life insurance, retirement accounts, payable-on-death accounts), property held in joint tenancy with right of survivorship, real estate covered by a Transfer-on-Death Instrument, and assets held in a living trust all pass outside of intestate succession entirely, regardless of what the law says.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Dying without a will is called dying &ldquo;intestate&rdquo;</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    The word &ldquo;intestate&rdquo; simply means dying without a valid will. Illinois law uses it throughout the Probate Act (755 ILCS 5). If your estate goes through intestate succession, it will go through probate court — where a judge appoints an administrator (rather than an executor you named), supervises asset distribution, and applies the default inheritance rules. Learn more about the probate process in our{' '}
                    <Link href="/blog/how-long-does-probate-take-in-illinois/" className="text-amber-800 underline font-medium">
                      Illinois probate timeline guide
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Who Inherits */}
            <h2 id="who-inherits" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Who Inherits Under Illinois Intestate Succession Laws
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois intestate succession follows a precise priority order. The law starts at the top of the family tree and works down. Once a class of heirs is found to exist, lower-priority relatives receive nothing — even if a closer relationship might have existed in practice.
            </p>

            <h3 id="surviving-spouse" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              The Surviving Spouse
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A surviving spouse is always at the top of the Illinois intestate hierarchy — but how much the spouse receives depends entirely on whether the decedent also left surviving descendants.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <Heart className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Spouse Only (No Children)</h3>
                <p className="text-white/85 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                  If the decedent is survived by a spouse but no descendants (children, grandchildren, etc.), the surviving spouse inherits the <strong className="text-white">entire probate estate</strong>. Parents, siblings, and all other relatives receive nothing.
                </p>
                <p className="text-white/75 text-xs font-['Plus_Jakarta_Sans'] mt-3">
                  755 ILCS 5/2-1(b): &ldquo;to the surviving spouse&rdquo; when no descendant survives.
                </p>
              </div>
              <div className="bg-[#4A708B] text-white rounded-xl p-6">
                <Users className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Spouse + Children</h3>
                <p className="text-white/85 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                  If both a spouse and descendants survive, the estate is split: the surviving spouse receives <strong className="text-white">one-half</strong>, and the other half goes to the decedent&apos;s descendants equally. This often surprises blended families — children from a prior marriage get their full share.
                </p>
                <p className="text-white/75 text-xs font-['Plus_Jakarta_Sans'] mt-3">
                  755 ILCS 5/2-1(a): &ldquo;½ to the surviving spouse and ½ to the descendants.&rdquo;
                </p>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The half-and-half split when a spouse and children both survive is one of the most important — and most misunderstood — aspects of Illinois intestate law. Many people assume a surviving spouse automatically inherits everything. Under Illinois law, that is only true when there are no surviving children or other descendants. If there are children, the spouse must share — and if the estate is illiquid (for example, largely composed of a family home), that forced sharing can require a sale or court proceeding to resolve.
            </p>

            <h3 id="children-descendants" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Children and Descendants
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              When no spouse survives, the entire probate estate passes to the decedent&apos;s <strong>descendants</strong> — a legal term that includes children, grandchildren, great-grandchildren, and further generations. Illinois uses a system called <em>per stirpes</em> (or &ldquo;by representation&rdquo;) distribution, which means:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  num: '1',
                  title: 'Living children share equally',
                  body: 'If the decedent had three living children and no surviving spouse, each child inherits one-third of the probate estate. Simple and equal.',
                },
                {
                  num: '2',
                  title: 'A deceased child\'s share drops to their children',
                  body: 'If one of those three children predeceased the parent but left their own children (the decedent\'s grandchildren), the deceased child\'s one-third share passes to those grandchildren equally. They "step into" their parent\'s shoes.',
                },
                {
                  num: '3',
                  title: 'All children share equally regardless of birth circumstances',
                  body: 'Illinois does not distinguish between children born during a marriage, children born outside marriage (provided paternity is established), and legally adopted children. All inherit equally.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white flex items-start gap-4">
                  <span className="bg-[#33414E] text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#33414E] text-base mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="parents-siblings" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Parents, Siblings, and Extended Family
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If a decedent dies with no surviving spouse and no surviving descendants, the estate moves further up and then across the family tree, following this priority ladder under 755 ILCS 5/2-1:
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-base mb-4 font-['Plus_Jakarta_Sans']">
                Illinois Intestate Priority Order: No Spouse or Children
              </h3>
              <div className="space-y-3">
                {[
                  { priority: '1st', heirs: 'Parents', detail: 'Divided equally between both parents, or entirely to the surviving parent if one has already died.' },
                  { priority: '2nd', heirs: 'Siblings (and their descendants)', detail: 'If no parents survive, the estate passes to brothers and sisters equally. If a sibling has died, their share goes to their children.' },
                  { priority: '3rd', heirs: 'Grandparents', detail: 'Split equally between maternal and paternal grandparents (or to the surviving grandparent on each side).' },
                  { priority: '4th', heirs: 'Aunts and uncles (and their descendants)', detail: 'If grandparents have died, their shares pass to their children — the decedent\'s aunts and uncles — and then to first cousins.' },
                  { priority: '5th', heirs: 'Great-grandparents and their descendants', detail: 'The law continues tracing the family tree until it finds living relatives.' },
                  { priority: 'Last', heirs: 'The State of Illinois', detail: 'If no heirs can be found after exhausting all family lines, the estate "escheats" — passes to the State of Illinois. This is rare but it happens.' },
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap font-['Plus_Jakarta_Sans'] ${
                      i === 0 ? 'bg-[#33414E] text-white' :
                      i === 1 ? 'bg-[#4A708B] text-white' :
                      i < 4 ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {row.priority}
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900 font-['Plus_Jakarta_Sans'] text-sm">{row.heirs}: </span>
                      <span className="text-gray-600 text-sm font-['Plus_Jakarta_Sans']">{row.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Special Situations */}
            <h2 id="special-situations" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Special Situations Under Illinois Intestate Law
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Real families rarely fit a clean textbook scenario. Illinois intestate law includes specific rules for common complications.
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'Children Born Outside Marriage',
                  detail: 'Under 755 ILCS 5/2-2, a child born outside of marriage always inherits from and through their mother. To inherit from the father, paternity must be legally established — through voluntary acknowledgment, a court order, or the parents\' subsequent marriage. Once established, the child inherits identically to any child born during marriage. Illinois does not use the outdated term "illegitimate."',
                  color: 'blue',
                },
                {
                  title: 'Adopted Children',
                  detail: 'Legally adopted children inherit from and through their adoptive parents exactly as biological children do (755 ILCS 5/2-4). They do not inherit from their biological parents once the adoption is final. Stepchildren who were never legally adopted are not considered "children" under intestate succession and receive nothing unless named in a will.',
                  color: 'blue',
                },
                {
                  title: 'Half-Siblings',
                  detail: 'Half-siblings — those who share only one parent with the decedent — inherit the same share as full siblings under Illinois intestate law. There is no half-share reduction. A half-brother and full sister inherit equally.',
                  color: 'green',
                },
                {
                  title: 'Posthumous Children',
                  detail: 'A child conceived before the decedent\'s death but born after the death is treated as if they were alive at the time of death for inheritance purposes (755 ILCS 5/2-3). Their share of the estate is preserved until birth.',
                  color: 'green',
                },
                {
                  title: 'The Simultaneous Death Problem',
                  detail: 'If a spouse and the decedent die in the same event and it cannot be determined who survived the other, Illinois law treats each as having predeceased the other for inheritance purposes (755 ILCS 5/2-8). The decedent\'s estate passes as if no spouse survived — going instead to the decedent\'s other heirs. This is why well-drafted wills include survival clauses.',
                  color: 'amber',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                    item.color === 'green' ? 'bg-green-50 border-green-200' :
                    'bg-amber-50 border-amber-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-base mb-2 font-['Plus_Jakarta_Sans']">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* 5. Assets Outside Intestate */}
            <h2 id="assets-outside" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Assets That Pass Outside of Intestate Succession
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most important concepts in estate planning — and one that surprises many families — is that not all assets are subject to intestate succession. A significant portion of most estates passes outside of probate entirely, directly to named beneficiaries regardless of what any will (or the intestate laws) says.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-8">
              {[
                { label: 'Life insurance policies', detail: 'Pass directly to named beneficiaries. Intestate law does not apply.' },
                { label: '401(k), IRA, and retirement accounts', detail: 'Go to the designated beneficiary on file with the plan administrator.' },
                { label: 'Payable-on-death (POD) bank accounts', detail: 'Transfer to the named beneficiary upon presentation of a death certificate.' },
                { label: 'Transfer-on-death (TOD) brokerage accounts', detail: 'Pass directly to the named beneficiary without probate.' },
                { label: 'Joint tenancy property', detail: 'Passes automatically to the surviving joint tenant(s) by operation of law.' },
                { label: 'Assets in a living trust', detail: 'Distributed by the successor trustee according to the trust terms — no court involved.' },
                { label: 'Illinois Transfer-on-Death Instruments', detail: 'Real estate with a TODI recorded with the county passes to the named beneficiary automatically.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm font-['Plus_Jakarta_Sans']">{item.label}</p>
                    <p className="text-gray-600 text-xs font-['Plus_Jakarta_Sans'] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For many Illinois families, these non-probate assets make up the majority of the estate&apos;s value. But that does not mean intestate succession is irrelevant — any asset held solely in your name with no beneficiary designation will go through probate and follow the intestate rules. Real estate without a TODI, individually-held bank accounts without a POD designation, vehicles, personal property, and business interests all fall into this category.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Beneficiary designations override your will — and intestate succession</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Even if you have a will naming a specific person to receive your IRA, the beneficiary designation on the IRA controls — not the will, and not intestate succession. Outdated beneficiary designations (naming an ex-spouse, a deceased parent, or no one) are one of the most common and costly estate planning mistakes in Illinois. Read our guide on{' '}
                    <Link href="/blog/beneficiary-designations-override-your-will-illinois/" className="text-[#4a708b] underline font-medium">
                      why beneficiary designations override your will in Illinois
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Limits of Intestate Succession */}
            <h2 id="limits-intestate" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What Intestate Succession Cannot Do for Your Family
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Even setting aside the question of whether the default distribution matches your wishes, intestate succession has fundamental structural limitations that a will can address. Here are five things the intestate rules simply cannot do.
            </p>

            <div className="space-y-3 my-8">
              {limits.map((limit, i) => (
                <div key={i} className="border-l-4 border-[#547298] bg-gray-50 p-5 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-2 font-['Plus_Jakarta_Sans']">{limit.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{limit.detail}</p>
                </div>
              ))}
            </div>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Want to Control Who Inherits Your Estate?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law helps Chicago-area families create wills and trusts that put them in control — protecting spouses, providing for children on your terms, and keeping assets away from people you would never choose as heirs. Flat-fee pricing means you always know the cost upfront.
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

            {/* 7. Why a Will Beats Intestate */}
            <h2 id="why-will-matters" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Why a Will Beats the Default Intestate Rules
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A will does not just change who gets what — it gives you a level of control, flexibility, and protection that intestate succession simply cannot offer. Here is a side-by-side comparison of the two approaches.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <XCircle className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">Without a Will (Intestate)</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'State formula controls who inherits',
                    'Spouse may share estate with children',
                    'Unmarried partner receives nothing',
                    'Court appoints an administrator you did not choose',
                    'No guardian named for minor children',
                    'No trust protection for young or vulnerable heirs',
                    'No specific bequests to individuals or charities',
                    'No estate tax or creditor planning',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-lg mb-3 font-['Plus_Jakarta_Sans']">With a Valid Will</h3>
                <ul className="space-y-2 text-sm font-['Plus_Jakarta_Sans'] text-gray-700">
                  {[
                    'You decide exactly who receives what',
                    'Spouse can inherit the full estate if that is your wish',
                    'Unmarried partner can be named as a beneficiary',
                    'You name the executor you trust to administer your estate',
                    'You designate a guardian for your minor children',
                    'Testamentary trusts protect children until adulthood',
                    'Specific items can go to specific people',
                    'Charitable gifts, tax provisions, and special needs trusts are possible',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              For most Illinois families, a complete estate plan goes beyond just a will. A <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium">revocable living trust</Link> avoids probate entirely, a <Link href="/chicago-powers-of-attorney-lawyer/" className="text-[#4a708b] hover:underline font-medium">durable power of attorney</Link> protects you during incapacity, and properly updated beneficiary designations on financial accounts keep assets out of the probate estate altogether. Together, these tools give you and your family far more control than any default state formula ever could.
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
              Whether you are researching what will happen to your estate if you die tomorrow, navigating the intestate estate of a loved one who passed, or using this as a wake-up call to finally create your own will — the path forward is the same: act before it is too late to choose.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are currently administering an intestate estate in Illinois, see our guides on{' '}
              <Link href="/blog/when-is-probate-required-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                when probate is required in Illinois
              </Link>
              ,{' '}
              <Link href="/blog/how-long-does-probate-take-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                how long probate takes
              </Link>
              , and{' '}
              <Link href="/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                the executor&apos;s comprehensive guide
              </Link>
              . If you want to create a will or complete estate plan before the default rules apply to you, our{' '}
              <Link href="/chicago-wills-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Chicago will drafting services
              </Link>{' '}
              and{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable trust services
              </Link>{' '}
              pages explain your options.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Estate Planning Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Illinois Estate Law helps Chicago-area individuals and families create wills, trusts, and complete estate plans that reflect their actual wishes — not the state&apos;s default formula. A free consultation takes less than an hour and could save your family years of uncertainty.
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
                  Our Will Drafting Services
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
                  { href: '/blog/the-financial-impact-of-dying-without-a-will-in-illinois-and-the-value-of-estate-planning/', label: 'The Financial Impact of Dying Without a Will in Illinois' },
                  { href: '/blog/what-makes-a-will-valid-in-illinois/', label: 'What Makes a Will Valid in Illinois?' },
                  { href: '/blog/when-is-probate-required-in-illinois/', label: 'When Is Probate Required in Illinois?' },
                  { href: '/blog/beneficiary-designations-override-your-will-illinois/', label: 'Why Beneficiary Designations Override Your Will' },
                  { href: '/blog/how-long-does-probate-take-in-illinois/', label: 'How Long Does Probate Take in Illinois?' },
                  { href: '/blog/what-is-a-simple-estate-plan-in-chicago-illinois/', label: 'What Is a Simple Estate Plan in Chicago, Illinois?' },
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
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois inheritance and intestate succession law is complex and fact-specific — outcomes vary based on individual family circumstances, asset structure, and applicable statutes. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Ready to Write Your Own Inheritance Rules?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and create a will or trust that puts you — not the state — in control of who inherits your estate.
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
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-inheritance-laws-dying-without-a-will/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-inheritance-laws-dying-without-a-will/')}&text=${encodeURIComponent('Illinois Inheritance Laws: Who Inherits When You Die Without a Will')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/illinois-inheritance-laws-dying-without-a-will/')}`}
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
