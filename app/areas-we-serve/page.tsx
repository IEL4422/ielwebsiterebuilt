import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top Rated Estate Planning Services in Illinois',
  description: 'Illinois Estate Law serves clients across Chicago, Springfield, Rockford, Peoria, and beyond. Call (312) 373-0731 to schedule your consultation today.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/areas-we-serve/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Top Rated Estate Planning Services in Illinois',
    description: 'Illinois Estate Law serves clients across Chicago, Springfield, Rockford, Peoria, and beyond. Call (312) 373-0731 to schedule your consultation today.',
  },
  twitter: {
    card: 'summary',
    title: 'Top Rated Estate Planning Services in Illinois',
    description: 'Illinois Estate Law serves clients across Chicago, Springfield, Rockford, Peoria, and beyond. Call (312) 373-0731 to schedule your consultation today.',
  },
  other: {
    'dc:title': 'Top Rated Estate Planning Services in Illinois',
    'dc:description': 'Illinois Estate Law serves clients across Chicago, Springfield, Rockford, Peoria, and beyond. Call (312) 373-0731 to schedule your consultation today.',
    'dc:relation': 'https://www.illinoisestatelaw.com/areas-we-serve/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
  verification: {
    google: 'UQ33juRONgyBt2yOx3hbWYuGIe6uW2Q9bI-nB2cFtD4',
  },
};

export default function AreasWeServePage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
          <div className="container mx-auto max-w-[1140px] px-5 xl:px-0">
            <div className="flex flex-col items-center justify-center py-4">
              <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] font-normal capitalize text-[#FEFEFE] text-center">
                Areas We Serve
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="bg-white py-8 lg:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center">
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Illinois Estate Law proudly serves clients <strong className="text-slate-800">statewide for estate planning</strong> and represents families in <strong className="text-slate-800">probate matters across eight key counties</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Statewide Estate Planning Section */}
        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Statewide Estate Planning Services
              </h2>
              <div className="w-20 h-1 bg-[#77B1D4] mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Whether you live in Chicago, Springfield, Rockford, Peoria, or any other Illinois community, our virtual platform brings comprehensive estate planning directly to you. We meet by secure video, phone, or at one of our convenient office locations across the state.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#77B1D4] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Virtual Consultations Available
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Plan your estate from the comfort of your home with secure video consultations, phone calls, and digital document signing. No travel required.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#77B1D4] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Multiple Office Locations
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  With offices throughout Illinois, we're here when you need us. <a href="/locations/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold underline">View our locations</a> to find an office near you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Probate Representation Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Probate Representation Counties
              </h2>
              <div className="w-20 h-1 bg-[#77B1D4] mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                We currently accept probate and estate administration cases in the following counties:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Cook County */}
              <Link href="/probate/cook-county/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      Cook County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      Chicago & Surrounding Areas
                    </p>
                  </div>
                </div>
              </Link>

              {/* DuPage County */}
              <Link href="/probate/dupage-county/" className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      DuPage County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      Western Suburbs
                    </p>
                  </div>
                </div>
              </Link>

              {/* Kane County */}
              <div className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      Kane County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      Fox Valley Region
                    </p>
                  </div>
                </div>
              </div>

              {/* Kendall County */}
              <div className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      Kendall County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      Southwest Region
                    </p>
                  </div>
                </div>
              </div>

              {/* Lake County */}
              <div className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      Lake County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      Northern Suburbs
                    </p>
                  </div>
                </div>
              </div>

              {/* McHenry County */}
              <div className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      McHenry County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      Northwest Region
                    </p>
                  </div>
                </div>
              </div>

              {/* Will County */}
              <div className="group bg-slate-50 hover:bg-[#77B1D4] rounded-xl p-8 transition-all duration-300 cursor-default shadow-sm hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#77B1D4] group-hover:bg-white rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5 text-white group-hover:text-[#77B1D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-white transition-colors mb-2">
                      Will County
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors">
                      South Suburbs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Our firm offers fully virtual services with physical offices throughout Illinois. In-person meetings are available by request.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3123730731"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
                >
                  Call (312) 373-0731
                </a>
                <a
                  href="/locations/"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  View Our Locations
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
