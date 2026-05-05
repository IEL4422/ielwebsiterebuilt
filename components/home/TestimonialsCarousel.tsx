'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GoogleReview } from '@/app/api/google-reviews/route';

// Google logo as inline SVG
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const sizeClass = size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${sizeClass} ${i <= rating ? 'fill-[#FBBC04] text-[#FBBC04]' : 'fill-slate-600 text-slate-600'}`}
        />
      ))}
    </div>
  );
}

type FallbackReview = {
  id: number;
  text: string;
  name: string;
  rating: number;
};

const FALLBACK_REVIEWS: FallbackReview[] = [
  { id: 1, rating: 5, text: "They handled my trust with care and explained every detail in plain language. I felt truly supported.", name: "Geraldine L." },
  { id: 2, rating: 5, text: "The flat fee structure meant no surprises. Everything was explained clearly from start to finish.", name: "Kim B." },
  { id: 3, rating: 5, text: "Stress-free experience from beginning to end. They answered every question patiently.", name: "Richard H." },
  { id: 4, rating: 5, text: "Transparent pricing and exceptional service. Made estate planning feel approachable.", name: "Jennifer L." },
  { id: 5, rating: 5, text: "I finally understand my estate plan thanks to their clear explanations. Highly professional.", name: "William C." },
  { id: 6, rating: 5, text: "No hidden fees, no pressure. Just honest, helpful guidance throughout the entire process.", name: "Diana R." },
];

type Review = {
  name: string;
  rating: number;
  text: string;
  time?: string;
  photoUrl?: string;
  isGoogle: boolean;
};

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

type Props = {
  initialReviews: GoogleReview[];
  overallRating: number;
  totalRatings: number;
  isLive: boolean;
};

export function TestimonialsCarousel({ initialReviews, overallRating, totalRatings, isLive }: Props) {
  const reviews: Review[] = isLive && initialReviews.length > 0
    ? initialReviews.map((r) => ({
        name: r.author_name,
        rating: r.rating,
        text: r.text,
        time: r.relative_time_description,
        photoUrl: r.profile_photo_url,
        isGoogle: true,
      }))
    : FALLBACK_REVIEWS.map((r) => ({
        name: r.name,
        rating: r.rating,
        text: r.text,
        isGoogle: false,
      }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const TRUNCATE_AT = 180;

  return (
    <section className="py-16 lg:py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">

          {/* Overall rating bar */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex items-center gap-3">
              <GoogleLogo className="w-6 h-6" />
              <span className="text-white font-['Plus_Jakarta_Sans'] font-bold text-2xl">
                {overallRating.toFixed(1)}
              </span>
              <StarRating rating={Math.round(overallRating)} size="md" />
            </div>
            {totalRatings > 0 && (
              <p className="text-slate-400 font-['Plus_Jakarta_Sans'] text-sm">
                Based on {totalRatings.toLocaleString()} Google reviews
              </p>
            )}
          </div>

          <p className="text-xl lg:text-2xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans']">
            Stress-Free and Transparent Estate Planning Experience
          </p>
          <div className="w-12 h-1 bg-[#77B1D4] mx-auto mb-8" />

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, i) => {
                  const isLong = review.text.length > TRUNCATE_AT;
                  const isExpanded = expanded.has(i);
                  const displayText = isLong && !isExpanded
                    ? review.text.slice(0, TRUNCATE_AT).trimEnd() + '…'
                    : review.text;

                  return (
                    <div key={i} className="w-full flex-shrink-0 px-2">
                      <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600">
                        {/* Stars */}
                        <div className="flex justify-center mb-3">
                          <StarRating rating={review.rating} />
                        </div>

                        {/* Review text */}
                        <p className="text-sm text-slate-200 mb-1 leading-relaxed text-center italic">
                          &ldquo;{displayText}&rdquo;
                        </p>
                        {isLong && (
                          <button
                            onClick={() =>
                              setExpanded((prev) => {
                                const next = new Set(prev);
                                next.has(i) ? next.delete(i) : next.add(i);
                                return next;
                              })
                            }
                            className="text-[#77B1D4] text-xs underline mb-3 hover:text-[#5A9BC4] transition-colors"
                          >
                            {isExpanded ? 'Show less' : 'Read more'}
                          </button>
                        )}

                        {/* Reviewer */}
                        <div className="flex items-center justify-center gap-3 mt-3">
                          {review.photoUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={review.photoUrl}
                              alt={review.name}
                              className="w-8 h-8 rounded-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-8 h-8 bg-[#77B1D4] rounded-full flex items-center justify-center shrink-0">
                              <span className="text-white text-xs font-semibold">
                                {initials(review.name)}
                              </span>
                            </div>
                          )}
                          <div className="text-left">
                            <p className="text-white text-sm font-medium leading-tight">
                              {review.name}
                            </p>
                            {review.time && (
                              <p className="text-slate-400 text-xs leading-tight">{review.time}</p>
                            )}
                          </div>
                          {review.isGoogle && (
                            <GoogleLogo className="w-4 h-4 ml-1 shrink-0" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={goToPrev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors border border-slate-600"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors border border-slate-600"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-[#77B1D4]' : 'bg-slate-600'}`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="https://share.google/Kt6O2VG1jlRRoNos9"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#77B1D4] text-white text-xs font-semibold rounded-full hover:bg-[#5A9BC4] transition-colors font-['Plus_Jakarta_Sans'] uppercase tracking-wide"
            >
              <GoogleLogo className="w-3.5 h-3.5" />
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
