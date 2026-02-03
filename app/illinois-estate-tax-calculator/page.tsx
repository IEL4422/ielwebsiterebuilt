'use client';

import { Metadata } from 'next';
import { useState } from 'react';

export default function EstateTaxCalculatorPage() {
  const [grossEstate, setGrossEstate] = useState('');
  const [taxableGifts, setTaxableGifts] = useState('');
  const [ilSitusPct, setIlSitusPct] = useState('100');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    ate: 0,
    preliminaryTax: 0,
    apportionedTax: 0,
    details: ''
  });

  const IL_THRESHOLD = 4000000;

  const CREDIT_TABLE = [
    { atLeast: 0,        lessThan: 40000,      base: 0,       rate: 0.000, excessOver: 0 },
    { atLeast: 40000,    lessThan: 90000,      base: 0,       rate: 0.008, excessOver: 40000 },
    { atLeast: 90000,    lessThan: 140000,     base: 400,     rate: 0.016, excessOver: 90000 },
    { atLeast: 140000,   lessThan: 240000,     base: 1200,    rate: 0.024, excessOver: 140000 },
    { atLeast: 240000,   lessThan: 440000,     base: 3600,    rate: 0.032, excessOver: 240000 },
    { atLeast: 440000,   lessThan: 640000,     base: 10000,   rate: 0.040, excessOver: 440000 },
    { atLeast: 640000,   lessThan: 840000,     base: 18000,   rate: 0.048, excessOver: 640000 },
    { atLeast: 840000,   lessThan: 1040000,    base: 27600,   rate: 0.056, excessOver: 840000 },
    { atLeast: 1040000,  lessThan: 1540000,    base: 38800,   rate: 0.064, excessOver: 1040000 },
    { atLeast: 1540000,  lessThan: 2040000,    base: 70800,   rate: 0.072, excessOver: 1540000 },
    { atLeast: 2040000,  lessThan: 2540000,    base: 106800,  rate: 0.080, excessOver: 2040000 },
    { atLeast: 2540000,  lessThan: 3040000,    base: 146800,  rate: 0.088, excessOver: 2540000 },
    { atLeast: 3040000,  lessThan: 3540000,    base: 190800,  rate: 0.096, excessOver: 3040000 },
    { atLeast: 3540000,  lessThan: 4040000,    base: 238800,  rate: 0.104, excessOver: 3540000 },
    { atLeast: 4040000,  lessThan: 5040000,    base: 290800,  rate: 0.112, excessOver: 4040000 },
    { atLeast: 5040000,  lessThan: 6040000,    base: 402800,  rate: 0.120, excessOver: 5040000 },
    { atLeast: 6040000,  lessThan: 7040000,    base: 522800,  rate: 0.128, excessOver: 6040000 },
    { atLeast: 7040000,  lessThan: 8040000,    base: 650800,  rate: 0.136, excessOver: 7040000 },
    { atLeast: 8040000,  lessThan: 9040000,    base: 786800,  rate: 0.144, excessOver: 8040000 },
    { atLeast: 9040000,  lessThan: 10040000,   base: 930800,  rate: 0.152, excessOver: 9040000 },
    { atLeast: 10040000, lessThan: 9.999e13,   base: 1082800, rate: 0.160, excessOver: 10040000 }
  ];

  function parseMoney(value: string): number {
    if (!value) return 0;
    const cleaned = String(value).replace(/[^0-9.\-]/g, "");
    const num = Number(cleaned);
    return Number.isFinite(num) ? num : NaN;
  }

  function formatMoney(n: number): string {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  }

  function clamp(n: number, min: number, max: number): number {
    return Math.min(Math.max(n, min), max);
  }

  function computeStateDeathTaxCredit(adjustedTaxableEstate: number) {
    const row = CREDIT_TABLE.find(r => adjustedTaxableEstate >= r.atLeast && adjustedTaxableEstate < r.lessThan);
    if (!row) return { credit: 0, row: null };
    const credit = row.base + row.rate * (adjustedTaxableEstate - row.excessOver);
    return { credit, row };
  }

  function calculate() {
    const gross = parseMoney(grossEstate);
    const gifts = parseMoney(taxableGifts);
    let situsPct = parseMoney(ilSitusPct);

    const errors: string[] = [];
    if (!Number.isFinite(gross) || gross < 0) errors.push("Gross estate must be a valid non-negative number.");
    if (!Number.isFinite(gifts) || gifts < 0) errors.push("Adjusted taxable gifts must be a valid non-negative number.");
    if (!Number.isFinite(situsPct)) situsPct = 100;
    situsPct = clamp(situsPct, 0, 100);

    if (errors.length) {
      setResults({
        ate: 0,
        preliminaryTax: 0,
        apportionedTax: 0,
        details: `<div class="warn"><strong>Please fix:</strong><ul>${errors.map(e => `<li>${e}</li>`).join("")}</ul></div>`
      });
      setShowResults(true);
      return;
    }

    const ate = gross + gifts;

    if (ate <= IL_THRESHOLD) {
      setResults({
        ate,
        preliminaryTax: 0,
        apportionedTax: 0,
        details: `
          <p><strong>Threshold check:</strong> ${formatMoney(ate)} is at or below ${formatMoney(IL_THRESHOLD)}, so this estimator returns $0 Illinois estate tax.</p>
          <p>Note: Actual Form 700 computations can vary based on deductions, QTIP elections, apportionment, and other adjustments.</p>
        `
      });
      setShowResults(true);
      return;
    }

    const { credit, row } = computeStateDeathTaxCredit(ate);
    const preliminaryTax = Math.max(0, credit);
    const apportionedTax = preliminaryTax * (situsPct / 100);

    const ratePct = row ? (row.rate * 100).toFixed(1) : "0.0";
    const details = `
      <p><strong>Adjusted taxable estate:</strong> ${formatMoney(ate)} (gross estate ${formatMoney(gross)} + gifts ${formatMoney(gifts)}).</p>
      <p><strong>Credit-table bracket used:</strong>
        ${formatMoney(row!.atLeast)} to &lt; ${formatMoney(row!.lessThan)}:
        base credit ${formatMoney(row!.base)} + ${ratePct}% of excess over ${formatMoney(row!.excessOver)}.
      </p>
      <p><strong>Preliminary IL tax (before apportionment):</strong> ${formatMoney(preliminaryTax)}.</p>
      <p><strong>Illinois situs %:</strong> ${situsPct.toFixed(2)}% ⇒ <strong>apportioned IL tax:</strong> ${formatMoney(apportionedTax)}.</p>
      <p style="margin-top:10px;">
        If you want this to mirror your Form 700 workflow more closely, swap the input fields to match Schedule A/B line items
        and apply your internal deductions/QTIP logic before feeding the adjusted taxable estate into the table.
      </p>
    `;

    setResults({
      ate,
      preliminaryTax,
      apportionedTax,
      details
    });
    setShowResults(true);
  }

  function reset() {
    setGrossEstate('');
    setTaxableGifts('');
    setIlSitusPct('100');
    setShowResults(false);
    setResults({
      ate: 0,
      preliminaryTax: 0,
      apportionedTax: 0,
      details: ''
    });
  }

  return (
    <main>
      <style jsx>{`
        .il-estate-tax-widget { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
        .il-card{
          max-width: 860px; margin: 0 auto; padding: 22px;
          border: 1px solid rgba(0,0,0,.12); border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,.06);
          background: #fff;
        }
        .il-card h2{ margin: 0 0 6px; font-size: 24px; letter-spacing: -.02em; }
        .il-sub{ margin: 0 0 18px; color: rgba(0,0,0,.7); line-height: 1.35; }
        .il-grid{
          display: grid; gap: 14px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 860px){ .il-grid{ grid-template-columns: 1fr; } }
        .il-field{ display: flex; flex-direction: column; gap: 6px; }
        .il-field span{ font-weight: 650; }
        .il-field input{
          padding: 12px 12px; border-radius: 12px; border: 1px solid rgba(0,0,0,.18);
          font-size: 16px; outline: none;
        }
        .il-field input:focus{ border-color: rgba(0,0,0,.45); }
        .il-field small{ color: rgba(0,0,0,.62); }
        .il-actions{ display: flex; gap: 10px; margin-top: 14px; }
        .il-actions button{
          border: 0; padding: 12px 14px; border-radius: 12px; cursor: pointer;
          font-weight: 700; font-size: 14px;
          background: #0b5cff; color: #fff;
        }
        .il-actions button.ghost{
          background: transparent; color: #0b5cff;
          border: 1px solid rgba(11,92,255,.35);
        }
        .il-results{ margin-top: 18px; padding-top: 16px; border-top: 1px solid rgba(0,0,0,.10); }
        .il-results h3{ margin: 0 0 10px; font-size: 18px; }
        .il-kpis{
          display: grid; gap: 12px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        @media (max-width: 860px){ .il-kpis{ grid-template-columns: 1fr; } }
        .kpi{
          border: 1px solid rgba(0,0,0,.10); border-radius: 14px; padding: 12px;
          background: rgba(0,0,0,.02);
        }
        .kpi-label{ color: rgba(0,0,0,.65); font-size: 12px; margin-bottom: 6px; }
        .kpi-value{ font-size: 20px; font-weight: 800; letter-spacing: -.01em; }
        .il-details{ margin-top: 12px; }
        .il-details summary{ cursor: pointer; font-weight: 700; }
        .detail{ margin-top: 10px; color: rgba(0,0,0,.75); line-height: 1.35; }
        .warn{ color: #8a2c00; background: #fff3e8; border: 1px solid #ffd9c2; padding: 10px; border-radius: 12px; }
      `}</style>

      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[50px] md:leading-[65px] lg:leading-[75px] text-center">Illinois Estate Tax Calculator</h1>
          </div>
        </div>
      </section>

      <section className="py-[60px] px-5 lg:px-0 bg-gray-50">
        <section className="il-estate-tax-widget" aria-label="Illinois Estate Tax Calculator">
          <div className="il-card">
            <h2>Illinois Estate Tax Calculator (Estimate)</h2>
            <p className="il-sub">
              For informational purposes only. Illinois estate tax is computed using an interrelated calculation on Form 700.
              This widget provides a reasonable estimate using the Illinois AG&apos;s credit table and the $4,000,000 threshold.
            </p>

            <div className="il-grid">
              <label className="il-field">
                <span>Gross estate value</span>
                <input
                  value={grossEstate}
                  onChange={(e) => setGrossEstate(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g., 5000000"
                />
                <small>Total approximate gross value (before deductions), in dollars.</small>
              </label>

              <label className="il-field">
                <span>Adjusted taxable gifts (lifetime)</span>
                <input
                  value={taxableGifts}
                  onChange={(e) => setTaxableGifts(e.target.value)}
                  inputMode="decimal"
                  placeholder="e.g., 0"
                />
                <small>If unknown, enter 0.</small>
              </label>

              <label className="il-field">
                <span>Illinois situs percentage</span>
                <input
                  value={ilSitusPct}
                  onChange={(e) => setIlSitusPct(e.target.value)}
                  inputMode="decimal"
                  placeholder="100"
                />
                <small>100 for Illinois residents; otherwise, ratio of IL assets to total assets (0–100).</small>
              </label>
            </div>

            <div className="il-actions">
              <button type="button" onClick={calculate}>Calculate</button>
              <button type="button" className="ghost" onClick={reset}>Reset</button>
            </div>

            {showResults && (
              <div className="il-results">
                <h3>Estimated results</h3>
                <div className="il-kpis">
                  <div className="kpi">
                    <div className="kpi-label">Adjusted taxable estate (estate + gifts)</div>
                    <div className="kpi-value">{formatMoney(results.ate)}</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Preliminary IL tax (before apportionment)</div>
                    <div className="kpi-value">{formatMoney(results.preliminaryTax)}</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Apportioned IL tax (after situs %)</div>
                    <div className="kpi-value">{formatMoney(results.apportionedTax)}</div>
                  </div>
                </div>

                <details className="il-details">
                  <summary>Show calculation details</summary>
                  <div className="detail" dangerouslySetInnerHTML={{ __html: results.details }} />
                </details>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
