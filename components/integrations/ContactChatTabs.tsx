'use client';

import { useState, type ReactNode } from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import { InlineChat } from '@/components/integrations/InlineChat';

type Props = {
  /** The existing "Send us a message" form, shown on the second tab. */
  children: ReactNode;
  /** Tab colors for the dark contact cards (default) or a light background. */
  tone?: 'dark' | 'light';
};

/**
 * "Chat with us" (inline chat, default) and "Send a message" (existing form) tabs.
 * Both panels stay mounted so switching tabs never loses a chat or a half-filled form.
 */
export function ContactChatTabs({ children, tone = 'dark' }: Props) {
  const [tab, setTab] = useState<'chat' | 'form'>('chat');
  const dark = tone === 'dark';

  const tabClass = (active: boolean) =>
    `inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
      active
        ? dark ? 'bg-white text-[#2d3e50]' : 'bg-[#4a708b] text-white'
        : dark ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-[#4a708b] hover:bg-slate-100'
    }`;

  return (
    <div>
      <div role="tablist" aria-label="How would you like to reach us?" className="flex gap-2 mb-6">
        <button type="button" role="tab" id="iel-tab-chat" aria-controls="iel-panel-chat" aria-selected={tab === 'chat'} className={tabClass(tab === 'chat')} onClick={() => setTab('chat')}>
          <MessageCircle className="w-4 h-4" aria-hidden="true" /> Chat with us
        </button>
        <button type="button" role="tab" id="iel-tab-form" aria-controls="iel-panel-form" aria-selected={tab === 'form'} className={tabClass(tab === 'form')} onClick={() => setTab('form')}>
          <Mail className="w-4 h-4" aria-hidden="true" /> Send a message
        </button>
      </div>

      <div id="iel-panel-chat" role="tabpanel" aria-labelledby="iel-tab-chat" hidden={tab !== 'chat'}>
        <InlineChat tone={tone} />
      </div>
      <div id="iel-panel-form" role="tabpanel" aria-labelledby="iel-tab-form" hidden={tab !== 'form'}>
        {children}
      </div>
    </div>
  );
}
