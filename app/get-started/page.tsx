import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Calendar, CheckCircle2, CircleHelp as HelpCircle, LockKeyhole, MessageSquare, ShieldCheck } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';

export const metadata: Metadata = {
  title: 'Start Online with Confidence',
  description: 'Start your Illinois estate planning, probate, or real estate service online. Find a starting package, review your flat fee, and move forward at your own pace.',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/get-started/',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/get-started/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Start Online with Confidence | Illinois Estate Law',
    description: 'Find a starting package, review your flat fee, and move forward at your own pace—no appointment required to begin online.',
  },
  twitter: {
    card: 'summary',
    title: 'Start Online with Confidence | Illinois Estate Law',
    description: 'Find a starting package, review your flat fee, and move forward at your own pace—no appointment required to begin online.',
  },
  other: {
    'dc:title': 'Start Online with Confidence | Illinois Estate Law',
    'dc:description': 'Find a starting package, review your flat fee, and move forward at your own pace—no appointment required to begin online.',
    'dc:relation': 'https://www.illinoisestatelaw.com/get-started/',
    'dc:source': 'https://www.illinoisestatelaw.com/',
    'dc:language': 'en_US',
  },
};

const reassurancePoints = [
  'Your flat fee and service scope are shown before you proceed.',
  'You can begin a secure intake at your own pace.',
  'The applicable Client Service Agreement is provided before substantive work begins.',
  'You can always choose a consultation if your situation calls for one.',
];

export default function GetStartedPage() {
  return (
    <main>
      <InnerPageHero
        title="Start online with confidence"
        subtitle="No appointment is required to begin. Find a starting package, review what is included, and move forward at your own pace."
      />

      <section className="bg-white py-12 lg:py-20">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-[#C6D7E7] bg-[#F4F8FC] p-6 text-center sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.12em] text-[#4A708B] shadow-sm">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                A clear, guided next step
              </span>
              <h1 className="mt-4 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E] sm:text-3xl">
                Choose the path that feels right for you.
              </h1>
              <p className="mx-auto mt-3 max-w-2xl font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-slate-600">
                Start with a short service finder if you want guidance, or review the online process if you already know the service you need. Either way, you can see the next step before entering the client portal.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Link
                href="/recommended-service/"
                className="group flex min-h-[250px] flex-col rounded-2xl border-2 border-[#547298] bg-[#33414E] p-7 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A708B] hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#C6D7E7] transition-colors group-hover:bg-white group-hover:text-[#4A708B]">
                  <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.14em] text-[#B7CBE0] group-hover:text-white/75">
                  Recommended for most visitors
                </p>
                <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                  Find my starting package
                </h2>
                <p className="mt-3 flex-1 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-white/80">
                  Answer a few guided questions to see a starting recommendation, why it may fit, and the exact next step. No payment or appointment is required to see your result.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-white">
                  Take the service finder
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>

              <Link
                href="/start-online/"
                className="group flex min-h-[250px] flex-col rounded-2xl border-2 border-[#C6D7E7] bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#547298] hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F1F8] text-[#4A708B]">
                  <LockKeyhole className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.14em] text-[#547298]">
                  I know what I need
                </p>
                <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E]">
                  Review the online process
                </h2>
                <p className="mt-3 flex-1 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                  See what happens in the secure portal, how the Client Service Agreement fits into the process, and where to compare services and pricing before you begin.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] group-hover:text-[#33414E]">
                  Review before I start
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">What to expect when you start online</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33414E] font-['Plus_Jakarta_Sans'] text-xs font-bold text-white">1</span>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E]">Choose with clarity</h3>
                    <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">Review your recommended service or compare options before continuing.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33414E] font-['Plus_Jakarta_Sans'] text-xs font-bold text-white">2</span>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E]">Begin securely</h3>
                    <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">Continue to the client portal and complete the information needed for your matter.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#33414E] font-['Plus_Jakarta_Sans'] text-xs font-bold text-white">3</span>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#33414E]">Work with the firm</h3>
                    <p className="mt-1 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">Review the applicable agreement and receive guidance as your service proceeds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-2xl border border-[#D6E1EC] bg-[#F6F9FC] p-6 sm:p-7">
                <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">Designed to make the decision easier</h2>
                <ul className="mt-5 grid gap-3">
                  {reassurancePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4A708B]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <HelpCircle className="h-7 w-7 text-[#4A708B]" aria-hidden="true" />
                <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">Prefer support first?</h2>
                <p className="mt-2 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                  A consultation remains available for questions that need a direct conversation. You can also message the team about the process without scheduling a call.
                </p>
                <div className="mt-5 space-y-3">
                  <Link href="/contact/" className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]">
                    <MessageSquare className="h-4 w-4" aria-hidden="true" />
                    Ask a process question
                  </Link>
                  <Link href="/book-consultation/" className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#4A708B] hover:text-[#33414E]">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    Book a free consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
