'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, FileText, Shield, Home } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'warranty-deed-vs-quitclaim-deed-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeType, setActiveType] = useState<number>(0);

  const tocItems = [
    { id: 'overview', title: 'Illinois Deed Types Overview', level: 2, numeration: '1' },
    { id: 'deed-types', title: 'Each Deed Type Explained', level: 2, numeration: '2' },
    { id: 'comparison', title: 'Side-by-Side Comparison', level: 2, numeration: '3' },
    { id: 'which-to-use', title: 'Which Deed Type Should You Use?', level: 2, numeration: '4' },
    { id: 'title-insurance', title: 'How Title Insurance Fills the Gap', level: 2, numeration: '5' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '6' },
  ];

  const deedTypes = [
    {
      label: 'General Warranty',
      title: 'General Warranty Deed',
      description: 'A general warranty deed provides the broadest possible title protection. The grantor warrants that the title is clear against all claims — including those arising before the grantor ever owned the property. If a title defect emerges that predates the grantor\'s ownership, the grantor is still personally obligated to defend the grantee\'s title and compensate for losses.',
      warranties: ['Grantor owns the property and has the right to convey it', 'Title is free from all encumbrances except those listed', 'The grantee will have quiet enjoyment of the property', 'The grantor will defend against all title claims, even pre-ownership claims', 'The grantor will do whatever is necessary to perfect title if needed'],
      usedIn: 'Standard residential sales in Illinois. When a buyer pays full market value, they are entitled to the maximum title protection available.',
      coverage: 'All claims — past, present, and arising during seller\'s ownership',
    },
    {
      label: 'Special Warranty',
      title: 'Special Warranty Deed (Limited Warranty)',
      description: 'A special warranty deed includes the same covenants as a general warranty deed, but limits them to claims arising during the grantor\'s period of ownership only. The grantor does not warrant against title defects that existed before they acquired the property. This is the most common deed type in commercial real estate transactions.',
      warranties: ['Grantor owns the property as of the conveyance date', 'Title is free from encumbrances created by the grantor', 'Grantor will defend against claims arising from their period of ownership only', 'Does NOT warrant against pre-ownership defects'],
      usedIn: 'Commercial real estate sales, bank-owned (REO) property sales, estate sales by personal representatives, and foreclosure sales.',
      coverage: 'Claims arising during grantor\'s ownership only — no pre-ownership coverage',
    },
    {
      label: 'Quitclaim',
      title: 'Quitclaim Deed',
      description: 'A quitclaim deed contains no title warranties whatsoever. The grantor conveys only whatever interest they happen to hold in the property — which may be full fee simple ownership, a partial interest, or nothing at all. If the grantor has no interest, the deed conveys nothing and the grantee has no recourse against the grantor for title claims.',
      warranties: ['None — the grantor makes no promises about title quality', 'The grantor conveys only the interest they currently hold'],
      usedIn: 'Family transfers (spouse, parent/child), transfers to and from trusts, divorce property settlements, clearing title defects, gifts between relatives.',
      coverage: 'No coverage — grantor makes no warranties',
    },
    {
      label: "Trustee's Deed",
      title: "Trustee's Deed",
      description: 'A trustee\'s deed is used when a trustee conveys property held in trust. It typically includes only limited warranties — the trustee warrants that the trust exists, that they have authority to convey, and that they have not encumbered the property during their tenure as trustee. Trustees generally cannot warrant against pre-trust defects.',
      warranties: ['Trustee has authority to convey under the trust', 'Trustee has not encumbered the property', 'Trust is valid and in force', 'Does NOT include general title warranties'],
      usedIn: 'Sales from living trusts, land trusts, and testamentary trusts. Common in Illinois land trust transactions.',
      coverage: 'Limited to trustee\'s authority and actions — no broader title warranties',
    },
    {
      label: "Executor's Deed",
      title: "Executor's / Administrator's Deed",
      description: 'An executor\'s deed (or administrator\'s deed) is used when a personal representative of a decedent\'s estate conveys estate property. Like a trustee\'s deed, it contains only limited warranties. The personal representative warrants their own authority but typically cannot warrant against pre-death title defects.',
      warranties: ['Personal representative has authority per Letters of Office', 'The conveyance is authorized by the estate or court order', 'No personal liability beyond representative capacity', 'Does NOT include general title warranties'],
      usedIn: 'Probate sales where the decedent owned property in their individual name.',
      coverage: 'Limited to representative\'s authority — buyers rely on title insurance',
    },
  ];

  const faqs = [
    { q: 'Why does Illinois use warranty deeds for residential sales instead of quitclaim deeds?', a: 'Illinois residential custom dictates that sellers in arm\'s-length transactions warrant their title. A buyer paying full market value has a reasonable expectation that the seller actually owns what they are selling and that the title is clear. Using a warranty deed is an express commitment by the seller to stand behind the quality of title. This warranty is backed by — and supplemented by — title insurance, which provides coverage beyond the seller\'s personal financial ability to compensate.' },
    { q: 'If I have title insurance, do I still need a warranty deed?', a: 'Yes — the deed type and title insurance serve different functions. The warranty deed establishes the seller\'s legal obligation to the buyer if a title defect emerges. Title insurance provides a solvent third-party insurer who will compensate the insured (buyer or lender) for covered losses. You want both: the seller\'s warranty as a contractual backstop, and title insurance as practical financial protection since a seller who warranted title may be unable to pay if an expensive defect emerges years later.' },
    { q: 'Can a seller refuse to give a warranty deed in Illinois?', a: 'In theory, a seller can offer a quitclaim deed in a sale, but a sophisticated buyer\'s attorney will insist on a warranty deed as a condition of closing. Bank-owned properties and estate sales often use limited warranty or special warranty deeds — buyers of these properties should ensure their title insurance coverage is robust, since the seller is providing reduced title protection. Never accept a quitclaim deed in an arm\'s-length purchase without understanding the risks and ensuring comprehensive title insurance.' },
    { q: 'What is an Illinois land trust deed?', a: 'Illinois has a unique "land trust" institution — a type of trust where the trustee (usually a bank or title company) holds bare legal title to real property for the benefit of the beneficiaries. Transfers in and out of land trusts use trustee\'s deeds. Land trusts were historically popular for privacy (the beneficiary\'s identity was not publicly recorded), though their use has declined as revocable living trusts have become more common.' },
    { q: 'Does a warranty deed protect against zoning changes or building code violations?', a: 'No. Warranty deed covenants protect against claims to ownership or title, not against governmental regulations, zoning, or the physical condition of the property. A warranty deed would protect you if someone later claims they own the property or that a mortgage you didn\'t know about exists. It would not protect you against a zoning violation, a building permit issue, or a structural defect. These are covered (or excluded) by different provisions — your inspection contingency and possibly title insurance endorsements.' },
    { q: 'What happens if a seller breaches a warranty deed covenant?', a: 'If a title defect emerges after closing that the seller warranted against, the buyer can pursue the seller for breach of the warranty covenant. In practice, the buyer first makes a claim on their title insurance policy. The title insurer pays the claim and then (through a legal right called subrogation) pursues the seller who breached the warranty. The buyer\'s title insurance protects them from having to personally pursue the seller — a significant practical benefit.' },
    { q: 'I\'m buying a foreclosure property in Illinois. What deed type should I expect?', a: 'Foreclosure sales in Illinois typically result in a sheriff\'s deed or trustee\'s deed, which carry limited or no warranties. The bank/lender conveying an REO (real estate owned) property typically uses a special warranty or limited warranty deed — they warrant only against their own actions during ownership, not against pre-foreclosure defects. This makes title insurance essential for foreclosure and REO purchases, as you may be acquiring a property with unknown title issues from the prior owner\'s chain of title.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Warranty Deed vs. Quitclaim Deed in Illinois: What\'s the Difference?',
    description: 'Illinois uses several types of deeds — warranty, special warranty, quitclaim, trustee\'s, and executor\'s. Learn the difference, what warranties each provides, and which deed type belongs in which situation.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-26', dateModified: '2026-05-26',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">Warranty Deed vs. Quitclaim Deed in Illinois: What&apos;s the Difference?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Illinois has five types of deeds, each with a different level of title protection. Knowing which deed belongs in which transaction protects you from serious legal risk.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 26, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="overview" className="text-2xl font-bold mt-8 mb-4">Illinois Deed Types Overview</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">All Illinois deeds transfer real property ownership — but they differ dramatically in the legal promises (called "covenants of warranty") the grantor makes about the quality of title being conveyed.</p>
              <p className="mb-0 text-gray-700">Using the wrong deed type is a common and expensive mistake. A buyer who accepts a quitclaim deed in a sale from a stranger is giving up significant legal protection. A family member who insists on a warranty deed for a simple intra-family transfer is adding unnecessary formality. Understanding what each deed type promises — and guarantees — is essential knowledge for anyone dealing with Illinois real estate.</p>
            </div>

            <h2 id="deed-types" className="text-2xl font-bold mt-12 mb-4">Each Deed Type Explained</h2>
            <p className="mb-6">Click each deed type to explore what it covers:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {deedTypes.map((d, i) => (
                  <button key={i} onClick={() => setActiveType(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeType === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {d.label}
                  </button>
                ))}
              </div>
              <div className="bg-white border-2 border-[#2D3E50] rounded-xl p-6">
                <h3 className="font-bold text-[#2D3E50] text-xl mb-3">{deedTypes[activeType].title}</h3>
                <p className="text-gray-700 mb-4">{deedTypes[activeType].description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm text-gray-600 mb-2">Warranties Included:</p>
                    <ul className="space-y-1">
                      {deedTypes[activeType].warranties.map((w, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          {w.startsWith('Does NOT') ? <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" /> : <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />}
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Typically Used For:</p>
                      <p className="text-sm text-gray-700">{deedTypes[activeType].usedIn}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Coverage Scope:</p>
                      <p className="text-sm text-gray-700">{deedTypes[activeType].coverage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 id="comparison" className="text-2xl font-bold mt-12 mb-4">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-3 py-3 text-left text-sm">Deed Type</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Warrants Pre-Ownership Claims</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Warrants During-Ownership Claims</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Best Used For</th></tr></thead>
                <tbody>
                  {[
                    ['General Warranty', 'Yes', 'Yes', 'Residential sales (arm\'s length)'],
                    ['Special Warranty', 'No', 'Yes', 'Commercial sales, REO, estate sales'],
                    ['Quitclaim', 'No', 'No', 'Family transfers, trusts, title fixes'],
                    ['Trustee\'s Deed', 'Limited', 'Limited (trustee only)', 'Trust property conveyances'],
                    ['Executor\'s Deed', 'Limited', 'Limited (rep authority)', 'Probate property sales'],
                  ].map(([type, pre, during, best], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-3 py-3 text-sm font-semibold">{type}</td><td className="border border-gray-300 px-3 py-3 text-sm">{pre}</td><td className="border border-gray-300 px-3 py-3 text-sm">{during}</td><td className="border border-gray-300 px-3 py-3 text-sm">{best}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="which-to-use" className="text-2xl font-bold mt-12 mb-4">Which Deed Type Should You Use?</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { situation: 'Buying/selling a home at arm\'s length', deed: 'General Warranty Deed', note: 'Standard for Illinois residential transactions' },
                { situation: 'Buying/selling commercial property', deed: 'Special Warranty Deed', note: 'Industry standard in commercial real estate' },
                { situation: 'Adding spouse to title', deed: 'Quitclaim Deed', note: 'No warranties needed for spousal transfer' },
                { situation: 'Transferring home to living trust', deed: 'Quitclaim Deed', note: 'Grantor transferring to their own trust' },
                { situation: 'Selling inherited property from a trust', deed: "Trustee's Deed", note: 'Trustee conveys pursuant to trust terms' },
                { situation: 'Selling inherited property from probate estate', deed: "Executor's Deed", note: 'Personal representative conveys via Letters of Office' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Situation</p>
                  <p className="font-semibold text-gray-800 text-sm mb-2">{item.situation}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#2D3E50] text-white text-xs rounded-full font-semibold">{item.deed}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{item.note}</p>
                </div>
              ))}
            </div>

            <h2 id="title-insurance" className="text-2xl font-bold mt-12 mb-4">How Title Insurance Fills the Gap</h2>
            <p className="mb-6">No deed type provides perfect protection — even a general warranty deed is only as valuable as the seller's financial ability to compensate you if a title defect emerges years later. This is where title insurance becomes critical.</p>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">Title insurance pays claims that the seller's warranty cannot — particularly when the seller is unavailable, insolvent, or deceased decades after the sale.</p>
              <p className="mb-0 text-gray-700">When a deed provides limited warranties (special warranty, trustee's, executor's) or no warranties (quitclaim), a robust owner's title insurance policy becomes even more important as the buyer's primary protection against title defects. The title insurance underwriter — not the seller — becomes the financial backstop.</p>
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
              <h3 className="text-2xl font-bold mb-4">Make Sure You Get the Right Deed</h3>
              <p className="text-white/90 mb-6">Whether you are buying, selling, or transferring property in Illinois, the deed type matters. Illinois Estate Law represents buyers and sellers throughout Cook County and advises on deed selection for all types of real estate transactions.</p>
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
