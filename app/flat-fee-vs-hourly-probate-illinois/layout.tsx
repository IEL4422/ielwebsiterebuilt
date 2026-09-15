import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { flatFeeVsHourlyFAQs } from '@/lib/comparison-faqs';

const TITLE = 'Flat-Fee vs. Hourly Probate in Illinois: How Probate Attorneys Charge';
const DESCRIPTION =
  'How Illinois probate attorneys charge: flat fee vs. hourly, what an all-inclusive flat fee covers, why contested probate is billed hourly, and when a matter converts. Illinois-specific, with statutory citations.';
const PATH = '/flat-fee-vs-hourly-probate-illinois/';
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
    type: 'article',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Chicago Probate Lawyer', path: '/chicago-probate-lawyer/' },
  { name: 'Flat-Fee vs. Hourly Probate', path: PATH },
]);

const service = serviceSchema({
  name: 'Flat-Fee Illinois Probate Administration',
  description:
    'Flat-fee representation of executors and administrators in uncontested Illinois probate, inclusive of court filing fees, creditor publication, and recording costs, with hourly billing reserved for contested matters.',
  path: PATH,
  serviceType: 'Probate and estate administration',
});

const faq = faqPageSchema(flatFeeVsHourlyFAQs, PATH);

export default function FlatFeeVsHourlyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
