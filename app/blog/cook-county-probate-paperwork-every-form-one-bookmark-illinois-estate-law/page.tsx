import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export const metadata: Metadata = {
  title: 'Cook County Probate Forms ⚖️ - Updated Nov 2025',
  description: 'Cook County probate requires specific forms for estates and guardianships. Read this guide to access the key forms and understand their uses.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.illinoisestatelaw.com/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    title: 'Cook County Probate Forms ⚖️ - Updated Nov 2025',
    description: 'Cook County probate requires specific forms for estates and guardianships. Read this guide to access the key forms and understand their uses.',
    images: [
      {
        url: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Cook-County-Probate-Paperwork.avif',
        secureUrl: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Cook-County-Probate-Paperwork.avif',
        width: 1816,
        height: 1364,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Cook County Probate Forms ⚖️ - Updated Nov 2025',
    description: 'Cook County probate requires specific forms for estates and guardianships. Read this guide to access the key forms and understand their uses.',
    images: ['https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/Cook-County-Probate-Paperwork.avif'],
  },
  other: {
    'dc.title': 'Cook County Probate Forms ⚖️ - Updated Nov 2025',
    'dc.description': 'Cook County probate requires specific forms for estates and guardianships. Read this guide to access the key forms and understand their uses.',
    'dc.relation': 'https://www.illinoisestatelaw.com/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/',
    'dc.source': 'https://www.illinoisestatelaw.com/',
    'dc.language': 'en_US',
    'google-site-verification': 'UQ33juRONgyBt2yOx3hbWYuGIe6uW2Q9bI-nB2cFtD4',
  },
};

export default function Page() {
  const currentSlug = 'cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const tocItems = [
    {
      id: 'cook-county-probate-forms-direct-links-plain-english-uses',
      title: 'Cook County Probate Forms—Direct Links & Plain-English Uses',
      level: 2,
      numeration: '1',
    },
    {
      id: '1-open-the-estate',
      title: '1 | Open the Estate',
      level: 2,
      numeration: '2',
    },
    {
      id: '2-oaths-bonds',
      title: '2 | Oaths & Bonds',
      level: 2,
      numeration: '3',
    },
    {
      id: '3-notice-publication',
      title: '3 | Notice & Publication',
      level: 2,
      numeration: '4',
    },
    {
      id: '4-inventory-ongoing-administration',
      title: '4 | Inventory & Ongoing Administration',
      level: 2,
      numeration: '5',
    },
    {
      id: '5-creditor-claims-estate-tax',
      title: '5 | Creditor Claims & Estate Tax',
      level: 2,
      numeration: '6',
    },
    {
      id: '6-independent-administration-tools',
      title: '6 | Independent Administration Tools',
      level: 2,
      numeration: '7',
    },
    {
      id: '7-misc-court-bonds-citations',
      title: '7 | Misc. Court Bonds & Citations',
      level: 2,
      numeration: '8',
    },
    {
      id: '8-adult-guardianship-disabled-person',
      title: '8 | Adult Guardianship (Disabled Person)',
      level: 2,
      numeration: '9',
    },
    {
      id: 'chicago-estate-planning-attorney-illinois-estate-law',
      title: 'Chicago Estate Planning Attorney – Illinois Estate Law',
      level: 2,
      numeration: '10',
      children: [
        {
          id: 'mary-liberty',
          title: 'Mary Liberty',
          level: 3,
          numeration: '10.1',
        },
      ],
    },
    {
      id: 'getting-the-help-of-a-skilled-attorney-in-cook-county',
      title: 'Getting the Help of a Skilled Attorney in Cook County',
      level: 2,
      numeration: '11',
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
                <time className="text-white/90 text-sm font-['Plus_Jakarta_Sans']">Nov 18, 2025</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Cook County Probate Paperwork—Every Form, One Bookmark | Illinois Estate Law
              </h1>
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-[1240px] mx-auto px-5 py-12">
          <article className="prose prose-lg max-w-none">
            <TableOfContents items={tocItems} />

            <h2 id="cook-county-probate-forms-direct-links-plain-english-uses" className="text-2xl font-bold mt-8 mb-4">
              Cook County Probate Forms—Direct Links &amp; Plain-English Uses
            </h2>

            <p className="mb-6">
              Handling a probate or adult-guardianship matter at the Daley Center in the Loop? This page puts every Cook County probate form in one place for filers in Chicago and nearby suburbs. Click any form number to download the official PDF from the Clerk of the Circuit Court of Cook County. The list covers decedent estates and adult guardianships only and excludes forms for minors.
            </p>

            <p className="mb-6">
              While having the forms is a critical first step, the legal processes involved with filing can be challenging. Many people find it helpful to consult with an <a href="https://www.illinoisestatelaw.com/" target="_blank" rel="noreferrer noopener" className="text-[#4a708b] hover:underline">estate planning attorney in Chicago</a> to ensure everything is filed correctly. Whether you are in River North, Lincoln Park, Hyde Park, Bronzeville, Lakeview, Evanston, Skokie, Oak Park, Schaumburg, or Tinley Park, you will find the exact paperwork you need right here.<br /><br />Not sure which form to file or how to meet Cook County deadlines and bond or notice requirements? A skilled Chicago estate planning attorney at Illinois Estate Law can provide a <a href="https://www.illinoisestatelaw.com/step-by-step-guide-to-probate-in-lake-county-illinois/" target="_blank" rel="noreferrer noopener" className="text-[#4a708b] hover:underline">step-by-step guide to probate</a> and help you navigate <a href="https://www.illinoisestatelaw.com/probate-procedures-in-dupage-cook-kane-and-lake-county-illinois/" target="_blank" rel="noreferrer noopener" className="text-[#4a708b] hover:underline">probate procedures</a>, guiding you from opening the estate to closing the file. Call <a href="tel:3123730731" className="text-[#4a708b] hover:underline">(312) 373-0731</a> or contact us online to start today.
            </p>

            <div className="my-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.768129510841!2d-87.6747937!3d41.9623152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3027f65a6d7%3A0x7e35457ee841537b!2sIllinois%20Estate%20Law!5e0!3m2!1sen!2s!4v1756397795444!5m2!1sen!2s"
                width="600"
                height="250"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full max-w-[600px]"
              />
            </div>

            <h2 id="1-open-the-estate" className="text-2xl font-bold mt-8 mb-4">
              1&nbsp;|&nbsp;Open the Estate
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form&nbsp;#</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0199.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0199 – Probate Division Cover Sheet</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">File this&nbsp;<strong>with every first petition</strong>&nbsp;so the clerk can docket and assign the correct calendar.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0315.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0315 – Petition for Probate of Will &amp; Letters Testamentary</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Use when there&nbsp;<strong>is a will</strong>. It starts the estate and nominates the executor.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0302.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0302 – Petition for Letters of Administration</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This opens an intestate estate (<strong>no will</strong>) and asks the judge to appoint an administrator.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0301.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0301 – Petition for Letters to Collect</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Used when there's a delay in issuing regular letters and the estate is at risk of waste/loss, or for a missing person.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0319.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0319 – Order Admitting Will &amp; Appointing Representative</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This is the form the judge signs to admit the will and issue Letters of Office.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="2-oaths-bonds" className="text-2xl font-bold mt-8 mb-4">
              2&nbsp;|&nbsp;Oaths &amp; Bonds
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0307.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0307 – Oath &amp; Bond (No Surety)</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">File this when the will&nbsp;<em>waives bond</em>&nbsp;or all heirs consent to waive surety.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0308.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0308 – Oath &amp; Bond (Surety)</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This is used if bond is required; please attach corporate-surety paperwork.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="3-notice-publication" className="text-2xl font-bold mt-8 mb-4">
              3&nbsp;|&nbsp;Notice &amp; Publication
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP1020.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 1020 – Notice of Probate to Heirs &amp; Legatees</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Mail within 14 days after entry of the order admitting (or denying) the will or appointing a representative. Keep a copy of your Letters and the stamped notice handy if you'll be appearing at the Daley Center (Loop) for early motions.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP1004.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 1004 – Notice to Interested Parties</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Pre-hearing notice mailed at least 30 days before the hearing to persons with equal or prior right to administer (or to nominate), in petitions for letters of administration or letters with will annexed.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0421.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0421 – Notice of Probate (Real-Estate Recording)</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Record with the Cook County Clerk's recording office to protect buyer/creditor rights in real property. Estates with condos or multi-units in Lakeview, Uptown, Hyde Park, or Bronzeville often record this notice before listing or refinancing.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="4-inventory-ongoing-administration" className="text-2xl font-bold mt-8 mb-4">
              4&nbsp;|&nbsp;Inventory &amp; Ongoing Administration
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0334.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0334 – Inventory</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This lists&nbsp;<strong>all probate assets</strong>&nbsp;within 60 days of appointment.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP1017.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 1017 – Account / Receipt Packet</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This is a beneficiary's receipt/approval acknowledging distribution and receipt of the Inventory, Account, and Final Report.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0389.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0389 – Refunding Bond</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This requires each heir to sign before distribution; it promises to return over-payments.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="5-creditor-claims-estate-tax" className="text-2xl font-bold mt-8 mb-4">
              5&nbsp;|&nbsp;Creditor Claims &amp; Estate Tax
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0345.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0345 – Claim</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Claims are due by the date in the published/mailed notice: not less than 6 months from first publication or 3 months from mailing/delivery to known creditors, whichever is later; separate two-year outside limitations may also apply under §18-12.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="6-independent-administration-tools" className="text-2xl font-bold mt-8 mb-4">
              6&nbsp;|&nbsp;Independent Administration Tools
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0503.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0503 – Order Converting Estate to Independent Administration</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">All heirs must consent (or the will requests it) if you want fewer court approvals.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP1011.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 1011 – Final Report of Independent Representative</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This closes an independent estate; attach receipts, distribute, and request discharge.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="7-misc-court-bonds-citations" className="text-2xl font-bold mt-8 mb-4">
              7&nbsp;|&nbsp;Misc. Court Bonds &amp; Citations
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0361.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0361 – Bond for Sale/Mortgage (Surety)</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This is required before selling or mortgaging estate real estate when surety is ordered.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0362.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0362 – Bond for Sale/Mortgage (No Surety)</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This serves the same purpose when heirs waive a surety bond.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0368.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0368 – Citation</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This launches a&nbsp;<em>citation to discover or recover assets</em>&nbsp;if property is missing.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0324.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0324 – Commission for Deposition of Will Witness</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This is used when a subscribing witness lives outside Cook County.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0325.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0325 – Deposition of Will Witness</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">The witness completes this deposition transcript; it should attach to will filing.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="8-adult-guardianship-disabled-person" className="text-2xl font-bold mt-8 mb-4">
              8&nbsp;|&nbsp;Adult Guardianship (Disabled Person)
            </h2>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">When you need it</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/Forms/Forms/pdf_files/CCP0200.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0200 – Petition for Appointment of Guardian of a Person with a Disability</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This form starts an adult-guardianship case in the Probate Division.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/Forms/Forms/pdf_files/CCP0211.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0211 – Report of Physician</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Cook County's physician's report form; evaluations must have been performed within 3 months of the date the guardianship petition is filed.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0207.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0207 – Order Appointing Limited Guardian</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This is the judge's order naming the guardian and issuing Letters.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0222.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0222 – Guardian's Annual Report</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">This describes the ward's health, living situation, and care plan. This is due every year.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      <a href="https://services.cookcountyclerkofcourt.org/forms/Forms/pdf_files/CCP0232.pdf" target="_blank" rel="noreferrer noopener nofollow" className="text-[#4a708b] hover:underline">CCP 0232 – Fingerprint / Background-Check Packet</a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Background checks may be ordered in adult-guardianship cases; Cook County provides court instructions for obtaining fingerprint-based checks.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Section</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form #</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-bold">Form Use / Filing Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Open the Estate</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0199 – Probate Division Cover Sheet</td>
                    <td className="border border-gray-300 px-4 py-2">Filed with the first petition to classify and docket the case properly.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0315 – Petition for Probate of Will &amp; Letters Testamentary</td>
                    <td className="border border-gray-300 px-4 py-2">Starts a probate when there's a will and nominates an executor.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0302 – Petition for Letters of Administration</td>
                    <td className="border border-gray-300 px-4 py-2">Opens an intestate estate and requests appointment of an administrator.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0301 – Petition for Letters to Collect</td>
                    <td className="border border-gray-300 px-4 py-2">Used when there's delay in issuing regular letters or assets are at risk.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0319 – Order Admitting Will &amp; Appointing Representative</td>
                    <td className="border border-gray-300 px-4 py-2">Judge's order that admits the will and appoints the representative.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Oaths &amp; Bonds</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0307 – Oath &amp; Bond (No Surety)</td>
                    <td className="border border-gray-300 px-4 py-2">Used when bond is waived by will or by all heirs.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0308 – Oath &amp; Bond (Surety)</td>
                    <td className="border border-gray-300 px-4 py-2">Filed when bond is required; must include surety paperwork.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Notice &amp; Publication</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 1020 – Notice of Probate to Heirs &amp; Legatees</td>
                    <td className="border border-gray-300 px-4 py-2">Mailed within 14 days of appointment or will admission.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 1004 – Notice to Interested Parties</td>
                    <td className="border border-gray-300 px-4 py-2">Mailed 30+ days before hearing to those with right to administer.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0421 – Notice of Probate (Real-Estate Recording)</td>
                    <td className="border border-gray-300 px-4 py-2">Filed with Recorder's Office to protect real estate interests.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Inventory &amp; Ongoing Administration</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0334 – Inventory</td>
                    <td className="border border-gray-300 px-4 py-2">Lists estate assets; due within 60 days of appointment.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 1017 – Account / Receipt Packet</td>
                    <td className="border border-gray-300 px-4 py-2">Acknowledges receipt of inventory and distributions.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0389 – Refunding Bond</td>
                    <td className="border border-gray-300 px-4 py-2">Heirs promise to return any overpaid amounts.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Creditor Claims &amp; Estate Tax</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0345 – Claim</td>
                    <td className="border border-gray-300 px-4 py-2">Used by creditors; must be filed by statutory deadline.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Independent Administration Tools</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0503 – Order Converting Estate to Independent Administration</td>
                    <td className="border border-gray-300 px-4 py-2">Heirs must consent unless the will already permits it.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 1011 – Final Report of Independent Representative</td>
                    <td className="border border-gray-300 px-4 py-2">Closes the estate; includes receipts and final report.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Misc. Court Bonds &amp; Citations</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0361 – Bond for Sale/Mortgage (Surety)</td>
                    <td className="border border-gray-300 px-4 py-2">Required when selling or mortgaging with court-ordered surety.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0362 – Bond for Sale/Mortgage (No Surety)</td>
                    <td className="border border-gray-300 px-4 py-2">Used when heirs waive the need for a surety bond.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0368 – Citation</td>
                    <td className="border border-gray-300 px-4 py-2">Used to recover or locate missing estate assets.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0324 – Commission for Deposition of Will Witness</td>
                    <td className="border border-gray-300 px-4 py-2">Allows a will witness outside Cook County to be deposed.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0325 – Deposition of Will Witness</td>
                    <td className="border border-gray-300 px-4 py-2">Completed transcript submitted by the witness.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Adult Guardianship (Disabled Person)</td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0200 – Petition for Appointment of Guardian</td>
                    <td className="border border-gray-300 px-4 py-2">Starts guardianship for a disabled adult.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0211 – Report of Physician</td>
                    <td className="border border-gray-300 px-4 py-2">Medical report required within 90 days of petition filing.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0207 – Order Appointing Limited Guardian</td>
                    <td className="border border-gray-300 px-4 py-2">Official order appointing guardian and issuing letters.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0222 – Guardian's Annual Report</td>
                    <td className="border border-gray-300 px-4 py-2">Yearly update on the ward's condition and care.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">CCP 0232 – Fingerprint / Background-Check Packet</td>
                    <td className="border border-gray-300 px-4 py-2">Used when court requires background checks for guardians.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="my-8">
              <Image
                src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/06/Chicago-estate-planning-attorney-Mary-GMB.png"
                alt="Chicago estate planning attorney at work"
                width={880}
                height={495}
                className="rounded-lg w-full"
              />
            </div>

            <h2 id="chicago-estate-planning-attorney-illinois-estate-law" className="text-2xl font-bold mt-8 mb-4">
              Chicago Estate Planning Attorney – Illinois Estate Law
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src="https://cdn-ilecpfo.nitrocdn.com/uvFiCejjfdsCFXSxffbDXKnABHGMwLAr/assets/images/optimized/rev-82211c7/www.illinoisestatelaw.com/wp-content/uploads/2025/10/IMG_3202.jpg"
                    alt="Mary Liberty"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 id="mary-liberty" className="text-xl font-bold mb-3">
                    Mary Liberty
                  </h3>
                  <p className="mb-4">
                    Mary Liberty is a Chicago-based estate planning and probate attorney who brings modern accessibility and genuine care to every matter. She founded a fully virtual, flat-fee practice to make thoughtful planning straightforward and budget-predictable for Illinois families, with no hourly bills, no hidden fees, and no office visit required. From consultation to signed documents, clients can complete the process online with clear timelines and plain-language guidance.
                  </p>
                  <p className="mb-0">
                    Her work centers on comprehensive estate plans, uncontested probate, and a unique partial-probate service that helps clients seamlessly transition from prior counsel when communication or costs stall progress. Known for responsiveness and precision, Mary supports young parents naming first-time guardians, blended families with complex dynamics, and busy professionals who value efficient, stress-free counsel.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-5"></div>

            <div className="my-8">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_spvLrTgbfQ?si=j1bUEXMQtlw51tna"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full max-w-[560px] rounded-lg"
              />
            </div>

            <h2 id="getting-the-help-of-a-skilled-attorney-in-cook-county" className="text-2xl font-bold mt-8 mb-4">
              Getting the Help of a Skilled Attorney in Cook County
            </h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="md:col-span-2">
                <p className="mb-6">
                  Handling Cook County probate paperwork or an adult-guardianship filing can feel overwhelming, especially if you are appearing at the Daley Center for the first time. A skilled Chicago estate planning and probate attorney from Illinois Estate Law can prepare the correct forms, keep you on the right calendar, meet notice and publication deadlines, and streamline the process for estates and adult guardianships across the city and suburban Cook.
                </p>

                <p className="mb-6">
                  Whether you are opening a decedent's estate, converting to independent administration, recording notices for real estate, or securing a plenary guardianship, our team can guide you from the first petition to final discharge. We can work with executors, administrators, and proposed guardians to complete Cook County Clerk and Circuit Court requirements efficiently, with clear fees and practical communication.
                </p>

                <p className="mb-0">
                  Get experienced help with Cook County probate paperwork and adult guardianship, so you can focus on your family while we handle the filings. Call Illinois Estate Law at <a href="tel:3123730731" className="text-[#4a708b] hover:underline">(312) 373-0731</a> to speak with a Chicago probate lawyer today.
                </p>
              </div>
              <div className="md:col-span-1 flex items-center justify-center">
                <iframe
                  src="https://assets.pinterest.com/ext/embed.html?id=869687378064479762"
                  height="464"
                  width="236"
                  frameBorder="0"
                  scrolling="yes"
                  className="border-0"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-[#4a708b]">
              <p className="text-lg font-bold mb-3">Secure Your Family's Future from Home</p>
              <p className="mb-4">Professional legal guidance without leaving your house.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:3123730731"
                  className="inline-block bg-[#4a708b] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3d5a6e] transition-colors text-center"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-block bg-white text-[#4a708b] font-semibold px-6 py-3 rounded-lg border-2 border-[#4a708b] hover:bg-[#4a708b] hover:text-white transition-colors text-center"
                >
                  BOOK ONLINE
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

          {/* Share Post Section */}
          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[var(--e-global-color-text)]">
                SHARE POST ON:
              </span>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.illinoisestatelaw.com/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/')}`}
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
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.illinoisestatelaw.com/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/')}&text=${encodeURIComponent('Cook County Probate Paperwork—Every Form, One Bookmark | Illinois Estate Law')}`}
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
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://www.illinoisestatelaw.com/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/')}&title=${encodeURIComponent('Cook County Probate Paperwork—Every Form, One Bookmark | Illinois Estate Law')}`}
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
          <div className="bg-[#f5f5f5] rounded-lg p-8">
            <p className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[var(--e-global-color-text)] mb-2">
              Send Us a Message
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
              Your consultation is with the actual lawyer who will handle your case
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
                />
              </div>
              <textarea
                placeholder="Message"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded font-['Plus_Jakarta_Sans'] text-sm focus:outline-none focus:ring-2 focus:ring-[#4a708b]"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4a708b] text-white font-['Plus_Jakarta_Sans'] font-bold rounded hover:opacity-90 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
