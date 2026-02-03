import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Illinois Estate Law: Trusted Estate Planning Services',
  description: 'Illinois Estate Law provides estate planning services across Illinois. Call (312) 373-0731 today to protect your legacy.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/locations/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Illinois Estate Law: Trusted Estate Planning Services',
    description: 'Illinois Estate Law provides estate planning services across Illinois. Call (312) 373-0731 today to protect your legacy.',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Law: Trusted Estate Planning Services',
    description: 'Illinois Estate Law provides estate planning services across Illinois. Call (312) 373-0731 today to protect your legacy.',
  },
  other: {
    'dc:title': 'Illinois Estate Law: Trusted Estate Planning Services',
    'dc:description': 'Illinois Estate Law provides estate planning services across Illinois. Call (312) 373-0731 today to protect your legacy.',
    'dc:relation': 'https://www.illinoisestatelaw.com/locations/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
  verification: {
    google: 'UQ33juRONgyBt2yOx3hbWYuGIe6uW2Q9bI-nB2cFtD4',
  },
};

export default function LocationsPage() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
          <div className="container mx-auto max-w-[1140px] px-5 xl:px-0">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] font-normal capitalize text-white text-center">
              Locations
            </h1>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-white py-[60px] md:py-[40px] sm:py-6">
          <div className="container mx-auto max-w-[1140px] px-5 xl:px-0">
            <div className="flex flex-col gap-8 sm:gap-8">
              {/* Introduction Text */}
              <div className="text-base font-normal font-['Plus_Jakarta_Sans'] text-[#2D3E50]">
                <p className="mb-[0.9rem]">
                  In-person consultations are by appointment only. The fee for in-person consultations is $249 for an hour meeting. Said fee is applied as a credit to any purchased services/packages if you sign up with us. If you would prefer to book a virtual consultation, <a href="/contact/" className="text-[#011627] font-semibold underline hover:text-[#4A708B]">click here</a>. When requesting an in-person meeting, please specify the preferred location. In-person meetings are free for all active clients.
                </p>
              </div>

              {/* Locations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
                {/* Burr Ridge */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Burr Ridge
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    1333 Burr Ridge Parkway, Burr Ridge, Illinois 60527
                  </p>
                </div>

                {/* Chicago */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Chicago
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    125 S. Wacker, Ste 300, Chicago, Illinois 60606 (Loop)<br />
                    4422 N. Ravenswood Ave, Chicago, Illinois 60640 (Ravenswood)
                  </p>
                </div>

                {/* Downers Grove */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Downers Grove
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    5222 Main Street, Downers Grove, Illinois 60515
                  </p>
                </div>

                {/* Elgin */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Elgin
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    2250 Point Blvd, Elgin, Illinois 60123
                  </p>
                </div>

                {/* Hoffman Estates */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Hoffman Estates
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    5400 Prairie Stone Parkway, Hoffman Estates, Illinois 60192
                  </p>
                </div>

                {/* Lisle */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Lisle
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    3333 Warrenville Rd, Lisle, Illinois 60532
                  </p>
                </div>

                {/* Lombard */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Lombard
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    100 W 22nd Street, Lombard, Illinois 60148
                  </p>
                </div>

                {/* Naperville */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Naperville
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    10334 Route 59, Naperville, Illinois 60564
                  </p>
                </div>

                {/* Oakbrook */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Oakbrook
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    One Lincoln Centre - 18 W 140 Butterfield Rd., Oakbrook Terrace, Illinois 60181
                  </p>
                </div>

                {/* Orland Park */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Orland Park
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    15255 S. 94th Ave, Orland Park, Illinois 60462
                  </p>
                </div>

                {/* Park Ridge */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Park Ridge
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    222 S. Prospect Ave, Park Ridge, Illinois 60068
                  </p>
                </div>

                {/* Rolling Meadows */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Rolling Meadows
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    1600 Gold Rd, Suite 1200, Rolling Meadows, Illinois 60008
                  </p>
                </div>

                {/* Rosemont */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Rosemont
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    5600 N River Road, Rosemont, Illinois 60018
                  </p>
                </div>

                {/* Schaumburg */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Schaumburg
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    10 N. Martingale Rd., Schaumburg, Illinois 60173
                  </p>
                </div>

                {/* St. Charles */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    St. Charles
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    300 Cardinal Dr., St. Charles, Illinois 60175
                  </p>
                </div>

                {/* Warrenville */}
                <div className="bg-[#4A708B] p-5 flex flex-col">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#FEFEFE] mb-3">
                    Warrenville
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base font-medium text-[#F3F3F3]">
                    4320 Winfield Road, Ste 200, Warrenville, Illinois 60555
                  </p>
                </div>
              </div>

              {/* Booking Section */}
              <div className="flex flex-col mt-12">
                <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D3E50] mb-6">
                  Book In-Person Consultation
                </h2>

                {/* Calendly Widget */}
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/illinoisestatelaw/in-person-meeting-consultation?hide_gdpr_banner=1&primary_color=6a9cd6"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
