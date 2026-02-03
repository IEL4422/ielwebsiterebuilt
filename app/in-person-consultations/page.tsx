import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'In-Person Consultations | Illinois Estate Law',
  description: 'Schedule an in-person consultation with Mary Liberty to discuss your estate planning needs.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/in-person-consultations/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'In-Person Consultations | Illinois Estate Law',
    description: 'Schedule an in-person consultation with Mary Liberty to discuss your estate planning needs.',
  },
  twitter: {
    card: 'summary',
    title: 'In-Person Consultations | Illinois Estate Law',
    description: 'Schedule an in-person consultation with Mary Liberty to discuss your estate planning needs.',
  },
};

export default function InPersonConsultationsPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">
              In-Person Consultations
            </h1>
          </div>
        </div>
      </section>

      {/* Calendly Widget Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/illinoisestatelaw/in-person-meeting-consultation?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=577db9"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
