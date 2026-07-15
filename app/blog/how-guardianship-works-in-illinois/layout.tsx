import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Guardianship Works in Illinois: The Complete 2026 Guide | Illinois Estate Law',
  description:
    'How guardianship works in Illinois: who needs a guardian, the court process step by step, a guardian’s duties, costs, and least-restrictive alternatives like a power of attorney.',
  openGraph: {
    title: 'How Guardianship Works in Illinois: The Complete 2026 Guide | Illinois Estate Law',
    description:
      'How guardianship works in Illinois: who needs a guardian, the court process step by step, a guardian’s duties, costs, and least-restrictive alternatives like a power of attorney.',
    url: 'https://www.illinoisestatelaw.com/blog/how-guardianship-works-in-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'How Guardianship Works in Illinois: The Complete 2026 Guide | Illinois Estate Law',
    description:
      'How guardianship works in Illinois: who needs a guardian, the court process step by step, a guardian’s duties, costs, and least-restrictive alternatives like a power of attorney.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/how-guardianship-works-in-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
