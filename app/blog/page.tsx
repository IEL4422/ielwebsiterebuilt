import BlogContent, { BlogPost } from './BlogContent';
import { blogPosts as staticPosts } from '@/lib/blog-posts-data';

function inferTopic(slug: string): string {
  if (/real-estate|deed|title-search|title-insurance|closing|quitclaim|warranty-deed|transfer-tax|home-seller|attorney-review-period|sell-a-house-during-probate|hold-title|put-your-house-in-a-trust/.test(slug)) return 'Real Estate';
  if (/trust|trustee/.test(slug)) return 'Trusts';
  if (/contest-a-will|will-contest/.test(slug)) return 'Probate';
  if (/probate|executor|estate-bank|small-estate|surety-bond/.test(slug)) return 'Probate';
  if (/power-of-attorney/.test(slug)) return 'Powers of Attorney';
  if (/guardian/.test(slug)) return 'Guardianship';
  if (/dying-without-a-will|financial-impact-of-dying/.test(slug)) return 'Estate Planning';
  if (/what-makes-a-will-valid|will-package|\bwills?\b/.test(slug)) return 'Wills';
  return 'Estate Planning';
}

export default async function BlogPage() {
  // Build the post list entirely on the server — no client-side fetch needed for initial render
  const posts: BlogPost[] = staticPosts.map((p) => ({
    id: p.slug,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt || p.summary,
    published_date: new Date(p.date).toISOString(),
    topic: inferTopic(p.slug),
    featured_image: '',
    author: 'Mary Liberty',
  }));

  posts.sort((a, b) =>
    new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
  );

  return <BlogContent initialPosts={posts} />;
}
