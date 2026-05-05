'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormData = {
  // Attorney
  attorneyFirstName: string;
  attorneyLastName: string;
  firmName: string;
  ardc: string;
  attorneyEmail: string;
  attorneyPhone: string;
  // Client
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhone: string;
  legalMatter: string;
  notes: string;
  // Agreement
  agreedToTerms: boolean;
  clientInformed: boolean;
};

const LEGAL_MATTERS = [
  'Estate Planning',
  'Probate',
  'Trust Administration',
  'Prenuptial Agreement',
  'Small Business Formation',
  'Real Estate',
  'Other',
];

const inputClass =
  'w-full px-4 py-3 border border-gray-300 rounded-lg font-[\'Plus_Jakarta_Sans\'] text-[#2D3E50] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4A708B] focus:border-transparent transition-colors';
const labelClass =
  'block font-[\'Plus_Jakarta_Sans\'] font-semibold text-sm text-[#2D3E50] mb-1';
const errorClass = 'mt-1 text-sm text-red-600 font-[\'Plus_Jakarta_Sans\']';

export function ReferralForm() {
  const [agreementOpen, setAgreementOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referralId, setReferralId] = useState('');
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: 'onBlur' });

  const agreedToTerms = watch('agreedToTerms');

  const onSubmit = async (data: FormData) => {
    setServerError('');
    try {
      const res = await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Submission failed');
      setReferralId(json.referralId);
      setSubmitted(true);
    } catch (err: unknown) {
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-['Lobster_Two'] text-[36px] text-[#2D3E50] mb-4">
          Referral Received!
        </h2>
        <p className="font-['Plus_Jakarta_Sans'] text-lg text-gray-700 mb-4">
          Thank you for the referral. We will reach out to your client promptly and keep you
          informed throughout the process.
        </p>
        <p className="font-['Plus_Jakarta_Sans'] text-sm text-gray-500 mb-8">
          A confirmation has been sent to your email address. Your referral ID is{' '}
          <span className="font-mono font-semibold text-[#4A708B]">{referralId}</span>.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-left">
          <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-amber-800 mb-1">
            Important Reminder — Illinois RPC 1.5(e)
          </p>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-amber-700">
            If you have not already done so, please obtain your client&apos;s{' '}
            <strong>informed written consent</strong> to the referral fee arrangement — including
            the fact that Illinois Estate Law will pay you 10% of the fees collected. We will also
            seek this consent during our client intake.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-10">
      {/* ── SECTION 1: Referring Attorney ─────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#2D3E50] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
            1
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#2D3E50]">
            Your Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('attorneyFirstName', { required: 'First name is required' })}
              type="text"
              placeholder="Jane"
              className={inputClass}
            />
            {errors.attorneyFirstName && (
              <p className={errorClass}>{errors.attorneyFirstName.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('attorneyLastName', { required: 'Last name is required' })}
              type="text"
              placeholder="Smith"
              className={inputClass}
            />
            {errors.attorneyLastName && (
              <p className={errorClass}>{errors.attorneyLastName.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Firm / Organization Name</label>
            <input
              {...register('firmName')}
              type="text"
              placeholder="Smith & Associates, PC"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              Illinois ARDC Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register('ardc', {
                required: 'ARDC number is required',
                pattern: {
                  value: /^\d{7}$/,
                  message: 'Enter a 7-digit ARDC number',
                },
              })}
              type="text"
              placeholder="1234567"
              maxLength={7}
              className={inputClass}
            />
            {errors.ardc && <p className={errorClass}>{errors.ardc.message}</p>}
          </div>

          <div>
            <label className={labelClass}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              {...register('attorneyEmail', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Enter a valid email address',
                },
              })}
              type="email"
              placeholder="jane@smithlaw.com"
              className={inputClass}
            />
            {errors.attorneyEmail && (
              <p className={errorClass}>{errors.attorneyEmail.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register('attorneyPhone', { required: 'Phone number is required' })}
              type="tel"
              placeholder="(312) 555-0100"
              className={inputClass}
            />
            {errors.attorneyPhone && (
              <p className={errorClass}>{errors.attorneyPhone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── SECTION 2: Client Information ─────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#2D3E50] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
            2
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#2D3E50]">
            Client Information
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>
              Client First Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('clientFirstName', { required: 'Client first name is required' })}
              type="text"
              placeholder="John"
              className={inputClass}
            />
            {errors.clientFirstName && (
              <p className={errorClass}>{errors.clientFirstName.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>
              Client Last Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('clientLastName', { required: 'Client last name is required' })}
              type="text"
              placeholder="Doe"
              className={inputClass}
            />
            {errors.clientLastName && (
              <p className={errorClass}>{errors.clientLastName.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>Client Email Address</label>
            <input
              {...register('clientEmail', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Enter a valid email address',
                },
              })}
              type="email"
              placeholder="john.doe@email.com"
              className={inputClass}
            />
            {errors.clientEmail && (
              <p className={errorClass}>{errors.clientEmail.message}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>
              Client Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register('clientPhone', { required: 'Client phone number is required' })}
              type="tel"
              placeholder="(312) 555-0200"
              className={inputClass}
            />
            {errors.clientPhone && (
              <p className={errorClass}>{errors.clientPhone.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              Type of Legal Matter <span className="text-red-500">*</span>
            </label>
            <select
              {...register('legalMatter', { required: 'Please select the type of matter' })}
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select a matter type...
              </option>
              {LEGAL_MATTERS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            {errors.legalMatter && (
              <p className={errorClass}>{errors.legalMatter.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className={labelClass}>
              Notes{' '}
              <span className="font-normal text-gray-500">(brief background or context)</span>
            </label>
            <textarea
              {...register('notes')}
              rows={4}
              placeholder="e.g. Client's mother passed away last month with a $300K estate, including a home in Cook County. No trust. Client is the named executor."
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── SECTION 3: Referral Fee Agreement ─────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#2D3E50] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
            3
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#2D3E50]">
            Referral Fee Agreement
          </h2>
        </div>

        {/* Collapsible agreement text */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-5">
          <button
            type="button"
            onClick={() => setAgreementOpen((o) => !o)}
            className="w-full flex items-center justify-between px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[#2D3E50]">
              Attorney Referral Fee Agreement — Click to Read
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#4A708B] transition-transform duration-200 shrink-0 ${
                agreementOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {agreementOpen && (
            <div className="px-5 py-5 bg-white border-t border-gray-200 prose prose-sm max-w-none text-gray-700 space-y-4 font-['Plus_Jakarta_Sans'] text-[14px] leading-relaxed">
              <p className="text-center font-bold text-[#2D3E50] text-base uppercase tracking-wide">
                Attorney Referral Fee Agreement
              </p>
              <p className="text-center text-gray-600 text-xs">
                Illinois Estate Law, PC &bull; Effective upon submission of referral
              </p>

              <p>
                This Attorney Referral Fee Agreement (&ldquo;Agreement&rdquo;) is entered into
                between <strong>Illinois Estate Law, PC</strong> (&ldquo;Firm&rdquo;) and the
                referring attorney identified in the submission form (&ldquo;Referring
                Attorney&rdquo;), effective upon submission of this referral form.
              </p>

              <div>
                <p className="font-bold text-[#2D3E50]">1. Referral Fee</p>
                <p>
                  If the referred client retains the Firm and pays attorney&rsquo;s fees, the Firm
                  agrees to pay the Referring Attorney a referral fee equal to{' '}
                  <strong>10% of the total attorney&rsquo;s fees actually collected</strong> from
                  the referred client. Court costs, filing fees, and third-party expenses passed
                  through to the client are excluded from the calculation.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">2. Payment Terms</p>
                <p>
                  The referral fee will be paid to the Referring Attorney within{' '}
                  <strong>30 days</strong> of the Firm&rsquo;s receipt of final payment from the
                  referred client. For matters billed in installments, referral fees will be paid
                  proportionally as each installment is received by the Firm.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">
                  3. Compliance with Illinois Rules of Professional Conduct
                </p>
                <p>
                  This Agreement is subject to Illinois Rules of Professional Conduct Rule
                  1.5(e), which requires that: (a) the division is proportional to the services
                  performed by each lawyer, or each lawyer assumes joint responsibility for the
                  representation; (b) the client gives informed written consent to the
                  arrangement, including the share each lawyer will receive; and (c) the total
                  fee is reasonable.
                </p>
                <p>
                  By submitting this referral, the Referring Attorney agrees to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    Obtain the client&rsquo;s <strong>informed written consent</strong> to this
                    referral fee arrangement prior to or promptly following submission;
                  </li>
                  <li>
                    Inform the client that Illinois Estate Law, PC will pay the Referring
                    Attorney 10% of attorney&rsquo;s fees collected from this matter; and
                  </li>
                  <li>
                    Provide written evidence of client consent to the Firm upon request.
                  </li>
                </ul>
                <p>
                  The Firm will also independently seek the client&rsquo;s written consent as
                  part of the client intake and engagement process.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">4. No Guaranty of Engagement</p>
                <p>
                  This Agreement does not guarantee that the referred client will retain the
                  Firm. The referral fee is contingent solely upon the client signing an
                  engagement agreement with the Firm and the Firm collecting attorney&rsquo;s
                  fees from that client.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">5. Referring Attorney&rsquo;s Role</p>
                <p>
                  The Referring Attorney will not provide legal services in connection with the
                  referred matter unless separately agreed to in writing by both parties. The
                  referral fee compensates the Referring Attorney solely for identifying and
                  introducing the client to the Firm.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">6. Confidentiality</p>
                <p>
                  Both parties agree to maintain the confidentiality of all client information
                  in accordance with the Illinois Rules of Professional Conduct and applicable
                  law.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">7. Governing Law</p>
                <p>
                  This Agreement is governed by the laws of the State of Illinois and the
                  Illinois Rules of Professional Conduct. Any dispute arising under this
                  Agreement shall be resolved in the courts of Cook County, Illinois.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#2D3E50]">8. Entire Agreement</p>
                <p>
                  This Agreement constitutes the entire agreement between the parties with
                  respect to the referral fee arrangement. No modification shall be binding
                  unless in writing and signed by an authorized representative of both parties.
                </p>
              </div>

              <p className="text-xs text-gray-500 border-t border-gray-200 pt-3 mt-4">
                By checking the acknowledgment box below and submitting this form, the Referring
                Attorney agrees to be bound by the terms of this Agreement.
              </p>
            </div>
          )}
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              {...register('agreedToTerms', {
                required: 'You must read and agree to the Referral Fee Agreement to proceed',
              })}
              type="checkbox"
              className="mt-0.5 w-5 h-5 rounded border-gray-300 text-[#4A708B] focus:ring-[#4A708B] cursor-pointer shrink-0"
            />
            <span className="font-['Plus_Jakarta_Sans'] text-[15px] text-gray-700 group-hover:text-[#2D3E50] transition-colors">
              I have read and agree to the{' '}
              <button
                type="button"
                onClick={() => setAgreementOpen(true)}
                className="text-[#4A708B] underline font-semibold hover:text-[#2D3E50]"
              >
                Referral Fee Agreement
              </button>{' '}
              above, including the 10% referral fee arrangement and my obligation to obtain
              client consent pursuant to Illinois RPC 1.5(e).{' '}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.agreedToTerms && (
            <p className={errorClass}>{errors.agreedToTerms.message}</p>
          )}

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              {...register('clientInformed')}
              type="checkbox"
              className="mt-0.5 w-5 h-5 rounded border-gray-300 text-[#4A708B] focus:ring-[#4A708B] cursor-pointer shrink-0"
            />
            <span className="font-['Plus_Jakarta_Sans'] text-[15px] text-gray-700 group-hover:text-[#2D3E50] transition-colors">
              I have already informed my client that I am referring them to Illinois Estate Law
              and that a referral fee arrangement exists.
            </span>
          </label>
        </div>
      </div>

      {/* ── Server error ───────────────────────────────────────── */}
      {serverError && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-red-700">{serverError}</p>
        </div>
      )}

      {/* ── Submit ─────────────────────────────────────────────── */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting || !agreedToTerms}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D3E50] hover:bg-[#4A708B] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-['Plus_Jakarta_Sans'] font-bold text-base uppercase py-4 px-10 rounded-full transition-colors duration-200"
        >
          {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
          {isSubmitting ? 'Submitting Referral…' : 'Submit Referral'}
        </button>
        <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm text-gray-500">
          <span className="text-red-500">*</span> Required fields. Your information is kept
          confidential.
        </p>
      </div>
    </form>
  );
}
