'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, FileText, Calendar, Shield, Edit3 } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'attorney-review-period-illinois-real-estate';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState<number>(0);

  const tocItems = [
    { id: 'summary', title: 'What Is the Attorney Review Period?', level: 2, numeration: '1' },
    { id: 'timeline', title: 'The 5-Day Timeline, Day by Day', level: 2, numeration: '2' },
    { id: 'modifications', title: 'Common Modifications Attorneys Request', level: 2, numeration: '3' },
    { id: 'attorney-approval', title: 'What "Attorney Approval Contingency" Means', level: 2, numeration: '4' },
    { id: 'expiration', title: 'What Happens When the Period Expires', level: 2, numeration: '5' },
    { id: 'strategic-use', title: 'How to Use the Period Strategically', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const days = [
    { label: 'Day 0', title: 'Contract Signed', desc: 'Both buyer and seller sign the real estate contract (typically a Residential Real Estate Purchase and Sale Agreement). The attorney review period begins on the next business day. Weekends and federal holidays do not count.' },
    { label: 'Day 1', title: 'Period Opens', desc: 'The 5-business-day window begins. Your attorney receives the fully executed contract. This is when they begin their review — checking contingency language, earnest money terms, closing date, personal property inclusions, and any addenda.' },
    { label: 'Days 2–4', title: 'Review & Negotiation', desc: 'Your attorney sends any modification requests to the other side. The other party\'s attorney reviews the requests and responds — accepting, countering, or rejecting modifications. Most negotiation happens during these middle days.' },
    { label: 'Day 5', title: 'Deadline', desc: 'The attorney review period closes at the end of the fifth business day. If no written objection or modification request has been sent, the contract is deemed approved as written and becomes fully binding. If either party sent a disapproval letter, the contract may be terminated.' },
    { label: 'After Day 5', title: 'Contract Is Binding', desc: 'Once the period expires without termination, the contract is fully binding on both parties. The transaction moves to the next phase: home inspection, mortgage application, title search, and eventually closing.' },
  ];

  const modifications = [
    { icon: <Shield className="w-5 h-5" />, title: 'Inspection Contingency Language', desc: 'Attorneys often strengthen inspection contingency language — specifying who selects the inspector, the deadline to object to defects, the threshold for material defects, and whether the buyer can terminate for any reason discovered in inspection.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Financing Contingency', desc: 'If the contract\'s financing contingency is vague or too buyer-unfavorable, your attorney will sharpen the language around the loan amount, interest rate ceiling, and the deadline by which the buyer must secure a firm commitment letter.' },
    { icon: <Edit3 className="w-5 h-5" />, title: 'Title Contingency', desc: 'The attorney ensures the contract requires delivery of a clean title commitment and specifies which title defects give the buyer a right to terminate. Sellers should be cautious about overly broad title objection rights.' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Closing Date', desc: 'The proposed closing date may need adjustment — lenders often require 30–45 days after contract for financing; sellers may need time to find replacement housing. Attorneys negotiate a date that works for both sides and include language for what happens if closing is delayed.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Earnest Money Terms', desc: 'Modifications often address when earnest money is released if the contract is terminated, who holds it (usually the listing broker or title company), and the conditions under which the buyer forfeits it.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Personal Property & Fixtures', desc: 'Disputes over what stays with the house (appliances, light fixtures, window treatments, storage shelving) are common. Attorneys clarify inclusions and exclusions in writing to prevent last-minute disputes at closing.' },
  ];

  const faqs = [
    { q: 'Can a seller terminate the contract during attorney review?', a: 'Yes. During the attorney review period, either party\'s attorney can send a disapproval notice that terminates the contract — even without a specific reason. This is one reason sellers in a competitive market sometimes prefer buyers who waive attorney review, though waiving is generally not advisable. If the seller terminates, the earnest money is returned to the buyer.' },
    { q: 'What happens if my attorney misses the 5-day deadline?', a: 'If the deadline passes without any written action, the contract is deemed approved as written. This is why it\'s critical to engage an attorney immediately after signing — not the day before the deadline expires. Illinois real estate attorneys track these deadlines carefully.' },
    { q: 'Does the attorney review period apply to all Illinois real estate transactions?', a: 'The attorney review period is a standard provision in the Illinois REALTORS® form contracts used throughout the state. However, not all transactions use that form — builder contracts, bank-owned (REO) properties, and short sales often use custom contracts that may not include a standard review period. In those cases your attorney\'s review is even more important before you sign.' },
    { q: 'Can I use the attorney review period to renegotiate the price?', a: 'Technically, an attorney review modification request can address any contract term — including price. However, using attorney review primarily to renegotiate a price you already agreed to can damage goodwill and cause the seller to terminate. It is more appropriate for legal and procedural protections than for price renegotiation.' },
    { q: 'What is the difference between a modification and a disapproval during attorney review?', a: 'A modification request proposes changes to specific contract terms. Both parties must agree to the changes — the other side can accept, counter, or reject. A disapproval (or "attorney review termination") is a notice that terminates the contract entirely, usually triggering return of earnest money to the buyer. Attorneys use disapproval when the contract is so deficient that modifications cannot cure the problems.' },
    { q: 'Do I need a real estate attorney for a cash purchase?', a: 'Yes — in fact, the attorney review period is arguably more important for cash purchases. Without a lender\'s underwriting process catching problems (like a title defect that would prevent the lender from insuring the loan), you have fewer built-in protections. Your attorney is your primary safeguard.' },
    { q: 'Can the attorney review period be extended?', a: 'Yes, by mutual written agreement of both parties\' attorneys. Extensions are sometimes granted if a complex title issue arises or if one party needs additional time to review structural modifications proposed during the review period. Extensions must be in writing — verbal agreements are not enforceable.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What Is the Attorney Review Period in Illinois Real Estate?',
    description: 'The Illinois attorney review period gives buyers and sellers 5 business days to have an attorney review, modify, or disapprove a real estate contract. Learn how it works and how to use it strategically.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-12', dateModified: '2026-05-12',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"><span className="text-lg">&larr;</span>Back to Blog</Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold">Real Estate</span>
                <span className="text-white/80 text-sm">&bull;</span>
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">What Is the Attorney Review Period in Illinois Real Estate?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Illinois gives buyers and sellers 5 business days after contract signing to have an attorney review, modify, or disapprove the deal — here is how to use that window wisely.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 12, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="summary" className="text-2xl font-bold mt-8 mb-4">What Is the Attorney Review Period?</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">The attorney review period is a 5-business-day window built into most Illinois residential real estate contracts. It begins after both buyer and seller sign the contract and gives each party the right to have an attorney review the agreement — and either approve it, request modifications, or terminate it entirely.</p>
              <p className="mb-0 text-gray-700">This is not a cooling-off period for changing your mind about the purchase price. It is a legal review window specifically designed to allow licensed attorneys to identify and correct problems in the contract before it becomes fully binding.</p>
            </div>
            <p className="mb-6">The attorney review provision is found in the standard Illinois REALTORS® Residential Real Estate Purchase and Sale Agreement — the contract used in the overwhelming majority of Illinois residential transactions. The provision typically reads that either party's attorney may, within five business days of the date of acceptance, approve, disapprove, or modify the contract.</p>
            <p className="mb-6">Unlike some states where attorney review is purely optional or post-closing, Illinois has normalized attorney involvement at the contract stage. This is one of the consumer-protective features that distinguishes Illinois real estate practice from other states.</p>

            <h2 id="timeline" className="text-2xl font-bold mt-12 mb-4">The 5-Day Timeline, Day by Day</h2>
            <p className="mb-6">Understanding exactly how the calendar works is critical — missing the deadline has real consequences. Click each stage to see what happens:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {days.map((day, i) => (
                  <button key={i} onClick={() => setActiveDay(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeDay === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {day.label}
                  </button>
                ))}
              </div>
              <div className="bg-white border-2 border-[#2D3E50] rounded-xl p-6">
                <h3 className="font-bold text-[#2D3E50] text-lg mb-3">{days[activeDay].title}</h3>
                <p className="text-gray-700 leading-relaxed">{days[activeDay].desc}</p>
              </div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Important: How Business Days Are Counted</p>
              <p className="text-gray-700 mb-0">The 5 days are business days — Monday through Friday, excluding federal holidays. If you sign on a Friday, Day 1 is Monday. If Day 5 falls on a holiday, the deadline extends to the next business day. Your attorney tracks this calendar for you, but it helps to understand the mechanics yourself.</p>
            </div>

            <h2 id="modifications" className="text-2xl font-bold mt-12 mb-4">Common Modifications Attorneys Request</h2>
            <p className="mb-6">Most attorney review periods end not in termination but in negotiated modifications that better protect both parties. Here are the most frequently modified contract provisions:</p>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              {modifications.map((mod, i) => (
                <div key={i} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="w-9 h-9 rounded-full bg-[#2D3E50] text-white flex items-center justify-center flex-shrink-0">{mod.icon}</div>
                  <div><p className="font-bold text-[#2D3E50] text-sm mb-1">{mod.title}</p><p className="text-gray-700 text-sm">{mod.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="mb-6">Modification requests are sent in writing — typically via email between attorneys. Each side then has the opportunity to accept, counter-propose, or reject each requested modification. Both attorneys must agree in writing for a modification to be incorporated into the contract.</p>

            <h2 id="attorney-approval" className="text-2xl font-bold mt-12 mb-4">What "Attorney Approval Contingency" Means</h2>
            <p className="mb-6">You will sometimes hear the phrase "attorney approval contingency" in Illinois real estate. This refers to the right — built into the standard contract's attorney review provision — for either party's attorney to disapprove the contract and terminate the transaction during the review window.</p>
            <p className="mb-6">Because either attorney can terminate for any reason during the review period, some buyers and sellers view the signed contract as not truly "firm" until the attorney review period has expired without termination. This is largely correct — a signed contract with an open attorney review period is executory, meaning it can still be unwound by either side without breaching the contract.</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Action During Review Period</th><th className="border border-gray-300 px-4 py-3 text-left">Effect on Contract</th><th className="border border-gray-300 px-4 py-3 text-left">Earnest Money</th></tr></thead>
                <tbody>
                  {[
                    ['No action taken', 'Contract approved as written; becomes fully binding', 'Stays in escrow; applied to purchase'],
                    ['Modifications agreed', 'Amended contract becomes fully binding', 'Stays in escrow; applied to purchase'],
                    ['Modifications rejected (no agreement)', 'Contract may be terminated; depends on who rejects and how', 'Typically returned to buyer'],
                    ['Disapproval / termination letter sent', 'Contract terminated; neither party has further obligation', 'Returned to buyer'],
                  ].map(([action, effect, money], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm">{action}</td><td className="border border-gray-300 px-4 py-3 text-sm">{effect}</td><td className="border border-gray-300 px-4 py-3 text-sm">{money}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="expiration" className="text-2xl font-bold mt-12 mb-4">What Happens When the Period Expires</h2>
            <p className="mb-6">Once the 5-business-day window closes without a disapproval or unresolved modification, the contract becomes fully binding on both parties. At that point:</p>
            <ul className="space-y-3 my-6">
              {[
                'The buyer\'s earnest money is no longer automatically returnable — it can only be returned per the contract\'s specific contingency provisions (inspection, financing, title).',
                'The buyer must proceed with the home inspection within the inspection contingency deadline (typically 5–7 days after attorney review closes).',
                'The buyer must apply for a mortgage within the financing contingency window.',
                'The seller must continue to cooperate with the transaction — they cannot accept a higher offer from another buyer.',
                'Either party that terminates without contractual justification after this point may lose their earnest money or face a breach of contract claim.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>

            <h2 id="strategic-use" className="text-2xl font-bold mt-12 mb-4">How to Use the Period Strategically</h2>
            <p className="mb-6">The attorney review period is not just a formality — it is your best opportunity to address legal problems before they become expensive ones. Here is how experienced real estate attorneys use the window strategically:</p>
            <div className="grid md:grid-cols-1 gap-4 my-6">
              {[
                { title: 'Engage your attorney before you sign', desc: 'Ideally, have your attorney review the contract before you sign it — not after. If issues exist, it is better to negotiate them upfront than to begin a review period that creates uncertainty. When pre-signing review is not possible, retain your attorney the same day you sign.' },
                { title: 'Prioritize structural protections over preferences', desc: 'Attorney review time is limited. Focus on provisions that protect you legally — adequate inspection rights, clear financing contingency language, title protections — rather than cosmetic preferences like closing date adjustments that can be handled informally.' },
                { title: 'Avoid disapproval as a negotiating tactic', desc: 'Using attorney review termination as leverage to renegotiate a price you already agreed to is generally bad practice and damages good faith. It can also backfire — the seller may simply accept your termination and sell to another buyer.' },
                { title: 'Use the period to verify earnest money mechanics', desc: 'Confirm exactly when and how earnest money is deposited, who holds it, and on what conditions it is returned. These details matter most if the transaction falls apart later — get them right during review.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#2D3E50] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 my-8">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4">
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    {expandedFaq === i ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {expandedFaq === i && <div className="px-6 py-4 bg-white border-t border-gray-100"><p className="text-gray-700 leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Have an Attorney Review Your Contract Today</h3>
              <p className="text-white/90 mb-6">The 5-day attorney review window moves fast. Illinois Estate Law provides flat-fee real estate contract review and represents buyers and sellers throughout Cook County and the Chicago area. Do not let the deadline pass without protecting yourself.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">Schedule a Consultation<ArrowRight className="w-5 h-5" /></Link>
                <a href="tel:3123730731" className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30">Call (312) 373-0731</a>
              </div>
            </div>
            <BlogNavigation previousPost={previous ? { title: previous.title, url: previous.url } : undefined} nextPost={next ? { title: next.title, url: next.url } : undefined} />
            <RelatedArticles articles={relatedPosts.map(p => ({ title: p.title, url: p.url, date: p.date, excerpt: p.excerpt }))} />
          </article>
          <div className="border-t border-gray-300 pt-8 mb-8 mt-8"><BlogContactForm /></div>
        </div>
      </div>
    </>
  );
}
