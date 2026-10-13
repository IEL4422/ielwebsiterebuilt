import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { InlineChat } from '@/components/integrations/InlineChat';

export function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Chat with Our AI Assistant
            </h2>

            {/* Preserve the message field marker used by the homepage uptime monitor. */}
            <InlineChat inputId="form-field-message" />
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <Calendar className="w-16 h-16 text-[#7E9CC0] mb-6" />
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Schedule a Consultation
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-sm">
              Ready to protect your family&apos;s future? Book a consultation with our estate planning attorneys.
            </p>
            <Link
              href="/book-consultation/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#7E9CC0] text-white font-semibold text-lg rounded-lg hover:bg-[#5A9BC4] transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
