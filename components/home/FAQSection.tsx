'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
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
    answer: 'Illinois Estate Law offers a modern, virtual process that eliminates the need for office visits or piles of paperwork. Clients can complete their estate planning securely online, from the comfort of home, and still have the option for in-person meetings if desired. This approach provides flexibility while maintaining confidentiality and professional guidance throughout the process.',
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
    answer: 'You can contact Illinois Estate Law by calling (312) 373-0731 or booking a consultation online through the firm\'s website. We offer flexible virtual and in-person meetings to fit your schedule. Whether you\'re beginning your first estate plan or updating existing documents, our team is ready to help you take the next step with confidence and peace of mind.',
  },
];

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#77B1D4] mx-auto mb-6" />
          <p className="text-slate-600">
            Get answers to common questions about estate planning, probate, and our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6 bg-slate-50"
              >
                <AccordionTrigger className="text-left text-slate-800 font-medium hover:text-[#77B1D4] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Have more questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3123730731"
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
            >
              Call (312) 373-0731
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
