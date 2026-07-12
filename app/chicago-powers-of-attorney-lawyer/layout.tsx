import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Illinois Power of Attorney Attorney | Illinois Estate Law';
const DESCRIPTION = 'Illinois attorney drafting statutory powers of attorney for property and health care under the Illinois Power of Attorney Act. Flat fee, virtual signings. Call (312) 373-0731.';
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

const breadcrumb = breadcrumbSchema([{ name: 'Chicago Powers of Attorney Lawyer', path: PATH }]);

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
