'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export default function JointBankAccountPage() {
  const currentSlug = 'what-happens-to-a-joint-bank-account-when-one-owner-dies';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const scenarios = [
    {
      id: 'married-couple',
      label: 'Married couple — joint checking account',
      answer: 'The surviving spouse becomes the sole owner immediately upon death. The bank just needs a certified death certificate. No probate required.',
    },
    {
      id: 'parent-child',
      label: 'Parent and adult child — joint savings account',
      answer: 'The child becomes sole owner immediately. However, if the child was added only for convenience (not as a true co-owner), Illinois courts may scrutinize whether the parent intended a gift — which can create disputes.',
    },
    {
      id: 'business-partners',
      label: 'Business partners — joint business account',
      answer: "The surviving partner becomes sole owner of the account. However, the deceased partner's estate may have a claim on those funds based on your partnership agreement. Consult an attorney before withdrawing.",
    },
    {
      id: 'unmarried-couple',
      label: 'Unmarried couple — joint account',
      answer: "The survivor becomes sole owner. Illinois has no common-law marriage, so survivorship rights depend entirely on the account's title — not the length of the relationship.",
    },
  ];

  const tocItems = [
    {
      id: 'how-joint-bank-accounts-work',
      title: 'How Joint Bank Accounts Work',
      level: 2,
      numeration: '1',
      children: [
        {
          id: 'right-of-survivorship-explained',
          title: 'Right of Survivorship Explained',
          level: 3,
          numeration: '1.1',
        },
        {
          id: 'types-of-joint-ownership',
          title: 'Types of Joint Account Ownership',
          level: 3,
          numeration: '1.2',
        },
      ],
    },
    {
      id: 'what-happens-immediately-after-death',
      title: 'What Happens Immediately After One Owner Dies',
      level: 2,
      numeration: '2',
      children: [
        {
          id: 'steps-to-claim-the-account',
          title: 'Steps to Claim the Account as Sole Owner',
          level: 3,
          numeration: '2.1',
        },
        {
          id: 'can-the-bank-freeze-the-account',
          title: 'Can the Bank Freeze the Account?',
          level: 3,
          numeration: '2.2',
        },
      ],
    },
    {
      id: 'does-a-joint-account-go-through-probate',
      title: 'Does a Joint Account Go Through Probate in Illinois?',
      level: 2,
      numeration: '3',
      children: [
        {
          id: 'exceptions-when-probate-may-still-apply',
          title: 'Exceptions: When Probate May Still Apply',
          level: 3,
          numeration: '3.1',
        },
      ],
    },
    {
      id: 'tax-implications',
      title: 'Tax Implications for the Surviving Owner',
      level: 2,
      numeration: '4',
      children: [
        {
          id: 'federal-estate-tax',
          title: 'Federal Estate Tax Considerations',
          level: 3,
          numeration: '4.1',
        },
        {
          id: 'illinois-estate-tax',
          title: 'Illinois Estate Tax Considerations',
          level: 3,
          numeration: '4.2',
        },
        {
          id: 'income-tax-and-basis',
          title: 'Income Tax and Stepped-Up Basis',
          level: 3,
          numeration: '4.3',
        },
      ],
    },
    {
      id: 'risks-and-pitfalls',
      title: 'Hidden Risks and Common Pitfalls',
      level: 2,
      numeration: '5',
      children: [
        {
          id: 'convenience-accounts',
          title: 'Convenience Accounts vs. True Joint Ownership',
          level: 3,
          numeration: '5.1',
        },
        {
          id: 'creditor-claims',
          title: 'Creditor Claims Against Joint Accounts',
          level: 3,
          numeration: '5.2',
        },
        {
          id: 'unintended-disinheritance',
          title: 'Unintended Disinheritance of Other Heirs',
          level: 3,
          numeration: '5.3',
        },
      ],
    },
    {
      id: 'alternatives-to-joint-accounts',
      title: 'Smarter Alternatives to Joint Accounts',
      level: 2,
      numeration: '6',
      children: [
        {
          id: 'payable-on-death-accounts',
          title: 'Payable-on-Death (POD) Accounts',
          level: 3,
          numeration: '6.1',
        },
        {
          id: 'revocable-living-trust',
          title: 'Revocable Living Trust',
          level: 3,
          numeration: '6.2',
        },
      ],
    },
    {
      id: 'next-steps',
      title: 'Next Steps: Protecting Your Estate',
      level: 2,
      numeration: '7',
    },
  ];

  const linkClass = 'text-[#4a708b] hover:underline';


  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'What Happens to a Joint Bank Account When One Owner Dies?',
    description: 'Learn what happens to joint bank accounts after one owner dies in Illinois, including survivorship rights, probate implications, and estate planning considerations.',
    author: { '@type': 'Person', name: 'Mary Liberty' },
    publisher: { '@type': 'Organization', name: 'Illinois Estate Law' },
    datePublished: '2026-03-20', dateModified: '2026-03-20',
    url: 'https://www.illinoisestatelaw.com/blog/what-happens-to-a-joint-bank-account-when-one-owner-dies/',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">←</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="mb-4 flex items-center gap-3">
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Mar 20, 2026</time>
                <span className="text-white/50 text-sm">|</span>
                <span className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Estate Planning</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans'] leading-tight">
                What Happens to a Joint Bank Account When One Owner Dies?
              </h1>
              <p className="mt-4 text-white/80 text-lg font-['Plus_Jakarta_Sans'] max-w-3xl">
                Everything Illinois residents need to know about survivorship rights, probate avoidance, tax consequences, and the hidden risks of joint ownership.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <BlogSummary summary={currentPost?.summary || 'Comprehensive guide explaining what happens to joint bank accounts in Illinois after one owner dies. Covers right of survivorship, account types, probate avoidance, tax implications, potential pitfalls, and estate planning alternatives.'} />
            <TableOfContents items={tocItems} />

            <p className="mb-6">
              If you share a bank account with a spouse, parent, or business partner, you may be wondering: what happens to that account if one of us dies? The answer in most cases is reassuringly simple — the surviving owner takes over immediately, without probate. But "most cases" is not "all cases," and the exceptions can be costly.
            </p>

            <p className="mb-6">
              In Illinois, joint bank accounts are one of the most commonly used estate planning tools — often without the account holders realizing they are doing any planning at all. Understanding exactly how these accounts work, what your rights are as a survivor, and where the pitfalls hide is essential knowledge for anyone who shares a financial account or is in the process of creating an estate plan.
            </p>

            <p className="mb-6">
              This guide explains the mechanics of joint account ownership under Illinois law, walks through the probate and tax implications, and explores smarter alternatives that give you more control without the hidden risks.
            </p>

            <h2 id="how-joint-bank-accounts-work" className="text-2xl font-bold mt-10 mb-4">
              1. How Joint Bank Accounts Work
            </h2>

            <p className="mb-6">
              A joint bank account is a deposit account owned by two or more people, each of whom typically has equal rights to deposit funds, make withdrawals, and manage the account during their lifetimes. When you open a joint account at an Illinois bank or credit union, the institution creates a contractual relationship with all named account holders simultaneously — not just one primary owner.
            </p>

            <p className="mb-6">
              This is distinct from naming someone as an "authorized signer" or "power of attorney" on your account. An authorized signer can transact on your behalf, but they do not own the funds. A joint account owner, by contrast, is a co-owner with equal legal rights to the money, regardless of who deposited it.
            </p>

            <h3 id="right-of-survivorship-explained" className="text-xl font-bold mt-6 mb-3">
              Right of Survivorship Explained
            </h3>

            <p className="mb-6">
              Most joint bank accounts in Illinois are held with "right of survivorship," meaning that when one owner dies, full ownership of the account passes automatically and instantly to the surviving owner or owners. This transfer happens by operation of law — no court order, no probate, no executor involvement required.
            </p>

            <p className="mb-6">
              The legal mechanism is simple: the deceased owner's interest in the account extinguishes at death, and the surviving owner's interest expands to encompass the entire account. The money never becomes part of the deceased person's estate. It does not pass under the Will (or the intestacy laws if there is no Will). It belongs entirely to the survivor from the moment of death.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#4a708b] rounded-r-lg p-6 my-8">
              <p className="font-bold text-[#2d3e50] mb-2">Key Takeaway</p>
              <p className="text-[#2d3e50] mb-0">
                The right of survivorship in a joint account operates like a built-in beneficiary designation. It overrides your Will. Even if your Will says "divide my estate equally among my three children," your joint account goes entirely to the surviving joint owner — not your children.
              </p>
            </div>

            <h3 id="types-of-joint-ownership" className="text-xl font-bold mt-6 mb-3">
              Types of Joint Account Ownership
            </h3>

            <p className="mb-6">
              Not every shared account comes with survivorship rights. The specific structure depends on how the account was titled and what the bank's account agreement provides:
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#2d3e50] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Account Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Survivorship?</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">What Happens at Death</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Joint Tenancy with Right of Survivorship (JTWROS)</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Passes instantly to surviving owner(s); no probate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Tenancy in Common</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">No</td>
                    <td className="border border-gray-300 px-4 py-3">Deceased's share passes through their estate (probate possible)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Payable-on-Death (POD) Account</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes (similar)</td>
                    <td className="border border-gray-300 px-4 py-3">Beneficiary receives funds; owner retains full control during life</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Authorized Signer / POA</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">No</td>
                    <td className="border border-gray-300 px-4 py-3">Signer's authority ends at death; account passes through estate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-6">
              The vast majority of joint bank accounts opened at Illinois banks default to joint tenancy with right of survivorship. However, if you are uncertain about how your account is titled, call your bank and ask them to confirm the account structure in writing.
            </p>

            <h2 id="what-happens-immediately-after-death" className="text-2xl font-bold mt-10 mb-4">
              2. What Happens Immediately After One Owner Dies
            </h2>

            <p className="mb-6">
              When one joint account owner dies, the surviving owner does not need to wait for probate, an estate to be opened, or a court order. The account is already theirs under the law. However, the bank does need to be notified and the deceased owner's name needs to be removed from the account.
            </p>

            <h3 id="steps-to-claim-the-account" className="text-xl font-bold mt-6 mb-3">
              Steps to Claim the Account as Sole Owner
            </h3>

            <p className="mb-6">
              The process of transitioning a joint account to sole ownership after a co-owner's death is generally straightforward:
            </p>

            <ol className="mb-6 list-decimal pl-6 space-y-3">
              <li>
                <strong>Obtain a certified death certificate.</strong> You will typically need at least one or two certified copies from the county clerk or funeral home. Banks will not accept photocopies.
              </li>
              <li>
                <strong>Contact your bank.</strong> Visit a branch in person or call customer service. Most banks have a specific process for handling account ownership changes due to death.
              </li>
              <li>
                <strong>Present identification.</strong> Bring a government-issued photo ID along with the death certificate.
              </li>
              <li>
                <strong>Complete the bank's forms.</strong> The bank will have standard paperwork to remove the deceased owner's name and retitle the account in the survivor's name alone.
              </li>
              <li>
                <strong>Receive confirmation.</strong> Ask for written confirmation that the account has been retitled. Keep a copy for your records and for potential tax reporting purposes.
              </li>
            </ol>

            <p className="mb-6">
              The entire process can often be completed in a single bank visit. No attorney is required, no court is involved, and there is no waiting period. This is one of the genuine advantages of joint account ownership — it provides immediate access to funds at the moment they may be needed most for funeral expenses, bills, and daily living costs.
            </p>

            <h3 id="can-the-bank-freeze-the-account" className="text-xl font-bold mt-6 mb-3">
              Can the Bank Freeze the Account?
            </h3>

            <p className="mb-6">
              This is a common concern, and the answer depends on how the bank learns of the death. In practice, many banks do temporarily freeze a joint account when they receive notice of a co-owner's death while they process the ownership change. This freeze is typically brief — measured in days, not weeks.
            </p>

            <p className="mb-6">
              Some banks may also freeze an account if they suspect that funds were improperly withdrawn shortly before death or if there are signs of financial exploitation of a vulnerable adult. These situations are exceptions; for the vast majority of accounts, the surviving owner experiences only a minor administrative delay before gaining sole access.
            </p>

            <p className="mb-6">
              It is worth noting that Illinois does not have a mandatory waiting period before a surviving joint owner can access the account. Unlike some states that impose a brief freeze to allow for tax audits, Illinois law allows immediate access once the bank processes the ownership change.
            </p>

            <div className="my-8 flex justify-center">
              <div className="w-full max-w-md">
              <Image
                src="https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="Person reviewing financial documents and bank account paperwork after the death of a loved one"
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Transitioning a joint account to sole ownership requires a certified death certificate and a visit to your bank — no court involvement needed.</p>
              </div>
            </div>

            <h2 id="does-a-joint-account-go-through-probate" className="text-2xl font-bold mt-10 mb-4">
              3. Does a Joint Account Go Through Probate in Illinois?
            </h2>

            <p className="mb-6">
              No — with important exceptions. A standard joint bank account held with right of survivorship does not go through the Illinois probate process. As explained above, the funds transfer automatically to the surviving owner without any court involvement. The account is a "non-probate asset."
            </p>

            <p className="mb-6">
              This is one of the primary reasons many Illinoisans use joint accounts as an estate planning strategy: they provide immediate, private, and cost-free asset transfer at death. In Cook County, where formal probate can cost thousands of dollars and take a year or more, bypassing the probate court entirely has obvious appeal.
            </p>

            <p className="mb-6">
              However, joint accounts sidestep probate only as to the relationship between the co-owners. The funds from the account may still be relevant to the overall estate from a tax and creditor-claims perspective, even if they do not technically pass through the probate court.
            </p>

            <h3 id="exceptions-when-probate-may-still-apply" className="text-xl font-bold mt-6 mb-3">
              Exceptions: When Probate May Still Apply
            </h3>

            <p className="mb-6">
              There are specific circumstances where a joint bank account — or its contents — could become entangled with probate proceedings:
            </p>

            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>
                <strong>Both joint owners die simultaneously or in close succession.</strong> If the surviving owner dies before the account is retitled, the account may become part of the second decedent's probate estate. Illinois's Uniform Simultaneous Death Act addresses scenarios where the order of death cannot be determined.
              </li>
              <li>
                <strong>The account is held as tenancy in common, not JTWROS.</strong> As noted in the table above, tenancy-in-common accounts do not carry survivorship rights. The deceased owner's share passes through their estate.
              </li>
              <li>
                <strong>The surviving owner is a minor.</strong> A minor cannot own property outright in Illinois. If the surviving joint owner is under 18, a guardianship of the estate may need to be established, which is a court proceeding.
              </li>
              <li>
                <strong>Dispute over whether the account was truly jointly owned.</strong> Courts have the authority to look behind the form of an account title if there is evidence that the joint ownership was not intended as a true gift — a common issue with "convenience accounts" discussed later in this guide.
              </li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6 my-8">
              <p className="font-bold text-[#2d3e50] mb-2">Illinois-Specific Note</p>
              <p className="text-[#2d3e50] mb-0">
                Even though a joint account avoids probate, the Illinois estate may still need to be opened for other reasons — for example, if the deceased person owned real estate in their sole name. Opening a probate estate does not automatically pull joint accounts into the estate, but the executor will likely need to report those assets for estate tax purposes.
              </p>
            </div>

            <h2 id="tax-implications" className="text-2xl font-bold mt-10 mb-4">
              4. Tax Implications for the Surviving Owner
            </h2>

            <p className="mb-6">
              The fact that a joint account avoids probate does not mean it avoids taxes. The surviving owner needs to understand three distinct tax issues: federal estate tax, Illinois estate tax, and income tax treatment of inherited assets.
            </p>

            <h3 id="federal-estate-tax" className="text-xl font-bold mt-6 mb-3">
              Federal Estate Tax Considerations
            </h3>

            <p className="mb-6">
              For federal estate tax purposes, the treatment of a joint bank account depends on who the co-owners are:
            </p>

            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>
                <strong>Between spouses:</strong> When one spouse dies, the entire value of a jointly held account is generally included in the deceased spouse's gross estate for federal purposes — but then the unlimited marital deduction eliminates any federal estate tax owed. The surviving spouse owes no federal estate tax on those funds.
              </li>
              <li>
                <strong>Between non-spouses:</strong> The IRS generally includes the full value of a jointly held account in the first joint owner to die's gross estate, unless the surviving owner can prove they contributed to the account. The rule is: 100% is included in the first decedent's estate unless the survivor can prove their contribution. The amount that can be excluded equals the proportion of the account that the surviving owner contributed from their own funds.
              </li>
            </ul>

            <p className="mb-6">
              For 2026, the federal estate tax exemption is $13.99 million per individual (adjusted annually for inflation). Unless the total value of the estate — including the joint account — exceeds this threshold, no federal estate tax is owed.
            </p>

            <h3 id="illinois-estate-tax" className="text-xl font-bold mt-6 mb-3">
              Illinois Estate Tax Considerations
            </h3>

            <p className="mb-6">
              Illinois has its own estate tax with a much lower exemption: $4 million per decedent. This means that even estates that owe no federal tax may owe Illinois estate tax. The value of a joint account is generally included in the Illinois taxable estate under rules similar to the federal approach described above.
            </p>

            <p className="mb-6">
              For joint accounts between spouses, the Illinois marital deduction eliminates the tax at the first death, just as with the federal system. But when the surviving spouse later dies, the combined assets — now solely theirs — may exceed the $4 million Illinois exemption, triggering an estate tax.
            </p>

            <p className="mb-6">
              If the value of an Illinois estate may approach or exceed $4 million, working with an estate planning attorney to structure accounts and ownership in a tax-efficient manner can produce significant savings. For more detail, see our guide on{' '}
              <Link href="/blog/how-estate-taxes-work-in-illinois/" className={linkClass}>
                how estate taxes work in Illinois
              </Link>.
            </p>

            <h3 id="income-tax-and-basis" className="text-xl font-bold mt-6 mb-3">
              Income Tax and Stepped-Up Basis
            </h3>

            <p className="mb-6">
              For bank accounts specifically, income tax on the principal is generally not a concern — the surviving owner simply keeps the money, and cash does not generate a capital gain. However, if the joint account holds investment assets (such as a joint brokerage account), the basis rules become critically important.
            </p>

            <p className="mb-6">
              Under federal tax law, inherited assets receive a "stepped-up" basis — meaning the cost basis is reset to the fair market value on the date of death. Assets held in a joint account between spouses receive a stepped-up basis on at least the deceased spouse's share (and in community property states, the entire account — but Illinois is not a community property state).
            </p>

            <p className="mb-6">
              For a joint brokerage account between non-spouses, only the decedent's share receives a stepped-up basis. The surviving owner retains their original cost basis on their portion. This distinction matters significantly when the surviving owner later sells the investment assets.
            </p>

            <h2 id="risks-and-pitfalls" className="text-2xl font-bold mt-10 mb-4">
              5. Hidden Risks and Common Pitfalls
            </h2>

            <p className="mb-6">
              Joint accounts are genuinely useful, but they come with several risks that many people do not consider when they set them up. Before adding someone to your bank account, understand these potential consequences.
            </p>

            <h3 id="convenience-accounts" className="text-xl font-bold mt-6 mb-3">
              Convenience Accounts vs. True Joint Ownership
            </h3>

            <p className="mb-6">
              One of the most litigated issues in Illinois probate court involves "convenience accounts" — accounts where an aging parent adds an adult child's name to the account purely to allow the child to pay bills, manage finances, or help with banking. The parent does not intend to make a gift of half the account, nor do they intend the child to inherit it all at death.
            </p>

            <p className="mb-6">
              However, when the parent dies, the child's name is on the account — and the bank treats it as a standard joint account with right of survivorship. The other children inherit nothing from that account under the Will because the joint account never becomes part of the estate.
            </p>

            <p className="mb-6">
              Courts can and do look behind account titles in these situations, but litigation is expensive, emotionally draining, and uncertain in outcome. A far better solution — discussed below — is to use a Payable-on-Death designation or a durable power of attorney instead of creating joint ownership when the goal is convenience management rather than gifting.
            </p>

            <h3 id="creditor-claims" className="text-xl font-bold mt-6 mb-3">
              Creditor Claims Against Joint Accounts
            </h3>

            <p className="mb-6">
              Adding someone to your bank account exposes your funds to their creditors. If your joint account holder has a judgment entered against them, their creditors can potentially garnish funds from the joint account — including funds that you deposited. Under Illinois law, a creditor of one joint tenant may be able to reach that joint tenant's interest in the account.
            </p>

            <p className="mb-6">
              Conversely, after one joint owner dies, the surviving owner inherits the account free and clear of the deceased owner's debts in most circumstances. The right of survivorship is generally protected from the deceased's creditors, with important exceptions: the IRS, Illinois state taxes, and in some cases Medicaid recovery.
            </p>

            <p className="mb-6">
              If the deceased person received Medicaid benefits, the Illinois Department of Healthcare and Family Services may have a claim against the estate for the cost of care. While joint accounts typically avoid probate, Medicaid recovery in Illinois can extend to non-probate assets in certain circumstances, particularly when the account was funded by the Medicaid recipient. Anyone in this situation should consult an elder law attorney immediately.
            </p>

            <h3 id="unintended-disinheritance" className="text-xl font-bold mt-6 mb-3">
              Unintended Disinheritance of Other Heirs
            </h3>

            <p className="mb-6">
              Because a joint account passes entirely to the surviving joint owner — overriding the Will — it is easy to inadvertently disinherit other intended beneficiaries. Consider this scenario:
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
              <p className="font-bold text-[#2d3e50] mb-3">Example: The Unintended Result</p>
              <p className="text-[#2d3e50] mb-3">
                A widowed parent has three adult children and $200,000 in savings. She adds her youngest child to her bank account for "convenience" and writes a Will leaving her estate equally to all three children. When she dies, the $200,000 goes entirely to the youngest child — who has no legal obligation to share it with the siblings. The Will says equal, but the account title says otherwise.
              </p>
              <p className="text-[#2d3e50] mb-0 font-semibold">
                The other two children would need to take the youngest child to court to recover any share, and success is not guaranteed.
              </p>
            </div>

            <p className="mb-6">
              This type of unintended consequence is remarkably common and entirely preventable with proper planning. If your goal is to leave your savings equally to multiple heirs, a joint account with a single child is the wrong tool.
            </p>

            <div className="my-10">
              <p className="text-xl font-bold text-[#2d3e50] mb-6">Interactive: What Happens in Your Scenario?</p>
              <p className="text-gray-600 mb-5">Select a scenario below to see how Illinois law handles joint account ownership at death:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setActiveScenario(activeScenario === scenario.id ? null : scenario.id)}
                    className={`text-left p-4 rounded-lg border-2 transition-all ${
                      activeScenario === scenario.id
                        ? 'border-[#4a708b] bg-blue-50'
                        : 'border-gray-200 hover:border-[#4a708b] hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-semibold text-[#2d3e50]">{scenario.label}</span>
                  </button>
                ))}
              </div>
              {activeScenario && (
                <div className="bg-[#2d3e50] text-white rounded-lg p-6 transition-all">
                  <p className="font-bold text-lg mb-2">What Illinois law says:</p>
                  <p className="text-white/90 mb-0">
                    {scenarios.find(s => s.id === activeScenario)?.answer}
                  </p>
                </div>
              )}
            </div>

            <h2 id="alternatives-to-joint-accounts" className="text-2xl font-bold mt-10 mb-4">
              6. Smarter Alternatives to Joint Accounts
            </h2>

            <p className="mb-6">
              For many situations where people reach for joint account ownership, there is a better tool available that achieves the same practical goal without the risks.
            </p>

            <h3 id="payable-on-death-accounts" className="text-xl font-bold mt-6 mb-3">
              Payable-on-Death (POD) Accounts
            </h3>

            <p className="mb-6">
              A Payable-on-Death designation — sometimes called a "Totten trust" or beneficiary designation — allows you to name one or more beneficiaries who will receive your account funds upon your death. During your lifetime, you retain complete control. The beneficiary has no access to the account, no ownership interest, and no ability to make withdrawals. At your death, they simply present a death certificate and a valid ID, and the bank releases the funds to them.
            </p>

            <p className="mb-6">
              POD accounts offer most of the benefits of joint accounts (probate avoidance, immediate access at death) without the drawbacks (creditor exposure during life, risk of convenience account disputes, override of Will instructions for multiple heirs). You can even name multiple beneficiaries in specific percentages — something you cannot do with joint tenancy.
            </p>

            <p className="mb-6">
              To add a POD designation to your account, simply ask your bank for a beneficiary designation form. It takes minutes to complete and costs nothing. This is one of the simplest and most effective estate planning steps available to any Illinois resident.
            </p>

            <h3 id="revocable-living-trust" className="text-xl font-bold mt-6 mb-3">
              Revocable Living Trust
            </h3>

            <p className="mb-6">
              For those with more complex situations — multiple heirs, larger estates, minor beneficiaries, or a desire to control how and when beneficiaries receive funds — a revocable living trust offers comprehensive control that neither joint accounts nor POD designations can match.
            </p>

            <p className="mb-6">
              When you fund your bank accounts into a revocable trust (or name the trust as POD beneficiary), the accounts pass at death according to the trust's detailed instructions, without probate. Unlike a Will, the trust is private — it does not become a public record. Unlike joint accounts, it does not expose your funds to a co-owner's creditors.
            </p>

            <p className="mb-6">
              A revocable trust can specify that a beneficiary receives funds in installments over time, that funds are held until a minor reaches adulthood, or that a trustee manages assets for a beneficiary with special needs. These instructions survive your death and are legally enforceable.
            </p>

            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#2d3e50] text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Strategy</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Avoids Probate</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Co-owner Creditor Risk</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Multiple Heirs</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Control After Death</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Joint Account (JTWROS)</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">Yes</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">Difficult</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">None</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">POD Designation</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">No</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes (by %)</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">None</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Revocable Living Trust</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">No</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes (full control)</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Extensive</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Will alone</td>
                    <td className="border border-gray-300 px-4 py-3 text-red-700 font-bold">No</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">No</td>
                    <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Yes</td>
                    <td className="border border-gray-300 px-4 py-3 text-amber-600 font-bold">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-10 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-xl font-bold text-[#2d3e50] mb-4">Quick Knowledge Check</p>
              <p className="text-gray-700 mb-4">True or False: If your Will says your estate should be divided equally among your children, a joint bank account you hold with one child will also be divided equally among all children.</p>
              <div className="flex gap-4 mb-4">
                {['True', 'False'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      if (!quizSubmitted) {
                        setQuizAnswer(option);
                        setQuizSubmitted(true);
                      }
                    }}
                    className={`px-6 py-3 rounded-lg font-semibold border-2 transition-all ${
                      quizSubmitted
                        ? option === 'False'
                          ? 'bg-green-100 border-green-500 text-green-800'
                          : quizAnswer === 'True'
                          ? 'bg-red-100 border-red-500 text-red-800'
                          : 'border-gray-200 text-gray-400'
                        : 'border-[#2d3e50] text-[#2d3e50] hover:bg-[#2d3e50] hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {quizSubmitted && (
                <div className={`rounded-lg p-4 ${quizAnswer === 'False' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className="font-bold mb-1">{quizAnswer === 'False' ? 'Correct!' : 'Not quite.'}</p>
                  <p className="text-sm mb-0">
                    <strong>False.</strong> A joint bank account with right of survivorship passes entirely to the surviving joint owner — regardless of what your Will says. The Will cannot override the joint account's survivorship rights. This is one of the most important — and most commonly misunderstood — facts about joint account ownership in Illinois.
                  </p>
                </div>
              )}
            </div>

            <h2 id="next-steps" className="text-2xl font-bold mt-10 mb-4">
              7. Next Steps: Protecting Your Estate
            </h2>

            <p className="mb-6">
              Joint bank accounts can be a useful tool — or a liability — depending on how they are used. For married couples sharing a household account, they generally work as intended and provide valuable access to funds at death. For parents managing finances with help from an adult child, they often create exactly the kind of complications and disputes that estate planning is meant to prevent.
            </p>

            <p className="mb-6">
              The most important step is to make conscious, informed choices about how your accounts are owned — rather than leaving the default to determine your estate plan. Review each account you hold:
            </p>

            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>Who is named as a joint owner? Is that still your intention?</li>
              <li>Do your accounts have POD designations, and are they current?</li>
              <li>Do your account titles align with your Will's instructions?</li>
              <li>Have you considered whether a revocable living trust would give you greater control?</li>
            </ul>

            <p className="mb-6">
              If you are unsure whether your current account structure supports your estate plan — or if you are dealing with a joint account after a loved one's death and need guidance — an Illinois estate planning attorney can help you understand your options and take action before problems arise.
            </p>

            <p className="mb-6">
              At Illinois Estate Law, we help clients across Chicago and Illinois assess their existing plans, restructure accounts and beneficiary designations, and create comprehensive estate plans that work the way they intend. To learn more, explore our guides on{' '}
              <Link href="/blog/when-is-probate-required-in-illinois/" className={linkClass}>when probate is required in Illinois</Link>,{' '}
              <Link href="/blog/how-transfer-on-death-instruments-work-in-illinois/" className={linkClass}>how Transfer-on-Death Instruments work</Link>, and{' '}
              <Link href="/chicago-revocable-trusts-lawyer/" className={linkClass}>the advantages of revocable living trusts</Link>.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty - Chicago Estate Planning Attorney"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#2d3e50]">
                    Mary Liberty - Chicago Estate Planning Attorney
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Mary Liberty is a Chicago-based estate planning and probate attorney dedicated to making legal planning accessible, affordable, and stress-free. Through her modern virtual law practice, she helps families and individuals across Illinois create clear, effective plans that protect their assets and their loved ones.
                  </p>
                  <p className="mb-0 text-gray-700">
                    Mary focuses on estate planning, uncontested probate, and her signature partial probate service. Known for her precision, empathy, and plain-language guidance, she operates on a 100% flat-fee model so clients always know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-lg p-6 my-8">
              <p className="text-lg font-bold text-white mb-3">Ready to Protect What You Have Built?</p>
              <p className="text-white/90 mb-5">Get a comprehensive estate plan that works exactly the way you intend — from a Chicago attorney you can trust.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-white text-[#2d3e50] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-block bg-transparent text-white font-semibold px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors text-center"
                >
                  BOOK A CONSULTATION
                </a>
              </div>
            </div>

            <div className="my-8 pt-8 border-t border-gray-200">
              <p className="text-sm font-semibold mb-3">SHARE THIS POST:</p>
              <div className="flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-to-a-joint-bank-account-when-one-owner-dies/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-to-a-joint-bank-account-when-one-owner-dies/')}&text=${encodeURIComponent('What Happens to a Joint Bank Account When One Owner Dies?')}`}
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
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.illinoisestatelaw.com/blog/what-happens-to-a-joint-bank-account-when-one-owner-dies/')}`}
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
              articles={relatedPosts.map(post => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>
        </div>
      </div>
    </>
  );
}
