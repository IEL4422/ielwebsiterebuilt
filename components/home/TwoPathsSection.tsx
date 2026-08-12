import Link from 'next/link';
import { ArrowRight, Clock, Monitor } from 'lucide-react';

export function TwoPathsSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#F6F9FC]">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 lg:px-0">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#33414E] mb-3">
            Two ways to begin
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
Start online at your own pace, with the reassurance of clear pricing and a guided next step—or talk to us first. Your choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Path 1 – Online */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 flex flex-col hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#7E9CC0]/15 flex items-center justify-center mb-5">
              <Monitor className="w-6 h-6 text-[#547298]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#547298] mb-2">
              No consultation needed
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#33414E] mb-3">
              Find My Starting Package
            </h3>
            <p className="text-slate-500 leading-relaxed mb-6 flex-1">
              Answer a few questions, see a recommended starting package and flat fee, then review the online process before you enter the secure client portal.
            </p>
            <Link
              href="/recommended-service/"
              className="inline-flex items-center justify-center gap-2 bg-[#33414E] hover:bg-[#232D36] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Find my package
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Path 2 – Consultation */}
          <div className="bg-[#33414E] rounded-2xl p-8 lg:p-10 flex flex-col hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-[#7E9CC0]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#7E9CC0] mb-2">
              Prefer to talk first?
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
              Book a Free Consultation
            </h3>
            <p className="text-white/70 leading-relaxed mb-6 flex-1">
              Free, no obligation, same-week availability. Meet virtually or in person, whatever works for you.
            </p>
            <Link
              href="/book-consultation/"
              rel="nofollow"
              className="inline-flex items-center justify-center gap-2 bg-[#7E9CC0] hover:bg-[#547298] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
