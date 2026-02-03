import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Illinois Estate Law: Distinctive Estate Planning Services',
  description: 'Illinois Estate Law: Discover unique estate planning services tailored for you. Learn how our expertise can help secure your future—contact us today!',
  openGraph: {
    title: 'Illinois Estate Law: Distinctive Estate Planning Services',
    description: 'Illinois Estate Law: Discover unique estate planning services tailored for you. Learn how our expertise can help secure your future—contact us today!',
    url: 'https://www.illinoisestatelaw.com/why-we-re-different/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Law: Distinctive Estate Planning Services',
    description: 'Illinois Estate Law: Discover unique estate planning services tailored for you. Learn how our expertise can help secure your future—contact us today!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/why-we-re-different/',
  },
}

export default function WhyWereDifferentPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="flex flex-col items-center justify-center py-0 px-0">
            <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">
              Why We&rsquo;re Different
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] py-[100px] lg:py-[60px] lg:px-5 sm:py-[60px] sm:px-5">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-[#77B1D4] rounded-lg p-6 lg:p-8 mb-12 shadow-sm">
              <p className="text-lg text-slate-700 leading-relaxed">
                At Illinois Estate Law, we believe that estate planning should be accessible, straightforward, and tailored to fit your unique needs. Our focus is on helping you create a plan that provides clarity and peace of mind for the future, and we do so in a way that makes the process easy and transparent. Here&rsquo;s what sets us apart:
              </p>
            </div>

            <div className="font-['Plus_Jakarta_Sans'] font-normal text-[#2d3e50]">

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">1. Flat-Fee Packages, No Surprises</h3>
          <p className="mb-4">We understand that legal services often come with unexpected costs. That&rsquo;s why we offer flat-fee, one-time payment packages. You&rsquo;ll know exactly what you&rsquo;re paying upfront, with no hidden fees or surprises along the way. Our pricing structure ensures that you can plan your estate without the worry of accumulating hourly costs.</p>

          <p className="mb-4">&nbsp;</p>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">2. Fully Customizable Solutions</h3>
          <p className="mb-4">We recognize that each client&rsquo;s situation is unique. Whether you&rsquo;re creating a will, setting up a trust, or developing a comprehensive estate plan, our services are completely customizable. We take the time to understand your goals and tailor every aspect of your estate plan to meet your personal, family, and financial needs.</p>

          <p className="mb-4">&nbsp;</p>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">3. Convenient Virtual Services</h3>
          <p className="mb-4">Life is busy, and we know it&rsquo;s not always easy to take time out for an in-person meeting. That&rsquo;s why we offer a fully virtual experience—from initial consultations to final document reviews and signing. You can complete your estate planning from the comfort of your home, on your schedule, using the latest secure technology to ensure your privacy.</p>

          <p className="mb-4">&nbsp;</p>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">4. In-Person Meetings Available</h3>
          <p className="mb-4">For those who prefer a more personal touch, we offer the option to meet in person. With multiple office locations across Illinois, you have the flexibility to choose how you want to connect with us. Whether it&rsquo;s virtual or face-to-face, we&rsquo;re here to accommodate your preference and make the process as comfortable as possible.</p>

          <p className="mb-4">&nbsp;</p>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">5. Focus on Wills and Trusts</h3>
          <p className="mb-4">Estate planning is not just one of our services—it&rsquo;s our specialty. By focusing exclusively on wills and trusts, we bring a deep level of expertise and dedication to helping you protect what matters most. Our team is skilled, experienced, and committed to keeping up with the latest developments in estate planning law, so you can be confident you&rsquo;re receiving the highest quality service.</p>

          <p className="mb-4">&nbsp;</p>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">6. Local Experts with a Statewide Reach</h3>
          <p className="mb-4">We&rsquo;re proud to be an Illinois-based law firm. Our attorneys understand the nuances of Illinois estate laws and are well-equipped to handle any situation specific to our state. Whether you&rsquo;re in Chicago, Springfield, Peoria, or anywhere in between, Illinois Estate Law is ready to serve you.</p>

          <p className="mb-4">&nbsp;</p>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#011627] mb-4">Why Choose Illinois Estate Plan?</h3>
          <p className="mb-4">At the core of our firm is a commitment to making estate planning accessible, affordable, and adaptable for everyone in Illinois. We&rsquo;re not just legal professionals—we&rsquo;re your partners in securing a better future. Let&rsquo;s work together to create a plan that brings peace of mind for you and your loved ones.</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://i.imgur.com/eXHYjog.png"
                  alt="Mary Liberty - Owner & Lead Attorney"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <p className="text-center text-slate-700 font-medium mt-4 text-lg">
                Mary Liberty - Owner &amp; Lead Attorney
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
