'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: 'advanced-trust-planning-strategies',
    title: 'Advanced Trust Planning Strategies',
    content: `<p>Trusts can do far more than pass on assets. With the right planning, they can protect wealth across generations, provide tax benefits, and simplify future administration.</p><p>Revocable living trusts are commonly used in Illinois to avoid probate, maintain privacy, and allow for smooth asset transfer. But beyond that, advanced strategies, such as irrevocable trusts or generation-skipping trusts, may be right for you if you're focused on long-term family stewardship or protecting assets from creditors or lawsuits.</p><p><strong>We work closely with you to align your trust strategy with your goals. That could include:</strong></p><ul><li>Minimizing estate taxes for larger estates</li><li>Protecting assets for minor children or beneficiaries with financial challenges</li><li>Planning for business succession or real estate holdings</li><li>Structuring distributions to promote financial responsibility in beneficiaries</li></ul><p>Each of these approaches comes with specific legal requirements under Illinois trust law, and we guide you through what applies to your situation.</p>`,
  },
  {
    id: 'customizing-your-last-will-and-testament',
    title: 'Customizing Your Last Will and Testament',
    content: `<p>A will does more than state who inherits your property. It lets you make thoughtful decisions about guardianship, personal items, and how your estate should be handled. We help you go further by including custom provisions that match your unique family or asset structure.</p><p><strong>This might include:</strong></p><ul><li>Naming backup guardians and executors</li><li>Outlining personal property gifts that carry sentimental value</li><li>Including charitable bequests or memorial wishes</li><li>Coordinating with your trust to cover anything left outside of it</li></ul><p>Every detail matters when it comes to making your wishes known. We take the time to make sure nothing is left to chance.</p>`,
  },
  {
    id: 'asset-protection-through-strategic-trusts',
    title: 'Asset Protection Through Strategic Trusts',
    content: `<p>Certain trusts can be used to shield assets from future risks, including long-term care costs, lawsuits, or creditor claims.</p><p>You may consider irrevocable trusts, which remove assets from your personal ownership. These can be useful in protecting your wealth while still allowing for control through carefully written terms. Some common uses include:</p><ul><li>Protecting a family home</li><li>Setting aside funds for future generations</li><li>Reducing exposure to estate taxes or Medicaid spend-down rules</li></ul><p>These strategies require careful planning and must be tailored to fit both your financial goals and Illinois regulations. We help you weigh the pros and cons clearly.</p>`,
  },
  {
    id: 'special-needs-supplemental-needs-trusts',
    title: 'Special Needs and Supplemental Needs Trusts',
    content: `<p>If you have a loved one with a disability, you can protect their future without risking their access to public benefits. A Supplemental Needs Trust (SNT) allows you to set aside assets for their care, while preserving eligibility for programs like SSI or Medicaid.</p><p>Illinois recognizes both first-party and third-party SNTs, each with different rules and funding sources. These trusts must follow strict guidelines, especially when it comes to distributions, so they don't inadvertently count as income or disqualify the beneficiary.</p><p><strong>This type of planning allows you to:</strong></p><ul><li>Provide for medical, recreational, or supplemental care</li><li>Appoint trusted individuals to manage the trust</li><li>Protect inheritances and legal settlements</li><li>Offer lifelong support without government interference</li></ul><p>Creating the right SNT means taking time to understand your loved one's needs today and in the years to come. We're here to guide that conversation thoughtfully and legally.</p><p>At Illinois Estate Law, we take pride in crafting custom estate plans that reflect your values, your family, and your vision for the future. Our estate planning attorney is ready to listen, plan, and support you every step of the way.</p><p><strong>Call us today at <a href="tel:3123730731" class="text-[#77B1D4] hover:text-[#5A9BC4]">(312) 373-0731</a> and start building a legacy with purpose.</strong></p>`,
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

export function CustomWillsTrustsSection() {
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
              Custom Wills and Trusts Tailored to Your Unique Needs
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              When your estate planning goals involve more than just the basics, you deserve legal solutions that reflect the full picture of your life. Every plan we draft is built with Illinois law and your goals in mind, so your intentions are clearly documented and legally sound.
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

          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Legal professional reviewing estate planning documents"
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">Personalized estate plans crafted with care</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 lg:p-10 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Act Now: Schedule Your Free Consultation Before Life Gets Busier
              </p>
              <p className="text-slate-300 mb-6">
                Don't wait - get professional guidance while you have time to focus
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
              <p className="text-slate-400 text-sm">Skip the Office Visit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
