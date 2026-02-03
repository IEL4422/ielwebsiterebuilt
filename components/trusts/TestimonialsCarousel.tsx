'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Katrina Talukder',
    text: 'This firm was exactly what I needed for my will and trust. They made complex things feel simple and gave me real peace of mind.',
    image: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/katrina-talukder.png',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Clanie',
    text: 'I used Illinois estate law for a probate matter for my grandfather and was very impressed. Highly recommend.',
    image: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/clanie.png',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Kim',
    text: 'Illinois Estate Law made the whole estate planning process so easy and stress-free. They explained everything clearly, answered all my questions, and offered a flat fee so I knew exactly what to expect.',
    image: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/kim.png',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Geraldine Louis Nuñez',
    text: "I'm so glad I chose Illinois Estate Law. They handled my trust with care and explained every detail in plain language. I felt truly supported.",
    image: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/geraldine-louis-nunez.png',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Marta Charli',
    text: "Illinois Estate Law was amazing to work with! They made everything super easy to understand and took the stress out of estate planning. Flat fees, no surprises, and really friendly people. I'd absolutely recommend them.",
    image: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/marta-charli.png',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Mohammad Arif',
    text: "Their team took time to understand my situation and customized everything to fit my family's needs. I highly recommend them for wills and trusts.",
    image: 'https://www.illinoisestatelaw.com/wp-content/uploads/2025/09/mohammad-arif.png',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Daniel Seyyedi',
    text: 'We had an excellent experience working with Illinois Estate Law. Mary was incredibly helpful, knowledgeable, and efficient throughout the entire process. She made what could have been a complicated experience feel smooth and manageable.',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Dane McKeehan',
    text: "Best Law Service we've ever used can't say enough good things. They set up our estate and succession plan for the future.",
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Luca Joanne',
    text: 'They gave me total confidence that my estate plan was done right. Everything was explained clearly and there were no hidden costs. So worth it!',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
  {
    name: 'Wyatt Moreno',
    text: 'Great experience with a great firm. Mary was knowledgeable, kind, and extremely responsive. Highly recommend.',
    link: 'https://share.google/Kt6O2VG1jlRRoNos9',
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1 text-yellow-400">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-4">
            Client Testimonials
          </h2>

          <div className="w-24 h-1 bg-[#77B1D4] mx-auto mb-12" />

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4 h-full">
                    <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                      <p className="text-slate-600 text-lg leading-relaxed mb-6 flex-grow">
                        {testimonial.text}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover"
                              width={48}
                              height={48}
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0" />
                          )}
                          <span className="font-semibold text-slate-800">
                            {testimonial.name}
                          </span>
                        </div>

                        <a
                          href={testimonial.link}
                          target="_blank"
                          rel="nofollow"
                          className="inline-block px-6 py-3 bg-[#77B1D4] text-white text-sm font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
                        >
                          READ FULL REVIEW ON GOOGLE
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
