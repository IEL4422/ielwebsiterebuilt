import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicesPricingModern } from '@/components/services/ServicesPricingModern'
import { LunacalBookingEmbed } from '@/components/services/LunacalBookingEmbed'

export const metadata: Metadata = {
  title: 'Illinois Estate Planning, POA & Probate Prices',
  description: 'See concrete Illinois estate planning, power of attorney, guardianship, probate, trust, deed, and real estate prices. Get started or book a consultation.',
  openGraph: {
    title: 'Illinois Estate Planning & Probate Prices | Illinois Estate Law',
    description: 'See concrete Illinois legal-service prices, compare packages, get started online, or book a free consultation.',
    url: 'https://www.illinoisestatelaw.com/services-pricing/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Planning & Probate Prices | Illinois Estate Law',
    description: 'See concrete Illinois legal-service prices, compare packages, get started online, or book a free consultation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/services-pricing/',
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How Can I Choose the Right Estate Planning Package for My Needs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To help you choose the right estate planning package, you can take our estate planning quiz available on our website. Additionally, you can book a consultation with one of our experienced attorneys who will guide you in selecting the best package for your specific needs."
      }
    },
    {
      "@type": "Question",
      "name": "What Attorney Consultations Are Included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each fixed-fee package includes the attorney consultations reasonably needed to complete the written scope of that service. New work, contested issues, or work outside the package scope requires a separate written engagement before additional fees are charged."
      }
    },
    {
      "@type": "Question",
      "name": "What Are the Costs Associated With Your Services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concrete prices for standard services are published on this page. Each card identifies the included scope and any exclusions. Contested matters are billed hourly against the disclosed initial retainer."
      }
    },
    {
      "@type": "Question",
      "name": "Does Your Flat-Fee Include Costs for Court Filings or Third-Party Expenses, Beyond the Recording of the First Deed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each service card identifies what is included and any separate third-party costs. Probate packages include filing and creditor-publication charges; a required surety-bond premium is paid separately to the bond provider. Trust packages include the listed funding guidance, notarization, and one deed; additional deeds are $500 each."
      }
    },
    {
      "@type": "Question",
      "name": "Why Do You Do Flat-Fee Packages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our attorneys have worked at firms that bill clients hourly and we can confidently say, we won't go back. We believe estate plans are essential and therefore, you should not have to pay an arm and a leg to get your affairs in order."
      }
    },
    {
      "@type": "Question",
      "name": "Does the Package Include Transfer of Property Into the Trust?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes -- as to real estate. We draft one (1) deed for you and record it with the Recorder of Deeds as part of the service. Trust funding guidance for your other assets is also included: we tell you exactly what to retitle and how, and you complete those transfers with your institutions. Additional deeds beyond the first are $500 each for completion and recording."
      }
    },
    {
      "@type": "Question",
      "name": "Do You Help Me Fund My Trust?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes -- trust funding guidance is included in all trust packages and trust services at no additional cost. We review your assets, tell you which ones belong in the trust, and give you the trust certification, letters of instruction, and step-by-step direction you need. You complete the transfers with your banks and financial institutions; we do not retitle your accounts for you. We do draft and record one (1) deed to transfer real estate into the trust as part of the service. Additional deeds beyond the first are $500 each. Trust funding guidance is also available as a standalone a la carte service for $1,500 for clients who already have a trust."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Change My Package If I Decide I Need a Different Product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely, we offer flexibility in our services. If you decide you need a different product than the package you initially chose, we can customize and adjust your package to better suit your needs."
      }
    },
    {
      "@type": "Question",
      "name": "When Should I Consider Updating My Estate Planning Documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend reviewing and possibly updating your estate planning documents whenever significant life changes occur. These events include, but are not limited to: Marital Status Changes (if you get married, divorced, or remarry), Birth or Adoption of a Child, Significant Financial Changes (an increase or decrease in your assets or a change in the type of assets you hold), Relocation (moving to a different state or country), Changes in Health (a significant change in your health or a diagnosis of a serious illness), Changes in Relationships (if your relationships with beneficiaries, executors, or trustees change), and Tax Law Changes. Regularly reviewing your estate planning documents ensures they accurately reflect your current life situation and wishes."
      }
    },
    {
      "@type": "Question",
      "name": "Is There Attorney-Client Privilege?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Once you choose your package, you will sign a Client Services Agreement that outlines the terms of the attorney-client relationship, which includes attorney-client privilege."
      }
    },
    {
      "@type": "Question",
      "name": "What Are Your Qualifications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All of our attorneys are licensed by the Supreme Court of Illinois and have significant estate planning and probate experience."
      }
    },
    {
      "@type": "Question",
      "name": "How Do You Handle the Collection of My Personal and Financial Information Needed to Draft the Documents? Is There a Secure Online Portal or a Questionnaire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes – we use a secure online questionnaire to gather your personal information, which complies with PCI Level 1 and HIPAA."
      }
    },
    {
      "@type": "Question",
      "name": "How Are the Documents Signed and Notarized?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer two options: (1) Online Notarization through an online notary platform or (2) Mobile Notarization in which a notary travels to your home. Online notarizations are included for both A la Carte services and all packages. Mobile notarization is included only for packages."
      }
    },
    {
      "@type": "Question",
      "name": "Will I Have a Dedicated Attorney or Case Manager, or Will My Case Be Handled by Multiple Staff Members Throughout the Process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will work with a dedicated attorney who will handle your matter from start to finish. We may have a paralegal assist with administrative and scheduling functions."
      }
    },
    {
      "@type": "Question",
      "name": "Do You Have an Ongoing Maintenance Program or Subscription Service for Clients Who Want Regular Document Reviews and Legal Updates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our $599 annual review membership includes an annual attorney review meeting and up to two simple amendments each year. Work outside that scope is quoted separately."
      }
    },
    {
      "@type": "Question",
      "name": "What Is the Estimated Timeline From Package Purchase to the Final Signing of My Documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estate-planning timelines depend on the package, complexity, and how quickly information and approvals are provided. Same-week appointments are often available. Illinois probate commonly takes many months because of creditor periods, tax work, asset administration, and court scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "If I Have an Existing Will or Trust Drafted by Another Attorney, What Is Your Process for Reviewing, Incorporating, or Completely Replacing Those Documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a service to review and modify DIY and previously drafted estate plans. Our review service includes a comprehensive review of your plan and a 1-hour review session with our attorney. Any amendments and modifications to your existing plan will be tracked for transparency."
      }
    },
    {
      "@type": "Question",
      "name": "Do You Offer Estate Planning Services for Blended Families, Business Owners, or Clients With Special Needs Beneficiaries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our staff is experienced in estate planning for blended families and business owners, and we provide special add-on services for special needs planning and estate tax planning."
      }
    },
    {
      "@type": "Question",
      "name": "Should I Schedule a Consultation Before Purchasing a Package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You may choose a service and get started online without a consultation, or schedule a free consultation first. Each fixed-fee package includes the attorney consultations reasonably needed to complete its written scope."
      }
    },
    {
      "@type": "Question",
      "name": "Can I Schedule an In-Person Meeting at One of Your Offices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In-person meetings are available for current clients at our physical offices throughout Illinois. Please visit our office locations page to find the nearest office."
      }
    }
  ]
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Modernized services & pricing hero */}
      <div className="bg-gradient-to-b from-[#F6F9FC] to-white">
        <div className="mx-auto max-w-[1180px] px-5 py-12 text-center font-['Plus_Jakarta_Sans']">
          <h1 className="text-[42px] font-bold text-[#33414E] sm:text-[30px]">Services &amp; Pricing</h1>
          <p className="mx-auto mt-3 max-w-[680px] text-[18px] text-[#5f6b76]">
            Transparent fixed pricing for standard matters, shown before you commit. Contested litigation is billed hourly under a written engagement. Payment plans are available.
          </p>
          <p className="mt-2.5 text-[15px] font-semibold text-[#33414E]">
            Not sure which package is right?{' '}
            <Link href="/compare-packages/" className="text-[#547298] underline hover:text-[#33414E]">
              Compare our packages side-by-side.
            </Link>
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3.5">
            <Link
              href="/get-started/"
              className="inline-flex items-center justify-center rounded-full bg-[#547298] px-6 py-3 text-base font-bold text-white shadow-[0_6px_16px_rgba(84,114,152,0.28)] hover:bg-[#33414E] transition-colors"
            >
              Get Started Online
            </Link>
            <Link
              href="/book-consultation/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-6 py-3 text-base font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] hover:bg-[#F6F9FC] transition-colors"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <ServicesPricingModern />

      <div className="container mx-auto px-5 max-w-[1240px] pb-[60px] sm:px-4">
        <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[40px] text-[#2d3e50] mb-8 sm:text-[28px] sm:mb-6">
          Frequently Asked Questions About Illinois Estate Law
        </h2>

        <div className="space-y-4">
          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              How Can I Choose the Right Estate Planning Package for My Needs?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>To help you choose the right estate planning package, you can take our estate planning quiz available on our website. Additionally, you can book a consultation with one of our experienced attorneys who will guide you in selecting the best package for your specific needs.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Attorney Consultations Are Included?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Each fixed-fee package includes the attorney consultations reasonably needed to complete the written scope of that service. New work, contested issues, or work outside the package scope requires a separate written engagement before additional fees are charged.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Are the Costs Associated With Your Services?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Concrete prices for standard services are published on this page. Each card identifies the included scope and any exclusions. Contested matters are billed hourly against the disclosed initial retainer.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Does Your Flat-Fee Include Costs for Court Filings or Third-Party Expenses, Beyond the Recording of the First Deed?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p className="mb-4">Each service card identifies what is included and any separate third-party costs. Probate packages include filing and creditor-publication charges; a required surety-bond premium is paid separately to the bond provider.</p>
              <p>Trust packages include the listed funding guidance, notarization, and one deed. Additional deeds are $500 each. Any other excluded cost is disclosed in the applicable service description or engagement agreement.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Why Do You Do Flat-Fee Packages?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Our attorneys have worked at firms that bill clients hourly and we can confidently say, we won't go back. We believe estate plans are essential and therefore, you should not have to pay an arm and a leg to get your affairs in order.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Does the Package Include Transfer of Property Into the Trust?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes -- as to real estate. We draft one (1) deed for you and record it with the Recorder of Deeds as part of the service. Trust funding guidance for your other assets is also included: we tell you exactly what to retitle and how, and you complete those transfers with your institutions. Additional deeds beyond the first are $500 each for completion and recording.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do You Help Me Fund My Trust?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes -- trust funding guidance is included in all trust packages and trust services at no additional cost. We review your assets, tell you which ones belong in the trust, and give you the trust certification, letters of instruction, and step-by-step direction you need. You complete the transfers with your banks and financial institutions; we do not retitle your accounts for you. We do draft and record one (1) deed to transfer real estate into the trust as part of the service. Additional deeds beyond the first are $500 each. Trust funding guidance is also available as a standalone a la carte service for $1,500 for clients who already have a trust.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Can I Change My Package If I Decide I Need a Different Product?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Absolutely, we offer flexibility in our services. If you decide you need a different product than the package you initially chose, we can customize and adjust your package to better suit your needs.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              When Should I Consider Updating My Estate Planning Documents?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p className="mb-4">We recommend reviewing and possibly updating your estate planning documents whenever significant life changes occur. These events include, but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Marital Status Changes:</strong> If you get married, divorced, or remarry, your estate plan should reflect these changes to ensure your assets are distributed according to your current wishes.</li>
                <li><strong>Birth or Adoption of a Child:</strong> Welcoming a new child into your family is a pivotal reason to update your estate plan, particularly to name guardians and provide for your child's financial future.</li>
                <li><strong>Significant Financial Changes:</strong> An increase or decrease in your assets or a change in the type of assets you hold, such as purchasing a new property or starting a business, should prompt a review.</li>
                <li><strong>Relocation:</strong> Moving to a different state or country can impact your estate plan due to varying state laws and tax implications.</li>
                <li><strong>Changes in Health:</strong> A significant change in your health or a diagnosis of a serious illness necessitates updating your estate planning documents, especially your healthcare directives and powers of attorney.</li>
                <li><strong>Changes in Relationships:</strong> If your relationships with beneficiaries, executors, or trustees change, you should update your documents to reflect your current preferences and wishes.</li>
                <li><strong>Tax Law Changes:</strong> Changes in federal or state tax laws can impact your estate planning strategies. Consulting with an attorney to ensure your plan is tax-efficient is crucial.</li>
              </ul>
              <p>Regularly reviewing your estate planning documents ensures they accurately reflect your current life situation and wishes.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Is There Attorney-Client Privilege?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes! Once you choose your package, you will sign a Client Services Agreement that outlines the terms of the attorney-client relationship, which includes attorney-client privilege.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Are Your Qualifications?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>All of our attorneys are licensed by the Supreme Court of Illinois and have significant estate planning and probate experience.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              How Do You Handle the Collection of My Personal and Financial Information Needed to Draft the Documents? Is There a Secure Online Portal or a Questionnaire?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes – we use a secure online questionnaire to gather your personal information, which complies with PCI Level 1 and HIPAA.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              How Are the Documents Signed and Notarized?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>We offer two options: (1) Online Notarization through an online notary platform or (2) Mobile Notarization in which a notary travels to your home. Online notarizations are included for both A la Carte services and all packages. Mobile notarization is included only for packages.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Will I Have a Dedicated Attorney or Case Manager, or Will My Case Be Handled by Multiple Staff Members Throughout the Process?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>You will work with a dedicated attorney who will handle your matter from start to finish. We may have a paralegal assist with administrative and scheduling functions.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do You Have an Ongoing Maintenance Program or Subscription Service for Clients Who Want Regular Document Reviews and Legal Updates?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Yes. Our $599 annual review membership includes an annual attorney review meeting and up to two simple amendments each year. Work outside that scope is quoted separately.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              What Is the Estimated Timeline From Package Purchase to the Final Signing of My Documents?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Estate-planning timelines depend on the package, complexity, and how quickly information and approvals are provided. Same-week appointments are often available. Illinois probate commonly takes many months because of creditor periods, tax work, asset administration, and court scheduling.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              If I Have an Existing Will or Trust Drafted by Another Attorney, What Is Your Process for Reviewing, Incorporating, or Completely Replacing Those Documents?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>We offer a service to review and modify DIY and previously drafted estate plans. Our review service includes a comprehensive review of your plan and a 1-hour review session with our attorney. Any amendments and modifications to your existing plan will be tracked for transparency.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Do You Offer Estate Planning Services for Blended Families, Business Owners, or Clients With Special Needs Beneficiaries?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>Absolutely. Our staff is experienced in estate planning for blended families and business owners, and we provide special add-on services for special needs planning and estate tax planning.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Should I Schedule a Consultation Before Purchasing a Package?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>No. You may choose a service and get started online without a consultation, or schedule a free consultation first. Each fixed-fee package includes the attorney consultations reasonably needed to complete its written scope.</p>
            </div>
          </details>

          <details className="group border-b border-gray-200">
            <summary className="flex justify-between items-center cursor-pointer py-4 text-[#011627] font-['Plus_Jakarta_Sans'] font-semibold text-lg hover:text-[#4a708b] sm:text-base sm:py-3">
              Can I Schedule an In-Person Meeting at One of Your Offices?
              <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pb-4 text-[#2d3e50]">
              <p>In-person meetings are available for current clients at our physical offices throughout Illinois. Please visit our office locations page to find the nearest office.</p>
            </div>
          </details>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] pb-[60px] sm:px-4">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5 sm:mb-6">
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[40px] text-[#2d3e50] sm:text-[28px]">
              Get Started or Book a Consultation
            </h2>
            <p className="mt-3 text-[#2d3e50]">
              Ready to move forward? Choose your service and begin online without booking a consultation.
              If you have questions, schedule a free consultation below.
            </p>
          </div>
          <Link
            href="/get-started/"
            className="inline-flex items-center justify-center rounded-full bg-[#547298] px-6 py-3 text-base font-bold text-white shadow-[0_6px_16px_rgba(84,114,152,0.28)] transition-colors hover:bg-[#33414E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#547298]"
          >
            Get Started
          </Link>
        </div>

        <LunacalBookingEmbed />
      </div>
    </>
  )
}
