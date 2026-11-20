'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { CalendarCheck, Loader2 } from 'lucide-react';
import { trackLead } from '@/lib/fbpixel';
import { trackFunnelEvent } from '@/lib/gtag';

const TZ = 'America/Chicago';
const HEARD = ['Internet Search', 'AI Search', 'Referral', 'Yelp', 'Facebook', 'Other'];

const dayKey = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
const dayName = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'short' });
const dayDate = new Intl.DateTimeFormat('en-US', { timeZone: TZ, month: 'short', day: 'numeric' });
const longDay = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'long', month: 'long', day: 'numeric' });
const clock = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hour: 'numeric', minute: '2-digit' });

/** Open start times grouped by Chicago day, in order. */
export function groupByDay(times: string[]): { key: string; times: string[] }[] {
  const days = new Map<string, string[]>();
  for (const t of [...times].sort()) {
    const k = dayKey.format(new Date(t));
    days.set(k, [...(days.get(k) || []), t]);
  }
  return Array.from(days, ([key, list]) => ({ key, times: list }));
}

export function whenLabel(iso: string): string {
  const d = new Date(iso);
  return `${longDay.format(d)} at ${clock.format(d)} Central`;
}

type Props = {
  caseType: string;
  consultLabel: string;
  askHeardAbout: boolean;
  /** Called when the picker can't load, so the page can show Lunacal's calendar instead. */
  onUnavailable: () => void;
};

export function ConsultTimePicker({ caseType, consultLabel, askHeardAbout, onUnavailable }: Props) {
  const [times, setTimes] = useState<string[] | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '', heardAbout: '', company: '' });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [booked, setBooked] = useState<{ start: string; email: string } | null>(null);

  const load = useCallback(async () => {
    setTimes(null);
    try {
      const r = await fetch(`/api/booking/times?type=${encodeURIComponent(caseType)}`, { cache: 'no-store' });
      if (!r.ok) throw new Error(String(r.status));
      const j = await r.json();
      const list: string[] = Array.isArray(j.times) ? j.times : [];
      setTimes(list);
      setDay((current) => (current && list.some((t) => dayKey.format(new Date(t)) === current) ? current : list[0] ? dayKey.format(new Date(list[0])) : null));
    } catch {
      onUnavailable();
    }
  }, [caseType, onUnavailable]);

  useEffect(() => {
    setStart(null);
    setDay(null);
    setBooked(null);
    setError('');
    void load();
  }, [load]);

  const days = useMemo(() => groupByDay(times || []), [times]);
  const dayTimes = days.find((d) => d.key === day)?.times || [];
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!start || sending) return;
    setSending(true);
    setError('');
    try {
      const r = await fetch('/api/booking/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caseType, start, ...form }),
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(j.error || "We couldn't book that time. Please try again or call our office at (312) 373-0731.");
        if (j.taken) {
          setStart(null);
          void load();
        }
        return;
      }
      setBooked({ start: j.start || start, email: form.email.trim() });
      trackLead('CONSULTATION_BOOKED', {
        userData: { email: form.email.trim(), phone: form.phone, firstName: form.firstName.trim(), lastName: form.lastName.trim() },
        params: { case_type: caseType },
      });
      trackFunnelEvent('consultation_booked', { case_type: caseType });
    } catch {
      setError("We couldn't book that time. Please try again or call our office at (312) 373-0731.");
    } finally {
      setSending(false);
    }
  }

  if (booked) {
    return (
      <div className="rounded-2xl border border-[#DCE5ED] bg-[#F4F8FC] p-8 text-center" role="status">
        <CalendarCheck className="mx-auto mb-3 h-12 w-12 text-[#2F6B3F]" />
        <h3 className="text-2xl font-bold text-[#33414E]">You&apos;re booked</h3>
        <p className="mt-2 text-slate-700">
          Your {consultLabel.toLowerCase()} is on {whenLabel(booked.start)}.
        </p>
        <p className="mt-1 text-sm text-slate-600">A confirmation email is on its way to {booked.email}.</p>
      </div>
    );
  }

  if (times === null) {
    return (
      <div className="flex items-center justify-center gap-2 py-16 text-slate-500">
        <Loader2 className="h-5 w-5 animate-spin" /> Loading open times…
      </div>
    );
  }

  if (!times.length) {
    return (
      <div className="rounded-2xl border border-[#DCE5ED] bg-[#F4F8FC] p-8 text-center">
        <p className="font-semibold text-[#33414E]">No open times in the next three weeks.</p>
        <p className="mt-1 text-sm text-slate-600">
          Please call our office at <a className="underline" href="tel:3123730731">(312) 373-0731</a> and we&apos;ll find a time.
        </p>
      </div>
    );
  }

  const field = 'w-full rounded-xl border border-gray-200 px-4 py-3 text-[#0B0D0E] focus:border-[#547298] focus:outline-none';

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="mb-1 text-lg font-bold text-[#33414E]">1. Pick a day</h3>
        <p className="mb-4 text-sm text-slate-500">Times are shown in Central Time.</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Day">
          {days.map((d) => {
            const date = new Date(d.times[0]);
            const active = d.key === day;
            return (
              <button
                key={d.key}
                type="button"
                aria-pressed={active}
                onClick={() => { setDay(d.key); setStart(null); }}
                className={`w-[4.5rem] rounded-xl border-2 px-2 py-2 text-center transition-colors ${active ? 'border-[#33414E] bg-[#33414E] text-white' : 'border-gray-100 text-[#33414E] hover:border-[#547298]'}`}
              >
                <span className="block text-xs font-semibold uppercase">{dayName.format(date)}</span>
                <span className="block text-sm font-bold">{dayDate.format(date)}</span>
              </button>
            );
          })}
        </div>

        <h3 className="mb-3 mt-8 text-lg font-bold text-[#33414E]">2. Pick a time</h3>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4" role="group" aria-label="Time">
          {dayTimes.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={t === start}
              onClick={() => setStart(t)}
              className={`rounded-full border-2 px-3 py-2 text-sm font-semibold transition-colors ${t === start ? 'border-[#33414E] bg-[#33414E] text-white' : 'border-gray-100 text-[#33414E] hover:border-[#547298]'}`}
            >
              {clock.format(new Date(t))}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4" aria-label="Your details">
        <h3 className="text-lg font-bold text-[#33414E]">3. Your details</h3>
        {start ? (
          <p className="rounded-xl bg-[#F4F8FC] px-4 py-3 text-sm font-semibold text-[#33414E]">{whenLabel(start)}</p>
        ) : (
          <p className="rounded-xl bg-[#F4F8FC] px-4 py-3 text-sm text-slate-500">Choose a time first.</p>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={field} placeholder="First name" autoComplete="given-name" required value={form.firstName} onChange={set('firstName')} aria-label="First name" />
          <input className={field} placeholder="Last name" autoComplete="family-name" required value={form.lastName} onChange={set('lastName')} aria-label="Last name" />
        </div>
        <input className={field} type="email" placeholder="Email" autoComplete="email" required value={form.email} onChange={set('email')} aria-label="Email" />
        <input className={field} type="tel" placeholder="Phone" autoComplete="tel" required value={form.phone} onChange={set('phone')} aria-label="Phone" />
        {askHeardAbout && (
          <select className={field} value={form.heardAbout} onChange={set('heardAbout')} aria-label="How did you hear about us?">
            <option value="">How did you hear about us?</option>
            {HEARD.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
        )}
        <textarea className={field} rows={3} maxLength={2000} placeholder="Anything we should know before we talk? (optional)" value={form.notes} onChange={set('notes')} aria-label="Notes" />
        {/* Hidden from people; bots tend to fill it in. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} className="hidden" aria-hidden="true" />
        {error && <p className="text-sm font-semibold text-red-700" role="alert">{error}</p>}
        <button
          type="submit"
          disabled={!start || sending}
          className="w-full rounded-full bg-[#33414E] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#4A708B] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? 'Booking…' : 'Book my free consultation'}
        </button>
        <p className="text-center text-xs text-slate-500">Free · No obligation · 100% confidential</p>
      </form>
    </div>
  );
}
