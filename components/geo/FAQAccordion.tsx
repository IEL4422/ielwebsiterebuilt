'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  items: FAQItem[];
}

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#2D3E50] mb-10 text-center">
            {title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-slate-200 rounded-lg px-6 bg-slate-50"
                >
                  <AccordionTrigger className="text-left text-slate-800 font-semibold hover:text-[#4A708B] hover:no-underline py-5 text-sm md:text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
