import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Chicago Probate Lawyer | Illinois Probate Attorney | Illinois Estate Law';
const DESCRIPTION = 'Chicago probate lawyer guiding executors and families through Illinois probate and estate administration. Flat-fee probate in Cook County and statewide. Call (312) 373-0731.';
const PATH = '/chicago-probate-lawyer/';
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

const breadcrumb = breadcrumbSchema([{ name: 'Chicago Probate Lawyer', path: PATH }]);

const service = serviceSchema({
  name: 'Illinois Probate and Estate Administration',
  description: 'Representation of executors, administrators, and beneficiaries in Illinois probate and estate administration, including Cook County and DuPage County filings, creditor claims, inventories, and distributions.',
  path: PATH,
  serviceType: 'Probate and estate administration',
});

export default function ChicagoProbateLawyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}
