import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Chicago Wills Lawyer | Illinois Will Attorney | Illinois Estate Law';
const DESCRIPTION = 'Illinois wills attorney drafting valid last wills and testaments under Illinois law. Flat-fee pricing, virtual signings statewide. Call (312) 373-0731.';
const PATH = '/chicago-wills-lawyer/';
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

const breadcrumb = breadcrumbSchema([{ name: 'Chicago Wills Lawyer', path: PATH }]);

const service = serviceSchema({
  name: 'Illinois Will Drafting',
  description: 'Drafting and execution of last wills and testaments that meet the Illinois requirements of a written will signed by the testator and two credible witnesses, including guardianship nominations for minor children.',
  path: PATH,
  serviceType: 'Will drafting',
});

export default function ChicagoWillsLawyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}
