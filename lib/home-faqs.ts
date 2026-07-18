import type { QA } from '@/lib/seo';

/**
 * Homepage FAQ content — SINGLE SOURCE OF TRUTH.
 *
 * Consumed by BOTH:
 *   - components/home/FAQSection.tsx  (the visible accordion)
 *   - app/page.tsx                    (the FAQPage JSON-LD, server-rendered)
 *
 * Same anti-drift principle as lib/practice-faqs.ts and lib/pricing.ts: the
 * structured data and the visible page are built from one array, so they can
 * never disagree. Google requires FAQPage markup to match visible content.
 *
 * History: these two used to be maintained separately. The JSON-LD had 10 of
 * the 11 questions and claimed the firm offers "virtual and in-person
 * meetings", while the visible copy says in-person consultations are not
 * offered to new clients. The visible copy is authoritative and is what is
 * kept here.
 */
export const homeFAQs: QA[] = [
  {
    question: 'Why is estate planning important for everyone?',
    answer: 'Estate planning matters for people of all ages and backgrounds because it ensures that their wishes are respected and their loved ones are cared for. It helps avoid unnecessary legal complications and costly court delays. Having a plan in place gives peace of mind, knowing that your values and finances will be protected no matter what life brings.',
  },
  {
    question: 'What benefits does estate planning provide for young adults?',
    answer: 'Even for young and healthy individuals, estate planning creates structure and security. It allows them to choose who can make medical or financial decisions if they become unable to do so. This foresight prevents confusion, protects loved ones, and avoids legal complications later in life.',
  },
  {
    question: 'How does Illinois Estate Law make estate planning more convenient?',
    answer: 'Illinois Estate Law offers a modern, virtual process that eliminates the need for office visits or piles of paperwork. Clients can complete their estate planning securely online, from the comfort of home. This approach provides flexibility while maintaining confidentiality and professional guidance throughout the process. Current clients also have access to in-person meetings at our locations throughout Illinois.',
  },
  {
    question: "What makes Illinois Estate Law's pricing structure different?",
    answer: 'The firm uses an all-inclusive flat-fee system, so clients know exactly what they will pay from the start. There are no hourly rates, hidden costs, or surprise charges for asking questions. This clear and transparent approach allows clients to plan confidently and focus on protecting their families rather than worrying about unpredictable legal bills.',
  },
  {
    question: 'What types of documents are typically included in an estate plan?',
    answer: 'An estate plan can include wills, trusts, and powers of attorney that meet Illinois legal requirements. It may also cover healthcare directives and HIPAA authorizations to ensure your medical wishes are honored. Together, these documents create a complete framework to manage your assets, healthcare, and decisions in the future.',
  },
  {
    question: 'How does Illinois Estate Law handle probate cases?',
    answer: 'The firm assists families through the legal process of settling a loved one\'s estate after death. Whether it involves uncontested probate, managing creditor claims, or handling estates without a will, they focus on making each step clear and manageable. Their compassionate guidance helps families stay informed and supported throughout what can be an emotionally challenging time.',
  },
  {
    question: 'What are partial probate services, and who might need them?',
    answer: 'Partial probate services are for clients who have already begun probate with another attorney but feel dissatisfied or stuck. Illinois Estate Law can take over the case, provide transparent communication, and finish the process efficiently. This option helps clients regain confidence and closure, avoiding further delays or confusion.',
  },
  {
    question: 'Why is guardianship planning a crucial part of estate planning?',
    answer: 'Guardianship planning ensures that children, elderly parents, or incapacitated loved ones receive care from someone you trust. It allows you to make these important decisions proactively rather than leaving them to the courts. Establishing guardianship in advance brings clarity, protection, and peace of mind to your family\'s future.',
  },
  {
    question: 'How can Illinois Estate Law help clients with estate planning and probate?',
    answer: 'At Illinois Estate Law, we guide individuals and families through every stage of estate planning and probate with care and clarity. Our team works closely with clients to create personalized wills, trusts, and healthcare directives that follow Illinois law. We also assist with probate cases, ensuring the process is smooth, transparent, and free of hidden costs. Our goal is to provide compassionate, client-first service that protects what matters most to you.',
  },
  {
    question: 'How can someone contact Illinois Estate Law to get started?',
    answer: 'You can contact Illinois Estate Law by calling (312) 373-0731 or booking a consultation online through the firm\'s website. We offer flexible virtual meetings to fit your schedule. Whether you\'re beginning your first estate plan or updating existing documents, our team is ready to help you take the next step with confidence and peace of mind.',
  },
  {
    question: 'Do you offer in-person consultations?',
    answer: 'We do not offer in-person consultations for new clients. However, in-person meetings are included and available for all current clients at any of our convenient locations throughout Illinois.',
  },
];;
