'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp, CircleAlert as AlertCircle, CircleCheck as CheckCircle2, ArrowRight, Shield, X, HelpCircle } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'what-is-title-insurance-in-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<{ [key: number]: boolean | null }>({});

  const tocItems = [
    { id: 'what-is', title: 'What Is Title Insurance?', level: 2, numeration: '1' },
    { id: 'two-types', title: 'Owner\'s vs. Lender\'s Policy', level: 2, numeration: '2' },
    { id: 'what-covered', title: 'What Title Insurance Covers', level: 2, numeration: '3' },
    { id: 'not-covered', title: 'What It Does Not Cover', level: 2, numeration: '4' },
    { id: 'cost', title: 'Cost in Illinois', level: 2, numeration: '5' },
    { id: 'quiz', title: 'Covered or Not Covered? Quiz', level: 2, numeration: '6' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '7' },
  ];

  const coveredItems = [
    { scenario: 'A forged deed in the chain of title gives a stranger a claim to your home', covered: true },
    { scenario: 'An undisclosed heir of a previous owner surfaces and claims ownership', covered: true },
    { scenario: 'A clerical error in a previous deed used the wrong property description', covered: true },
    { scenario: 'An unpaid contractor filed a mechanics lien before the sale that was not caught', covered: true },
    { scenario: 'The neighbor\'s fence encroaches on your property per the survey', covered: true },
    { scenario: 'A judgment lien against the prior owner was not discovered at closing', covered: true },
    { scenario: 'The roof leaks because the inspector missed rotted rafters', covered: false },
    { scenario: 'The city rezones your neighborhood from residential to commercial', covered: false },
    { scenario: 'The previous owner did unpermitted work that the city now requires you to fix', covered: false },
    { scenario: 'You voluntarily granted an easement to your neighbor after purchase', covered: false },
  ];

  const quizItems = [
    { scenario: 'A mortgage that the seller paid off but was never released from the records', covered: true },
    { scenario: 'A basement that floods every spring because of drainage issues', covered: false },
    { scenario: 'An heir of a prior owner claims they were left out of the estate', covered: true },
    { scenario: 'The HOA increases monthly dues after you purchase', covered: false },
    { scenario: 'A survey error placed the boundary line incorrectly in the chain of title', covered: true },
  ];

  const faqs = [
    { q: 'Is owner\'s title insurance required in Illinois?', a: 'No — owner\'s title insurance is optional for buyers in Illinois. Lender\'s title insurance is required by virtually every mortgage lender, but the owner\'s policy (which protects you, not just the bank) is your choice. Despite being optional, owner\'s title insurance is strongly recommended. A one-time premium covering a purchase price of $400,000 typically costs $1,500–$2,500 and provides protection that lasts as long as you own the property.' },
    { q: 'What is the difference between a title search and title insurance?', a: 'A title search is a review of public records to find all recorded interests, liens, and defects in a property\'s chain of title. It identifies known problems. Title insurance protects against problems the title search did not find — including hidden defects like forged deeds, undisclosed heirs, and recording errors that may not appear in the public record. You need both: the title search reveals what is known; the insurance protects against what remains unknown.' },
    { q: 'How long does owner\'s title insurance last?', a: 'An owner\'s title insurance policy protects you for as long as you own the property — and in some cases even after you sell, if a claim later arises from something that occurred during your ownership. The policy does not expire, does not require annual renewal payments, and has no coverage limits that erode over time. The one-time premium paid at closing provides protection for years or decades.' },
    { q: 'If I refinance, do I need new title insurance?', a: 'When you refinance, your new lender will require a new lender\'s title insurance policy for the refinanced loan amount. Your existing owner\'s policy remains in effect — you do not need a new one. The lender\'s policy for the refinance is a separate cost, but is typically less expensive than the original policy because title companies often offer "reissue rates" for properties that had a policy within a recent period.' },
    { q: 'Can I choose my own title company in Illinois?', a: 'Yes. RESPA (the Real Estate Settlement Procedures Act) prohibits sellers, real estate agents, and lenders from requiring you to use a particular title company as a condition of the sale. You have the right to shop for title insurance and choose your title company. In practice, the contract often identifies a specific title company, but both parties can agree to use a different one. Your attorney can recommend title companies they have experience with.' },
    { q: 'What is a title commitment and what does Schedule B mean?', a: 'A title commitment (also called a title binder) is the title company\'s promise to issue a policy after closing, subject to certain conditions. It has two Schedule B sections: Schedule B-I lists requirements that must be satisfied before the policy will issue (such as paying off an existing mortgage or resolving a judgment lien). Schedule B-II lists exceptions that will remain after closing — things the policy will NOT cover, such as easements and recorded covenants. Your attorney reviews the commitment to ensure the Schedule B-II exceptions are acceptable.' },
    { q: 'Does title insurance cover issues with easements or restrictions?', a: 'Title insurance typically covers unknown or undisclosed easements — ones that were not in the public record at the time of your search. However, known easements and restrictions that are listed as exceptions in the title commitment\'s Schedule B-II are excluded from coverage. This is why reviewing Schedule B-II before closing is important — it tells you exactly what the policy will and will not cover regarding easements and restrictions that run with the property.' },
  ];

  const handleQuizAnswer = (index: number, answer: boolean) => {
    setQuizAnswer(prev => ({ ...prev, [index]: answer }));
  };

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What Is Title Insurance in Illinois and Do You Actually Need It?',
    description: 'Title insurance in Illinois comes in two types: owner\'s (optional but recommended) and lender\'s (required). Learn what it covers, what it doesn\'t, and whether you need it for your Illinois real estate purchase.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-05-28', dateModified: '2026-05-28',
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
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">What Is Title Insurance in Illinois and Do You Actually Need It?</h1>
              <p className="text-xl text-white/90 leading-relaxed mt-6">One-time premium, lifetime protection. Here is what Illinois title insurance covers, what it does not, and why skipping the owner&apos;s policy is a risk most buyers should not take.</p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm mt-6">
                <span>By Mary Liberty, Real Estate &amp; Estate Planning Attorney</span><span>&bull;</span><time>May 28, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="what-is" className="text-2xl font-bold mt-8 mb-4">What Is Title Insurance?</h2>
            <div className="bg-blue-50 border-l-4 border-[#4a708b] p-5 my-6 rounded-r-lg">
              <p className="mb-3 font-semibold">Title insurance protects property owners and mortgage lenders against financial losses arising from defects in a property's title — problems with the chain of ownership that existed before the purchase but may not have been discovered.</p>
              <p className="mb-0 text-gray-700">Unlike almost every other type of insurance, which protects against future events, title insurance primarily protects against past events — hidden defects, fraud, errors, and omissions that occurred in the property's history before you purchased it.</p>
            </div>
            <p className="mb-6">Every piece of real estate has a "chain of title" — a documented history of every owner and every transaction affecting the property, recorded in the county recorder's office. A title search reviews this chain to find all recorded liens, mortgages, easements, and judgments. Title insurance covers what the title search might miss — including fraud, forgery, hidden heirs, and clerical errors in historical records.</p>

            <h2 id="two-types" className="text-2xl font-bold mt-12 mb-4">Owner&apos;s vs. Lender&apos;s Policy</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#2D3E50] text-white flex items-center justify-center"><Shield className="w-5 h-5" /></div>
                  <h3 className="font-bold text-[#2D3E50] text-lg">Owner&apos;s Policy</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {['Protects YOU, the buyer', 'Optional — your choice', 'One-time premium at closing', 'Coverage lasts as long as you own the property', 'Covers full purchase price of the home', 'Also protects heirs who inherit from you'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-[#2D3E50]">Typical cost: $1,000–$2,500 (varies by purchase price)</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4a708b] text-white flex items-center justify-center"><Shield className="w-5 h-5" /></div>
                  <h3 className="font-bold text-[#2D3E50] text-lg">Lender&apos;s Policy</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {['Protects your MORTGAGE LENDER', 'Required for financed purchases', 'One-time premium at closing', 'Coverage expires when loan is paid off or refinanced', 'Covers loan amount (not full purchase price)', 'Does not protect you at all'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#4a708b] flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-[#2D3E50]">Typical cost: $500–$1,500 (varies by loan amount)</p>
              </div>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-6 rounded-r-lg">
              <p className="font-semibold text-amber-800 mb-2">The critical distinction:</p>
              <p className="text-gray-700 mb-0">The lender's policy protects the bank — not you. If a title defect emerges, the lender can file a claim and be made whole. You, as the property owner, may lose the property with no compensation unless you have an owner's policy. The lender's required policy does nothing for the buyer.</p>
            </div>

            <h2 id="what-covered" className="text-2xl font-bold mt-12 mb-4">What Title Insurance Covers</h2>
            <p className="mb-6">Title insurance covers "covered risks" — events that occurred in the property's past that may not appear in a standard title search. Standard covered risks include:</p>
            <div className="grid md:grid-cols-2 gap-3 my-6">
              {coveredItems.filter(i => i.covered).map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item.scenario}</span>
                </div>
              ))}
            </div>

            <h2 id="not-covered" className="text-2xl font-bold mt-12 mb-4">What Title Insurance Does Not Cover</h2>
            <p className="mb-6">Title insurance does not cover everything. These are NOT covered under a standard owner's policy:</p>
            <div className="grid md:grid-cols-2 gap-3 my-6">
              {coveredItems.filter(i => !i.covered).map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{item.scenario}</span>
                </div>
              ))}
            </div>
            <p className="mb-6">Physical condition of the property is covered by your home inspection contingency and homeowner's insurance — not title insurance. Government actions (zoning changes, eminent domain, environmental regulations) are also outside the scope of title protection.</p>

            <h2 id="cost" className="text-2xl font-bold mt-12 mb-4">Cost in Illinois</h2>
            <p className="mb-6">Title insurance premiums in Illinois are regulated by the state and are based on the purchase price (for owner's policy) or loan amount (for lender's policy). Typical premiums:</p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead><tr className="bg-[#2D3E50] text-white"><th className="border border-gray-300 px-4 py-3 text-left">Purchase Price</th><th className="border border-gray-300 px-4 py-3 text-left">Owner&apos;s Policy (est.)</th><th className="border border-gray-300 px-4 py-3 text-left">Lender&apos;s Policy (on 80% LTV loan)</th></tr></thead>
                <tbody>
                  {[
                    ['$250,000', '$1,250–$1,750', '$750–$1,000'],
                    ['$400,000', '$1,800–$2,400', '$1,000–$1,400'],
                    ['$600,000', '$2,400–$3,200', '$1,300–$1,800'],
                    ['$1,000,000', '$3,500–$5,000', '$2,000–$3,000'],
                  ].map(([price, owner, lender], i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : ''}><td className="border border-gray-300 px-4 py-3 text-sm font-semibold">{price}</td><td className="border border-gray-300 px-4 py-3 text-sm">{owner}</td><td className="border border-gray-300 px-4 py-3 text-sm">{lender}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="quiz" className="text-2xl font-bold mt-12 mb-4">Covered or Not Covered? Quiz</h2>
            <p className="mb-6">Test your understanding. For each scenario, guess whether a standard owner&apos;s title insurance policy would cover the loss:</p>
            <div className="space-y-4 my-6">
              {quizItems.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-3">{item.scenario}</p>
                  <div className="flex gap-3 mb-3">
                    <button onClick={() => handleQuizAnswer(i, true)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${quizAnswer[i] === true ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      Covered
                    </button>
                    <button onClick={() => handleQuizAnswer(i, false)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${quizAnswer[i] === false ? 'bg-red-400 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                      Not Covered
                    </button>
                  </div>
                  {quizAnswer[i] !== undefined && (
                    <div className={`rounded-lg p-3 ${quizAnswer[i] === item.covered ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <p className={`text-sm font-semibold ${quizAnswer[i] === item.covered ? 'text-green-800' : 'text-red-800'}`}>
                        {quizAnswer[i] === item.covered ? 'Correct!' : 'Not quite.'}{' '}
                        The answer is: <span className="underline">{item.covered ? 'Covered' : 'Not Covered'}</span>
                      </p>
                    </div>
                  )}
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
              <h3 className="text-2xl font-bold mb-4">Questions About Your Title Insurance Coverage?</h3>
              <p className="text-white/90 mb-6">Illinois Estate Law reviews title commitments for buyers and sellers — including Schedule B exceptions — to ensure you understand exactly what your title insurance will and will not cover before you close.</p>
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
