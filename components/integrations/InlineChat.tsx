'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { MessageCircle, RotateCcw, Send } from 'lucide-react';
import { ELEVENLABS_AGENT_ID } from '@/components/integrations/elevenlabs-config';

type Message = { id: number; role: 'agent' | 'user'; text: string };
type Status = 'idle' | 'connecting' | 'open' | 'ended' | 'error';
const WS_URL = `wss://api.elevenlabs.io/v1/convai/conversation?agent_id=${ELEVENLABS_AGENT_ID}`;

// React escapes message text. Only firm HTTPS links become clickable.
function MessageText({ text }: { text: string }) {
  return <>{text.split(/(https:\/\/[^\s<>]+)/g).map((part, index) => {
    try {
      const url = new URL(part);
      if (url.protocol === 'https:' && (url.hostname === 'illinoisestatelaw.com' || url.hostname.endsWith('.illinoisestatelaw.com'))) {
        return <a key={index} href={url.href} target="_blank" rel="noopener noreferrer" className="underline font-semibold">{part}</a>;
      }
    } catch { /* Ordinary message text. */ }
    return part;
  })}</>;
}

/** A stationary text chat; connects only when the visitor sends a message. */
export function InlineChat({ inputId: providedInputId }: { inputId?: string }) {
  const generatedInputId = useId();
  const inputId = providedInputId ?? generatedInputId;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [waiting, setWaiting] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const busyRef = useRef(false);
  const idRef = useRef(0);
  const responseIds = useRef(new Set<string>());
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function clearTimer() {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
  }
  useEffect(() => () => {
    clearTimer();
    const ws = wsRef.current;
    wsRef.current = null;
    ws?.close();
  }, []);
  useEffect(() => {
    const log = scrollRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages, waiting]);

  function fail(ws: WebSocket) {
    if (wsRef.current !== ws) return;
    clearTimer();
    wsRef.current = null;
    ws.close();
    busyRef.current = false;
    setWaiting(false);
    setStatus('error');
  }
  function armTimeout(ws: WebSocket, delay: number) {
    clearTimer();
    timerRef.current = setTimeout(() => fail(ws), delay);
  }
  function send() {
    const text = input.trim();
    if (!text || busyRef.current || status === 'error' || status === 'ended') return;
    busyRef.current = true;
    setInput('');
    setWaiting(true);
    setMessages(prev => [...prev, { id: idRef.current++, role: 'user', text }]);
    const existing = wsRef.current;
    if (existing?.readyState === WebSocket.OPEN && status === 'open') {
      try {
        existing.send(JSON.stringify({ type: 'user_message', text }));
        armTimeout(existing, 60000);
      } catch { fail(existing); }
      return;
    }
    setStatus('connecting');
    let ws: WebSocket;
    try { ws = new WebSocket(WS_URL); } catch {
      busyRef.current = false;
      setWaiting(false);
      setStatus('error');
      return;
    }
    wsRef.current = ws;
    armTimeout(ws, 20000);
    let ready = false;
    ws.onopen = () => {
      if (wsRef.current !== ws) return;
      ws.send(JSON.stringify({
        type: 'conversation_initiation_client_data',
        conversation_config_override: { conversation: { text_only: true } },
      }));
    };
    ws.onmessage = event => {
      if (wsRef.current !== ws) return;
      let data;
      try { data = JSON.parse(event.data); } catch { return; }
      if (data.type === 'conversation_initiation_metadata' && !ready) {
        ready = true;
        setStatus('open');
        ws.send(JSON.stringify({ type: 'user_message', text }));
        armTimeout(ws, 60000);
      } else if (data.type === 'ping') {
        ws.send(JSON.stringify({ type: 'pong', event_id: data.ping_event?.event_id }));
      } else if (data.type === 'agent_response') {
        const response = data.agent_response_event;
        if (typeof response?.agent_response !== 'string' || !response.agent_response.trim()) return;
        const responseId = response.response_id ?? response.event_id;
        if (responseId != null && responseIds.current.has(String(responseId))) return;
        if (responseId != null) responseIds.current.add(String(responseId));
        // Never drop the first reply: the agent may not send a separate greeting.
        setMessages(prev => [...prev, { id: idRef.current++, role: 'agent', text: response.agent_response }]);
        clearTimer();
        busyRef.current = false;
        setWaiting(false);
      } else if (data.type === 'agent_response_correction') {
        const correction = data.agent_response_correction_event?.corrected_agent_response;
        if (typeof correction !== 'string') return;
        setMessages(prev => {
          const last = [...prev].reverse().find(message => message.role === 'agent');
          return prev.map(message => message.id === last?.id ? { ...message, text: correction } : message);
        });
      } else if (data.type === 'error' || data.type === 'client_error') {
        fail(ws);
      }
    };
    ws.onerror = () => fail(ws);
    ws.onclose = () => {
      if (wsRef.current !== ws) return;
      clearTimer();
      wsRef.current = null;
      setStatus(busyRef.current ? 'error' : 'ended');
      busyRef.current = false;
      setWaiting(false);
    };
  }
  function restart() {
    clearTimer();
    const ws = wsRef.current;
    wsRef.current = null;
    ws?.close();
    responseIds.current.clear();
    busyRef.current = false;
    setMessages([]);
    setStatus('idle');
    setWaiting(false);
    setInput('');
    requestAnimationFrame(() => inputRef.current?.focus());
  }
  const ended = status === 'error' || status === 'ended';
  return (
    <div role="region" aria-label="AI chat with Illinois Estate Law" className="min-w-0">
      <p className="text-white/90 mb-4">Ask a question about our services or tell our AI assistant how we can help.</p>
      <div className="rounded-xl overflow-hidden bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <MessageCircle className="w-5 h-5 shrink-0 text-[#4a708b]" aria-hidden="true" />
          <p className="text-sm font-semibold text-slate-800">Illinois Estate Law AI Assistant</p>
        </div>
        {messages.length > 0 && (
          <div ref={scrollRef} role="log" aria-label="Chat messages" aria-live="polite" className="max-h-[380px] overflow-y-auto p-4 space-y-3">
            {messages.map(message => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] rounded-2xl px-4 py-3 text-base whitespace-pre-wrap [overflow-wrap:anywhere] ${message.role === 'user' ? 'bg-[#4a708b] text-white' : 'bg-slate-100 text-slate-800'}`}>
                  <span className="sr-only">{message.role === 'user' ? 'You: ' : 'AI assistant: '}</span>
                  <MessageText text={message.text} />
                </div>
              </div>
            ))}
            {waiting && <p role="status" className="text-sm text-slate-600">{status === 'connecting' ? 'Connecting…' : 'Waiting for a reply…'}</p>}
          </div>
        )}
        {ended && (
          <div role="status" className="px-4 py-3 text-sm text-slate-700 bg-slate-50">
            <p>{status === 'error' ? 'The chat could not connect or receive a reply. Please try a new chat or ' : 'This chat has ended. Start a new chat or '}<a href="tel:3123730731" className="underline">call (312) 373-0731</a>.</p>
            <button type="button" onClick={restart} className="mt-2 inline-flex items-center gap-2 min-h-[44px] text-[#4a708b] font-semibold underline">
              <RotateCcw className="w-4 h-4" aria-hidden="true" /> Start a new chat
            </button>
          </div>
        )}
        <form onSubmit={event => { event.preventDefault(); send(); }} className="border-t border-slate-200 p-3">
          <label htmlFor={inputId} className="block text-sm font-semibold text-slate-800 mb-2">How can we help you?</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <textarea ref={inputRef} id={inputId} rows={3} maxLength={5000} value={input} disabled={ended}
              onChange={event => setInput(event.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); send(); }
              }}
              placeholder="Type your question here…"
              className="min-w-0 flex-1 resize-y rounded-lg border border-slate-300 p-3 text-base text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#7E9CC0]"
            />
            <button type="submit" disabled={!input.trim() || waiting || ended} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#4a708b] px-5 py-3 text-white font-semibold disabled:opacity-50 hover:bg-[#3d5f77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4a708b]">
              <Send className="w-4 h-4" aria-hidden="true" /> {messages.length ? 'Send' : 'Start chat'}
            </button>
          </div>
        </form>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-white/80">By chatting, you agree this conversation may be stored and shared with our team and service providers so we can respond. Please don&apos;t share Social Security numbers, account numbers, or passwords. This AI chat isn&apos;t legal advice and doesn&apos;t create an attorney-client relationship.</p>
    </div>
  );
}
