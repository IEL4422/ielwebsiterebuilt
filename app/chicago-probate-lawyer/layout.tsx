import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { probateFAQs, contestedProbateFAQs } from '@/lib/practice-faqs';

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

// Contested probate / will contests was consolidated into this page (the former
// /contested-probate-lawyer/ 301-redirects to /chicago-probate-lawyer/#contested).
// Its Service entity is preserved here with a distinct @id so it does not collide
// with the uncontested-probate Service node above.
const contestedService = {
  ...serviceSchema({
    name: 'Illinois Contested Probate, Will Contests, and Estate Litigation',
    description:
      'Representation of heirs, beneficiaries, executors, and administrators in contested Illinois probate matters — will contests based on undue influence, lack of testamentary capacity, fraud, or improper execution; disputed heirship; petitions to remove an executor or administrator; breach of fiduciary duty claims; and estate litigation generally.',
    path: PATH,
    serviceType: 'Contested probate and estate litigation',
  }),
  '@id': `${URL}#service-contested`,
};

// ONE FAQPage per URL. This page previously emitted two — this block plus a
// second, separately maintained FAQPage inlined in page.tsx. Google uses only
// one FAQPage per page and duplicates risk the markup being discarded, so the
// general-probate and contested-probate questions are merged into a single
// entity here. Both arrays are also what the visible accordions render.
const faq = faqPageSchema([...probateFAQs, ...contestedProbateFAQs], PATH);

export default function ChicagoProbateLawyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contestedService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
