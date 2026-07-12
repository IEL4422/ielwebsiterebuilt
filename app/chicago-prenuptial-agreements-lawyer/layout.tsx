import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema } from '@/lib/seo';

const TITLE = 'Illinois Prenuptial Agreement Attorney | Illinois Estate Law';
const DESCRIPTION = 'Illinois prenuptial agreement attorney drafting clear, enforceable prenups under the Illinois Uniform Premarital Agreement Act. Flat fee. Call (312) 373-0731.';
const PATH = '/chicago-prenuptial-agreements-lawyer/';
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

const breadcrumb = breadcrumbSchema([{ name: 'Chicago Prenuptial Agreements Lawyer', path: PATH }]);

const service = serviceSchema({
  name: 'Illinois Prenuptial Agreements',
  description: 'Drafting and review of prenuptial agreements under the Illinois Uniform Premarital Agreement Act, coordinated with estate planning documents.',
  path: PATH,
  serviceType: 'Prenuptial agreement drafting',
});

export default function PrenuptialAgreementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      {children}
    </>
  );
}
