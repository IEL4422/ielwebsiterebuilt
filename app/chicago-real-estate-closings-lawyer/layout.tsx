import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Illinois Real Estate Closing Attorney | Chicago Home Closings | Illinois Estate Law';
const DESCRIPTION = 'Illinois real estate attorney offering three flat-fee services: $750 seller Sale Representation, $1,500 FSBO representation, and $1,500 Bond in Lieu of Probate.';
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
  name: 'Illinois Residential Sale Representation',
  description: 'Flat-fee seller Sale Representation, For Sale By Owner representation, and qualifying Bond in Lieu of Probate real-estate transfers in Illinois.',
  path: PATH,
  serviceType: 'Residential real estate sale representation',
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
