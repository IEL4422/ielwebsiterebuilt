'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  CheckCircle2,
  CircleAlert as AlertCircle,
  FileText,
  Scale,
  Shield,
  DollarSign,
  Users,
  BookOpen,
} from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

const SLUG = 'how-to-handle-deceased-persons-debt-illinois';

export default function Page() {
  const currentPost = getBlogPost(SLUG);
  const { previous, next } = getAdjacentPosts(SLUG);
  const relatedPosts = getRelatedPosts(SLUG, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    { id: 'article-summary', title: 'Article Summary', level: 2, numeration: '1' },
    {
      id: 'do-debts-die',
      title: 'Do Debts Die With the Person?',
      level: 2,
      numeration: '2',
      children: [
        { id: 'debts-that-die', title: 'Debts That Typically Die With the Deceased', level: 3, numeration: '2.1' },
        { id: 'debts-that-survive', title: 'Debts That Survive Death in Illinois', level: 3, numeration: '2.2' },
      ],
    },
    { id: 'probate-creditors', title: 'How Creditors Get Paid Through Illinois Probate', level: 2, numeration: '3' },
    { id: 'priority-order', title: 'Priority Order for Paying Estate Debts in Illinois', level: 2, numeration: '4' },
    { id: 'heirs-responsible', title: 'Are Heirs Personally Responsible for the Deceased\'s Debts?', level: 2, numeration: '5' },
    {
      id: 'common-debts',
      title: 'How to Handle Common Types of Debt',
      level: 2,
      numeration: '6',
      children: [
        { id: 'mortgage-debt', title: 'Mortgage Debt', level: 3, numeration: '6.1' },
        { id: 'credit-card-debt', title: 'Credit Card and Personal Loan Debt', level: 3, numeration: '6.2' },
        { id: 'medical-bills', title: 'Medical Bills and Hospital Debts', level: 3, numeration: '6.3' },
        { id: 'student-loans', title: 'Federal and Private Student Loans', level: 3, numeration: '6.4' },
      ],
    },
    { id: 'executor-duties', title: 'What the Executor Must Do About Creditors', level: 2, numeration: '7' },
    { id: 'faq', title: 'Frequently Asked Questions', level: 2, numeration: '8' },
    { id: 'next-steps', title: 'Next Steps', level: 2, numeration: '9' },
  ];

  const faqs = [
    {
      question: "Can creditors come after me personally for my parent's debts in Illinois?",
      answer:
        "Generally, no. In Illinois, heirs are not personally liable for a deceased parent's debts simply by virtue of being an heir. Creditors can only collect from the probate estate — the assets the deceased owned at death. If the estate runs out of money before all debts are paid, creditors absorb the loss, not the heirs. The main exceptions are: (1) if you co-signed the debt, (2) if you are the surviving spouse and the debt was incurred for family necessities under Illinois's Family Expense Act (750 ILCS 65/15), or (3) if you improperly received estate assets before creditors were paid. Otherwise, a parent's credit card bill is not your bill.",
    },
    {
      question: "What if the estate doesn't have enough money to pay all the debts?",
      answer:
        "When an estate cannot pay all of its debts, it is called an 'insolvent estate.' Illinois law (755 ILCS 5/18-10) sets a strict priority order for which creditors get paid first. Funeral expenses, estate administration costs, and surviving spouse and child allowances come first; unsecured creditors like credit card companies and medical providers come last. Creditors lower in the priority order may receive partial payment or nothing at all — but they cannot pursue the heirs personally for the shortfall. If you are serving as executor of an insolvent estate, work with an Illinois probate attorney before distributing any assets to avoid personal liability for improper payment.",
    },
    {
      question: 'How long does a creditor have to file a claim in an Illinois probate?',
      answer:
        "Under 755 ILCS 5/18-12, creditors in an Illinois probate have six months from the date of the deceased's death — or 3 months from the date of the first publication of the Notice to Creditors, whichever is later — to file a written claim with the probate court. Claims filed after this deadline are barred. This is why publishing the Notice to Creditors promptly after opening the estate is important: it starts the clock and gives the executor a clearer picture of what the estate owes. After the claims period closes and valid claims are paid, the remaining assets can be distributed to heirs.",
    },
    {
      question: 'What happens to a mortgage when the homeowner dies in Illinois?',
      answer:
        "The mortgage does not disappear at death. The debt stays attached to the property. If a surviving co-borrower (like a spouse) is on the loan, they continue making payments as before. If no co-borrower exists, the executor or heir who inherits the property must continue making payments or the lender can eventually foreclose. Federal law (the Garn-St. Germain Act) generally prevents lenders from calling a mortgage due-on-sale solely because of a borrower's death if the property passes to a close family member who intends to live there. Heirs who want to keep the home should contact the lender promptly and consider refinancing the loan into their own name. If the home will be sold, the mortgage is paid off at closing from the sale proceeds.",
    },
    {
      question: 'Can a credit card company garnish the estate or my assets after a death?',
      answer:
        "A credit card company can file a creditor's claim in probate and be paid from estate assets — but it cannot garnish your personal bank account simply because your relative died. If you did not co-sign the account, you have no personal liability. However, if the creditor files a lawsuit and obtains a judgment against the estate, it can seek to collect from estate assets through the court process. This is why executors need to be careful: distributing estate assets to heirs before paying valid creditor claims can expose the executor to personal liability for the improper distribution.",
    },
    {
      question: 'Is there any debt that automatically passes to the surviving spouse in Illinois?',
      answer:
        "Illinois's Family Expense Act (750 ILCS 65/15) makes both spouses jointly responsible for expenses of the family and household — including medical bills for family members. This means a surviving spouse can be personally responsible for medical debts incurred by the deceased spouse for family care, even if the surviving spouse did not sign anything. Routine household debts incurred during the marriage for family needs can also fall under this rule. Unsecured personal debts — like a credit card in one spouse's name only, used for personal expenses — generally do not transfer to the surviving spouse. When in doubt about spousal liability, consult an Illinois estate attorney.",
    },
  ];

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "How to Handle a Deceased Person's Debt in Illinois",
    description:
      "When someone dies in Illinois, their debts don't simply disappear. Learn which must be paid, who is responsible, and how heirs are protected during probate.",
    author: {
      '@type': 'Person',
      name: 'Mary Liberty',
      jobTitle: 'Estate Planning Attorney',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Illinois Estate Law',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.illinoisestatelaw.com/logo.png',
      },
    },
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.illinoisestatelaw.com/blog/how-to-handle-deceased-persons-debt-illinois/',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#33414E] via-[#4A708B] to-[#33414E] py-16 sm:py-20">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">&larr;</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-['Plus_Jakarta_Sans'] font-semibold">
                  Probate &amp; Estate Administration
                </span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">&bull;</span>
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans'] flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                How to Handle a Deceased Person&apos;s Debt in Illinois
              </h1>
              <p className="text-xl text-white/90 font-['Plus_Jakarta_Sans'] leading-relaxed mt-6">
                When a family member dies, their debts don&apos;t disappear. Creditors still have legal rights — but those rights are limited. Illinois law sets strict rules about who pays, in what order, and when heirs are — and are not — personally on the hook.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/80 font-['Plus_Jakarta_Sans'] text-sm mt-6">
                <span>By Mary Liberty, Estate Planning Attorney</span>
                <span>&bull;</span>
                <time>July 29, 2026</time>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            {/* 1. Article Summary */}
            <h2 id="article-summary" className="text-2xl font-bold mt-8 mb-4 font-['Plus_Jakarta_Sans']">
              Article Summary
            </h2>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-6 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-[#4a708b] flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-4 font-semibold text-lg font-['Plus_Jakarta_Sans']">
                    In Illinois, a deceased person&apos;s debts are paid from the probate estate — not by the heirs personally. Creditors have a fixed window to file claims, and debts are paid in a strict statutory priority order before any assets pass to beneficiaries.
                  </p>
                  <p className="mb-4 font-['Plus_Jakarta_Sans']">
                    Most heirs are not personally responsible for a deceased relative&apos;s debts unless they co-signed the debt or are a surviving spouse liable under the Illinois Family Expense Act. If the estate runs out of money before all debts are paid, unpaid creditors absorb the loss — not the family.
                  </p>
                  <p className="mb-0 font-['Plus_Jakarta_Sans']">
                    Executors do have real responsibilities when it comes to creditors, and missteps — like distributing assets too soon — can create personal liability. This guide walks through the complete picture for Illinois families.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick at-a-glance */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-8">
              <h3 className="font-bold text-[#33414E] text-lg mb-4 font-['Plus_Jakarta_Sans']">
                Key Facts at a Glance
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: 'Creditors file claims against the estate, not the heirs', type: 'Heirs Protected', color: 'green' },
                  { label: '6-month window for most creditors to file claims in Illinois', type: 'Creditor Deadline', color: 'blue' },
                  { label: 'Debts paid in statutory priority order before any inheritance', type: 'Priority Rules Apply', color: 'amber' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-4 border text-center ${
                      item.color === 'blue'
                        ? 'bg-blue-50 border-blue-200'
                        : item.color === 'amber'
                        ? 'bg-amber-50 border-amber-200'
                        : 'bg-green-50 border-green-200'
                    }`}
                  >
                    <p
                      className={`text-base font-bold mb-1 font-['Plus_Jakarta_Sans'] ${
                        item.color === 'blue'
                          ? 'text-blue-700'
                          : item.color === 'amber'
                          ? 'text-amber-700'
                          : 'text-green-700'
                      }`}
                    >
                      {item.type}
                    </p>
                    <p className="text-sm text-gray-600 font-['Plus_Jakarta_Sans']">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Do Debts Die With the Person? */}
            <h2 id="do-debts-die" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Do Debts Die With the Person?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most common fears families face after a loved one dies is being stuck with their debts. The short answer is: most debts do not simply disappear at death, but they also do not automatically become the heirs&apos; problem. In Illinois, most debts follow the <em>estate</em>, not the individual heirs.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Understanding which debts survive, which die with the person, and which — if any — can reach the surviving family members is the foundation of debt handling after a death in Illinois.
            </p>

            <h3 id="debts-that-die" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Debts That Typically Die With the Deceased
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Some debts are truly extinguished when the borrower dies — meaning there is nothing for creditors to collect even from the estate:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Federal student loans',
                  detail: 'Federal student loan debt (Direct Loans, Perkins Loans, FFEL Program loans) is discharged upon the death of the borrower. The servicer requires a death certificate, and no estate assets are used to repay federal student loans. Parent PLUS Loans are also discharged if either the student or the borrowing parent dies.',
                },
                {
                  title: 'Sole-borrower unsecured debt with no estate assets',
                  detail: "If the deceased had no estate — no probate assets at all — unsecured creditors like credit card companies have nothing to collect from. They cannot pursue the heirs personally. The debt dies as a practical matter because there is nothing to pay it with.",
                },
                {
                  title: 'Certain personal obligations',
                  detail: 'Some contracts are considered personal in nature and cannot be enforced against an estate. For example, a personal services contract (like a musician\'s performance agreement) typically ends at death. These are fact-specific and depend on the contract\'s terms.',
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 id="debts-that-survive" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Debts That Survive Death in Illinois
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              The majority of common debts survive the borrower&apos;s death and must be addressed through the probate estate:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 my-6">
              {[
                'Credit card balances (sole borrower accounts)',
                'Mortgages and home equity loans or lines of credit',
                'Car loans and other secured vehicle debt',
                'Medical bills, hospital expenses, and nursing home charges',
                'Personal loans and lines of credit',
                'Private student loans (unlike federal loans, these are not automatically discharged)',
                'Business debts where the deceased personally guaranteed the loan',
                'Unpaid income taxes (federal and Illinois state)',
                'Utility and lease obligations that ran through the date of death',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <DollarSign className="w-4 h-4 text-[#4a708b] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              These debts survive because the obligation was made by a legal person — the deceased — who had assets at the time. Those assets (now part of the estate) are the source of repayment. The estate steps into the shoes of the deceased and must resolve these obligations before distributing anything to heirs.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-800 mb-1 font-['Plus_Jakarta_Sans']">Private student loans are different from federal loans</p>
                  <p className="text-amber-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Unlike federal student loans, private student loans do not automatically discharge at death. Whether they are cancelled depends entirely on the lender&apos;s individual policies. Many major private lenders will discharge the loan upon the borrower&apos;s death with proof of death certificate, but some may file a claim against the estate or pursue a co-signer. If your deceased loved one had private student loans, contact the servicer directly and review the original loan agreement carefully.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. How Creditors Get Paid Through Illinois Probate */}
            <h2 id="probate-creditors" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How Creditors Get Paid Through Illinois Probate
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              In Illinois, the formal mechanism for addressing a deceased person&apos;s debts is the <strong>probate process</strong>, governed by the Probate Act of 1975, 755 ILCS 5. Probate is the court-supervised process of winding down an estate — inventorying assets, notifying creditors, paying valid debts, and distributing what remains to heirs.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Here is how the creditor notification and payment process works in Illinois:
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'The executor opens the estate and receives Letters of Office',
                  detail: "The executor named in the will (or an administrator appointed by the court if there is no will) files a petition in the Circuit Court of the county where the deceased lived. For Cook County estates, this is the Probate Division of the Circuit Court of Cook County. The court issues Letters of Office, the legal credential that authorizes the executor to act on behalf of the estate.",
                },
                {
                  title: 'Notice to Creditors is published',
                  detail: "Under 755 ILCS 5/18-3, the executor must publish a Notice to Creditors in a local newspaper for three consecutive weeks. This notice alerts creditors to the estate's opening and starts the clock on the claims period. The executor must also mail notice to all known creditors. Known creditors — those the executor is aware of — generally cannot be cut off by the publication alone; they must receive individual notice.",
                },
                {
                  title: 'Creditors file written claims',
                  detail: "Creditors who wish to be paid must file a written claim with the probate court within the claims period. Under 755 ILCS 5/18-12, the standard deadline is six months from the date of death or three months from first publication of the Notice to Creditors, whichever is later. Creditors who miss this deadline are generally barred from collecting from the estate.",
                },
                {
                  title: 'The executor reviews and pays valid claims',
                  detail: "After the claims period closes, the executor reviews each claim. Claims that are valid are paid in the statutory priority order (see below). The executor may contest a claim that appears incorrect or inflated. Once all valid claims are paid — or the estate assets are exhausted — the executor distributes the remainder to heirs and files a Proof of Closing to officially end the probate case.",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white">
                  <div className="flex items-start gap-4">
                    <span className="bg-[#33414E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 font-['Plus_Jakarta_Sans']">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-[#547298] p-5 my-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#4a708b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#33414E] mb-1 font-['Plus_Jakarta_Sans']">Assets That Pass Outside Probate Are Not Available to Creditors</p>
                  <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                    Not all assets are subject to creditor claims through probate. Assets that pass outside the probate estate — such as life insurance proceeds paid to a named beneficiary, retirement accounts with a designated beneficiary, assets in a properly funded revocable living trust, and jointly held property passing by right of survivorship — generally are not accessible to the deceased&apos;s unsecured creditors. This is one reason why estate planning tools like revocable trusts and beneficiary designations are so valuable: they can protect assets from the delays and costs of probate, including creditor exposure.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Priority Order */}
            <h2 id="priority-order" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Priority Order for Paying Estate Debts in Illinois
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Illinois law (755 ILCS 5/18-10) establishes a specific order of priority for paying claims against an estate. When the estate has enough assets to cover everything, priority order is academic. But when the estate is insolvent — meaning it cannot pay all of its debts — creditors are paid in the following order, and those lower in the list may receive nothing:
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="bg-[#33414E] px-6 py-4">
                <h3 className="text-white font-bold text-lg font-['Plus_Jakarta_Sans']">
                  Illinois Statutory Priority Order for Estate Debts (755 ILCS 5/18-10)
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  {
                    priority: '1st',
                    category: 'Surviving Spouse and Child Allowance',
                    detail: "The surviving spouse is entitled to a minimum allowance of $20,000 from the estate, plus an additional $10,000 per minor child, under 755 ILCS 5/15-1. This comes before any creditors are paid.",
                  },
                  {
                    priority: '2nd',
                    category: 'Funeral and Burial Expenses',
                    detail: 'Reasonable funeral and burial costs are second in line — a recognition that these are immediate, necessary obligations.',
                  },
                  {
                    priority: '3rd',
                    category: 'Costs of Estate Administration',
                    detail: "Executor fees, attorney fees, court costs, and other costs of administering the estate come third. This ensures the people managing the estate get paid before general creditors.",
                  },
                  {
                    priority: '4th',
                    category: 'Debts and Taxes With Preference Under Federal Law',
                    detail: 'Federal tax obligations and debts entitled to preference under federal statutes (such as certain SBA loan guarantees or Medicare overpayments) come next.',
                  },
                  {
                    priority: '5th',
                    category: 'Illinois State Taxes',
                    detail: 'State income taxes, estate taxes, and other Illinois tax obligations come fifth.',
                  },
                  {
                    priority: '6th',
                    category: 'Debts Due to the State of Illinois or Any County or Municipality',
                    detail: 'Fines, fees, or other debts owed to government entities in Illinois come sixth.',
                  },
                  {
                    priority: '7th',
                    category: 'All Other Claims',
                    detail: "General unsecured creditors — credit card companies, medical providers, personal loan lenders, and most other creditors — are last in line. In an insolvent estate, they may receive pennies on the dollar or nothing at all.",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <span className={`flex-shrink-0 w-12 h-8 rounded-full flex items-center justify-center font-bold text-xs font-['Plus_Jakarta_Sans'] ${
                      i === 0 ? 'bg-[#33414E] text-white' :
                      i === 1 ? 'bg-[#4A708B] text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {item.priority}
                    </span>
                    <div>
                      <p className="font-bold text-[#33414E] text-sm mb-1 font-['Plus_Jakarta_Sans']">{item.category}</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This priority order means that if you are a general unsecured creditor — say, a credit card company — and the estate runs out of money before reaching the 7th priority category, you receive nothing. The executor must follow this order precisely; paying lower-priority creditors before higher-priority ones can expose the executor to personal liability.
            </p>

            {/* 5. Are Heirs Personally Responsible? */}
            <h2 id="heirs-responsible" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Are Heirs Personally Responsible for the Deceased&apos;s Debts?
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              This is the question most families dread. The general rule in Illinois is clear: <strong>heirs are not personally liable for a deceased person&apos;s debts</strong> simply because they are heirs. A child does not inherit their parent&apos;s credit card bill. A sibling does not become responsible for their sibling&apos;s medical debt. The estate is responsible — not the individuals who inherit from it.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              However, there are important exceptions:
            </p>

            <div className="space-y-4 my-8">
              {[
                {
                  title: 'You co-signed the debt',
                  color: 'red',
                  body: "If you are a co-borrower or guarantor on a debt — a joint credit card, a co-signed auto loan, or a personal loan where you signed as a co-signer — you are already personally liable for that debt. The creditor does not need to go through probate to collect from you; it can pursue you directly because your obligation is independent of the deceased's estate.",
                },
                {
                  title: 'Illinois Family Expense Act liability (surviving spouses)',
                  color: 'amber',
                  body: "The Illinois Family Expense Act (750 ILCS 65/15) makes both spouses jointly responsible for expenses of the family and household, including medical care for family members. A surviving spouse can be personally responsible for medical bills incurred by the deceased spouse for family care — even if the surviving spouse never signed anything. This is one of the more surprising areas of Illinois debt law and warrants careful attention.",
                },
                {
                  title: 'You received estate assets before creditors were paid',
                  color: 'amber',
                  body: "If an executor distributes assets to heirs before properly paying valid creditor claims — either by mistake or on purpose — those heirs may be required to return the assets to satisfy creditor claims. An heir who receives $50,000 from an estate that later turns out to owe $60,000 in unpaid valid debts may face a clawback. This is why executors must be careful to follow the proper probate process before distributing anything.",
                },
                {
                  title: 'You manage estate funds negligently as executor',
                  color: 'red',
                  body: "An executor who pays lower-priority debts before higher-priority ones, or who distributes assets to heirs while ignoring known creditor claims, can be held personally liable to the shortchanged creditors. Executors must handle estate funds as a fiduciary — with care, loyalty, and strict adherence to Illinois law.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl border p-6 ${
                    item.color === 'red'
                      ? 'bg-red-50 border-red-200'
                      : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <h3 className={`font-bold text-base mb-2 font-['Plus_Jakarta_Sans'] ${
                    item.color === 'red' ? 'text-red-800' : 'text-amber-800'
                  }`}>{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Beyond these exceptions, a creditor who calls or writes to a surviving family member demanding payment on the deceased&apos;s sole debt is acting improperly. The Fair Debt Collection Practices Act (FDCPA) prohibits debt collectors from deceiving family members into thinking they are personally responsible when they are not. If you receive collection calls after a loved one&apos;s death, you are not required to pay the debt out of your own pocket — and you should not be pressured into doing so.
            </p>

            {/* Mid-article CTA */}
            <div className="bg-[#33414E] rounded-xl p-8 my-10 text-white">
              <h3 className="text-xl font-bold mb-3 font-['Plus_Jakarta_Sans']">
                Serving as Executor and Unsure How to Handle Creditors?
              </h3>
              <p className="text-white/80 mb-5 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed">
                Illinois Estate Law guides executors through every step of the probate process — including creditor notification, claim review, and proper asset distribution. Flat-fee probate representation so you always know what you&apos;ll pay.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#33414E] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/chicago-probate-lawyer/"
                  className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm font-['Plus_Jakarta_Sans']"
                >
                  Illinois Probate Services
                </Link>
              </div>
            </div>

            {/* 6. Common Types of Debt */}
            <h2 id="common-debts" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              How to Handle Common Types of Debt
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Different types of debt carry different rules, risks, and options. Here is a practical guide to the most common categories families face after a death in Illinois.
            </p>

            <h3 id="mortgage-debt" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Mortgage Debt
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              A mortgage is a secured debt — the lender has a lien on the property as collateral. When the homeowner dies, the mortgage does not disappear. The lien stays attached to the property.
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-6">
              <h4 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans'] text-sm">What Happens to the Mortgage Depends on the Outcome:</h4>
              <div className="space-y-3">
                {[
                  { scenario: 'Co-borrower inherits the home', detail: "If a surviving spouse or co-borrower is on the loan, they continue making payments as before. The mortgage stays in place. Federal law generally prevents the lender from calling the loan due solely because of the death." },
                  { scenario: 'Heir inherits and wants to keep the home', detail: "The heir must continue making mortgage payments or face eventual foreclosure. Federal law (the Garn-St. Germain Act) generally prohibits lenders from accelerating a mortgage solely because the property transferred to a close family member (spouse, child, sibling) who intends to occupy it as a primary residence. The heir should contact the lender promptly and consider refinancing." },
                  { scenario: 'Estate sells the home', detail: "If the estate sells the home through probate, the mortgage is paid off at closing from the sale proceeds. Any equity remaining after paying the mortgage and closing costs goes to the estate and is distributed according to the will." },
                  { scenario: 'Home is underwater (debt exceeds value)', detail: "If the mortgage balance exceeds the home's value, the estate may choose to let the lender foreclose rather than sell at a loss. Heirs are not personally responsible for the resulting deficiency unless they co-signed the loan." },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-[#4A708B] pl-4 py-2">
                    <p className="font-semibold text-[#33414E] text-sm font-['Plus_Jakarta_Sans']">{item.scenario}</p>
                    <p className="text-gray-600 text-sm font-['Plus_Jakarta_Sans'] mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <h3 id="credit-card-debt" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Credit Card and Personal Loan Debt
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Credit card debt is unsecured — there is no collateral — which makes it last in the priority order when estate assets are limited. Here is what Illinois families should know:
            </p>

            <div className="space-y-3 my-6">
              {[
                { icon: CheckCircle2, color: 'text-green-600', text: "Heirs are not personally responsible for a deceased person's sole credit card balances — even if they were authorized users on the account." },
                { icon: AlertCircle, color: 'text-amber-600', text: "Joint account holders are personally liable — if your name is on the account as a joint cardholder, not just an authorized user, you owe the debt." },
                { icon: AlertCircle, color: 'text-amber-600', text: "The estate must notify known credit card issuers of the death. The executor can close the accounts and file a creditor's claim response when the issuer files against the estate." },
                { icon: CheckCircle2, color: 'text-green-600', text: "Credit card companies often settle estate debts for less than the full balance, especially in smaller insolvent estates. Executors can sometimes negotiate a reduced payoff." },
                { icon: AlertCircle, color: 'text-amber-600', text: "Do not make payments on a deceased person's credit card from your own funds — it will not protect the estate and wastes your money." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                  {item.text}
                </div>
              ))}
            </div>

            <h3 id="medical-bills" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Medical Bills and Hospital Debts
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Medical bills — including hospital stays, nursing home care, and physician charges — are among the most common debts in an estate. They are generally unsecured and come last in the Illinois priority order. However, there are important nuances:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                {
                  title: 'Medicaid Estate Recovery',
                  body: "If the deceased received Medicaid benefits (called IDHS in Illinois), the state has the right to seek reimbursement from the probate estate for the cost of care provided. The Illinois Department of Healthcare and Family Services (HFS) files its own claim in probate — and Medicaid estate recovery has specific priority rights. Planning strategies exist to reduce this exposure — see our guide on protecting your home from Medicaid estate recovery.",
                  link: '/blog/protecting-home-from-medicaid-estate-recovery-illinois/',
                  linkLabel: 'Medicaid estate recovery guide',
                  color: 'amber',
                },
                {
                  title: 'Spousal Liability for Medical Bills',
                  body: "Under the Illinois Family Expense Act (750 ILCS 65/15), a surviving spouse can be personally responsible for the deceased spouse's medical bills if those bills arose from family care needs. This is a meaningful exception to the general rule that heirs are not personally liable. Surviving spouses should not assume they are automatically off the hook for large medical debts.",
                  color: 'amber',
                },
              ].map((item, i) => (
                <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h4 className="font-bold text-amber-800 mb-2 font-['Plus_Jakarta_Sans'] text-sm">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-2">{item.body}</p>
                  {item.link && (
                    <Link href={item.link} className="inline-flex items-center gap-1 text-amber-700 hover:underline text-xs font-semibold font-['Plus_Jakarta_Sans']">
                      {item.linkLabel} <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <h3 id="student-loans" className="text-xl font-bold mt-8 mb-3 font-['Plus_Jakarta_Sans']">
              Federal and Private Student Loans
            </h3>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Student loan handling at death depends entirely on whether the loan is federal or private:
            </p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-['Plus_Jakarta_Sans']">
                  <thead>
                    <tr className="border-b border-gray-200 bg-[#33414E]">
                      <th className="text-left py-3 px-6 font-bold text-white">Factor</th>
                      <th className="text-left py-3 px-4 font-bold text-white">Federal Student Loans</th>
                      <th className="text-left py-3 px-4 font-bold text-white">Private Student Loans</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Discharged at borrower death?', 'Yes — automatically discharged', 'Depends on lender policy'],
                      ['What documentation is needed?', 'Death certificate to servicer', 'Varies by lender; request from servicer'],
                      ['Can estate be required to repay?', 'No', 'Possibly — check loan agreement'],
                      ['What about Parent PLUS Loans?', 'Discharged if student or parent borrower dies', 'Depends on lender'],
                      ['Is co-signer released?', 'Yes — not applicable for federal', 'Often not — co-signer may still owe'],
                    ].map(([factor, federal, priv], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 font-medium text-gray-700">{factor}</td>
                        <td className="py-3 px-4 text-green-700 font-medium">{federal}</td>
                        <td className="py-3 px-4 text-amber-700">{priv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7. What the Executor Must Do */}
            <h2 id="executor-duties" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              What the Executor Must Do About Creditors
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you have been named executor of an Illinois estate, you have specific legal duties related to creditors. Missteps here can lead to personal liability — even if you acted in good faith. Here is what you need to do:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#33414E] text-white rounded-xl p-6">
                <FileText className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans']">Do These Things</h3>
                <ul className="space-y-2 text-sm text-white/85 font-['Plus_Jakarta_Sans']">
                  {[
                    'Open the probate estate promptly by petitioning the Circuit Court',
                    'Publish Notice to Creditors in a newspaper for 3 consecutive weeks',
                    'Send written notice to all known creditors individually',
                    'Collect and inventory all estate assets',
                    'Keep estate funds separate from your personal accounts',
                    'Review all creditor claims carefully — dispute any that appear incorrect',
                    'Pay valid claims in the statutory priority order (755 ILCS 5/18-10)',
                    'File the final estate tax return and income tax return if required',
                    'Wait until the claims period closes before distributing to heirs',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <AlertCircle className="w-8 h-8 mb-3 text-red-500" />
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans'] text-red-800">Avoid These Mistakes</h3>
                <ul className="space-y-2 text-sm text-gray-700 font-['Plus_Jakarta_Sans']">
                  {[
                    'Distributing assets to heirs before the creditor claims period closes',
                    'Paying known creditors out of pocket on behalf of the estate without reimbursement process',
                    'Ignoring creditor claims or failing to respond',
                    'Mixing estate funds with your personal bank account',
                    'Selling estate assets for less than fair market value',
                    'Paying lower-priority creditors before higher-priority ones',
                    'Assuming all creditor claims are valid — review every claim carefully',
                    'Failing to consult an attorney for complex or contentious estates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              One of the most important protective steps for an executor is to work with an experienced{' '}
              <Link href="/chicago-probate-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Illinois probate attorney
              </Link>{' '}
              from the start. An attorney can help you navigate the creditor process, spot improper claims, and ensure that you fulfill your fiduciary duties without exposing yourself to personal liability. Illinois Estate Law handles probate matters on a flat-fee basis — you know the cost upfront.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If the estate is modest — under $100,000 in total value, with no real estate and no disputes — Illinois offers a{' '}
              <Link href="/blog/how-to-complete-a-small-estate-affidavit-in-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                Small Estate Affidavit process
              </Link>{' '}
              that can transfer certain assets without formal probate. Creditors can still file claims even in the small estate process, so debt handling cannot be ignored entirely.
            </p>

            {/* 8. FAQ */}
            <h2 id="faq" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 my-8">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-gray-900 font-['Plus_Jakarta_Sans']">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#4a708b] flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed font-['Plus_Jakarta_Sans']">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 9. Next Steps */}
            <h2 id="next-steps" className="text-2xl font-bold mt-12 mb-4 font-['Plus_Jakarta_Sans']">
              Next Steps
            </h2>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Handling a deceased person&apos;s debts in Illinois is manageable when you understand the rules. Creditors have rights — but so do heirs, and Illinois law draws a clear line between the estate&apos;s obligations and the personal obligations of surviving family members.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              If you are an executor dealing with creditor claims, prioritize opening the estate properly and consulting an attorney before distributing a single dollar. If you are a surviving family member fielding calls from collectors, know that you are almost certainly not personally responsible — and you have rights under federal law against deceptive collection tactics.
            </p>

            <p className="mb-6 font-['Plus_Jakarta_Sans']">
              Looking ahead, the best time to reduce the burden your estate&apos;s debts will place on your family is now. A well-structured estate plan — with properly funded revocable trusts, updated beneficiary designations, and a clear inventory of your assets and debts — can streamline the process dramatically. Our guides on{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                revocable living trusts
              </Link>{' '}
              and{' '}
              <Link href="/blog/beneficiary-designations-override-your-will-illinois/" className="text-[#4a708b] hover:underline font-medium font-['Plus_Jakarta_Sans']">
                beneficiary designations
              </Link>{' '}
              explain how these tools protect both your assets and your family.
            </p>

            <div className="bg-[#33414E] rounded-xl p-8 my-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Plus_Jakarta_Sans']">
                Speak With an Illinois Probate Attorney
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Whether you are an executor navigating creditor claims or a family member wondering what your loved one&apos;s debts mean for you, Illinois Estate Law can help. We handle probate matters on a flat-fee basis — no hourly billing surprises — with a free initial consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center gap-2 bg-white text-[#4A708B] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg font-['Plus_Jakarta_Sans']"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/chicago-probate-lawyer/"
                  className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border-2 border-white/30 font-['Plus_Jakarta_Sans']"
                >
                  Illinois Probate Services
                </Link>
              </div>
              <p className="text-white/70 text-sm mt-4 font-['Plus_Jakarta_Sans']">
                Call{' '}
                <a href="tel:3123730731" className="text-white underline">
                  (312) 373-0731
                </a>{' '}
                to speak directly with our team.
              </p>
            </div>

            {/* Related articles */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <h3 className="font-bold text-[#33414E] mb-3 font-['Plus_Jakarta_Sans']">
                Related Illinois Probate &amp; Estate Planning Guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/blog/how-long-does-probate-take-in-illinois/',
                    label: 'How Long Does Probate Take in Illinois?',
                  },
                  {
                    href: '/blog/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/',
                    label: "So You've Been Named Executor: A Comprehensive Guide",
                  },
                  {
                    href: '/blog/protecting-home-from-medicaid-estate-recovery-illinois/',
                    label: 'Protecting Your Home from Medicaid Estate Recovery in Illinois',
                  },
                  {
                    href: '/blog/illinois-inheritance-laws-dying-without-a-will/',
                    label: 'Illinois Inheritance Laws: Dying Without a Will',
                  },
                  {
                    href: '/blog/how-to-complete-a-small-estate-affidavit-in-illinois/',
                    label: 'How to Complete a Small Estate Affidavit in Illinois',
                  },
                  {
                    href: '/blog/beneficiary-designations-override-your-will-illinois/',
                    label: 'Beneficiary Designations Override Your Will in Illinois',
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-[#4a708b] hover:text-[#33414E] text-sm font-medium hover:underline transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    <ArrowRight className="w-4 h-4 shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <img
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty - Chicago Estate Planning Attorney"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#2d3e50] font-['Plus_Jakarta_Sans']">
                    Mary Liberty — Chicago Estate Planning Attorney
                  </h3>
                  <p className="mb-4 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making legal planning accessible, affordable, and stress-free. Through her modern virtual law practice, she helps families and individuals across Illinois create clear, effective plans that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700 font-['Plus_Jakarta_Sans']">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 rounded-lg p-5 border border-gray-200 my-8">
              <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans'] leading-relaxed">
                <strong>Disclaimer:</strong> This article is for informational purposes only and does not constitute legal advice. No attorney-client relationship is created by reading this content. Illinois probate and creditor law is complex and fact-specific — the handling of a deceased person&apos;s debts varies significantly based on the estate&apos;s composition, the types of debts involved, and the specific facts of each case. Consult a licensed Illinois attorney for guidance tailored to your situation.
              </p>
            </div>

            {/* Final CTA banner */}
            <div className="bg-[#33414E] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
                Questions About a Deceased Person&apos;s Debts in Illinois?
              </p>
              <p className="text-white/90 mb-5 font-['Plus_Jakarta_Sans']">
                Book a free consultation with Illinois Estate Law and get clear answers about what the estate owes, what you are — and are not — responsible for, and how to move forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-white text-[#2d3e50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-['Plus_Jakarta_Sans']"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-center font-['Plus_Jakarta_Sans']"
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>

            {/* Share buttons */}
            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3 font-['Plus_Jakarta_Sans']">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-handle-deceased-persons-debt-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-handle-deceased-persons-debt-illinois/')}&text=${encodeURIComponent("How to Handle a Deceased Person's Debt in Illinois — what the estate owes, what heirs owe, and the executor's duties")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/how-to-handle-deceased-persons-debt-illinois/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map((post) => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>

          <div className="border-t border-gray-300 pt-8 mb-8 mt-8">
            <BlogContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
