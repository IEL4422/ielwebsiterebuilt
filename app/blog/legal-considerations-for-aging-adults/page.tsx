'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';
import { CheckCircle2, AlertCircle, ChevronDown, ChevronUp, Shield, FileText, Heart } from 'lucide-react';

export default function Page() {
  const currentSlug = 'legal-considerations-for-aging-adults';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [activeTab, setActiveTab] = useState('essential');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tocItems = [
    {
      id: 'understanding-elder-law',
      title: 'Understanding Elder Law in Illinois',
      level: 2,
      numeration: '1',
    },
    {
      id: 'essential-documents-every-aging-adult-needs',
      title: 'Essential Documents Every Aging Adult Needs',
      level: 2,
      numeration: '2',
    },
    {
      id: 'wills-and-testamentary-planning',
      title: 'Wills and Testamentary Planning',
      level: 3,
      numeration: '2.1',
    },
    {
      id: 'financial-power-of-attorney',
      title: 'Financial Power of Attorney',
      level: 3,
      numeration: '2.2',
    },
    {
      id: 'healthcare-power-of-attorney',
      title: 'Healthcare Power of Attorney',
      level: 3,
      numeration: '2.3',
    },
    {
      id: 'living-will-and-advance-directives',
      title: 'Living Will and Advance Directives',
      level: 3,
      numeration: '2.4',
    },
    {
      id: 'guardianship-and-conservatorship-in-illinois',
      title: 'Guardianship and Conservatorship in Illinois',
      level: 2,
      numeration: '3',
    },
    {
      id: 'understanding-guardianship',
      title: 'Understanding Guardianship',
      level: 3,
      numeration: '3.1',
    },
    {
      id: 'conservatorship-for-financial-affairs',
      title: 'Conservatorship for Financial Affairs',
      level: 3,
      numeration: '3.2',
    },
    {
      id: 'avoiding-guardianship-through-planning',
      title: 'Avoiding Guardianship Through Planning',
      level: 3,
      numeration: '3.3',
    },
    {
      id: 'financial-planning-and-medicaid-eligibility',
      title: 'Financial Planning and Medicaid Eligibility',
      level: 2,
      numeration: '4',
    },
    {
      id: 'asset-limits-and-spend-down-strategies',
      title: 'Asset Limits and Spend-Down Strategies',
      level: 3,
      numeration: '4.1',
    },
    {
      id: 'income-requirements',
      title: 'Income Requirements',
      level: 3,
      numeration: '4.2',
    },
    {
      id: 'five-year-look-back-period',
      title: 'Five-Year Look-Back Period',
      level: 3,
      numeration: '4.3',
    },
    {
      id: 'protecting-against-financial-abuse',
      title: 'Protecting Against Financial Abuse and Exploitation',
      level: 2,
      numeration: '5',
    },
    {
      id: 'planning-for-long-term-care',
      title: 'Planning for Long-Term Care',
      level: 2,
      numeration: '6',
    },
    {
      id: 'types-of-care-available',
      title: 'Types of Care Available',
      level: 3,
      numeration: '6.1',
    },
    {
      id: 'paying-for-long-term-care',
      title: 'Paying for Long-Term Care',
      level: 3,
      numeration: '6.2',
    },
    {
      id: 'taking-action-now',
      title: 'Taking Action Now: Next Steps',
      level: 2,
      numeration: '7',
    },
  ];

  const faqs = [
    {
      question: 'When should I start planning for elder care issues?',
      answer: 'The best time to start planning is now, regardless of your age. Ideally, you should have basic estate planning documents in place by your 40s or 50s, and should review and update them every 3-5 years. For elder-specific issues like long-term care planning and Medicaid eligibility, it\'s wise to begin serious planning in your 60s or earlier if you have health concerns. Remember: you must have legal capacity to execute these documents, so waiting until a crisis occurs may be too late.'
    },
    {
      question: 'What happens if I become incapacitated without a power of attorney?',
      answer: 'Without a power of attorney, your family will need to petition the court for guardianship or conservatorship to manage your affairs. This process is expensive (typically $3,000-$10,000 or more), time-consuming (often 2-6 months), public, and requires ongoing court supervision. The court will decide who manages your affairs, which may not be the person you would have chosen. This is why having powers of attorney in place is so critical.'
    },
    {
      question: 'Can I change my power of attorney or healthcare directive after they\'re signed?',
      answer: 'Yes, as long as you have legal capacity, you can revoke or change your powers of attorney and healthcare directives at any time. Simply execute a new document that explicitly revokes the previous one, and provide copies to all relevant parties (banks, doctors, previous agents). It\'s important to review these documents regularly to ensure they still reflect your wishes and that your named agents are still appropriate choices.'
    },
    {
      question: 'How do I protect my home if I need Medicaid for nursing home care?',
      answer: 'Your primary residence is generally exempt from Medicaid\'s asset limits while you\'re alive and living there or intending to return. However, after death, Medicaid may seek estate recovery. Strategies to protect your home include: transferring it to your spouse (who can live there), establishing certain types of trusts (but beware of the 5-year look-back), or ensuring you have a caregiver child exception. These strategies must be implemented carefully and well in advance. An elder law attorney can help you navigate the complex rules.'
    },
    {
      question: 'What\'s the difference between a living will and a regular will?',
      answer: 'A regular will takes effect after death and directs how your assets are distributed. A living will (also called an advance directive) takes effect while you\'re alive but unable to communicate medical decisions. It specifies your wishes regarding life-sustaining treatment, such as whether you want to be kept on life support if you\'re in a persistent vegetative state. Both documents serve different but equally important purposes in a comprehensive estate plan.'
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-12">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <span className="text-lg">←</span>
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="mb-6">
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">June 11, 2025</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Legal Considerations for Aging Adults: Essential Planning for Your Future
              </h1>
              <p className="text-xl text-white/90 mt-6 font-['Plus_Jakarta_Sans']">
                A comprehensive guide to protecting your rights, assets, and healthcare wishes as you age
              </p>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            {/* Summary Section */}
            <div className="bg-[#f0f7ff] border-l-4 border-[#4A708B] p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-bold mb-3 mt-0">Article Summary</h3>
              <p className="mb-0">
                Aging brings unique legal challenges that require thoughtful planning and preparation. This comprehensive guide covers essential documents every aging adult needs, how to protect yourself from financial abuse, navigating Medicaid eligibility, guardianship considerations, and planning for long-term care. Learn the critical steps to protect your rights, preserve your independence, and ensure your wishes are honored.
              </p>
            </div>

            <p className="mb-6">
              Growing older is a natural part of life, but it comes with complex legal considerations that many people don't think about until it's too late. Whether you're planning for your own future or helping aging parents navigate these challenges, understanding elder law in Illinois is crucial to protecting rights, assets, and personal autonomy.
            </p>

            <p className="mb-6">
              The decisions you make today about healthcare directives, financial management, and asset protection will have lasting impacts on your quality of life and your family's wellbeing. This guide will walk you through the essential legal tools and strategies that every aging adult in Illinois should consider, helping you maintain control and dignity while planning for the unexpected.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.768129510841!2d-87.6747937!3d41.9623152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756397795444!5m2!1sen!2s"
                width="600"
                height="250"
                style={{ border: 0, borderRadius: '10px', width: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <h2 id="understanding-elder-law" className="text-3xl font-bold mt-12 mb-6">
              Understanding Elder Law in Illinois
            </h2>

            <p className="mb-6">
              Elder law is a specialized area of legal practice that focuses on the unique needs and challenges facing older adults and their families. In Illinois, elder law encompasses a wide range of issues including estate planning, healthcare decisions, guardianship, Medicaid planning, long-term care, protection from abuse and exploitation, and end-of-life planning.
            </p>

            <p className="mb-6">
              Unlike general estate planning, which focuses primarily on asset transfer after death, elder law addresses the full spectrum of legal needs that arise as people age. This includes planning for potential incapacity, managing healthcare decisions, protecting assets from long-term care costs, and ensuring quality of life is maintained even when circumstances change.
            </p>

            <p className="mb-6">
              <strong>Key areas of elder law include:</strong>
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li><strong>Incapacity Planning:</strong> Preparing legal documents that take effect if you become unable to make decisions for yourself</li>
              <li><strong>Asset Protection:</strong> Strategies to preserve wealth while qualifying for government benefits when needed</li>
              <li><strong>Healthcare Decision-Making:</strong> Legal tools to ensure your medical wishes are followed</li>
              <li><strong>Long-Term Care Planning:</strong> Preparing financially and legally for potential nursing home or assisted living needs</li>
              <li><strong>Elder Abuse Prevention:</strong> Legal protections against financial exploitation and mistreatment</li>
              <li><strong>Estate Administration:</strong> Ensuring smooth transition of assets to heirs and beneficiaries</li>
            </ul>

            <figure className="my-8">
              <Image
                src="https://i.imgur.com/Q9tWklE.png"
                alt="Legal documents representing comprehensive elder law planning"
                width={700}
                height={525}
                className="mx-auto rounded-lg"
              />
            </figure>

            <h2 id="essential-documents-every-aging-adult-needs" className="text-3xl font-bold mt-12 mb-6">
              Essential Documents Every Aging Adult Needs
            </h2>

            <p className="mb-6">
              Proper legal planning for aging requires several key documents, each serving a specific purpose in protecting your interests and ensuring your wishes are honored. These documents work together to create a comprehensive safety net that addresses both financial and healthcare concerns.
            </p>

            {/* Interactive Tabs for Documents */}
            <div className="mb-8">
              <div className="flex border-b border-gray-300 mb-6 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('essential')}
                  className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'essential'
                      ? 'border-b-2 border-[#4A708B] text-[#4A708B]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Essential Documents
                </button>
                <button
                  onClick={() => setActiveTab('healthcare')}
                  className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'healthcare'
                      ? 'border-b-2 border-[#4A708B] text-[#4A708B]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Healthcare Documents
                </button>
                <button
                  onClick={() => setActiveTab('financial')}
                  className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
                    activeTab === 'financial'
                      ? 'border-b-2 border-[#4A708B] text-[#4A708B]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Financial Documents
                </button>
              </div>

              {activeTab === 'essential' && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-[#4A708B]" />
                    Core Estate Planning Documents
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Last Will and Testament</p>
                        <p className="text-gray-700 mb-0">Specifies how your assets will be distributed after death and names guardians for minor children. Without a will, Illinois intestacy laws determine who inherits your property, which may not align with your wishes.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Revocable Living Trust</p>
                        <p className="text-gray-700 mb-0">Allows assets to avoid probate and provides management structure if you become incapacitated. Particularly valuable for older adults who want to ensure seamless financial management during any period of disability.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">HIPAA Authorization</p>
                        <p className="text-gray-700 mb-0">Permits designated individuals to access your medical records and speak with healthcare providers. Without this, even close family members may be denied information about your condition and treatment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'healthcare' && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#4A708B]" />
                    Healthcare Decision Documents
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Healthcare Power of Attorney</p>
                        <p className="text-gray-700 mb-0">Designates someone to make medical decisions on your behalf if you're unable to communicate. This person becomes your advocate, working with doctors to make treatment choices aligned with your values and preferences.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Living Will (Advance Directive)</p>
                        <p className="text-gray-700 mb-0">Documents your wishes regarding life-sustaining treatment in terminal conditions or permanent unconsciousness. Provides clear guidance to doctors and family about whether you want measures like artificial respiration, feeding tubes, or resuscitation.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Do Not Resuscitate (DNR) Order</p>
                        <p className="text-gray-700 mb-0">Medical order directing healthcare providers not to perform CPR if your heart stops or you stop breathing. Particularly important for individuals with terminal illness or those who don't want aggressive end-of-life interventions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'financial' && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-[#4A708B]" />
                    Financial Management Documents
                  </h4>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Financial Power of Attorney</p>
                        <p className="text-gray-700 mb-0">Authorizes someone to manage your financial affairs if you become unable to do so. This includes paying bills, managing investments, handling real estate transactions, and dealing with government benefits. Can be immediate or "springing" (taking effect only upon incapacity).</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Beneficiary Designations</p>
                        <p className="text-gray-700 mb-0">Forms designating who receives assets from retirement accounts, life insurance, and transfer-on-death accounts. These override your will, so keeping them updated is critical—many people forget to change beneficiaries after major life events.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Asset Inventory</p>
                        <p className="text-gray-700 mb-0">Comprehensive list of all assets, accounts, debts, and important documents with location information. Helps your family or agent manage your affairs efficiently and ensures nothing is overlooked.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <h3 id="wills-and-testamentary-planning" className="text-2xl font-bold mt-8 mb-4">
              Wills and Testamentary Planning
            </h3>

            <p className="mb-6">
              A will is the foundation of any estate plan, serving as your final legal directive for asset distribution. For aging adults, a will should be reviewed and updated regularly to reflect changes in family circumstances, asset values, and personal wishes.
            </p>

            <p className="mb-6">
              In Illinois, if you die without a valid will (called dying "intestate"), state law determines who inherits your property. This statutory distribution may not match your wishes and can create complications for blended families, unmarried partners, or situations where you want to provide for specific individuals or charities.
            </p>

            <h3 id="financial-power-of-attorney" className="text-2xl font-bold mt-8 mb-4">
              Financial Power of Attorney
            </h3>

            <p className="mb-6">
              A financial power of attorney is one of the most important documents for aging adults. This document designates someone you trust—called your "agent" or "attorney-in-fact"—to manage your financial affairs if you become unable to do so yourself.
            </p>

            <p className="mb-6">
              Your agent can handle a wide range of financial tasks, including: paying bills and managing bank accounts, filing taxes, managing investments, dealing with insurance claims, handling real estate transactions, applying for government benefits, and managing business interests.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <p className="font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Important Consideration:
              </p>
              <p className="mb-0">Choose your agent carefully. This person will have broad authority over your finances, so select someone who is trustworthy, financially responsible, and willing to serve. Many people name a spouse as primary agent and an adult child or trusted friend as backup.</p>
            </div>

            <h3 id="healthcare-power-of-attorney" className="text-2xl font-bold mt-8 mb-4">
              Healthcare Power of Attorney
            </h3>

            <p className="mb-6">
              Also known as a healthcare proxy or medical power of attorney, this document names someone to make medical decisions for you if you're incapacitated. Your healthcare agent can consent to or refuse medical treatment, choose healthcare providers and facilities, and access your medical records.
            </p>

            <p className="mb-6">
              This is separate from a living will. While a living will states your general preferences about life-sustaining treatment, a healthcare power of attorney gives your agent authority to make nuanced decisions based on your specific medical situation and values.
            </p>

            <h3 id="living-will-and-advance-directives" className="text-2xl font-bold mt-8 mb-4">
              Living Will and Advance Directives
            </h3>

            <p className="mb-6">
              A living will (also called an advance directive) specifies your wishes about life-sustaining medical treatment if you're in a terminal condition or persistent vegetative state and cannot communicate your preferences. In Illinois, this document addresses decisions about:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Mechanical ventilation (breathing machines)</li>
              <li>Artificial nutrition and hydration (feeding tubes)</li>
              <li>Cardiopulmonary resuscitation (CPR)</li>
              <li>Dialysis and other life-prolonging interventions</li>
            </ul>

            <figure className="my-8">
              <Image
                src="https://i.imgur.com/RnfQwjW.png"
                alt="Signing essential legal documents for elder care planning"
                width={700}
                height={394}
                className="mx-auto rounded-lg"
              />
            </figure>

            <h2 id="guardianship-and-conservatorship-in-illinois" className="text-3xl font-bold mt-12 mb-6">
              Guardianship and Conservatorship in Illinois
            </h2>

            <p className="mb-6">
              When an adult becomes unable to make decisions about their personal care or finances and hasn't prepared proper legal documents, family members may need to seek court-appointed guardianship or conservatorship. Understanding these legal arrangements—and how to avoid them through proper planning—is crucial.
            </p>

            <h3 id="understanding-guardianship" className="text-2xl font-bold mt-8 mb-4">
              Understanding Guardianship
            </h3>

            <p className="mb-6">
              Guardianship involves court appointment of someone to make personal decisions for an individual (called the "ward") who is found to be disabled and unable to make or communicate informed decisions. The guardian makes decisions about:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Where the ward lives</li>
              <li>Medical care and treatment</li>
              <li>Personal care and comfort</li>
              <li>Social interactions and activities</li>
            </ul>

            <p className="mb-6">
              Guardianship significantly limits a person's autonomy. The ward loses the legal right to make decisions about these matters, even if they have some capacity. This is why guardianship should be considered a last resort when other, less restrictive alternatives aren't available.
            </p>

            <h3 id="conservatorship-for-financial-affairs" className="text-2xl font-bold mt-8 mb-4">
              Conservatorship for Financial Affairs
            </h3>

            <p className="mb-6">
              A conservator is appointed by the court to manage the financial affairs and property of a person who is unable to manage their own finances. The conservator's duties include:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Managing assets and investments</li>
              <li>Paying bills and managing income</li>
              <li>Filing tax returns</li>
              <li>Accounting to the court annually</li>
              <li>Obtaining court approval for major financial decisions</li>
            </ul>

            <figure className="my-8">
              <Image
                src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Courtroom.avif"
                alt="Courtroom where guardianship and conservatorship cases are heard"
                width={1024}
                height={576}
                className="mx-auto rounded-lg"
              />
            </figure>

            <h3 id="avoiding-guardianship-through-planning" className="text-2xl font-bold mt-8 mb-4">
              Avoiding Guardianship Through Planning
            </h3>

            <p className="mb-6">
              The best way to avoid guardianship is through proactive planning while you still have capacity. Properly executed powers of attorney for healthcare and finances can usually eliminate the need for court-appointed guardianship. Other strategies include:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Creating a fully-funded revocable living trust</li>
              <li>Designating representative payees for Social Security</li>
              <li>Adding trusted family members to bank accounts</li>
              <li>Naming beneficiaries on all transfer-on-death accounts</li>
            </ul>

            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Power of Attorney</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">Guardianship/Conservatorship</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Who Chooses Agent</td>
                    <td className="border border-gray-300 px-4 py-2">You choose your agent</td>
                    <td className="border border-gray-300 px-4 py-2">Court appoints guardian/conservator</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Cost</td>
                    <td className="border border-gray-300 px-4 py-2">Low (document preparation fees)</td>
                    <td className="border border-gray-300 px-4 py-2">High ($3,000-$10,000+ plus ongoing costs)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Privacy</td>
                    <td className="border border-gray-300 px-4 py-2">Private document</td>
                    <td className="border border-gray-300 px-4 py-2">Public court proceeding</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Court Supervision</td>
                    <td className="border border-gray-300 px-4 py-2">No ongoing court involvement</td>
                    <td className="border border-gray-300 px-4 py-2">Annual accountings and court reports required</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Timeline</td>
                    <td className="border border-gray-300 px-4 py-2">Agent can act immediately</td>
                    <td className="border border-gray-300 px-4 py-2">2-6 months court process</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Flexibility</td>
                    <td className="border border-gray-300 px-4 py-2">You define scope of authority</td>
                    <td className="border border-gray-300 px-4 py-2">Court determines authority; major decisions need approval</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="financial-planning-and-medicaid-eligibility" className="text-3xl font-bold mt-12 mb-6">
              Financial Planning and Medicaid Eligibility
            </h2>

            <p className="mb-6">
              For many aging adults, the cost of long-term care is one of the greatest financial concerns. Medicaid provides crucial coverage for nursing home care and certain home and community-based services, but qualifying requires careful planning due to strict asset and income limits.
            </p>

            <h3 id="asset-limits-and-spend-down-strategies" className="text-2xl font-bold mt-8 mb-4">
              Asset Limits and Spend-Down Strategies
            </h3>

            <p className="mb-6">
              In Illinois, Medicaid eligibility for long-term care requires that countable assets not exceed $2,000 for an individual ($3,000 for a couple). However, certain assets are exempt from this calculation:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Your primary residence (with equity limits)</li>
              <li>One vehicle</li>
              <li>Personal belongings and household items</li>
              <li>Burial plots and prepaid funeral arrangements up to certain limits</li>
              <li>Life insurance with face value under $1,500</li>
            </ul>

            <p className="mb-6">
              If your assets exceed these limits, you may need to "spend down" to qualify. Acceptable spend-down strategies include: paying off debt, making home improvements, purchasing exempt assets, and prepaying funeral expenses. Note that simply giving away assets to family members is not a permissible spend-down strategy due to the look-back period.
            </p>

            <h3 id="income-requirements" className="text-2xl font-bold mt-8 mb-4">
              Income Requirements
            </h3>

            <p className="mb-6">
              Medicaid also considers income when determining eligibility. If you're applying for nursing home care, most of your income will go toward your cost of care, with Medicaid covering the remaining costs. Illinois allows you to keep a small personal needs allowance (currently $30 per month) for personal expenses.
            </p>

            <p className="mb-6">
              For married couples, special spousal protections exist to ensure the community spouse (the one not in the nursing home) can maintain a minimum income level and retain sufficient resources.
            </p>

            <h3 id="five-year-look-back-period" className="text-2xl font-bold mt-8 mb-4">
              Five-Year Look-Back Period
            </h3>

            <p className="mb-6">
              Perhaps the most important Medicaid rule to understand is the five-year look-back period. When you apply for Medicaid long-term care benefits, the state reviews all financial transactions from the previous five years. Any gifts or transfers for less than fair market value during this period can result in a penalty period during which you're ineligible for Medicaid.
            </p>

            <p className="mb-6">
              This is why Medicaid planning must begin well before you need care. Transfers made more than five years before application aren't counted, which means early planning can help preserve assets for your family while still ensuring you'll qualify for benefits when needed.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="font-semibold mb-2">Professional Guidance is Essential</p>
              <p className="mb-0">Medicaid planning is complex, and mistakes can be costly. Working with an experienced elder law attorney ensures you navigate these rules correctly and implement strategies that protect your assets while maintaining eligibility for necessary care.</p>
            </div>

            <h2 id="protecting-against-financial-abuse" className="text-3xl font-bold mt-12 mb-6">
              Protecting Against Financial Abuse and Exploitation
            </h2>

            <p className="mb-6">
              Financial exploitation of older adults is a growing problem in Illinois and across the nation. Seniors are often targeted by scammers, dishonest caregivers, and unfortunately, sometimes even family members. Protecting yourself requires awareness, vigilance, and proactive safeguards.
            </p>

            <p className="mb-6">
              <strong>Common forms of elder financial exploitation include:</strong>
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li>Unauthorized withdrawals from bank accounts</li>
              <li>Forged signatures on checks or financial documents</li>
              <li>Coercion to change wills, trusts, or beneficiary designations</li>
              <li>Investment scams and fraudulent schemes</li>
              <li>Identity theft and credit card fraud</li>
              <li>Misuse of power of attorney authority</li>
            </ul>

            <p className="mb-6">
              <strong>Protection strategies include:</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Regular Monitoring
                </h4>
                <p className="text-sm mb-0">Review bank and credit card statements monthly for unauthorized transactions. Set up alerts for large withdrawals or unusual activity.</p>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Fraud Alerts
                </h4>
                <p className="text-sm mb-0">Place fraud alerts with credit bureaus. Consider freezing credit if you're not actively applying for credit.</p>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Education and Awareness
                </h4>
                <p className="text-sm mb-0">Learn to recognize common scams: fake IRS calls, lottery schemes, romance scams, and phishing emails. Never give personal information to unsolicited callers.</p>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Trusted Oversight
                </h4>
                <p className="text-sm mb-0">Involve a trusted family member or friend in financial matters. Consider naming a co-agent on powers of attorney or requiring dual signatures for large transactions.</p>
              </div>
            </div>

            <h2 id="planning-for-long-term-care" className="text-3xl font-bold mt-12 mb-6">
              Planning for Long-Term Care
            </h2>

            <p className="mb-6">
              Most people will need some form of long-term care as they age. Planning for these needs—both financially and legally—is a critical component of elder planning that many people overlook until a crisis occurs.
            </p>

            <h3 id="types-of-care-available" className="text-2xl font-bold mt-8 mb-4">
              Types of Care Available
            </h3>

            <p className="mb-6">
              Long-term care exists on a spectrum, from minimal assistance to comprehensive medical care:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li><strong>In-Home Care:</strong> Services brought to your residence, ranging from occasional help with housekeeping to 24-hour skilled nursing</li>
              <li><strong>Adult Day Programs:</strong> Daytime supervision and activities for seniors who live at home but need oversight during working hours</li>
              <li><strong>Assisted Living Facilities:</strong> Residential communities providing help with daily activities while maintaining independence</li>
              <li><strong>Memory Care Units:</strong> Specialized facilities for those with Alzheimer's or other forms of dementia</li>
              <li><strong>Nursing Homes:</strong> 24-hour skilled nursing care for those with significant medical needs</li>
            </ul>

            <figure className="my-8">
              <Image
                src="https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Assisted-living-facility.avif"
                alt="Modern assisted living facility providing care for aging adults"
                width={1024}
                height={576}
                className="mx-auto rounded-lg"
              />
            </figure>

            <h3 id="paying-for-long-term-care" className="text-2xl font-bold mt-8 mb-4">
              Paying for Long-Term Care
            </h3>

            <p className="mb-6">
              Long-term care is expensive, with nursing home costs in Illinois averaging $7,000-$10,000 per month or more. Few people can afford these costs from personal savings alone. Funding options include:
            </p>

            <ul className="list-disc pl-8 mb-6 space-y-2">
              <li><strong>Personal Savings:</strong> Most people start by paying privately until assets are spent down</li>
              <li><strong>Long-Term Care Insurance:</strong> Policies purchased before you need care can cover significant costs, but premiums are expensive</li>
              <li><strong>Medicaid:</strong> Covers nursing home care and some home care for those who meet financial eligibility requirements</li>
              <li><strong>Veterans Benefits:</strong> VA Aid and Attendance benefits provide additional income for eligible veterans and surviving spouses</li>
              <li><strong>Medicare:</strong> Limited coverage for skilled nursing facility stays (up to 100 days following hospitalization) but does not cover long-term custodial care</li>
            </ul>

            <h2 id="taking-action-now" className="text-3xl font-bold mt-12 mb-6">
              Taking Action Now: Next Steps
            </h2>

            <p className="mb-6">
              The legal considerations for aging adults can seem overwhelming, but taking action now—while you have capacity and time to plan—makes all the difference. Proper planning protects your autonomy, preserves your assets, and provides peace of mind for both you and your family.
            </p>

            <p className="mb-6">
              <strong>Essential steps to take:</strong>
            </p>

            <ol className="list-decimal pl-8 mb-6 space-y-2">
              <li>Schedule a consultation with an experienced elder law attorney to assess your current situation and identify planning needs</li>
              <li>Gather important documents: list of assets and debts, insurance policies, existing legal documents, and information about current healthcare providers</li>
              <li>Have honest conversations with family members about your wishes and values regarding healthcare and end-of-life decisions</li>
              <li>Review and update existing estate planning documents if they're more than 3-5 years old or if major life changes have occurred</li>
              <li>Create any missing essential documents, particularly powers of attorney and healthcare directives</li>
              <li>Explore long-term care insurance options if you're still young enough to qualify for affordable premiums</li>
              <li>Begin Medicaid planning if you have significant assets and anticipate needing nursing home care in the future</li>
            </ol>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors"
                    >
                      <span className="font-semibold pr-4">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-white">
                        <p className="mb-0">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-[#4A708B] text-white p-8 rounded-lg my-12">
              <h2 className="text-2xl font-bold mb-4 mt-0">Protect Your Future Today</h2>
              <p className="mb-4">
                Aging brings unique legal challenges, but with proper planning, you can maintain control over your healthcare decisions, protect your assets, and ensure your wishes are honored. The documents and strategies discussed in this guide work together to create a comprehensive safety net that addresses both immediate and long-term needs.
              </p>
              <p className="mb-0">
                Don't wait for a crisis to begin planning. By taking action now, you protect not only your own interests but also spare your family from difficult decisions and potential conflicts during already stressful times. An experienced elder law attorney can help you navigate these complex issues and create a plan tailored to your unique circumstances and goals.
              </p>
            </div>

            <p className="mb-6">
              If you're ready to take the next step in protecting your future or helping an aging parent with legal planning, contact Illinois Estate Law today. Attorney Mary Liberty understands the unique challenges facing aging adults in Illinois and can help you create a comprehensive plan that provides security and peace of mind. Call <a href="tel:3123730731" rel="nofollow" className="text-[#4A708B] hover:opacity-80">(312) 373-0731</a> or <a href="/contact/" className="text-[#4A708B] hover:opacity-80">schedule a consultation online</a> to get started.
            </p>

            <BlogNavigation
              previousPost={previous ? { title: previous.title, url: previous.url } : undefined}
              nextPost={next ? { title: next.title, url: next.url } : undefined}
            />

            <RelatedArticles
              articles={relatedPosts.map(post => ({
                title: post.title,
                url: post.url,
                date: post.date,
                excerpt: post.excerpt,
              }))}
            />
          </article>

          {/* CTA Section */}
          <div className="bg-[#f5f5f5] rounded-lg p-8 my-12">
            <div className="md:sticky md:top-[200px]">
              <p className="text-2xl font-bold mb-4">
                Secure Your Family&apos;s Future from Home
              </p>
              <p className="text-base mb-6">
                Professional legal guidance without leaving your house.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="tel:3123730731"
                  className="inline-block px-6 py-3 bg-[#4a708b] text-white font-bold rounded hover:opacity-90 transition"
                >
                  CALL (312) 373-0731
                </a>
                <Link
                  href="/book-consultation/"
                  className="inline-block px-6 py-3 bg-[#4a708b] text-white font-bold rounded hover:opacity-90 transition"
                >
                  BOOK ONLINE
                </Link>
              </div>
            </div>
          </div>

          {/* Share Post Section */}
          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-bold text-sm">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/legal-considerations-for-aging-adults/')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/legal-considerations-for-aging-adults/')}&text=${encodeURIComponent('Legal Considerations for Aging Adults')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/legal-considerations-for-aging-adults/')}&title=${encodeURIComponent('Legal Considerations for Aging Adults')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4a708b] flex items-center justify-center text-white hover:opacity-80 transition"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <BlogContactForm />
        </div>
      </div>
    </>
  );
}
