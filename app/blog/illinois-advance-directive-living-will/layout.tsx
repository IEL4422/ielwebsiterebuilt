import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is an Advance Directive in Illinois? | Illinois Estate Law',
  description:
    'Learn what an Illinois advance directive and living will do, how to execute them, who needs one, and how they work with your power of attorney for healthcare.',
  openGraph: {
    title: 'What Is an Advance Directive in Illinois? | Illinois Estate Law',
    description:
      'Learn what an Illinois advance directive and living will do, how to execute them, who needs one, and how they work with your power of attorney for healthcare.',
    url: 'https://www.illinoisestatelaw.com/blog/illinois-advance-directive-living-will/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'What Is an Advance Directive in Illinois? | Illinois Estate Law',
    description:
      'Learn what an Illinois advance directive and living will do, how to execute them, who needs one, and how they work with your power of attorney for healthcare.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/illinois-advance-directive-living-will/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
