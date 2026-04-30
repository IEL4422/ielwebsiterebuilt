'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, DollarSign, FileText, MapPin } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-real-estate-transfer-tax';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [calcPrice, setCalcPrice] = useState<string>('400000');
  const [calcCounty, setCalcCounty] = useState<string>('chicago');

  const tocItems = [
    { id: 'overview', title: 'Illinois Transfer Tax Overview', level: 2, numeration: '1' },
    { id: 'three-layers', title: 'The Three Layers of Transfer Tax', level: 2, numeration: '2' },
    { id: 'who-pays', title: 'Who Pays Transfer Tax in Illinois?', level: 2, numeration: '3' },
    { id: 'ptax203', title: 'The PTAX-203 Form', level: 2, numeration: '4' },
    { id: 'exemptions', title: 'Transfer Tax Exemptions', level: 2, numeration: '5' },
    { id: 'calculator', title: 'Transfer Tax Calculator by County', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const price = parseFloat(calcPrice.replace(/,/g, '')) || 400000;

  type CountyRates = {
    label: string;
    state: number;
    county: number;
    city: number;
    cityLabel: string;
    buyerRate: number;
    buyerLabel: string;
  };

  const countyRates: Record<string, CountyRates> = {
    chicago: { label: 'City of Chicago (Cook County)', state: 0.50, county: 0.25, city: 3.75, cityLabel: 'City of Chicago', buyerRate: 0, buyerLabel: 'No buyer transfer tax (under $1M)' },
    cook: { label: 'Cook County (outside Chicago)', state: 0.50, county: 0.25, city: 0, cityLabel: 'No city tax', buyerRate: 0, buyerLabel: 'No buyer transfer tax' },
    dupage: { label: 'DuPage County', state: 0.50, county: 0, city: 0, cityLabel: 'No county/city tax', buyerRate: 0, buyerLabel: 'No buyer transfer tax' },
    lake: { label: 'Lake County', state: 0.50, county: 0, city: 0, cityLabel: 'No county/city tax', buyerRate: 0, buyerLabel: 'No buyer transfer tax' },
    will: { label: 'Will County', state: 0.50, county: 0, city: 0, cityLabel: 'No county/city tax', buyerRate: 0, buyerLabel: 'No buyer transfer tax' },
    kane: { label: 'Kane County', state: 0.50, county: 0, city: 0, cityLabel: 'No county/city tax', buyerRate: 0, buyerLabel: 'No buyer transfer tax' },
  };

  const rates = countyRates[calcCounty];
  const stateTax = (price / 500) * rates.state;
  const countyTax = (price / 500) * rates.county;
  const cityTax = (price / 500) * rates.city;
  const totalSellerTax = stateTax + countyTax + cityTax;
  const fmt = (n: number) => '$' + Math.round(n).toLocaleString();

  const faqs = [
    { q: 'Who pays the real estate transfer tax in Illinois?', a: 'The state transfer tax ($0.50 per $500) is paid by the seller. The Cook County transfer tax ($0.25 per $500) is also paid by the seller. The City of Chicago transfer tax ($3.75 per $500) is also paid by the seller for most transactions. Buyers in Chicago do not pay transfer tax on transactions under $1,000,000. Note: some contracts specify that buyer and seller split certain transfer taxes — always check your specific contract terms.' },
    { q: 'What is the PTAX-203 form and when is it required?', a: 'The PTAX-203 (Real Estate Transfer Declaration) is a form required by the Illinois Department of Revenue that must accompany every deed submitted for recording in Illinois. It reports the nature and amount of the transfer to the state. PTAX-203 is required for ALL deed recordings — including exempt transfers. For exempt transfers, the grantor still completes the form but marks the applicable exemption code. The form is available on the IDOR website and from the county recorder.' },
    { q: 'Are transfers between spouses exempt from Illinois transfer tax?', a: 'Yes. Under 35 ILCS 200/31-45, transfers between spouses (and certain other family transfers) are exempt from the Illinois real estate transfer tax. The PTAX-203 form must still be completed and filed with the deed at recording, with the appropriate exemption code indicated. Cook County and Chicago have parallel exemptions for spousal and divorce-related transfers. This exemption applies regardless of whether the transfer is for consideration.' },
    { q: 'Does Chicago have a "mansion tax" on high-value properties?', a: 'Chicago voters rejected a proposed "Bring Chicago Home" ordinance in March 2024 that would have created a graduated transfer tax — with higher rates for properties above $1 million and very high rates for properties above $1.5 million. As of 2026, Chicago\'s flat transfer tax rate of $3.75 per $500 (paid by seller) and $1.50 per $500 (paid by buyer on transactions over $1M) remain the current structure. There is no "mansion tax" surcharge in effect. Always verify current tax rates with a real estate attorney before closing.' },
    { q: 'Is the transfer tax paid on the assessed value or the sale price?', a: 'Illinois transfer taxes are calculated on the "consideration" — essentially the actual sale price (or the full fair market value of the property if no cash changes hands). For a standard arm\'s-length sale, this is the purchase price stated in the contract. For gifts or below-market transfers, the tax is calculated on the fair market value. Nominal consideration transfers ("$10 and other good and valuable consideration") in family transactions are reported on the PTAX-203 with the appropriate exemption code.' },
    { q: 'Can the buyer pay the seller\'s transfer taxes as part of a negotiated deal?', a: 'Yes, transfer tax obligations can be shifted between buyer and seller by agreement in the purchase contract. The legal obligation to pay may rest with the seller (for state and county taxes) but the parties can agree that the buyer absorbs these costs — for example, the seller might credit the buyer a lower purchase price in exchange for the buyer paying all transfer taxes. The form in which taxes are reported to the government does not change, but the economic burden can be allocated by contract.' },
    { q: 'Do transfer taxes apply to foreclosure sales?', a: 'Foreclosure sales are generally exempt from Illinois state transfer tax. The exemption applies when the transfer is a deed in lieu of foreclosure or a transfer pursuant to a foreclosure judgment. However, if a bank (as lender/owner of an REO property) subsequently sells the foreclosed property to a buyer, that sale IS subject to transfer tax in the normal manner. The exemption applies to the foreclosure transfer to the bank, not to the bank\'s subsequent sale.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Illinois Real Estate Transfer Tax: What Sellers (and Buyers) Pay at Closing',
    description: 'Illinois has three layers of real estate transfer tax: state ($0.50/$500), Cook County ($0.25/$500), and City of Chicago ($3.75/$500). Learn who pays, what is exempt, and calculate your transfer tax by county.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-06-16', dateModified: '2026-06-16',
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
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">Illinois Real Estate Transfer Tax: What Sellers (and Buyers) Pay at Closing</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Chicago sellers pay three layers of transfer tax totaling $4.50 per $500 of purchase price. Here is exactly what each layer costs, who pays it, and which transfers are exempt.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>June 16, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="overview" className="text-2xl font-bold mt-8 mb-4">Illinois Transfer Tax Overview</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">Illinois is one of the more expensive states for real estate transfer taxes, particularly in Chicago where three layers of taxation — state, county, and city — apply to every sale.</p>
              <p className="mb-0 text-gray-700">Transfer taxes are one-time taxes imposed when real property is sold or conveyed. They are separate from property taxes (which are annual) and income taxes. They are paid at closing and are typically a seller cost — though contract terms can shift the burden. They are calculated based on the consideration (sale price) and reported on the PTAX-203 form required by the Illinois Department of Revenue.</p>
            </div>

            <h2 id="three-layers" className="text-2xl font-bold mt-12 mb-4">The Three Layers of Transfer Tax</h2>
            <div className="space-y-4 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#2D3E50]">Layer 1: State of Illinois Transfer Tax</h3>
                  <span className="bg-[#2D3E50] text-white px-3 py-1 rounded-full text-sm font-bold">$0.50 per $500</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">Authorized under 35 ILCS 200/31-10 et seq. Applies statewide to all deed recordings. Rate: $0.50 per $500 of consideration (or $1.00 per $1,000). Paid by the seller. On a $400,000 sale: $400. This is the base layer that applies everywhere in Illinois.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#2D3E50]">Layer 2: Cook County Transfer Tax</h3>
                  <span className="bg-[#4a708b] text-white px-3 py-1 rounded-full text-sm font-bold">$0.25 per $500</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">Cook County imposes an additional transfer tax of $0.25 per $500 of consideration. This applies to all property in Cook County — including Chicago. Paid by the seller. On a $400,000 sale: $200. Properties in DuPage, Lake, Will, Kane, and other counties outside Cook do not pay this county tax.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#2D3E50]">Layer 3: City of Chicago Transfer Tax</h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">$3.75 per $500</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">The City of Chicago imposes the largest transfer tax layer: $3.75 per $500 of consideration, paid by the seller. On a $400,000 sale: $3,000. For transactions over $1,000,000, the buyer also pays $1.50 per $500 of consideration. This city tax applies only to property within Chicago city limits — not to Cook County suburbs.</p>
              </div>
            </div>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Tax Layer</th><th className="border border-gray-300 px-4 py-3 text-left">Rate</th><th className="border border-gray-300 px-4 py-3 text-left">Where Applies</th><th className="border border-gray-300 px-4 py-3 text-left">On $400k Sale</th></tr></thead>
                <tbody>
                  {[
                    ['State of Illinois', '$0.50 / $500', 'All Illinois counties', '$400'],
                    ['Cook County', '$0.25 / $500', 'Cook County only', '$200'],
                    ['City of Chicago', '$3.75 / $500 (seller)', 'Chicago only', '$3,000'],
                    ['Total (Chicago seller)', '$4.50 / $500 = $9.00 / $1,000', 'Chicago', '$3,600'],
                    ['Total (Cook County, not Chicago)', '$0.75 / $500 = $1.50 / $1,000', 'Cook suburbs', '$600'],
                    ['Total (other Illinois counties)', '$0.50 / $500 = $1.00 / $1,000', 'Statewide base', '$400'],
                  ].map(([layer, rate, where, amount], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{layer}</td><td className="border border-gray-300 px-4 py-3 text-sm">{rate}</td><td className="border border-gray-300 px-4 py-3 text-sm">{where}</td><td className="border border-gray-300 px-4 py-3 text-sm font-bold text-[#2D3E50]">{amount}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="who-pays" className="text-2xl font-bold mt-12 mb-4">Who Pays Transfer Tax in Illinois?</h2>
            <p className="mb-6">By statute, the state and Cook County transfer taxes are the seller's obligation. The Chicago city transfer tax is also primarily a seller obligation for transactions under $1,000,000. However, contract terms control who actually bears the economic burden at closing — buyers and sellers can agree to any allocation.</p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Practice Note for Buyers</p>
              <p className="text-gray-700 mb-0">Even though transfer taxes are primarily a seller cost, buyers should understand them because they affect the seller's net proceeds and therefore the seller's flexibility on price. A seller netting $396,400 (after $3,600 in Chicago transfer taxes on a $400,000 sale) has different economics than a seller in DuPage County who nets $399,600. This affects negotiating dynamics in cross-county comparisons.</p>
            </div>

            <h2 id="ptax203" className="text-2xl font-bold mt-12 mb-4">The PTAX-203 Form</h2>
            <p className="mb-6">Every deed recorded in Illinois must be accompanied by a completed PTAX-203 Real Estate Transfer Declaration. This form:</p>
            <ul className="space-y-2 mb-6">
              {['Reports the nature of the transfer (sale, gift, divorce, etc.) to the Illinois Department of Revenue', 'States the amount of consideration (purchase price)', 'Identifies any applicable exemption from transfer tax', 'Is required even if the transfer is fully exempt — the form is filed with an exemption code', 'Must be signed by the grantor (seller) or their authorized representative', 'Is submitted to the county recorder along with the deed and transfer tax stamps'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mb-6">Your attorney prepares the PTAX-203 as part of the closing process. The form is then submitted to the county recorder's office, which forwards the data to the Illinois Department of Revenue for tax collection and property assessment purposes.</p>

            <h2 id="exemptions" className="text-2xl font-bold mt-12 mb-4">Transfer Tax Exemptions</h2>
            <p className="mb-6">Illinois law provides numerous exemptions from transfer tax under 35 ILCS 200/31-45. Common exemptions include:</p>
            <div className="grid md:grid-cols-2 gap-3 my-6">
              {[
                'Transfers between spouses or former spouses pursuant to a divorce judgment',
                'Transfers to a grantor\'s own revocable living trust',
                'Transfers from a trust to its beneficiary (when the grantor-beneficiary is the same person)',
                'Transfers pursuant to a court order (divorce decree, probate order)',
                'Foreclosure deeds and deeds in lieu of foreclosure',
                'Transfers by government bodies',
                'Transfers where consideration is $100 or less (nominal consideration)',
                'Transfers to correct or confirm a prior defective deed',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Even Exempt Transfers Require PTAX-203</p>
              <p className="text-gray-700 mb-0">Claiming a transfer tax exemption does not mean you skip the PTAX-203. The form is always required — you simply mark the applicable exemption code. Failure to file PTAX-203 will result in the county recorder rejecting the deed.</p>
            </div>

            <h2 id="calculator" className="text-2xl font-bold mt-12 mb-4">Transfer Tax Calculator by County</h2>
            <p className="mb-6">Enter your sale price and location to calculate the seller&apos;s transfer tax obligation:</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Sale Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <input type="number" value={calcPrice} onChange={e => setCalcPrice(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:border-[#4a708b]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select value={calcCounty} onChange={e => setCalcCounty(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-[#4a708b]">
                    <option value="chicago">City of Chicago</option>
                    <option value="cook">Cook County (outside Chicago)</option>
                    <option value="dupage">DuPage County</option>
                    <option value="lake">Lake County</option>
                    <option value="will">Will County</option>
                    <option value="kane">Kane County</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-700">State of Illinois ($0.50 per $500)</span>
                  <span className="font-semibold">{fmt(stateTax)}</span>
                </div>
                {rates.county > 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-700">Cook County ($0.25 per $500)</span>
                    <span className="font-semibold">{fmt(countyTax)}</span>
                  </div>
                )}
                {rates.city > 0 && (
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-700">{rates.cityLabel} ($3.75 per $500)</span>
                    <span className="font-semibold">{fmt(cityTax)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 bg-[#2D3E50] text-white rounded-lg px-4 mt-3">
                  <span className="font-bold">Total Seller Transfer Tax</span>
                  <span className="font-bold text-xl">{fmt(totalSellerTax)}</span>
                </div>
                {price >= 1000000 && calcCounty === 'chicago' && (
                  <div className="flex justify-between items-center py-3 bg-amber-100 border border-amber-300 rounded-lg px-4">
                    <span className="font-semibold text-amber-800 text-sm">Buyer also owes (Chicago, over $1M): $1.50 per $500</span>
                    <span className="font-semibold text-amber-800">{fmt((price / 500) * 1.50)}</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-4">This estimate is for planning purposes. Always verify current rates with your closing attorney. Some municipalities may impose additional local transfer taxes — consult your attorney.</p>
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
              <h3 className="text-2xl font-bold mb-4">Selling in Illinois? Know Your Transfer Tax Costs.</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law handles PTAX-203 preparation and all transfer tax compliance for sellers throughout Cook County and Chicago. We ensure your transfer tax obligations are correctly calculated and reported at closing.</p>
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
