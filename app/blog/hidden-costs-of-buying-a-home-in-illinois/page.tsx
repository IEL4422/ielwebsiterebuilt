'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, DollarSign, Home, FileText, Calculator } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'hidden-costs-of-buying-a-home-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [purchasePrice, setPurchasePrice] = useState<string>('400000');
  const [location, setLocation] = useState<string>('chicago');

  const tocItems = [
    { id: 'summary', title: 'The Hidden Costs Overview', level: 2, numeration: '1' },
    { id: 'professional-fees', title: 'Professional and Legal Fees', level: 2, numeration: '2' },
    { id: 'title-costs', title: 'Title Insurance and Transfer Taxes', level: 2, numeration: '3' },
    { id: 'lender-costs', title: 'Lender and Financing Costs', level: 2, numeration: '4' },
    { id: 'prepaid-ongoing', title: 'Prepaid and Ongoing Costs', level: 2, numeration: '5' },
    { id: 'calculator', title: 'Closing Cost Estimator', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const price = parseFloat(purchasePrice.replace(/,/g, '')) || 400000;

  const calculateCosts = () => {
    const attyFee = 1000;
    const ownerTitle = price * 0.006;
    const lenderTitle = price * 0.003;
    const stateTransfer = (price / 500) * 0.50;
    const cookTransfer = location !== 'other' ? (price / 500) * 0.25 : 0;
    const chicagoTransfer = location === 'chicago' ? (price / 500) * 3.75 : 0;
    const recordingFees = 120;
    const appraisal = 550;
    const inspection = 450;
    const prepaidTax = price * 0.01;
    const insurance = 1200;
    const total = attyFee + ownerTitle + lenderTitle + stateTransfer + cookTransfer + chicagoTransfer + recordingFees + appraisal + inspection + prepaidTax + insurance;
    return {
      attyFee, ownerTitle, lenderTitle, stateTransfer, cookTransfer, chicagoTransfer,
      recordingFees, appraisal, inspection, prepaidTax, insurance, total,
    };
  };

  const costs = calculateCosts();
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  const faqs = [
    { q: 'What closing costs are negotiable in Illinois?', a: 'Several closing costs can be negotiated. The seller often agrees to pay a portion of the buyer\'s closing costs — this is called a "seller concession" and is negotiated in the purchase contract. Attorney fees may be negotiable, especially for straightforward transactions. Some lender fees (origination fees, underwriting fees) can be negotiated or credited. Recording fees and transfer taxes are set by law and are not negotiable.' },
    { q: 'Can the seller pay my closing costs?', a: 'Yes — seller concessions toward buyer closing costs are common in Illinois and are negotiated as part of the purchase contract. In a buyer\'s market, sellers often agree to contribute $5,000–$10,000 or more toward the buyer\'s closing costs. In a hot seller\'s market, buyers rarely receive concessions. Your attorney and agent can advise on what is realistic in current conditions.' },
    { q: 'How much cash do I need beyond the down payment?', a: 'Budget for closing costs of 2–4% of the purchase price on top of your down payment. For a $400,000 home in Chicago with 10% down ($40,000), you\'d need approximately $8,000–$16,000 in additional cash for closing costs, plus reserves lenders may require. The closing cost estimator above gives you a personalized estimate.' },
    { q: 'What is the difference between owner\'s and lender\'s title insurance?', a: 'Lender\'s title insurance protects your mortgage lender if a title defect is discovered after closing — it is required by virtually all lenders. Owner\'s title insurance protects you, the buyer, against the same risks. The lender\'s policy expires when you pay off the loan; the owner\'s policy lasts as long as you own the property. Owner\'s insurance is optional but strongly recommended — a one-time premium that protects one of your largest assets.' },
    { q: 'Are there any first-time buyer programs that reduce closing costs in Illinois?', a: 'Yes. The Illinois Housing Development Authority (IHDA) offers several programs for first-time buyers including down payment assistance and closing cost grants. Some Chicago neighborhood programs also provide assistance. FHA loans allow sellers to contribute up to 6% of the purchase price toward buyer closing costs. Your lender can advise on available programs.' },
    { q: 'What are prepaid items at closing?', a: 'Prepaid items are amounts you pay at closing for future expenses — not for the home purchase itself. Common prepaids include: homeowners insurance (first year\'s premium paid in advance), prepaid interest (from closing date to end of month), property tax escrow deposit (typically 2–3 months of estimated property taxes held by your lender), and mortgage insurance premium if applicable. These can add $3,000–$6,000 to your total cash to close.' },
    { q: 'What happens to my earnest money at closing?', a: 'Earnest money you deposited when going under contract is credited against your total cash to close at closing. For example, if you deposited $5,000 in earnest money and owe $12,000 in closing costs plus $40,000 down payment, you would wire $47,000 at closing (not $52,000). Your Closing Disclosure will show this credit clearly.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Hidden Costs of Buying a Home in Illinois: What to Budget Beyond the Purchase Price',
    description: 'A complete guide to closing costs and hidden fees when buying a home in Illinois — attorney fees, title insurance, transfer taxes, and more, with a cost estimator for Chicago and Cook County.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-14', dateModified: '2026-05-14',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">Hidden Costs of Buying a Home in Illinois: What to Budget Beyond the Purchase Price</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Buyers in Chicago and Cook County routinely underestimate closing costs by thousands of dollars. Here is every fee you need to budget for.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 14, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="summary" className="text-2xl font-bold mt-8 mb-4">The Hidden Costs Overview</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">Closing costs for a home buyer in Illinois typically run 2–4% of the purchase price on top of the down payment. On a $400,000 home in Chicago, that means $8,000–$16,000 in additional cash — beyond whatever you put down.</p>
              <p className="mb-0 text-gray-700">Chicago is one of the more expensive cities in the country for closing costs, primarily because of the city's real estate transfer tax ($3.75 per $500 of purchase price) layered on top of Cook County and state transfer taxes. Understanding every line item before you make an offer helps you avoid unpleasant surprises at the closing table.</p>
            </div>
            <p className="mb-6">The costs fall into several categories: professional and legal fees, title insurance, transfer taxes, lender and financing costs, and prepaid/ongoing expenses. We walk through each below, with real numbers for Illinois transactions.</p>

            <h2 id="professional-fees" className="text-2xl font-bold mt-12 mb-4">Professional and Legal Fees</h2>
            <p className="mb-6">Illinois is an attorney state for real estate — meaning attorneys handle closings here rather than the non-attorney escrow officers used in many Western states. This adds a modest legal fee but provides significant consumer protection.</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Fee</th><th className="border border-gray-300 px-4 py-3 text-left">Typical Range</th><th className="border border-gray-300 px-4 py-3 text-left">Who Pays</th></tr></thead>
                <tbody>
                  {[
                    ['Buyer\'s attorney fee', '$750–$1,500 (flat fee)', 'Buyer'],
                    ['Home inspection', '$350–$600', 'Buyer'],
                    ['Appraisal fee', '$500–$750', 'Buyer (required by lender)'],
                    ['Pest / radon inspection', '$100–$250 each', 'Buyer (optional but common)'],
                    ['Survey', '$500–$1,000', 'Buyer or seller (varies by contract)'],
                  ].map(([fee, range, pays], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm">{fee}</td><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{range}</td><td className="border border-gray-300 px-4 py-3 text-sm">{pays}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-6">At Illinois Estate Law, we represent buyers for a flat attorney fee — no hourly billing surprises. Our fee covers the attorney review period, contract negotiation, title commitment review, and full representation at closing.</p>

            <h2 id="title-costs" className="text-2xl font-bold mt-12 mb-4">Title Insurance and Transfer Taxes</h2>
            <p className="mb-6">Title costs in Illinois include both title insurance premiums and transfer taxes — three separate layers of transfer tax in Chicago specifically.</p>

            <h3 className="text-xl font-bold mt-8 mb-3">Title Insurance</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h4 className="font-bold text-[#2D3E50] mb-2">Owner&apos;s Policy</h4>
                <p className="text-sm text-gray-700 mb-2">Protects the buyer against title defects discovered after closing. One-time premium, typically 0.5–0.7% of purchase price. Optional but strongly recommended.</p>
                <p className="text-sm font-semibold">On a $400k home: approx. $2,000–$2,800</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h4 className="font-bold text-[#2D3E50] mb-2">Lender&apos;s Policy</h4>
                <p className="text-sm text-gray-700 mb-2">Required by your mortgage lender. Protects the lender only. Separate premium, typically 0.2–0.4% of loan amount. Expires when loan is paid off.</p>
                <p className="text-sm font-semibold">On a $360k loan: approx. $720–$1,440</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-3">Illinois Real Estate Transfer Taxes</h3>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-3">Chicago buyers pay three layers of transfer tax — state, county, and city. The combined rate is $7.50 per $1,000 of purchase price for the seller, plus a portion paid by the buyer for properties over $1M.</p>
            </div>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Tax</th><th className="border border-gray-300 px-4 py-3 text-left">Rate</th><th className="border border-gray-300 px-4 py-3 text-left">Who Pays</th><th className="border border-gray-300 px-4 py-3 text-left">On $400k</th></tr></thead>
                <tbody>
                  {[
                    ['State of Illinois', '$0.50 per $500', 'Seller', '$400'],
                    ['Cook County', '$0.25 per $500', 'Seller', '$200'],
                    ['City of Chicago', '$3.75 per $500', 'Seller', '$3,000'],
                    ['Total (Chicago seller)', '$4.50 per $500 = $9.00/1,000', 'Seller', '$3,600'],
                  ].map(([tax, rate, pays, amount], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{tax}</td><td className="border border-gray-300 px-4 py-3 text-sm">{rate}</td><td className="border border-gray-300 px-4 py-3 text-sm">{pays}</td><td className="border border-gray-300 px-4 py-3 text-sm font-semibold text-[#2D3E50]">{amount}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-6">Transfer taxes are primarily a seller cost, but buyers should understand them because they affect net proceeds and negotiating dynamics. Recording fees (charged by the county recorder to record the deed and mortgage) typically add $100–$200.</p>

            <h2 id="lender-costs" className="text-2xl font-bold mt-12 mb-4">Lender and Financing Costs</h2>
            <p className="mb-6">If you are financing the purchase, your lender will charge origination and processing fees that appear on your Loan Estimate and later your Closing Disclosure. These vary significantly by lender.</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Lender Fee</th><th className="border border-gray-300 px-4 py-3 text-left">Typical Range</th><th className="border border-gray-300 px-4 py-3 text-left">Notes</th></tr></thead>
                <tbody>
                  {[
                    ['Loan origination fee', '0–1% of loan amount', 'Often negotiable or rolled into rate'],
                    ['Underwriting fee', '$400–$900', 'Varies by lender'],
                    ['Credit report fee', '$25–$75', 'Small, not negotiable'],
                    ['Flood certification', '$15–$25', 'Required by lender'],
                    ['Tax service fee', '$75–$100', 'Lender tracks tax payments'],
                    ['Points (if buying down rate)', '1% of loan per point', 'Optional; reduces interest rate'],
                  ].map(([fee, range, note], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm">{fee}</td><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{range}</td><td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="prepaid-ongoing" className="text-2xl font-bold mt-12 mb-4">Prepaid and Ongoing Costs</h2>
            <p className="mb-6">Beyond the one-time closing costs, several amounts due at closing relate to future expenses your lender requires you to fund upfront:</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { title: 'Property Tax Escrow', desc: 'Your lender will require 2–3 months of estimated property tax payments deposited into escrow at closing. Cook County property taxes are paid in arrears, so the seller will credit you for their portion of the year.', est: '$1,500–$4,000+' },
                { title: 'Homeowners Insurance', desc: 'First year\'s premium paid in full at or before closing, plus 2 months deposited into escrow. Illinois homeowners typically pay $800–$2,000/year depending on location and coverage level.', est: '$1,000–$2,500' },
                { title: 'Prepaid Interest', desc: 'Interest on your mortgage from the closing date to the end of that calendar month. Closing at the end of the month minimizes this cost; closing early in the month maximizes it.', est: '$300–$1,200' },
                { title: 'HOA Dues', desc: 'If buying a condo or planned community, expect HOA dues to be prorated at closing. Some associations also require a move-in deposit or capital contribution from new owners.', est: 'Varies' },
                { title: 'Moving Costs', desc: 'Often overlooked in closing cost planning. A local Chicago move runs $800–$2,000; a cross-town move with full service packing can exceed $5,000.', est: '$800–$5,000+' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[#2D3E50] text-sm">{item.title}</h3>
                    <span className="text-xs bg-[#2D3E50] text-white px-2 py-1 rounded-full flex-shrink-0 ml-2">{item.est}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="calculator" className="text-2xl font-bold mt-12 mb-4">Closing Cost Estimator</h2>
            <p className="mb-6">Enter your purchase price and location to see an estimate of your total closing costs as a buyer:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Purchase Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:border-[#4a708b]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select value={location} onChange={e => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#4a708b]">
                    <option value="chicago">City of Chicago</option>
                    <option value="cook">Cook County (outside Chicago)</option>
                    <option value="other">Other Illinois County</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  ['Attorney fee (estimated)', costs.attyFee],
                  ['Owner\'s title insurance (~0.6%)', costs.ownerTitle],
                  ['Lender\'s title insurance (~0.3%)', costs.lenderTitle],
                  ['IL state transfer tax (seller, shown for context)', costs.stateTransfer],
                  ...(location !== 'other' ? [['Cook County transfer tax (seller)', costs.cookTransfer]] : []),
                  ...(location === 'chicago' ? [['City of Chicago transfer tax (seller)', costs.chicagoTransfer]] : []),
                  ['Recording fees (estimated)', costs.recordingFees],
                  ['Appraisal (estimated)', costs.appraisal],
                  ['Home inspection (estimated)', costs.inspection],
                  ['Property tax escrow (~1%)', costs.prepaidTax],
                  ['First year homeowners insurance', costs.insurance],
                ].map(([label, amount], i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-sm text-gray-700">{label as string}</span>
                    <span className="font-semibold text-gray-900">{fmt(amount as number)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-3 bg-[#2D3E50] text-white rounded-lg px-4 mt-3">
                  <span className="font-bold">Estimated Total Buyer Closing Costs</span>
                  <span className="font-bold text-xl">{fmt(costs.total)}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">This is an estimate for planning purposes only. Actual costs vary based on lender, title company, inspection findings, and negotiated terms. Transfer taxes shown as seller costs are for informational context.</p>
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
              <h3 className="text-2xl font-bold mb-4">Get a Precise Closing Cost Estimate for Your Transaction</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law provides flat-fee real estate representation for buyers throughout Chicago and Cook County. We review your Closing Disclosure line by line to ensure every number is correct before you sign.</p>
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
