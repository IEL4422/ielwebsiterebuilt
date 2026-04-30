import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export const runtime = 'nodejs';
export const revalidate = 300; // 5-minute cache

export async function GET() {
  try {
    const db = await getDb();

    const posts = await db
      .collection('blogPosts')
      .find(
        { publishedDate: { $lte: new Date() } },
        {
          projection: {
            _id: 1,
            title: 1,
            slug: 1,
            metaDescription: 1,
            publishedDate: 1,
            topic: 1,
          },
        }
      )
      .sort({ publishedDate: -1 })
      .toArray();

    // Shape matches what the blog page already expects from Supabase
    const shaped = posts.map((p) => ({
      id: String(p._id),
      title: String(p.title),
      slug: String(p.slug),
      excerpt: String(p.metaDescription || p.title),
      published_date: (p.publishedDate as Date).toISOString(),
      topic: String(p.topic || 'Estate Planning'),
      featured_image: '',
      author: 'Illinois Estate Law',
    }));

    return NextResponse.json(shaped);
  } catch (err) {
    console.error('blog-posts API error:', err);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
