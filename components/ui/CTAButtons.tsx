import Link from 'next/link';

interface CTAButtonsProps {
  /** Horizontal alignment of the button pair from the `sm` breakpoint up. */
  align?: 'center' | 'start';
  className?: string;
}

/**
 * Paired call-to-action buttons: "Get Started" and "Book a Free Consultation".
 * Styling mirrors the site header CTAs so these match the rest of the site
 * exactly. Buttons stack full-width on mobile and sit inline from `sm` up.
 */
export function CTAButtons({ align = 'center', className = '' }: CTAButtonsProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${
        align === 'center' ? 'sm:justify-center' : 'sm:justify-start'
      } ${className}`}
    >
      <Link
        href="/get-started/"
        className="inline-flex items-center justify-center rounded-full bg-[#547298] px-7 py-3.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(84,114,152,0.28)] hover:bg-[#4A708B] transition-colors whitespace-nowrap"
      >
        Get Started
      </Link>
      <Link
        href="/book-consultation/"
        className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-7 py-3.5 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] hover:bg-[#F6F9FC] transition-colors whitespace-nowrap"
      >
        Book a Free Consultation
      </Link>
    </div>
  );
}

interface CTABandProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Full-width call-to-action band wrapping the paired CTA buttons. Used to give
 * practice-area pages a prominent CTA at additional scroll positions. With no
 * title/subtitle it renders as a slim button strip (e.g. directly under a hero).
 */
export function CTABand({ title, subtitle, className = '' }: CTABandProps) {
  const compact = !title && !subtitle;
  return (
    <section
      className={`bg-[#F6F9FC] border-y border-[#E3EAF1] ${
        compact ? 'py-8' : 'py-12 lg:py-16'
      } ${className}`}
    >
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5 text-center">
        {title && (
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#33414E] mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <CTAButtons />
      </div>
    </section>
  );
}
