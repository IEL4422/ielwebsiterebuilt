'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Home, Users, Shield, FileText } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-hold-title-to-your-home-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeMethod, setActiveMethod] = useState<number>(0);

  const tocItems = [
    { id: 'overview', title: 'The Four Ways to Hold Title in Illinois', level: 2, numeration: '1' },
    { id: 'methods', title: 'Each Method Explained', level: 2, numeration: '2' },
    { id: 'no-tenancy-entirety', title: 'Illinois Does Not Have Tenancy by the Entirety', level: 2, numeration: '3' },
    { id: 'comparison', title: 'Full Comparison: Probate, Taxes, and Creditors', level: 2, numeration: '4' },
    { id: 'which-is-right', title: 'Which Method Is Right for Your Situation?', level: 2, numeration: '5' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '6' },
  ];

  const methods = [
    {
      label: 'Sole Ownership',
      title: 'Sole Ownership',
      description: 'One person owns the property outright. Title is held in that person\'s name alone, with no co-owners.',
      howItWorks: 'When the owner dies, the property passes through their estate — either by will (through probate) or by trust (no probate). Without a trust or Transfer on Death Instrument, a solely-owned property will require probate in Cook County before it can be transferred to heirs.',
      pros: ['Complete control — no co-owner consent needed for sale or mortgage', 'Simple title — no disputes about fractional interests', 'Appropriate for unmarried owners or investors'],
      cons: ['Requires probate at death unless paired with a trust or TODI', 'No automatic transfer to a surviving partner', 'All decisions rest with one owner — no backup'],
      probate: 'Required (unless paired with trust or TODI)',
      creditors: 'Creditors of the owner can reach the property',
      bestFor: 'Unmarried individuals, investors holding rental property, or anyone with a comprehensive estate plan (trust or TODI)',
    },
    {
      label: 'Joint Tenancy',
      title: 'Joint Tenancy with Right of Survivorship',
      description: 'Two or more people hold equal, undivided interests in the property. The defining feature is the "right of survivorship" — when one joint tenant dies, their interest automatically passes to the surviving joint tenant(s) without probate.',
      howItWorks: 'Joint tenancy requires four unities: time (acquired at the same time), title (from the same instrument), interest (equal shares), and possession (right to possess the whole). If any unity is destroyed — for example, if one joint tenant conveys their interest to a third party — the joint tenancy is severed and becomes a tenancy in common.',
      pros: ['Automatic transfer to survivor at death — no probate needed', 'Commonly used by spouses', 'Inexpensive to establish'],
      cons: ['Any joint tenant can sever the joint tenancy unilaterally by conveying their interest', 'All joint tenants must consent to sell or mortgage', 'Does not work well for more than two owners unless you are careful about severance risk', 'Creditors of one joint tenant can force a partition sale'],
      probate: 'No probate at first death — survivor takes automatically',
      creditors: 'Creditors of one joint tenant can attack that tenant\'s interest',
      bestFor: 'Married couples, domestic partners, or any two people who want automatic survivorship without the cost of a trust',
    },
    {
      label: 'Tenancy in Common',
      title: 'Tenancy in Common',
      description: 'Two or more people each hold a fractional, undivided interest in the property. Unlike joint tenancy, there is no right of survivorship — each owner\'s share passes through their estate at death.',
      howItWorks: 'Each tenant in common holds a distinct, transferable interest. One co-owner can sell or mortgage their share without the other\'s consent (though in practice this is difficult). Each owner\'s interest passes through their estate — by will, trust, or intestacy — at their death.',
      pros: ['Flexible fractional interests (can be 50/50, 60/40, 90/10, etc.)', 'Each owner\'s interest can pass to their own heirs', 'Appropriate for co-investors or unmarried partners with different estate plans'],
      cons: ['No automatic survivorship — deceased owner\'s share goes through probate', 'Co-owners can force a partition sale through court action', 'Each owner\'s share is subject to their individual creditors'],
      probate: 'Required for each co-owner\'s share at their death',
      creditors: 'Each owner\'s share is reachable by their individual creditors',
      bestFor: 'Co-investors, unmarried co-owners who want their share to go to their own heirs, siblings inheriting property together',
    },
    {
      label: 'In a Trust',
      title: 'Title Held in a Revocable Living Trust',
      description: 'The property is titled in the name of a trustee who holds it for the benefit of the trust beneficiaries. During the grantor\'s lifetime, the grantor typically serves as their own trustee and beneficiary, with a successor trustee named to take over at incapacity or death.',
      howItWorks: 'The trust document controls what happens to the property at the grantor\'s death — without probate. The successor trustee follows the trust terms to distribute or retain the property. If the grantor becomes incapacitated, the successor trustee can manage the property without court intervention.',
      pros: ['Avoids probate at death', 'Provides incapacity planning', 'Privacy — trust terms are not public record', 'Works across multiple states (avoids ancillary probate)', 'Flexible — can include detailed distribution conditions'],
      cons: ['More expensive to establish than joint tenancy or sole ownership', 'Must be properly "funded" — deed transfer required', 'Ongoing administration (trust agreement governs all transactions)', 'Homestead exemption filing required with county assessor'],
      probate: 'No probate — successor trustee acts per trust terms',
      creditors: 'Revocable trust assets are generally reachable by grantor\'s creditors during life (trust is revocable); protected after death in most circumstances',
      bestFor: 'Homeowners who want full estate planning: probate avoidance, incapacity planning, privacy, and flexibility — especially those with complex estates or out-of-state property',
    },
  ];

  const faqs = [
    { q: 'Does Illinois have tenancy by the entirety for married couples?', a: 'No. Illinois does not recognize tenancy by the entirety — a form of co-ownership available only to married couples in many other states that provides automatic survivorship and protection from one spouse\'s individual creditors. In Illinois, married couples who want survivorship must use joint tenancy with right of survivorship or a trust. Unlike tenancy by the entirety, an Illinois joint tenancy can be severed unilaterally by one spouse conveying their interest, and each spouse\'s interest is reachable by their individual creditors.' },
    { q: 'Can a joint tenancy be severed without the other owner\'s knowledge?', a: 'Yes, and this is one of the most significant risks of joint tenancy in Illinois. Any joint tenant can unilaterally sever the joint tenancy by conveying their interest to a third party (or even to themselves via a "strawman" deed). The other joint tenant has no veto over this. Once severed, the two owners become tenants in common, and the right of survivorship is gone. This is particularly important for unmarried couples — a joint tenant in financial trouble might sever the tenancy before their creditors can reach the property, stripping the other owner of their survivorship right.' },
    { q: 'What happens if tenants in common cannot agree on what to do with a property?', a: 'If co-owners who hold title as tenants in common cannot agree on selling or managing the property, any co-owner can file a partition action in Illinois circuit court. In a partition proceeding, the court can order a physical division of the property (unlikely for a house) or a forced sale, with proceeds divided among the owners according to their fractional interests. Partition can be expensive and contentious — it is an important consideration when choosing tenancy in common for jointly owned property.' },
    { q: 'Can I change from joint tenancy to sole ownership if my co-owner dies?', a: 'If a joint tenant dies, the surviving joint tenant automatically acquires full ownership by operation of law. No new deed is required for the transfer to occur, but you should record an Affidavit of Surviving Joint Tenant with the county recorder along with a certified copy of the death certificate. This cleans up the public record and removes the deceased owner\'s name from the chain of title, which is important for any future sale or financing.' },
    { q: 'If my spouse and I hold title as joint tenants, what happens in a divorce?', a: 'A divorce decree typically addresses how real property is divided. Once the divorce is finalized and one spouse is awarded the property, the other spouse should execute a quitclaim deed conveying their interest to the remaining owner. The divorce itself does not automatically change the title — you still need a deed to transfer ownership. Additionally, the joint tenancy may be severed by filing of the divorce petition, converting the ownership to tenancy in common, though this varies by circumstances.' },
    { q: 'What is the difference between a joint tenancy and adding someone as a "joint tenant on the account" (like a bank account)?', a: 'These are different legal concepts. Real estate joint tenancy is governed by property law and requires specific deed language ("as joint tenants with right of survivorship"). Bank accounts are governed by banking law and joint account ownership is created simply by naming joint owners on the account. The survivorship principles are similar but the legal mechanisms differ. Always be explicit in a deed when creating joint tenancy — use the exact phrase "as joint tenants with right of survivorship and not as tenants in common" to avoid ambiguity.' },
    { q: 'Can a living trust hold property I own as a joint tenant?', a: 'Generally, you cannot transfer your joint tenancy interest to your trust without severing the joint tenancy. If you hold property as joint tenants with your spouse and you transfer your interest to your trust, the joint tenancy is severed — your interest becomes the trust\'s share as a tenant in common, not your spouse\'s surviving interest. For married couples, this is usually addressed by having both spouses transfer to their respective trusts simultaneously with appropriate survivorship language in each trust. An estate planning attorney can structure this correctly.' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'How to Hold Title to Your Home in Illinois: Joint Tenancy, Trust, or Sole Ownership?',
    description: 'Illinois offers four main ways to hold title to real estate: sole ownership, joint tenancy, tenancy in common, and through a trust. Learn the differences, and which method is right for your situation — including why Illinois does not have tenancy by the entirety.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-06-09', dateModified: '2026-06-09',
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
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-semibold">Real Estate &amp; Estate Planning</span>
                <span className="text-white/80 text-sm">&bull;</span>
                <span className="text-white/80 text-sm flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">How to Hold Title to Your Home in Illinois: Joint Tenancy, Trust, or Sole Ownership?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">How you hold title determines what happens to your home at death, who has control during your lifetime, and how creditors can reach your equity. Illinois law offers four main options — here is how to choose.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>June 9, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="overview" className="text-2xl font-bold mt-8 mb-4">The Four Ways to Hold Title in Illinois</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">How you hold title to your home is one of the most consequential — and most overlooked — decisions in real estate and estate planning. The ownership structure appears on your deed and determines what happens to the property at your death, during incapacity, and in the event of financial trouble.</p>
              <p className="mb-0 text-gray-700">Illinois law recognizes four principal ways to hold title to real property: sole ownership, joint tenancy with right of survivorship, tenancy in common, and ownership through a trust. Notably, Illinois does not recognize tenancy by the entirety — a form of ownership for married couples that exists in many other states.</p>
            </div>

            <h2 id="methods" className="text-2xl font-bold mt-12 mb-4">Each Method Explained</h2>
            <p className="mb-6">Select an ownership method to explore its details:</p>
            <div className="my-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {methods.map((m, i) => (
                  <button key={i} onClick={() => setActiveMethod(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeMethod === i ? 'bg-[#2D3E50] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {m.label}
                  </button>
                ))}
              </div>
              <div className="bg-white border-2 border-[#2D3E50] rounded-xl p-6">
                <h3 className="font-bold text-[#2D3E50] text-xl mb-3">{methods[activeMethod].title}</h3>
                <p className="text-gray-700 mb-4">{methods[activeMethod].description}</p>
                <p className="text-gray-700 mb-4 text-sm">{methods[activeMethod].howItWorks}</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-sm text-green-700 mb-2">Advantages:</p>
                    <ul className="space-y-1">{methods[activeMethod].pros.map((p, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{p}</li>)}</ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-red-700 mb-2">Drawbacks:</p>
                    <ul className="space-y-1">{methods[activeMethod].cons.map((c, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{c}</li>)}</ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs font-semibold text-gray-500 uppercase mb-1">Probate at Death</p><p className="text-sm text-gray-700">{methods[activeMethod].probate}</p></div>
                  <div className="bg-gray-50 rounded-lg p-3"><p className="text-xs font-semibold text-gray-500 uppercase mb-1">Best For</p><p className="text-sm text-gray-700">{methods[activeMethod].bestFor}</p></div>
                </div>
              </div>
            </div>

            <h2 id="no-tenancy-entirety" className="text-2xl font-bold mt-12 mb-4">Illinois Does Not Have Tenancy by the Entirety</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">Important for Married Couples</p>
              <p className="text-gray-700 mb-0">Many states — including Indiana, Wisconsin, and Michigan — recognize "tenancy by the entirety," a form of ownership exclusively for married couples that provides both automatic survivorship and protection from one spouse's individual creditors. Illinois does not have this. In Illinois, married couples who want survivorship must use joint tenancy or a trust, neither of which provides the same creditor-protection benefits that tenancy by the entirety offers in other states.</p>
            </div>
            <p className="mb-6">This is an important planning consideration for Illinois homeowners with significant personal debt or professional liability exposure. Unlike some other states, there is no way to shield your home from your own individual creditors simply by holding title with a spouse in Illinois. Other asset protection strategies should be discussed with an attorney if this is a concern.</p>

            <h2 id="comparison" className="text-2xl font-bold mt-12 mb-4">Full Comparison: Probate, Taxes, and Creditors</h2>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-3 py-3 text-left text-sm">Method</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Probate at Death?</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Property Tax Reassessment?</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Creditor Exposure</th><th className="border border-gray-300 px-3 py-3 text-left text-sm">Control During Life</th></tr></thead>
                <tbody>
                  {[
                    ['Sole Ownership', 'Yes (unless + trust/TODI)', 'N/A (sole owner)', 'Full — creditors can reach property', 'Complete'],
                    ['Joint Tenancy', 'No (at first death)', 'Sometimes (at second death if no trust)', 'Each owner\'s share reachable', 'All owners must agree on sale/mortgage'],
                    ['Tenancy in Common', 'Yes — each share separately', 'Possible at each death', 'Each owner\'s share separately reachable', 'Each owner controls their share; partition risk'],
                    ['In a Trust', 'No — successor trustee acts', 'No (revocable trust transfer)', 'Revocable: creditors can reach during life', 'Complete (you are trustee during life)'],
                  ].map(([method, probate, tax, creditor, control], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-3 py-3 text-sm font-semibold">{method}</td><td className="border border-gray-300 px-3 py-3 text-sm">{probate}</td><td className="border border-gray-300 px-3 py-3 text-sm">{tax}</td><td className="border border-gray-300 px-3 py-3 text-sm">{creditor}</td><td className="border border-gray-300 px-3 py-3 text-sm">{control}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="which-is-right" className="text-2xl font-bold mt-12 mb-4">Which Method Is Right for Your Situation?</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                { situation: 'Married couple, simple estate, want automatic survivorship', recommendation: 'Joint tenancy is the simplest and most economical choice. Consider adding a living trust if you have significant assets or want comprehensive incapacity planning.' },
                { situation: 'Single person, wants probate-free transfer at death', recommendation: 'Sole ownership + Transfer on Death Instrument (TODI) is the simplest solution. A revocable living trust provides more comprehensive planning.' },
                { situation: 'Co-buyers (friends, investors, unmarried partners)', recommendation: 'Tenancy in common is standard for co-investors. Consider a co-ownership agreement addressing what happens if one partner wants to sell or dies.' },
                { situation: 'Anyone wanting full estate planning with incapacity protection', recommendation: 'A revocable living trust is the gold standard. Works for married couples, singles, and any complexity level. Best for multi-property or multi-state situations.' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Situation</p>
                  <p className="font-semibold text-gray-800 text-sm mb-3">{item.situation}</p>
                  <p className="text-xs text-gray-500 font-semibold uppercase mb-1">Recommendation</p>
                  <p className="text-sm text-gray-700 mb-0">{item.recommendation}</p>
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
              <h3 className="text-2xl font-bold mb-4">Hold Title the Right Way for Your Goals</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law advises buyers and homeowners on title structure as part of comprehensive estate planning — and handles all deed work to implement the right structure for your situation. Schedule a consultation to review how you currently hold title.</p>
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
