import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { adultGuardianshipFAQs } from './faqs';

const TITLE = 'Adult Guardianship Attorney Illinois | Contested & Uncontested | Illinois Estate Law';
const DESCRIPTION =
  'Illinois adult guardianship attorneys — guardianship of the person and estate, contested and uncontested. Physician’s report, GAL coordination, annual accountings. Cook, DuPage, Lake, Will, Kane & McHenry. Call (312) 373-0731.';
const PATH = '/adult-guardianship-lawyer/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: 'Illinois Estate Law', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const breadcrumb = breadcrumbSchema([{ name: 'Adult Guardianship', path: PATH }]);
const service = serviceSchema({
  name: 'Illinois Adult Guardianship',
  description:
    'Representation of families seeking guardianship of the person and/or estate of an adult with a disability in Illinois — contested and uncontested — including physician’s report coordination, personal service, guardian ad litem coordination, surety bond and inventory, and the annual reporting and accounting required of guardians.',
  path: PATH,
  serviceType: 'Adult guardianship',
});
const faq = faqPageSchema(adultGuardianshipFAQs, PATH);

export default function AdultGuardianshipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
