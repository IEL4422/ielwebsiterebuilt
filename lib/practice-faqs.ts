import type { QA } from '@/lib/seo';
import {
  PROBATE,
  GUARDIANSHIP_FLAT,
  GUARDIANSHIP_COMPLIANCE,
  RETAINERS,
  usd,
} from '@/lib/pricing';

/**
 * Answer-first FAQs for the consolidated practice-area pages.
 *
 * These arrays were previously colocated with the standalone
 * /contested-probate-lawyer/, /adult-guardianship-lawyer/, and
 * /minor-guardianship-lawyer/ pages. Those pages were consolidated into the
 * Probate hub (/chicago-probate-lawyer/) and the Guardianship hub
 * (/guardianship/) and 301-redirected. The FAQ content — and the FAQPage
 * JSON-LD built from it — moved here so the consolidated pages keep the exact
 * keyword coverage the standalone pages had.
 *
 * Each array is shared between the FAQPage JSON-LD (in the page's layout.tsx)
 * and the rendered accordion (in the page.tsx), so the structured data and the
 * visible page can never disagree — the same anti-drift principle as
 * lib/pricing.ts.
 *
 * Written answer-first (the direct answer in the opening sentence) because AI
 * search engines and featured snippets extract the first sentence.
 */

export const contestedProbateFAQs: QA[] = [
  {
    question: 'What are the grounds to contest a will in Illinois?',
    answer:
      'Illinois recognizes four main grounds to contest a will: lack of testamentary capacity (the person did not understand what they owned, who their natural heirs were, or what the will did); undue influence (someone in a position of trust overpowered the testator’s free will); fraud or forgery; and improper execution (the will was not signed and witnessed as Illinois law requires — in writing, signed by the testator, and attested by two credible witnesses). Simply being unhappy with what you received is not a ground to contest a will.',
  },
  {
    question: 'How long do I have to contest a will in Illinois?',
    answer:
      'In Illinois you generally have six months from the date the will is admitted to probate to file a will contest petition. This is a hard deadline and it is short. If you believe you have grounds to contest a will, the single most important thing you can do is speak to an attorney immediately — missing the six-month window will almost always end the matter regardless of how strong your case was.',
  },
  {
    question: 'How much does it cost to contest a will in Illinois?',
    answer:
      'Contested probate is billed hourly against a retainer, not on a flat fee. This is deliberate. In a contested matter the amount of work is driven by the opposing party — how many motions they file, whether they agree to discovery, whether the case settles or goes to trial — so no attorney can honestly predict the total cost in advance. Any firm quoting you a fixed price for a court fight is guessing. We require a retainer to begin, bill against it at our hourly rate, and replenish it as the matter proceeds. You receive an itemized bill before any money moves.',
  },
  {
    question: 'Why is contested probate not a flat fee when everything else at your firm is?',
    answer:
      'Because we can only responsibly quote a flat fee for work whose scope we control. An uncontested probate has a knowable list of filings and hearings, so we can price it. A contested matter does not — the other side decides how hard to fight. Flat-fee litigation ends one of two ways: the firm loses money and starts cutting corners, or the client is quietly asked for more. We would rather tell you the truth up front and bill you honestly for the hours we actually work.',
  },
  {
    question: 'Do attorney fees in a contested Illinois probate need court approval?',
    answer:
      'It depends on who is paying. Where attorney fees are paid out of the decedent’s estate, Illinois law requires that the fees be reasonable and approved by the court (755 ILCS 5/27-2), and the court has broad discretion to decide what is reasonable. Where a fee is paid personally by an individual — for example, an heir who hires us to contest a will out of their own pocket — the fee is governed by our engagement agreement rather than by court approval. We will tell you which situation applies to your matter before you engage us.',
  },
  {
    question: 'What is undue influence in an Illinois will contest?',
    answer:
      'Undue influence means someone in a position of trust or dominance over the testator used that position to substitute their own wishes for the testator’s. It is more than persuasion or nagging — it must overpower the testator’s free will. Illinois courts look at facts like whether the influencer was in a fiduciary relationship with the testator, whether they procured or helped prepare the will, whether the testator was isolated from family, and whether the will makes an unnatural or sudden change benefiting the influencer. A sudden new will signed shortly before death, prepared by the person who inherits everything, is the classic fact pattern.',
  },
  {
    question: 'Can I have an executor removed in Illinois?',
    answer:
      'Yes. An Illinois court can remove an executor or administrator who is not performing their duties — for example, one who is failing to account for estate assets, self-dealing, refusing to distribute the estate, wasting assets, or who has a disabling conflict of interest. Removal is a contested proceeding, and it is often paired with a claim for breach of fiduciary duty to recover what the estate lost.',
  },
  {
    question: 'Do you take will contests on a contingency fee?',
    answer:
      'No. Some Illinois firms do take will contests on contingency (typically one third of any recovery, rising to around 40% if the case goes deep into litigation). We do not, because we believe it is the wrong deal for most clients: a 40% contingency is a very large fee, and it puts the firm’s financial interest ahead of the family’s. We bill honestly for the hours we work, and we offer payment plans.',
  },
  {
    question: 'What happens if my uncontested probate suddenly becomes contested?',
    answer:
      `If someone files an objection or a competing petition in a matter we took on a flat fee, that matter converts to contested representation billed hourly against a ${usd(RETAINERS.contestedProbate)} retainer. The unearned portion of the flat fee you have already paid — the part we have not yet earned, as determined by the firm — is credited toward that retainer and held in our client trust account, drawn down only as fees are actually earned and billed. We notify you in writing of the exact amount credited. We tell you all of this before you engage us, and it is written into the engagement agreement. It is never a surprise.`,
  },
  {
    question: 'Which Illinois counties do you handle contested probate in?',
    answer:
      'We handle contested probate throughout Illinois, with a concentration in Cook County (Probate Division at the Daley Center), DuPage County, Lake County, Will County, Kane County, and McHenry County. Most work is handled virtually; court appearances are made in person wherever the case is filed.',
  },
];

export const adultGuardianshipFAQs: QA[] = [
  {
    question: 'When does an adult need a guardian in Illinois?',
    answer:
      'An adult needs a guardian when they can no longer make or communicate responsible decisions about their own care or finances because of a disability — for example a parent with advanced dementia, an adult child with a significant developmental disability, or a spouse after a catastrophic injury — and no adequate less-restrictive alternative (such as an existing power of attorney or supported decision-making) is in place. Illinois requires the least restrictive arrangement that meets the person’s needs.',
  },
  {
    question: 'How much does adult guardianship cost in Illinois?',
    answer:
      `Illinois Estate Law charges a flat ${usd(GUARDIANSHIP_FLAT.adultUncontested)} for an uncontested adult guardianship of the person and estate — all-inclusive of the firm’s work on the petition, the physician’s report, personal service on the respondent, coordinating the court-appointed guardian ad litem, and the surety bond, inventory, and hearing. The only separate charge is the guardian ad litem (GAL) fee, a court-set pass-through disclosed to you like a surety bond in probate. If the guardianship becomes contested — someone objects or files a competing petition — it converts to hourly billing against a ${usd(RETAINERS.contestedGuardianship)} retainer.`,
  },
  {
    question: 'Is adult guardianship a flat fee?',
    answer:
      `Yes. An uncontested adult guardianship of the person and estate is a flat ${usd(GUARDIANSHIP_FLAT.adultUncontested)}, so you know the price of the firm’s work up front — only the guardian ad litem’s court-set fee is separate, and it is disclosed to you as a pass-through cost. A guardianship is billed hourly (against a ${usd(RETAINERS.contestedGuardianship)} retainer) only when it is contested — the respondent objects, a competing petition is filed, or a sitting guardian is challenged. Contested matters cannot be flat-fee’d honestly because the opposing party, not the firm, drives how much work the case takes.`,
  },
  {
    question: 'What is the difference between guardianship of the person and guardianship of the estate?',
    answer:
      'Guardianship of the person is authority over care, residence, and medical decisions. Guardianship of the estate is authority over money and property. Where the adult has assets, the guardianship usually covers both. Guardianship of the estate carries a duty to account to the court, and the guardian personally bears the burden of proving that every disbursement was proper (755 ILCS 5/24-11).',
  },
  {
    question: 'What is a guardian ad litem and do I have to pay for one?',
    answer:
      `A guardian ad litem (GAL) is a lawyer the court appoints to investigate and report on what is in the respondent’s best interest. In Cook County a GAL is appointed in every estate guardianship, and in any person-guardianship that could result in a physical intrusion or a denial of rights. The GAL fee is a court-set third-party cost — typically ${usd(1500)}–${usd(2500)} — always disclosed to you and billed separately: a carve-out from the flat fee in an uncontested matter, or a billable expense in a contested one. It is never firm revenue.`,
  },
  {
    question: 'What are a guardian’s ongoing duties after appointment?',
    answer:
      `Being appointed is the beginning, not the end. A guardian of the person must file an annual report on the ward (755 ILCS 5/11a-17(b)). A guardian of the estate must file an accounting within 30 days of the one-year anniversary of appointment, and thereafter every three years unless the court orders otherwise (755 ILCS 5/24-11). Illinois Estate Law offers a Guardianship Compliance Plan (${usd(GUARDIANSHIP_COMPLIANCE.compliancePlanBundled)} per year) that prepares and files both on the court’s schedule so you never miss a deadline.`,
  },
  {
    question: 'Can a guardianship be ended or the ward’s rights restored?',
    answer:
      'Yes. Guardianship is meant to be the least restrictive arrangement that works, and it is not always permanent. When a ward recovers capacity or circumstances change, we file a petition to terminate the guardianship and restore the ward’s rights.',
  },
  {
    question: 'Which Illinois counties do you handle adult guardianship in?',
    answer:
      'We handle adult guardianship throughout Illinois, with a concentration in Cook, DuPage, Lake, Will, Kane, and McHenry counties. Most work is handled by remote video appearance.',
  },
];

export const minorGuardianshipFAQs: QA[] = [
  {
    question: 'When do you need guardianship of a minor in Illinois?',
    answer:
      'You need guardianship of a minor when an adult who is not the child’s parent needs legal authority to care for the child — for example a grandparent, aunt, uncle, or family friend raising a child because the parents have died, are unable to care for the child, or consent to the arrangement. Guardianship gives you authority to make decisions about the child’s schooling, medical care, and daily life.',
  },
  {
    question: 'How much does minor guardianship cost in Illinois?',
    answer:
      `Illinois Estate Law charges a flat ${usd(GUARDIANSHIP_FLAT.minorUncontested)} for an uncontested minor guardianship, and that fee is all-inclusive of court costs. Illinois eliminated minor-guardianship filing and appearance fees on October 1, 2025, so there is no separate court fee to pass through to you. If the guardianship becomes contested — for example a parent objects or files a competing petition — the matter converts to hourly billing against a ${usd(RETAINERS.contestedGuardianship)} retainer, and the unearned portion of the flat fee you already paid is credited toward that retainer.`,
  },
  {
    question: 'What if a parent objects to the guardianship?',
    answer:
      `If a parent objects or files a competing petition, the guardianship is contested and becomes litigation. A contested minor guardianship is billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer. We tell you this before you engage us, and the conversion clause — crediting the unearned portion of your flat fee against the retainer — is written into the engagement agreement, so it is never a surprise.`,
  },
  {
    question: 'What is the difference between guardianship and adoption?',
    answer:
      'Guardianship gives you legal authority to care for and make decisions for a child, but it does not permanently terminate the parents’ rights, and it can be ended if circumstances change. Adoption permanently ends the birth parents’ rights and makes the child legally yours. Guardianship is often the right tool when the goal is to care for a child during a period when the parents cannot, rather than to permanently change the child’s legal parentage.',
  },
  {
    question: 'What is a short-term or standby guardianship?',
    answer:
      'Illinois allows short-term guardianship (by a parent’s written designation, for a limited period) and standby guardianship (which takes effect on a future triggering event, such as a parent’s incapacity or death). These can be a better fit than a full guardianship when a parent is planning ahead or facing a serious illness. We will tell you which tool fits your situation at the consultation.',
  },
  {
    question: 'Does the child need a guardian ad litem?',
    answer:
      'In a minor guardianship, a guardian ad litem is appointed at the court’s discretion rather than automatically. Where one is appointed, the GAL investigates and reports to the court on the child’s best interest. In an uncontested matter our flat fee covers our work; a GAL fee, if the court appoints one, is a separate court-set cost.',
  },
  {
    question: 'Which Illinois counties do you handle minor guardianship in?',
    answer:
      'We handle minor guardianship throughout Illinois, with a concentration in Cook, DuPage, Lake, Will, Kane, and McHenry counties. Most work is handled by remote video appearance.',
  },
];

/**
 * Combined guardianship FAQ for the consolidated /guardianship/ hub. Adult FAQs
 * first, then the minor FAQs — minus the near-duplicate "which counties" item,
 * which the adult set already covers — so the page never shows two nearly
 * identical Q&As.
 */
export const guardianshipFAQs: QA[] = [
  ...adultGuardianshipFAQs,
  ...minorGuardianshipFAQs.filter(
    (f) => !/Which Illinois counties/.test(f.question),
  ),
];

/**
 * General (uncontested) Illinois probate FAQs for /chicago-probate-lawyer/.
 *
 * Moved here from the page body so the FAQPage JSON-LD (built in that page's
 * layout.tsx) and the rendered accordion share one array and cannot drift.
 *
 * The cost answer is generated from lib/pricing.ts. It previously quoted
 * generic market ranges that both hardcoded dollar figures — which
 * lib/pricing.ts forbids — and described an hourly billing model this firm
 * does not use for uncontested probate, undercutting the all-inclusive flat
 * fee that is the firm's actual differentiator.
 */
export const probateFAQs: QA[] = [
  {
    question: 'How long does probate take in Cook County?',
    answer:
      'A typical uncontested probate in Cook County takes 9-18 months from start to finish. The minimum is about 6-7 months due to the required creditor claims period. Complex estates with disputes, tax issues, or business interests can take 2-3 years or longer. Independent administration typically moves faster than supervised administration because it requires less court oversight and fewer court appearances.',
  },
  {
    question: 'Do I need a lawyer for probate in Illinois?',
    answer:
      'While Illinois law doesn\'t require you to hire an attorney for probate, it is strongly recommended. Probate involves complex legal procedures, strict deadlines, detailed accounting requirements, and potential liability for executors who make mistakes. An experienced probate attorney ensures compliance with all legal requirements, protects you from personal liability, handles disputes, and usually speeds up the process. The cost of legal help is typically far less than the cost of mistakes made without proper guidance.',
  },
  {
    question: 'What happens if someone dies without a will in Illinois?',
    answer:
      'When someone dies without a will (called "intestate"), Illinois intestacy laws determine who inherits the estate. The probate process is similar, but the court appoints an administrator instead of an executor, and property is distributed according to a fixed statutory scheme rather than the deceased\'s wishes. Spouses and children have priority, followed by other relatives. The process may be more complicated because there\'s no will to clarify the deceased\'s intentions, and it may not result in the distribution the deceased would have wanted.',
  },
  {
    question: 'Can an executor be removed in Illinois?',
    answer:
      'Yes, an executor can be removed by the probate court for cause. Valid reasons include breach of fiduciary duty, self-dealing, mismanagement of assets, failure to perform duties, dishonesty, incapacity, or conflicts of interest. A beneficiary or heir can file a petition to remove the executor, but must prove grounds for removal. The court will hold a hearing and may remove the executor if the evidence shows they are unfit to serve. Removal is a serious matter and typically requires strong evidence of wrongdoing or incapacity.',
  },
  {
    question: 'How much does probate cost in Illinois?',
    answer:
      `An uncontested Illinois probate at this firm is a flat fee — ${usd(PROBATE.standard)} for a standard estate and ${usd(PROBATE.smallEstate)} for a small estate — and that fee is all-inclusive. Court filing fees, creditor publication charges, and recording fees are covered by the flat fee rather than billed on top of it. The one separate cost is the surety bond premium, if the court requires the representative to post a bond, which is paid directly to the bond provider. Probate fees are not standardized in Illinois, so other firms may quote an hourly rate instead, in which case the total is not knowable at the outset. Where attorney fees are paid out of the decedent's estate rather than personally, Illinois law requires that they be reasonable and approved by the court (755 ILCS 5/27-2).`,
  },
];
