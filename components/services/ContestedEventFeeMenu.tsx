import Link from 'next/link';
import { CONTESTED_CUSTOM_FEE, CONTESTED_EVENT_FEES, usd } from '@/lib/pricing';

export function ContestedEventFeeMenu() {
  return (
    <section id="contested-event-fees" className="scroll-mt-[150px] border-y border-[#DCE5ED] bg-[#F6F9FC] py-14">
      <div className="mx-auto max-w-[1180px] px-5 font-['Plus_Jakarta_Sans']">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#547298]">Event-based contested fees</p>
        <h2 className="mt-2 text-3xl font-bold text-[#33414E] md:text-4xl">Additional contested-matter flat fees</h2>
        <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#5f6b76]">
          A contested case does not automatically incur every fee below. The initial $5,000 flat fee covers a defined
          opening scope—not the entire contest. An additional flat fee applies only when the listed event actually
          occurs, after the work and fee are explained in writing. Fees are shown from least expensive to most expensive.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#DCE5ED] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead className="bg-[#33414E] text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-bold">Litigation event or phase</th>
                  <th className="px-5 py-4 text-sm font-bold">Flat fee</th>
                  <th className="px-5 py-4 text-sm font-bold">When it applies</th>
                </tr>
              </thead>
              <tbody>
                {CONTESTED_EVENT_FEES.map((fee, index) => (
                  <tr key={fee.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#F9FBFD]'}>
                    <td className="border-t border-[#E3EAF1] px-5 py-4 align-top font-bold text-[#33414E]">{fee.label}</td>
                    <td className="whitespace-nowrap border-t border-[#E3EAF1] px-5 py-4 align-top font-bold text-[#547298]">
                      {usd(fee.amount)}{fee.unit ? ` ${fee.unit}` : ''}
                    </td>
                    <td className="border-t border-[#E3EAF1] px-5 py-4 align-top text-sm leading-relaxed text-[#5f6b76]">{fee.trigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-[#DCE5ED] bg-white p-5">
          <p className="font-bold text-[#33414E]">{CONTESTED_CUSTOM_FEE.label}: {CONTESTED_CUSTOM_FEE.price}</p>
          <p className="mt-1 text-sm text-[#5f6b76]">{CONTESTED_CUSTOM_FEE.trigger}</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[#DCE5ED] bg-white p-5 text-sm leading-relaxed text-[#5f6b76]">
            <strong className="block text-[#33414E]">No automatic or duplicate charges</strong>
            Component fees are not charged again for work already included in an accepted broader litigation phase.
            Each additional event requires a written scope before the work begins.
          </div>
          <div className="rounded-xl border border-[#DCE5ED] bg-white p-5 text-sm leading-relaxed text-[#5f6b76]">
            <strong className="block text-[#33414E]">Third-party costs</strong>
            Court reporters, transcripts, experts, mediators, guardian ad litem fees, and similar third-party costs are
            separate when applicable. Court approval may be required when fees are paid from an estate or ward’s assets.
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/get-started/?service=contested-probate" className="rounded-full bg-[#547298] px-6 py-3 font-bold text-white hover:bg-[#33414E]">
            Get Started
          </Link>
          <Link href="/book-consultation/" className="rounded-full border-2 border-[#7E9CC0] bg-white px-6 py-3 font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298]">
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
