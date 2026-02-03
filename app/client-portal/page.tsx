import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Clock, FileText, MessageCircle, Bell, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Portal | Illinois Estate Law',
  description: 'Access your secure client portal to track your case, communicate with your attorney, and manage your estate planning documents.',
  openGraph: {
    title: 'Client Portal | Illinois Estate Law',
    description: 'Access your secure client portal to track your case, communicate with your attorney, and manage your estate planning documents.',
    url: 'https://www.illinoisestatelaw.com/client-portal/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Client Portal | Illinois Estate Law',
    description: 'Access your secure client portal to track your case, communicate with your attorney, and manage your estate planning documents.',
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
      <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="flex flex-col items-center justify-center py-0 px-0">
            <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[75px] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">
              Client Portal
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] py-[80px] lg:py-[60px] sm:py-[50px]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6 sm:text-[28px]">
              Your Estate Planning Journey, Simplified
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[18px] text-[#2d3e50] leading-relaxed sm:text-[16px]">
              Our secure client portal puts you in control of your estate planning process. Track your case progress, communicate with your attorney, and access your important documents anytime, anywhere.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-xl p-8 mb-12 sm:p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#77B1D4] rounded-full p-3 flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-3 sm:text-[20px]">
                  Secure &amp; Private
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#2d3e50] leading-relaxed sm:text-[14px]">
                  Your information is protected with bank-level encryption. Only you and your attorney have access to your documents and case details.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[32px] text-[#2d3e50] mb-8 text-center sm:text-[26px]">
              What's Inside Your Client Portal
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77B1D4]/10 rounded-lg p-3 flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#77B1D4]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Real-Time Case Status
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Track exactly where your estate plan is in the process. See completed steps, upcoming tasks, and know what to expect next.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77B1D4]/10 rounded-lg p-3 flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#77B1D4]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Document Access
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      View, download, and securely store all your estate planning documents. Access your will, trust, powers of attorney, and more whenever you need them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77B1D4]/10 rounded-lg p-3 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#77B1D4]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Direct Attorney Communication
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Send secure messages directly to your attorney. Ask questions, share information, and get timely responses—all in one convenient place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77B1D4]/10 rounded-lg p-3 flex-shrink-0">
                    <Bell className="w-6 h-6 text-[#77B1D4]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Automatic Updates
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Receive notifications when your attorney updates your case, uploads new documents, or needs information from you. Stay informed without the guesswork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77B1D4]/10 rounded-lg p-3 flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#77B1D4]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      Secure File Sharing
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Upload documents, forms, and information securely. No more worrying about email security or lost attachments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#77B1D4]/10 rounded-lg p-3 flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#77B1D4]" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2 sm:text-[18px]">
                      24/7 Access
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#4a5568] leading-relaxed sm:text-[14px]">
                      Your portal is available anytime, from any device. Review your documents or check your case status at your convenience.
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
                <div className="bg-[#77B1D4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>No More Phone Tag:</strong> Send messages and receive updates on your schedule, not during business hours only.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#77B1D4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Complete Transparency:</strong> See exactly where your case stands at every step of the process.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#77B1D4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Peace of Mind:</strong> Know your sensitive documents are stored safely and accessible only to you.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#77B1D4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Faster Process:</strong> Quick file sharing and communication means your estate plan moves forward smoothly.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-[#77B1D4] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-white/90 leading-relaxed sm:text-[15px]">
                  <strong>Always Available:</strong> Your important documents are never more than a login away.
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
              <Link
                href="/services-pricing/"
                className="inline-block px-8 py-4 bg-[#77B1D4] text-white font-['Plus_Jakarta_Sans'] font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors text-center"
              >
                View Packages &amp; Pricing
              </Link>
              <Link
                href="/book-consultation/"
                className="inline-block px-8 py-4 bg-[#2d3e50] text-white font-['Plus_Jakarta_Sans'] font-semibold rounded-lg hover:bg-[#1a2834] transition-colors text-center"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#6c757d] sm:text-[14px]">
              Questions about the client portal? <Link href="/contact/" className="text-[#77B1D4] hover:underline">Contact us</Link> or call <a href="tel:3123730731" className="text-[#77B1D4] hover:underline">(312) 373-0731</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
