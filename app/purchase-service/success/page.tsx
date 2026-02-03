'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckIcon } from '@/components/icons/CheckIcon';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    if (sessionId) {
      setTimeout(() => {
        setIsVerifying(false);
      }, 1500);
    }
  }, [sessionId]);

  useEffect(() => {
    if (!isVerifying && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ads_conversion_About_Us_1', {});
    }
  }, [isVerifying]);

  return (
    <main>
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[100px] leading-[50px] md:leading-[65px] lg:leading-[100px] text-center">
            Purchase Complete
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-5 max-w-[800px] py-[100px]">
        {isVerifying ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#2d3e50] mb-6"></div>
            <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] text-lg">
              Verifying your payment...
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckIcon className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-4">
              Thank You for Your Purchase!
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] text-lg mb-6">
              Your payment has been successfully processed. We have received your signed Client Service Agreement.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-8 mb-8">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4">
                What Happens Next?
              </h3>
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Confirmation Email:</strong> You will receive a confirmation email with your receipt and a copy of the signed agreement.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Attorney Contact:</strong> A dedicated attorney will contact you within 1-2 business days to begin the process.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Questionnaire:</strong> You will receive access to a secure online questionnaire to gather necessary information.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Consultation:</strong> Schedule your complimentary consultation to discuss your specific needs and goals.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50]">
                If you have any immediate questions, please contact us:
              </p>
              <div className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] font-semibold">
                <p>Phone: <a href="tel:312-373-0731" className="text-[#4a708b] hover:underline">312-373-0731</a></p>
                <p>Email: <a href="mailto:contact@illinoisestatelaw.com" className="text-[#4a708b] hover:underline">contact@illinoisestatelaw.com</a></p>
              </div>

              <div className="pt-8">
                <Link
                  href="/"
                  className="inline-block bg-[#2d3e50] text-white font-['Plus_Jakarta_Sans'] font-bold text-base uppercase py-[14px] px-8 rounded-[32px] hover:bg-[#4a708b] transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
