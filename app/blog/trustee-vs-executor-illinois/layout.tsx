import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trustee vs. Executor in Illinois | Illinois Estate Law',
  description:
    'Learn the difference between a trustee and executor in Illinois — what each role requires and how to choose the right person for your estate plan.',
  openGraph: {
    title: 'Trustee vs. Executor in Illinois | Illinois Estate Law',
    description:
      'Learn the difference between a trustee and executor in Illinois — what each role requires and how to choose the right person for your estate plan.',
    url: 'https://www.illinoisestatelaw.com/blog/trustee-vs-executor-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Trustee vs. Executor in Illinois | Illinois Estate Law',
    description:
      'Learn the difference between a trustee and executor in Illinois — what each role requires and how to choose the right person for your estate plan.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/trustee-vs-executor-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
