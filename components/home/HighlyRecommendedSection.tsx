'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I used Illinois estate law for a probate matter for my grandfather and was very impressed.",
    name: "Clanie",
  },
  {
    id: 2,
    text: "They made complex things feel simple and gave me real peace of mind with my will and trust.",
    name: "Katrina Talukder",
  },
  {
    id: 3,
    text: "Compassionate service during a difficult time. They handled everything professionally.",
    name: "David Morrison",
  },
  {
    id: 4,
    text: "Outstanding probate support. They kept me informed every step of the way.",
    name: "Linda Garcia",
  },
  {
    id: 5,
    text: "Finally found a firm that truly cares about their clients. Exceptional service.",
    name: "James Anderson",
  },
  {
    id: 6,
    text: "They simplified the entire probate process. Highly recommend their services.",
    name: "Emily Watson",
  },
];

export function HighlyRecommendedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-16 lg:py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#77B1D4] text-[#77B1D4]" />
            ))}
          </div>

          <p className="text-xl lg:text-2xl font-bold text-white mb-3">
            Highly Recommended for Compassionate and Professional Probate Services
          </p>
          <div className="w-12 h-1 bg-[#77B1D4] mx-auto mb-8" />

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600">
                      <p className="text-sm text-slate-200 mb-4 leading-relaxed text-center italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-[#77B1D4] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <span className="text-white text-sm font-medium">{testimonial.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToPrev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors border border-slate-600"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors border border-slate-600"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="flex justify-center gap-1.5 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-[#77B1D4]' : 'bg-slate-600'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-5">
            <a
              href="https://share.google/Kt6O2VG1jlRRoNos9"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-block px-5 py-2 bg-[#77B1D4] text-white text-xs font-semibold rounded-full hover:bg-[#5A9BC4] transition-colors"
            >
              READ ALL REVIEWS ON GOOGLE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
