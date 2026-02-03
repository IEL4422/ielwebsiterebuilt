export function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://i.imgur.com/OWSc1s6.png"
                alt="Modern virtual legal consultation"
                className="w-full h-72 lg:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">Modern legal services from the comfort of home</p>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 lg:p-10 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
                No Paperwork, No Office Visits, Modern Estate Planning Made Simple
              </p>
              <p className="text-slate-300 mb-6">
                Online convenience meets traditional legal expertise
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
              >
                BOOK A CONSULTATION
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Why Choose Illinois Estate Law?
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-6" />

            <p className="text-slate-600 leading-relaxed mb-8">
              Planning your estate shouldn't feel like a burden. At Illinois Estate Law, we've designed a law firm that works the way your life does, efficiently, thoughtfully, and on your terms. We combine secure technology with warm, responsive service to create a legal experience that is human, not transactional. Our flat-fee pricing, virtual meetings, and attorney-led support are all part of making estate planning approachable and trustworthy for Illinois families like yours.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Unlimited Access to Your Attorney, Always
            </h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              When legal questions come up, you shouldn't have to watch the clock or worry about racking up fees. With us, you'll always have direct access to your attorney without extra charges for emails, calls, or clarifications. You can ask follow-up questions without hesitation and receive timely updates and clear explanations. We make sure that your concerns are addressed promptly, never brushed aside.
              <br /><br />
              We believe that relationships matter. You're not just hiring a lawyer for documents. You're building a partnership where communication is open and honest, every step of the way.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Proactive, Empathetic Guidance at Every Step
            </h3>
            <div className="text-slate-600 leading-relaxed mb-8 space-y-4">
              <p>
                Estate planning involves personal decisions, and those deserve personal attention. From our first meeting to the final delivery of your signed documents, we're here with proactive guidance that helps you feel informed, supported, and prepared.Estate planning involves personal decisions, and those deserve personal attention. From our first meeting to the final delivery of your signed documents, we're here with proactive guidance that helps you feel informed, supported, and prepared.
              </p>
              <p>
                Our team takes time to learn about your family, goals, and values, allowing us to identify what matters to you most and to recommend clear next steps. We work hard to anticipate future needs so your plan stays relevant, and if there are changes necessary due to the law .
              </p>
              <p>
                Estate planning doesn't have to feel old-fashioned or overwhelming. At Illinois Estate Law, we offer a refreshing alternative: virtual-available, flat-fee legal services rooted in clarity, care, and convenience. If you're ready to work with a Chicago estate planning attorney who respects your time and listens to your needs, let's talk. We're ready when you are.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              A Modern Approach That Puts You First
            </h3>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                Every stage of life brings its own priorities, but one thing stays the same: the importance of being prepared. Estate planning gives you the power to make decisions with intention, instead of leaving them to chance or the courts. Proactive planning allows you to stop what the future might hold and start putting the right pieces in place now, so your loved ones aren't left wondering later.
              </p>
              <p>
                At Illinois Estate Law, we help you create a plan that reflects your values and goals with care, clarity, and respect. Our team takes the time to get to know you, offering a streamlined, virtual alternative and flat-fee pricing that keeps things simple and stress-free. If you're ready to take that next step, we're here to walk with you one decision at a time.
              </p>
              <p className="font-semibold text-slate-800">
                <a href="/contact/" className="hover:text-[#77B1D4] transition-colors">Contact us</a> at <a href="tel:3123730731" className="hover:text-[#77B1D4] transition-colors">(312) 373-0731</a> or use our online booking tool to schedule a consultation today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
