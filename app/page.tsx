import Script from 'next/script';
import { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { LogosCarousel } from '@/components/home/LogosCarousel';
import { StatsSection } from '@/components/home/StatsSection';
import { ClientFirstSection } from '@/components/home/ClientFirstSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PracticeAreasSection } from '@/components/home/PracticeAreasSection';
import { ContactSection } from '@/components/home/ContactSection';
import { FoundationalPlanningSection } from '@/components/home/FoundationalPlanningSection';
import { HighlyRecommendedSection } from '@/components/home/HighlyRecommendedSection';
import { ClientPortalSection } from '@/components/home/ClientPortalSection';
import { AttorneyProfileSection } from '@/components/home/AttorneyProfileSection';
import { CustomWillsTrustsSection } from '@/components/home/CustomWillsTrustsSection';
import { OverwhelmingMomentsSection } from '@/components/home/OverwhelmingMomentsSection';
import { PowersOfAttorneySection } from '@/components/home/PowersOfAttorneySection';
import { ProbateAdministrationSection } from '@/components/home/ProbateAdministrationSection';
import { PartialProbateSection } from '@/components/home/PartialProbateSection';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { AdultGuardianshipSection } from '@/components/home/AdultGuardianshipSection';
import { FAQSection } from '@/components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Top-Rated Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
  description: 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
  keywords: [
    'estate planning firm',
    'trust and estate law firms',
    'estate law firms',
    'estate attorney chicago',
    'estate planning chicago',
    'chicago estate planning',
    'estate planning chicago il',
    'chicago estate attorney',
    'estate lawyers chicago',
    'chicago estate lawyer',
    'estate lawyers in chicago',
    'estate lawyer chicago',
    'illinois estate planning attorney',
    'chicago trust lawyer',
    'trust attorney chicago',
    'chicago trust attorneys',
    'chicago trust attorney',
    'estate tax planning attorneys',
    'will attorney chicago',
    'estate planning lawyer chicago',
    'chicago estate planning attorneys',
    'estate planning attorney chicago il',
    'chicago estate planning lawyer',
    'estate planning attorney chicago',
    'chicago estate planning lawyers',
    'chicago estate planning attorney',
    'best estate planning attorneys chicago',
    'power of attorney chicago',
    'chicago power of attorney',
    'chicago trusted attorneys'
  ],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
    title: 'Top-Rated Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
    description: 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
  },
  twitter: {
    card: 'summary',
    title: 'Top-Rated Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
    description: 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
  },
  other: {
    'dc:title': 'Top-Rated Chicago Estate Planning & Probate Attorney | Illinois Estate Law',
    'dc:description': 'Ready to Protect Your Future? Contact Illinois Estate Law at 312-373-0731 for an Estate Planning or Probate Consultation That Fits Your Goals and Needs.',
    'dc:relation': 'https://www.illinoisestatelaw.com/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
  verification: {
    google: 'UQ33juRONgyBt2yOx3hbWYuGIe6uW2Q9bI-nB2cFtD4',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Illinois Estate Law",
            "alternateName": "Illinois Estate Law",
            "description": "",
            "url": "https://www.illinoisestatelaw.com"
          })
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Illinois Estate Law",
            "url": "https://www.illinoisestatelaw.com",
            "alternateName": "Illinois Estate Law",
            "description": "Illinois Estate Law"
          })
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","name":"FAQ","mainEntity":[{"@type":"Question","name":"Why is estate planning important for everyone?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"Estate planning matters for people of all ages and backgrounds because it ensures that their wishes are respected and their loved ones are cared for. It helps avoid unnecessary legal complications and costly court delays. Having a plan in place gives peace of mind, knowing that your values and finances will be protected no matter what life brings."}},{"@type":"Question","name":"What benefits does estate planning provide for young adults?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"Even for young and healthy individuals, estate planning creates structure and security. It allows them to choose who can make medical or financial decisions if they become unable to do so. This foresight prevents confusion, protects loved ones, and avoids legal complications later in life."}},{"@type":"Question","name":"How does Illinois Estate Law make estate planning more convenient?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"Illinois Estate Law offers a modern, virtual process that eliminates the need for office visits or piles of paperwork. Clients can complete their estate planning securely online, from the comfort of home, and still have the option for in-person meetings if desired. This approach provides flexibility while maintaining confidentiality and professional guidance throughout the process."}},{"@type":"Question","name":"What makes Illinois Estate Law's pricing structure different?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"The firm uses an all-inclusive flat-fee system, so clients know exactly what they will pay from the start. There are no hourly rates, hidden costs, or surprise charges for asking questions. This clear and transparent approach allows clients to plan confidently and focus on protecting their families rather than worrying about unpredictable legal bills."}},{"@type":"Question","name":"What types of documents are typically included in an estate plan?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"An estate plan can include wills, trusts, and powers of attorney that meet Illinois legal requirements. It may also cover healthcare directives and HIPAA authorizations to ensure your medical wishes are honored. Together, these documents create a complete framework to manage your assets, healthcare, and decisions in the future."}},{"@type":"Question","name":"How does Illinois Estate Law handle probate cases?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"The firm assists families through the legal process of settling a loved one's estate after death. Whether it involves uncontested probate, managing creditor claims, or handling estates without a will, they focus on making each step clear and manageable. Their compassionate guidance helps families stay informed and supported throughout what can be an emotionally challenging time."}},{"@type":"Question","name":"What are partial probate services, and who might need them?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"Partial probate services are for clients who have already begun probate with another attorney but feel dissatisfied or stuck. Illinois Estate Law can take over the case, provide transparent communication, and finish the process efficiently. This option helps clients regain confidence and closure, avoiding further delays or confusion."}},{"@type":"Question","name":"Why is guardianship planning a crucial part of estate planning?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"Guardianship planning ensures that children, elderly parents, or incapacitated loved ones receive care from someone you trust. It allows you to make these important decisions proactively rather than leaving them to the courts. Establishing guardianship in advance brings clarity, protection, and peace of mind to your family's future."}},{"@type":"Question","name":"How can Illinois Estate Law help clients with estate planning and probate?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"At Illinois Estate Law, we guide individuals and families through every stage of estate planning and probate with care and clarity. Our team works closely with clients to create personalized wills, trusts, and healthcare directives that follow Illinois law. We also assist with probate cases, ensuring the process is smooth, transparent, and free of hidden costs. Our goal is to provide compassionate, client-first service that protects what matters most to you."}},{"@type":"Question","name":"How can someone contact Illinois Estate Law to get started?","answerCount":"1","acceptedAnswer":{"@type":"Answer","text":"You can contact Illinois Estate Law by calling (312) 373-0731 or booking a consultation online through the firm's website. We offer flexible virtual and in-person meetings to fit your schedule. Whether you're beginning your first estate plan or updating existing documents, our team is ready to help you take the next step with confidence and peace of mind."}}]}`
        }}
      />

      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THGKJ83V');`
        }}
      />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QVXS1HVLNG"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QVXS1HVLNG');
`
        }}
      />

      <main>
        <HeroSection />
        <LogosCarousel />
        <StatsSection />
        <ClientFirstSection />
        <TestimonialsSection />
        <PracticeAreasSection />
        <FoundationalPlanningSection />
        <HighlyRecommendedSection />
        <ClientPortalSection />
        <AttorneyProfileSection />
        <CustomWillsTrustsSection />
        <OverwhelmingMomentsSection />
        <PowersOfAttorneySection />
        <ProbateAdministrationSection />
        <PartialProbateSection />
        <AdultGuardianshipSection />
        <ContactSection />
        <WhyChooseSection />
        <FAQSection />
      </main>
    </>
  );
}
