import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const cities = [
  'Chicago',
  'Evanston',
  'Skokie',
  'Naperville',
  'Schaumburg',
  'Aurora',
  'Joliet',
  'Rockford',
  'Springfield',
  'Peoria',
  'Champaign',
  'Bloomington',
  'Decatur',
  'Quincy',
  'Carbondale',
];

export default function IllinoisCoverageSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#33414E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div>
            <p className="text-[#7E9CC0] text-xs font-bold uppercase tracking-widest mb-3">
              Service Area
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Serving All of Illinois
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
              We handle estate planning, probate, trust administration, and real estate law for clients in every county. Fully virtual — no office visit required.
            </p>

            {/* City chips grid */}
            <div className="grid grid-cols-2 gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {city}
                </span>
              ))}
              <span className="bg-[#7E9CC0]/20 text-[#7E9CC0] text-xs font-bold px-3 py-1.5 rounded-full">
                All 102 Counties
              </span>
            </div>

            {/* CTA */}
            <Link
              href="/locations/"
              className="mt-8 inline-flex items-center gap-2 bg-[#7E9CC0] hover:bg-[#547298] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              See All Locations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 h-full flex flex-col items-center justify-center text-center">
            <p className="text-6xl font-extrabold text-white">102</p>
            <p className="text-[#7E9CC0] text-lg font-bold mt-2">Illinois Counties Served</p>

            <div className="my-6 w-16 h-px bg-white/20 mx-auto" />

            <p className="text-4xl font-extrabold text-white">100%</p>
            <p className="text-[#7E9CC0] text-base font-bold mt-2">Virtual — No Office Visit Required</p>

            <div className="my-6 w-16 h-px bg-white/20 mx-auto" />

            <p className="text-4xl font-extrabold text-white">Same Week</p>
            <p className="text-[#7E9CC0] text-base font-bold mt-2">Appointment Availability</p>
          </div>

        </div>
      </div>
    </section>
  );
}
