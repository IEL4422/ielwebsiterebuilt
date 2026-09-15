'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { homeFAQs } from '@/lib/home-faqs';

const faqs = homeFAQs;

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#7E9CC0] mx-auto mb-6" />
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
                <AccordionTrigger className="text-left text-slate-800 font-medium hover:text-[#7E9CC0] hover:no-underline py-5">
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
              className="inline-flex items-center justify-center px-6 py-3 bg-[#7E9CC0] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
