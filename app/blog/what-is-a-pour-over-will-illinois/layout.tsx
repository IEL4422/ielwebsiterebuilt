import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Is a Pour-Over Will in Illinois? | Illinois Estate Law',
  description:
    'Learn what a pour-over will does in Illinois, how it works alongside a revocable living trust, and why this key document is essential for your estate plan.',
  openGraph: {
    title: 'What Is a Pour-Over Will in Illinois? | Illinois Estate Law',
    description:
      'Learn what a pour-over will does in Illinois, how it works alongside a revocable living trust, and why this key document is essential for your estate plan.',
    url: 'https://www.illinoisestatelaw.com/blog/what-is-a-pour-over-will-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'What Is a Pour-Over Will in Illinois? | Illinois Estate Law',
    description:
      'Learn what a pour-over will does in Illinois, how it works alongside a revocable living trust, and why this key document is essential for your estate plan.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/what-is-a-pour-over-will-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
