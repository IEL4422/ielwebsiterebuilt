import { Metadata } from 'next';
import { ReferralForm } from '@/components/referral/ReferralForm';

export const metadata: Metadata = {
  title: 'Submit Referral | Illinois Estate Law',
  description:
    'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients. Attorneys receive a 10% referral fee upon client engagement.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/submit-referral/',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/submit-referral/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Submit Referral | Illinois Estate Law',
    description:
      'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients.',
  },
  twitter: {
    card: 'summary',
    title: 'Submit Referral | Illinois Estate Law',
    description:
      'Refer a client to Illinois Estate Law. Submit your referral information and we will take great care of your clients.',
  },
};

export default function SendReferralPage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[250px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8 py-12 lg:py-16 w-full">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Submit a Referral
            </h1>
            <p className="mt-4 font-['Plus_Jakarta_Sans'] text-[#c8dae6] text-lg text-center lg:text-left max-w-xl">
              Attorneys who refer clients to Illinois Estate Law receive{' '}
              <strong className="text-white">10% of attorney&rsquo;s fees collected</strong> upon
              client engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────── */}
      <section className="bg-[#f8f9fa] border-b border-gray-200 py-10">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#2D3E50] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2D3E50]">
                Submit This Form
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                Fill out your information and your client&rsquo;s details. Agree to the referral
                fee terms.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#2D3E50] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2D3E50]">
                We Contact Your Client
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                Our team reaches out promptly. If the client signs an engagement agreement, the
                referral fee is triggered.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#2D3E50] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2D3E50]">
                You Receive 10%
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                We pay you 10% of all attorney&rsquo;s fees collected from your referred client,
                within 30 days of final payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[900px] px-5 lg:px-8">
          <div className="mb-10">
            <p className="font-['Plus_Jakarta_Sans'] text-gray-600 text-base">
              Please complete all required fields. A confirmation email will be sent to you
              immediately. Questions? Call us at{' '}
              <a
                href="tel:3123730731"
                className="text-[#4A708B] font-semibold hover:underline"
              >
                (312) 373-0731
              </a>{' '}
              or email{' '}
              <a
                href="mailto:contact@illinoisestatelaw.com"
                className="text-[#4A708B] font-semibold hover:underline"
              >
                contact@illinoisestatelaw.com
              </a>
              .
            </p>
          </div>

          <ReferralForm />
        </div>
      </section>

      {/* ── Disclaimer ─────────────────────────────────────────── */}
      <section className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="mx-auto max-w-[900px] px-5 lg:px-8">
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-gray-500 leading-relaxed">
            <strong>Important Notice Regarding Illinois RPC 1.5(e):</strong> A division of fees
            between attorneys who are not in the same firm is permissible only if: (1) the division
            is in proportion to the services performed by each attorney or each attorney assumes
            joint responsibility for the representation; (2) the client gives informed written
            consent to the arrangement, including the share each attorney will receive; and (3) the
            total fee is reasonable. By submitting this referral form, the referring attorney
            acknowledges their obligation to obtain client consent. Illinois Estate Law, PC will also
            independently seek written client consent as part of the engagement process. This
            referral fee is contingent upon the referred client retaining Illinois Estate Law, PC and
            attorney&rsquo;s fees being collected.
          </p>
        </div>
      </section>
    </main>
  );
}
