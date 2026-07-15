import type { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, faqPageSchema } from '@/lib/seo';
import { contestedProbateFAQs } from './faqs';

const TITLE =
  'Contested Probate & Will Contest Attorney Illinois | Estate Litigation | Illinois Estate Law';
const DESCRIPTION =
  'Illinois will contest and contested probate attorneys. Undue influence, lack of capacity, executor removal, and estate litigation in Cook, DuPage, Lake, Will, Kane & McHenry County. Call (312) 373-0731.';
const PATH = '/contested-probate-lawyer/';
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
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const breadcrumb = breadcrumbSchema([
  { name: 'Contested Probate & Will Contests', path: PATH },
]);

const service = serviceSchema({
  name: 'Illinois Contested Probate, Will Contests, and Estate Litigation',
  description:
    'Representation of heirs, beneficiaries, executors, and administrators in contested Illinois probate matters — will contests based on undue influence, lack of testamentary capacity, fraud, or improper execution; disputed heirship; petitions to remove an executor or administrator; breach of fiduciary duty claims; and estate litigation generally.',
  path: PATH,
  serviceType: 'Contested probate and estate litigation',
});

const faq = faqPageSchema(contestedProbateFAQs, PATH);

export default function ContestedProbateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      {children}
    </>
  );
}
