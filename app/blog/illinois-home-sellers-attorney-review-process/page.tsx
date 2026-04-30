'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Home, FileText, Shield, DollarSign } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'illinois-home-sellers-attorney-review-process';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeModification, setActiveModification] = useState<number | null>(null);

  const tocItems = [
    { id: 'sellers-perspective', title: 'Attorney Review from the Seller\'s Perspective', level: 2, numeration: '1' },
    { id: 'what-attorney-reviews', title: 'What Your Attorney Reviews in the Buyer\'s Contract', level: 2, numeration: '2' },
    { id: 'seller-protections', title: 'Common Seller Protections to Add', level: 2, numeration: '3' },
    { id: 'buyer-modifications', title: 'When the Buyer\'s Attorney Sends Modification Requests', level: 2, numeration: '4' },
    { id: 'disclosure-act', title: 'The Illinois Residential Real Property Disclosure Act', level: 2, numeration: '5' },
    { id: 'repair-strategy', title: 'Repair Negotiation Strategy During Attorney Review', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const sellerProtections = [
    {
      title: 'As-Is Addendum',
      description: 'If you want to sell the property in its current condition without making any repairs, your attorney should add an as-is addendum that limits your obligation to repair defects discovered during the buyer\'s inspection. This does not eliminate disclosure obligations — you must still disclose known material defects — but it limits your repair exposure after disclosure.',
      risk: 'Buyers may still terminate during the inspection contingency if they find unacceptable defects, even under an as-is sale.',
    },
    {
      title: 'Specific Closing Date',
      description: 'Vague closing date language like "on or about" can cause disputes. Your attorney should specify a firm closing date and what happens if closing is delayed — who bears carrying costs, when either party can terminate, and what notice is required.',
      risk: 'If you have a contingent purchase of your next home, ensure the closing dates are coordinated. Your attorney can add a "home sale contingency" or a "right to terminate if seller\'s purchase does not close" clause.',
    },
    {
      title: 'Earnest Money Protections',
      description: 'The contract should specify who holds the earnest money (typically the listing broker or title company), what conditions entitle the seller to retain it if the buyer defaults, and the process for releasing it. Without clear terms, disputes over earnest money can tie up funds for months.',
      risk: 'Earnest money disputes are common in failed transactions. Clear contract language prevents protracted arguments about who gets the deposit.',
    },
    {
      title: 'Personal Property Exclusions',
      description: 'Fixtures — items attached to the property — generally convey with the home unless excluded. If you intend to take a light fixture, built-in storage, a window air conditioner, or any other attached item, it must be specifically excluded in the contract. Verbal agreements about what stays or goes are not enforceable.',
      risk: 'Disputes about light fixtures, appliances, and storage shelving are among the most common at closing. Resolve them in writing during attorney review.',
    },
    {
      title: 'Possession Date Language',
      description: 'The possession date (when the buyer takes physical occupancy) is often the same as the closing date, but not always. If you need to remain in the property after closing, your attorney should add a post-closing possession agreement specifying the duration, a daily rent, and your liability for any damage that occurs during that period.',
      risk: 'Buyers who find damage caused after closing but before the seller vacated will look to the possession agreement for relief. Protect yourself with clear terms.',
    },
    {
      title: 'Home Sale Contingency Language',
      description: 'If accepting an offer that is contingent on the buyer selling their own home, your attorney should add a "kick-out clause" allowing you to continue marketing and accept a better offer, giving the contingent buyer a short window (24–72 hours) to remove their contingency when you receive another offer.',
      risk: 'Without a kick-out clause, a home sale contingency can tie up your property for weeks while the buyer struggles to sell their current home.',
    },
  ];

  const faqs = [
    { q: 'Can a seller terminate the contract during attorney review without a reason?', a: 'Yes. During the 5-business-day attorney review period, either party\'s attorney can send a disapproval letter that terminates the contract — without giving a specific reason and without penalty. If the seller\'s attorney sends a disapproval, the earnest money must be returned to the buyer. This right is mutual — the buyer\'s attorney has the same right. This is why sellers should understand that a signed contract is not truly firm until attorney review has closed without termination.' },
    { q: 'What happens if the buyer\'s attorney sends modification requests that I reject?', a: 'If the buyer\'s attorney sends modification requests and you reject all of them, the buyer has the option to terminate the contract (treating your rejection as a de facto disapproval) or to proceed under the original contract as written. The outcome depends on how the rejection is communicated. Your attorney should communicate rejections carefully to avoid unintentionally signaling a termination. Often, some modifications are acceptable and others are not — negotiation through counsel is the norm.' },
    { q: 'Am I required to disclose defects I know about in Illinois?', a: 'Yes. The Illinois Residential Real Property Disclosure Act (756 ILCS 77/1 et seq.) requires sellers of residential real property to complete and deliver a disclosure report to the buyer before or at the time an offer is accepted. The disclosure covers material defects in: the roof, basement, foundation, walls, windows, doors, plumbing, electrical, HVAC, appliances, presence of hazardous materials (lead, asbestos, radon, mold), and other conditions. Failure to disclose known material defects can result in rescission of the sale or damages after closing.' },
    { q: 'Does attorney review require me to fix anything?', a: 'No. The attorney review period is about reviewing and negotiating the legal terms of the contract — it is not the inspection period. Inspection results are addressed in the separate inspection contingency period that typically begins after attorney review closes. During attorney review, your attorney focuses on contract terms: closing date, contingency language, earnest money, personal property, and so on. Repair negotiations happen later, after the home inspection.' },
    { q: 'What is the difference between terminating during attorney review vs. terminating during the inspection period?', a: 'Terminating during attorney review requires only a written disapproval notice from either attorney — no reason is needed and the buyer receives their earnest money back. Terminating during the inspection contingency period requires the buyer to provide a written notice of objection based on inspection results and follow the contract\'s specific inspection contingency procedures. If the buyer terminates properly per the inspection contingency, they also receive their earnest money back. If the buyer attempts to terminate after the inspection contingency has expired without a contractual basis, they risk forfeiting their earnest money.' },
    { q: 'Can I as a seller modify the attorney review period length?', a: 'Yes, by mutual agreement. The 5-business-day window is the standard set by the Illinois REALTORS® contract form, but both parties can agree to a shorter or longer period in writing. Some sellers — particularly in fast-moving markets — prefer a shorter review period to expedite closing. This would be negotiated in the original contract or as a modification. Your attorney can advise on what is appropriate given the circumstances.' },
    { q: 'What should I do if my buyer asks to extend the closing date during attorney review?', a: 'Closing date extensions requested during attorney review are common. Your attorney will evaluate whether the proposed new date works for you — particularly if you are simultaneously purchasing another home with a related closing date. Extensions for legitimate reasons (financing processing time, title issues) are usually accommodated with a negotiated per-day penalty clause if the extension is protracted. Your attorney will draft appropriate extension language that protects your interests while accommodating a reasonable request.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What Illinois Home Sellers Need to Know About the Attorney Review Process',
    description: 'The Illinois attorney review period protects sellers too. Learn what your attorney reviews in the buyer\'s contract, common seller protections to add, how to respond to modification requests, and your disclosure obligations under Illinois law.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-06-18', dateModified: '2026-06-18',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">What Illinois Home Sellers Need to Know About the Attorney Review Process</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">The 5-day attorney review period is not just for buyers. As the seller, your attorney uses this window to add critical protections — and to respond strategically to the buyer&apos;s modification requests.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>June 18, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="sellers-perspective" className="text-2xl font-bold mt-8 mb-4">Attorney Review from the Seller&apos;s Perspective</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">Most sellers think of the attorney review period as something that happens to them — a window where the buyer's attorney sends requests that the seller must respond to. In reality, the review period is equally available to sellers and their attorneys to add protective language to the contract.</p>
              <p className="mb-0 text-gray-700">A seller's attorney uses the 5 business days to review the contract the buyer's agent drafted, identify provisions that are insufficiently protective of the seller, and propose modifications that better serve the seller's interests — all before the contract becomes fully binding.</p>
            </div>
            <p className="mb-6">The purchase contract in Illinois is typically presented on the Illinois REALTORS® standard form, often drafted with the buyer's interests in mind. Your real estate agent's job is to get an offer accepted; your attorney's job is to make sure the legal terms of that offer protect you. These are different jobs, and both matter.</p>

            <h2 id="what-attorney-reviews" className="text-2xl font-bold mt-12 mb-4">What Your Attorney Reviews in the Buyer&apos;s Contract</h2>
            <p className="mb-6">When you hire a seller's attorney for attorney review, they examine the entire purchase contract, including:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Contract Section</th><th className="border border-gray-300 px-4 py-3 text-left">What the Seller&apos;s Attorney Looks For</th></tr></thead>
                <tbody>
                  {[
                    ['Closing date', 'Is the date feasible? Is there adequate time for the buyer\'s financing to close? Does it align with your purchase timeline?'],
                    ['Earnest money amount and release conditions', 'Is the earnest money adequate (typically 1–2% of purchase price)? Under what conditions can the buyer demand it back?'],
                    ['Financing contingency', 'How long does the buyer have to secure financing? What happens if they fail to get a mortgage?'],
                    ['Inspection contingency', 'What defects can the buyer object to? Is there a dollar threshold? Can they terminate for any inspection finding or only material defects?'],
                    ['Personal property inclusions/exclusions', 'Are all items that should stay or go properly identified? Any ambiguous fixtures that need clarification?'],
                    ['As-is or repair obligations', 'Does the contract imply the seller will make repairs? Should an as-is addendum be added?'],
                    ['Possession date', 'Same as closing date? Does seller need post-closing possession? Is there a post-closing occupancy agreement?'],
                    ['Contingencies (sale of buyer\'s home, etc.)', 'Is there a home sale contingency? Does it have a kick-out clause protecting the seller?'],
                  ].map(([section, concern], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{section}</td><td className="border border-gray-300 px-4 py-3 text-sm">{concern}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="seller-protections" className="text-2xl font-bold mt-12 mb-4">Common Seller Protections to Add</h2>
            <p className="mb-6">Click each protection to understand when it is needed and what risks it addresses:</p>
            <div className="space-y-3 my-6">
              {sellerProtections.map((prot, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setActiveModification(activeModification === i ? null : i)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{prot.title}</span>
                    </div>
                    {activeModification === i ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {activeModification === i && (
                    <div className="px-6 py-4 bg-white border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mb-3">{prot.description}</p>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-sm text-amber-900 font-semibold mb-1">Risk to Know:</p>
                        <p className="text-sm text-amber-800 mb-0">{prot.risk}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 id="buyer-modifications" className="text-2xl font-bold mt-12 mb-4">When the Buyer&apos;s Attorney Sends Modification Requests</h2>
            <p className="mb-6">The buyer's attorney will almost certainly send modification requests during the review period. Here is how to think about them strategically:</p>
            <div className="grid md:grid-cols-1 gap-4 my-6">
              {[
                { title: 'Categorize Each Request', desc: 'Your attorney will categorize buyer requests as: (1) acceptable — standard protections that do not materially harm you; (2) negotiable — worth a counter-proposal; and (3) unacceptable — beyond what you should agree to. Not every request requires a counter; many routine buyer requests can simply be accepted.' },
                { title: 'Respond to Each Request Individually', desc: 'Modification responses go provision by provision. You can accept some, counter others, and reject others. A blanket rejection of all modifications can read as a disapproval of the contract — which may entitle the buyer to terminate and get their earnest money back. Be strategic and specific in your responses.' },
                { title: 'Know When to Stand Firm', desc: 'Certain buyer requests go beyond reasonable legal protection and into renegotiating economic terms you already agreed to. Requests for price reductions disguised as "closing cost credits," demands to reduce the earnest money, or attempts to extend the inspection contingency unreasonably can be countered with your original terms.' },
                { title: 'If You Cannot Reach Agreement', desc: 'If after back-and-forth the parties cannot agree on modifications, the contract may be effectively dead. Either attorney can send a formal disapproval. The earnest money returns to the buyer. While this is a poor outcome, it is better than signing a contract with terms that expose you to significant risk.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-[#2D3E50] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm mb-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="disclosure-act" className="text-2xl font-bold mt-12 mb-4">The Illinois Residential Real Property Disclosure Act</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Disclosure is Mandatory — Attorney Review Does Not Override It</p>
              <p className="text-gray-700 mb-0">The Illinois Residential Real Property Disclosure Act (756 ILCS 77/1 et seq.) requires sellers to complete and deliver a written disclosure report to buyers before or at the time an offer is accepted. This is a separate legal obligation from the attorney review process. You cannot use attorney review modifications to eliminate your disclosure obligations.</p>
            </div>
            <p className="mb-6">The disclosure form requires you to disclose material defects you know about in:</p>
            <div className="grid md:grid-cols-2 gap-3 my-6">
              {[
                'Roof, gutters, and downspouts',
                'Foundation, basement, and crawl space',
                'Walls, windows, and doors',
                'Plumbing, heating, and cooling systems',
                'Electrical systems and components',
                'Presence of lead paint, asbestos, or radon',
                'Water intrusion or flooding history',
                'Known boundary or easement disputes',
                'HOA disputes or special assessments',
                'Presence of mold or moisture problems',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <FileText className="w-4 h-4 text-[#4a708b] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="mb-6">Your attorney reviews your disclosure form as part of their representation of you. Sellers who fail to disclose known material defects face potential rescission of the sale or damages claims after closing. When in doubt, disclose — the disclosure form exists to protect both parties.</p>

            <h2 id="repair-strategy" className="text-2xl font-bold mt-12 mb-4">Repair Negotiation Strategy During Attorney Review</h2>
            <p className="mb-6">While the formal inspection period comes after attorney review closes, your attorney can help you set the stage for successful repair negotiations by:</p>
            <ul className="space-y-3 my-6">
              {[
                'Adding an as-is addendum if you want to limit repair obligations — coupled with a full disclosure report, this is legally defensible',
                'Specifying a cap on repair credits in the contract (e.g., "seller will not be required to spend more than $X on inspection repairs")',
                'Clarifying that repair requests must be for structural, mechanical, electrical, or safety-related defects — not cosmetic items',
                'Confirming that the inspection contingency deadline is clearly defined to prevent open-ended inspection periods',
                'Negotiating the scope of what "material defect" means for purposes of the inspection contingency',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mb-6">The goal is not to eliminate the buyer's inspection rights — attempting to do so will drive the buyer away. The goal is to ensure that the inspection contingency is a defined, time-limited process with predictable outcomes, not an open-ended opportunity for price renegotiation.</p>

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
              <h3 className="text-2xl font-bold mb-4">Selling Your Home? Protect Yourself During Attorney Review.</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law provides flat-fee representation for home sellers throughout Chicago and Cook County. We review your contract during the attorney review period, add seller-protective language, and represent you through closing — so you sell on your terms.</p>
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
