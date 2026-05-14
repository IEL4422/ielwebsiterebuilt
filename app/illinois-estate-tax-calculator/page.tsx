'use client';

import { useState } from 'react';

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
  ate: 0, ilPreliminaryTax: 0, ilApportionedTax: 0, ilRow: null, situsPct: 100,
  fedExemptionUsed: 0, fedTentativeTax: 0, fedUnifiedCredit: 0, fedTax: 0,
  totalTax: 0, details: '', hasError: false,
};

export default function EstateTaxCalculatorPage() {
  const [grossEstate, setGrossEstate]       = useState('');
  const [taxableGifts, setTaxableGifts]     = useState('');
  const [ilSitusPct, setIlSitusPct]         = useState('100');
  const [fedExemption, setFedExemption]     = useState('7000000');
  const [showResults, setShowResults]       = useState(false);
  const [results, setResults]               = useState<CalcResults>(EMPTY);

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
    if (!Number.isFinite(gross) || gross < 0)   errors.push('Gross estate must be a valid non-negative number.');
    if (!Number.isFinite(gifts) || gifts < 0)   errors.push('Adjusted taxable gifts must be a valid non-negative number.');
    if (!Number.isFinite(situsPct))              situsPct = 100;
    if (!Number.isFinite(fedEx) || fedEx < 0)   fedEx = 7_000_000;
    situsPct = clamp(situsPct, 0, 100);

    if (errors.length) {
      setResults({ ...EMPTY, details: `<div class="warn"><strong>Please fix:</strong><ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul></div>`, hasError: true });
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
      : `<p><strong>Illinois:</strong> Bracket used: ${fmt(ilRow!.atLeast)} to &lt; ${fmt(ilRow!.lessThan)} — base ${fmt(ilRow!.base)} + ${(ilRow!.rate * 100).toFixed(1)}% of excess over ${fmt(ilRow!.excessOver)}. Preliminary IL tax: ${fmt(ilPreliminaryTax)}. After ${situsPct.toFixed(2)}% IL-situs apportionment: <strong>${fmt(ilApportionedTax)}</strong>.</p>`;

    const fedDetail = ate <= fedEx
      ? `<p><strong>Federal:</strong> ${fmt(ate)} is at or below the $${(fedEx / 1_000_000).toFixed(1)}M federal exemption — estimated federal estate tax is $0.</p>`
      : `<p><strong>Federal:</strong> Tentative tax on ${fmt(ate)}: ${fmt(fedTentativeTax)}. Unified credit (tentative tax on ${fmt(fedEx)} exemption): ${fmt(fedUnifiedCredit)}. Net federal tax: <strong>${fmt(fedTax)}</strong> (effective rate on estate above exemption: ${ate > fedEx ? ((fedTax / (ate - fedEx)) * 100).toFixed(1) : '0'}%).</p>`;

    const details = `
      <p><strong>Inputs:</strong> Gross estate ${fmt(gross)}, adjusted taxable gifts ${fmt(gifts)}, adjusted taxable estate (ATE) ${fmt(ate)}. Federal exemption used: ${fmt(fedEx)}.</p>
      ${ilDetail}
      ${fedDetail}
      <p style="margin-top:10px;font-size:13px;color:rgba(0,0,0,.55);">
        This estimate does not account for marital deductions, charitable deductions, debts, mortgages, administrative expenses, QTIP elections, or other adjustments that may significantly reduce your taxable estate. Consult an estate planning attorney for a complete analysis.
      </p>
    `;

    setResults({ ate, ilPreliminaryTax, ilApportionedTax, ilRow, situsPct, fedExemptionUsed: fedEx, fedTentativeTax, fedUnifiedCredit, fedTax, totalTax, details, hasError: false });
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

  return (
    <main>
      <style jsx>{`
        .widget { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        .card {
          max-width: 900px; margin: 0 auto; padding: 24px;
          border: 1px solid rgba(0,0,0,.12); border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,.06); background: #fff;
        }
        .card h2 { margin: 0 0 6px; font-size: 24px; letter-spacing: -.02em; }
        .sub { margin: 0 0 20px; color: rgba(0,0,0,.65); line-height: 1.4; font-size: 14px; }
        .grid4 {
          display: grid; gap: 14px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }
        @media (max-width: 700px) { .grid4 { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .grid4 { grid-template-columns: 1fr; } }
        .field { display: flex; flex-direction: column; gap: 5px; }
        .field span { font-weight: 650; font-size: 14px; }
        .field input {
          padding: 11px 12px; border-radius: 10px;
          border: 1px solid rgba(0,0,0,.18); font-size: 15px; outline: none;
        }
        .field input:focus { border-color: rgba(0,0,0,.45); }
        .field small { color: rgba(0,0,0,.55); font-size: 12px; }
        .actions { display: flex; gap: 10px; margin-top: 16px; }
        .actions button {
          border: 0; padding: 12px 20px; border-radius: 10px; cursor: pointer;
          font-weight: 700; font-size: 14px;
          background: #2D3E50; color: #fff;
        }
        .actions button.ghost {
          background: transparent; color: #2D3E50;
          border: 1px solid rgba(45,62,80,.35);
        }
        .results { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(0,0,0,.10); }
        .tax-section { margin-bottom: 18px; }
        .section-label {
          font-size: 11px; font-weight: 800; letter-spacing: .08em;
          text-transform: uppercase; color: rgba(0,0,0,.45); margin: 0 0 8px;
        }
        .kpis3 {
          display: grid; gap: 10px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 600px) { .kpis3 { grid-template-columns: 1fr; } }
        .kpi {
          border: 1px solid rgba(0,0,0,.10); border-radius: 12px;
          padding: 12px 14px; background: rgba(0,0,0,.02);
        }
        .kpi-label { color: rgba(0,0,0,.60); font-size: 12px; margin-bottom: 5px; }
        .kpi-value { font-size: 20px; font-weight: 800; letter-spacing: -.01em; }
        .kpi-value.zero { color: rgba(0,0,0,.35); }
        .kpi.il { border-color: rgba(45,62,80,.2); background: rgba(45,62,80,.03); }
        .kpi.fed { border-color: rgba(74,112,139,.2); background: rgba(74,112,139,.03); }
        .combined {
          border: 2px solid rgba(45,62,80,.25);
          background: linear-gradient(135deg, rgba(45,62,80,.06), rgba(74,112,139,.06));
          border-radius: 14px; padding: 16px 20px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .combined-label { font-size: 15px; font-weight: 700; color: rgba(0,0,0,.7); }
        .combined-value { font-size: 28px; font-weight: 900; letter-spacing: -.03em; color: #2D3E50; }
        .detail-wrap { margin-top: 16px; }
        .detail-wrap summary { cursor: pointer; font-weight: 700; font-size: 14px; color: #2D3E50; }
        .detail { margin-top: 10px; color: rgba(0,0,0,.72); line-height: 1.5; font-size: 14px; }
        .warn { color: #8a2c00; background: #fff3e8; border: 1px solid #ffd9c2; padding: 10px; border-radius: 12px; }
        .fed-note {
          font-size: 12px; color: rgba(0,0,0,.5); margin-top: 6px; padding: 8px 12px;
          background: rgba(255,200,0,.08); border: 1px solid rgba(200,160,0,.2);
          border-radius: 8px;
        }
      `}</style>

      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">
              Illinois Estate Tax Calculator
            </h1>
          </div>
        </div>
      </section>

      <section className="py-[60px] px-5 lg:px-0 bg-gray-50">
        <section className="widget" aria-label="Illinois & Federal Estate Tax Calculator">
          <div className="card">
            <h2>Illinois &amp; Federal Estate Tax Calculator (Estimate)</h2>
            <p className="sub">
              For informational purposes only — not legal or tax advice. Estimates Illinois estate tax using the Form 700 credit table ($4,000,000 threshold, up to 16%) and federal estate tax using the unified rate schedule (up to 40%). Does not account for marital deductions, charitable deductions, debts, mortgages, or other adjustments that may significantly reduce the taxable estate.
            </p>

            <div className="grid4">
              <label className="field">
                <span>Gross estate value</span>
                <input
                  value={grossEstate}
                  onChange={e => setGrossEstate(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g., 5000000"
                />
                <small>Total approximate gross value before deductions, in dollars.</small>
              </label>

              <label className="field">
                <span>Adjusted taxable gifts</span>
                <input
                  value={taxableGifts}
                  onChange={e => setTaxableGifts(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g., 0"
                />
                <small>Post-1976 taxable gifts. Enter 0 if unknown.</small>
              </label>

              <label className="field">
                <span>Illinois situs %</span>
                <input
                  value={ilSitusPct}
                  onChange={e => setIlSitusPct(e.target.value)}
                  inputMode="decimal"
                  placeholder="100"
                />
                <small>100 for IL residents. Non-residents: ratio of IL assets to total assets.</small>
              </label>

              <label className="field">
                <span>Federal exemption (per person)</span>
                <input
                  value={fedExemption}
                  onChange={e => setFedExemption(e.target.value)}
                  inputMode="decimal"
                  placeholder="7000000"
                />
                <small>Default: $7,000,000 (2026 post-TCJA sunset). Adjust if legislation has changed.</small>
              </label>
            </div>

            <div className="actions">
              <button type="button" onClick={calculate}>Calculate</button>
              <button type="button" className="ghost" onClick={reset}>Reset</button>
            </div>

            {showResults && !results.hasError && (
              <div className="results">

                {/* Illinois */}
                <div className="tax-section">
                  <div className="section-label">Illinois Estate Tax</div>
                  <div className="kpis3">
                    <div className="kpi il">
                      <div className="kpi-label">Adjusted taxable estate (estate + gifts)</div>
                      <div className={`kpi-value${results.ate === 0 ? ' zero' : ''}`}>{fmt(results.ate)}</div>
                    </div>
                    <div className="kpi il">
                      <div className="kpi-label">Preliminary IL tax (before apportionment)</div>
                      <div className={`kpi-value${results.ilPreliminaryTax === 0 ? ' zero' : ''}`}>{fmt(results.ilPreliminaryTax)}</div>
                    </div>
                    <div className="kpi il">
                      <div className="kpi-label">Apportioned IL tax (after {results.situsPct.toFixed(0)}% situs)</div>
                      <div className={`kpi-value${results.ilApportionedTax === 0 ? ' zero' : ''}`}>{fmt(results.ilApportionedTax)}</div>
                    </div>
                  </div>
                  {results.ate <= IL_THRESHOLD && (
                    <p style={{ fontSize: 13, color: 'rgba(0,0,0,.5)', marginTop: 6 }}>
                      Estate is at or below the $4,000,000 Illinois threshold — no Illinois estate tax. Note: Illinois has a &ldquo;cliff&rdquo; at $4M, meaning estates just above this threshold owe tax on the full estate value, not just the excess.
                    </p>
                  )}
                </div>

                {/* Federal */}
                <div className="tax-section">
                  <div className="section-label">Federal Estate Tax</div>
                  <div className="kpis3">
                    <div className="kpi fed">
                      <div className="kpi-label">Federal tentative tax (on estate + gifts)</div>
                      <div className={`kpi-value${results.fedTentativeTax === 0 ? ' zero' : ''}`}>{fmt(results.fedTentativeTax)}</div>
                    </div>
                    <div className="kpi fed">
                      <div className="kpi-label">Federal unified credit (on {fmt(results.fedExemptionUsed)} exemption)</div>
                      <div className={`kpi-value${results.fedUnifiedCredit === 0 ? ' zero' : ''}`}>{fmt(results.fedUnifiedCredit)}</div>
                    </div>
                    <div className="kpi fed">
                      <div className="kpi-label">Net federal estate tax</div>
                      <div className={`kpi-value${results.fedTax === 0 ? ' zero' : ''}`}>{fmt(results.fedTax)}</div>
                    </div>
                  </div>
                  <div className="fed-note">
                    ⚠️ The TCJA enhanced federal exemption (~$13.99M in 2025) sunsetted on January 1, 2026, reverting to approximately $7,000,000 per person. If portability was preserved from a predeceased spouse, or if subsequent legislation changed the exemption, adjust the &ldquo;Federal exemption&rdquo; field above accordingly.
                  </div>
                </div>

                {/* Combined */}
                <div className="combined">
                  <div className="combined-label">Total estimated estate tax (IL + Federal)</div>
                  <div className={`combined-value${results.totalTax === 0 ? ' zero' : ''}`}>{fmt(results.totalTax)}</div>
                </div>

                <details className="detail-wrap">
                  <summary>Show calculation details</summary>
                  <div className="detail" dangerouslySetInnerHTML={{ __html: results.details }} />
                </details>
              </div>
            )}

            {showResults && results.hasError && (
              <div className="results">
                <div className="detail" dangerouslySetInnerHTML={{ __html: results.details }} />
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
