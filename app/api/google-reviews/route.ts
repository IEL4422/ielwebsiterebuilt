import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
  time: number;
};

type CachedReviews = {
  reviews: GoogleReview[];
  overallRating: number;
  totalRatings: number;
  fetchedAt: Date;
};

async function fetchFromGoogle(): Promise<CachedReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=reviews,rating,user_ratings_total` +
    `&reviews_sort=newest` +
    `&key=${apiKey}`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return null;

  const data = await res.json();
  if (data.status !== 'OK' || !data.result) return null;

  const { reviews = [], rating = 5, user_ratings_total = 0 } = data.result;

  // Only show 4- and 5-star reviews
  const filtered: GoogleReview[] = (reviews as GoogleReview[]).filter(
    (r) => r.rating >= 4
  );

  return {
    reviews: filtered,
    overallRating: rating,
    totalRatings: user_ratings_total,
    fetchedAt: new Date(),
  };
}

export async function GET() {
  try {
    const db = await getDb();
    const col = db.collection<CachedReviews>('googleReviewsCache');

    // Check cache
    const cached = await col.findOne({});
    if (
      cached &&
      Date.now() - new Date(cached.fetchedAt).getTime() < CACHE_TTL_MS
    ) {
      return NextResponse.json({
        reviews: cached.reviews,
        overallRating: cached.overallRating,
        totalRatings: cached.totalRatings,
        source: 'cache',
      });
    }

    // Fetch fresh from Google
    const fresh = await fetchFromGoogle();
    if (!fresh) {
      // Return cached data even if stale, rather than nothing
      if (cached) {
        return NextResponse.json({
          reviews: cached.reviews,
          overallRating: cached.overallRating,
          totalRatings: cached.totalRatings,
          source: 'stale-cache',
        });
      }
      return NextResponse.json({ reviews: [], overallRating: 5, totalRatings: 0, source: 'unavailable' });
    }

    // Upsert cache
    await col.replaceOne({}, fresh, { upsert: true });

    return NextResponse.json({
      reviews: fresh.reviews,
      overallRating: fresh.overallRating,
      totalRatings: fresh.totalRatings,
      source: 'google',
    });
  } catch (err) {
    console.error('google-reviews API error:', err);
    return NextResponse.json(
      { reviews: [], overallRating: 5, totalRatings: 0, source: 'error' },
      { status: 500 }
    );
  }
}
