'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, CalendarDays, FileCheck, MessageSquare } from 'lucide-react';
import { ClientPortalPreview } from '@/components/portal/ClientPortalPreview';

const benefits = [
  { icon: FileCheck, title: 'See case updates', body: 'Follow updates and next steps shared by your legal team.' },
  { icon: FileCheck, title: 'Review documents and request changes', body: 'Review your estate planning documents and let your legal team know what you would like changed.' },
  { icon: MessageSquare, title: 'Message your legal team', body: 'Ask questions and keep communication about your matter in one place.' },
  { icon: CalendarDays, title: 'Schedule calls', body: 'Schedule available calls with your legal team through the portal.' },
  { icon: BookOpen, title: 'Find resources for your matter', body: 'Access resources shared for your legal matter and stage.' },
];

export function ClientPortalSection() {
  return (
    <section className="bg-[#F4F8FC] py-12 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
        <div className="rounded-3xl border border-[#DCE5ED] bg-white p-6 shadow-sm sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.14em] text-[#547298]">Included client experience</p>
              <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#33414E]">Stay informed through your client portal</h2>
              <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                Once you become a client, your secure portal gives you a convenient place for case updates, estate planning document review, messages, call scheduling, and resources for your legal matter.
              </p>
              <Link href="/client-portal/" className="mt-5 inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#547298] hover:text-[#33414E]">
                Explore the client portal <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ClientPortalPreview compact />
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-[#F6F9FC] p-5">
                <Icon className="h-6 w-6 text-[#547298]" aria-hidden="true" />
                <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-base font-bold text-[#33414E]">{title}</h3>
                <p className="mt-2 font-['Plus_Jakarta_Sans'] text-xs leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
