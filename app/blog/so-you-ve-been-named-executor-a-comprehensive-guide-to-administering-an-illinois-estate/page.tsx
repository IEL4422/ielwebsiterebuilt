'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { CheckCircle2, AlertCircle, Clock, FileText } from 'lucide-react';

export default function Page() {
  const currentSlug = 'so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'understanding-authority',
      title: 'Understanding Your Legal Authority',
      level: 2,
      numeration: '1',
    },
    {
      id: 'first-week',
      title: 'First Week Checklist',
      level: 2,
      numeration: '2',
    },
    {
      id: 'notifying-parties',
      title: 'Notifying Heirs and Creditors',
      level: 2,
      numeration: '3',
    },
    {
      id: 'inventory-assets',
      title: 'Inventorying and Safeguarding Assets',
      level: 2,
      numeration: '4',
    },
    {
      id: 'paying-debts',
      title: 'Paying Debts, Taxes, and Expenses',
      level: 2,
      numeration: '5',
    },
    {
      id: 'accounting',
      title: 'Accounting and Transparency',
      level: 2,
      numeration: '6',
    },
    {
      id: 'distributing',
      title: 'Distributing and Closing the Estate',
      level: 2,
      numeration: '7',
    },
    {
      id: 'pitfalls',
      title: 'Common Pitfalls and Solutions',
      level: 2,
      numeration: '8',
    },
    {
      id: 'timeline',
      title: 'How Long Will This Take?',
      level: 2,
      numeration: '9',
    },
    {
      id: 'fees',
      title: 'Understanding Executor Fees',
      level: 2,
      numeration: '10',
    },
    {
      id: 'hiring-help',
      title: 'When to Hire Professional Help',
      level: 2,
      numeration: '11',
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "So You've Been Named Executor: A Comprehensive Guide to Administering an Illinois Estate",
    "description": "Complete guide to serving as an executor or administrator of an Illinois estate. Learn about legal responsibilities, timelines, required forms, and step-by-step processes for probate administration.",
    "image": "https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/executor-guide.png",
    "datePublished": "2026-01-19T00:00:00+00:00",
    "dateModified": "2026-01-27T00:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": "Mary Liberty",
      "url": "https://www.illinoisestatelaw.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Illinois Estate Law",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.illinoisestatelaw.com/logoheader3.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.illinoisestatelaw.com/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="min-h-screen bg-white">
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
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']" dateTime="2026-01-19">
                  Jan 19, 2026
                </time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                So You&apos;ve Been Named Executor: A Comprehensive Guide to Administering an Illinois Estate
              </h1>
            </div>
          </div>
        </section>

        <section className="bg-white py-4">
          <div className="mx-auto max-w-[1140px] px-5 xl:px-0">
            <div className="max-w-4xl">
              <BlogSummary summary="Being named as an executor or administrator of an estate is both an honor and a significant responsibility. This comprehensive guide walks you through every step of administering an Illinois estate, from receiving your Letters of Office to final distribution and discharge. Learn the legal requirements, timelines, common pitfalls, and best practices for fulfilling your fiduciary duties." />
            </div>
          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <article className="flex-1 prose prose-lg max-w-none">
              <TableOfContents items={tocItems} />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-800 mb-0">
                  <strong>Quick Summary:</strong> Serving as an <strong>executor</strong> (named in a will) or <strong>administrator</strong> (appointed when there&apos;s no will) means you&apos;re legally responsible for settling someone&apos;s estate. This involves collecting assets, paying debts and taxes, and distributing what remains to heirs—all while following the <strong>Illinois Probate Act of 1975</strong> and satisfying court requirements.
                </p>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                The role of executor or administrator is critical in ensuring that a deceased person&apos;s wishes are honored and their affairs are properly settled. In Illinois, this process is governed by specific statutes and court procedures that can seem overwhelming at first. However, with the right knowledge and preparation, you can successfully navigate this responsibility while protecting yourself from personal liability and ensuring heirs receive their rightful inheritance.
              </p>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                This guide provides a detailed roadmap of the entire estate administration process, from your initial appointment through final discharge. Whether you&apos;re dealing with a simple estate or a complex one involving real estate, business interests, and substantial assets, these principles and procedures apply. Let&apos;s begin by understanding the legal foundation of your authority.
              </p>

              <h2 id="understanding-authority" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                1. Understanding Your Legal Authority
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Your authority to act on behalf of the estate comes from the court through official documents called <strong>Letters of Office</strong> (also known as Letters Testamentary for executors or Letters of Administration for administrators). These court-stamped documents function like a power of attorney for the deceased person&apos;s property, giving you the legal right to access accounts, sell assets, and make decisions on behalf of the estate.
              </p>

              <Tabs defaultValue="executor" className="w-full mb-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="executor">Executor (With Will)</TabsTrigger>
                  <TabsTrigger value="administrator">Administrator (No Will)</TabsTrigger>
                </TabsList>
                <TabsContent value="executor" className="mt-4 p-6 border rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Executor Responsibilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Named in a valid will and confirmed by the judge</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Must follow the terms and wishes specified in the will</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Can typically act independently if the will permits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">May be entitled to compensation as specified in the will</span>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="administrator" className="mt-4 p-6 border rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Administrator Responsibilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Appointed by the court using statutory priority list</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Must distribute estate according to Illinois intestacy laws</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Often requires more court oversight than executor</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="font-['Plus_Jakarta_Sans'] text-base">Entitled to reasonable compensation determined by statute</span>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Independent vs. Supervised Administration</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-gray-700 mb-4">
                  Illinois offers two types of probate administration, and understanding the difference is crucial:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2 text-green-700">Independent Administration</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                      The default if the will requests it or all heirs consent. You can act without constant court hearings, making decisions and distributions with minimal judicial oversight. This is faster and less expensive.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2 text-orange-700">Supervised Administration</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                      Required when there&apos;s no will provision for independent administration, when heirs don&apos;t consent, or when ordered by the court. Nearly every action requires judge approval, making the process longer and more costly.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="first-week" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                2. First Week Checklist: Essential Tasks
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                The first week after being appointed is critical. You need to establish the legal and financial infrastructure that will support the entire administration process. Missing these initial steps can cause delays and complications later.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-[#4A708B] text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Priority Task</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Why It Matters</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        <strong>Order certified death certificates</strong>
                        <div className="text-sm text-gray-600 mt-1">Get at least 10 copies</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Banks, insurance companies, title companies, and government agencies all require original certificates
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4" />
                          Days 1-2
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3">
                        <strong>Apply for Estate EIN</strong>
                        <div className="text-sm text-gray-600 mt-1">Free online at IRS.gov</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Required for estate tax returns and bank accounts. Never use your personal SSN or mix funds
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4" />
                          Days 2-3
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        <strong>Open estate bank account</strong>
                        <div className="text-sm text-gray-600 mt-1">Dedicated checking account</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        Creates a clear audit trail for the court and heirs; prevents commingling of personal and estate funds
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4" />
                          Days 3-5
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3">
                        <strong>Secure property and assets</strong>
                        <div className="text-sm text-gray-600 mt-1">Change locks, update insurance</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        You&apos;re personally liable if assets are lost, stolen, or damaged due to negligence
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4" />
                          Days 1-7
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">
                        <strong>Gather important documents</strong>
                        <div className="text-sm text-gray-600 mt-1">Deeds, titles, financial statements</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        You&apos;ll need these for the inventory, creditor notifications, and tax filings
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-sm">
                          <Clock className="w-4 h-4" />
                          Week 1
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Pro Tip: Keep Meticulous Records from Day One</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-0">
                      Create a dedicated filing system (physical and digital) for all estate-related documents. Track every penny that comes in or goes out, keep receipts for all expenses over $75, and maintain a log of your time and mileage. These records will be essential for your final accounting and can protect you from heir disputes.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="notifying-parties" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                3. Notifying Heirs and Creditors
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Illinois law requires specific notifications to protect the rights of heirs and creditors. Failure to provide proper notice can expose you to personal liability or delay the estate closing.
              </p>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="heirs">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Notifying Heirs and Legatees
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Timeline:</strong> Within 14 days of receiving your Letters of Office
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Who to notify:</strong> All heirs (people who inherit under intestacy laws) and legatees (people named in the will)
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Method:</strong> Certified mail, return receipt requested
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>What to include:</strong> Copy of the will (if any), notice of your appointment, statement of their rights to representation, and estimated timeline
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-0">
                          <strong>Important:</strong> Even if family relationships are strained, you must notify all legal heirs. Failing to do so can result in the court invalidating your actions.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="creditors">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-orange-600" />
                      Notifying Creditors (Known and Unknown)
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Known Creditors</h4>
                        <p className="font-['Plus_Jakarta_Sans'] text-base mb-2">
                          Send direct written notice to any creditor you know about (credit cards, medical providers, utility companies, etc.)
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                          Timeline: As soon as reasonably possible, typically within 30 days
                        </p>
                      </div>
                      <div>
                        <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Unknown Creditors</h4>
                        <p className="font-['Plus_Jakarta_Sans'] text-base mb-2">
                          Publish notice in a local newspaper once a week for three consecutive weeks
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                          Timeline: Must begin within 30 days of appointment
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] font-bold mb-2">6-Month Claims Period</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-0">
                          After proper notice, creditors have <strong>six months</strong> from the first publication date to file claims. This is why you should wait before making distributions—paying heirs too early can leave you personally liable for unpaid debts.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="government">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-green-600" />
                      Notifying Government Agencies
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        Don&apos;t forget to notify:
                      </p>
                      <ul className="space-y-2 pl-6">
                        <li className="font-['Plus_Jakarta_Sans'] text-base">✓ Social Security Administration (stop benefits, apply for survivor benefits)</li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">✓ Illinois Department of Revenue (estate tax purposes)</li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">✓ Medicare/Medicaid (potential recovery claims)</li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">✓ Veterans Affairs (if applicable)</li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">✓ Post Office (mail forwarding)</li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">✓ DMV (vehicle titles)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="inventory-assets" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                4. Inventorying and Safeguarding Assets
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Within <strong>60 days</strong> of your appointment, you must prepare and file a verified inventory listing all probate assets and their date-of-death values. This is a sworn document, so accuracy is critical. Missing or undervaluing assets can expose you to liability; inflating values can increase tax burdens unnecessarily.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-4 text-green-700">Probate Assets (Include in Inventory)</h3>
                  <ul className="space-y-2">
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Real estate owned solely by decedent</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Bank accounts without beneficiaries</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Investment accounts in decedent&apos;s name</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Vehicles and boats</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Personal property and collectibles</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Business interests (sole proprietorships)</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Debts owed to the decedent</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-4 text-red-700">Non-Probate Assets (Exclude from Inventory)</h3>
                  <ul className="space-y-2">
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Life insurance with named beneficiaries</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Retirement accounts (IRA, 401k) with beneficiaries</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Property in a living trust</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Joint tenancy property (passes to survivor)</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Transfer-on-death accounts</li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm">• Payable-on-death bank accounts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Asset Safeguarding Strategies</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Real Estate Protection
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 pl-7">
                      Change locks immediately, secure vacant property insurance, arrange for regular inspections, maintain landscaping, winterize if necessary, and consider security systems for valuable properties.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Financial Account Management
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 pl-7">
                      Collect all bank and investment statements, transfer funds to the estate account as soon as possible, cancel automatic payments and debits, and monitor accounts for unauthorized transactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Personal Property Security
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 pl-7">
                      Photograph valuable items, store important documents in a safe location, secure jewelry and collectibles, inventory household contents, and consider climate-controlled storage for sensitive items.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Digital Asset Protection
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 pl-7">
                      Locate online accounts and passwords, secure email accounts, download important digital files, cancel subscriptions, and protect cryptocurrency wallets and digital intellectual property.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="paying-debts" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                5. Paying Debts, Taxes, and Expenses
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                One of your most important duties—and one that carries personal liability if done incorrectly—is paying the estate&apos;s debts in the proper order. Illinois law establishes a strict priority system. If you pay a low-priority creditor before a high-priority one, and there isn&apos;t enough money left, you could be personally responsible for making up the difference.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-[#2D3E50] text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Priority Level</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Type of Debt</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">1st Priority</td>
                      <td className="border border-gray-300 px-4 py-3">Funeral and burial expenses</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Funeral home fees, burial plot, headstone, memorial service costs (reasonable amounts)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">2nd Priority</td>
                      <td className="border border-gray-300 px-4 py-3">Estate administration costs</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Attorney fees, court filing fees, executor compensation, appraisal fees, accounting costs</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-orange-600">3rd Priority</td>
                      <td className="border border-gray-300 px-4 py-3">Federal and state taxes</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Income tax, estate tax, property tax, unpaid employment taxes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-yellow-600">4th Priority</td>
                      <td className="border border-gray-300 px-4 py-3">Secured debts</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Mortgages, car loans, home equity lines of credit</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-blue-600">5th Priority</td>
                      <td className="border border-gray-300 px-4 py-3">General unsecured debts</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Credit cards, medical bills, personal loans, utility bills</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="estate-tax">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    Understanding Illinois Estate Tax
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        Illinois has an estate tax separate from the federal estate tax. Key facts:
                      </p>
                      <ul className="space-y-2 pl-6">
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>Exemption amount:</strong> $4 million (2024-2025)
                        </li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>Tax rates:</strong> Progressive rates from 0.8% to 16%
                        </li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>Filing deadline:</strong> 9 months after death (extensions available)
                        </li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>What&apos;s included:</strong> All assets owned at death, including non-probate assets
                        </li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">Important Note:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-0">
                          Even if the estate is below the exemption, you may still need to file a return to claim the exemption. Use our <a href="/illinois-estate-tax-calculator" className="text-blue-600 hover:underline">Illinois Estate Tax Calculator</a> for a preliminary estimate.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="federal-tax">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    Federal Estate Tax Considerations
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        The federal estate tax has a much higher exemption than Illinois:
                      </p>
                      <ul className="space-y-2 pl-6">
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>Exemption amount:</strong> $13.61 million (2024) / $13.92 million (2025)
                        </li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>Tax rate:</strong> 40% on amounts above exemption
                        </li>
                        <li className="font-['Plus_Jakarta_Sans'] text-base">
                          <strong>Portability:</strong> Surviving spouses can use deceased spouse&apos;s unused exemption
                        </li>
                      </ul>
                      <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                        Most estates won&apos;t owe federal estate tax, but may still owe Illinois estate tax. Always consult a tax professional for estates approaching these thresholds.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="income-tax">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    Income Tax Returns (Estate and Decedent)
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-4">
                      <p className="font-['Plus_Jakarta_Sans'] text-base mb-4">
                        You&apos;ll typically need to file two types of income tax returns:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Final Individual Return (Form 1040)</h4>
                          <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                            Covers income earned by the decedent from January 1 through the date of death. Due on the normal tax deadline (April 15 of the following year).
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                          <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Estate Income Return (Form 1041)</h4>
                          <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                            Required if estate earns more than $600 in income during administration. Covers income generated by estate assets after death.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="accounting" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                6. Accounting and Transparency
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Even in independent administration, any heir can demand a detailed accounting of how you&apos;ve managed the estate. More importantly, you&apos;ll need to prepare a final accounting when closing the estate. Maintaining accurate records from day one makes this process much easier and protects you from claims of mismanagement.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <FileText className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-3">Financial Records</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ All bank statements</li>
                    <li>✓ Investment account records</li>
                    <li>✓ Receipts for expenses</li>
                    <li>✓ Bills and invoices paid</li>
                    <li>✓ Check registers and deposits</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                  <Clock className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-3">Time Records</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Date and time of activities</li>
                    <li>✓ Description of work performed</li>
                    <li>✓ Hours spent on each task</li>
                    <li>✓ Mileage for estate business</li>
                    <li>✓ Phone calls and meetings</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                  <FileText className="w-10 h-10 text-purple-600 mb-4" />
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-3">Legal Documents</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Death certificate</li>
                    <li>✓ Letters of Office</li>
                    <li>✓ Will and amendments</li>
                    <li>✓ Deeds and titles</li>
                    <li>✓ Court orders and filings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-3">Final Accounting Requirements</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-base mb-4">
                  When you&apos;re ready to close the estate, you&apos;ll file either a <strong>Verified Report of Independent Representative</strong> (for independent estates) or a <strong>Petition to Approve Final Account and Distribute</strong> (for supervised estates). This document must include:
                </p>
                <ul className="space-y-2 pl-6">
                  <li className="font-['Plus_Jakarta_Sans'] text-base">• Complete inventory of all assets received</li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">• Income earned during administration</li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">• All expenses and debts paid</li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">• Proposed distribution to heirs/beneficiaries</li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">• Your executor fee request</li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">• Supporting documentation for major transactions</li>
                </ul>
              </div>

              <h2 id="distributing" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                7. Distributing and Closing the Estate
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                After paying all debts, taxes, and expenses, you&apos;re ready to distribute the remaining assets to heirs and beneficiaries. However, don&apos;t rush this process. Premature distribution is one of the biggest mistakes executors make.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Warning: Wait for the Claims Period to Close</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-0">
                      Don&apos;t distribute significant assets until the six-month creditor claims period has passed. If a valid creditor claim comes in after you&apos;ve distributed assets, you could be personally liable for the debt. Always retain a reasonable reserve (2-5% of estate value) for unexpected bills or late-arriving claims.
                    </p>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="real-estate" className="w-full mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
                  <TabsTrigger value="personal-property">Personal Property</TabsTrigger>
                  <TabsTrigger value="financial">Financial Assets</TabsTrigger>
                </TabsList>
                <TabsContent value="real-estate" className="mt-4 p-6 border rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Transferring Real Estate</h3>
                  <div className="space-y-4">
                    <p className="font-['Plus_Jakarta_Sans'] text-base">
                      Real estate transfers require special attention and proper legal documentation:
                    </p>
                    <ul className="space-y-3 pl-6">
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Executor&apos;s Deed:</strong> The legal document transferring title from the estate to the beneficiary
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Title Search:</strong> Ensure clear title before transfer; resolve any liens or encumbrances
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Recording:</strong> Must be recorded with the county recorder to be legally effective
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Property Tax:</strong> Pay all outstanding property taxes before transfer
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Transfer Tax:</strong> Some counties require transfer tax payment
                      </li>
                    </ul>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                        <strong>Selling Estate Property:</strong> If the will authorizes it or all heirs consent, you can sell real estate and distribute the proceeds. This often makes sense when property needs repairs, when heirs don&apos;t want to co-own, or when cash is needed to pay debts.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="personal-property" className="mt-4 p-6 border rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Distributing Personal Property</h3>
                  <div className="space-y-4">
                    <p className="font-['Plus_Jakarta_Sans'] text-base">
                      Personal property distribution requires careful attention to the will&apos;s terms and family dynamics:
                    </p>
                    <ul className="space-y-3 pl-6">
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Specific Bequests:</strong> Items specifically mentioned in the will go to named beneficiaries first
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Personal Property Memorandum:</strong> Some wills reference a separate list for personal items
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Division Methods:</strong> Heirs can take turns choosing, draw lots, or agree to any fair method
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Appraisals:</strong> Get professional appraisals for valuable items (jewelry, art, collectibles)
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Documentation:</strong> Have recipients sign receipts acknowledging what they received
                      </li>
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                        <strong>Family Heirlooms Tip:</strong> Items with sentimental value often cause the most conflict. Consider having a family meeting to discuss personal property division before taking action. Sometimes a neutral mediator can help resolve disputes.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="financial" className="mt-4 p-6 border rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Distributing Financial Assets</h3>
                  <div className="space-y-4">
                    <p className="font-['Plus_Jakarta_Sans'] text-base">
                      Cash and investment distributions are typically the easiest but require proper documentation:
                    </p>
                    <ul className="space-y-3 pl-6">
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Distribution Receipts:</strong> Every beneficiary must sign a receipt acknowledging their distribution
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Tax Considerations:</strong> Inform beneficiaries of any tax implications (e.g., retirement account distributions)
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Partial Distributions:</strong> You can make partial distributions before final closing if prudent
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>In-Kind vs. Cash:</strong> Investment accounts can be distributed as-is or liquidated and distributed as cash
                      </li>
                      <li className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>Final Reserve:</strong> Hold back 2-5% for unexpected expenses until court approves closing
                      </li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Closing the Estate</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-base mb-4">
                  After making final distributions, you&apos;ll petition the court for discharge:
                </p>
                <ol className="space-y-3 pl-6">
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>File your final accounting</strong> showing all receipts and disbursements
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Obtain receipts and releases</strong> from all beneficiaries
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>File closing documents</strong> with the court
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Attend hearing</strong> (if required by court)
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Receive Order of Discharge</strong> from the judge
                  </li>
                </ol>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600 mt-4">
                  The Order of Discharge formally ends your duties and releases you from further liability for the estate (except for fraud or willful misconduct).
                </p>
              </div>

              <h2 id="pitfalls" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                8. Common Pitfalls and How to Avoid Them
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                Learn from others&apos; mistakes. Here are the most common errors executors make and practical solutions to avoid them:
              </p>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="pitfall-1">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Mixing Personal and Estate Funds
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Using your personal account for estate transactions creates accounting nightmares and can expose you to liability.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Always use a separate estate bank account with its own EIN. Never deposit estate checks into your personal account or pay estate bills from personal funds (even temporarily).
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pitfall-2">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Paying Creditors Out of Order
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Paying low-priority debts before higher-priority ones can make you personally liable if funds run out.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Create a spreadsheet of all claims organized by priority level. Don&apos;t pay any general creditors until you&apos;re certain all funeral costs, administration expenses, and taxes are covered.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pitfall-3">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Distributing Assets Too Early
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Giving assets to heirs before the claims period closes can leave you personally responsible for late-appearing debts.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Wait until at least six months after publication of creditor notice. Keep a reasonable reserve (2-5% of estate value) until the court approves your final accounting and issues the discharge order.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pitfall-4">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Ignoring Digital Assets
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Overlooking online accounts, subscriptions, cryptocurrency, and digital intellectual property can cost the estate money and value.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Review email for clues about online accounts. Cancel subscriptions promptly. Check for cryptocurrency wallets, PayPal accounts, online seller accounts, domain names, and social media profiles. Use password managers if available.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pitfall-5">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Failing to Maintain Property Insurance
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Standard homeowners insurance may not cover vacant property. A fire or theft could devastate the estate&apos;s value.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Call the insurance company within days of death. Convert to vacant property insurance if needed. Consider increasing liability coverage. Maintain insurance until property is transferred or sold.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pitfall-6">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Poor Communication with Heirs
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Keeping heirs in the dark breeds suspicion and can lead to unnecessary legal challenges.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Send regular updates (monthly or quarterly) to all heirs. Be transparent about delays and challenges. Provide copies of major documents. Return phone calls and emails promptly. Consider a group email or family meeting for complex decisions.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pitfall-7">
                  <AccordionTrigger className="font-['Plus_Jakarta_Sans'] text-lg font-semibold hover:no-underline">
                    <span className="text-red-600">❌</span> Underestimating Tax Obligations
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="space-y-3">
                      <p className="font-['Plus_Jakarta_Sans'] text-base">
                        <strong>The Problem:</strong> Missing tax deadlines or failing to file required returns can result in penalties and interest—potentially from your own pocket.
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold mb-2">✓ Solution:</p>
                        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                          Work with a CPA or tax attorney for estates over $1 million. File extensions if needed. Don&apos;t assume there&apos;s no Illinois estate tax just because there&apos;s no federal tax. Use our <a href="/illinois-estate-tax-calculator" className="text-blue-600 hover:underline">estate tax calculator</a> for a preliminary assessment.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <h2 id="timeline" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                9. How Long Will This Take? Realistic Timelines
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                One of the most common questions executors ask is &quot;How long will this take?&quot; The answer depends on several factors including estate complexity, whether the estate is supervised or independent, family dynamics, and tax considerations.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-green-600" />
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold">Small Estate Affidavit</h3>
                  </div>
                  <p className="text-3xl font-bold text-green-700 mb-2">1-2 months</p>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                    For estates under $100,000 with no real estate. No probate required—just file affidavit and wait 6 months after death.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold">Independent Administration</h3>
                  </div>
                  <p className="text-3xl font-bold text-blue-700 mb-2">6-13 months</p>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                    Most estates fall in this category. Timeline depends on asset complexity and whether real estate must be sold.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-orange-600" />
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold">Supervised or Contested</h3>
                  </div>
                  <p className="text-3xl font-bold text-orange-700 mb-2">18-36+ months</p>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700">
                    Estates requiring court approval for each action or involving will contests can take several years.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Key Milestones Timeline</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Week 1</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Order death certificates, apply for EIN, open estate bank account</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Days 1-14</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Mail notice to heirs and legatees</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Days 1-30</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Begin publishing creditor notice (3 consecutive weeks)</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Days 1-60</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Prepare and file verified inventory</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Months 1-6</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Pay debts as they&apos;re validated, file tax returns</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Month 6+</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Claims period closes, make final distributions</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Month 9</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">Federal and Illinois estate tax returns due (if applicable)</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="font-['Plus_Jakarta_Sans'] font-bold text-blue-700 w-32 flex-shrink-0">Month 9-12</div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base">File final accounting and petition for discharge</div>
                  </div>
                </div>
              </div>

              <h2 id="fees" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                10. Understanding Executor Fees and Compensation
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                As executor, you&apos;re entitled to &quot;reasonable compensation&quot; for your time and effort. Illinois doesn&apos;t set a specific percentage or formula, so courts look at several factors to determine what&apos;s reasonable.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">Factors Courts Consider for Executor Fees</h3>
                <ul className="space-y-3 pl-6">
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Time and labor required:</strong> Document every hour you spend on estate matters
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Complexity of the estate:</strong> More complex estates justify higher fees
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Skill required:</strong> Specialized knowledge (real estate, business operations) merits higher rates
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Results achieved:</strong> Successful tax planning or asset recovery increases value to estate
                  </li>
                  <li className="font-['Plus_Jakarta_Sans'] text-base">
                    <strong>Customary compensation:</strong> What&apos;s typical for similar estates in your area
                  </li>
                </ul>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-[#4A708B] text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Type of Work</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Typical Hourly Rate</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Routine administrative tasks</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold">$30-$60/hour</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Phone calls, correspondence, organizing documents, mileage</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Moderate complexity tasks</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold">$60-$100/hour</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Asset valuation research, creditor negotiations, inventory preparation</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-3">Specialized or complex work</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold">$100+/hour</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Property management, business operations, investment decisions, tax planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Important: Track Your Time from Day One</h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-3">
                      Keep a detailed log of every task you perform, including date, time spent, description of work, and mileage. This log is essential if heirs question your fee request.
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-700 mb-0">
                      <strong>Note:</strong> Heirs must approve your fee in the final accounting, or the judge will decide if there&apos;s disagreement. Detailed time records make approval much more likely.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="hiring-help" className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[var(--e-global-color-accent)] mt-12 mb-6">
                11. When to Hire Professional Help
              </h2>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[var(--e-global-color-text)] mb-6">
                While some executors successfully administer estates without professional help, many situations call for expert guidance. Here&apos;s when you should seriously consider hiring an attorney, accountant, or other professional:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-4 text-red-700">High-Risk Situations (Hire Help)</h3>
                  <ul className="space-y-2">
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Estate value over $1 million (potential estate tax)
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Will contest or family disputes
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Business ownership or complicated assets
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Potential insolvency (debts exceed assets)
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Multiple properties in different states
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Claims of undue influence or fraud
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-red-600">⚠️</span>
                      Unclear or ambiguous will provisions
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold mb-4 text-green-700">Lower-Risk Situations (May DIY)</h3>
                  <ul className="space-y-2">
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      Estate under $500,000 with simple assets
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      Clear will with cooperative heirs
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      No real estate or single primary residence
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      Minimal debts and no tax concerns
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      You have time and organizational skills
                    </li>
                    <li className="font-['Plus_Jakarta_Sans'] text-sm flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      Independent administration available
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-4">How Illinois Estate Law Can Help</h3>
                <p className="font-['Plus_Jakarta_Sans'] text-base mb-4">
                  We guide executors throughout Illinois with transparent, flat-fee services that cover:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Full-Service Representation</h4>
                    <ul className="space-y-1 text-sm pl-6">
                      <li>• Preparing and filing all court documents</li>
                      <li>• Managing creditor claims and notifications</li>
                      <li>• Asset inventory and valuation guidance</li>
                      <li>• Tax return coordination</li>
                      <li>• Final accounting and distribution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Limited Scope Services</h4>
                    <ul className="space-y-1 text-sm pl-6">
                      <li>• Initial consultation and roadmap</li>
                      <li>• Document review and advice</li>
                      <li>• Specific task assistance (deeds, transfers)</li>
                      <li>• Heir dispute mediation</li>
                      <li>• Final accounting review</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#4A708B] text-white font-semibold rounded-lg hover:bg-[#3D5A6F] transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/services-pricing"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#4A708B] border-2 border-[#4A708B] font-semibold rounded-lg hover:bg-gray-50 transition-colors font-['Plus_Jakarta_Sans']"
                  >
                    View Services & Pricing
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] text-white p-8 rounded-lg mb-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">Final Thoughts: You Can Do This</h2>
                <p className="font-['Plus_Jakarta_Sans'] text-base mb-4">
                  Being named as executor or administrator is both an honor and a serious responsibility. While the process can seem overwhelming at first, thousands of people successfully navigate estate administration every year by following these key principles:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Stay Organized</h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm">
                      Keep detailed records, maintain a filing system, and document everything. Good organization prevents problems later.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Communicate Openly</h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm">
                      Regular updates to heirs prevent suspicion and conflict. Transparency builds trust and cooperation.
                    </p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold mb-2">Ask for Help</h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-sm">
                      Don&apos;t hesitate to hire professionals when needed. The cost is worth the protection and peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-8 mb-12">
                <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[var(--e-global-color-text)] mb-4 block">
                  SHARE POST ON:
                </span>
                <div className="flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/')}`}
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/')}&text=${encodeURIComponent("So You've Been Named Executor: A Comprehensive Guide")}`}
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
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/so-you-ve-been-named-executor-a-comprehensive-guide-to-administering-an-illinois-estate/')}&title=${encodeURIComponent("So You've Been Named Executor")}`}
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

            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24 bg-[#f8f9fa] rounded-lg p-6 border border-gray-200">
                <p className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[var(--e-global-color-text)] mb-3">
                  Need Help Administering an Estate?
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-base text-[var(--e-global-color-text)] mb-6">
                  Get expert guidance from experienced Illinois estate attorneys.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:3123730731"
                    className="block w-full bg-[var(--e-global-color-accent)] text-white text-center py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-['Plus_Jakarta_Sans'] font-semibold"
                  >
                    CALL (312) 373-0731
                  </a>
                  <Link
                    href="/book-consultation"
                    className="block w-full bg-white text-[var(--e-global-color-accent)] text-center py-3 px-6 rounded-md border-2 border-[var(--e-global-color-accent)] hover:bg-[var(--e-global-color-accent)] hover:text-white transition-colors font-['Plus_Jakarta_Sans'] font-semibold"
                  >
                    BOOK CONSULTATION
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
