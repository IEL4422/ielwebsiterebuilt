'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    id: 'probate-guidance',
    title: 'Probate Guidance',
    content: `<p>Most probate cases in Illinois involve no disputes over the will or the person serving as executor. Even so, there are important deadlines and filings to manage.</p><p><strong>We assist with:</strong></p><ul><li>Preparing and filing court documents</li><li>Guiding executors through their legal duties</li><li>Coordinating with heirs, creditors, and beneficiaries</li><li>Handling tax filings and final distributions</li></ul><p>Illinois courts expect timely and accurate submissions. Mistakes can lead to delays or even personal liability for the executor. Having a trusted legal partner helps you move forward with clarity and support.</p>`,
  },
  {
    id: 'intestate-estates',
    title: 'Assistance When Someone Dies Without a Will (Intestate Estates)',
    content: `<p>If your loved one died without a will, Illinois' intestate succession laws determine who inherits. This doesn't mean the state takes everything, but it does follow a strict order of priority.</p><p><strong>In general:</strong></p><ul><li>A surviving spouse and children share the estate</li><li>If there's no spouse or children, parents and siblings inherit</li><li>More distant relatives may inherit if no immediate family survives</li></ul><p>The court will appoint an administrator, often a family member, to handle the estate. That person has similar responsibilities to an executor, including notifying heirs, filing inventories, paying debts, and distributing assets. We help administrators through this process so that legal obligations are met and family dynamics are respected.</p>`,
  },
  {
    id: 'creditor-claims',
    title: 'Managing Creditor Claims and Estate Debts',
    content: `<p>One key part of probate is dealing with what's owed. In Illinois, creditors must be notified and given a window, typically six months from publication, to file claims against the estate.</p><p><strong>Executors are responsible for:</strong></p><ul><li>Publishing notice of probate in a local newspaper</li><li>Reviewing and validating creditor claims</li><li>Paying legitimate debts in the correct order</li><li>Disputing or rejecting claims that seem invalid</li></ul><p>You don't have to pay estate debts out of your own pocket, but it's important to handle this part properly. Creditors have rights, and heirs can't receive their inheritance until the debts are resolved. We can guide you through this step to make sure everything is addressed legally and fairly.</p>`,
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

export function ProbateAdministrationSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Family receiving compassionate legal guidance"
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">Guiding families through difficult times</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 lg:p-10 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Secure Your Family's Future from Home
              </p>
              <p className="text-slate-300 mb-6">
                Professional legal guidance without leaving your house.
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
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Experienced Assistance in Illinois Probate Administration
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-6" />
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Losing someone close to you is never easy. On top of the emotional weight, there are often legal steps that must be taken, especially if your loved one owned property or had assets in their name alone. The probate process in Illinois pertains to how a deceased person's estate is legally settled. We work closely with families and executors to make each step less stressful and more manageable.
            </p>

            <div className="space-y-4 mb-8">
              {accordionItems.map(item => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>

            <p className="text-slate-600 leading-relaxed">
              Probate doesn't have to feel like a maze. With steady guidance from a Chicago estate planning attorney at Illinois Estate Law, you can focus on honoring your loved one while we handle the legal work. If you've been named executor, or if you're stepping in to help a family member through this process, let's connect. We're here to walk you through probate with compassion, transparency, and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
