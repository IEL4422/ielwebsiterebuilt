import type { QA } from '@/lib/seo';
import {
  PROBATE,
  RATES,
  RETAINERS,
  RETAINER_FLOORS,
  ESTATE_PLANNING,
  usd,
  hourly,
} from '@/lib/pricing';

/**
 * FAQ content for the two comparison pages:
 *   /flat-fee-vs-hourly-probate-illinois/
 *   /diy-vs-attorney-estate-planning-illinois/
 *
 * Comparative and "should I do X or Y" queries are disproportionately what AI
 * assistants get asked and what they cite, so these are written answer-first:
 * the direct answer is the opening sentence, and everything after it is
 * qualification. Each array is shared between the visible page and its
 * FAQPage JSON-LD so the two cannot drift.
 *
 * Every dollar figure is imported from lib/pricing.ts. Do not hardcode money
 * in this file.
 */

export const flatFeeVsHourlyFAQs: QA[] = [
  {
    question: 'Is probate in Illinois billed hourly or as a flat fee?',
    answer:
      `Both models are used in Illinois — probate fees are not standardized by statute, so it depends entirely on the firm you hire. This firm quotes a flat fee for uncontested probate (${usd(PROBATE.standard)} for a standard estate, ${usd(PROBATE.smallEstate)} for a small estate) and bills hourly only when a matter is actually contested. Many Illinois probate firms bill every matter hourly. Ask any firm you are considering which model applies to your case, and get the answer in writing before you engage them.`,
  },
  {
    question: 'What does a flat probate fee include in Illinois?',
    answer:
      `At this firm the flat probate fee is all-inclusive of the firm's work and the court costs: opening the estate, letters of office, notice and creditor publication, the inventory, routine court appearances, distributions, and closing the estate — plus the filing fees, publication charges, and recording fees, which are covered by the fee rather than billed on top of it. The single carve-out is the surety bond premium, if the court requires the representative to post a bond; that is paid directly to the bond provider. "All-inclusive" is not the industry norm, so confirm with any firm whether their quoted flat fee also absorbs court costs or merely covers attorney time.`,
  },
  {
    question: 'Why is contested probate billed hourly instead of flat?',
    answer:
      `Because in a contested matter the opposing party, not the firm, controls how much work there is. How many motions get filed, whether discovery is agreed or fought, and whether the case settles or goes to trial are not knowable when the engagement starts, so no honest fixed price can be quoted. Flat-fee litigation resolves one of two ways: the firm loses money and starts economizing on your case, or you are quietly asked for more later. Contested probate, will contests, and estate litigation here open on a ${usd(RETAINERS.contestedProbate)} retainer billed at ${hourly(RATES.attorneyHourly)} for attorney time and ${hourly(RATES.paralegalHourly)} for paralegal time, replenished when the balance falls below ${usd(RETAINER_FLOORS.contestedProbate)}. Costs — filing fees, service, transcripts, guardian ad litem fees — are billable to the client in contested matters.`,
  },
  {
    question: 'Is a flat fee cheaper than hourly for Illinois probate?',
    answer:
      'Not automatically, and anyone who tells you it always is, is selling. A flat fee and an hourly engagement can land in the same place on a simple estate. What a flat fee actually buys is predictability and a transfer of risk: if the estate turns out to be more work than expected, that is the firm’s problem rather than yours, and you are never charged for asking a question. Hourly can cost less on an unusually clean file and considerably more on a messy one. The honest comparison is not price against price, it is a known number against an unknown one.',
  },
  {
    question: 'Can an Illinois probate start as a flat fee and become hourly?',
    answer:
      'Yes, and the trigger is a formal contest rather than mere difficulty. If someone files an objection, an appearance in opposition, or a competing petition, an uncontested matter becomes contested litigation and converts to hourly billing against a retainer. Under this firm’s engagement terms the flat fee already paid is credited against that retainer. An estate simply being complicated, slow, or contentious in tone does not convert it — only an actual filed contest does.',
  },
  {
    question: 'Do Illinois probate attorney fees have to be approved by the court?',
    answer:
      'It depends on who pays them. Where attorney fees are paid out of the decedent’s estate, Illinois law requires that the fees be reasonable and approved by the court (755 ILCS 5/27-2), and the court has broad discretion over what is reasonable. Where a fee is paid personally by an individual — an heir hiring counsel out of their own pocket, for instance — it is governed by the engagement agreement rather than by court approval. A firm should tell you which situation applies to your matter before you engage them.',
  },
];

export const diyVsAttorneyFAQs: QA[] = [
  {
    question: 'Can I write my own will in Illinois?',
    answer:
      'Yes. Illinois does not require you to use a lawyer, and a will you write yourself is valid if it meets the statutory formalities: it must be in writing, signed by you (or by someone else at your direction and in your presence), and attested by two credible witnesses (755 ILCS 5/4-3). Notarization is not required, though a self-proving affidavit makes the will easier to admit to probate later. Illinois does not recognize handwritten wills that lack the two witnesses, so a holographic will valid in some other states will generally fail here.',
  },
  {
    question: 'Do I need a lawyer for probate in Illinois?',
    answer:
      'No Illinois statute requires an executor or administrator to hire counsel, but the role carries fiduciary duties and personal liability that most people underestimate. A representative who distributes assets before the six-month creditor claims period closes, misses a required notice, or files an inaccurate inventory can be held personally responsible for the shortfall. Some Illinois circuit courts also expect a represented estate in practice. Self-representation is most realistic where the estate is small, the heirs agree, and no real estate is involved.',
  },
  {
    question: 'What goes wrong most often with do-it-yourself estate plans in Illinois?',
    answer:
      'The most common failure is an unfunded trust — a trust that was signed but never had the house deeded into it or the accounts retitled, which avoids no probate at all and leaves the family paying for both a trust and a probate. The next most common are execution defects (missing or interested witnesses), beneficiary designations on retirement accounts and life insurance that quietly override what the will says, and Illinois estate tax exposure that goes unnoticed because the Illinois exclusion is $4 million, is not indexed for inflation, and is not portable between spouses. None of these are discovered while you are alive; they surface when your family can no longer fix them.',
  },
  {
    question: 'When is do-it-yourself estate planning genuinely reasonable in Illinois?',
    answer:
      'A do-it-yourself will can be a defensible choice when the estate is modest and the plan is simple: no real estate held in your sole name, total sole-name personal property comfortably under the $100,000 threshold that triggers probate, everything passing outright to a spouse or to adult children in equal shares, no blended-family or special-needs considerations, and no Illinois estate tax exposure. Add real estate, a business, a beneficiary who cannot manage money, a child from a prior relationship, or an estate approaching $4 million, and the cost of getting it wrong rises sharply.',
  },
  {
    question: 'Is there a middle option between doing it yourself and full representation?',
    answer:
      `Yes. This firm reviews documents you prepared yourself for a flat ${usd(ESTATE_PLANNING.diyReviewIndividual)} for an individual and ${usd(ESTATE_PLANNING.diyReviewJoint)} for a couple — an attorney reads what you drafted, confirms it satisfies Illinois execution requirements, and tells you plainly what it does and does not accomplish. For comparison, a drafted will package is ${usd(ESTATE_PLANNING.willPackageIndividual)} for an individual and ${usd(ESTATE_PLANNING.willPackageJoint)} for a couple, and a trust package is ${usd(ESTATE_PLANNING.trustPackageIndividual)} and ${usd(ESTATE_PLANNING.trustPackageJoint)} respectively. A review is not the same as having the plan drafted for you, but it catches the execution and funding failures that make DIY documents collapse.`,
  },
  {
    question: 'Does having a will avoid probate in Illinois?',
    answer:
      'No, and this is the single most common misconception in Illinois estate planning. A will is the instrument that governs a probate estate, not a substitute for one — it tells the court who inherits and who administers the estate, but the estate still goes through probate if the assets require it. What actually avoids probate is a funded revocable living trust, a valid beneficiary designation, joint tenancy with right of survivorship, or a recorded transfer on death instrument for real property.',
  },
];
