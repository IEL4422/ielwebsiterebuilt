import React from 'react';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { ContestedEventFeeMenu } from '@/components/services/ContestedEventFeeMenu';
import { CONTESTED_EVENT_FEES } from '@/lib/pricing';

describe('contested event-based flat fees', () => {
  it('keeps the public list ordered from least to most expensive', () => {
    const amounts = CONTESTED_EVENT_FEES.map((fee) => fee.amount);
    expect(amounts).toEqual([...amounts].sort((a, b) => a - b));
  });

  it('publishes the requested will-contest, trial, deposition, and formal-proof entries', () => {
    const html = renderToStaticMarkup(<ContestedEventFeeMenu />);
    expect(html).toContain('Full Will Contest — Pretrial Litigation');
    expect(html).toContain('Will Contest Trial Preparation and Trial');
    expect(html).toContain('Deposition');
    expect(html).toContain('Formal Proof of Will');
    expect(html).toContain('Contested cases may incur additional flat fees');
    expect(html).toContain('No automatic or duplicate charges');
  });
});
