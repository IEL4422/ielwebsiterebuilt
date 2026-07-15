import type { QA } from '@/lib/seo';
import { GUARDIANSHIP_FLAT, RETAINERS, usd } from '@/lib/pricing';

/** Answer-first FAQs — shared by the FAQPage JSON-LD and the rendered accordion. */
export const minorGuardianshipFAQs: QA[] = [
  {
    question: 'When do you need guardianship of a minor in Illinois?',
    answer:
      'You need guardianship of a minor when an adult who is not the child’s parent needs legal authority to care for the child — for example a grandparent, aunt, uncle, or family friend raising a child because the parents have died, are unable to care for the child, or consent to the arrangement. Guardianship gives you authority to make decisions about the child’s schooling, medical care, and daily life.',
  },
  {
    question: 'How much does minor guardianship cost in Illinois?',
    answer:
      `Illinois Estate Law charges a flat ${usd(GUARDIANSHIP_FLAT.minorUncontested)} for an uncontested minor guardianship, and that fee is all-inclusive of court costs. Illinois eliminated minor-guardianship filing and appearance fees on October 1, 2025, so there is no separate court fee to pass through to you. If the guardianship becomes contested — for example a parent objects or files a competing petition — the matter converts to hourly billing against a ${usd(RETAINERS.contestedGuardianship)} retainer, and the flat fee you already paid is credited against that retainer.`,
  },
  {
    question: 'What if a parent objects to the guardianship?',
    answer:
      `If a parent objects or files a competing petition, the guardianship is contested and becomes litigation. A contested minor guardianship is billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer. We tell you this before you engage us, and the conversion clause — crediting your flat fee against the retainer — is written into the engagement agreement, so it is never a surprise.`,
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
