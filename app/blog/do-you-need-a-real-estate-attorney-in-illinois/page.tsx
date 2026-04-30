'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, ChevronDown, ChevronUp, Clock, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Home, Users, FileText, DollarSign, Shield } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'do-you-need-a-real-estate-attorney-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const tocItems = [
    { id: 'summary', title: 'Article Summary', level: 2, numeration: '1' },
    { id: 'illinois-attorney-state', title: 'Illinois Is an Attorney State — What That Means', level: 2, numeration: '2' },
    { id: 'what-attorney-does', title: 'What a Real Estate Attorney Does at Closing', level: 2, numeration: '3' },
    { id: 'attorney-vs-agent', title: 'Real Estate Attorney vs. Real Estate Agent: Different Roles', level: 2, numeration: '4' },
    { id: 'cost', title: 'What Does a Real Estate Attorney Cost in Illinois?', level: 2, numeration: '5' },
    { id: 'when-especially-important', title: 'When an Attorney Is Especially Important', level: 2, numeration: '6' },
    { id: 'quiz', title: 'Quick Quiz', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    { q: 'Is a real estate attorney required by law in Illinois?', a: 'Not strictly required by statute for every transaction, but in practice, nearly every Illinois residential closing involves attorneys for both buyer and seller. Lenders, title companies, and industry custom all expect attorney involvement, and the Illinois State Bar Association strongly recommends it. Attempting to close without an attorney in Illinois is uncommon and carries real risk.' },
    { q: 'Can my real estate agent handle the closing without an attorney?', a: 'No. A real estate agent is licensed to facilitate the purchase and sale of property — not to provide legal advice, draft or review contracts, or represent your legal interests. In Illinois, only a licensed attorney may perform those functions. Your agent plays a critical role in finding the property and negotiating price, but legal review and closing representation require an attorney.' },
    { q: 'Do I need a separate attorney from the seller?', a: 'Yes. Each party — buyer and seller — should have their own attorney. The seller\'s attorney and buyer\'s attorney each represent their own client\'s interests, and those interests are often adverse. A single attorney cannot ethically represent both sides in the same transaction.' },
    { q: 'How much does a real estate attorney cost in Illinois?', a: 'Most Illinois residential real estate attorneys charge a flat fee per transaction, typically ranging from $500 to $1,500 depending on the complexity of the transaction, the county, and the attorney\'s experience. Some charge hourly. The fee is almost always worth it given the size of the asset involved.' },
    { q: 'When should I hire my real estate attorney?', a: 'As early as possible — ideally before you sign any contract. In Illinois, buyers and sellers enter into a multi-page contract (usually the MREA or a custom form), and you want your attorney to review it during the attorney review period. If you wait until the day of closing, there is little your attorney can do to protect you from unfavorable contract terms you already agreed to.' },
    { q: 'What happens during the attorney review period in Illinois?', a: 'After a residential purchase contract is signed by both parties, Illinois custom provides a five-business-day attorney review period. During this window, either party\'s attorney may approve the contract, propose modifications, or terminate the contract without penalty. This is your attorney\'s primary opportunity to adjust terms, add contingencies, and identify issues. After the review period closes, the contract is binding.' },
  ];

  const roles = [
    { icon: <FileText className="w-6 h-6" />, title: 'Contract Review & Negotiation', desc: 'Reviews the purchase contract during attorney review, proposes modifications, and negotiates terms on your behalf.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Title Examination', desc: 'Reviews the title commitment to identify liens, easements, judgments, or other clouds on title that could affect your ownership.' },
    { icon: <Home className="w-6 h-6" />, title: 'Closing Document Review', desc: 'Reviews all closing documents before you sign — the deed, closing disclosure, loan documents, and transfer tax declarations.' },
    { icon: <DollarSign className="w-6 h-6" />, title: 'Proration & Credit Calculations', desc: 'Verifies that property tax prorations, HOA dues, rents, and other credits are calculated correctly.' },
    { icon: <Users className="w-6 h-6" />, title: 'Representation at Closing', desc: 'Attends the closing table (in person or remotely) to represent your interests and answer questions in real time.' },
    { icon: <Scale className="w-6 h-6" />, title: 'Post-Closing Recording', desc: 'Ensures the deed is properly recorded with the county recorder and that all title insurance policies are issued correctly.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Do You Need a Real Estate Attorney to Buy or Sell a Home in Illinois?',
    description: 'Illinois is an attorney state for real estate closings. Learn what a real estate attorney does, what they cost, and why attempting to close without one is risky.',
    author: { '@type': 'Person', name: 'Mary Liberty', jobTitle: 'Estate Planning & Real Estate Attorney' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law', logo: { '@type': 'ImageObject', url: 'https://www.illinoisestatelaw.com/logo.png' } },
    datePublished: '2026-05-05',
    dateModified: '2026-05-05',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">Do You Need a Real Estate Attorney to Buy or Sell a Home in Illinois?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Illinois is an attorney state. Here is what that means, what your attorney actually does at closing, and why going without one is a risk most buyers and sellers should not take.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Estate Planning &amp; Real Estate Attorney</span>
                <span>&bull;</span>
                <time>May 5, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="summary" className="text-2xl font-bold mt-8 mb-4">Article Summary</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-6 my-8 rounded-r-lg">
              <p className="mb-3 font-semibold text-lg">Illinois follows attorney-closing custom for residential real estate. While no state statute mandates an attorney for every closing, the practical reality is that attorneys are expected on both sides of nearly every transaction — and attempting to close without one puts your interests at serious risk.</p>
              <p className="mb-0 text-gray-700">This guide explains what an Illinois real estate attorney does, how they differ from your real estate agent, what they cost, and when their role is most critical.</p>
            </div>

            <h2 id="illinois-attorney-state" className="text-2xl font-bold mt-12 mb-4">Illinois Is an Attorney State — What That Means</h2>
            <p className="mb-6">Across the United States, real estate closing customs vary dramatically. In some states — Texas, California, Florida — real estate closings are typically handled by escrow companies or title companies without attorney involvement. In others, attorney representation is legally required. Illinois falls into a third category: it is not legally mandated in every case, but it is so deeply embedded in industry practice that it is functionally expected on both sides of every residential transaction.</p>
            <p className="mb-6">The Illinois State Bar Association, most lenders, and virtually all title companies operating in Illinois expect buyer and seller attorneys to be involved. The standard residential purchase contract used throughout the Chicago area includes an attorney review period specifically because attorney involvement is assumed.</p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm"><strong>The bottom line:</strong> In Cook County and the Chicago suburbs, buying or selling a home without an attorney is technically possible but practically unusual — and for good reason. The documents involved are legally binding, the amounts are significant, and the attorney review period exists precisely to give attorneys a chance to protect their clients.</p>
              </div>
            </div>

            <h2 id="what-attorney-does" className="text-2xl font-bold mt-12 mb-4">What a Real Estate Attorney Does at Closing</h2>
            <p className="mb-6">Many buyers and sellers think of the closing attorney as someone who simply witnesses signatures. In reality, a real estate attorney is involved throughout the transaction — from contract review through post-closing recording.</p>
            <div className="grid md:grid-cols-2 gap-5 my-8">
              {roles.map((role, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#2D3E50] text-white flex items-center justify-center flex-shrink-0">{role.icon}</div>
                    <h3 className="font-bold text-[#2D3E50] text-base">{role.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>

            <h2 id="attorney-vs-agent" className="text-2xl font-bold mt-12 mb-4">Real Estate Attorney vs. Real Estate Agent: Different Roles</h2>
            <p className="mb-6">One of the most common misconceptions in Illinois real estate is that the buyer's agent or seller's agent handles the legal aspects of the transaction. They do not — and legally cannot. The roles are completely different.</p>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#2D3E50] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Task</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Real Estate Agent</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Real Estate Attorney</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Find and show properties', '✓', '—'],
                    ['Negotiate purchase price', '✓', '—'],
                    ['Review and modify the contract', '—', '✓'],
                    ['Provide legal advice', '—', '✓'],
                    ['Examine title for defects', '—', '✓'],
                    ['Represent your legal interests', '—', '✓'],
                    ['Verify closing cost calculations', '—', '✓'],
                    ['Draft deed and transfer documents', '—', '✓'],
                  ].map(([task, agent, attorney], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                      <td className="border border-gray-300 px-4 py-3 text-sm">{task}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-green-700">{agent}</td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-green-700">{attorney}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-6">Your real estate agent owes you duties of loyalty and disclosure in their capacity as your agent — but they are not authorized to practice law, and they cannot review contract language, advise you on title defects, or protect your legal rights. Those tasks belong exclusively to your attorney.</p>

            <h2 id="cost" className="text-2xl font-bold mt-12 mb-4">What Does a Real Estate Attorney Cost in Illinois?</h2>
            <p className="mb-6">Most Illinois residential real estate attorneys charge a flat fee per transaction. In the Chicago area, typical flat fees range from <strong>$500 to $1,500</strong> for a standard residential purchase or sale. More complex transactions — short sales, REO properties, commercial deals, transactions with title issues — may command higher fees or hourly billing.</p>
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { label: 'Standard Residential Purchase or Sale', range: '$500 – $900', note: 'Flat fee, typical Cook County range' },
                { label: 'Complex or Distressed Property', range: '$900 – $1,500+', note: 'Short sales, REO, title curative work' },
                { label: 'Hourly Rate (some attorneys)', range: '$200 – $400/hr', note: 'Less common for residential closings' },
              ].map((item, i) => (
                <div key={i} className="bg-[#f0f5f8] border border-[#d0e4ef] rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-[#2D3E50] mb-1">{item.range}</p>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{item.label}</p>
                  <p className="text-gray-500 text-xs">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mb-6">Put in perspective: on a $400,000 home purchase, a $700 attorney fee represents 0.175% of the transaction value. For that, you get legal representation through one of the largest financial transactions of your life. It is one of the better-value professional fees in any real estate deal.</p>

            <h2 id="when-especially-important" className="text-2xl font-bold mt-12 mb-4">When an Attorney Is Especially Important</h2>
            <p className="mb-6">While attorney involvement is recommended for all Illinois residential transactions, there are specific circumstances where the stakes are elevated and the value of legal counsel is even clearer:</p>
            <div className="space-y-3 my-6">
              {[
                { title: 'Short sales or foreclosure purchases', desc: 'These transactions involve lender approval, complex addenda, and timelines that differ significantly from standard sales. Mistakes are costly and rarely reversible.' },
                { title: 'New construction', desc: 'Builder contracts are drafted by the builder\'s attorney to protect the builder. They are rarely balanced, and buyers who sign without attorney review routinely waive rights they did not know they had.' },
                { title: 'Properties with title issues', desc: 'Boundary disputes, old liens, easements, missing heirs, or prior foreclosures all require legal analysis before you commit to purchasing.' },
                { title: 'Estate sales and probate property', desc: 'When a property is being sold out of a deceased person\'s estate, additional legal steps are required. The seller\'s authority to convey must be verified carefully.' },
                { title: 'Divorce-related transactions', desc: 'When a marital home is being sold or transferred as part of a divorce settlement, the legal requirements are complex and require coordination with family law counsel.' },
                { title: 'Investment property or multi-unit buildings', desc: 'Tenant rights, lease assignments, rent rolls, and due diligence for income properties involve legal analysis beyond a standard single-family closing.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                  <div><span className="font-semibold text-[#2D3E50]">{item.title}: </span><span className="text-gray-700 text-sm">{item.desc}</span></div>
                </div>
              ))}
            </div>

            <h2 id="quiz" className="text-2xl font-bold mt-12 mb-4">Quick Quiz</h2>
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <p className="font-bold text-[#2D3E50] text-lg mb-4">True or False: In Illinois, a real estate agent can review your purchase contract and provide legal advice about the terms.</p>
              <div className="flex gap-4 mb-4">
                {['True', 'False'].map((opt) => (
                  <button key={opt} onClick={() => { if (!quizSubmitted) { setQuizAnswer(opt); setQuizSubmitted(true); } }}
                    className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all ${quizSubmitted ? opt === 'False' ? 'bg-green-100 border-green-500 text-green-800' : quizAnswer === 'True' ? 'bg-red-100 border-red-500 text-red-800' : 'border-gray-200 text-gray-400' : 'border-[#2D3E50] text-[#2D3E50] hover:bg-[#2D3E50] hover:text-white'}`}>
                    {opt}
                  </button>
                ))}
              </div>
              {quizSubmitted && (
                <div className={`rounded-lg p-4 ${quizAnswer === 'False' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className="font-bold mb-1">{quizAnswer === 'False' ? 'Correct!' : 'Not quite.'}</p>
                  <p className="text-sm text-gray-700"><strong>False.</strong> In Illinois, only a licensed attorney may provide legal advice, review contract terms for their legal implications, or represent a party's legal interests in a real estate transaction. A real estate agent can explain what common contract terms mean as a matter of practice — but advising you on whether to accept or reject a legal provision crosses into the unauthorized practice of law.</p>
                </div>
              )}
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

            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4">Next Steps</h2>
            <p className="mb-6">Whether you are buying your first home, selling a property, or navigating a more complex transaction, Illinois Estate Law provides flat-fee real estate closing representation for buyers and sellers throughout Cook County and the Chicago suburbs. We handle the legal side of your transaction so you can close with confidence.</p>
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Real Estate Closing Representation in Illinois</h3>
              <p className="text-white/90 mb-6">Flat-fee buyer and seller representation for residential real estate closings in Cook County and the Chicago area. Contact us to discuss your transaction.</p>
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
