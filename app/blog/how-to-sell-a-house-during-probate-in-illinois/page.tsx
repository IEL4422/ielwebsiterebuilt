'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Home, FileText, DollarSign, Users } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-sell-a-house-during-probate-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeAdmin, setActiveAdmin] = useState<number>(0);

  const tocItems = [
    { id: 'when-required', title: 'When a Probate Sale Is Required', level: 2, numeration: '1' },
    { id: 'executor-authority', title: 'The Executor\'s Authority to Sell', level: 2, numeration: '2' },
    { id: 'independent-vs-supervised', title: 'Independent vs. Supervised Administration', level: 2, numeration: '3' },
    { id: 'process', title: 'The Probate Sale Process, Step by Step', level: 2, numeration: '4' },
    { id: 'buyers-perspective', title: 'Buying a Probate Property: What to Know', level: 2, numeration: '5' },
    { id: 'tax-issues', title: 'Tax Issues: Stepped-Up Basis and Capital Gains', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const adminTypes = [
    {
      label: 'Independent Administration',
      title: 'Independent Administration',
      description: 'The most common form of probate in Illinois. The executor (called a personal representative) acts independently — without court approval for each transaction. The executor can list, accept offers on, and close the sale of estate property without seeking court permission, as long as they follow their fiduciary duties to the estate.',
      steps: ['File petition for probate and issuance of Letters of Office', 'Publish notice to creditors and heirs', 'Obtain Letters of Office — this is the executor\'s authority document', 'List the property and accept an offer', 'Negotiate and execute the real estate contract as executor', 'Close the sale — executor signs the deed as personal representative', 'Distribute proceeds after paying estate debts'],
      timeline: 'Typically 6–12 months from opening to closing, depending on the estate\'s complexity',
      courtApproval: 'Not required for the sale itself (executor acts independently)',
    },
    {
      label: 'Supervised Administration',
      title: 'Supervised Administration',
      description: 'A court-supervised process where the executor must obtain court approval for significant transactions, including the sale of real estate. The court must approve the sale price and terms before the executor can close. Supervised administration adds time and cost to the process but provides additional oversight — often used in contested estates or when heirs request supervision.',
      steps: ['File petition for supervised administration and Letters of Office', 'List the property and accept an offer', 'File petition for approval of sale with the probate court', 'Provide notice to all heirs and beneficiaries', 'Court hearing on petition — heirs can object or request higher bids', 'Court enters order approving the sale', 'Close the sale pursuant to the court order', 'Report to court on distribution of proceeds'],
      timeline: 'Adds 4–8 weeks to the sale timeline for the court approval process',
      courtApproval: 'Required — the court must enter an order approving the sale before closing',
    },
  ];

  const faqs = [
    { q: 'What if the house has a mortgage? Can the estate sell it?', a: 'Yes. The estate can sell a mortgaged property — the mortgage is paid off from the sale proceeds at closing, just as in any normal sale. The estate\'s personal representative signs the necessary payoff authorization. If the property is "underwater" (the mortgage exceeds the market value), the executor should consult an attorney about options including a short sale or deed in lieu of foreclosure.' },
    { q: 'Can the executor sell a probate property to themselves or a family member?', a: 'Technically, an executor can purchase estate property, but doing so requires extraordinary care and likely court approval — this is a self-dealing transaction that triggers heightened fiduciary duties. In supervised administration, court approval is always required. In independent administration, self-dealing is legally risky and can expose the executor to surcharge (liability to the estate for any loss). Executors should consult an attorney before purchasing estate property.' },
    { q: 'What is a "Letters of Office" and why does a buyer\'s lender ask for it?', a: 'Letters of Office is the document issued by the probate court confirming the personal representative\'s legal authority to act on behalf of the estate. It is the executor\'s "ID card" for the estate. Buyers\' lenders, title companies, and counterparties require a current Letters of Office to confirm that the person signing the deed and contract has the legal authority to do so. Letters of Office must be recent — most lenders require them to be issued within 6–12 months of closing.' },
    { q: 'Can heirs object to the sale of a probate property?', a: 'In supervised administration, heirs receive notice of the sale petition and can object at the court hearing — they can request that the court require competitive bidding, reject the proposed sale price, or impose conditions on the sale. In independent administration, heirs have less formal ability to block a sale, but an executor who sells below fair market value or breaches their fiduciary duty can be held liable through a surcharge proceeding. Executors should obtain a professional appraisal to document fair market value before accepting an offer.' },
    { q: 'How is the sale price determined for a probate property?', a: 'There is no legal minimum price set by statute in most Illinois estates, but the executor has a fiduciary duty to the estate\'s beneficiaries to maximize the value of estate assets. In practice, this means obtaining a professional appraisal or market analysis, listing with a licensed real estate agent, and not accepting offers significantly below fair market value without explanation. In supervised administration, the court specifically reviews whether the sale price reflects fair market value.' },
    { q: 'What taxes apply when selling inherited property?', a: 'The estate itself generally owes no Illinois income tax on the sale if the property is sold for approximately the stepped-up basis. The beneficiaries who inherit the net proceeds receive them as inheritance — not as capital gains income. However, if the executor waits and the property appreciates above the date-of-death value before selling, capital gains taxes may apply. The stepped-up basis is one of the most significant tax benefits of inheriting property — assets receive a new cost basis equal to fair market value at the date of death, erasing any gains that accumulated during the decedent\'s lifetime.' },
    { q: 'What does a buyer get when they purchase a probate property?', a: 'A buyer purchasing from an estate receives an executor\'s or administrator\'s deed, which conveys the estate\'s interest in the property with limited warranties (the representative warrants their authority but not broader title warranties). The buyer also receives whatever title the decedent had — which should be verified through a full title search. Buyers of probate properties are strongly encouraged to obtain owner\'s title insurance, as the estate\'s limited warranty deed provides less protection than a standard general warranty deed.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'How to Sell a House During Probate in Illinois',
    description: 'When someone dies owning a home in their name alone, the property must go through probate before it can be sold. Learn how Illinois probate real estate sales work — for executors and buyers alike.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-06-11', dateModified: '2026-06-11',
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
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold">Real Estate &amp; Probate</span>
                <span className="text-white/80 text-sm">&bull;</span>
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">How to Sell a House During Probate in Illinois</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">When a loved one dies owning a home in their name alone, the property must pass through probate before it can be sold or transferred. Here is how the process works — for executors and buyers.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>June 11, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="when-required" className="text-2xl font-bold mt-8 mb-4">When a Probate Sale Is Required</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">A probate sale is required when the decedent owned the property in their individual name — with no joint owner, no Transfer on Death Instrument (TODI), and no trust — at the time of death.</p>
              <p className="mb-0 text-gray-700">In that situation, the property cannot be sold or transferred until a personal representative (executor or administrator) is appointed by the Cook County Probate Division, obtains Letters of Office, and has authority to act on behalf of the estate.</p>
            </div>
            <p className="mb-6">Probate is NOT required when the property passes automatically by operation of law — for example, when it was held in joint tenancy (survivor takes without probate), when there is a recorded TODI (beneficiary takes without probate), or when the property was in a living trust (successor trustee acts without probate). These are the very tools that good estate planning uses to avoid this situation.</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">How Property Was Held</th><th className="border border-gray-300 px-4 py-3 text-left">Probate Required?</th><th className="border border-gray-300 px-4 py-3 text-left">How It Transfers</th></tr></thead>
                <tbody>
                  {[
                    ['Decedent\'s name alone (no other mechanism)', 'Yes', 'Probate court — executor\'s deed at sale'],
                    ['Joint tenancy with survivor', 'No', 'Affidavit of Surviving Joint Tenant'],
                    ['Transfer on Death Instrument (TODI)', 'No', 'Beneficiary records affidavit with death certificate'],
                    ['Revocable living trust', 'No', 'Successor trustee conveys per trust terms'],
                    ['Tenancy in common (deceased\'s share)', 'Yes — for deceased\'s share', 'Deceased\'s share goes through probate'],
                  ].map(([how, probate, transfer], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm">{how}</td><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{probate}</td><td className="border border-gray-300 px-4 py-3 text-sm">{transfer}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="executor-authority" className="text-2xl font-bold mt-12 mb-4">The Executor&apos;s Authority to Sell</h2>
            <p className="mb-6">To sell estate property, the personal representative must first obtain Letters of Office from the Cook County Probate Division. This requires filing a petition for probate, providing the original will (if any), paying the filing fee, and being appointed by the court.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#2D3E50] mb-3">What Letters of Office Authorize</h3>
                <ul className="space-y-2">{['Signing real estate contracts on behalf of the estate', 'Listing the property with a real estate agent', 'Granting access to the property for inspections', 'Executing the deed at closing', 'Receiving sale proceeds into the estate account', 'Paying estate debts from sale proceeds'].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#4a708b] flex-shrink-0 mt-0.5" />{item}</li>)}</ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#2D3E50] mb-3">Executor&apos;s Fiduciary Duties</h3>
                <ul className="space-y-2">{['Sell for fair market value — not significantly below', 'Act in the interest of all beneficiaries, not just some', 'Avoid self-dealing (do not buy the property yourself without court approval)', 'Maintain the property while in the estate (utilities, insurance, security)', 'Account for all sale proceeds', 'Pay estate debts and taxes from proceeds before distributing'].map((item, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#4a708b] flex-shrink-0 mt-0.5" />{item}</li>)}</ul>
              </div>
            </div>

            <h2 id="independent-vs-supervised" className="text-2xl font-bold mt-12 mb-4">Independent vs. Supervised Administration</h2>
            <p className="mb-6">Illinois offers two types of probate administration — select each to see how the sale process differs:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {adminTypes.map((a, i) => (
                  <button key={i} onClick={() => setActiveAdmin(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeAdmin === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {a.label}
                  </button>
                ))}
              </div>
              <div className="bg-white border-2 border-[#2D3E50] rounded-xl p-6">
                <h3 className="font-bold text-[#2D3E50] text-xl mb-3">{adminTypes[activeAdmin].title}</h3>
                <p className="text-gray-700 mb-4">{adminTypes[activeAdmin].description}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-700 mb-2">Sale Steps:</p>
                    <ol className="space-y-1">
                      {adminTypes[activeAdmin].steps.map((step, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="w-5 h-5 rounded-full bg-[#4a708b] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs font-semibold text-gray-500 uppercase mb-1">Typical Timeline</p><p className="text-sm text-gray-700">{adminTypes[activeAdmin].timeline}</p></div>
                    <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs font-semibold text-gray-500 uppercase mb-1">Court Approval for Sale</p><p className="text-sm text-gray-700">{adminTypes[activeAdmin].courtApproval}</p></div>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="buyers-perspective" className="text-2xl font-bold mt-12 mb-4">Buying a Probate Property: What to Know</h2>
            <p className="mb-6">Purchasing a home from a probate estate is not inherently risky, but it does require additional due diligence and patience:</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { title: 'Verify Letters of Office', desc: 'Before signing a contract with an estate, confirm the personal representative has current, valid Letters of Office. Ask for a copy. Your attorney should verify these are current and that the representative is not acting beyond their authority.' },
                { title: 'Expect a Longer Timeline', desc: 'Probate sales — especially in supervised administration — take longer than standard transactions. Build 30–90 days of additional time into your expectations, particularly if court approval of the sale is required.' },
                { title: 'Property Sold "As-Is" Is Common', desc: 'Estates frequently sell property in as-is condition because the personal representative often has limited knowledge of the property\'s condition and no ability to make representations about what they do not know. Your inspection rights are critical — insist on a full inspection contingency.' },
                { title: 'Get Owner\'s Title Insurance', desc: 'An executor\'s or administrator\'s deed provides limited warranties. Owner\'s title insurance is essential for probate purchases — the title insurer will investigate and insure against the risks that come with estate transfers, including missing heirs and estate administration issues.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#2D3E50] text-sm mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="tax-issues" className="text-2xl font-bold mt-12 mb-4">Tax Issues: Stepped-Up Basis and Capital Gains</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">The "stepped-up basis" is one of the most powerful tax benefits available to heirs. When someone inherits property, their cost basis for capital gains purposes is "stepped up" to the fair market value at the date of the decedent's death — not the decedent's original purchase price.</p>
              <p className="mb-0 text-gray-700">Example: Decedent bought the home in 1985 for $80,000. It is worth $400,000 at death. The estate (or heir) has a cost basis of $400,000. If the estate sells for $400,000 shortly after death, there is no capital gain. The $320,000 of appreciation the decedent accumulated is permanently excluded from capital gains tax.</p>
            </div>
            <p className="mb-6">This makes a prompt sale after death (while value equals stepped-up basis) particularly tax-efficient. Waiting for the property to appreciate above the date-of-death value before selling will create taxable capital gains. The executor should obtain a professional appraisal dated as of the date of death to document the stepped-up basis for tax purposes.</p>

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
              <h3 className="text-2xl font-bold mb-4">Selling an Inherited Home? We Can Help.</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law handles probate real estate sales for executors and personal representatives throughout Cook County — from opening the estate to closing day. We also represent buyers purchasing probate properties. Schedule a consultation to discuss your situation.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/chicago-probate-lawyer" className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">Learn About Probate Services<ArrowRight className="w-5 h-5" /></Link>
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
