'use client';

import { useState } from 'react';
import Link from 'next/link';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { calculateIllinoisEstateTax, estimateFederalEstateTax, parseTaxInput } from '@/lib/estate-tax';
import { EstateTaxExplanation } from '@/components/EstateTaxExplanation';

interface CalcResults {
  gross: number;
  ate: number;
  ilPreliminaryTax: number;
  ilApportionedTax: number;
  federalUnavailable: boolean;
  situsPct: number;
  fedExemptionUsed: number;
  fedTax: number;
  totalTax: number;
  details: string;
  hasError: boolean;
}

const EMPTY: CalcResults = {
  gross: 0, ate: 0, ilPreliminaryTax: 0, ilApportionedTax: 0, federalUnavailable: false, situsPct: 100,
  fedExemptionUsed: 0, fedTax: 0,
  totalTax: 0, details: '', hasError: false,
};

export default function EstateTaxCalculatorPage() {
  const [grossEstate, setGrossEstate]   = useState('');
  const [taxableGifts, setTaxableGifts] = useState('');
  const [ilSitusPct, setIlSitusPct]     = useState('100');
  const [fedExemption, setFedExemption] = useState('15000000');
  const [showResults, setShowResults]   = useState(false);
  const [results, setResults]           = useState<CalcResults>(EMPTY);

  function parseMoney(value: string): number {
    return parseTaxInput(value);
  }

  function fmt(n: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  }

  function calculate() {
    const gross = parseMoney(grossEstate);
    const gifts = parseTaxInput(taxableGifts, true);
    const situsPct = parseMoney(ilSitusPct);
    const fedEx = parseMoney(fedExemption);

    const errors: string[] = [];
    if (!Number.isFinite(gross) || gross < 0) errors.push('Tentative taxable estate must be a valid non-negative number.');
    if (!Number.isFinite(gifts) || gifts < 0) errors.push('Adjusted taxable gifts must be a valid non-negative number.');
    if (!Number.isFinite(situsPct) || situsPct < 0 || situsPct > 100) errors.push('Illinois allocation must be between 0 and 100.');
    if (!Number.isFinite(fedEx) || fedEx < 1_000_000) errors.push('Enter a federal exemption of at least $1,000,000 for this simplified estimate.');
    if (Number.isFinite(gross) && Number.isFinite(gifts) && !Number.isSafeInteger(Math.ceil(gross + gifts))) errors.push('Combined estate and gifts exceed the supported calculation range.');

    if (errors.length) {
      setResults({ ...EMPTY, details: errors.map(e => `<p>${e}</p>`).join(''), hasError: true });
      setShowResults(true);
      return;
    }

    const ate = gross + gifts;

    const il = calculateIllinoisEstateTax(gross, gifts, situsPct);
    const ilPreliminaryTax = il.fullTax;
    const ilApportionedTax = il.tax;
    const federalUnavailable = gifts > fedEx;
    const fedBase = Math.max(0, gross - ilApportionedTax) + gifts;
    // The federal estimate assumes no prior gift tax payable or other credits.
    const fedTax = federalUnavailable ? 0 : estimateFederalEstateTax(gross, gifts, ilApportionedTax, fedEx);
    const totalTax = ilApportionedTax + fedTax;
    const details = `
      <p><strong>Inputs:</strong> Tentative taxable estate ${fmt(gross)}, adjusted taxable gifts ${fmt(gifts)}, Illinois allocation ${situsPct}%. Federal exemption ${fmt(fedEx)}.</p>
      <p><strong>Illinois:</strong> The credit-table calculation subtracts the $60,000 adjustment and solves for the Illinois tax deduction and tax together: ${fmt(il.creditAfterDeduction)}. Gifts affect the exclusion limit, not the credit-table estate base.</p>
      <p>The Illinois exclusion limit is 40% × (estate + gifts − $4,000,000) ÷ 1.40, no less than zero: ${fmt(il.exclusionLimit)}. The smaller result is ${fmt(ilPreliminaryTax)}. Multiplying by ${situsPct}% gives <strong>${fmt(ilApportionedTax)}</strong>. The 40% comparison is part of Illinois's calculation, not an additional federal tax.</p>
      <p><strong>Federal:</strong> ${federalUnavailable ? 'Not estimated: gifts exceed the selected exemption and historical gift-tax calculations are required.' : `After deducting the estimated Illinois tax, the estate plus gifts is ${fmt(fedBase)}. The simplified estimate is 40% of any excess over ${fmt(fedEx)}: ${fmt(fedTax)}.`}</p>
      <p>This assumes the same tentative estate for Illinois and federal purposes, no prior gift tax payable, no other state death taxes or credits, and a U.S. citizen or resident. Illinois-only QTIP adjustments require a separate federal calculation. Filing may be required even when estimated tax is zero.</p>
    `;
    setResults({ gross, ate, ilPreliminaryTax, ilApportionedTax, federalUnavailable, situsPct, fedExemptionUsed: fedEx, fedTax, totalTax, details, hasError: false });
    setShowResults(true);
  }

  function reset() {
    setGrossEstate('');
    setTaxableGifts('');
    setIlSitusPct('100');
    setFedExemption('15000000');
    setShowResults(false);
    setResults(EMPTY);
  }

  const inputClass =
    'w-full py-3 rounded-xl border border-gray-200 text-[#33414E] font-medium text-[15px] focus:outline-none focus:border-[#547298] focus:ring-2 focus:ring-[#4A708B]/20 transition-all bg-gray-50 focus:bg-white';

  const ilPct  = results.gross > 0 ? (results.ilApportionedTax / results.gross) * 100 : 0;
  const fedPct = results.gross > 0 ? (results.fedTax / results.gross) * 100 : 0;
  const totalPct = results.gross > 0 ? (results.totalTax / results.gross) * 100 : 0;

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <InnerPageHero title="Illinois Estate Tax Calculator" subtitle="Estimate your 2026 Illinois and federal estate tax exposure instantly — using current rates and exemptions." />
      <div className="bg-[#33414E] pb-8 px-4">
        <div className="max-w-[1140px] mx-auto flex flex-wrap justify-center gap-4">
          {[
            { label: 'Illinois Threshold', value: '$4,000,000' },
            { label: 'IL Top Rate',         value: '16%' },
            { label: 'Federal Exemption',   value: '$15M (2026)' },
            { label: 'Federal Top Rate',    value: '40%' },
          ].map(stat => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 min-w-[120px]">
              <div className="text-white/55 text-[11px] font-bold uppercase tracking-wider mb-0.5">{stat.label}</div>
              <div className="text-white text-xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-[860px] mx-auto space-y-6">

          {/* Input card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E] mb-1">
              Enter Your Estate Details
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Planning estimate, not a tax return. Enter the tentative taxable estate after allowable deductions but before the state estate tax deduction. Figures are rounded to the nearest dollar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Gross estate */}
              <div>
                <label htmlFor="tax-estate" className="block text-sm font-semibold text-[#33414E] mb-2">
                  Illinois tentative taxable estate ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">$</span>
                  <input
                    id="tax-estate"
                    value={grossEstate}
                    onChange={e => { setGrossEstate(e.target.value); setShowResults(false); }}
                    inputMode="decimal"
                    placeholder="5,000,000"
                    className={`${inputClass} pl-7 pr-4`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Form 700, Schedule A or B, line 3: after allowable marital, charitable, debt and expense deductions and Illinois QTIP adjustments. Do not subtract Illinois estate tax yourself.</p>
              </div>

              {/* Taxable gifts */}
              <div>
                <label htmlFor="tax-gifts" className="block text-sm font-semibold text-[#33414E] mb-2">
                  Adjusted taxable gifts
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">$</span>
                  <input
                    id="tax-gifts"
                    value={taxableGifts}
                    onChange={e => { setTaxableGifts(e.target.value); setShowResults(false); }}
                    inputMode="decimal"
                    placeholder="0"
                    className={`${inputClass} pl-7 pr-4`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Form 700, line 4: adjusted taxable gifts, not all lifetime gifts. Leave blank for zero.</p>
              </div>

              {/* IL situs % */}
              <div>
                <label htmlFor="tax-situs" className="block text-sm font-semibold text-[#33414E] mb-2">
                  Illinois situs %
                </label>
                <div className="relative">
                  <input
                    id="tax-situs"
                    value={ilSitusPct}
                    onChange={e => { setIlSitusPct(e.target.value); setShowResults(false); }}
                    inputMode="decimal"
                    placeholder="100"
                    className={`${inputClass} pl-4 pr-8`}
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Form 700, line 9: Illinois-situs gross assets ÷ total gross assets. Residents may also have out-of-state real or tangible property; 100% is not automatic.</p>
              </div>

              {/* Federal exemption */}
              <div>
                <label htmlFor="tax-exemption" className="block text-sm font-semibold text-[#33414E] mb-2">
                  Federal exemption <span className="font-normal text-gray-400">(per person)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">$</span>
                  <input
                    id="tax-exemption"
                    value={fedExemption}
                    onChange={e => { setFedExemption(e.target.value); setShowResults(false); }}
                    inputMode="decimal"
                    placeholder="15,000,000"
                    className={`${inputClass} pl-7 pr-4`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Default: $15,000,000 per person (2026) · Adjust if amount changes</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                type="button"
                onClick={calculate}
                className="bg-[#33414E] hover:bg-[#4A708B] text-white font-bold px-8 py-3.5 rounded-full transition-colors text-[15px]"
              >
                Calculate
              </button>
              {showResults && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-[#33414E]/70 hover:text-[#33414E] border border-gray-200 hover:border-gray-300 font-semibold px-6 py-3.5 rounded-full transition-colors text-[15px] bg-white"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* ── Error state ─────────────────────────────────────────────── */}
          {showResults && results.hasError && (
            <div role="alert" className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <p className="text-orange-800 font-semibold mb-1">Please fix the following:</p>
              <div
                className="text-orange-700 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: results.details }}
              />
            </div>
          )}

          {/* ── Results ─────────────────────────────────────────────────── */}
          {showResults && !results.hasError && (
            <>
              {/* Visual breakdown bar */}
              {!results.federalUnavailable && <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                  Simplified Estate Tax Breakdown
                </h3>

                {/* Stacked bar */}
                <div className="h-6 rounded-full overflow-hidden flex bg-gray-100 mb-4">
                  {ilPct > 0 && (
                    <div
                      className="bg-[#33414E] h-full"
                      style={{ width: `${Math.min(ilPct, 100)}%` }}
                    />
                  )}
                  {fedPct > 0 && (
                    <div
                      className="bg-[#4A708B] h-full"
                      style={{ width: `${Math.min(fedPct, 100)}%` }}
                    />
                  )}
                </div>

                <div className="flex flex-wrap gap-5">
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-sm bg-[#33414E] flex-shrink-0" />
                    Illinois{ilPct > 0 ? ` — ${ilPct.toFixed(2)}% of estate` : ' — $0'}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-sm bg-[#4A708B] flex-shrink-0" />
                    Federal{fedPct > 0 ? ` — ${fedPct.toFixed(2)}% of estate` : ' — $0'}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-sm bg-gray-200 flex-shrink-0 border border-gray-300" />
                    {results.gross > 0
                      ? `After estimated tax — ${(100 - totalPct).toFixed(2)}% of estate`
                      : 'After estimated tax'}
                  </span>
                </div>
              </div>}

              {/* IL + Federal detail cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Illinois card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#33414E]/15 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#33414E]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#33414E]/60">
                      Illinois Estate Tax
                    </span>
                  </div>

                  <div className="space-y-0 divide-y divide-gray-50">
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Tentative estate + gifts</span>
                      <span className="font-semibold text-[#33414E] text-sm">{fmt(results.ate)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Preliminary IL tax</span>
                      <span className="font-semibold text-[#33414E] text-sm">{fmt(results.ilPreliminaryTax)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">IL tax ({results.situsPct}% situs)</span>
                      <span data-testid="illinois-tax" className="font-bold text-[#33414E] text-lg">{fmt(results.ilApportionedTax)}</span>
                    </div>
                  </div>

                  {results.ilApportionedTax > 0 && results.gross > 0 ? (
                    <div className="mt-4 bg-[#33414E]/5 rounded-xl px-4 py-3 flex justify-between items-center">
                      <span className="text-xs font-semibold text-[#33414E]/60">Effective IL rate</span>
                      <span className="text-[#33414E] font-bold text-base">{ilPct.toFixed(2)}%</span>
                    </div>
                  ) : (
                    <div className="mt-4 bg-gray-50 rounded-xl px-4 py-3">
                      <p className="text-xs text-gray-400 leading-relaxed">
                        No Illinois tax estimated from these inputs.{' '}
                        <span className="text-amber-600">A return may still be required based on gross estate plus gifts. The exclusion limit prevents an automatic six-figure tax just above $4 million.</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Federal card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#547298]/20 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4A708B]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4A708B]/70">
                      Simplified Federal Estate Tax
                    </span>
                  </div>

                  <div className="space-y-0 divide-y divide-gray-50">
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Federal taxable estate + gifts</span>
                      <span className="font-semibold text-[#33414E] text-sm">{fmt(Math.max(0, results.gross - results.ilApportionedTax) + (results.ate - results.gross))}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Federal exemption</span>
                      <span className="font-semibold text-[#33414E] text-sm">{fmt(results.fedExemptionUsed)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Net federal tax</span>
                      <span data-testid="federal-tax" className="font-bold text-[#33414E] text-lg">{results.federalUnavailable ? "Review required" : fmt(results.fedTax)}</span>
                    </div>
                  </div>

                  {results.fedTax > 0 && results.gross > 0 ? (
                    <div className="mt-4 bg-[#4A708B]/10 rounded-xl px-4 py-3 flex justify-between items-center">
                      <span className="text-xs font-semibold text-[#4A708B]/70">Effective federal rate</span>
                      <span className="text-[#4A708B] font-bold text-base">{fedPct.toFixed(2)}%</span>
                    </div>
                  ) : (
                    <div className="mt-4 bg-gray-50 rounded-xl px-4 py-3">
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {results.federalUnavailable ? "Federal tax is not estimated because gifts exceed the exemption and historical gift-tax calculations are needed." : "No federal tax estimated under the assumptions below."}
                      </p>
                    </div>
                  )}

                  <p className="mt-3 text-xs text-blue-700 bg-blue-50 rounded-lg px-3 py-2.5 leading-relaxed">
                    Simplified estimate: deducts Illinois tax and assumes no prior gift tax payable, no other state taxes or credits, and the same tentative estate for both taxes. Illinois-only QTIP adjustments require a separate federal calculation. Federal portability requires a valid election and is not automatic.
                  </p>
                </div>
              </div>

              {/* Total card */}
              <div className="bg-[#33414E] rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <div className="text-white/55 text-xs font-bold uppercase tracking-widest mb-2">
                      Combined Planning Estimate (IL + Federal)
                    </div>
                    <div data-testid="combined-tax" className="text-white text-4xl break-words font-black tracking-tight leading-none">
                      {results.federalUnavailable ? "Review required" : fmt(results.totalTax)}
                    </div>
                    {!results.federalUnavailable && results.totalTax > 0 && results.gross > 0 ? (
                      <div className="text-white/65 text-sm mt-2">
                        ≈ {totalPct.toFixed(2)}% effective rate on tentative taxable estate
                      </div>
                    ) : (
                      <div className="text-white/65 text-sm mt-2">
                        {results.federalUnavailable ? "Combined estimate unavailable; see federal explanation." : "No estate tax estimated from these inputs"}
                      </div>
                    )}
                  </div>

                  {!results.federalUnavailable && results.totalTax > 0 && results.gross > 0 && (
                    <div className="bg-white/10 rounded-xl px-6 py-4 text-right flex-shrink-0">
                      <div className="text-white/55 text-xs font-bold uppercase tracking-wider mb-1">
                        Tentative estate less tax
                      </div>
                      <div className="text-white text-2xl font-bold">
                        {fmt(results.gross - results.totalTax)}
                      </div>
                      <div className="text-white/55 text-xs mt-0.5">
                        {(100 - totalPct).toFixed(1)}% of tentative taxable estate
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Calculation details */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <details>
                  <summary className="px-6 py-4 cursor-pointer select-none text-sm font-semibold text-[#33414E] hover:bg-gray-50 transition-colors">
                    Show calculation details
                  </summary>
                  <div
                    className="px-6 pb-6 pt-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 [&_p]:mb-2 [&_strong]:text-[#33414E]"
                    dangerouslySetInnerHTML={{ __html: results.details }}
                  />
                </details>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-2">
                  Concerned about your estate tax exposure?
                </h3>
                <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
                  With the right planning — trusts, gifting strategies, charitable vehicles — you may be able to significantly reduce or eliminate estate taxes. Our attorneys can build a plan tailored to your situation.
                </p>
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center bg-[#33414E] hover:bg-[#4A708B] text-white font-bold px-8 py-3.5 rounded-full transition-colors"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </>
          )}

          <EstateTaxExplanation />

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto pb-2">
            This calculator provides planning estimates, not legal or tax advice or a return. You must account for allowable deductions and Illinois QTIP adjustments in your input. The federal estimate has separate limitations shown above. Tax filings may be required even when the estimated tax is zero. Have a qualified attorney or tax professional confirm the inputs and final liability.
          </p>
        </div>
      </section>
    </main>
  );
}
