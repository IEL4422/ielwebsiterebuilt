'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, FileText, Home, DollarSign, Users, Key } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-to-expect-at-a-real-estate-closing-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const tocItems = [
    { id: 'summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'before-closing', title: 'What Happens Before the Closing Day', level: 2, numeration: '2' },
    { id: 'who-attends', title: 'Who Attends an Illinois Real Estate Closing?', level: 2, numeration: '3' },
    { id: 'step-by-step', title: 'Step-by-Step: What Happens at Closing', level: 2, numeration: '4' },
    { id: 'documents', title: 'Key Documents You Will Sign', level: 2, numeration: '5' },
    { id: 'what-to-bring', title: 'What to Bring to Closing', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const steps = [
    { title: 'Closing Disclosure Review', desc: 'Your lender provides the Closing Disclosure (CD) at least 3 business days before closing. Your attorney reviews it and confirms all numbers — loan amount, interest rate, closing costs, prepaid items, and credits — match what was agreed.' },
    { title: 'Final Walk-Through', desc: 'Typically 24 hours before closing, the buyer conducts a final walk-through of the property to confirm its condition matches the contract and that any agreed repairs were completed.' },
    { title: 'Wire Funds', desc: 'Buyers wire their closing funds — down payment plus closing costs minus earnest money already deposited — to the title company\'s escrow account. Your attorney confirms the exact wire amount from the Closing Disclosure.' },
    { title: 'Document Signing', desc: 'At the closing table, buyer and seller sign their respective documents. Buyers sign the loan documents (if financing), the deed receipt, and various disclosures. Sellers sign the deed, bill of sale, and transfer tax declarations.' },
    { title: 'Title Company Disburses Funds', desc: 'Once all documents are signed and funds are confirmed, the title company disburses proceeds — paying off the seller\'s existing mortgage, real estate agent commissions, and distributing net proceeds to the seller.' },
    { title: 'Deed Is Recorded', desc: 'The title company records the deed with the county recorder of deeds, officially transferring ownership. In Cook County, recording typically happens the same day or next business day. Keys are exchanged once recording is confirmed.' },
  ];

  const faqs = [
    { q: 'How long does a real estate closing take in Illinois?', a: 'A typical residential closing in Illinois takes 1 to 2 hours. Cash transactions are generally faster (45–60 minutes) since there are no lender documents to sign. Financed purchases take longer because the buyer must sign the full loan package — often 50+ pages of documents.' },
    { q: 'Can I close remotely or via mail in Illinois?', a: 'Yes, remote closings are increasingly common in Illinois. Many closings can be conducted via video conference with a remote online notary (RON). Your attorney coordinates with the title company to arrange remote execution. You will still need to wire funds and provide proper identification.' },
    { q: 'What happens if something goes wrong at closing?', a: 'Your attorney\'s presence at closing is specifically designed to handle last-minute issues — a lender fee that changed, a credit that was miscalculated, a title issue discovered the morning of closing. Attorneys can often resolve problems on the spot. Without an attorney, a surprise at the closing table may delay or derail the transaction.' },
    { q: 'When do I get the keys?', a: 'In Illinois, the buyer typically receives keys when the deed has been recorded with the county recorder. For same-day recording (common in Cook County), this is usually a few hours after closing. Some contracts specify key transfer upon closing rather than recording — your attorney will clarify this in the contract.' },
    { q: 'What is the difference between the closing date and the possession date?', a: 'The closing date is when ownership legally transfers and the deed is recorded. The possession date is when the buyer takes physical possession of the property. In most Illinois transactions these are the same day, but in some deals the seller retains possession for a few days after closing — a "post-closing possession" arrangement that should be documented in a written agreement.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What to Expect at a Real Estate Closing in Illinois',
    description: 'Step-by-step guide to Illinois real estate closings — who attends, what you sign, what to bring, and what happens to your funds.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-07', dateModified: '2026-05-07',
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
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">What to Expect at a Real Estate Closing in Illinois</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">A step-by-step walkthrough of the Illinois closing process — who is there, what you sign, when you get the keys, and what your attorney does throughout.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 7, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="summary" className="text-2xl font-bold mt-8 mb-4">Article Summary</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <p className="mb-3 font-semibold text-lg">A real estate closing in Illinois is the final step in buying or selling a home — the moment legal ownership transfers from seller to buyer. For many people it is one of the largest transactions of their lives, yet most do not know exactly what happens.</p>
              <p className="mb-0 text-gray-700">This guide walks you through every stage of an Illinois residential closing: what happens before closing day, who attends, what documents you sign, and what your attorney does to protect you throughout.</p>
            </div>

            <h2 id="before-closing" className="text-2xl font-bold mt-12 mb-4">What Happens Before Closing Day</h2>
            <p className="mb-6">The closing itself is the end of a process that begins when your offer is accepted. Between contract signing and the closing table, several key steps occur — any of which can delay closing if not handled properly.</p>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                { icon: <FileText className="w-5 h-5" />, title: 'Attorney Review Period', desc: '5 business days after contract signing. Your attorney reviews, approves, or modifies the contract terms. This is when legal issues are addressed before they become closing problems.' },
                { icon: <Home className="w-5 h-5" />, title: 'Home Inspection', desc: 'Buyer arranges an inspection, typically within 5–7 days of contract. Findings may lead to repair requests or price renegotiation — handled through your attorney.' },
                { icon: <DollarSign className="w-5 h-5" />, title: 'Mortgage Application & Appraisal', desc: 'If financing, the buyer\'s lender orders an appraisal and processes the loan application. Clear-to-close from the lender is required before closing can proceed.' },
                { icon: <Users className="w-5 h-5" />, title: 'Title Search', desc: 'The title company searches public records for liens, judgments, or title defects. The title commitment is reviewed by your attorney to confirm the seller can convey clear title.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <div className="w-9 h-9 rounded-full bg-[#2D3E50] text-white flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  <div><p className="font-bold text-[#2D3E50] text-sm mb-1">{item.title}</p><p className="text-gray-700 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>

            <h2 id="who-attends" className="text-2xl font-bold mt-12 mb-4">Who Attends an Illinois Real Estate Closing?</h2>
            <p className="mb-6">Illinois closings typically include the following parties — though remote closings mean not everyone needs to be physically present at the same table:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Party</th><th className="border border-gray-300 px-4 py-3 text-left">Role</th><th className="border border-gray-300 px-4 py-3 text-left">Always Present?</th></tr></thead>
                <tbody>
                  {[
                    ['Buyer(s)', 'Sign loan documents, deed receipt, and closing disclosures', 'Yes'],
                    ['Seller(s)', 'Sign deed and transfer documents', 'Often remote/separate'],
                    ['Buyer\'s Attorney', 'Review documents, represent buyer\'s legal interests', 'Yes (in person or remote)'],
                    ['Seller\'s Attorney', 'Review documents, represent seller\'s legal interests', 'Yes (in person or remote)'],
                    ['Title Company Closer', 'Coordinates document flow, disburses funds, arranges recording', 'Yes'],
                    ['Real Estate Agents', 'Attend as observers; no legal role at closing table', 'Optional'],
                    ['Lender Representative', 'Rarely attends in person; lender sends loan package via title company', 'Rarely'],
                  ].map(([party, role, present], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{party}</td><td className="border border-gray-300 px-4 py-3 text-sm">{role}</td><td className="border border-gray-300 px-4 py-3 text-sm">{present}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="step-by-step" className="text-2xl font-bold mt-12 mb-4">Step-by-Step: What Happens at Closing</h2>
            <p className="mb-6">Click each step to see what happens:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {steps.map((step, i) => (
                  <button key={i} onClick={() => setActiveStep(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeStep === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Step {i + 1}
                  </button>
                ))}
              </div>
              <div className="bg-white border-2 border-[#2D3E50] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full bg-[#2D3E50] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{activeStep + 1}</span>
                  <h3 className="font-bold text-[#2D3E50] text-lg">{steps[activeStep].title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{steps[activeStep].desc}</p>
              </div>
            </div>

            <h2 id="documents" className="text-2xl font-bold mt-12 mb-4">Key Documents You Will Sign</h2>
            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                { label: 'For Buyers', items: ['Closing Disclosure (CD)', 'Promissory Note (if financing)', 'Deed of Trust / Mortgage', 'Right of Rescission Notice', 'Transfer Tax Declaration', 'ALTA Settlement Statement', 'Title insurance acknowledgment'] },
                { label: 'For Sellers', items: ['Deed (warranty or quitclaim)', 'Bill of Sale (for personal property)', 'Seller\'s Affidavit of Title', 'Transfer Tax Declaration', 'ALTA Settlement Statement', 'Payoff authorization for existing mortgage', 'Real estate disclosure documents'] },
              ].map((col, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#2D3E50] mb-3">{col.label}</h3>
                  <ul className="space-y-2">{col.items.map((item, j) => <li key={j} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#4a708b] flex-shrink-0" />{item}</li>)}</ul>
                </div>
              ))}
            </div>

            <h2 id="what-to-bring" className="text-2xl font-bold mt-12 mb-4">What to Bring to Closing</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-3">Do not arrive at closing without these items — missing any can delay or postpone:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Government-issued photo ID (driver\'s license or passport)',
                  'Certified funds or wire confirmation (buyers)',
                  'Cashier\'s check if any last-minute balance adjustments (buyers)',
                  'Checkbook for small unexpected adjustments',
                  'All keys, garage door openers, and mailbox keys (sellers)',
                  'Any repair receipts or warranties agreed upon in contract',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-amber-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
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
              <h3 className="text-2xl font-bold mb-4">Ready to Close with Confidence?</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law provides flat-fee closing representation for buyers and sellers throughout Cook County and the Chicago suburbs. We review every document before you sign.</p>
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
