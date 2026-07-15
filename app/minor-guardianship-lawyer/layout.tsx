import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { minorGuardianshipFAQs } from './faqs';

const TITLE = 'Minor Guardianship Attorney Illinois | Guardianship of a Child | Illinois Estate Law';
const DESCRIPTION =
  'Illinois minor guardianship attorneys — flat-fee guardianship of a child for grandparents, relatives, and family friends. Uncontested and contested. Cook, DuPage, Lake, Will, Kane & McHenry. Call (312) 373-0731.';
const PATH = '/minor-guardianship-lawyer/';
const URL = `https://www.illinoisestatelaw.com${PATH}`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, siteName: 'Illinois Estate Law', locale: 'en_US', type: 'website' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const breadcrumb = breadcrumbSchema([{ name: 'Minor Guardianship', path: PATH }]);
const service = serviceSchema({
  name: 'Illinois Minor Guardianship',
  description:
    'Representation of grandparents, relatives, and family friends seeking guardianship of a minor child in Illinois — uncontested (flat fee) and contested — including the petition, parental consent or the required showing, notice and service, and the appointment hearing.',
  path: PATH,
  serviceType: 'Minor guardianship',
});
const faq = faqPageSchema(minorGuardianshipFAQs, PATH);

export default function MinorGuardianshipLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
