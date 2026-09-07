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

/**
 * Why the failure detail is surfaced in the response body.
 *
 * The Places API answers a rejected request with `status: "REQUEST_DENIED"` and
 * an `error_message` that says exactly which of the usual causes applies - an
 * expired or invalid key, billing not enabled on the project, the Places API
 * not enabled, or an HTTP-referrer restriction that a server-side call can never
 * satisfy. The old code discarded `error_message`, which meant the only evidence
 * anyone had was the bare status and the causes were indistinguishable.
 *
 * `error_message` never contains the API key, so echoing it is safe and it is
 * the difference between diagnosing this in one request and guessing.
 */
type GoogleFailure = {
  /** Places API `status`, or a synthetic value for transport-level failures. */
  status: string;
  /** Places API `error_message`, verbatim, when Google supplied one. */
  errorMessage: string | null;
};

type GoogleResult =
  | { ok: true; value: CachedReviews }
  | { ok: false; failure: GoogleFailure };

async function fetchFromGoogle(): Promise<GoogleResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) {
    return {
      ok: false,
      failure: {
        status: 'NOT_CONFIGURED',
        errorMessage: 'GOOGLE_PLACES_API_KEY and/or GOOGLE_PLACE_ID are not set on this service.',
      },
    };
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=reviews,rating,user_ratings_total` +
    `&reviews_sort=newest` +
    `&key=${apiKey}`;

  let res: Response;
  try {
    res = await fetch(url, { cache: 'no-store' });
  } catch (err) {
    return {
      ok: false,
      failure: {
        status: 'TRANSPORT_ERROR',
        errorMessage: err instanceof Error ? err.message : String(err),
      },
    };
  }

  if (!res.ok) {
    return {
      ok: false,
      failure: { status: `HTTP_${res.status}`, errorMessage: res.statusText || null },
    };
  }

  let data: {
    status?: string;
    error_message?: string;
    result?: { reviews?: GoogleReview[]; rating?: number; user_ratings_total?: number };
  };
  try {
    data = await res.json();
  } catch (err) {
    return {
      ok: false,
      failure: {
        status: 'MALFORMED_RESPONSE',
        errorMessage: err instanceof Error ? err.message : String(err),
      },
    };
  }

  if (data.status !== 'OK' || !data.result) {
    return {
      ok: false,
      failure: {
        status: data.status ?? 'UNKNOWN',
        errorMessage: data.error_message ?? null,
      },
    };
  }

  const { reviews = [], rating = 5, user_ratings_total = 0 } = data.result;

  // Only show 4- and 5-star reviews
  const filtered: GoogleReview[] = (Array.isArray(reviews) ? reviews : []).filter(
    (r) => r.rating >= 4
  );

  return {
    ok: true,
    value: {
      reviews: filtered,
      overallRating: rating,
      totalRatings: user_ratings_total,
      fetchedAt: new Date(),
    },
  };
}

/**
 * Live Google reviews, cached in MongoDB for 24 hours.
 *
 * This route is `force-dynamic` and is NOT part of any page's render path. The
 * homepage used to call the Places API itself; it no longer does, and must not
 * again - see lib/google-reviews-data.ts for why. This route exists so the
 * current numbers can be checked on demand and pasted into that file.
 *
 * `?refresh=1` skips the 24-hour cache and goes straight to Google, which is
 * how you get a live `googleStatus` / `googleError` pair when something is
 * wrong with the key or the project.
 */
export async function GET(request: Request) {
  let skipCache = false;
  try {
    skipCache = new URL(request.url).searchParams.get('refresh') === '1';
  } catch {
    // Unparseable URL should never happen and must not break the route.
  }

  try {
    const db = await getDb();
    const col = db.collection<CachedReviews>('googleReviewsCache');

    // Check cache
    const cached = await col.findOne({});
    if (
      !skipCache &&
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

    if (!fresh.ok) {
      console.error(
        `google-reviews: Places API refused the request. status=${fresh.failure.status} error_message=${fresh.failure.errorMessage ?? '(none supplied)'}`
      );

      // Return cached data even if stale, rather than nothing
      if (cached) {
        return NextResponse.json({
          reviews: cached.reviews,
          overallRating: cached.overallRating,
          totalRatings: cached.totalRatings,
          source: 'stale-cache',
          googleStatus: fresh.failure.status,
          googleError: fresh.failure.errorMessage,
        });
      }
      return NextResponse.json({
        reviews: [],
        overallRating: 5,
        totalRatings: 0,
        source: 'unavailable',
        googleStatus: fresh.failure.status,
        googleError: fresh.failure.errorMessage,
      });
    }

    // Upsert cache
    await col.replaceOne({}, fresh.value, { upsert: true });

    return NextResponse.json({
      reviews: fresh.value.reviews,
      overallRating: fresh.value.overallRating,
      totalRatings: fresh.value.totalRatings,
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
