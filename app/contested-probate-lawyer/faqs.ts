import type { QA } from '@/lib/seo';

/**
 * Answer-first FAQs for contested probate.
 *
 * Shared between the FAQPage JSON-LD in layout.tsx and the rendered accordion in
 * page.tsx, so the structured data and the visible page can never disagree —
 * which is both an SEO requirement and the same anti-drift principle as
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
      'If someone files an objection or a competing petition in a matter we took on a flat fee, that matter converts to contested representation billed hourly against a retainer — and every dollar of the flat fee you already paid is credited against that retainer. We tell you this before you engage us, and it is written into the engagement agreement. It is never a surprise.',
  },
  {
    question: 'Which Illinois counties do you handle contested probate in?',
    answer:
      'We handle contested probate throughout Illinois, with a concentration in Cook County (Probate Division at the Daley Center), DuPage County, Lake County, Will County, Kane County, and McHenry County. Most work is handled virtually; court appearances are made in person wherever the case is filed.',
  },
];
