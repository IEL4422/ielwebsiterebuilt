import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Chicago Revocable Living Trust Attorney | Illinois Estate Law';
const DESCRIPTION = 'Illinois revocable living trust attorney helping families avoid probate, keep affairs private, and plan for incapacity. Flat-fee trust drafting and funding. Call (312) 373-0731.';
const PATH = '/chicago-revocable-trusts-lawyer/';
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

const breadcrumb = breadcrumbSchema([{ name: 'Chicago Revocable Trusts Lawyer', path: PATH }]);

const service = serviceSchema({
  name: 'Illinois Revocable Living Trusts',
  description: 'Drafting, funding, and administration of revocable living trusts under the Illinois Trust Code, including pour-over wills, deed transfers into trust, and successor trustee guidance.',
  path: PATH,
  serviceType: 'Trust drafting and administration',
});

export default function ChicagoRevocableTrustsLawyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}
