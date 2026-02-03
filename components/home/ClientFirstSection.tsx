'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function ClientFirstSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-52 bg-slate-50 rounded-2xl p-8 lg:p-10">
            <p className="text-2xl lg:text-3xl font-semibold text-slate-800 leading-tight mb-4">
              No Paperwork, No Office Visits, Modern Estate Planning Made Simple
            </p>
            <p className="text-slate-600 mb-6">
              Online convenience meets traditional legal expertise
            </p>
            <Button asChild size="lg" className="w-full bg-[#77B1D4] hover:bg-[#5A9BC4] text-white font-semibold">
              <Link href="/get-started/">GET STARTED TODAY</Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://i.imgur.com/LAx6OjY.png"
                alt="Client-first approach to estate law"
                className="w-full h-auto object-cover"
                width={756}
                height={400}
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                A Modern, Client-First Approach to Estate Law
              </h2>
              <div className="w-16 h-1 bg-[#77B1D4] mb-6"></div>
              <p className="text-slate-600 leading-relaxed">
                You deserve an estate planning experience that works around your life, not the other way around. At Illinois Estate Law, we've reimagined the process so you can feel confident, supported, and informed from start to finish. With digital tools and clear pricing, you stay in control while receiving experienced legal guidance tailored to Illinois law.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">
                Plan on Your Schedule: Online, Convenient, and Secure
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Estate planning should feel accessible, not overwhelming or inconvenient. That's why we've built a system that lets you move at your own pace. Our firm offers a virtual setup that allows you to complete legal documents and forms online and through encrypted channels.
                </p>
                <p>
                  You'll start with a personalized intake that gathers the essential details. From there, we meet virtually, review your goals, and prepare the right legal documents, including wills, trusts, and powers of attorney that follow Illinois legal requirements.
                </p>
                <p>
                  Life can be busy, and we understand that. With a virtual model, you can plan after the kids are in bed or on your lunch break. Everything is encrypted and confidential, so your information stays safe while we deliver high-quality, legally sound work.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">
                Budget with Confidence: Our All-Inclusive Flat Fees
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Legal costs often feel unpredictable. That's why we've taken a different path, one where your estate plan comes with a flat fee and no surprise bills. From start to finish, you know exactly what to expect.
                </p>
                <p>
                  Our flat fees are based on the scope of your plan, not the hours on a clock. Whether you're preparing a simple will or creating a trust-based plan with powers of attorney and healthcare directives, you'll receive clear, upfront pricing before any work begins. There's also no hourly billing, hidden charges, or fees for asking questions. We provide ongoing support throughout the process, including document revisions and Q&A.
                </p>
                <p>
                  For many Illinois families, the cost of estate planning is a major concern. We've made it easier to move forward with confidence, knowing your financial investment is fair and transparent. And if your situation changes down the line? We're here to help with updates with consistent clarity around pricing. You shouldn't have to jump through hoops to protect the people and future you care about most.
                </p>
                <p className="font-semibold text-slate-800">
                  <Link href="/contact/" className="text-[#77B1D4] hover:text-[#5A9BC4] underline">Contact us</Link> today at <a href="tel:3123730731" className="text-[#77B1D4] hover:text-[#5A9BC4] underline">(312) 373-0731</a> and take that first step forward, on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
