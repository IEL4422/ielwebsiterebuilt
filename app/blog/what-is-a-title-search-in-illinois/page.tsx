'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Search, FileText, List } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-is-a-title-search-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [expandedDefect, setExpandedDefect] = useState<number | null>(null);

  const tocItems = [
    { id: 'what-is', title: 'What Is a Title Search?', level: 2, numeration: '1' },
    { id: 'what-it-finds', title: 'What a Title Search Can Find', level: 2, numeration: '2' },
    { id: 'commitment', title: 'Reading the Title Commitment', level: 2, numeration: '3' },
    { id: 'clouds', title: 'Clouds on Title: What They Are and How to Resolve Them', level: 2, numeration: '4' },
    { id: 'common-defects', title: 'Common Title Defects in Cook County', level: 2, numeration: '5' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '6' },
  ];

  const commonDefects = [
    { title: 'Unreleased Mortgages', detail: 'A previous owner paid off their mortgage, but the lender never filed a release of mortgage with the county recorder. The paid-off mortgage still appears as a lien on the title. Resolution: the title company contacts the former lender to obtain and record the release, or may indemnify against the defect.' },
    { title: 'Judgment Liens', detail: 'A creditor obtained a court judgment against a prior owner and recorded a judgment lien against the property. The lien attaches to all real property in the county owned by the judgment debtor. Resolution: the lien must be paid off or a release obtained from the creditor before or at closing.' },
    { title: 'Mechanics Liens', detail: 'A contractor, subcontractor, or supplier who performed work on the property and was not paid may file a mechanics lien. These can be filed after the work was completed and may not appear until after the sale closes. Resolution: the seller pays the lien, provides a sworn owner\'s affidavit, or the title company holds back funds in escrow.' },
    { title: 'Missing Heirs', detail: 'When a property passes through an estate, sometimes not all heirs sign the deed. An heir who was not included in the estate administration may later claim an interest in the property. Resolution: locate and obtain quitclaim deeds from missing heirs, or the title insurer insures over the risk after investigation.' },
    { title: 'Forged or Fraudulent Deeds', detail: 'Identity theft in real estate is a growing problem. A fraudster may forge a homeowner\'s signature on a deed, purporting to transfer the property. The forged deed is void, but it can cloud title for the legitimate owner. Resolution: title insurance covers this risk; legal action may be needed to quiet title.' },
    { title: 'Boundary Disputes', detail: 'Survey evidence conflicts with the legal description in the title chain, suggesting the property boundary is in the wrong location. Resolution: survey, potentially a boundary line agreement with neighbors, or legal action to establish the correct boundary.' },
    { title: 'Easements Not in the Chain', detail: 'A utility company or neighbor has been using a portion of the property under an unrecorded easement agreement. Resolution: the title insurer may except this risk from coverage, or the easement may be formalized and recorded as part of closing.' },
    { title: 'Lis Pendens', detail: 'A notice of pending litigation affecting the property (lis pendens) is recorded in the chain of title. A buyer who purchases while a lis pendens is recorded takes subject to the outcome of the lawsuit. Resolution: the litigation must be resolved or the lis pendens released before a clean title can be conveyed.' },
  ];

  const faqs = [
    { q: 'How long does a title search take in Illinois?', a: 'A standard residential title search in Illinois typically takes 2–5 business days. In Cook County, the search involves the Cook County Recorder of Deeds, the Cook County Circuit Court judgment records, and the Cook County Treasurer\'s tax records — each a separate database. Complex chains of title, older properties, or properties that have changed hands frequently may require additional time.' },
    { q: 'Who orders and pays for the title search?', a: 'The title search is ordered by the title company handling the closing. In Illinois residential transactions, the cost of the title search is typically bundled into the title insurance premium rather than billed separately. The seller\'s side traditionally selects and pays for the owner\'s title insurance (and therefore the title search) in Chicago and Cook County, though this is negotiable.' },
    { q: 'Can a title search find everything wrong with a title?', a: 'No — and this is precisely why title insurance exists. A title search can find everything recorded in the public record. It cannot find fraud that hasn\'t yet been discovered, unrecorded interests, errors in the public records themselves, and claims by heirs or parties who were never brought into the chain of title. Title insurance covers the risks that a thorough title search still misses.' },
    { q: 'What is a title commitment and do I have to read it?', a: 'A title commitment is the title company\'s contractual commitment to issue a title insurance policy after closing, subject to stated requirements and exceptions. You do not have to read it, but your attorney should review it carefully — particularly Schedule B-II, which lists exceptions to coverage. Known easements, covenants, and restrictions that are exceptions will not be covered by the policy, so you should understand what they are before closing.' },
    { q: 'What happens if a title defect is found before closing?', a: 'Most title defects discovered before closing are resolved as a condition of closing. Common resolutions include: paying off or obtaining releases from liens, locating missing heirs and obtaining quitclaim deeds, recording payoff statements for mortgages that were satisfied but not released, or having the title insurer provide coverage over a specific risk after investigation. Your attorney coordinates with the title company and other parties to resolve the defect.' },
    { q: 'What is a "quiet title" action?', a: 'A quiet title action is a lawsuit filed in circuit court to establish clear title to a property when there is a disputed claim or cloud that cannot be resolved by agreement. The court issues an order that "quiets" — i.e., resolves — all competing claims and establishes the rightful owner of record. Quiet title actions are sometimes needed for properties with forged deeds, missing heirs who cannot be located, or long-standing boundary disputes.' },
    { q: 'Are there title defects specific to condominiums in Cook County?', a: 'Yes. Condominium titles carry additional potential defects including unpaid HOA assessments (which can become liens), unapproved units or common area modifications, missing condominium declarations, and boundary descriptions that differ from the physical unit. Your title search for a condo should include a review of the condominium declaration and bylaws, any recorded amendments, and a certificate from the HOA confirming current assessments.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What Is a Title Search in Illinois and What Does It Find?',
    description: 'A title search in Illinois reviews public records to find liens, judgments, easements, and other defects in a property\'s chain of title. Learn what a title search involves, what it finds, and how to read a title commitment.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-06-02', dateModified: '2026-06-02',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">What Is a Title Search in Illinois and What Does It Find?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">Before you close on any Illinois property, a title search digs through decades of public records. Here is what it looks for, what it finds, and what it can miss.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>June 2, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="what-is" className="text-2xl font-bold mt-8 mb-4">What Is a Title Search?</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">A title search is a systematic review of public records — including the county recorder of deeds, circuit court records, and property tax records — to trace the history of ownership of a piece of real estate and identify any claims, liens, or defects affecting the title.</p>
              <p className="mb-0 text-gray-700">In Illinois, the title search is performed by a licensed title company before issuing a title insurance commitment. The searcher reviews the chain of title going back at least 40 years (often further) and reports on every recorded instrument that affects the property.</p>
            </div>
            <p className="mb-6">For every piece of Illinois real estate, the public record contains a documentary history: deeds recording each transfer of ownership, mortgages and their releases, judgment liens, mechanics liens, easements, covenants, tax delinquencies, and court cases affecting the property. The title search reads this history and flags anything that could affect the buyer's right to receive clear title at closing.</p>

            <h2 id="what-it-finds" className="text-2xl font-bold mt-12 mb-4">What a Title Search Can Find</h2>
            <p className="mb-6">A thorough Illinois title search reviews multiple databases and can find:</p>
            <div className="grid md:grid-cols-2 gap-3 my-6">
              {[
                'Outstanding mortgages and deeds of trust',
                'Mechanics liens from unpaid contractors',
                'Judgment liens from court cases against prior owners',
                'Federal and state tax liens (IRS, IDOR)',
                'Property tax delinquencies and back taxes owed',
                'Easements and rights-of-way recorded on the property',
                'Restrictive covenants limiting use of the property',
                'Lis pendens (pending litigation notices)',
                'Boundary encroachments noted in surveys',
                'Errors in prior deeds (incorrect legal descriptions)',
                'Missing links in the chain of title (gap periods)',
                'Probate proceedings affecting the property',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <Search className="w-4 h-4 text-[#4a708b] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h2 id="commitment" className="text-2xl font-bold mt-12 mb-4">Reading the Title Commitment</h2>
            <p className="mb-6">After the search is complete, the title company issues a title commitment — a document committing to issue a title insurance policy after closing, subject to stated conditions and exceptions. Every title commitment contains the same basic sections:</p>
            <div className="space-y-4 my-6">
              {[
                { schedule: 'Schedule A', title: 'Basic Information', desc: 'Identifies the property (legal description and street address), the amount of insurance (purchase price for owner\'s, loan amount for lender\'s), and the names of the insured parties. This schedule confirms who is buying what, for how much.' },
                { schedule: 'Schedule B-I', title: 'Requirements', desc: 'Lists conditions that must be satisfied before the title company will issue the policy. Common requirements: pay off the seller\'s existing mortgage, pay off any judgment liens, provide proper identification, execute a proper deed. Your attorney reviews these to ensure they will be met at or before closing.' },
                { schedule: 'Schedule B-II', title: 'Exceptions to Coverage', desc: 'Lists items that will remain after closing and are NOT covered by the title insurance policy. This often includes recorded easements, utility rights-of-way, HOA declarations and bylaws, and existing encroachments. Review Schedule B-II carefully — these are the risks that title insurance will not cover.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="w-24 flex-shrink-0">
                    <span className="font-bold text-[#2D3E50] text-sm">{item.schedule}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-700 text-sm mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Why Schedule B-II Matters</p>
              <p className="text-gray-700 mb-0">Schedule B-II is the most important section for buyers to understand. Anything listed there is a known condition that you are accepting as part of your purchase — the title insurer will not compensate you for a claim based on a Schedule B-II exception. Your attorney reviews these exceptions to ensure they are acceptable and to flag anything unexpected.</p>
            </div>

            <h2 id="clouds" className="text-2xl font-bold mt-12 mb-4">Clouds on Title: What They Are and How to Resolve Them</h2>
            <p className="mb-6">A "cloud on title" is any claim, lien, encumbrance, or other recorded instrument that calls into question the quality of the seller's title. Clouds must be resolved before a clean title can be conveyed to a buyer. Common resolution methods include:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Type of Cloud</th><th className="border border-gray-300 px-4 py-3 text-left">Typical Resolution</th><th className="border border-gray-300 px-4 py-3 text-left">Who Handles It</th></tr></thead>
                <tbody>
                  {[
                    ['Unreleased mortgage', 'Contact prior lender for release; record payoff certificate', 'Title company + seller\'s attorney'],
                    ['Judgment lien', 'Pay off the judgment; obtain release from creditor', 'Seller (paid from closing proceeds)'],
                    ['Mechanics lien', 'Pay contractor; indemnification escrow; title insurance over', 'Seller\'s attorney + title company'],
                    ['Tax delinquency', 'Pay past-due taxes (prorated at closing)', 'Seller (from proceeds)'],
                    ['Lis pendens', 'Resolve underlying litigation; obtain release', 'Seller + their attorney'],
                    ['Missing heir', 'Locate heir for quitclaim deed; or quiet title action', 'Seller\'s attorney; possibly litigation'],
                  ].map(([type, resolution, who], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{type}</td><td className="border border-gray-300 px-4 py-3 text-sm">{resolution}</td><td className="border border-gray-300 px-4 py-3 text-sm">{who}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="common-defects" className="text-2xl font-bold mt-12 mb-4">Common Title Defects in Cook County</h2>
            <p className="mb-6">Cook County has a long history of real estate activity, and title searches in Chicago and the suburbs regularly surface these issues. Click each to learn more:</p>
            <div className="space-y-3 my-6">
              {commonDefects.map((defect, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button onClick={() => setExpandedDefect(expandedDefect === i ? null : i)} className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{defect.title}</span>
                    </div>
                    {expandedDefect === i ? <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />}
                  </button>
                  {expandedDefect === i && <div className="px-6 py-4 bg-white border-t border-gray-100"><p className="text-gray-700 leading-relaxed">{defect.detail}</p></div>}
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
              <h3 className="text-2xl font-bold mb-4">Have a Title Issue? Let&apos;s Resolve It.</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law reviews title commitments and resolves title defects for buyers and sellers throughout Cook County. We identify problems others miss — and fix them before they delay your closing.</p>
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
