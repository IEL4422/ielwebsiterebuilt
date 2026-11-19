'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CircleCheck, RotateCcw } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { BuyButtonNotes } from '@/components/ui/BuyButtonNotes';
import { PortalHandoffLink } from '@/components/ui/PortalHandoffLink';
import { trackFunnelEvent } from '@/lib/gtag';
import { packagePriceText } from '@/lib/online-signup';
import { buyHref } from '@/lib/portal-handoff';
import { allServices, type Service } from '@/lib/services-data';
import { clientTypeFor, nextQuestion, progress, recommend, whyExtra, type Answers } from '@/lib/service-quiz';

/**
 * Service finder. The questions, the branching and the results all live in
 * lib/service-quiz.ts; this page only shows them one at a time.
 */
export default function RecommendedServicePage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [history, setHistory] = useState<string[]>([]);

  const question = nextQuestion(answers);
  const step = history.length + 1;
  const percent = Math.round(progress(answers) * 100);

  function choose(questionId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setHistory((prev) => [...prev, questionId]);
    if (questionId === 'situation') trackFunnelEvent('service_finder_started', { situation: value });
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function back() {
    const last = history[history.length - 1];
    if (!last) return;
    setHistory((prev) => prev.slice(0, -1));
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[last];
      return next;
    });
  }

  function restart() {
    setAnswers({});
    setHistory([]);
  }

  return (
    <main className="bg-[#F6F9FC] min-h-screen">
      <InnerPageHero
        title="Find the right help"
        subtitle="Answer a few short questions about your situation. It takes about a minute, and you can go back at any time."
      />

      <section className="mx-auto max-w-[720px] px-4 py-10 sm:py-14">
        <div className="rounded-3xl border border-[#DCE5ED] bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#547298]">
              <span>{question ? `Question ${step}` : 'Your result'}</span>
              <span aria-hidden="true">{percent}%</span>
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-[#E3EAF1]"
              role="progressbar"
              aria-label="Progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={percent}
            >
              <div className="h-full rounded-full bg-[#547298] transition-all duration-300" style={{ width: `${percent}%` }} />
            </div>
          </div>

          {question ? (
            <fieldset key={question.id}>
              <legend className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] sm:text-[28px]">{question.title}</legend>
              {question.help && <p className="mt-2 font-['Plus_Jakarta_Sans'] text-base text-slate-600">{question.help}</p>}
              <div className="mt-6 grid gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => choose(question.id, option.value)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 rounded-2xl border-2 border-[#DCE5ED] bg-white px-5 py-4 text-left transition-colors hover:border-[#547298] hover:bg-[#F6F9FC] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#547298]/30"
                  >
                    <span>
                      <span className="block font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">{option.label}</span>
                      {option.hint && <span className="mt-0.5 block font-['Plus_Jakarta_Sans'] text-sm text-slate-500">{option.hint}</span>}
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#547298]" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </fieldset>
          ) : (
            <QuizResult answers={answers} />
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#E3EAF1] pt-5">
            {history.length > 0 ? (
              <button
                type="button"
                onClick={back}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-[#DCE5ED] px-5 font-['Plus_Jakarta_Sans'] text-base font-bold text-[#33414E] hover:border-[#547298]"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                Back
              </button>
            ) : (
              <Link href="/select-service/" className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#4a708b] hover:underline">
                Already know what you need? Choose a service
              </Link>
            )}
            {!question && (
              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-[48px] items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4a708b] hover:text-[#33414E]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Start over
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center font-['Plus_Jakarta_Sans'] text-sm text-slate-600">
          Prefer to talk it through? Call <a href="tel:3123730731" className="font-bold text-[#33414E] hover:underline">(312) 373-0731</a> or{' '}
          <Link href="/book-consultation/" className="font-bold text-[#33414E] hover:underline">book a free consultation</Link>.
        </p>
      </section>
    </main>
  );
}

function QuizResult({ answers }: { answers: Answers }) {
  const outcome = useMemo(() => recommend(answers), [answers]);

  if (outcome.type === 'consult') {
    return (
      <div>
        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-wide text-[#547298]">Our suggestion</p>
        <h2 className="mt-1 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] sm:text-[28px]">Talk with an attorney first</h2>
        <p className="mt-3 font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-slate-700">{outcome.reason}</p>
        <p className="mt-2 font-['Plus_Jakarta_Sans'] text-base text-slate-700">The consultation is free, and there is no obligation.</p>
        <Link
          href="/book-consultation/"
          onClick={() => trackFunnelEvent('service_finder_result', { result: 'consultation' })}
          className="mt-6 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#33414E] px-6 font-['Plus_Jakarta_Sans'] text-lg font-bold text-white hover:bg-[#547298] sm:w-auto"
        >
          Book a free consultation
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    );
  }

  const service = allServices.find((s) => s.id === outcome.serviceId) as Service | undefined;
  if (!service) return null;
  const clientType = service.jointPrice ? clientTypeFor(answers) : 'individual';
  const name = clientType === 'joint' ? `Joint ${service.name}` : service.name;
  const price = packagePriceText(service.id, clientType);
  const extra = whyExtra(answers);
  const href = buyHref(service.id, { clientType, source: 'service-finder', answers });

  return (
    <div>
      <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-wide text-[#547298]">We recommend</p>
      <h2 className="mt-1 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] sm:text-[28px]">{name}</h2>
      {price && <p className="mt-1 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#33414E]">{price}</p>}

      <div className="mt-5 rounded-2xl bg-[#F6F9FC] p-4">
        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E]">Why this fits you</p>
        <p className="mt-1 font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-slate-700">
          {outcome.why}
          {extra ? ` ${extra}` : ''}
        </p>
      </div>

      <div className="mt-5">
        <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E]">What is included</p>
        {service.includes.length > 0 ? (
          <ul className="mt-2 grid gap-2">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-2 font-['Plus_Jakarta_Sans'] text-sm text-slate-700">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#547298]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-700">{service.description}</p>
        )}
        {service.note && <p className="mt-3 font-['Plus_Jakarta_Sans'] text-xs leading-relaxed text-slate-500">{service.note}</p>}
      </div>

      <div className="mt-6">
        <PortalHandoffLink
          href={href}
          onClick={() => trackFunnelEvent('service_finder_result', { result: service.id })}
          className="inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#33414E] px-6 text-center font-['Plus_Jakarta_Sans'] text-lg font-bold text-white hover:bg-[#547298]"
        >
          {price ? `Start this package, ${price}` : 'Start this package'}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </PortalHandoffLink>
        <BuyButtonNotes serviceId={service.id} />
        <div className="mt-4 text-center">
          <Link href="/book-consultation/" className="inline-flex min-h-[44px] items-center font-['Plus_Jakarta_Sans'] text-base font-bold text-[#4a708b] underline underline-offset-4 hover:text-[#33414E]">
            Talk to an attorney first
          </Link>
        </div>
      </div>
    </div>
  );
}
