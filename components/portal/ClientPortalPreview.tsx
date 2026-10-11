import { Check, Clock3, FileText, LockKeyhole, MessageSquare } from 'lucide-react';

const stages = [
  { label: 'Information received', status: 'complete' },
  { label: 'Attorney review', status: 'complete' },
  { label: 'Drafting & filing', status: 'current' },
  { label: 'Final steps', status: 'upcoming' },
] as const;

export function ClientPortalPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#D7E2EC] bg-white shadow-[0_22px_60px_rgba(51,65,78,0.14)]" aria-label="Illustrative client portal preview">
      <div className="flex items-center justify-between border-b border-[#E4EBF2] bg-[#33414E] px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#8EB1D0]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold tracking-wide">ILLINOIS ESTATE LAW</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white/80">
          <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" /> Secure portal
        </div>
      </div>

      <div className={compact ? 'p-4' : 'p-5 sm:p-6'}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6885A4]">Example matter view</p>
            <h3 className="mt-1 font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E]">Your matter at a glance</h3>
          </div>
          <span className="rounded-full bg-[#EAF3EA] px-3 py-1 text-[10px] font-bold text-[#3F6945]">On track</span>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-1.5" aria-label="Example matter progress">
          {stages.map((stage, index) => (
            <div key={stage.label}>
              <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${stage.status === 'complete' ? 'bg-[#547298] text-white' : stage.status === 'current' ? 'border-2 border-[#547298] bg-white text-[#547298]' : 'border border-[#D7E2EC] bg-[#F7F9FB] text-slate-400'}`}>
                {stage.status === 'complete' ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
              </div>
              <div className={`mt-2 h-1 rounded-full ${stage.status === 'complete' ? 'bg-[#547298]' : stage.status === 'current' ? 'bg-[#8EB1D0]' : 'bg-[#E5EBF1]'}`} />
              <p className="mt-2 text-[9px] font-semibold leading-tight text-slate-600">{stage.label}</p>
            </div>
          ))}
        </div>

        <div className={`mt-5 grid gap-3 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-[1.1fr_0.9fr]'}`}>
          <div className="rounded-xl border border-[#E0E8EF] bg-[#F7FAFC] p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#33414E]">
              <Clock3 className="h-4 w-4 text-[#547298]" aria-hidden="true" /> Next step
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">Review the latest update and complete any requested item from one organized place.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#E0E8EF] bg-white p-3 text-center">
              <FileText className="mx-auto h-5 w-5 text-[#547298]" aria-hidden="true" />
              <p className="mt-2 text-[10px] font-bold text-[#33414E]">Documents</p>
            </div>
            <div className="rounded-xl border border-[#E0E8EF] bg-white p-3 text-center">
              <MessageSquare className="mx-auto h-5 w-5 text-[#547298]" aria-hidden="true" />
              <p className="mt-2 text-[10px] font-bold text-[#33414E]">Messages</p>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-[9px] leading-relaxed text-slate-400">Illustrative preview. Available tools and matter stages depend on the service.</p>
      </div>
    </div>
  );
}
