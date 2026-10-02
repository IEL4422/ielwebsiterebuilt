'use client';

import Link from 'next/link';
import { ArrowRight, Clock, FileCheck, MessageSquare } from 'lucide-react';

const benefits = [
  { icon: FileCheck, title: 'Follow your progress', body: 'See matter updates and find documents in one organized place.' },
  { icon: MessageSquare, title: 'Message your legal team', body: 'Keep questions and case communication together in the secure portal.' },
  { icon: Clock, title: 'Access it on your schedule', body: 'Review available updates and documents from your phone or computer.' },
];

export function ClientPortalSection() {
  return (
    <section className="bg-[#F4F8FC] py-12 lg:py-16">
      <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
        <div className="rounded-3xl border border-[#DCE5ED] bg-white p-6 shadow-sm sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:items-center">
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-[0.14em] text-[#547298]">Included client experience</p>
              <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#33414E]">Stay informed through your client portal</h2>
              <p className="mt-3 font-['Plus_Jakarta_Sans'] text-sm leading-relaxed text-slate-600">
                Once you become a client, your secure portal gives you a convenient place for matter information, documents, and communication.
              </p>
              <Link href="/client-portal/" className="mt-5 inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#547298] hover:text-[#33414E]">
                Explore the client portal <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
