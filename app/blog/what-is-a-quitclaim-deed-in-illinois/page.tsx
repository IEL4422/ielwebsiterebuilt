'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, FileText, Users, Home, X } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-is-a-quitclaim-deed-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<number>(0);

  const tocItems = [
    { id: 'definition', title: 'What Is a Quitclaim Deed?', level: 2, numeration: '1' },
    { id: 'when-to-use', title: 'When to Use a Quitclaim Deed', level: 2, numeration: '2' },
    { id: 'when-not-to-use', title: 'When NOT to Use a Quitclaim Deed', level: 2, numeration: '3' },
    { id: 'requirements', title: 'Requirements for a Valid Illinois Quitclaim Deed', level: 2, numeration: '4' },
    { id: 'recording', title: 'Recording and Transfer Tax', level: 2, numeration: '5' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '6' },
  ];

  const useCases = [
    {
      label: 'Adding a Spouse',
      title: 'Adding a Spouse to Title After Marriage',
      desc: 'One of the most common uses of a quitclaim deed in Illinois. If you owned a home before marriage and want to add your spouse to the title, a quitclaim deed transfers your interest to both of you jointly. The deed conveys your current interest — no title warranties — which is appropriate since you are transferring to yourself and your spouse, not a stranger.',
      taxNote: 'Transfer to a spouse is generally exempt from Illinois transfer tax under 35 ILCS 200/31-45. A PTAX-203 form must still be filed.',
      appropriate: true,
    },
    {
      label: 'Removing Ex After Divorce',
      title: 'Removing a Former Spouse After Divorce',
      desc: 'A divorce decree that awards the house to one spouse does not automatically remove the other spouse from the deed. The spouse being removed must execute a quitclaim deed conveying their interest to the remaining owner. This should be done promptly — delays can complicate mortgage refinancing and future sale.',
      taxNote: 'Transfers pursuant to a divorce judgment are exempt from Illinois transfer tax. Provide a copy of the divorce decree at recording.',
      appropriate: true,
    },
    {
      label: 'Transferring to a Trust',
      title: 'Transferring Your Home to a Revocable Living Trust',
      desc: 'When funding a revocable living trust, the grantor executes a deed conveying the property from themselves individually to themselves as trustee. A quitclaim deed is appropriate here — the grantor is not warranting title to a stranger, just retitling to their own trust.',
      taxNote: 'Transfers to a revocable trust of which the grantor is the beneficiary are exempt from transfer tax under Illinois law.',
      appropriate: true,
    },
    {
      label: 'Clearing a Title Defect',
      title: 'Clearing a Cloud on Title',
      desc: 'If a title search reveals an old deed that inadvertently left an interest in a third party — perhaps a previous owner\'s heir who was never formally conveyed out — a quitclaim deed from that party can clear the defect without that party warranting good title. They convey "whatever interest I may have, if any."',
      taxNote: 'Consideration in these cases may be nominal ($10). Still file a PTAX-203 and pay any applicable transfer tax on the nominal consideration.',
      appropriate: true,
    },
    {
      label: 'Arm\'s Length Sale',
      title: 'Selling to a Buyer You Don\'t Know',
      desc: 'Do NOT use a quitclaim deed for an arm\'s length sale to an unrelated buyer. A buyer paying fair market value is entitled to title warranties — specifically a warranty that you own what you are selling and that the title is clear of defects. A quitclaim deed gives the buyer no recourse if a title defect emerges after closing.',
      taxNote: 'Use a warranty deed for any sale to an unrelated third party.',
      appropriate: false,
    },
  ];

  const requirements = [
    { req: 'In writing', detail: 'An oral transfer of real estate is not enforceable in Illinois. The deed must be a written document.' },
    { req: 'Signed by the grantor(s)', detail: 'Every person who currently holds an interest in the property must sign the deed as grantor. If title is held jointly, all joint owners must sign.' },
    { req: 'Notarized', detail: 'The grantor\'s signature must be acknowledged before a notary public. Without notarization the deed cannot be recorded.' },
    { req: 'Two witnesses', detail: 'Illinois requires two adult witnesses (other than the notary) to the grantor\'s signature. This is often overlooked and causes recording rejection.' },
    { req: 'Grantee clearly identified', detail: 'The deed must name the grantee (recipient) with enough specificity to identify them — full legal name and, for a trust, the full trust name and date.' },
    { req: 'Legal description of property', detail: 'The deed must contain the full legal description of the property as it appears in the county\'s records — not just the street address.' },
    { req: 'Statement of consideration', detail: 'Illinois deeds must state the consideration (what was paid). For family transfers, this is often "$10 and other good and valuable consideration."' },
    { req: 'PTAX-203 form', detail: 'A Real Estate Transfer Declaration (PTAX-203) must accompany the deed at recording. This form reports the transfer to the Illinois Department of Revenue and is required even for exempt transfers.' },
  ];

  const faqs = [
    { q: 'Does a quitclaim deed affect the mortgage?', a: 'A quitclaim deed transfers ownership interest on the title — it does not affect the mortgage. If a mortgage exists on the property, the loan remains in place under the same terms regardless of who is on the deed. The person being added to title by quitclaim deed does not become personally responsible for the mortgage. However, removing someone from title while they remain on the mortgage can complicate a future sale or refinance, and may technically trigger the due-on-sale clause — though lenders rarely call a loan due for a spousal or family transfer.' },
    { q: 'How much does it cost to prepare and record a quitclaim deed in Illinois?', a: 'Attorney fees for preparing a quitclaim deed typically run $250–$600, depending on complexity. Recording fees at the county recorder\'s office are typically $50–$100. Transfer tax may or may not apply depending on the nature of the transfer. Certain family and intra-trust transfers are exempt, but a PTAX-203 form must still be filed.' },
    { q: 'Can I prepare my own quitclaim deed in Illinois?', a: 'Technically, yes — there is no law requiring an attorney to prepare a deed. However, errors in legal descriptions, missing witnesses, or incorrect PTAX-203 forms cause recording rejections and can create title defects that are expensive to fix later. Given that a deed transfer is a significant legal act affecting one of your most valuable assets, attorney preparation is strongly recommended.' },
    { q: 'Does a quitclaim deed affect my property taxes?', a: 'Transferring property by quitclaim deed does not trigger a property tax reassessment in Illinois for transfers to a spouse, trust, or close family member. However, it may affect your eligibility for the homestead exemption — if you are no longer the owner of record on January 1 of the tax year, you may lose the exemption. Transfers to a revocable living trust generally do not affect homestead exemption eligibility if properly documented.' },
    { q: 'What is the difference between a quitclaim deed and a warranty deed in Illinois?', a: 'A quitclaim deed conveys only whatever interest the grantor currently holds, with no promises about the quality of that title. A warranty deed includes a covenant that the grantor has good title and will defend the grantee against anyone who later claims a superior interest. For arm\'s-length sales, buyers should insist on a warranty deed. For family transfers, trust funding, or clearing title defects, a quitclaim deed is typically appropriate.' },
    { q: 'What happens if someone quitclaims a property they do not actually own?', a: 'A quitclaim deed conveys only the interest the grantor has — if the grantor has no interest, the deed conveys nothing. This is why a quitclaim deed from a stranger offers no protection. The grantee\'s only remedy against a grantor who fraudulently misrepresented their ownership would be a fraud claim, not a title warranty claim. This underscores why title insurance matters even for seemingly low-risk transfers.' },
    { q: 'Do I need to notify my lender when adding someone to the deed?', a: 'Most mortgage lenders include a "due-on-sale" clause that technically allows them to accelerate the loan if ownership is transferred without consent. In practice, the Garn-St. Germain Depository Institutions Act of 1982 prohibits lenders from exercising this clause for transfers to a spouse or child or to a living trust in which the borrower is a beneficiary. For other transfers, best practice is to notify your lender — though enforcement is uncommon for family transfers.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What Is a Quitclaim Deed in Illinois and When Should You Use One?',
    description: 'A quitclaim deed transfers whatever interest the grantor holds in Illinois property with no title warranties. Learn when to use one, when to avoid it, and the legal requirements for a valid Illinois quitclaim deed.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-19', dateModified: '2026-05-19',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">What Is a Quitclaim Deed in Illinois and When Should You Use One?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">A quitclaim deed is powerful — and often misused. Understand what it does, when it is the right tool, and the legal requirements for a valid Illinois deed.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 19, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="definition" className="text-2xl font-bold mt-8 mb-4">What Is a Quitclaim Deed?</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">A quitclaim deed transfers to the grantee (recipient) whatever interest the grantor currently holds in a piece of real estate — with no promises or warranties about the quality of that title.</p>
              <p className="mb-0 text-gray-700">In plain English: "I am giving you whatever interest I have in this property. I am not promising that I actually own it, that it is free of liens, or that anyone else won't come along and claim a superior interest." It is the opposite of a warranty deed, which includes those promises.</p>
            </div>
            <p className="mb-6">Because a quitclaim deed makes no warranties, it is best suited for transfers where the parties already know and trust each other — spouses, family members, or transfers into a trust you control. It is not appropriate for sales to strangers at arm's length, where the buyer is entitled to title protection.</p>
            <p className="mb-6">Quitclaim deeds are governed by the Illinois Conveyances Act (765 ILCS 5/) and must meet specific formal requirements to be valid and recordable.</p>

            <h2 id="when-to-use" className="text-2xl font-bold mt-12 mb-4">When to Use a Quitclaim Deed</h2>
            <p className="mb-6">Select a scenario to see whether a quitclaim deed is appropriate:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {useCases.map((uc, i) => (
                  <button key={i} onClick={() => setSelectedUseCase(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedUseCase === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {uc.label}
                  </button>
                ))}
              </div>
              <div className={`rounded-xl p-6 border-2 ${useCases[selectedUseCase].appropriate ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50'}`}>
                <div className="flex items-center gap-3 mb-3">
                  {useCases[selectedUseCase].appropriate
                    ? <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    : <X className="w-6 h-6 text-red-600 flex-shrink-0" />}
                  <h3 className={`font-bold text-lg ${useCases[selectedUseCase].appropriate ? 'text-green-800' : 'text-red-800'}`}>
                    {useCases[selectedUseCase].appropriate ? 'Quitclaim Deed Appropriate' : 'Do NOT Use a Quitclaim Deed Here'}
                  </h3>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{useCases[selectedUseCase].title}</h4>
                <p className="text-gray-700 mb-3">{useCases[selectedUseCase].desc}</p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Transfer Tax Note:</p>
                  <p className="text-sm text-gray-700 mb-0">{useCases[selectedUseCase].taxNote}</p>
                </div>
              </div>
            </div>

            <h2 id="when-not-to-use" className="text-2xl font-bold mt-12 mb-4">When NOT to Use a Quitclaim Deed</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-3">Never use a quitclaim deed for an arm's-length sale to an unrelated buyer paying market value.</p>
              <p className="text-gray-700 mb-0">A buyer paying fair market value has a reasonable expectation of receiving good title with full warranties. A quitclaim deed leaves the buyer completely unprotected against title defects that existed before or during the seller's ownership. Always use a warranty deed for sales between unrelated parties — it protects both buyer and seller by clearly establishing the seller's obligation to defend title.</p>
            </div>
            <p className="mb-6">Other situations where a quitclaim deed is inappropriate or risky:</p>
            <ul className="space-y-2 mb-6">
              {[
                'Estate sales where the personal representative has full authority — use an executor\'s or administrator\'s deed instead',
                'Foreclosure sales — use a sheriff\'s deed',
                'Bank-owned (REO) sales — banks typically use their own limited warranty or special warranty deed forms',
                'Transfers where the grantor is uncertain whether they have clear title and the grantee is not related to them',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700"><AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>

            <h2 id="requirements" className="text-2xl font-bold mt-12 mb-4">Requirements for a Valid Illinois Quitclaim Deed</h2>
            <p className="mb-6">An Illinois quitclaim deed that is missing any of these elements will be rejected by the county recorder or may be legally ineffective:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Requirement</th><th className="border border-gray-300 px-4 py-3 text-left">Details</th></tr></thead>
                <tbody>
                  {requirements.map(({ req, detail }, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{req}</td><td className="border border-gray-300 px-4 py-3 text-sm">{detail}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="recording" className="text-2xl font-bold mt-12 mb-4">Recording and Transfer Tax</h2>
            <p className="mb-6">After execution, the quitclaim deed must be recorded with the county recorder of deeds where the property is located. Recording provides public notice of the transfer and protects the grantee's interest against subsequent purchasers. An unrecorded deed is valid between the parties but may be defeated by a later recorded deed or judgment lien.</p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#2D3E50] mb-2">Recording Requirements</h3>
                <ul className="space-y-2">
                  {['Original executed deed (with notary and witnesses)', 'PTAX-203 Real Estate Transfer Declaration', 'Transfer tax stamps (if tax is owed)', 'Recording fee ($50–$100 in Cook County)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#4a708b] flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-[#2D3E50] mb-2">Common Transfer Tax Exemptions</h3>
                <ul className="space-y-2">
                  {['Transfers between spouses', 'Transfers to grantor\'s revocable trust', 'Transfers pursuant to divorce decree', 'Gifts with no consideration (some exemptions apply)', 'Certain transfers between parent and child'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#4a708b] flex-shrink-0" />{item}</li>
                  ))}
                </ul>
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
              <h3 className="text-2xl font-bold mb-4">Need a Quitclaim Deed Prepared Correctly?</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law prepares and records quitclaim deeds for families, trusts, divorce situations, and title corrections throughout Illinois. One mistake can create a title defect that costs thousands to fix — let us get it right the first time.</p>
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
