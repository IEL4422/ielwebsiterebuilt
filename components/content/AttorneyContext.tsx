import Link from 'next/link';
import { ATTORNEYS } from '@/lib/seo';

/** Existing firm bios, not an assertion that an attorney reviewed this page. */
export function AttorneyContext({ practice }: { practice: 'probate' | 'planning' }) {
  const names = practice === 'probate' ? ['Mary Liberty', 'Anna M. Rafanelli'] : ['Mary Liberty', 'Yassmin Koudmani'];
  return <section className="bg-slate-50 py-12"><div className="mx-auto max-w-[1140px] px-5">
    <h2 className="text-2xl font-bold text-[#33414E] mb-5">Meet our Illinois attorneys</h2>
    <div className="grid gap-6 md:grid-cols-2">{ATTORNEYS.filter(a => names.includes(a.name)).map(a => <div key={a.name} className="rounded-xl border bg-white p-6">
      <h3 className="text-xl font-bold text-[#33414E]">{a.name}</h3><p className="text-sm text-slate-500 mb-3">{a.jobTitle}</p>
      <p className="text-slate-600 leading-relaxed">{a.description}</p>
    </div>)}</div><Link className="mt-5 inline-block underline text-[#4A708B]" href="/about/">Read attorney biographies and admissions</Link>
  </div></section>;
}
