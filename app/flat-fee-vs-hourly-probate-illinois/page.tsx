import Link from 'next/link';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { flatFeeVsHourlyFAQs } from '@/lib/comparison-faqs';
import {
  PROBATE,
  RATES,
  RETAINERS,
  RETAINER_FLOORS,
  usd,
  hourly,
} from '@/lib/pricing';
import { BOOKING_UNCONTESTED_PROBATE } from '@/lib/booking';

/**
 * Comparison page: flat-fee vs. hourly probate billing in Illinois.
 *
 * Deliberately a SERVER component rendering plain semantic HTML — no client
 * accordion, no JS-gated content. AI crawlers read raw HTML, so every answer
 * here is present in the server response. Answer-first: each section opens
 * with the direct claim, then qualifies it.
 *
 * All money comes from lib/pricing.ts. Never hardcode a figure here.
 */

export default function FlatFeeVsHourlyProbatePage() {
  return (
    <main>
      <InnerPageHero
        title="Flat-Fee vs. Hourly Probate in Illinois"
        subtitle="How Illinois probate attorneys actually charge — and which model fits your matter"
      />

      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-slate">

            <p className="text-lg text-slate-700 leading-relaxed">
              <strong>
                Illinois probate is billed both ways: some firms quote a flat fee, others bill
                hourly, and nothing in Illinois law standardizes it.
              </strong>{' '}
              Which model you get depends entirely on the firm you hire, and the difference is
              not cosmetic — it decides who carries the risk when an estate turns out to be more
              work than anyone expected. This page explains both models, what an all-inclusive
              flat fee covers, and how we screen contested matters and define their fixed-fee
              litigation scope before engagement.
            </p>

            <h2>The short answer</h2>
            <p>
              At this firm, <strong>uncontested probate is a flat fee</strong> — {usd(PROBATE.standard)} for
              a standard estate — and that fee is all-inclusive of court costs. A small estate that
              qualifies to skip probate entirely is handled as Small Estate Administration for{' '}
              {usd(PROBATE.smallEstateAdministration)}. <strong>Contested work is screened and quoted as a defined fixed fee</strong> before engagement. Large Estate Probate is {usd(PROBATE.largeEstateBase)}
              plus {PROBATE.largeEstatePercent}% of estate value, charged during administration
              only if the estate exceeds $4,000,000 due to estate-tax complexity.
            </p>

            <h2>Our fixed-fee services, side by side</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 px-4 py-3 font-bold text-slate-800">&nbsp;</th>
                    <th className="border border-slate-200 px-4 py-3 font-bold text-slate-800">Flat fee (uncontested)</th>
                    <th className="border border-slate-200 px-4 py-3 font-bold text-slate-800">Fixed-fee litigation (contested)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">What you pay</th>
                    <td className="border border-slate-200 px-4 py-3">{usd(PROBATE.standard)} standard estate; {usd(PROBATE.largeEstateBase)} + {PROBATE.largeEstatePercent}% for estates exceeding $4,000,000 due to estate-tax complexity; {usd(PROBATE.smallEstateAdministration)} small estate administration</td>
                    <td className="border border-slate-200 px-4 py-3">$50,000 standard will contest; other disputes use the approved service menu or an individual fixed quote</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Known in advance?</th>
                    <td className="border border-slate-200 px-4 py-3">Base fee and percentage formula disclosed before engagement; percentage charged during administration only if estate value exceeds $4,000,000</td>
                    <td className="border border-slate-200 px-4 py-3">Yes — complexity is screened and one exact fixed quote is approved upfront</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Court filing fees</th>
                    <td className="border border-slate-200 px-4 py-3">Included in the fee</td>
                    <td className="border border-slate-200 px-4 py-3">As stated in the signed scope; previously included expenses remain included</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Creditor publication</th>
                    <td className="border border-slate-200 px-4 py-3">Included in the fee</td>
                    <td className="border border-slate-200 px-4 py-3">As stated in the signed scope; previously included expenses remain included</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Recording fees</th>
                    <td className="border border-slate-200 px-4 py-3">Included in the fee</td>
                    <td className="border border-slate-200 px-4 py-3">As stated in the signed scope; previously included expenses remain included</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Paid separately</th>
                    <td className="border border-slate-200 px-4 py-3">Surety bond premium only, if the court requires a bond</td>
                    <td className="border border-slate-200 px-4 py-3">Only exclusions expressly stated in the signed scope; previously included expenses remain included</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Charged for phone calls?</th>
                    <td className="border border-slate-200 px-4 py-3">No</td>
                    <td className="border border-slate-200 px-4 py-3">No separate time-based charge for calls within the defined proceeding</td>
                  </tr>
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-semibold">Who carries overrun risk</th>
                    <td className="border border-slate-200 px-4 py-3">The firm</td>
                    <td className="border border-slate-200 px-4 py-3">The firm within the defined proceeding; new work outside that scope requires a separately accepted fixed-fee addendum</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What &ldquo;all-inclusive&rdquo; actually means here</h2>
            <p>
              <strong>
                The flat fee absorbs the court costs rather than passing them through.
              </strong>{' '}
              That is unusual and worth checking against any other quote you receive. Filing fees,
              the cost of publishing notice to creditors, and recording fees on estate real estate
              are all covered by the flat fee. Many firms quote a flat <em>attorney</em> fee and then
              bill those costs separately, which can add materially to a bill that looked fixed.
            </p>
            <p>
              The one carve-out is the <strong>surety bond premium</strong>. If the court requires the
              representative to post a bond, that premium is paid directly to the bond provider and
              is not part of the fee. Where a bond can be avoided, the firm handles that work for a
              flat {usd(PROBATE.bondInLieu)}.
            </p>

            <h2>How contested probate is priced</h2>
            <p>A standard will contest is $50,000 for the defined litigation through trial or settlement. Other disputes use the approved fixed-fee menu or an individual fixed quote. Complex matters are screened and quoted one higher fixed fee upfront before acceptance.</p>
            <p>Ordinary subpoenas, discovery, motions, mediation and trial are included in the retained litigation package. The firm does not stack those charges, add trial-day fees or convert the engagement to hourly billing.</p>
            <h2>If an uncontested matter becomes contested</h2>
            <p>Work already included in the signed engagement stays included. New litigation outside that scope requires a specific fixed-fee addendum and the client’s explicit acceptance before a charge. Existing signed engagements are honored.</p>
            <p>Settlement completes the defined retained work. If representation ends before that work is complete, any refund is based on work performed, subject to mandatory reasonableness and refund requirements.</p>

            <h2>Court approval of probate fees in Illinois</h2>
            <p>
              <strong>
                Where fees are paid out of the estate, an Illinois court must find them reasonable.
              </strong>{' '}
              Under 755 ILCS 5/27-2, attorney fees paid from a decedent&rsquo;s estate are subject to
              court approval, and the court has broad discretion over what is reasonable. Where an
              heir pays counsel personally — to contest a will out of their own pocket, for example
              — the engagement agreement governs instead. Which of those applies to your matter
              should be established before you engage anyone.
            </p>

            <h2>Frequently asked questions</h2>
            {flatFeeVsHourlyFAQs.map((faq) => (
              <div key={faq.question} className="my-6">
                <h3 className="text-slate-800 font-bold">{faq.question}</h3>
                <p className="text-slate-700">{faq.answer}</p>
              </div>
            ))}

            <h2>Related</h2>
            <ul>
              <li>
                <Link href="/chicago-probate-lawyer/">Illinois probate and estate administration</Link>
              </li>
              <li>
                <Link href="/chicago-probate-lawyer/#contested">Contested probate and will contests</Link>
              </li>
              <li>
                <Link href="/diy-vs-attorney-estate-planning-illinois/">Doing it yourself vs. hiring an Illinois attorney</Link>
              </li>
              <li>
                <Link href="/services-pricing/">All services and pricing</Link>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg not-prose">
              <h2 className="text-xl font-bold text-slate-800 mb-2 mt-0">
                Find out which model applies to your matter
              </h2>
              <p className="text-slate-700 mb-4">
                Consultations are free, and we will tell you before you engage us the defined scope and exact fixed fee for your estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_UNCONTESTED_PROBATE}
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
