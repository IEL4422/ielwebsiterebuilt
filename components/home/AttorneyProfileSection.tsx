'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: "We were nervous about setting up a trust but they made it simple and stress free. Honest advice and no surprise fees.",
    name: "Jaime Fonseca",
    link: "https://share.google/Kt6O2VG1jlRRoNos9",
  },
  {
    id: 2,
    text: "Great experience start to finish. Would highly recommend. Mary is prompt, courteous and professional.",
    name: "Nicholas Slobodian",
    link: "https://share.google/Kt6O2VG1jlRRoNos9",
  },
  {
    id: 3,
    text: "Mary was incredibly helpful in guiding us through the estate planning process. Her expertise put our minds at ease.",
    name: "Sarah Mitchell",
    link: "https://share.google/Kt6O2VG1jlRRoNos9",
  },
  {
    id: 4,
    text: "Professional, knowledgeable, and genuinely caring. The flat-fee structure made budgeting simple.",
    name: "Robert Chen",
    link: "https://share.google/Kt6O2VG1jlRRoNos9",
  },
  {
    id: 5,
    text: "Handled our probate case with compassion and efficiency. Highly recommend Illinois Estate Law.",
    name: "Patricia Williams",
    link: "https://share.google/Kt6O2VG1jlRRoNos9",
  },
  {
    id: 6,
    text: "Clear communication throughout the entire process. Mary made complex legal matters easy to understand.",
    name: "Michael Torres",
    link: "https://share.google/Kt6O2VG1jlRRoNos9",
  },
];

export function AttorneyProfileSection() {
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
    <>
      <section className="py-10 lg:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 mb-12">
              <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                <Image
                  src="https://i.imgur.com/6wIB2nu.jpeg"
                  alt="Mary Liberty - Chicago Estate Planning Attorney"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">
                <a href="/about/" className="hover:text-[#77B1D4] transition-colors">
                  Chicago Estate Planning Attorney - Mary Liberty
                </a>
              </h2>
              <div className="w-16 h-1 bg-[#77B1D4] mx-auto mb-6" />
              <div className="text-slate-600 space-y-4 leading-relaxed">
                <p>
                  Mary Liberty is the Lead Attorney and Owner of Illinois Estate Law, where she focuses her practice on estate planning and probate. She works closely with individuals and families to create clear, customized legal plans that reflect their goals. From wills and trusts to powers of attorney and guardianship matters, Mary provides a thoughtful, client-first approach to every step of the process. Her practice includes full support for probate matters throughout the state of Illinois.
                </p>
                <p>
                  A graduate of Loyola University Chicago School of Law (2020, cum laude) and former Thomas More Merit Scholar, Mary brings both academic excellence and a strong service ethic to her legal work. She was named a 2025 and 2026 Rising Star by SuperLawyers, a recognition awarded to attorneys who show strong peer recognition and professional achievement. Mary offers modern, flat-fee estate planning and probate services throughout Illinois.
                </p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <p className="text-xl lg:text-2xl font-bold text-white mb-3">
                Talk to Your Attorney Anytime, Unlimited Communication Included
              </p>
              <p className="text-slate-300 mb-6">
                No hourly billing for questions - ask anything, anytime
              </p>
              <a
                href="/get-started/"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
              >
                GET STARTED TODAY
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#77B1D4] text-[#77B1D4]" />
              ))}
            </div>

            <p className="text-xl lg:text-2xl font-bold text-slate-800 text-center mb-3">
              The Estate Planning Decision You Won't Regret
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
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
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
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-md border border-slate-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <button
                onClick={goToNext}
                className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-md border border-slate-200"
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
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-[#77B1D4]' : 'bg-slate-300'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-5">
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
    </>
  );
}
