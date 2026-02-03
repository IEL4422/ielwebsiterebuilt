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
  title: 'Cook County Probate Lawyer | Expert Estate Administration in Chicago',
  description: 'Navigate Cook County probate with confidence. Illinois Estate Law provides expert probate representation in Chicago and Cook County. Call (312) 373-0731 for a consultation.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/probate/cook-county/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Cook County Probate Lawyer | Expert Estate Administration in Chicago',
    description: 'Navigate Cook County probate with confidence. Illinois Estate Law provides expert probate representation in Chicago and Cook County. Call (312) 373-0731 for a consultation.',
  },
  twitter: {
    card: 'summary',
    title: 'Cook County Probate Lawyer | Expert Estate Administration in Chicago',
    description: 'Navigate Cook County probate with confidence. Illinois Estate Law provides expert probate representation in Chicago and Cook County. Call (312) 373-0731 for a consultation.',
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/probate/cook-county/',
  },
};

export default function CookCountyProbatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Cook County Probate Services - Illinois Estate Law',
            description: 'Expert probate and estate administration services in Cook County, Illinois',
            url: 'https://www.illinoisestatelaw.com/probate/cook-county/',
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Cook County, Illinois',
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
                Cook County Probate Lawyer
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
                Expert Probate & Estate Administration Services in Chicago and Cook County
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-slate-700">
                When a loved one passes away in Cook County, Illinois, navigating the probate process can feel overwhelming during an already difficult time. As the most populous county in Illinois and home to Chicago, Cook County handles thousands of probate cases annually through the Circuit Court of Cook County's Probate Division. Understanding the unique requirements, procedures, and timelines specific to Cook County probate is essential for executors, administrators, and beneficiaries alike.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 mt-4">
                At Illinois Estate Law, we focus exclusively on estate planning and probate matters throughout Illinois, with extensive experience navigating the Cook County probate system. Whether you're an executor facing the responsibility of administering an estate, a beneficiary concerned about your rights, or a family member dealing with a contested will, our team provides the knowledgeable guidance and personalized attention you need during this challenging time.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Cook County Probate Process Overview
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-2">
                <TabsTrigger value="overview" className="text-sm md:text-base py-3">
                  Process Overview
                </TabsTrigger>
                <TabsTrigger value="documents" className="text-sm md:text-base py-3">
                  Required Documents
                </TabsTrigger>
                <TabsTrigger value="timeline" className="text-sm md:text-base py-3">
                  Timeline & Costs
                </TabsTrigger>
                <TabsTrigger value="courthouse" className="text-sm md:text-base py-3">
                  Courthouse Info
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Understanding Cook County Probate</h3>
                  <div className="space-y-6 text-slate-700">
                    <p className="leading-relaxed">
                      The Cook County probate process begins when someone files a petition to open an estate with the Circuit Court of Cook County, Probate Division. This typically occurs at the Richard J. Daley Center in downtown Chicago, though some matters may be heard at the outlying courthouses in Bridgeview, Markham, Maywood, Rolling Meadows, or Skokie.
                    </p>
                    <p className="leading-relaxed">
                      Cook County probate involves several distinct steps that must be completed in order. The process starts with filing the original will (if one exists) and death certificate, along with a petition for letters of office. The court will then schedule a hearing to determine the validity of the will and appoint the executor or administrator. Once appointed, the personal representative must notify all beneficiaries and creditors, inventory the estate's assets, pay valid debts and taxes, and ultimately distribute the remaining assets according to the will or Illinois intestacy laws.
                    </p>
                    <p className="leading-relaxed">
                      One unique aspect of Cook County probate is the volume of cases processed through the system. With over 5 million residents, Cook County's Probate Division handles significantly more estate matters than any other Illinois county. This high volume can affect scheduling, processing times, and court availability. Understanding how to navigate this busy court system efficiently is crucial for timely estate administration.
                    </p>
                    <p className="leading-relaxed">
                      The Cook County Probate Division is divided into several departments, each handling different types of cases. The Estates Department handles traditional probate matters, while the Guardianship Department oversees adult and minor guardianships. The Mental Health Department addresses involuntary admissions and related matters. For most probate cases, you'll work primarily with the Estates Department.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Essential Documents for Cook County Probate</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Initial Filing Documents</h4>
                      <ul className="space-y-2 text-slate-700 list-disc list-inside">
                        <li>Original Last Will and Testament (if available)</li>
                        <li>Certified copy of the death certificate</li>
                        <li>Petition for Letters of Office (Testamentary or of Administration)</li>
                        <li>Statement of heirship</li>
                        <li>Bond (if required)</li>
                        <li>Filing fee payment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">During Administration</h4>
                      <ul className="space-y-2 text-slate-700 list-disc list-inside">
                        <li>Inventory of estate assets</li>
                        <li>Notice to heirs and beneficiaries</li>
                        <li>Publication notice for creditors (if required)</li>
                        <li>Claims forms for creditors</li>
                        <li>Accountings (annual or as required)</li>
                        <li>Tax returns (federal and state)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Closing Documents</h4>
                      <ul className="space-y-2 text-slate-700 list-disc list-inside">
                        <li>Final accounting</li>
                        <li>Receipts from beneficiaries</li>
                        <li>Petition for distribution and discharge</li>
                        <li>Order approving final account and distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Typical Timeline and Associated Costs</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">Expected Timeline</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Months 1-2: Opening the Estate</p>
                          <p className="text-slate-600">File petition, attend initial hearing, obtain letters of office</p>
                        </div>
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Months 2-4: Asset Collection & Notification</p>
                          <p className="text-slate-600">Inventory assets, notify heirs and creditors, publish notice</p>
                        </div>
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Months 4-9: Claims Period & Administration</p>
                          <p className="text-slate-600">Process creditor claims, pay debts, file tax returns</p>
                        </div>
                        <div className="border-l-4 border-[#77B1D4] pl-4">
                          <p className="font-semibold text-slate-800">Months 9-12+: Distribution & Closing</p>
                          <p className="text-slate-600">Distribute assets, file final accounting, close estate</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mt-4 italic">
                        Note: Complex estates with disputes, tax issues, or business interests may take 18-24 months or longer.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">Common Costs</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-300">
                          <thead>
                            <tr className="bg-slate-100">
                              <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">
                                Expense Category
                              </th>
                              <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-800">
                                Estimated Cost
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Court Filing Fees
                              </td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                $493 - $593
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Publication Notice
                              </td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                $200 - $400
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Bond (if required)
                              </td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Varies (typically 0.5-1% of estate value)
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Certified Copies
                              </td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                $15 per copy
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Attorney Fees
                              </td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Varies by complexity
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                Accountant/Appraisal Fees
                              </td>
                              <td className="border border-slate-300 px-4 py-2 text-slate-700">
                                $500 - $5,000+
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-[#77B1D4] rounded">
                          <p className="text-sm text-slate-700">
                            <strong>Note:</strong> Our probate packages include all attorney fees and court costs except for the surety bond, which is required to be paid directly to the surety bond provider.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="courthouse" className="mt-8">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Cook County Courthouse Locations</h3>
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-6">
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">Richard J. Daley Center (Main Probate Court)</h4>
                      <p className="text-slate-700 mb-2">
                        <strong>Address:</strong> 50 W. Washington Street, Chicago, IL 60602
                      </p>
                      <p className="text-slate-700 mb-2">
                        <strong>Probate Division:</strong> Room 1202 (12th Floor)
                      </p>
                      <p className="text-slate-700 mb-2">
                        <strong>Hours:</strong> Monday - Friday, 8:30 AM - 4:30 PM
                      </p>
                      <p className="text-slate-700">
                        The Daley Center houses the main Probate Division for Cook County and handles the majority of probate cases. This location is accessible via public transportation and offers parking in nearby garages.
                      </p>
                    </div>
                    <div className="border-b border-slate-200 pb-6">
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">District Court Locations</h4>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800">Bridgeview Courthouse</p>
                          <p className="text-sm text-slate-600">10220 S. 76th Avenue, Bridgeview, IL</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800">Markham Courthouse</p>
                          <p className="text-sm text-slate-600">16501 S. Kedzie Parkway, Markham, IL</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800">Maywood Courthouse</p>
                          <p className="text-sm text-slate-600">1500 Maybrook Drive, Maywood, IL</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800">Rolling Meadows Courthouse</p>
                          <p className="text-sm text-slate-600">2121 Euclid Avenue, Rolling Meadows, IL</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-semibold text-slate-800">Skokie Courthouse</p>
                          <p className="text-sm text-slate-600">5600 Old Orchard Road, Skokie, IL</p>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm mt-4 italic">
                        Note: Most probate matters are heard at the Daley Center. District courthouses may handle certain hearings by special arrangement.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Common Probate Scenarios */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Common Cook County Probate Scenarios
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Probating an Estate with a Valid Will
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    When a decedent leaves a valid will, the probate process in Cook County follows a more straightforward path. The named executor files the original will with the court along with the death certificate and petition for letters testamentary. The court reviews the will to ensure it meets Illinois requirements: written, signed by the testator, and witnessed by two credible witnesses.
                  </p>
                  <p className="mb-4">
                    Cook County typically schedules a hearing within 4-6 weeks of filing. At this hearing, if no objections are raised and the will appears valid, the judge admits the will to probate and issues letters testamentary to the executor. These letters give the executor legal authority to act on behalf of the estate.
                  </p>
                  <p>
                    The executor must then follow the terms of the will while also complying with Illinois probate law. This includes notifying beneficiaries, protecting estate assets, paying valid debts, filing necessary tax returns, and ultimately distributing assets according to the will's instructions. Even with a clear will, an experienced probate attorney can help navigate Cook County's specific procedures and ensure compliance with all court requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Intestate Estates (No Will)
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    When someone dies without a will in Cook County, their estate must go through intestate administration. A family member or interested party must petition the court for letters of administration. The court will appoint an administrator (usually a close family member) to handle the estate.
                  </p>
                  <p className="mb-4">
                    Illinois intestacy laws determine who inherits the estate. If the decedent was married with children, the spouse typically receives 50% and children share the remaining 50%. If there's a spouse but no descendants, the spouse may receive the entire estate. Without a spouse or descendants, the estate passes to parents, siblings, or more distant relatives according to statutory priority.
                  </p>
                  <p>
                    Intestate estates in Cook County often require more court oversight than testate estates. The administrator may need to post bond, get court approval for certain actions, and file more frequent accountings. This increased supervision protects heirs but can extend the probate timeline and increase costs. Having legal representation is particularly valuable in intestate cases to navigate these additional requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Small Estate Affidavit Process
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    Illinois offers a simplified procedure for small estates valued at $100,000 or less. Instead of full probate, beneficiaries can file a Small Estate Affidavit with entities holding estate assets. This process avoids court proceedings entirely and can be completed in weeks rather than months.
                  </p>
                  <p className="mb-4">
                    To qualify for a Small Estate Affidavit in Cook County, certain conditions must be met: the estate value cannot exceed $100,000 (excluding certain exempt property), at least six months must have passed since death (or 30 days if no will), and all funeral and burial expenses must be paid. The affidavit must list all known estate assets and identify all heirs or beneficiaries.
                  </p>
                  <p>
                    While this process is simpler than full probate, it still requires careful preparation. Banks, title companies, and other institutions scrutinize these affidavits closely before releasing assets. Any errors or omissions can cause delays or rejections. Many families find it beneficial to have an attorney prepare the Small Estate Affidavit to ensure it's completed correctly and accepted without issue.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Contested Wills and Will Disputes
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    Will contests in Cook County can arise for various reasons: allegations of undue influence, questions about the testator's mental capacity, claims of fraud or forgery, or disputes over will interpretation. These contests typically begin when an interested party files an objection to the will's admission to probate.
                  </p>
                  <p className="mb-4">
                    Illinois law provides a limited window for contesting a will. Objections must generally be filed within the time specified in the citation notice sent to heirs, usually six months from when the will is admitted to probate. Once an objection is filed, the probate court may schedule hearings, allow discovery, and ultimately hold a trial if the parties cannot reach a settlement.
                  </p>
                  <p>
                    Contested probate cases in Cook County can be complex and expensive. They may involve medical experts testifying about the decedent's capacity, handwriting analysts examining signatures, and extensive document review. These cases can tie up estates for years and significantly deplete estate assets. Both those bringing contests and those defending wills need experienced litigation counsel familiar with Cook County's probate judges and procedures.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-slate-50 rounded-lg px-6 border-none">
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-[#77B1D4] hover:no-underline">
                  Real Estate in Cook County Probate
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 pt-4">
                  <p className="mb-4">
                    Cook County's robust real estate market means many probate estates include valuable property in Chicago and surrounding communities. Handling real estate in probate requires attention to both probate law and real estate procedures. The executor must secure, maintain, and potentially sell property while managing ongoing expenses like mortgages, property taxes, and insurance.
                  </p>
                  <p className="mb-4">
                    Selling real estate through probate in Cook County typically requires court approval. The executor must file a petition describing the property, explaining why sale is necessary or beneficial, and proposing terms. The court may require an independent appraisal. Once approved, the sale proceeds according to standard real estate practices, but additional court confirmation may be needed before closing.
                  </p>
                  <p>
                    Some Cook County estates benefit from the Illinois Transfer on Death Instrument (TODI), which allows property to pass directly to beneficiaries without probate. However, property transferred via TODI may still be subject to estate debts and taxes. Understanding how real estate transfers intersect with probate obligations is crucial for proper estate administration.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Why Choose Illinois Estate Law for Cook County Probate
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Cook County Experience
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We regularly appear in Cook County Probate Court and understand the local procedures, judges' preferences, and clerk's office requirements that can impact your case timeline and outcome.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Personalized Attention
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  As a focused estate planning and probate firm, we provide dedicated attention to each case. You'll work directly with experienced attorneys who understand your unique situation and concerns.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Transparent Pricing
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We offer clear, upfront pricing for probate services. Many of our probate cases are handled on a flat-fee basis, so you know what to expect without surprise hourly billing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Need Help with Cook County Probate?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contact Illinois Estate Law today for a consultation. We'll review your situation and explain your options in clear, understandable terms.
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

        {/* Additional Information */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Frequently Asked Questions About Cook County Probate
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mb-12"></div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  How long does probate take in Cook County?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A typical uncontested Cook County probate case takes 9-12 months from start to finish. However, this timeline can vary significantly based on the estate's complexity, whether disputes arise, tax filing requirements, and court scheduling. Complex estates with business interests or contested matters may take 18-24 months or longer. Working with an experienced probate attorney can help streamline the process and avoid unnecessary delays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Do all estates in Cook County require probate?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  No, not all estates require full probate in Cook County. Assets that pass by beneficiary designation (life insurance, retirement accounts, TOD accounts), jointly owned property with survivorship rights, and property in a living trust typically avoid probate. Additionally, estates valued at $100,000 or less may qualify for the simplified Small Estate Affidavit procedure. However, even when probate isn't legally required, it may still be advisable in certain situations to properly clear title to assets or resolve disputes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  What are executor duties in Cook County?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  A Cook County executor has numerous responsibilities: filing the will and petition with the court, notifying heirs and beneficiaries, identifying and inventorying all estate assets, protecting those assets, paying valid debts and taxes, accounting to the court and beneficiaries, and ultimately distributing assets according to the will. The executor must act in the estate's best interest, avoid conflicts of interest, and maintain accurate records of all transactions. Executors can be held personally liable for mismanagement, making it crucial to understand these duties and seek legal guidance when needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Can I contest a will in Cook County?
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Yes, interested parties can contest a will in Cook County on several grounds: lack of testamentary capacity (the testator didn't understand what they were doing), undue influence (someone improperly pressured the testator), fraud, improper execution (didn't follow legal requirements), or revocation. However, will contests must be filed within strict deadlines, typically within six months of when the will is admitted to probate. Will contests are complex and require substantial evidence, so consulting with an experienced probate litigation attorney is essential if you believe you have grounds to challenge a will.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 text-center">
              Related Services in Cook County
            </h2>
            <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/chicago-wills-lawyer/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Wills & Estate Planning
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Create a comprehensive estate plan to avoid probate complications for your family.
                </p>
              </Link>

              <Link href="/chicago-revocable-trusts-lawyer/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Living Trusts
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Protect your assets and avoid probate entirely with a properly funded revocable trust.
                </p>
              </Link>

              <Link href="/chicago-probate-lawyer/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Probate Administration
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Full representation for executors and administrators throughout the probate process.
                </p>
              </Link>

              <Link href="/areas-we-serve/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Other Counties
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  We also serve DuPage, Kane, Lake, Will, and other Illinois counties.
                </p>
              </Link>

              <Link href="/contact/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Estate Tax Planning
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Minimize estate taxes and preserve wealth for your beneficiaries.
                </p>
              </Link>

              <Link href="/contact/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                  Powers of Attorney
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 transition-colors text-sm">
                  Ensure someone can manage your affairs if you become incapacitated.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
