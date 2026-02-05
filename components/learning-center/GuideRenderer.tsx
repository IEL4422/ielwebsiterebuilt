'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Info,
  Lightbulb,
  Scale,
  ArrowRight,
  CheckSquare,
  Square,
} from 'lucide-react';

export interface GuideSection {
  type: 'heading' | 'paragraph' | 'accordion' | 'tabs' | 'callout' | 'checklist' | 'numbered-steps' | 'comparison-table' | 'key-takeaway' | 'statute-reference' | 'quote';
  content?: string;
  level?: number;
  items?: AccordionItem[] | ChecklistItem[] | TabItem[] | StepItem[];
  variant?: 'info' | 'warning' | 'tip' | 'important';
  title?: string;
  rows?: ComparisonRow[];
  headers?: string[];
  points?: string[];
  source?: string;
  id?: string;
}

interface AccordionItem {
  title: string;
  content: string;
}

interface ChecklistItem {
  text: string;
  description?: string;
}

interface TabItem {
  label: string;
  content: string;
}

interface StepItem {
  title: string;
  content: string;
}

interface ComparisonRow {
  label: string;
  values: string[];
}

function AccordionBlock({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden my-8">
      {items.map((item, index) => (
        <div key={index} className={index > 0 ? 'border-t border-gray-200' : ''}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-[#2D3E50] text-lg pr-4">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#4A708B] flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div
              className="px-6 pb-6 text-gray-700 leading-relaxed guide-rich-text"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TabsBlock({ items, title }: { items: TabItem[]; title?: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-8 border border-gray-200 rounded-xl overflow-hidden">
      {title && (
        <div className="px-6 pt-5 pb-0">
          <h4 className="font-bold text-[#2D3E50] text-lg">{title}</h4>
        </div>
      )}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {items.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-3.5 font-medium text-sm whitespace-nowrap transition-colors border-b-2 ${
              activeTab === index
                ? 'border-[#2D3E50] text-[#2D3E50] bg-gray-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="p-6 text-gray-700 leading-relaxed guide-rich-text"
        dangerouslySetInnerHTML={{ __html: items[activeTab]?.content || '' }}
      />
    </div>
  );
}

function CalloutBlock({ variant = 'info', title, content }: { variant?: string; title?: string; content?: string }) {
  const config: Record<string, { bg: string; border: string; icon: React.ReactNode; titleColor: string }> = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      icon: <Info className="w-5 h-5 text-blue-600" />,
      titleColor: 'text-blue-800',
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      icon: <AlertTriangle className="w-5 h-5 text-amber-600" />,
      titleColor: 'text-amber-800',
    },
    tip: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-300',
      icon: <Lightbulb className="w-5 h-5 text-emerald-600" />,
      titleColor: 'text-emerald-800',
    },
    important: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
      titleColor: 'text-red-800',
    },
  };

  const c = config[variant] || config.info;

  return (
    <div className={`${c.bg} border-l-4 ${c.border} rounded-r-lg p-5 my-8`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{c.icon}</div>
        <div className="flex-1 min-w-0">
          {title && <p className={`font-bold ${c.titleColor} mb-1`}>{title}</p>}
          {content && (
            <div
              className="text-gray-700 leading-relaxed text-[15px] guide-rich-text"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ChecklistBlock({ items }: { items: ChecklistItem[] }) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="my-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
      <div className="space-y-3">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => toggle(index)}
            className="w-full flex items-start gap-3 text-left group"
          >
            <div className="flex-shrink-0 mt-0.5">
              {checked.has(index) ? (
                <CheckSquare className="w-5 h-5 text-emerald-600" />
              ) : (
                <Square className="w-5 h-5 text-gray-400 group-hover:text-[#4A708B] transition-colors" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-medium transition-colors ${checked.has(index) ? 'text-gray-400 line-through' : 'text-[#2D3E50]'}`}>
                {item.text}
              </p>
              {item.description && (
                <p className={`text-sm mt-1 transition-colors ${checked.has(index) ? 'text-gray-300' : 'text-gray-500'}`}>
                  {item.description}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500">
        {checked.size} of {items.length} completed
      </div>
    </div>
  );
}

function NumberedSteps({ items }: { items: StepItem[] }) {
  return (
    <div className="my-8 space-y-0">
      {items.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#2D3E50] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {index + 1}
            </div>
            {index < items.length - 1 && (
              <div className="w-0.5 bg-gray-200 flex-1 my-1" />
            )}
          </div>
          <div className={`flex-1 min-w-0 ${index < items.length - 1 ? 'pb-8' : 'pb-2'}`}>
            <h4 className="font-bold text-[#2D3E50] text-lg mb-2">{step.title}</h4>
            <div
              className="text-gray-700 leading-relaxed guide-rich-text"
              dangerouslySetInnerHTML={{ __html: step.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonTable({ headers, rows }: { headers?: string[]; rows?: ComparisonRow[] }) {
  if (!headers || !rows) return null;

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#2D3E50]">
            <th className="px-5 py-4 text-white font-semibold text-sm">{headers[0]}</th>
            {headers.slice(1).map((header, i) => (
              <th key={i} className="px-5 py-4 text-white font-semibold text-sm">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-5 py-4 font-medium text-[#2D3E50] text-sm">{row.label}</td>
              {row.values.map((value, i) => (
                <td key={i} className="px-5 py-4 text-gray-700 text-sm" dangerouslySetInnerHTML={{ __html: value }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KeyTakeaway({ points, title }: { points?: string[]; title?: string }) {
  if (!points) return null;

  return (
    <div className="my-8 bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-6 text-white">
      <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6" />
        {title || 'Key Takeaways'}
      </h4>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0 text-white/70" />
            <span className="text-white/95 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatuteReference({ content, source }: { content?: string; source?: string }) {
  return (
    <div className="my-8 bg-gray-100 border border-gray-200 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <Scale className="w-5 h-5 text-[#4A708B] flex-shrink-0 mt-0.5" />
        <div>
          {content && (
            <div
              className="text-gray-700 text-[15px] leading-relaxed italic guide-rich-text"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          {source && <p className="text-sm text-gray-500 mt-2 font-medium">{source}</p>}
        </div>
      </div>
    </div>
  );
}

function QuoteBlock({ content, source }: { content?: string; source?: string }) {
  return (
    <blockquote className="my-8 border-l-4 border-[#4A708B] pl-6 py-2">
      {content && (
        <p className="text-xl text-gray-700 italic leading-relaxed">{content}</p>
      )}
      {source && <cite className="block text-sm text-gray-500 mt-3 not-italic">{source}</cite>}
    </blockquote>
  );
}

export default function GuideRenderer({ sections }: { sections: GuideSection[] }) {
  return (
    <div className="guide-content">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading': {
            const Tag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
            const sizeClass =
              section.level === 2
                ? 'text-3xl font-bold text-[#2D3E50] mt-12 mb-4'
                : section.level === 3
                ? 'text-2xl font-bold text-[#2D3E50] mt-10 mb-3'
                : 'text-xl font-semibold text-[#2D3E50] mt-8 mb-3';
            return (
              <Tag key={index} className={sizeClass} id={section.id}>
                {section.content}
              </Tag>
            );
          }
          case 'paragraph':
            return (
              <div
                key={index}
                className="text-gray-700 leading-[1.8] mb-5 text-[17px] guide-rich-text"
                dangerouslySetInnerHTML={{ __html: section.content || '' }}
              />
            );
          case 'accordion':
            return <AccordionBlock key={index} items={(section.items as AccordionItem[]) || []} />;
          case 'tabs':
            return <TabsBlock key={index} items={(section.items as TabItem[]) || []} title={section.title} />;
          case 'callout':
            return <CalloutBlock key={index} variant={section.variant} title={section.title} content={section.content} />;
          case 'checklist':
            return <ChecklistBlock key={index} items={(section.items as ChecklistItem[]) || []} />;
          case 'numbered-steps':
            return <NumberedSteps key={index} items={(section.items as StepItem[]) || []} />;
          case 'comparison-table':
            return <ComparisonTable key={index} headers={section.headers} rows={section.rows} />;
          case 'key-takeaway':
            return <KeyTakeaway key={index} points={section.points} title={section.title} />;
          case 'statute-reference':
            return <StatuteReference key={index} content={section.content} source={section.source} />;
          case 'quote':
            return <QuoteBlock key={index} content={section.content} source={section.source} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
