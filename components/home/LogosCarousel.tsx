'use client';

import Image from 'next/image';

const logos = [
  {
    src: 'https://i.imgur.com/kKwEUKc.png',
    alt: 'The Chicago Bar Association',
  },
  {
    src: 'https://i.imgur.com/Xyw9Xe0.png',
    alt: 'The Daily Leader',
  },
  {
    src: 'https://i.imgur.com/0omxArO.png',
    alt: 'The Daily News',
  },
  {
    src: 'https://i.imgur.com/X4cAJuf.png',
    alt: 'Illinois State Bar Association',
  },
  {
    src: 'https://i.imgur.com/X5rbhlp.png',
    alt: 'Rising Stars',
  },
  {
    src: 'https://i.imgur.com/FAFvKU9.png',
    alt: 'State Journal',
  },
  {
    src: 'https://i.imgur.com/H4tRliA.png',
    alt: 'Digital Journal',
  },
];

export function LogosCarousel() {
  return (
    <section className="py-[30px] overflow-hidden">
      <div className="flex animate-scroll gap-5">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={60}
              className="h-[60px] w-[150px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
