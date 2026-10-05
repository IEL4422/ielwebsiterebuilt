import { TestimonialsCarousel } from './TestimonialsCarousel';
import { OVERALL_RATING, TOTAL_RATINGS } from '@/lib/google-reviews-data';

/**
 * Reviews block on the homepage.
 *
 * This component deliberately performs NO network I/O and is not async. It used
 * to fetch the Google Places API server-side with `next: { revalidate: 86400 }`;
 * when Google started returning REQUEST_DENIED on 6 September 2026 that failure
 * propagated into Next's response-cache machinery, poisoned the ISR entry for
 * "/", and the homepage served an empty 304 to every visitor for ~2.5 days.
 *
 * The verified rating comes from lib/google-reviews-data.ts; dynamic review
 * counts are omitted rather than kept as an unsupported hardcoded claim. The testimonial
 * text is the FALLBACK_REVIEWS list inside TestimonialsCarousel, which is what
 * the site has actually been displaying ever since the API key stopped working.
 */
export function TestimonialsSection() {
  const overallRating = Number.isFinite(OVERALL_RATING) ? OVERALL_RATING : 5;
  const totalRatings = Number.isFinite(TOTAL_RATINGS) ? TOTAL_RATINGS : 0;

  return (
    <TestimonialsCarousel
      initialReviews={[]}
      overallRating={overallRating}
      totalRatings={totalRatings}
      isLive={false}
    />
  );
}
