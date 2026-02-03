import { Metadata } from 'next';
import { ShoppingCart, HelpCircle, Calendar, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Started | Illinois Estate Law',
  description: 'Get started with Illinois Estate Law. Choose your service, sign the agreement, and get started today.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/get-started/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Get Started | Illinois Estate Law',
    description: 'Get started with Illinois Estate Law. Choose your service, sign the agreement, and get started today.',
  },
  twitter: {
    card: 'summary',
    title: 'Get Started | Illinois Estate Law',
    description: 'Get started with Illinois Estate Law. Choose your service, sign the agreement, and get started today.',
  },
  other: {
    'dc:title': 'Get Started | Illinois Estate Law',
    'dc:description': 'Get started with Illinois Estate Law. Choose your service, sign the agreement, and get started today.',
    'dc:relation': 'https://www.illinoisestatelaw.com/get-started/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
};

export default function GetStartedPage() {
  return (
    <main>
      <section
        className="relative min-h-[180px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center py-6 lg:min-h-[160px] sm:min-h-[140px]"
      >
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Get started
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <a
              href="/purchase-service/"
              className="group flex items-center gap-4 p-6 lg:p-8 bg-white border-2 border-[#4a708b] rounded-lg hover:bg-[#4a708b] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-[#4a708b] group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                <ShoppingCart className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#4a708b] transition-all duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl lg:text-2xl font-bold text-[#2D3E50] group-hover:text-white transition-all duration-300">
                  Purchase a Service
                </h3>
                <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm lg:text-base text-gray-600 group-hover:text-white/90 transition-all duration-300">
                  Browse and select from our service offerings
                </p>
              </div>
            </a>

            <a
              href="/recommended-service/"
              className="group flex items-center gap-4 p-6 lg:p-8 bg-white border-2 border-[#4a708b] rounded-lg hover:bg-[#4a708b] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-[#4a708b] group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                <HelpCircle className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#4a708b] transition-all duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl lg:text-2xl font-bold text-[#2D3E50] group-hover:text-white transition-all duration-300">
                  Help Me Select a Service
                </h3>
                <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm lg:text-base text-gray-600 group-hover:text-white/90 transition-all duration-300">
                  Not sure which service is right for you?
                </p>
              </div>
            </a>

            <a
              href="/book-consultation/"
              className="group flex items-center gap-4 p-6 lg:p-8 bg-white border-2 border-[#4a708b] rounded-lg hover:bg-[#4a708b] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-[#4a708b] group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                <Calendar className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#4a708b] transition-all duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl lg:text-2xl font-bold text-[#2D3E50] group-hover:text-white transition-all duration-300">
                  Book a Consultation
                </h3>
                <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm lg:text-base text-gray-600 group-hover:text-white/90 transition-all duration-300">
                  Schedule a time to speak with our team
                </p>
              </div>
            </a>

            <a
              href="/contact/"
              className="group flex items-center gap-4 p-6 lg:p-8 bg-white border-2 border-[#4a708b] rounded-lg hover:bg-[#4a708b] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-[#4a708b] group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300">
                <MessageSquare className="w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:text-[#4a708b] transition-all duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl lg:text-2xl font-bold text-[#2D3E50] group-hover:text-white transition-all duration-300">
                  Send Legal Team a Message
                </h3>
                <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm lg:text-base text-gray-600 group-hover:text-white/90 transition-all duration-300">
                  Have a question? Send us a message
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
