import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Illinois Real Estate Closing Attorney | Chicago Home Closings | Illinois Estate Law';
const DESCRIPTION = 'Illinois real estate closing attorney representing buyers and sellers through attorney review, inspection, title, and closing. Flat-fee residential closings. Call (312) 373-0731.';
const PATH = '/chicago-real-estate-closings-lawyer/';
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

const breadcrumb = breadcrumbSchema([{ name: 'Chicago Real Estate Closings Lawyer', path: PATH }]);

const service = serviceSchema({
  name: 'Illinois Residential Real Estate Closings',
  description: 'Attorney representation for Illinois residential real estate purchases and sales, including the attorney review and inspection periods, title and survey review, closing disclosure review, and closing.',
  path: PATH,
  serviceType: 'Residential real estate closing representation',
});

export default function ChicagoRealEstateClosingsLawyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}
