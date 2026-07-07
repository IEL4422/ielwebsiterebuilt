import Link from 'next/link';
import { ArrowRight, HelpCircle, LayoutList } from 'lucide-react';

export default function WhichServiceSection() {
  return (
    <section className="bg-[#F6F9FC] py-12 lg:py-16">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-5 lg:px-0">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#547298] mb-3">
            Not sure where to start?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#33414E]">
            Find the Right Service in 60 Seconds
          </h2>
          <p className="text-slate-500 text-base max-w-lg mx-auto mt-3">
            Answer three quick questions and we'll point you to exactly the right service — and show you the flat fee upfront.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Card 1 — Quiz/Recommendation */}
          <div className="bg-[#33414E] rounded-2xl p-8 flex flex-col">
            <HelpCircle className="w-10 h-10 text-[#7E9CC0] mb-4" />
            <h3 className="text-xl font-extrabold text-white mb-2">
              Which service do I need?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Take our 60-second quiz to find the right service and see your flat fee.
            </p>
            <div className="mt-auto">
              <Link
                href="/recommended-service/"
                className="bg-[#7E9CC0] hover:bg-[#547298] text-white font-bold text-sm px-5 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                Take the Quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 — Compare packages */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col hover:border-[#7E9CC0] hover:shadow-md transition-all">
            <LayoutList className="w-10 h-10 text-[#547298] mb-4" />
            <h3 className="text-xl font-extrabold text-[#33414E] mb-2">
              Compare all packages
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              See a side-by-side breakdown of every service and package with exact pricing included.
            </p>
            <div className="mt-auto">
              <Link
                href="/compare-packages/"
                className="bg-[#33414E] hover:bg-[#232D36] text-white font-bold text-sm px-5 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
              >
                View Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
