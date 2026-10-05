import Link from 'next/link';
import policy from '@/lib/fee-scope-policy.json';
export function approvedFeeLabel(item: typeof policy.fee_items[number]): string {
  if ('variants' in item && item.variants) return '$2,500 uncontested / $12,500 contested';
  return item.amount == null ? 'Individually quoted fixed fee' : `$${item.amount.toLocaleString()}${'unit' in item && item.unit ? ` ${item.unit}` : ''}`;
}
export default function ApprovedFeeMenu() {
  return <section id="additional-fixed-fees" className="mx-auto max-w-6xl px-4 py-12 scroll-mt-24" aria-label="Approved additional and contested service fees">
    <h2 className="text-3xl font-bold text-[#33414E]">Additional and contested services</h2>
    <p className="mt-3 text-slate-700">Attorney screening and a defined written scope come first. Complex matters receive one higher fixed quote upfront; selecting a service does not automatically retain the firm or authorize a charge.</p>
    <div className="grid md:grid-cols-2 gap-3 mt-6">{policy.fee_items.map(item=><article key={item.id} className="rounded-xl border p-4 bg-white"><h3 className="font-semibold">{item.label}</h3><p className="font-bold text-[#547298] mt-2">{approvedFeeLabel(item)}</p><Link className="inline-block underline mt-3 text-sm" href={`/start-online/?service=fee-${item.id}&source=approved-fee-menu`}>Review service and next steps</Link></article>)}</div>
    <div className="mt-6 space-y-3 text-sm text-slate-700">{['routine_scope','litigation_scope','additional_scope','supervision_scope','refund_scope','legacy_scope'].map(key=><p key={key}>{policy[key as keyof typeof policy] as string}</p>)}</div>
  </section>;
}
