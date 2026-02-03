'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: 'establishing-poa-healthcare',
    title: 'Establishing a Power of Attorney for Healthcare',
    content: `<p>Medical decisions often arise when emotions are running high. A Power of Attorney for Healthcare allows you to appoint someone who knows your values and will speak for you if you can't make those decisions yourself.</p><p><strong>Under Illinois law, this document can let your agent:</strong></p><ul><li>Consent to or refuse medical treatments</li><li>Make decisions about surgeries, medications, or procedures</li><li>Coordinate with doctors and hospitals</li><li>Decide on long-term care or hospice options</li></ul><p>Choosing the right person matters. It's not just about legal authority but peace of mind knowing your healthcare wishes will be respected and communicated clearly.</p>`,
  },
  {
    id: 'healthcare-directives-living-wills',
    title: 'Crafting Clear and Enforceable Healthcare Directives (Living Wills)',
    content: `<p>A Living Will spells out what types of life-sustaining treatment you do or do not prefer if you are terminally ill and unable to express your preferences. It's different from a healthcare power of attorney because it focuses specifically on end-of-life care.</p><p><strong>In Illinois, this document is legally binding and must be signed and witnessed according to state law. It often addresses things like:</strong></p><ul><li>Resuscitation or ventilator use</li><li>Tube feeding and hydration</li><li>Pain management preferences</li></ul><p>Having a living will helps take the burden off your family. They won't have to guess what you would've wanted, because you've already made it clear.</p>`,
  },
  {
    id: 'hipaa-authorizations',
    title: 'The Importance of HIPAA Authorizations',
    content: `<p>Medical privacy laws are strict, and that's a good thing. But in moments of crisis, those same rules can make it hard for loved ones to get the information they need.</p><p>That's where a HIPAA authorization comes in. This document gives your chosen individuals access to your medical information without giving them decision-making authority. It's a crucial tool that lets your family talk with your doctors, understand your condition, and be involved, even if they're not your healthcare agent.</p><p>Illinois residents often overlook this step, but it plays a big role in giving your support system the tools they need to be effective and informed.</p><p>You've worked hard to build your life; now it's time to protect your ability to make choices even if you can't speak for yourself. At Illinois Estate Law, we guide you through creating powers of attorney and healthcare directives that feel clear, empowering, and uniquely yours.</p><p><strong><a href="/contact-us/" class="text-[#77B1D4] hover:text-[#5A9BC4]">Contact us</a> today at <a href="tel:3123730731" class="text-[#77B1D4] hover:text-[#5A9BC4]">(312) 373-0731</a> to start building a plan that protects your voice and supports the people who care about you most.</strong></p>`,
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: typeof accordionItems[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
        <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
      >
        <div
          className="p-5 pt-0 prose prose-slate max-w-none [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-2"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>
    </div>
  );
}

export function PowersOfAttorneySection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Essential Planning with Powers of Attorney and Healthcare Directives
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              There's more to estate planning than deciding who inherits your belongings. It's also about making sure someone you trust is there to step in if you ever need help managing your finances or making medical decisions. Our top-rated Chicago estate planning attorney Mary Liberty can help you put clear, legally sound documents in place so that your voice is heard, even in difficult or unexpected moments.
            </p>

            <div className="space-y-4">
              {accordionItems.map(item => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-slate-800 rounded-xl p-8 lg:p-10 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Book Your Consultation: Estate Planning That Fits Your Schedule
              </p>
              <p className="text-slate-300 mb-6">
                Book instantly and begin your estate planning journey
              </p>
              <a
                href="/get-started/"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors w-full"
              >
                GET STARTED TODAY
              </a>
            </div>

            <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mkZU_fciF9o"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
