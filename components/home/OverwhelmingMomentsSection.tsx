'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "They guided me through contesting a will. Professional, strong advocates who truly know their stuff.",
    name: "Ange Love",
  },
  {
    id: 2,
    text: "I felt overwhelmed handling my mother's estate, but they put my mind at ease completely.",
    name: "Casmil Witgar",
  },
  {
    id: 3,
    text: "During the most difficult time, they provided steady guidance and genuine compassion.",
    name: "Thomas Bradley",
  },
  {
    id: 4,
    text: "They turned a complicated situation into something manageable. Forever grateful.",
    name: "Susan Reynolds",
  },
  {
    id: 5,
    text: "Patient, understanding, and thorough. They made sure I understood every detail.",
    name: "Anthony Nguyen",
  },
  {
    id: 6,
    text: "When I was lost in paperwork and grief, they stepped in and took charge professionally.",
    name: "Margaret O'Brien",
  },
];

export function OverwhelmingMomentsSection() {
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
    <section className="py-16 lg:py-20 bg-[#E5F2F9]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#77B1D4] text-[#77B1D4]" />
            ))}
          </div>

          <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-3">
            Turn Overwhelming Moments into Manageable Steps
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
                    <div className="bg-white rounded-2xl p-6 border border-[#A8D4ED]">
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed text-center italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">{testimonial.name.charAt(0)}</span>
                        </div>
                        <span className="text-slate-800 text-sm font-medium">{testimonial.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={goToPrev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#D4EAF5] transition-colors shadow-md border border-[#A8D4ED]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#D4EAF5] transition-colors shadow-md border border-[#A8D4ED]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>

          <div className="flex justify-center gap-1.5 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-[#77B1D4]' : 'bg-[#A8D4ED]'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-5">
            <a
              href="https://maps.app.goo.gl/ukgQFvJjphvX4bDE6"
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
