import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Clock, FileText, MessageCircle, CalendarDays, BookOpen } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { ClientPortalPreview } from '@/components/portal/ClientPortalPreview';

export const metadata: Metadata = {
  title: 'Client Portal | Illinois Estate Law',
  description: 'See case updates, review estate planning documents and request changes, message your legal team, schedule calls, and find resources in the IEL client portal.',
  openGraph: {
    title: 'Client Portal | Illinois Estate Law',
    description: 'See case updates, review estate planning documents and request changes, message your legal team, schedule calls, and find resources in the IEL client portal.',
    url: 'https://www.illinoisestatelaw.com/client-portal/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Client Portal | Illinois Estate Law',
    description: 'See case updates, review estate planning documents and request changes, message your legal team, schedule calls, and find resources in the IEL client portal.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/client-portal/',
  },
};

export default function ClientPortalPage() {
  return (
    <>
      <InnerPageHero title="Client Portal" />

      <div className="container mx-auto px-5 max-w-[1240px] py-[80px] lg:py-[60px] sm:py-[50px]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6 sm:text-[28px]">
              Your Legal Matter, All in One Place
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[18px] text-[#2d3e50] leading-relaxed sm:text-[16px]">
              Our client portal gives you one place to see case updates, review and request changes to estate planning documents, message and schedule calls with your legal team, and access resources about your legal matter.
            </p>
          </div>

          <div className="mb-12">
            <ClientPortalPreview />
          </div>

          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 mb-12 sm:p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#7E9CC0] rounded-full p-3 flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-3 sm:text-[20px]">
                  Secure &amp; Private
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#2d3e50] leading-relaxed sm:text-[14px]">
                  Sign in to your client portal to view information shared for your matter and communicate with your legal team. Keep your login details private.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] text-[#2d3e50] mb-8 text-center sm:text-[26px]">
              What&apos;s Inside Your Client Portal
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7E9CC0]/10 rounded-lg p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Case Updates
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Follow case updates, completed steps, and next steps shared by your legal team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7E9CC0]/10 rounded-lg p-3 flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Review Documents & Request Changes
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Review estate planning documents shared with you and request changes from your legal team before they are finalized.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7E9CC0]/10 rounded-lg p-3 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Message Your Legal Team
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Send messages to your legal team, ask questions, and share information about your matter in one place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7E9CC0]/10 rounded-lg p-3 flex-shrink-0">
                    <CalendarDays className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Schedule Calls
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Schedule available calls with your legal team through the portal to talk through your questions or next steps. Appointment options depend on your matter and team availability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7E9CC0]/10 rounded-lg p-3 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Resources for Your Legal Matter
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Access resources and guidance shared for your legal matter so you can better understand the process and prepare for next steps. Available resources depend on your service and stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#7E9CC0]/10 rounded-lg p-3 flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#7E9CC0]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Access on Your Schedule
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Use your phone or computer to review available updates, documents, and resources at your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2d3e50] rounded-xl p-8 mb-12 sm:p-6">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-white mb-4 sm:text-[24px]">
              How It Helps You Stay in Control
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#7E9CC0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Stay Connected:</strong> Message your legal team or schedule a call to discuss your questions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7E9CC0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Follow Your Progress:</strong> See the latest updates and next steps shared for your case.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7E9CC0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Review Before Finalizing:</strong> Read your estate planning documents and request changes from your legal team.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7E9CC0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Understand Your Matter:</strong> Find relevant resources and guidance alongside your case information.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#7E9CC0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>One Organized Place:</strong> Return to documents, messages, and updates shared through your portal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 text-center sm:p-6">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#2d3e50] mb-4 sm:text-[24px]">
              Included With Every Estate Planning Package
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#2d3e50] leading-relaxed mb-6 sm:text-[15px]">
              Access to our client portal is included with all Trust Packages, Probate Avoidance Packages, Will Packages, and Probate Administration services at no additional cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://portal.illinoisestatelaw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#33414E] text-white font-['Plus_Jakarta_Sans'] font-semibold rounded-lg hover:bg-[#1a2834] transition-colors text-center"
              >
                Open Secure Portal
              </a>
              <Link
                href="/services-pricing/"
                className="inline-block px-8 py-4 bg-[#7E9CC0] text-white font-['Plus_Jakarta_Sans'] font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors text-center"
              >
                View Packages &amp; Pricing
              </Link>
              <Link
                href="/book-consultation/"
                className="inline-block px-8 py-4 border border-[#33414E] bg-white text-[#33414E] font-['Plus_Jakarta_Sans'] font-semibold rounded-lg hover:bg-[#F4F8FC] transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#6c757d] sm:text-[14px]">
              Questions about the client portal? <Link href="/contact/" className="text-[#7E9CC0] hover:underline">Contact us</Link> or call <a href="tel:3123730731" className="text-[#7E9CC0] hover:underline">(312) 373-0731</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
