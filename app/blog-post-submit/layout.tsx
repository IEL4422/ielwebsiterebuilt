import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submit Blog Post | Illinois Estate Law',
  description: 'Submit a blog post to Illinois Estate Law. Share your insights on estate planning, probate, and related topics.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/blog-post-submit/',
  },
  robots: 'noindex, nofollow',
};

export default function BlogPostSubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
