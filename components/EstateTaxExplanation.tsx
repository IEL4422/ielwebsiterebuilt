import { calculateIllinoisEstateTax, IL_CALCULATOR_URL, IL_TAX_EXAMPLES } from '@/lib/estate-tax';

const fmt = (amount: number) => new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
}).format(amount);

export function EstateTaxExplanation() {
  return (
    <>
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8" aria-labelledby="six-million-question">
        <h2 id="six-million-question" className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-4">Why $456,071 instead of $518,000 on a $6 million estate?</h2>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          <p>For a <strong>$6,000,000 Illinois tentative taxable estate, no adjusted taxable gifts and 100% Illinois allocation</strong>, the interrelated method used by the Illinois Attorney General gives approximately <strong>{fmt(calculateIllinoisEstateTax(6_000_000).tax)}</strong>.</p>
          <p>The $518,000 figure can be reproduced by applying the rate table directly to $6 million: $402,800 + 12% × ($6,000,000 − $5,040,000). That shortcut omits both the table’s $60,000 adjustment and the deduction for the Illinois estate tax itself.</p>
          <p>The interrelated equation for this example is T = $402,800 + 12% × ($6,000,000 − $60,000 − T − $5,040,000). Solving it gives T = $510,800 ÷ 1.12 = <strong>$456,071.43</strong>, before whole-dollar rounding.</p>
          <p>We cannot determine how a particular document arrived at its figure without reviewing its assumptions. Compare the date of death, gross versus tentative taxable estate, deductions, taxable gifts, QTIP elections and Illinois allocation before comparing totals.</p>
          <p><a href={IL_CALCULATOR_URL} target="_blank" rel="noopener noreferrer" className="text-[#4A708B] underline">Check the Illinois Attorney General’s official calculator</a>: enter $6,000,000 in both fields for this no-gifts example. For your own estate, its second field is the tentative taxable estate <em>plus</em> adjusted taxable gifts.</p>
        </div>
      </section>
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8" aria-labelledby="tax-examples-heading">
        <h2 id="tax-examples-heading" className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-3">Illinois Estate Tax Examples</h2>
        <p className="text-sm text-gray-600 mb-4">Tentative taxable estate after other deductions, before state estate tax; no adjusted taxable gifts; 100% Illinois allocation. These examples use the same calculation as the tool above.</p>
        <table className="w-full text-sm text-left text-gray-600">
          <caption className="sr-only">Estimated Illinois tax by tentative taxable estate</caption>
          <thead><tr className="border-b"><th scope="col" className="py-3 pr-3">Tentative taxable estate</th><th scope="col" className="py-3">Estimated Illinois tax</th></tr></thead>
          <tbody>{IL_TAX_EXAMPLES.map(row => <tr key={row.estate} className="border-b border-gray-100"><th scope="row" className="py-3 font-medium">{fmt(row.estate)}</th><td className="py-3">{fmt(row.tax)}</td></tr>)}</tbody>
        </table>
        <p className="text-sm text-gray-600 mt-4">The $4 million exclusion is not a simple deduction from every estate. But exceeding it slightly does not automatically create a six-figure tax: under these assumptions, a $4.1 million estate has approximately {fmt(calculateIllinoisEstateTax(4_100_000).tax)} in Illinois tax.</p>
      </section>
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-3">Sources and limitations</h2>
        <p className="text-sm text-gray-600 leading-relaxed">Method checked October 13, 2026 against the Illinois Attorney General’s calculator and <a className="underline text-[#4A708B]" href="https://illinoisattorneygeneral.gov/Page-Attachments/EstateTaxInstructionFactSheet.pdf">estate tax instructions</a>. Input definitions and allocation follow <a className="underline text-[#4A708B]" href="https://illinoisattorneygeneral.gov/Page-Attachments/Form700.pdf">Form 700</a>. The federal estimate follows the <a className="underline text-[#4A708B]" href="https://www.irs.gov/instructions/i706">IRS Form 706 instructions</a> for the state death tax deduction and 2026 exemption. Small rounding differences may occur. This tool does not prepare a return, calculate penalties or interest, or determine whether deductions or elections are available.</p>
      </section>
    </>
  );
}
