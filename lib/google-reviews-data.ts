/**
 * Google review numbers shown on the homepage.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The homepage used to call the Google Places API server-side on every render
 * and every ISR revalidation in order to show "5.0 based on 50 Google reviews".
 * On 6 September 2026 the Places API started returning REQUEST_DENIED, the
 * render threw inside Next's response-cache path, Next stored a broken ISR
 * entry for "/", and every subsequent request for "/" was answered with a 304
 * and no body. The homepage was blank for roughly two and a half days.
 *
 * A rating that changes a handful of times a year does not justify a live
 * third-party network call on the critical render path of a law firm's
 * homepage. It is a constant now. The homepage makes zero outbound HTTP
 * requests while rendering, so no third party can take it down. There is a
 * test that enforces exactly that: test/homepage-outage.test.tsx.
 *
 * HOW TO UPDATE (a few times a year, or whenever new reviews come in)
 * ------------------------------------------------------------------
 * 1. Check the current numbers. Either read them off the firm's Google
 *    Business Profile, or hit the site's own reviews route, which still talks
 *    to Google live and is never part of the homepage render:
 *        https://www.illinoisestatelaw.com/api/google-reviews?refresh=1
 * 2. Edit OVERALL_RATING and TOTAL_RATINGS below.
 * 3. Bump LAST_UPDATED and open a pull request.
 *
 * The testimonial text itself lives in components/home/TestimonialsCarousel.tsx
 * as FALLBACK_REVIEWS; edit it there. (Consolidating the two into this file is
 * a sensible follow-up, deliberately left out of the stabilisation change.)
 *
 * No API key, no runtime dependency, no way for this to go dark.
 */

/** Date the numbers below were last checked against Google. */
export const LAST_UPDATED = '2026-09-07';

/** Star rating shown next to the Google logo. */
export const OVERALL_RATING = 5.0;

/** Review count shown as "Based on N Google reviews". */
export const TOTAL_RATINGS = 50;
