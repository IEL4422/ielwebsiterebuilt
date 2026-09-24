import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { guardianshipFAQs } from '@/lib/practice-faqs';

const TITLE = 'Illinois Guardianship Lawyer | Adult & Minor Cases';
const DESCRIPTION =
  'Illinois guardianship lawyer for adult and minor cases, including person, estate, contested and uncontested matters. Learn when guardianship may be needed.';
const PATH = '/guardianship/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const breadcrumb = breadcrumbSchema([
  { name: 'POA & Guardianship', path: '/power-of-attorney-and-guardianship/' },
  { name: 'Guardianship', path: PATH },
]);

const adultService = serviceSchema({
  name: 'Illinois Adult Guardianship',
  description:
    'Representation of families seeking guardianship of the person and/or estate of an adult with a disability in Illinois — contested and uncontested — including physician’s report coordination, personal service, guardian ad litem coordination, surety bond and inventory, and the annual reporting and accounting required of guardians.',
  path: PATH,
  serviceType: 'Adult guardianship',
});

const minorService = serviceSchema({
  name: 'Illinois Minor Guardianship',
  description:
    'Representation of grandparents, relatives, and family friends seeking guardianship of a minor child in Illinois — uncontested (flat fee) and contested — including the petition, parental consent or the required showing, notice and service, and the appointment hearing.',
  path: PATH,
  serviceType: 'Minor guardianship',
});

const faq = faqPageSchema(guardianshipFAQs, PATH);

export default function GuardianshipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adultService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(minorService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
