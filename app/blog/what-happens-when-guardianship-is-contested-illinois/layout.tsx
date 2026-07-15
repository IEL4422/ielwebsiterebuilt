import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Happens When a Guardianship Is Contested in Illinois? | Illinois Estate Law',
  description:
    'When a family disagrees or the proposed ward objects, an Illinois guardianship becomes litigation. Learn how a contested guardianship unfolds, the standard of proof, and how fees work.',
  openGraph: {
    title: 'What Happens When a Guardianship Is Contested in Illinois? | Illinois Estate Law',
    description:
      'When a family disagrees or the proposed ward objects, an Illinois guardianship becomes litigation. Learn how a contested guardianship unfolds, the standard of proof, and how fees work.',
    url: 'https://www.illinoisestatelaw.com/blog/what-happens-when-guardianship-is-contested-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'What Happens When a Guardianship Is Contested in Illinois? | Illinois Estate Law',
    description:
      'When a family disagrees or the proposed ward objects, an Illinois guardianship becomes litigation. Learn how a contested guardianship unfolds, the standard of proof, and how fees work.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/what-happens-when-guardianship-is-contested-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
