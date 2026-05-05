import { TestimonialsCarousel } from './TestimonialsCarousel';
import type { GoogleReview } from '@/app/api/google-reviews/route';

async function getGoogleReviews(): Promise<{
  reviews: GoogleReview[];
  overallRating: number;
  totalRatings: number;
  isLive: boolean;
}> {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // Keys not configured yet — use fallback silently
    if (!apiKey || !placeId) {
      return { reviews: [], overallRating: 5.0, totalRatings: 50, isLive: false };
    }

    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${placeId}` +
      `&fields=reviews,rating,user_ratings_total` +
      `&reviews_sort=newest` +
      `&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // cache for 24 hours via Next.js ISR
    });

    if (!res.ok) throw new Error('Places API error');

    const data = await res.json();
    if (data.status !== 'OK' || !data.result) {
      throw new Error(`Places API status: ${data.status}`);
    }

    const { reviews = [], rating = 5, user_ratings_total = 0 } = data.result;
    const filtered: GoogleReview[] = (reviews as GoogleReview[]).filter(
      (r) => r.rating >= 4
    );

    return {
      reviews: filtered,
      overallRating: rating,
      totalRatings: user_ratings_total,
      isLive: filtered.length > 0,
    };
  } catch (err) {
    console.error('Failed to fetch Google reviews:', err);
    return { reviews: [], overallRating: 5.0, totalRatings: 50, isLive: false };
  }
}

export async function TestimonialsSection() {
  const { reviews, overallRating, totalRatings, isLive } = await getGoogleReviews();

  return (
    <TestimonialsCarousel
      initialReviews={reviews}
      overallRating={overallRating}
      totalRatings={totalRatings}
      isLive={isLive}
    />
  );
}
