import { Metadata } from 'next';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'DuPage County Probate Lawyer | Wheaton Estate Administration Attorney',
  description: 'Expert probate services in DuPage County, Illinois. Navigate estate administration with confidence. Call Illinois Estate Law at (312) 373-0731 today.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/probate/dupage-county/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'DuPage County Probate Lawyer | Wheaton Estate Administration Attorney',
    description: 'Expert probate services in DuPage County, Illinois. Navigate estate administration with confidence. Call Illinois Estate Law at (312) 373-0731 today.',
  },
  twitter: {
    card: 'summary',
    title: 'DuPage County Probate Lawyer | Wheaton Estate Administration Attorney',
    description: 'Expert probate services in DuPage County, Illinois. Navigate estate administration with confidence. Call Illinois Estate Law at (312) 373-0731 today.',
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/probate/dupage-county/',
  },
};

export default function DuPageCountyProbatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'DuPage County Probate Services - Illinois Estate Law',
            description: 'Expert probate and estate administration services in DuPage County, Illinois',
            url: 'https://www.illinoisestatelaw.com/probate/dupage-county/',
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'DuPage County, Illinois',
            },
            serviceType: ['Probate', 'Estate Administration', 'Probate Litigation'],
            provider: {
              '@type': 'LegalService',
              name: 'Illinois Estate Law',
              telephone: '(312) 373-0731',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '4422 N. Ravenswood Ave, Ste 212',
                addressLocality: 'Chicago',
                addressRegion: 'IL',
                postalCode: '60640',
                addressCountry: 'US',
              },
            },
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[280px] flex items-center py-12">
          <div className="container mx-auto max-w-[1140px] px-5 xl:px-0">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-['Lobster_Two'] text-[45px] md:text-[60px] lg:text-[75px] leading-tight font-normal text-[#FEFEFE] text-center mb-4">
                DuPage County Probate Lawyer
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
                Professional Probate & Estate Administration in Wheaton and DuPage County
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-slate-700">
                DuPage County, located in the western suburbs of Chicago, is Illinois' second-most populous county and home to communities like Wheaton, Naperville, Downers Grove, and Glen Ellyn. When a loved one passes away in DuPage County, their estate typically goes through probate at the DuPage County Courthouse in Wheaton. Understanding the local probate procedures, court requirements, and timeline expectations is essential for executors and administrators handling estate matters in this jurisdiction.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mt-4">
                At Illinois Estate Law, we provide comprehensive probate representation throughout DuPage County. Our team regularly appears in the DuPage County Probate Court and understands the specific procedures, local rules, and expectations that can significantly impact your case. Whether you're an executor named in a will, a family member handling an intestate estate, or a beneficiary concerned about proper administration, we offer the guidance and advocacy you need during this challenging time.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mt-4">
                DuPage County probate involves multiple steps, from filing the initial petition to distributing assets and closing the estate. The process typically takes 9-18 months for straightforward cases, though complex estates with business interests, real estate holdings, or disputes may require more time. Having experienced legal counsel familiar with DuPage County procedures can streamline the process, avoid costly mistakes, and ensure compliance with all court requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              DuPage County Probate Guide
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <Tabs defaultValue="process" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-2">
                <TabsTrigger value="process" className="text-sm md:text-base py-3">
                  Probate Process
                </TabsTrigger>
                <TabsTrigger value="documents" className="text-sm md:text-base py-3">
                  Required Documents
                </TabsTrigger>
                <TabsTrigger value="court" className="text-sm md:text-base py-3">
                  Court Information
                </TabsTrigger>
                <TabsTrigger value="costs" className="text-sm md:text-base py-3">
                  Costs & Timeline
                </TabsTrigger>
              </TabsList>

              <TabsContent value="process" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Understanding the DuPage County Probate Process</h3>
                  <div className="space-y-6 text-slate-700">
                    <p className="leading-relaxed">
                      The DuPage County probate process begins with filing a petition at the DuPage County Courthouse in Wheaton. The petitioner (typically the nominated executor or a family member) files the original will, death certificate, and petition for letters of office. The court reviews these documents and schedules an initial hearing, usually within 4-6 weeks of filing.
                    </p>
                    <p className="leading-relaxed">
                      At the initial hearing, if no objections are raised and the will meets Illinois legal requirements, the judge admits the will to probate and issues letters of office. These letters give the executor or administrator legal authority to act on behalf of the estate. The personal representative must then provide notice to all beneficiaries and known creditors, typically within 30 days of receiving letters.
                    </p>
                    <p className="leading-relaxed">
                      The administration phase involves inventorying estate assets, paying valid debts and taxes, and maintaining accurate records of all transactions. DuPage County requires periodic accountings, particularly for supervised administrations. The executor must file any necessary tax returns, including the decedent's final income tax return and potentially estate tax returns if the estate exceeds applicable thresholds.
                    </p>
                    <p className="leading-relaxed">
                      Once debts are paid and the claims period expires, the executor can petition for final distribution. This petition includes a final accounting showing all estate transactions, proposed distributions to beneficiaries, and a request for the executor's discharge. The court reviews the final accounting, and if approved, issues an order allowing distribution and closing the estate. Beneficiaries receive their inheritances, and the executor is released from further responsibility.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Documents Required for DuPage County Probate</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">To Open the Estate</h4>
                      <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
                        <li>Original Last Will and Testament (if one exists)</li>
                        <li>Certified death certificate</li>
                        <li>Petition for Letters Testamentary or of Administration</li>
                        <li>Statement identifying all heirs and beneficiaries</li>
                        <li>Bond (if required by will or court)</li>
                        <li>Filing fees</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">During Estate Administration</h4>
                      <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
                        <li>Complete inventory of estate assets with values</li>
                        <li>Notice to beneficiaries and heirs</li>
                        <li>Notice to creditors (if publication required)</li>
                        <li>Creditor claim forms and responses</li>
                        <li>Accountings (as required)</li>
                        <li>Federal and state tax returns</li>
                        <li>Real estate deeds or transfer documents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">To Close the Estate</h4>
                      <ul className="space-y-2 text-slate-700 list-disc list-inside ml-4">
                        <li>Final accounting of all estate transactions</li>
                        <li>Receipts and releases from beneficiaries</li>
                        <li>Petition for final distribution and discharge</li>
                        <li>Proposed order closing estate</li>
                        <li>Proof of tax clearances (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="court" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">DuPage County Courthouse Information</h3>
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-6">
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">DuPage County Judicial Center</h4>
                      <div className="space-y-2 text-slate-700">
                        <p><strong>Address:</strong> 505 North County Farm Road, Wheaton, IL 60187</p>
                        <p><strong>Probate Division:</strong> 3rd Floor</p>
                        <p><strong>Hours:</strong> Monday - Friday, 8:30 AM - 4:30 PM</p>
                        <p><strong>Phone:</strong> (630) 407-8700</p>
                      </div>
                      <p className="text-slate-700 mt-4">
                        The DuPage County Judicial Center in Wheaton houses the Probate Division and handles all probate matters for DuPage County. The courthouse offers parking and is accessible via public transportation.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Filing Information</h4>
                      <p className="text-slate-700 mb-4">
                        Probate petitions must be filed at the Probate Division on the 3rd floor of the Judicial Center. The clerk's office can answer procedural questions but cannot provide legal advice. Documents may be filed in person or by mail, and some filings may be available electronically through the court's e-filing system.
                      </p>
                      <p className="text-slate-700">
                        DuPage County maintains specific local rules that supplement the Illinois Probate Act. These local rules address matters like scheduling, document formatting, and hearing procedures. Familiarity with both state law and DuPage County local rules is important for efficient estate administration.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="costs" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Probate Costs and Timeline in DuPage County</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">Expected Timeline</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Month 1-2: Opening the Estate</p>
                          <p className="text-slate-600">File petition, attend hearing, obtain letters of office</p>
                        </div>
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Month 2-4: Initial Administration</p>
                          <p className="text-slate-600">Inventory assets, notify heirs and creditors, secure property</p>
                        </div>
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Month 4-12: Claims & Asset Management</p>
                          <p className="text-slate-600">Review claims, pay debts, file tax returns, manage assets</p>
                        </div>
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Month 9-18: Distribution & Closing</p>
                          <p className="text-slate-600">Final accounting, distribute assets, petition for discharge</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">Common Costs</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-300">
                          <thead>
                            <tr className="bg-slate-100">
                              <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">Expense</th>
                              <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">Typical Range</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Court Filing Fees</td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">$500 - $600</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Publication Costs</td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">$200 - $350</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Bond Premium (if required)</td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">0.5% - 1% of estate value</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Appraisal Fees</td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">$300 - $3,000+</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Accounting/Tax Services</td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">$500 - $5,000+</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Attorney Fees</td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">Varies by complexity</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-slate-600 text-sm mt-4 italic">
                        Costs vary significantly based on estate size, complexity, and whether disputes arise.
                      </p>
                      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-[#77B1D4] rounded">
                        <p className="text-sm text-slate-700">
                          <strong>Note:</strong> Our probate packages include all attorney fees and court costs except for the surety bond, which is required to be paid directly to the surety bond provider.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Common Scenarios - Accordion */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              DuPage County Probate Scenarios
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Testate Estates (With a Valid Will)
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    When a DuPage County resident dies with a valid will, the probate process follows a relatively straightforward path. The named executor files the will with the DuPage County Probate Court along with the death certificate and petition for letters testamentary. The court examines the will to ensure it meets Illinois requirements and schedules a hearing.
                  </p>
                  <p className="mb-4">
                    At the hearing, if the will is properly executed and no one contests it, the judge admits the will to probate and appoints the executor. The executor receives letters testamentary, which provide legal authority to manage estate assets, pay debts, and eventually distribute property according to the will's terms.
                  </p>
                  <p>
                    Even with a clear will, executors face numerous responsibilities and deadlines. An experienced DuPage County probate attorney can guide the executor through notice requirements, asset valuation, creditor claims, tax filings, and final distribution, ensuring compliance with both Illinois law and DuPage County local rules.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Intestate Administration (No Will)
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    When someone dies intestate in DuPage County, a family member or interested party must petition for letters of administration. The court appoints an administrator (usually a spouse or adult child) to handle the estate. Illinois intestacy laws determine who inherits, with priority typically given to spouses, children, parents, and siblings in that order.
                  </p>
                  <p className="mb-4">
                    Intestate administrations often require more court supervision than testate estates. The administrator may need to post bond, obtain court approval for certain actions, and file more detailed accountings. These requirements protect beneficiaries but can extend the probate timeline and increase costs.
                  </p>
                  <p>
                    DuPage County intestate cases benefit significantly from legal representation. An attorney can help navigate the additional requirements, minimize court appearances, and ensure the estate is administered efficiently while protecting the administrator from potential liability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Small Estate Affidavit Alternative
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    DuPage County estates valued at $100,000 or less may qualify for the Small Estate Affidavit procedure, which avoids formal probate entirely. This streamlined process allows beneficiaries to collect assets by presenting an affidavit to banks, investment firms, and other institutions holding estate property.
                  </p>
                  <p className="mb-4">
                    To use a Small Estate Affidavit in DuPage County, specific requirements must be met: the estate's total value cannot exceed $100,000 (excluding certain exempt property), either six months must have passed since death or 30 days if there's no will, and all funeral and burial expenses must be paid.
                  </p>
                  <p>
                    While simpler than full probate, Small Estate Affidavits must be prepared carefully. Errors can result in rejection by financial institutions or potential liability for those using the affidavit. Many families find it worthwhile to have an attorney prepare this document to ensure it's accepted and properly protects everyone involved.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Real Estate in DuPage County Probate
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    DuPage County's suburban Chicago location means many estates include valuable residential or commercial real estate in communities like Naperville, Wheaton, Downers Grove, and Lisle. Handling real estate through probate requires attention to property maintenance, tax payments, insurance, and potential sale.
                  </p>
                  <p className="mb-4">
                    Selling real estate through DuPage County probate typically requires court approval. The executor files a petition describing the property and explaining why sale is necessary or beneficial. The court may require an appraisal and will review the proposed sale terms before granting permission.
                  </p>
                  <p>
                    DuPage County executors should also be aware of Illinois Transfer on Death Instruments (TODIs), which allow real estate to pass directly to beneficiaries without probate. However, property transferred via TODI may still be subject to estate debts, making it important to coordinate with overall estate administration.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need Probate Assistance in DuPage County?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Illinois Estate Law provides comprehensive probate services throughout DuPage County. Contact us today for a consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3123730731"
                  rel="nofollow"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors text-lg"
                >
                  Call (312) 373-0731
                </a>
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-lg"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              DuPage County Probate FAQ
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mb-12"></div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Where do I file probate in DuPage County?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  All DuPage County probate cases are filed at the DuPage County Judicial Center at 505 North County Farm Road in Wheaton, Illinois. The Probate Division is located on the 3rd floor. You can file documents in person during business hours (Monday-Friday, 8:30 AM - 4:30 PM) or by mail. Some documents may also be available for electronic filing through the court's e-filing system.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  How long does DuPage County probate take?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A typical uncontested probate case in DuPage County takes 9-18 months from opening to closing. Simple estates with no real estate and cooperative beneficiaries may close closer to 9 months, while complex estates with business interests, multiple properties, or tax issues often require 18 months or longer. Contested estates can extend beyond 2 years depending on the nature and complexity of the disputes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  What assets avoid probate in DuPage County?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Several types of assets bypass probate: life insurance proceeds with named beneficiaries, retirement accounts (401k, IRA) with designated beneficiaries, jointly owned property with rights of survivorship, transfer-on-death accounts and securities, payable-on-death bank accounts, assets held in revocable living trusts, and real estate transferred via Transfer on Death Instrument (TODI). However, these assets may still factor into estate tax calculations and could be subject to creditor claims in certain circumstances.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Do I need an attorney for DuPage County probate?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  While Illinois law doesn't require executors to hire an attorney, most benefit significantly from legal representation. DuPage County probate involves complex procedures, strict deadlines, detailed accountings, and potential personal liability for mistakes. An experienced probate attorney ensures compliance with all requirements, handles court filings, communicates with beneficiaries and creditors, and protects the executor from liability. For all but the simplest estates, attorney fees are usually money well spent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Related Services
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chicago-wills-lawyer/" className="group bg-white hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Wills & Estate Planning
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Protect your family with comprehensive estate planning documents.
                </p>
              </Link>

              <Link href="/chicago-revocable-trusts-lawyer/" className="group bg-white hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Revocable Living Trusts
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Avoid probate entirely with a properly funded living trust.
                </p>
              </Link>

              <Link href="/probate/cook-county/" className="group bg-white hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Cook County Probate
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Expert probate representation in Chicago and Cook County.
                </p>
              </Link>

              <Link href="/areas-we-serve/" className="group bg-white hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Other Counties
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  We also serve Kane, Lake, Will, and other Illinois counties.
                </p>
              </Link>

              <Link href="/contact/" className="group bg-white hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Estate Tax Planning
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Minimize taxes and maximize what your family inherits.
                </p>
              </Link>

              <Link href="/contact/" className="group bg-white hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Trust Administration
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Guidance for trustees administering revocable and irrevocable trusts.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
