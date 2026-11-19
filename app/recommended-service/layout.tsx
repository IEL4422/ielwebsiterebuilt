import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find the Right Help | Illinois Estate Law',
  description: 'Answer a few short questions about your situation and see which Illinois Estate Law package fits, with its flat fee. Call (312) 373-0731.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/recommended-service/',
  },
  robots: 'noindex, nofollow',
};

export default function RecommendedServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
