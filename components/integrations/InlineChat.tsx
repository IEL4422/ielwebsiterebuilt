'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, RotateCcw } from 'lucide-react';
import { ELEVENLABS_AGENT_ID } from '@/components/integrations/elevenlabs-config';

/**
 * Inline (stationary) chat box for the Contact page and homepage contact section.
 *
 * Talks to the same ElevenLabs agent as the floating widget, in text-only mode,
 * over ElevenLabs' public conversation WebSocket. No extra npm packages.
 * The connection opens only when the visitor sends their first message.
 */

const GREETING = 'Thank you for reaching Illinois Estate Law. How can we help you today?';
const WS_URL = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${ELEVENLABS_AGENT_ID}`;
const LINK_HOSTS = ['illinoisestatelaw.com', 'www.illinoisestatelaw.com', 'schedule.illinoisestatelaw.com', 'portal.illinoisestatelaw.com'];

type ChatMessage = { id: number; role: 'agent' | 'user'; text: string };
type Status = 'idle' | 'connecting' | 'open' | 'ended' | 'error';

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function safeLink(url: string, label: string) {
  try {
    const u = new URL(url);
    if (u.protocol !== 'https:' || !LINK_HOSTS.includes(u.hostname)) return label;
    return `<a href="${escapeHtml(u.toString())}" target="_blank" rel="noopener noreferrer" class="underline font-semibold">${label}</a>`;
  } catch {
    return label;
  }
}

/** Minimal, safe formatter: escapes HTML, then supports **bold**, [links](https://...), bare firm links, and line breaks. */
function formatMessage(raw: string) {
  let html = escapeHtml(raw.trim());
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, (_m, label, url) => safeLink(url.replace(/&amp;/g, '&'), label));
  html = html.replace(/(^|[\s(])(https:\/\/[^\s<)]+)/g, (_m, pre, url) => pre + safeLink(url.replace(/&amp;/g, '&'), url));
  html = html.replace(/^[-•]\s+/gm, '• ');
  return html.replace(/\n/g, '<br />');
}

type InlineChatProps = {
  /** 'dark' sits on the blue/dark contact cards; 'light' on white backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
};

export function InlineChat({ tone = 'dark', className = '' }: InlineChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([{ id: 0, role: 'agent', text: GREETING }]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [waiting, setWaiting] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const idRef = useRef(1);
  const queueRef = useRef<string[]>([]);
  const skipGreetingRef = useRef(true);
  const streamingIdRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const nextId = () => idRef.current++;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, waiting]);

  useEffect(() => () => wsRef.current?.close(), []);

  const upsertStreaming = useCallback((text: string, final: boolean) => {
    setMessages((prev) => {
      const sid = streamingIdRef.current;
      if (sid !== null && prev.some((m) => m.id === sid)) {
        return prev.map((m) => (m.id === sid ? { ...m, text } : m));
      }
      const id = nextId();
      if (!final) streamingIdRef.current = id;
      return [...prev, { id, role: 'agent', text }];
    });
    if (final) streamingIdRef.current = null;
  }, []);

  const connect = useCallback(() => {
    if (wsRef.current && (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING)) return;
    setStatus('connecting');
    skipGreetingRef.current = true;
    streamingIdRef.current = null;
    let partial = '';

    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: 'conversation_initiation_client_data',
        conversation_config_override: { conversation: { text_only: true } },
      }));
    };

    ws.onmessage = (event) => {
      let data: any;
      try { data = JSON.parse(event.data); } catch { return; }

      switch (data.type) {
        case 'conversation_initiation_metadata': {
          setStatus('open');
          // Send anything the visitor typed while we were connecting.
          for (const text of queueRef.current.splice(0)) {
            ws.send(JSON.stringify({ type: 'user_message', text }));
          }
          break;
        }
        case 'ping': {
          ws.send(JSON.stringify({ type: 'pong', event_id: data.ping_event?.event_id }));
          break;
        }
        case 'agent_chat_response_part': {
          const part = data.text_response_part || {};
          if (skipGreetingRef.current) break; // ignore the server's copy of the greeting
          if (part.type === 'start') partial = '';
          if (typeof part.text === 'string') partial += part.text;
          if (partial.trim()) {
            setWaiting(false);
            upsertStreaming(partial, part.type === 'stop');
          }
          break;
        }
        case 'agent_response': {
          const text: string = data.agent_response_event?.agent_response || '';
          if (skipGreetingRef.current) {
            // The first agent message is the greeting we already show locally.
            skipGreetingRef.current = false;
            break;
          }
          if (text.trim()) {
            setWaiting(false);
            upsertStreaming(text, true);
          }
          partial = '';
          break;
        }
        case 'agent_response_correction': {
          const text: string = data.agent_response_correction_event?.corrected_agent_response || '';
          if (!text.trim()) break;
          setMessages((prev) => {
            const lastAgent = [...prev].reverse().find((m) => m.role === 'agent');
            return lastAgent ? prev.map((m) => (m.id === lastAgent.id ? { ...m, text } : m)) : prev;
          });
          break;
        }
        default:
          break;
      }
    };

    ws.onerror = () => {
      setStatus('error');
      setWaiting(false);
    };

    ws.onclose = () => {
      wsRef.current = null;
      setWaiting(false);
      setStatus((s) => (s === 'error' ? 'error' : 'ended'));
    };
  }, [upsertStreaming]);

  const send = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((prev) => [...prev, { id: nextId(), role: 'user', text }]);
    setWaiting(true);

    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN && status === 'open') {
      ws.send(JSON.stringify({ type: 'user_message', text }));
    } else {
      queueRef.current.push(text);
      connect();
    }
  }, [input, status, connect]);

  const restart = useCallback(() => {
    wsRef.current?.close();
    wsRef.current = null;
    queueRef.current = [];
    setMessages([{ id: nextId(), role: 'agent', text: GREETING }]);
    setStatus('idle');
    setWaiting(false);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const dark = tone === 'dark';
  const ended = status === 'ended' || status === 'error';

  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden ${dark ? 'bg-white/95' : 'bg-white border border-slate-200'} shadow-sm ${className}`}
      aria-label="Chat with Illinois Estate Law"
      role="region"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 bg-slate-50">
        <MessageCircle className="w-5 h-5 text-[#4a708b]" aria-hidden="true" />
        <p className="font-semibold text-slate-800 text-sm">Chatting with Illinois Estate Law</p>
        {status === 'connecting' && <span className="ml-auto text-xs text-slate-500">Connecting…</span>}
        {ended && (
          <button type="button" onClick={restart} className="ml-auto inline-flex items-center gap-1 text-xs text-[#4a708b] hover:underline">
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> New chat
          </button>
        )}
      </div>

      <div ref={scrollRef} className="h-[380px] overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed ${
                m.role === 'user' ? 'bg-[#4a708b] text-white rounded-br-sm' : 'bg-slate-100 text-slate-800 rounded-bl-sm'
              }`}
              dangerouslySetInnerHTML={{ __html: formatMessage(m.text) }}
            />
          </div>
        ))}
        {waiting && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-500 rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm">Typing…</div>
          </div>
        )}
        {ended && (
          <p className="text-center text-xs text-slate-500 pt-2">
            {status === 'error'
              ? 'Sorry, the chat is having trouble connecting. Please call us at (312) 373-0731 or use the message form.'
              : 'This chat has ended. Send a new message to start again.'}
          </p>
        )}
      </div>

      <div className="border-t border-slate-200 p-3">
        <div className="flex items-end gap-2">
          <label htmlFor="iel-inline-chat-input" className="sr-only">Type your message</label>
          <textarea
            id="iel-inline-chat-input"
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type your message"
            className="flex-1 resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-[15px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7E9CC0] max-h-32"
          />
          <button
            type="button"
            onClick={send}
            disabled={!input.trim()}
            className="inline-flex items-center justify-center rounded-lg bg-[#4a708b] text-white px-4 py-2.5 disabled:opacity-40 hover:bg-[#3d5f77] transition-colors"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-2 text-[11px] leading-snug text-slate-500">
          By chatting, you agree this conversation may be stored and shared with our team and service providers so we can respond.
          Please don&apos;t share Social Security, account numbers, or passwords. This chat isn&apos;t legal advice and doesn&apos;t create an attorney-client relationship.
        </p>
      </div>
    </div>
  );
}
