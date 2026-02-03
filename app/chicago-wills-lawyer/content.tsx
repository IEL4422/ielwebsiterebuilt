'use client';

import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{title}</h3>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-gray-600 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="prose max-w-none">{children}</div>
        </div>
      )}
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function ChicagoWillsContent() {
  const [openAccordion1, setOpenAccordion1] = useState<number | null>(null);
  const [openAccordion2, setOpenAccordion2] = useState<number | null>(null);
  const [openAccordion3, setOpenAccordion3] = useState<number | null>(null);
  const [openAccordion4, setOpenAccordion4] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[180px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center py-6 lg:min-h-[160px] sm:min-h-[140px]"
      >
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Chicago Wills Lawyer
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="sticky top-8">
              <Image
                src="/img_3202 copy copy.jpg"
                alt="Mary Liberty"
                width={400}
                height={400}
                className="w-full rounded-lg shadow-lg mb-8"
              />

              <div className="overflow-hidden mb-8">
                <div className="flex gap-6 animate-scroll">
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/the-daily-leader.png" alt="The Daily Leader" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/the-daily-news.png" alt="The Daily News" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/digital-journal.png" alt="Digital Journal" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/the-state-journal.png" alt="The State Journal" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/rising-stars.png" alt="Rising Stars" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/illinois-state-bar-association.png" alt="Illinois State Bar Association" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/the-chicago-bar-association.png" alt="The Chicago Bar Association" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/the-daily-leader.png" alt="The Daily Leader" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/the-daily-news.png" alt="The Daily News" className="h-12 object-contain" />
                  <img src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/08/digital-journal.png" alt="Digital Journal" className="h-12 object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="prose max-w-none">
              <p>Thinking about the future often gets pushed to the bottom of the to-do list, yet it remains one of the most significant actions you can take for your family. A Last Will and Testament serves as your voice when you can no longer speak for yourself. It grants you the authority to dictate exactly how your assets are distributed, rather than leaving those personal decisions to Illinois state default rules. A clear and legally sound will reduces the burden on your family during an emotional time, eliminating guesswork and minimizing the potential for family disputes. You gain peace of mind knowing your partner, children, and chosen beneficiaries are supported exactly as you intend.</p>

              <p>Top-rated attorney Mary Liberty of Illinois Estate Law acts as a dedicated partner in this process, helping Chicago residents create documents that truly reflect their values. As an experienced <a href="https://www.illinoisestatelaw.com/chicago-wills-lawyer/">Chicago wills attorney</a>, she focuses on crafting wills that stand up to legal scrutiny while keeping the process approachable and straightforward. As a dedicated <a href="https://www.illinoisestatelaw.com/">estate planning attorney in Chicago</a>, Mary takes the time to learn about your unique family dynamic to create a plan that covers your specific needs, from naming a guardian for minor children to appointing a trusted executor.</p>

              <p><strong>Take control of your legacy today with guidance that is both professional and personal. Contact Illinois Estate Law at <a href="tel:3123730731">(312) 373-0731</a> to schedule a consultation and start building a plan that protects the people you care about most.</strong></p>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.768129510841!2d-87.6747937!3d41.9623152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756397795444!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <StarRating />
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Highly Recommended for Compassionate and Professional Probate Services
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-4">This firm was exactly what I needed for my will and trust. They made complex things feel simple and gave me real peace of mind.</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-gray-900">Katrina Talukder</span>
              </div>
              <a
                href="https://share.google/Kt6O2VG1jlRRoNos9"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                READ FULL REVIEW ON GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why You Need a Chicago Wills Lawyer</h2>
            <div className="h-1 w-24 bg-blue-600 mb-6"></div>

            <p className="text-gray-700 mb-8">You want your wishes followed, your family protected, and your affairs handled with care. A clear, legally valid will gives you control under Illinois law, so your loved ones aren't left guessing or fighting. Here's what that actually looks like for you in Chicago.</p>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <AccordionItem
                title="Why Having a Will Matters for Illinois Families"
                isOpen={openAccordion1 === 0}
                onToggle={() => setOpenAccordion1(openAccordion1 === 0 ? null : 0)}
              >
                <p>You want a clear plan that puts your wishes first and keeps your family out of guesswork. A will gives you that control under Illinois law. Each choice carries real-world impact.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">Naming Guardians for Minor Children</h4>
                <p>If you have children under 18, your will is the place to nominate who raises them if the unexpected happens. Illinois courts give strong weight to your nomination, so the people you trust are considered first. You can also separate roles; one person provides daily care while a trustee or custodian manages money. Many parents add a simple letter for day-to-day preferences, schooling, activities, faith traditions, and healthcare approach, so your guardian knows what matters to you. For short-term emergencies, your plan can coordinate with Illinois' short-term guardianship tools, giving your kids immediate stability while longer-term arrangements fall into place.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">Providing for Your Spouse, Children, and Other Loved Ones</h4>
                <p>Your will lets you care for the people who count on you. You can provide outright gifts or use trusts to guide timing and use of funds. For a spouse, Illinois law gives an option to renounce the will for a statutory share (typically one-half if you leave no descendants, or one-third if you do), so your plan should balance gifts and beneficiary designations with those rules in mind. For children, you can choose per stirpes (per family branch) distribution to ensure your loved ones are treated fairly.</p>
                <p>If your family includes stepchildren or an unmarried partner, a will is essential. They don't inherit under Illinois intestacy without being named. Charitable bequests are easy to add, and many Chicago families include a small fund for pet care as well. A loved one with a disability? A supplemental needs trust can protect eligibility for public benefits while still providing quality of life. Finally, a will works best when coordinated with non-probate assets, life insurance, retirement accounts, TOD/POD designations, and, if used, a revocable trust, so everything flows to the right people without conflict.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">Avoiding the chaos of Illinois intestacy laws</h4>
                <p>Without a will, your property passes under 755 ILCS 5/2-1 (Illinois' intestate succession statute). That default formula may not match what you want. For example, a surviving spouse and descendants split the estate, half to the spouse, half to the descendants. Unmarried partners receive nothing, and blended families can see results no one intended. A will lets you direct who receives what, in what shares, and on what terms, so your plan reflects your life, not a one-size-fits-all statute.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">Appointing an executor you trust</h4>
                <p>Your executor handles the practical work: gathering assets, paying valid debts, and distributing what remains. In Illinois probate, your chosen representative interacts with the court and heirs, keeps records, and moves the estate forward. Choosing someone organized and fair helps the process stay on track and reduces friction among family members. You can also name alternates so there's no gap in leadership.</p>
              </AccordionItem>

              <AccordionItem
                title="What Happens if You Die Without a Will in Illinois"
                isOpen={openAccordion1 === 1}
                onToggle={() => setOpenAccordion1(openAccordion1 === 1 ? null : 1)}
              >
                <p>Intestacy applies. The Probate Act sets who stands to inherit, and their percentage of shares, and a court appoints an administrator instead of the person you would have picked. Consider common outcomes under Illinois law:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Spouse and descendants:</strong> spouse receives 50%, descendants share the remaining 50%</li>
                  <li><strong>Spouse, no descendants:</strong> spouse receives 100%</li>
                  <li><strong>Descendants, no spouse:</strong> descendants receive 100% (per stirpes)</li>
                  <li><strong>No spouse or descendants:</strong> parents and siblings inherit according to statute</li>
                </ul>
                <p className="mt-4">These rules do not provide for stepchildren, close friends, charities, or an unmarried partner. When distributing an estate under intestacy rules, personal items can be divided in ways that feel impersonal. Family members may also disagree about who should oversee the estate, inviting delays and added expense.</p>
              </AccordionItem>

              <AccordionItem
                title="When It's Time to Create or Update Your Will"
                isOpen={openAccordion1 === 2}
                onToggle={() => setOpenAccordion1(openAccordion1 === 2 ? null : 2)}
              >
                <p>Life doesn't stand still, and your will shouldn't either. Create your first will when you marry, have a child, buy a home, start a business, or accumulate savings and retirement accounts. Revisit your plan after major changes: marriage, divorce, a new child or grandchild, a significant move, a death in the family, a large purchase or sale, or a shift in health. Illinois law also updates from time to time, and beneficiary designations on accounts can override what your will says, so periodic reviews keep everything aligned.</p>
                <p className="mt-4">Your instructions should be clear, lawful, and easy for your family to follow. A skilled wills lawyer at Illinois Estate Law can draft or update your will, nominate guardians, help you pick the right fiduciaries, and coordinate beneficiary designations so your plan works the moment it's needed.</p>
                <p className="mt-4">Take the next step today. Contact Illinois Estate Law for a focused Chicago-based consultation and leave with a will that reflects you.</p>
              </AccordionItem>
            </div>

            <div className="mb-8">
              <iframe
                src="https://www.youtube.com/embed/D01TUWQFAew"
                width="100%"
                height="400"
                allow="autoplay; encrypted-media; gyroscope;"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-8 bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
              <p className="text-xl font-bold text-gray-900 mb-4">Start Your Estate Plan in Minutes: 100% Virtual Process</p>
              <p className="text-gray-700 mb-6">Fast start, lifetime security for those you love</p>
              <div className="space-y-3">
                <a
                  href="tel:3123730731"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded hover:bg-blue-700 transition-colors font-semibold"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="block w-full bg-gray-900 text-white text-center px-6 py-3 rounded hover:bg-gray-800 transition-colors font-semibold"
                >
                  BOOK ONLINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <StarRating />
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Stress-Free and Transparent Estate Planning Experience
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-4">I'm so glad I chose Illinois Estate Law. They handled my trust with care and explained every detail in plain language. I felt truly supported.</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-gray-900">Geraldine Louis Nuñez</span>
              </div>
              <a
                href="https://share.google/Kt6O2VG1jlRRoNos9"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                READ FULL REVIEW ON GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-8 bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
              <p className="text-xl font-bold text-gray-900 mb-4">Book Your Consultation: Estate Planning That Fits Your Schedule</p>
              <p className="text-gray-700 mb-6">Book instantly and begin your estate planning journey</p>
              <a
                href="/get-started/"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded hover:bg-blue-700 transition-colors font-semibold"
              >
                GET STARTED TODAY
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chicago Wills Lawyer – Mary Liberty</h2>
            <div className="h-1 w-24 bg-blue-600 mb-6"></div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-6">
                <img
                  src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-408b364/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                  alt="Mary Liberty"
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mary Liberty</h3>
                </div>
              </div>
              <div className="mt-6 prose max-w-none">
                <p>Mary Liberty is a Chicago wills attorney focused on clear communication and practical results. She earned her B.A. in Political Science and Social Work from the University of Illinois Urbana–Champaign and received her J.D., cum laude, from Loyola University Chicago School of Law. Mary founded a fully virtual practice with a single mission: make high-quality planning accessible, affordable, and stress-free for families across Illinois. From the first conversation to signed documents, clients can complete every step online.</p>
                <p>Her work centers on estate planning, wills, trusts, and probate. She also offers a partial probate service that helps clients transition a case when costs or communication have stalled. Mary is admitted to the Illinois Bar. Clients value her flat-fee model with no hourly bills, her quick responses, and her plain-language guidance.</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-12">Wills, Trusts, and Other Essential Planning Tools</h2>
            <div className="h-1 w-24 bg-blue-600 mb-6"></div>

            <p className="text-gray-700 mb-8">You want a simple, solid plan that actually works when your family needs it. Illinois gives you several tools to get there. Used together, they keep your wishes clear, reduce court involvement, and make tough moments easier on the people you love.</p>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <AccordionItem
                title="Wills vs. Trusts: Which Do You Need?"
                isOpen={openAccordion2 === 0}
                onToggle={() => setOpenAccordion2(openAccordion2 === 0 ? null : 0)}
              >
                <p>A will speaks after death. It names your beneficiaries, appoints an executor, and can set up a testamentary trust for minors. In Illinois, most estates with more than $150,000 in personal property or any real estate typically pass through probate in the county court. That process is orderly, but it's public and can take time.</p>
                <p className="mt-4">A revocable living trust works during life and after death. You transfer assets to the trust now, keep full control as trustee, and name a successor trustee to step in if you're incapacitated or after you pass. Properly funded, a trust can avoid probate, add privacy, and provide steady management for your family.</p>
                <p className="mt-4">A trust isn't a status symbol; it's a fit question. It can be a supplementary tool when you want ongoing management for young or vulnerable beneficiaries, when you own out-of-state property, or when you want to keep distributions private. You will still keep a short "pour-over" will to capture anything left outside the trust and handle guardianship for minor children.</p>
              </AccordionItem>

              <AccordionItem
                title="Powers of Attorney for Property and Healthcare"
                isOpen={openAccordion2 === 1}
                onToggle={() => setOpenAccordion2(openAccordion2 === 1 ? null : 1)}
              >
                <p>A complete plan covers incapacity, not just what happens after death. Illinois has statutory short forms for both property and healthcare.</p>
                <p className="mt-4">A Power of Attorney for Property lets you name an agent to handle finances if you're unable to act. Your agent can pay bills, manage accounts, deal with insurance, and handle taxes. You stay in charge while you're able; your agent steps in when needed. You can limit or expand powers and name one or more backups so there's always someone ready.</p>
                <p className="mt-4">A Power of Attorney for Healthcare appoints a trusted person to make medical decisions if you can't communicate. That agent consults with your doctors, weighs options, and chooses treatments consistent with your preferences. Most people also sign a HIPAA release so the agent can access records quickly. Keep copies with your agent and your primary physician, so help is immediate, not delayed.</p>
                <p className="mt-4"><strong>Typical decisions a healthcare agent may handle:</strong></p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Selecting or changing doctors and care settings</li>
                  <li>Consenting to or refusing treatment, surgery, or diagnostic tests</li>
                  <li>Managing pain relief and end-of-life care preferences</li>
                  <li>Reviewing medical records and coordinating with insurance</li>
                </ul>
              </AccordionItem>

              <AccordionItem
                title="Living Wills and Advance Healthcare Directives"
                isOpen={openAccordion2 === 2}
                onToggle={() => setOpenAccordion2(openAccordion2 === 2 ? null : 2)}
              >
                <p>A living will (also known as a declaration for healthcare) tells doctors your preferences for life-sustaining treatment if you become terminally ill or permanently unconscious. You can state whether you want feeding tubes, mechanical ventilation, CPR, or other interventions continued or withheld. This gives your family clarity and relieves them of guesswork during an already difficult time.</p>
                <p className="mt-4">Illinois law recognizes living wills, and most hospitals and care facilities will honor them when they meet statutory requirements. Your healthcare power of attorney and living will work together: your agent makes decisions within the boundaries you've set.</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <StarRating />
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Highly Professional and Transparent Estate Planning Service
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-4">Illinois Estate Law made the whole estate planning process so easy and stress-free. They explained everything clearly, answered all my questions, and offered a flat fee so I knew exactly what to expect.</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-gray-900">Kim</span>
              </div>
              <a
                href="https://share.google/Kt6O2VG1jlRRoNos9"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                READ FULL REVIEW ON GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Avoiding Common Will Mistakes</h2>
        <div className="h-1 w-24 bg-blue-600 mb-6 mx-auto"></div>

        <p className="text-gray-700 mb-8 max-w-4xl mx-auto text-center">Even a well-meaning will can fail if it's not drafted, signed, or maintained correctly. Illinois law sets clear requirements, and small oversights lead to big problems. Here are the most common mistakes and how a Chicago wills lawyer helps you avoid them.</p>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <AccordionItem
            title="Risks of DIY and Online Will Forms"
            isOpen={openAccordion3 === 0}
            onToggle={() => setOpenAccordion3(openAccordion3 === 0 ? null : 0)}
          >
            <p>Template wills often miss state-specific rules. Illinois has requirements for witnesses, notarization (for self-proving wills), and language that protects your plan from challenge. Generic forms may not account for blended families, special needs trusts, or coordination with other estate documents. If your will fails to meet Illinois statutory formalities, a court may treat it as invalid, leaving your estate to pass under intestacy.</p>
            <p className="mt-4">A Chicago wills lawyer tailors each document to your family and ensures compliance with Illinois law from the start.</p>
          </AccordionItem>

          <AccordionItem
            title="Problems With Outdated or Incomplete Wills"
            isOpen={openAccordion3 === 1}
            onToggle={() => setOpenAccordion3(openAccordion3 === 1 ? null : 1)}
          >
            <p>An old will can name a deceased beneficiary, an outdated executor, or a guardian who is no longer suitable. It may fail to account for new children, grandchildren, or changes in your financial situation. Illinois law provides some backstops (like lapse statutes for predeceased beneficiaries), but they may not match your intent. Review your will after every major life event and at least once every three to five years.</p>
          </AccordionItem>

          <AccordionItem
            title="Signing and Witnessing Mistakes Under Illinois Law"
            isOpen={openAccordion3 === 2}
            onToggle={() => setOpenAccordion3(openAccordion3 === 2 ? null : 2)}
          >
            <p>Illinois requires that you sign your will in the presence of two witnesses, and those witnesses must also sign in your presence. The witnesses should be disinterested (not beneficiaries under the will). You can also add a self-proving affidavit, signed before a notary, to simplify probate later. If these formalities are not met, your will may be contested or rejected by the court.</p>
            <p className="mt-4">A wills lawyer supervises the signing ceremony to ensure every step is correct and documented.</p>
          </AccordionItem>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <StarRating />
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Exceptional Probate Services with Compassionate Support
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-4">I used Illinois estate law for a probate matter for my grandfather and was very impressed. Highly recommend.</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-gray-900">Clanie</span>
              </div>
              <a
                href="https://share.google/Kt6O2VG1jlRRoNos9"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                READ FULL REVIEW ON GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">The Cook County Wills Probate Process</h2>
        <div className="h-1 w-24 bg-blue-600 mb-6 mx-auto"></div>

        <p className="text-gray-700 mb-8 max-w-4xl mx-auto text-center">When someone dies with a will in Cook County, the executor named in the will files the original document with the Circuit Court. The court reviews the will for validity, issues letters of office to the executor, and supervises the administration. Here's what that process typically looks like:</p>

        <div className="overflow-x-auto max-w-4xl mx-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Step</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">File Petition</td>
                <td className="px-6 py-4 text-sm text-gray-700">Executor files petition and will with court</td>
                <td className="px-6 py-4 text-sm text-gray-700">Within 30 days of death</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Notice to Heirs</td>
                <td className="px-6 py-4 text-sm text-gray-700">Notify all beneficiaries and heirs by mail</td>
                <td className="px-6 py-4 text-sm text-gray-700">Within 14 days of filing</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Admit Will</td>
                <td className="px-6 py-4 text-sm text-gray-700">Court admits will to probate, issues letters</td>
                <td className="px-6 py-4 text-sm text-gray-700">2-4 weeks after filing</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Inventory &amp; Appraisal</td>
                <td className="px-6 py-4 text-sm text-gray-700">File inventory of estate assets with values</td>
                <td className="px-6 py-4 text-sm text-gray-700">Within 60 days of letters</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Pay Debts &amp; Taxes</td>
                <td className="px-6 py-4 text-sm text-gray-700">Settle valid claims, file tax returns</td>
                <td className="px-6 py-4 text-sm text-gray-700">6-12 months</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Distribute Assets</td>
                <td className="px-6 py-4 text-sm text-gray-700">Transfer property to beneficiaries per will</td>
                <td className="px-6 py-4 text-sm text-gray-700">After debts/taxes settled</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Close Estate</td>
                <td className="px-6 py-4 text-sm text-gray-700">File final accounting, court discharges executor</td>
                <td className="px-6 py-4 text-sm text-gray-700">9-18 months total</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-8 max-w-4xl mx-auto text-center">If your estate is modest (under $150,000 in personal property and no real estate), your heirs may be able to use a small estate affidavit instead of formal probate, saving time and cost. A Chicago wills lawyer can review your situation and recommend the most efficient path.</p>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <StarRating />
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Outstanding Estate Planning Experience with Personal Touch
            </p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-700 mb-4">Mary made everything so simple and understandable. I finally have peace of mind knowing my family is protected. The virtual process was seamless and convenient.</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-semibold text-gray-900">Sarah M.</span>
              </div>
              <a
                href="https://share.google/Kt6O2VG1jlRRoNos9"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                READ FULL REVIEW ON GOOGLE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">FAQs About Wills in Illinois</h2>
        <div className="h-1 w-24 bg-blue-600 mb-6 mx-auto"></div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <AccordionItem
            title="What Makes a Will Valid in Illinois?"
            isOpen={openAccordion4 === 0}
            onToggle={() => setOpenAccordion4(openAccordion4 === 0 ? null : 0)}
          >
            <p>To be valid under Illinois law (755 ILCS 5/4-3), a will must be:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>In writing</li>
              <li>Signed by the testator (you) or by someone at your direction in your presence</li>
              <li>Signed by two credible witnesses in your presence</li>
            </ul>
            <p className="mt-4">You must be at least 18 years old and of sound mind. Adding a self-proving affidavit (notarized at signing) makes probate simpler later.</p>
          </AccordionItem>

          <AccordionItem
            title="Does a Will Avoid Probate?"
            isOpen={openAccordion4 === 1}
            onToggle={() => setOpenAccordion4(openAccordion4 === 1 ? null : 1)}
          >
            <p>No. A will provides instructions for probate but does not avoid it. In Illinois, estates with more than $150,000 in personal property or any real estate typically go through probate. If you want to avoid probate, consider a revocable living trust, beneficiary designations on accounts, or transfer-on-death instruments for real estate.</p>
          </AccordionItem>

          <AccordionItem
            title="How Often Should I Update My Will?"
            isOpen={openAccordion4 === 2}
            onToggle={() => setOpenAccordion4(openAccordion4 === 2 ? null : 2)}
          >
            <p>Review your will every three to five years, and always after major life events: marriage, divorce, birth or adoption of a child, death of a named beneficiary or executor, significant change in assets, or move to another state. Illinois law allows you to make small changes with a codicil (amendment) or to write a new will entirely.</p>
          </AccordionItem>

          <AccordionItem
            title="Can I Change My Will Later?"
            isOpen={openAccordion4 === 3}
            onToggle={() => setOpenAccordion4(openAccordion4 === 3 ? null : 3)}
          >
            <p>Yes. You can revoke or amend your will at any time while you're mentally competent. In Illinois, you can revoke a will by creating a new one that explicitly revokes all prior wills, by physically destroying the old will with intent to revoke, or by executing a written revocation. To make changes, you can either execute a codicil (which must be signed and witnessed like the original will) or create an entirely new will.</p>
          </AccordionItem>

          <AccordionItem
            title="Can I Just Use an Online Template?"
            isOpen={openAccordion4 === 4}
            onToggle={() => setOpenAccordion4(openAccordion4 === 4 ? null : 4)}
          >
            <p>Online templates can be helpful for simple situations, but they often miss Illinois-specific requirements and don't account for your unique family structure, assets, or goals. A template won't explain which clauses apply to your situation, how to coordinate with beneficiary designations, or how to avoid common pitfalls. For peace of mind and legal certainty, working with a Chicago wills lawyer ensures your will is valid, comprehensive, and tailored to your needs.</p>
          </AccordionItem>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Modern Estate Planning Process</h2>
        <div className="h-1 w-24 bg-blue-600 mb-6 mx-auto"></div>

        <p className="text-gray-700 mb-8 max-w-4xl mx-auto text-center">Illinois Estate Law makes estate planning accessible and affordable for Chicago families. No office visits required—complete every step online, on your schedule.</p>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          <AccordionItem
            title="100% Virtual & Convenient Planning"
            isOpen={openAccordion4 === 5}
            onToggle={() => setOpenAccordion4(openAccordion4 === 5 ? null : 5)}
          >
            <p>Schedule your consultation online, meet with Mary by video call, and sign documents electronically or via mail. Your plan is stored securely and accessible whenever you need it. Perfect for busy professionals, parents, and anyone who values flexibility.</p>
          </AccordionItem>

          <AccordionItem
            title="Transparent Flat-Fee Pricing"
            isOpen={openAccordion4 === 6}
            onToggle={() => setOpenAccordion4(openAccordion4 === 6 ? null : 6)}
          >
            <p>No hourly billing, no surprise charges. You'll know the total cost upfront. Most will packages range from $800 to $1,500 depending on complexity. Trust-based plans start at $2,500. Every package includes follow-up support and clear guidance on next steps.</p>
          </AccordionItem>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#2D3E50] to-[#4a708b] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Legacy Planning With Confidence</h2>
          <p className="text-xl text-white mb-8">
            Take the first step toward protecting your family and securing your wishes. A clear, legally sound will brings peace of mind for you and clarity for your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3123730731"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              CALL (312) 373-0731
            </a>
            <a
              href="/book-consultation/"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors text-lg"
            >
              BOOK CONSULTATION ONLINE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
