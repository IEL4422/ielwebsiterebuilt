import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Handle Debt After Death in Illinois | Illinois Estate Law',
  description:
    "When someone dies in Illinois, their debts don't simply disappear. Learn which must be paid, who is responsible, and how heirs are protected during probate.",
  openGraph: {
    title: 'How to Handle Debt After Death in Illinois | Illinois Estate Law',
    description:
      "When someone dies in Illinois, their debts don't simply disappear. Learn which must be paid, who is responsible, and how heirs are protected during probate.",
    url: 'https://www.illinoisestatelaw.com/blog/how-to-handle-deceased-persons-debt-illinois/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'How to Handle Debt After Death in Illinois | Illinois Estate Law',
    description:
      "When someone dies in Illinois, their debts don't simply disappear. Learn which must be paid, who is responsible, and how heirs are protected during probate.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.illinoisestatelaw.com/blog/how-to-handle-deceased-persons-debt-illinois/' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
