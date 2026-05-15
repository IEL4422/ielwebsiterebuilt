'use client';

import { useState } from 'react';
import Link from 'next/link';

// ── Illinois estate tax ────────────────────────────────────────────────────────
// Illinois imposes its own estate tax using the former federal "state death tax
// credit" table (IRC § 2011, pre-EGTRRA) since Illinois decoupled in 2003.
// Exemption/threshold: $4,000,000 (Form 700).  Top rate: 16%.
const IL_THRESHOLD = 4_000_000;

const IL_CREDIT_TABLE = [
  { atLeast: 0,        lessThan: 40000,     base: 0,       rate: 0.000, excessOver: 0 },
  { atLeast: 40000,    lessThan: 90000,     base: 0,       rate: 0.008, excessOver: 40000 },
  { atLeast: 90000,    lessThan: 140000,    base: 400,     rate: 0.016, excessOver: 90000 },
  { atLeast: 140000,   lessThan: 240000,    base: 1200,    rate: 0.024, excessOver: 140000 },
  { atLeast: 240000,   lessThan: 440000,    base: 3600,    rate: 0.032, excessOver: 240000 },
  { atLeast: 440000,   lessThan: 640000,    base: 10000,   rate: 0.040, excessOver: 440000 },
  { atLeast: 640000,   lessThan: 840000,    base: 18000,   rate: 0.048, excessOver: 640000 },
  { atLeast: 840000,   lessThan: 1040000,   base: 27600,   rate: 0.056, excessOver: 840000 },
  { atLeast: 1040000,  lessThan: 1540000,   base: 38800,   rate: 0.064, excessOver: 1040000 },
  { atLeast: 1540000,  lessThan: 2040000,   base: 70800,   rate: 0.072, excessOver: 1540000 },
  { atLeast: 2040000,  lessThan: 2540000,   base: 106800,  rate: 0.080, excessOver: 2040000 },
  { atLeast: 2540000,  lessThan: 3040000,   base: 146800,  rate: 0.088, excessOver: 2540000 },
  { atLeast: 3040000,  lessThan: 3540000,   base: 190800,  rate: 0.096, excessOver: 3040000 },
  { atLeast: 3540000,  lessThan: 4040000,   base: 238800,  rate: 0.104, excessOver: 3540000 },
  { atLeast: 4040000,  lessThan: 5040000,   base: 290800,  rate: 0.112, excessOver: 4040000 },
  { atLeast: 5040000,  lessThan: 6040000,   base: 402800,  rate: 0.120, excessOver: 5040000 },
  { atLeast: 6040000,  lessThan: 7040000,   base: 522800,  rate: 0.128, excessOver: 6040000 },
  { atLeast: 7040000,  lessThan: 8040000,   base: 650800,  rate: 0.136, excessOver: 7040000 },
  { atLeast: 8040000,  lessThan: 9040000,   base: 786800,  rate: 0.144, excessOver: 8040000 },
  { atLeast: 9040000,  lessThan: 10040000,  base: 930800,  rate: 0.152, excessOver: 9040000 },
  { atLeast: 10040000, lessThan: 9.999e13,  base: 1082800, rate: 0.160, excessOver: 10040000 },
];

// ── Federal estate tax ─────────────────────────────────────────────────────────
// Federal unified rate schedule — 26 U.S.C. § 2001(c).
// Net federal tax = tentativeTax(gross + gifts) − tentativeTax(exemption).
// The TCJA enhanced exemption (~$13.99M in 2025) sunsetted on 1/1/2026,
// reverting to the pre-TCJA level indexed for inflation (~$7,000,000 per person).
// Users may adjust the exemption field if subsequent legislation has changed it.
const FED_RATE_TABLE = [
  { atLeast: 0,        lessThan: 10000,    base: 0,       rate: 0.18, excessOver: 0 },
  { atLeast: 10000,    lessThan: 20000,    base: 1800,    rate: 0.20, excessOver: 10000 },
  { atLeast: 20000,    lessThan: 40000,    base: 3800,    rate: 0.22, excessOver: 20000 },
  { atLeast: 40000,    lessThan: 60000,    base: 8200,    rate: 0.24, excessOver: 40000 },
  { atLeast: 60000,    lessThan: 80000,    base: 13000,   rate: 0.26, excessOver: 60000 },
  { atLeast: 80000,    lessThan: 100000,   base: 18200,   rate: 0.28, excessOver: 80000 },
  { atLeast: 100000,   lessThan: 150000,   base: 23800,   rate: 0.30, excessOver: 100000 },
  { atLeast: 150000,   lessThan: 250000,   base: 38800,   rate: 0.32, excessOver: 150000 },
  { atLeast: 250000,   lessThan: 500000,   base: 70800,   rate: 0.34, excessOver: 250000 },
  { atLeast: 500000,   lessThan: 750000,   base: 155800,  rate: 0.37, excessOver: 500000 },
  { atLeast: 750000,   lessThan: 1000000,  base: 248300,  rate: 0.39, excessOver: 750000 },
  { atLeast: 1000000,  lessThan: 9.999e13, base: 345800,  rate: 0.40, excessOver: 1000000 },
];

type RateRow = { atLeast: number; lessThan: number; base: number; rate: number; excessOver: number };

function tentativeTax(table: RateRow[], amount: number): number {
  if (amount <= 0) return 0;
  const row = table.find(r => amount >= r.atLeast && amount < r.lessThan);
  if (!row) return 0;
  return row.base + row.rate * (amount - row.excessOver);
}

interface CalcResults {
  gross: number;
  ate: number;
  ilPreliminaryTax: number;
  ilApportionedTax: number;
  ilRow: RateRow | null;
  situsPct: number;
  fedExemptionUsed: number;
  fedTentativeTax: number;
  fedUnifiedCredit: number;
  fedTax: number;
  totalTax: number;
  details: string;
  hasError: boolean;
}

const EMPTY: CalcResults = {
  gross: 0, ate: 0, ilPreliminaryTax: 0, ilApportionedTax: 0, ilRow: null, situsPct: 100,
  fedExemptionUsed: 0, fedTentativeTax: 0, fedUnifiedCredit: 0, fedTax: 0,
  totalTax: 0, details: '', hasError: false,
};

export default function EstateTaxCalculatorPage() {
  const [grossEstate, setGrossEstate]   = useState('');
  const [taxableGifts, setTaxableGifts] = useState('');
  const [ilSitusPct, setIlSitusPct]     = useState('100');
  const [fedExemption, setFedExemption] = useState('7000000');
  const [showResults, setShowResults]   = useState(false);
  const [results, setResults]           = useState<CalcResults>(EMPTY);

  function parseMoney(value: string): number {
    if (!value) return 0;
    const num = Number(String(value).replace(/[^0-9.\-]/g, ''));
    return Number.isFinite(num) ? num : NaN;
  }

  function fmt(n: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
  }

  function clamp(n: number, min: number, max: number): number {
    return Math.min(Math.max(n, min), max);
  }

  function calculate() {
    const gross = parseMoney(grossEstate);
    const gifts = parseMoney(taxableGifts);
    let situsPct = parseMoney(ilSitusPct);
    let fedEx = parseMoney(fedExemption);

    const errors: string[] = [];
    if (!Number.isFinite(gross) || gross < 0) errors.push('Gross estate must be a valid non-negative number.');
    if (!Number.isFinite(gifts) || gifts < 0) errors.push('Adjusted taxable gifts must be a valid non-negative number.');
    if (!Number.isFinite(situsPct)) situsPct = 100;
    if (!Number.isFinite(fedEx) || fedEx < 0) fedEx = 7_000_000;
    situsPct = clamp(situsPct, 0, 100);

    if (errors.length) {
      setResults({ ...EMPTY, details: errors.map(e => `<p>${e}</p>`).join(''), hasError: true });
      setShowResults(true);
      return;
    }

    const ate = gross + gifts;

    // ── Illinois ──────────────────────────────────────────────────────────────
    let ilPreliminaryTax = 0;
    let ilRow: RateRow | null = null;

    if (ate > IL_THRESHOLD) {
      const row = IL_CREDIT_TABLE.find(r => ate >= r.atLeast && ate < r.lessThan) ?? null;
      if (row) {
        ilPreliminaryTax = Math.max(0, row.base + row.rate * (ate - row.excessOver));
        ilRow = row;
      }
    }
    const ilApportionedTax = ilPreliminaryTax * (situsPct / 100);

    // ── Federal ───────────────────────────────────────────────────────────────
    const fedTentativeTax  = tentativeTax(FED_RATE_TABLE, ate);
    const fedUnifiedCredit = tentativeTax(FED_RATE_TABLE, fedEx);
    const fedTax           = Math.max(0, fedTentativeTax - fedUnifiedCredit);

    const totalTax = ilApportionedTax + fedTax;

    // ── Detail copy ───────────────────────────────────────────────────────────
    const ilDetail = ate <= IL_THRESHOLD
      ? `<p><strong>Illinois:</strong> ${fmt(ate)} is at or below the $4,000,000 Illinois threshold — estimated IL estate tax is $0.</p>`
      : `<p><strong>Illinois:</strong> Bracket: ${fmt(ilRow!.atLeast)} to &lt; ${fmt(ilRow!.lessThan)} — base ${fmt(ilRow!.base)} + ${(ilRow!.rate * 100).toFixed(1)}% of excess over ${fmt(ilRow!.excessOver)}. Preliminary IL tax: ${fmt(ilPreliminaryTax)}. After ${situsPct.toFixed(2)}% IL-situs apportionment: <strong>${fmt(ilApportionedTax)}</strong>.</p>`;

    const fedDetail = ate <= fedEx
      ? `<p><strong>Federal:</strong> ${fmt(ate)} is at or below the ${fmt(fedEx)} federal exemption — estimated federal estate tax is $0.</p>`
      : `<p><strong>Federal:</strong> Tentative tax on ${fmt(ate)}: ${fmt(fedTentativeTax)}. Unified credit (tentative tax on ${fmt(fedEx)} exemption): ${fmt(fedUnifiedCredit)}. Net federal tax: <strong>${fmt(fedTax)}</strong> (effective rate on gross estate: ${gross > 0 ? ((fedTax / gross) * 100).toFixed(2) : '0'}%).</p>`;

    const details = `
      <p><strong>Inputs:</strong> Gross estate ${fmt(gross)}, adjusted taxable gifts ${fmt(gifts)}, adjusted taxable estate (ATE) ${fmt(ate)}. Federal exemption: ${fmt(fedEx)}.</p>
      ${ilDetail}
      ${fedDetail}
      <p style="margin-top:8px;font-size:12px;color:#888;">
        This estimate does not account for marital deductions, charitable deductions, debts, mortgages, administrative expenses, QTIP elections, or other adjustments that may significantly reduce your taxable estate. Consult an estate planning attorney for a complete analysis.
      </p>
    `;

    setResults({ gross, ate, ilPreliminaryTax, ilApportionedTax, ilRow, situsPct, fedExemptionUsed: fedEx, fedTentativeTax, fedUnifiedCredit, fedTax, totalTax, details, hasError: false });
    setShowResults(true);
  }

  function reset() {
    setGrossEstate('');
    setTaxableGifts('');
    setIlSitusPct('100');
    setFedExemption('7000000');
    setShowResults(false);
    setResults(EMPTY);
  }

  const inputClass =
    'w-full py-3 rounded-xl border border-gray-200 text-[#2D3E50] font-medium text-[15px] focus:outline-none focus:border-[#4A708B] focus:ring-2 focus:ring-[#4A708B]/20 transition-all bg-gray-50 focus:bg-white';

  const ilPct  = results.gross > 0 ? (results.ilApportionedTax / results.gross) * 100 : 0;
  const fedPct = results.gross > 0 ? (results.fedTax / results.gross) * 100 : 0;
  const totalPct = results.gross > 0 ? (results.totalTax / results.gross) * 100 : 0;

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#2D3E50] via-[#3a5268] to-[#4A708B] flex items-center py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[68px] lg:text-[82px] font-normal text-white leading-tight mb-4">
              Illinois Estate Tax Calculator
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Estimate your 2026 Illinois and federal estate tax exposure instantly — using current rates and exemptions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Illinois Threshold', value: '$4,000,000' },
                { label: 'IL Top Rate',         value: '16%' },
                { label: 'Federal Exemption',   value: '~$7M (2026)' },
                { label: 'Federal Top Rate',    value: '40%' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 min-w-[120px]">
                  <div className="text-white/55 text-[11px] font-bold uppercase tracking-wider mb-0.5">{stat.label}</div>
                  <div className="text-white text-xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-[860px] mx-auto space-y-6">

          {/* Input card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2D3E50] mb-1">
              Enter Your Estate Details
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              For informational purposes only — not legal or tax advice. Results do not account for marital deductions, debts, or other adjustments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Gross estate */}
              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  Gross estate value
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">$</span>
                  <input
                    value={grossEstate}
                    onChange={e => setGrossEstate(e.target.value)}
                    inputMode="decimal"
                    placeholder="5,000,000"
                    className={`${inputClass} pl-7 pr-4`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Total approximate gross value before deductions</p>
              </div>

              {/* Taxable gifts */}
              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  Adjusted taxable gifts
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">$</span>
                  <input
                    value={taxableGifts}
                    onChange={e => setTaxableGifts(e.target.value)}
                    inputMode="decimal"
                    placeholder="0"
                    className={`${inputClass} pl-7 pr-4`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Post-1976 taxable gifts — enter 0 if none</p>
              </div>

              {/* IL situs % */}
              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  Illinois situs %
                </label>
                <div className="relative">
                  <input
                    value={ilSitusPct}
                    onChange={e => setIlSitusPct(e.target.value)}
                    inputMode="decimal"
                    placeholder="100"
                    className={`${inputClass} pl-4 pr-8`}
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">100 for IL residents · Non-residents: % of assets in Illinois</p>
              </div>

              {/* Federal exemption */}
              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  Federal exemption <span className="font-normal text-gray-400">(per person)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm pointer-events-none">$</span>
                  <input
                    value={fedExemption}
                    onChange={e => setFedExemption(e.target.value)}
                    inputMode="decimal"
                    placeholder="7,000,000"
                    className={`${inputClass} pl-7 pr-4`}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Default: $7,000,000 (2026 post-TCJA sunset) · Adjust if legislation changed</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                type="button"
                onClick={calculate}
                className="bg-[#2D3E50] hover:bg-[#4A708B] text-white font-bold px-8 py-3.5 rounded-full transition-colors text-[15px]"
              >
                Calculate
              </button>
              {showResults && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-[#2D3E50]/70 hover:text-[#2D3E50] border border-gray-200 hover:border-gray-300 font-semibold px-6 py-3.5 rounded-full transition-colors text-[15px] bg-white"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* ── Error state ─────────────────────────────────────────────── */}
          {showResults && results.hasError && (
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
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
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
                  Estate Tax Breakdown
                </h3>

                {/* Stacked bar */}
                <div className="h-6 rounded-full overflow-hidden flex bg-gray-100 mb-4">
                  {ilPct > 0 && (
                    <div
                      className="bg-[#2D3E50] h-full"
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
                    <span className="w-3 h-3 rounded-sm bg-[#2D3E50] flex-shrink-0" />
                    Illinois{ilPct > 0 ? ` — ${ilPct.toFixed(2)}% of estate` : ' — $0'}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-sm bg-[#4A708B] flex-shrink-0" />
                    Federal{fedPct > 0 ? ` — ${fedPct.toFixed(2)}% of estate` : ' — $0'}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-3 h-3 rounded-sm bg-gray-200 flex-shrink-0 border border-gray-300" />
                    {results.gross > 0
                      ? `Passes to heirs — ${(100 - totalPct).toFixed(2)}% of estate`
                      : 'Passes to heirs'}
                  </span>
                </div>
              </div>

              {/* IL + Federal detail cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Illinois card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#2D3E50]/15 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2D3E50]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2D3E50]/60">
                      Illinois Estate Tax
                    </span>
                  </div>

                  <div className="space-y-0 divide-y divide-gray-50">
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Adjusted taxable estate</span>
                      <span className="font-semibold text-[#2D3E50] text-sm">{fmt(results.ate)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Preliminary IL tax</span>
                      <span className="font-semibold text-[#2D3E50] text-sm">{fmt(results.ilPreliminaryTax)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">IL tax ({results.situsPct.toFixed(0)}% situs)</span>
                      <span className="font-bold text-[#2D3E50] text-lg">{fmt(results.ilApportionedTax)}</span>
                    </div>
                  </div>

                  {results.ilApportionedTax > 0 && results.gross > 0 ? (
                    <div className="mt-4 bg-[#2D3E50]/5 rounded-xl px-4 py-3 flex justify-between items-center">
                      <span className="text-xs font-semibold text-[#2D3E50]/60">Effective IL rate</span>
                      <span className="text-[#2D3E50] font-bold text-base">{ilPct.toFixed(2)}%</span>
                    </div>
                  ) : (
                    <div className="mt-4 bg-gray-50 rounded-xl px-4 py-3">
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Below the $4M Illinois threshold — no IL estate tax.{' '}
                        <span className="text-amber-600">Note: Illinois has a &ldquo;cliff&rdquo; — estates just over $4M owe tax on the full value.</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Federal card */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#4A708B]/20 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4A708B]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4A708B]/70">
                      Federal Estate Tax
                    </span>
                  </div>

                  <div className="space-y-0 divide-y divide-gray-50">
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Tentative federal tax</span>
                      <span className="font-semibold text-[#2D3E50] text-sm">{fmt(results.fedTentativeTax)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Unified credit ({fmt(results.fedExemptionUsed)})</span>
                      <span className="font-semibold text-[#2D3E50] text-sm">− {fmt(results.fedUnifiedCredit)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm text-gray-500">Net federal tax</span>
                      <span className="font-bold text-[#2D3E50] text-lg">{fmt(results.fedTax)}</span>
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
                        Below the {fmt(results.fedExemptionUsed)} federal exemption — no federal estate tax.
                      </p>
                    </div>
                  )}

                  <p className="mt-3 text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2.5 leading-relaxed">
                    ⚠️ TCJA exemption (~$13.99M in 2025) sunsetted Jan 1, 2026 — now ~$7M. Adjust the field above if legislation has changed this.
                  </p>
                </div>
              </div>

              {/* Total card */}
              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-2xl p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <div className="text-white/55 text-xs font-bold uppercase tracking-widest mb-2">
                      Total Estimated Estate Tax (IL + Federal)
                    </div>
                    <div className="text-white text-5xl font-black tracking-tight leading-none">
                      {fmt(results.totalTax)}
                    </div>
                    {results.totalTax > 0 && results.gross > 0 ? (
                      <div className="text-white/65 text-sm mt-2">
                        ≈ {totalPct.toFixed(2)}% effective rate on gross estate
                      </div>
                    ) : (
                      <div className="text-white/65 text-sm mt-2">
                        No estate tax estimated at this value
                      </div>
                    )}
                  </div>

                  {results.totalTax > 0 && results.gross > 0 && (
                    <div className="bg-white/10 rounded-xl px-6 py-4 text-right flex-shrink-0">
                      <div className="text-white/55 text-xs font-bold uppercase tracking-wider mb-1">
                        Estimated heirs receive
                      </div>
                      <div className="text-white text-2xl font-bold">
                        {fmt(results.gross - results.totalTax)}
                      </div>
                      <div className="text-white/55 text-xs mt-0.5">
                        {(100 - totalPct).toFixed(1)}% of gross estate
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Calculation details */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <details>
                  <summary className="px-6 py-4 cursor-pointer select-none text-sm font-semibold text-[#2D3E50] hover:bg-gray-50 transition-colors">
                    Show calculation details
                  </summary>
                  <div
                    className="px-6 pb-6 pt-4 text-gray-500 text-sm leading-relaxed border-t border-gray-100 [&_p]:mb-2 [&_strong]:text-[#2D3E50]"
                    dangerouslySetInnerHTML={{ __html: results.details }}
                  />
                </details>
              </div>

              {/* CTA */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#2D3E50] mb-2">
                  Concerned about your estate tax exposure?
                </h3>
                <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
                  With the right planning — trusts, gifting strategies, charitable vehicles — you may be able to significantly reduce or eliminate estate taxes. Our attorneys can build a plan tailored to your situation.
                </p>
                <Link
                  href="/book-consultation/"
                  className="inline-flex items-center bg-[#2D3E50] hover:bg-[#4A708B] text-white font-bold px-8 py-3.5 rounded-full transition-colors"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </>
          )}

          {/* Disclaimer */}
          <p className="text-center text-xs text-gray-400 leading-relaxed max-w-2xl mx-auto pb-2">
            This calculator provides estimates only and does not constitute legal or tax advice. Results do not account for marital deductions, charitable deductions, debts, mortgages, QTIP elections, or other adjustments that may reduce the taxable estate. Consult a licensed estate planning attorney for a complete analysis.
          </p>
        </div>
      </section>
    </main>
  );
}
