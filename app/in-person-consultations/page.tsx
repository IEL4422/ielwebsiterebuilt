export default function InPersonConsultationsPage() {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">
              In-Person Meetings
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="prose max-w-none">
              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-2xl p-8 md:p-12 text-center mb-8">
                <h2 className="text-white font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold mb-4">
                  In-Person Meetings for Current Clients
                </h2>
                <p className="text-white/90 font-['Plus_Jakarta_Sans'] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  We do not offer in-person consultations for new clients. However, as a valued current client, in-person meetings are included and available to you at any of our convenient locations throughout Illinois.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-10">
                <h3 className="text-[#2D3E50] font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-bold mb-4">
                  For New Clients
                </h3>
                <p className="text-slate-600 font-['Plus_Jakarta_Sans'] text-base md:text-lg leading-relaxed mb-6">
                  If you're interested in becoming a client, we offer virtual consultations to get started with your estate planning needs. Our virtual process is convenient, secure, and provides the same high-quality service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact/"
                    className="inline-block px-8 py-4 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors text-center no-underline"
                  >
                    Schedule Virtual Consultation
                  </a>
                  <a
                    href="tel:3123730731"
                    className="inline-block px-8 py-4 bg-white text-[#2D3E50] border-2 border-[#2D3E50] font-semibold rounded-lg hover:bg-slate-50 transition-colors text-center no-underline"
                  >
                    Call (312) 373-0731
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-white border border-slate-200 rounded-xl p-8 md:p-10">
                <h3 className="text-[#2D3E50] font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-bold mb-4">
                  For Current Clients
                </h3>
                <p className="text-slate-600 font-['Plus_Jakarta_Sans'] text-base md:text-lg leading-relaxed mb-4">
                  If you are a current client and would like to schedule an in-person meeting, please contact our office to arrange a convenient time and location.
                </p>
                <p className="text-slate-600 font-['Plus_Jakarta_Sans'] text-base md:text-lg leading-relaxed">
                  <a href="/locations/" className="text-[#77B1D4] hover:text-[#5A9BC4] font-semibold underline">
                    View our locations
                  </a> throughout Illinois.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
