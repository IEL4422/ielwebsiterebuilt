import type { Metadata } from 'next';
import { ArrowRight, CircleCheck, LayoutDashboard, Phone, Scale, Send } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { breadcrumbSchema } from '@/lib/seo';
import { DASHBOARD_URL, FOR_ATTORNEYS_PATH, SEND_TO_CLIENT_URL, START_FOR_CLIENT_URL, WRONGFUL_DEATH_PROBATE_FEE } from '@/lib/for-attorneys';

const PATH = FOR_ATTORNEYS_PATH;
const URL = `https://www.illinoisestatelaw.com${PATH}`;

const fee = `$${WRONGFUL_DEATH_PROBATE_FEE.toLocaleString('en-US')}`;

export const metadata: Metadata = {
  title: { absolute: 'For Attorneys: Wrongful Death Probate in Illinois | Illinois Estate Law' },
  description: `Personal injury attorneys: we open and handle the probate estate your wrongful death case needs, for a ${fee} flat fee including filing and publication fees, and you follow the case in our Attorney Dashboard.`,
  alternates: { canonical: URL },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
};

const schemas = [breadcrumbSchema([{ name: 'For Attorneys', path: PATH }])];

const included = [
  'An attorney handles the estate from start to finish',
  'All court filing fees and publication fees are included',
  'Fully remote, anywhere in Illinois',
  'Your client gets a portal to track the case',
  'You follow the case in our Attorney Dashboard',
  'Your client or your firm can pay',
];

const steps = [
  ['1', 'Tell us about the case', 'You fill out the short form for your client, or we email your client so they can fill it out. It takes about 5 minutes.'],
  ['2', 'We open the estate', 'Our attorney prepares and files everything needed to open the probate estate and get letters of office for the administrator.'],
  ['3', 'You follow along', 'Sign in to the Attorney Dashboard any time to see where the case stands, key court dates, updates and shared documents.'],
];

export default function ForAttorneysPage() {
  return (
    <main>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <InnerPageHero
        title="For Attorneys"
        subtitle="Wrongful death cases often need a probate estate opened before they can move forward. We handle that probate for your client, and you can follow every step."
      />

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#547298]">Wrongful death probate</span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#33414E]">One flat fee of {fee}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Personal injury attorneys can start a wrongful death probate case with us online, either for their client or by sending their client the information to start it themselves. Our fee is {fee}, and it includes all court filing fees and publication fees.
            </p>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-slate-700"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#547298]" />{item}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl bg-[#33414E] p-7 text-white">
            <Scale className="h-8 w-8 text-[#9DB8D4]" />
            <h2 className="mt-4 text-2xl font-bold">How it works</h2>
            <ol className="mt-5 space-y-5">
              {steps.map(([number, title, body]) => (
                <li key={number} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#33414E]">{number}</span>
                  <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-white/75">{body}</p></div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="bg-[#F6F9FC] py-16">
        <div className="mx-auto grid max-w-[1140px] gap-6 px-5 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-[#DCE5ED] bg-white p-7" aria-labelledby="start-case">
            <Send className="h-8 w-8 text-[#547298]" />
            <h2 id="start-case" className="mt-4 text-2xl font-bold text-[#33414E]">Start a new case</h2>
            <p className="mt-2 flex-1 leading-relaxed text-slate-600">Fill out the form for your client yourself, or have us email your client so they can sign up directly. Either way, we take it from there.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={START_FOR_CLIENT_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#547298] px-6 py-3 font-bold text-white hover:bg-[#33414E]">Start the case for my client<ArrowRight className="h-4 w-4" /></a>
              <a href={SEND_TO_CLIENT_URL} className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] px-6 py-3 font-bold text-[#33414E] hover:bg-[#F6F9FC]">Send my client the information</a>
            </div>
          </article>
          <article className="flex flex-col rounded-2xl border border-[#DCE5ED] bg-white p-7" aria-labelledby="attorney-dashboard">
            <LayoutDashboard className="h-8 w-8 text-[#547298]" />
            <h2 id="attorney-dashboard" className="mt-4 text-2xl font-bold text-[#33414E]">Attorney Dashboard</h2>
            <p className="mt-2 flex-1 leading-relaxed text-slate-600">Already have a case with us? See the case stage, key court dates and updates, share documents and message our team. We email you a one-time sign-in link, so there is no password to remember.</p>
            <div className="mt-6">
              <a href={DASHBOARD_URL} className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#7E9CC0] px-6 py-3 font-bold text-[#33414E] hover:bg-[#F6F9FC]">Sign in to the Attorney Dashboard<ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-[#E3EAF1] bg-white py-12 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <Phone className="mx-auto h-8 w-8 text-[#547298]" />
          <h2 className="mt-3 text-2xl font-bold text-[#33414E]">Questions about a case?</h2>
          <p className="mt-2 text-slate-600">Call us at <a href="tel:+13123730731" className="font-bold text-[#547298] hover:underline">312-373-0731</a> and we will talk it through.</p>
        </div>
      </section>
    </main>
  );
}
