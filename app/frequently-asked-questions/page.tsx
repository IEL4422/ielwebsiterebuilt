import { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'Illinois Estate Law FAQ: Key Estate Planning Answers',
  description: 'Illinois Estate Law: Get clarity on estate planning with FAQs answered by experienced attorneys. Discover your rights and plan your future today!',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/frequently-asked-questions/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Illinois Estate Law FAQ: Key Estate Planning Answers',
    description: 'Illinois Estate Law: Get clarity on estate planning with FAQs answered by experienced attorneys. Discover your rights and plan your future today!',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Law FAQ: Key Estate Planning Answers',
    description: 'Illinois Estate Law: Get clarity on estate planning with FAQs answered by experienced attorneys. Discover your rights and plan your future today!',
  },
  other: {
    'dc:title': 'Illinois Estate Law FAQ: Key Estate Planning Answers',
    'dc:description': 'Illinois Estate Law: Get clarity on estate planning with FAQs answered by experienced attorneys. Discover your rights and plan your future today!',
    'dc:relation': 'https://www.illinoisestatelaw.com/frequently-asked-questions/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
};

const faqs = [
  {
    question: 'What is estate planning?',
    answer: 'Estate planning involves preparing documents to manage and distribute your assets after your death or incapacitation. It includes wills, trusts, powers of attorney, and healthcare directives.',
  },
  {
    question: 'Why is estate planning important?',
    answer: 'It ensures that your wishes are honored, protects beneficiaries, minimizes taxes, and can help avoid probate. It also allows you to appoint guardians for minors and designate individuals to make medical or financial decisions if you become unable to do so.',
  },
  {
    question: 'What happens if I die without a will?',
    answer: 'If you die without a will (intestate), state law determines how your assets are distributed. This often results in assets being divided among next-of-kin, regardless of your preferences.',
  },
  {
    question: 'How does a will differ from a trust?',
    answer: 'A will is a legal document outlining asset distribution after death and must go through probate. A trust manages and distributes assets during your lifetime and after death, often bypassing probate.',
  },
  {
    question: 'What is probate, and why should it be avoided?',
    answer: 'Probate is the legal process of validating a will and distributing assets. It can be costly, time-consuming, and public. Avoiding probate can save money, ensure privacy, and speed up asset distribution.',
  },
  {
    question: 'What is a power of attorney?',
    answer: 'A power of attorney is a legal document that allows someone (your agent) to make decisions on your behalf if you become incapacitated. It can be for financial, medical, or other legal matters.',
  },
  {
    question: 'What is a healthcare directive?',
    answer: 'A healthcare directive, or living will, outlines your medical treatment preferences if you\'re unable to communicate them yourself. It can also appoint a healthcare proxy to make decisions for you.',
  },
  {
    question: 'Can I change my estate plan?',
    answer: 'Yes, you can update your estate plan at any time, as long as you are mentally competent. It\'s advisable to review your plan every few years or after major life events (e.g., marriage, divorce, birth of a child).',
  },
  {
    question: 'Who should be my executor or trustee?',
    answer: 'Choose someone responsible, trustworthy, and capable of handling financial matters. This person can be a family member, friend, or professional such as an attorney or a financial institution.',
  },
  {
    question: 'What is the difference between a revocable and an irrevocable trust?',
    answer: 'A revocable trust can be changed or revoked by the grantor during their lifetime. An irrevocable trust cannot be altered once established, offering more protection against creditors and potential estate tax benefits.',
  },
  {
    question: 'How can I minimize estate taxes?',
    answer: 'Strategies include gifting during your lifetime, creating irrevocable trusts, and setting up marital and charitable trusts. Consulting with an estate planning attorney can help optimize tax benefits.',
  },
  {
    question: 'What is a guardianship, and how is it established?',
    answer: 'Guardianship is a legal arrangement where a court appoints someone to care for a minor or incapacitated adult. In an estate plan, you can designate your preferred guardian for minor children.',
  },
  {
    question: 'Can I include digital assets in my estate plan?',
    answer: 'Yes, digital assets like social media accounts, email, and cryptocurrency can be included. You can designate a digital executor and provide access instructions.',
  },
  {
    question: 'What happens to my debts when I die?',
    answer: 'Your debts become part of your estate\'s obligations. Creditors are paid from the estate\'s assets before distribution to beneficiaries.',
  },
  {
    question: 'Do I need an estate plan if I don\'t have significant assets?',
    answer: 'Yes, estate planning is beneficial for everyone, regardless of wealth. It allows you to control healthcare decisions, designate beneficiaries, and appoint guardians for minor children.',
  },
  {
    question: 'What is the annual gift tax exclusion?',
    answer: 'The annual gift tax exclusion allows you to give up to a certain amount (e.g., $17,000 per person in 2024) without incurring gift tax. It\'s a common strategy to reduce taxable estates.',
  },
  {
    question: 'How do I know if I need a special needs trust?',
    answer: 'If you have a beneficiary with a disability who relies on government benefits, a special needs trust can provide financial support without disqualifying them from benefits.',
  },
  {
    question: 'What documents are typically included in an estate plan?',
    answer: 'An estate plan often includes a will, revocable living trust, durable power of attorney, healthcare directive, and beneficiary designations.',
  },
  {
    question: 'How can I protect my estate from creditors?',
    answer: 'Irrevocable trusts, gifting strategies, and proper titling of assets can help protect assets from creditors. Consulting with an attorney can provide personalized strategies.',
  },
  {
    question: 'How often should I review my estate plan?',
    answer: 'Review your estate plan every 3-5 years or after significant life changes (e.g., marriage, divorce, birth of a child, major asset purchase).',
  },
];

export default function FrequentlyAskedQuestionsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8 py-24 lg:py-28">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-slate-200 rounded-lg px-6 bg-slate-50"
                >
                  <AccordionTrigger className="text-left text-slate-800 font-semibold hover:text-[#77B1D4] hover:no-underline py-5 text-base md:text-lg">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-white font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-white/90 font-['Plus_Jakarta_Sans'] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Our experienced estate planning attorneys are here to help. Contact us today for personalized guidance tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3123730731"
                className="inline-block px-8 py-4 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors no-underline"
              >
                Call (312) 373-0731
              </a>
              <a
                href="/contact/"
                className="inline-block px-8 py-4 bg-white text-[#2D3E50] font-semibold rounded-lg hover:bg-gray-100 transition-colors no-underline"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
