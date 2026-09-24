import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Illinois Power of Attorney Lawyer | Property & Health Care';
const DESCRIPTION = 'Illinois power of attorney lawyer for property and health care POAs. Learn when a POA works, when guardianship may be needed, and see flat fees.';
const PATH = '/chicago-powers-of-attorney-lawyer/';
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
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbSchema([
  { name: 'POA & Guardianship', path: '/power-of-attorney-and-guardianship/' },
  { name: 'Powers of Attorney', path: PATH },
]);

const service = serviceSchema({
  name: 'Illinois Powers of Attorney',
  description: 'Preparation of Illinois statutory short form powers of attorney for property and for health care under the Illinois Power of Attorney Act, naming agents to act during incapacity.',
  path: PATH,
  serviceType: 'Power of attorney drafting',
});

export default function PowersOfAttorneyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}
