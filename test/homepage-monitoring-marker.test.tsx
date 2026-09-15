/**
 * The external uptime monitor greps the homepage for one string. This test owns
 * that string, so it cannot disappear silently.
 *
 * .github/workflows/homepage-monitor.yml fetches the live homepage every 15
 * minutes and fails if the body does not contain HOMEPAGE_MONITOR_MARKER. That
 * check exists because on 2026-09-06 and 2026-09-09 the homepage answered with
 * no body while every other page was fine, and both times Mary noticed before
 * we did.
 *
 * A status-code check alone would not have caught it and would not catch the
 * next variant: the failure served a 304, and a 200 with an empty body is
 * equally possible. So the monitor asserts on content.
 *
 * The marker is deliberately structural rather than prose. Hero and heading
 * copy gets reworded during ordinary marketing edits, and a monitor that cries
 * wolf after a copy tweak gets muted, which is worse than no monitor. A form
 * field id survives copy edits.
 *
 * It is also deliberately LATE in the document - the contact form sits second
 * from the bottom of app/page.tsx - so its presence proves the whole page
 * arrived rather than just the shell. The JSON-LD block at the top of the page
 * would be present even in a truncated response, which is exactly the shape of
 * failure being watched for.
 *
 * If this test fails, do not simply change the marker. Change it here AND in
 * the workflow in the same commit, or the monitor goes quietly blind - which is
 * the failure class this whole incident belongs to.
 */
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

vi.mock('@/lib/mongodb', () => ({ getDb: vi.fn() }));

import { getDb } from '@/lib/mongodb';
import Home from '@/app/page';
import { resolveServerTree } from './render-server-tree';

/** Must be kept identical to MARKER in .github/workflows/homepage-monitor.yml */
export const HOMEPAGE_MONITOR_MARKER = 'id="form-field-message"';

const mockedGetDb = vi.mocked(getDb);

beforeEach(() => {
  vi.clearAllMocks();
  // The database being down must not remove the marker: the monitor has to keep
  // reporting "up" when an optional section is missing but the page is fine.
  mockedGetDb.mockRejectedValue(new Error('database unreachable (simulated)'));
});

async function renderHomepage(): Promise<string> {
  const tree = await resolveServerTree(Home());
  return renderToStaticMarkup(<>{tree}</>);
}

describe('the string the external monitor greps for', () => {
  it('is present in the rendered homepage', async () => {
    const html = await renderHomepage();
    expect(html).toContain(HOMEPAGE_MONITOR_MARKER);
  });

  it('is still present when the database is down', async () => {
    // Otherwise a database blip would page someone about a page that is serving
    // perfectly well without one optional section.
    const html = await renderHomepage();
    expect(html).toContain(HOMEPAGE_MONITOR_MARKER);
    expect(html).not.toContain('From the Learning Center');
  });

  it('appears late in the document, not in the shell', async () => {
    // The point of this marker is to prove the whole body arrived. If it drifts
    // to the top of the page it stops distinguishing a full render from a
    // truncated one.
    const html = await renderHomepage();
    const markerAt = html.indexOf(HOMEPAGE_MONITOR_MARKER);

    expect(markerAt).toBeGreaterThan(-1);
    expect(markerAt / html.length).toBeGreaterThan(0.5);
  });

  it('is unique in the document, so the check is unambiguous', async () => {
    const html = await renderHomepage();
    const occurrences = html.split(HOMEPAGE_MONITOR_MARKER).length - 1;
    expect(occurrences).toBe(1);
  });
});
