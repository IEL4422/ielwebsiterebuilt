'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: 'creating-your-foundational-will',
    title: 'Creating Your Foundational Will',
    content: `<p>A will allows you to clearly state your wishes for how your property should be distributed when you're gone. A valid will must be in writing, signed by a person at least 18 years old, with mental capacity, and witnessed by at least two individuals who are not beneficiaries. This document also gives you the power to name a guardian for your minor children and an executor to carry out your instructions.</p><p>If you pass away without a will in Illinois, your estate will be subject to the state's intestate succession laws. That means your assets will be distributed according to a preset formula, which might not align with your true intentions. A will gives you a voice in decisions that would otherwise be left up to the court. It also helps avoid confusion or disputes among surviving loved ones.</p>`,
  },
  {
    id: 'establishing-a-revocable-living-trust',
    title: 'Establishing a Revocable Living Trust',
    content: `<p>A revocable living trust gives you more control, both during your lifetime and after. With this document, you transfer ownership of assets, like your home, bank accounts, or investments, into the trust, which you still manage while you're alive. If you become incapacitated, your successor trustee steps in to manage things according to your instructions.</p><p>Illinois probate can be time-consuming and public. A revocable living trust allows your loved ones to bypass that process altogether for the assets inside the trust. It also allows for privacy and smoother administration, especially if you own property in more than one state.</p><p>Trusts are especially helpful if you have children from a previous marriage, a family member with special needs, or simply want to reduce the risk of conflict after you're gone. And because the trust is revocable, you can change it at any time while you're still living and competent.</p>`,
  },
  {
    id: 'simple-estate-plans-for-individuals-and-couples',
    title: 'Simple Estate Plans for Individuals and Couples',
    content: `<p>Estate planning isn't just for families with large estates. Whether you're a single adult or part of a couple, your plan should reflect your values and life circumstances.</p><ul><li><strong>Single adults</strong> often use foundational plans to make sure their medical preferences are respected and that trusted individuals are appointed to make decisions if needed. You can name someone to handle your finances or health care in case of incapacity, as well as designate where your assets should go.</li><li><strong>Couples,</strong> whether married or in long-term partnerships, can benefit from coordinated estate plans. In Illinois, spouses are entitled to certain rights, but that doesn't cover everything. A solid estate plan lets you decide how to distribute your assets, name alternates, and protect each other in the event of incapacity or death.</li></ul><p>The goal here isn't complexity. It's to keep things simple and practical, so that your plan truly works for your life.</p>`,
  },
  {
    id: 'why-every-adult-needs-a-basic-estate-plan',
    title: 'Why Every Adult Needs a Basic Estate Plan',
    content: `<p>It's easy to delay estate planning, especially when life is busy and the future feels far away. But even a basic plan gives you real control and peace of mind.</p><p>An estate plan isn't just about what happens when you die; it's about making sure your voice is heard if something unexpected happens while you're living. Illness, accidents, or temporary incapacity can strike at any time. Without the right documents, your family may be left in the dark or forced into costly and stressful court proceedings.</p><p>We take pride in helping Illinois families build estate plans that feel personal, clear, and doable. Whether you're starting from scratch or reviewing your current plan, we're here to guide you through it step by step.</p><p><strong>Call Illinois Estate Law at <a href="tel:3123730731" class="text-[#77B1D4] hover:text-[#5A9BC4]">(312) 373-0731</a> and discover how your future can feel more secure with a plan that truly reflects you.</strong></p>`,
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
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div
          className="p-5 pt-0 prose prose-slate max-w-none [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-2"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>
    </div>
  );
}

export function FoundationalPlanningSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 text-center mb-4">
            Foundational Estate Planning for Every Illinois Family
          </h2>
          <div className="w-16 h-1 bg-[#77B1D4] mx-auto mb-8" />

          <p className="text-slate-600 text-lg leading-relaxed mb-12 text-center">
            Putting your affairs in order doesn't need to be overwhelming or reserved for later in life. In fact, having a foundational estate plan in place is one of the most thoughtful and proactive steps you can take for your family, no matter your age, income, or family structure. We can help you take this important step with clarity, comfort, and confidence, tailoring every part of the process to meet Illinois legal standards and your personal needs.
          </p>

          <div className="bg-slate-800 rounded-xl p-8 lg:p-10 mb-12 text-center">
            <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Start Your Estate Plan in Minutes: 100% Virtual Process
            </p>
            <p className="text-slate-300 mb-6">
              Fast start, lifetime security for those you love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3123730731"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
              >
                CALL (312) 373-0731
              </a>
              <a
                href="/book-consultation/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                BOOK ONLINE
              </a>
            </div>
          </div>

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
      </div>
    </section>
  );
}
