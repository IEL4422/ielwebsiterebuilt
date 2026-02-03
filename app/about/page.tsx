import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Illinois Estate Law: Experienced Estate Planning and Probate Lawyers',
  description: "Illinois Estate Law: Get top-rated estate planning and probate guidance tailored to your needs. Start securing your family's future today!",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/about/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/about/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Illinois Estate Law: Experienced Estate Planning and Probate Lawyers',
    description: "Illinois Estate Law: Get top-rated estate planning and probate guidance tailored to your needs. Start securing your family's future today!",
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Law: Experienced Estate Planning and Probate Lawyers',
    description: "Illinois Estate Law: Get top-rated estate planning and probate guidance tailored to your needs. Start securing your family's future today!",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* About Header Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">About</h1>
          </div>
        </div>
      </section>

      {/* Mary Liberty - Attorney Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-6 lg:p-8 mb-12 shadow-sm">
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-800">
                <span id="About-Us-Illinois-Estate-Law-Your-Experienced-Estate-Planning-Professionals"></span>
                About Us - Illinois Estate Law: Your Experienced Estate Planning Professionals
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Content */}
              <div className="lg:col-span-2">
                {/* Mobile Image - Show only on mobile */}
                <div className="lg:hidden mb-8">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://i.imgur.com/6wIB2nu.jpeg"
                      alt="Mary Liberty - Attorney"
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-800">
                  <span id="Mary-Liberty-Attorney"></span>
                  Mary Liberty - Attorney
                </h2>

                <div className="w-16 h-1 bg-[#77B1D4] mb-8"></div>

                <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
                  <p>Mary Liberty is a Chicago-based estate planning and probate attorney who blends modern convenience with genuine human connection. She founded her virtual law practice with one mission in mind: to make high-quality legal planning accessible, affordable, and stress-free for families.</p>

                  <p>Her work focuses on estate planning, probate, and her unique partial probate service, which helps clients smoothly transition their case from another attorney when communication or costs have become a problem. She&apos;s known for handling these matters with precision, empathy, and a dedication to clear communication.</p>

                  <p>Unlike traditional firms, Mary operates on a 100% flat-fee model. There are no hourly bills, no hidden fees, and no surprise charges. Every client knows exactly what to expect from day one. And because her practice is entirely online, you can complete your entire legal process, from consultation to signed documents, without leaving your home.</p>

                  <p>Mary works with a wide range of clients, from young parents naming guardians for the first time to blended families navigating complex dynamics. She is especially trusted by busy, tech-savvy professionals who appreciate her responsiveness, clear explanations, and ability to guide them through sensitive decisions without unnecessary stress.</p>

                  <p>Clients often describe Mary as approachable, detail-oriented, and refreshingly transparent. They know she will respond quickly, explain everything in plain language, and take the time to understand their goals before recommending a solution.</p>

                  <p>When she&apos;s not practicing law, Mary enjoys spending time with her family and her husband, going on adventures with her dog Margo, traveling, trying new restaurants, watching movies, and reading all types of books.</p>
                </div>

                <div className="mt-12">
                  <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-6">Education</p>

                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3">
                    <span id="University-of-Illinois-Urbana-Champaign"></span>
                    University of Illinois Urbana-Champaign
                  </h3>

                  <ul className="mb-8">
                    <li className="flex items-start gap-3 text-slate-600">
                      <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="mt-2 flex-shrink-0">
                        <circle cx="6" cy="6" fill="#77B1D4" r="6"></circle>
                      </svg>
                      <span>Bachelor&apos;s degree, Political Science &amp; Social Work</span>
                    </li>
                  </ul>

                  <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3">
                    <span id="Loyola-University-Chicago-School-of-Law"></span>
                    Loyola University Chicago School of Law
                  </h3>

                  <ul className="mb-8">
                    <li className="flex items-start gap-3 text-slate-600">
                      <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="mt-2 flex-shrink-0">
                        <circle cx="6" cy="6" fill="#77B1D4" r="6"></circle>
                      </svg>
                      <span>Doctor of Law (J.D.), (Cum Laude)</span>
                    </li>
                  </ul>

                  <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">Bar Admission</p>

                  <ul>
                    <li className="flex items-start gap-3 text-slate-600">
                      <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="mt-2 flex-shrink-0">
                        <circle cx="6" cy="6" fill="#77B1D4" r="6"></circle>
                      </svg>
                      <span>Illinois</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Image (Sticky) - Show only on desktop */}
              <div className="lg:col-span-1 hidden lg:block">
                <div className="sticky top-24">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://i.imgur.com/6wIB2nu.jpeg"
                      alt="Mary Liberty - Attorney"
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 text-center">
              Meet Illinois Estate Law
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-8 mx-auto" />
            <p className="text-slate-600 text-lg text-center mb-12 max-w-3xl mx-auto">
              Watch this video to learn more about Illinois Estate Law and how we can help you with your estate planning needs.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/mkZU_fciF9o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
