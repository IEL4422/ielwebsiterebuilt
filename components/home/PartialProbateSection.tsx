export function PartialProbateSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Legal documents and paperwork for probate"
                className="w-full h-64 lg:h-80 object-cover"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Partial Probate: Taking Over and Seeing It Through
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-6" />
            <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5">
              <p>
                If you've already started the probate process but feel stuck or frustrated with your current attorney, you're not alone. Many people find themselves in this situation; cases drag on, unclear billing, or a lack of communication, leaving you with more questions than answers. You shouldn't have to deal with that on top of managing the loss of a loved one.
              </p>
              <p>
                This is where our partial probate services step in. If your estate is already in probate but you want a fresh start with a more responsive and transparent legal team, we can help. We can take over the case from your current attorney and complete the process with efficiency and clarity.
              </p>
              <p>
                We know how frustrating it is to deal with hourly billing that seems to climb endlessly without clear updates on progress. That's why we approach your case with a flat-fee structure. You'll know exactly what to expect from the start, with no hidden fees or surprises. More importantly, we prioritize communication. You'll always know where your case stands and what steps are coming next.
              </p>
              <p>
                Our goal is to make this transition as seamless as possible for you. With the right legal help, you can avoid unnecessary delays and finally have the legal guidance you deserve.
              </p>
              <p>
                If you're ready to move forward with a skilled Chicago estate planning attorney who values your time, your trust, and your peace of mind, Illinois Estate Law is here for you. Contact us today to schedule a consultation and take the first step toward resolving your case with efficiency and confidence.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-slate-800 rounded-xl p-8 lg:p-10 text-center sticky top-8">
              <p className="text-2xl lg:text-3xl font-bold text-white mb-3">
                Start Your Estate Plan in Minutes: 100% Virtual Process
              </p>
              <p className="text-slate-300 mb-6">
                Fast start, lifetime security for those you love
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:3123730731"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
                >
                  CALL (312) 373-0731
                </a>
                <a
                  href="/book-consultation/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  BOOK ONLINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
