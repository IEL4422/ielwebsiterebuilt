import type { QA } from '@/lib/seo';
import { GUARDIANSHIP_FLAT, GUARDIANSHIP_COMPLIANCE, RETAINERS, usd } from '@/lib/pricing';

/** Answer-first FAQs — shared by the FAQPage JSON-LD and the rendered accordion. */
export const adultGuardianshipFAQs: QA[] = [
  {
    question: 'When does an adult need a guardian in Illinois?',
    answer:
      'An adult needs a guardian when they can no longer make or communicate responsible decisions about their own care or finances because of a disability — for example a parent with advanced dementia, an adult child with a significant developmental disability, or a spouse after a catastrophic injury — and no adequate less-restrictive alternative (such as an existing power of attorney or supported decision-making) is in place. Illinois requires the least restrictive arrangement that meets the person’s needs.',
  },
  {
    question: 'How much does adult guardianship cost in Illinois?',
    answer:
      `Illinois Estate Law bills adult guardianship of the person and estate hourly against a ${usd(RETAINERS.adultGuardianshipUncontested)} retainer, not as a flat fee. Even an “uncontested” adult guardianship involves a physician’s report that must be obtained, personal service on the respondent, and a court-appointed guardian ad litem whose recommendations must be answered — work whose scope is not fully within our control. If the guardianship is contested, it is billed against a ${usd(RETAINERS.contestedGuardianship)} retainer. Costs, including the guardian ad litem fee, are billed to the client.`,
  },
  {
    question: 'Why is adult guardianship billed hourly when your other services are flat fee?',
    answer:
      'Because we can only quote a fixed price for work whose scope we control. A minor guardianship is narrow and predictable, so it is flat-fee. An adult guardianship is not: a thin or non-committal physician’s report may have to be re-obtained, a respondent can be difficult to serve, and the guardian ad litem may ask for a second interview or recommend conditions. None of that is “contested” in the legal sense, but it is real work, and billing it honestly by the hour is fairer than a flat fee that quietly absorbs it.',
  },
  {
    question: 'What is the difference between guardianship of the person and guardianship of the estate?',
    answer:
      'Guardianship of the person is authority over care, residence, and medical decisions. Guardianship of the estate is authority over money and property. Where the adult has assets, the guardianship usually covers both. Guardianship of the estate carries a duty to account to the court, and the guardian personally bears the burden of proving that every disbursement was proper (755 ILCS 5/24-11).',
  },
  {
    question: 'What is a guardian ad litem and do I have to pay for one?',
    answer:
      `A guardian ad litem (GAL) is a lawyer the court appoints to investigate and report on what is in the respondent’s best interest. In Cook County a GAL is appointed in every estate guardianship, and in any person-guardianship that could result in a physical intrusion or a denial of rights. The GAL fee is a court-set third-party cost — typically ${usd(1500)}–${usd(2500)} — and in a retainer matter it is billed to you as an expense, not absorbed into a flat fee.`,
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
