import Link from 'next/link';

interface CTABannerProps {
  title: string;
  subtitle: string;
}

export function CTABanner({ title, subtitle }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-[1140px] mx-auto text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Link
            href="https://www.illinoisestatelaw.com/book-consultation/"
            className="inline-flex items-center justify-center bg-white text-[#2D3E50] px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-colors text-base"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
