import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { diyVsAttorneyFAQs } from '@/lib/comparison-faqs';

const TITLE = 'DIY vs. Attorney Estate Planning in Illinois: When Doing It Yourself Works';
const DESCRIPTION =
  'Can you write your own will in Illinois? What Illinois law actually requires, what fails most often in do-it-yourself estate plans, when DIY is reasonable, and when it is not. With statutory citations.';
const PATH = '/diy-vs-attorney-estate-planning-illinois/';
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
  { name: 'Estate Planning', path: '/estate-planning/' },
  { name: 'DIY vs. Attorney Estate Planning', path: PATH },
]);

const service = serviceSchema({
  name: 'Illinois Estate Plan Document Review',
  description:
    'Flat-fee attorney review of self-prepared Illinois wills, trusts, and powers of attorney, confirming compliance with Illinois execution requirements and identifying funding and beneficiary-designation gaps.',
  path: PATH,
  serviceType: 'Estate planning document review',
});

const faq = faqPageSchema(diyVsAttorneyFAQs, PATH);

export default function DiyVsAttorneyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
