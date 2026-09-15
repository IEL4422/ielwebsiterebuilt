import Link from 'next/link';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { diyVsAttorneyFAQs } from '@/lib/comparison-faqs';
import { ESTATE_PLANNING, usd } from '@/lib/pricing';
import { BOOKING_ESTATE_PLANNING } from '@/lib/booking';

/**
 * Comparison page: do-it-yourself vs. attorney-drafted estate planning in Illinois.
 *
 * Server component, plain semantic HTML, no JS-gated content — AI crawlers read
 * raw HTML. Answer-first throughout.
 *
 * This page is deliberately willing to say when DIY is a defensible choice.
 * A page that claims everyone needs a lawyer for everything reads as marketing
 * and gets cited less than one that draws an honest line.
 *
 * All money comes from lib/pricing.ts.
 */

export default function DiyVsAttorneyEstatePlanningPage() {
  return (
    <main>
      <InnerPageHero
        title="DIY vs. Attorney Estate Planning in Illinois"
        subtitle="What Illinois law actually requires, what fails most often, and where the honest line is"
      />

      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">

            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>
                Illinois does not require you to use a lawyer to make a will, and a will you write
                yourself is fully valid if it meets the statutory formalities.
              </strong>{' '}
              The real question is not whether do-it-yourself is legal — it is whether your
              situation is one where the predictable failure modes are unlikely to bite. This page
              sets out what Illinois law requires, what actually goes wrong with self-prepared
              plans, and where the line sits.
            </p>

            <h2>What Illinois law requires of a will</h2>
            <p>
              <strong>
                A valid Illinois will must be in writing, signed by the testator, and attested by
                two credible witnesses (755 ILCS 5/4-3).
              </strong>{' '}
              The will may be signed by someone else at the testator&rsquo;s direction and in the
              testator&rsquo;s presence. Notarization is <em>not</em> required for validity, though a
              notarized self-proving affidavit makes the will considerably easier to admit to
              probate later, because the witnesses need not be located and produced.
            </p>
            <p>
              Illinois does not recognize a handwritten will that lacks two witnesses. A holographic
              will that would be valid in another state will generally fail in Illinois, which is a
              common and expensive surprise for families who relied on one.
            </p>

            <h2>What goes wrong with do-it-yourself plans</h2>
            <p>
              <strong>
                The failures cluster into four patterns, and none of them are visible while you are
                alive.
              </strong>
            </p>
            <ul>
              <li>
                <strong>The unfunded trust.</strong> By a wide margin the most common and most
                costly. A trust is signed but the house is never deeded into it and the accounts are
                never retitled. An unfunded trust avoids no probate at all, and the family ends up
                paying for both a trust and a probate.
              </li>
              <li>
                <strong>Execution defects.</strong> One witness instead of two, a witness who is also
                a beneficiary, or signatures gathered at different times and places. These are
                discovered when the will is offered for probate, at which point they cannot be cured.
              </li>
              <li>
                <strong>Beneficiary designations that override the will.</strong> Retirement accounts
                and life insurance pass by designation, not by will. A will leaving everything to
                current family does not touch a 401(k) still naming an ex-spouse.
              </li>
              <li>
                <strong>Unnoticed Illinois estate tax exposure.</strong> Illinois imposes its own
                estate tax with a $4 million exclusion that is not indexed for inflation and, unlike
                the federal exemption, is <em>not portable</em> between spouses. A couple leaving
                everything outright to the survivor can waste the first spouse&rsquo;s exclusion
                entirely. Illinois has no inheritance tax. These figures change — verify current law.
              </li>
            </ul>

            <h2>When do-it-yourself is genuinely reasonable</h2>
            <p>
              <strong>
                A self-prepared will is a defensible choice when the estate is small and the plan is
                simple.
              </strong>{' '}
              Specifically: no real estate held in your sole name, sole-name personal property
              comfortably below the $100,000 threshold that triggers Illinois probate, everything
              passing outright to a spouse or to adult children in equal shares, no blended family,
              no beneficiary who cannot manage money, and no realistic Illinois estate tax exposure.
              Where a personal estate is $100,000 or less and no real estate needs to transfer, an
              Illinois small estate affidavit can often move the assets without any probate case at
              all.
            </p>

            <h2>When it stops being reasonable</h2>
            <p>
              <strong>
                Add any one of these and the cost of getting it wrong rises steeply:
              </strong>{' '}
              real estate in your sole name, a business interest, a blended family or children from a
              prior relationship, a beneficiary with a disability or receiving means-tested benefits,
              a beneficiary you do not want receiving assets outright, property in more than one
              state, an estate approaching $4 million, or any expectation that someone will be
              unhappy enough to contest. Each of these has a standard drafting solution and a
              standard way of failing without one.
            </p>

            <h2>The middle option most people do not know exists</h2>
            <p>
              <strong>
                You can draft it yourself and have an attorney check it.
              </strong>{' '}
              This firm reviews self-prepared documents for a flat{' '}
              {usd(ESTATE_PLANNING.diyReviewIndividual)} for an individual and{' '}
              {usd(ESTATE_PLANNING.diyReviewJoint)} for a couple: an attorney reads what you drafted,
              confirms it satisfies Illinois execution requirements, and tells you plainly what it
              does and does not accomplish. It is not the same as having the plan drafted for you,
              but it catches the execution and funding failures that make DIY documents collapse.
            </p>
            <p>
              For comparison, a drafted will package is {usd(ESTATE_PLANNING.willPackageIndividual)}{' '}
              for an individual and {usd(ESTATE_PLANNING.willPackageJoint)} for a couple; a trust
              package is {usd(ESTATE_PLANNING.trustPackageIndividual)} and{' '}
              {usd(ESTATE_PLANNING.trustPackageJoint)} respectively. All are flat fees quoted before
              you commit.
            </p>

            <h2>Frequently asked questions</h2>
            {diyVsAttorneyFAQs.map((faq) => (
              <div key={faq.question} className="my-6">
                <h3 className="text-slate-800 font-bold">{faq.question}</h3>
                <p className="text-slate-700">{faq.answer}</p>
              </div>
            ))}

            <h2>Related</h2>
            <ul>
              <li><Link href="/chicago-wills-lawyer/">Illinois wills</Link></li>
              <li><Link href="/chicago-revocable-trusts-lawyer/">Illinois revocable living trusts</Link></li>
              <li><Link href="/illinois-estate-law-answers/">Illinois estate law answers</Link></li>
              <li><Link href="/flat-fee-vs-hourly-probate-illinois/">Flat-fee vs. hourly probate in Illinois</Link></li>
              <li><Link href="/services-pricing/">All services and pricing</Link></li>
            </ul>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg not-prose">
              <h2 className="text-xl font-bold text-slate-800 mb-2 mt-0">
                Not sure which side of the line you are on?
              </h2>
              <p className="text-slate-700 mb-4">
                Consultations are free. If your situation is simple enough to handle yourself, we
                will tell you that.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_ESTATE_PLANNING}
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Book a free consultation
                </a>
                <a
                  href="tel:3123730731"
                  className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-800 font-semibold rounded-lg hover:bg-white transition-colors"
                >
                  Call (312) 373-0731
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-500 mt-10">
              This page is general information about Illinois law, not legal advice, and does not
              create an attorney-client relationship.
            </p>

          </div>
        </div>
      </article>
    </main>
  );
}
