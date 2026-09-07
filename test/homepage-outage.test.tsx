/**
 * The homepage must render real content while every server-side data source it
 * touches is failing.
 *
 * This test exists because of the 6 September 2026 outage: the Google Places
 * API started returning REQUEST_DENIED, the render threw inside Next's
 * response-cache path, Next stored a broken ISR entry for "/", and for two and
 * a half days every visitor to illinoisestatelaw.com - every device, every
 * browser, and every crawler - got a 304 with no body and painted nothing.
 * Every other route on the site returned 200 the whole time.
 *
 * The assertions below are the contract that stops that happening again:
 *
 *   1. With Google refusing and MongoDB down, "/" still produces the hero, the
 *      practice areas, the reviews block and the FAQ.
 *   2. Rendering "/" performs no outbound HTTP request whatsoever, so no third
 *      party is on the critical path in the first place.
 *   3. A data source that hangs instead of throwing is also survivable.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';

// MongoDB is the homepage's only remaining render-time data source.
vi.mock('@/lib/mongodb', () => ({ getDb: vi.fn() }));

import { getDb } from '@/lib/mongodb';
import Home from '@/app/page';
import RecentArticlesStrip from '@/components/home/RecentArticlesStrip';
import { resolveServerTree } from './render-server-tree';

const mockedGetDb = vi.mocked(getDb);

/** Any outbound HTTP call during a homepage render is a bug, so make it fatal. */
const forbiddenFetch = vi.fn(async () => {
  throw new Error(
    'The homepage attempted a network request during render. It must not: ' +
      'that is exactly the dependency that took the site down on 2026-09-06.'
  );
});

async function renderHomepage(): Promise<string> {
  const tree = await resolveServerTree(Home());
  return renderToStaticMarkup(<>{tree}</>);
}

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal('fetch', forbiddenFetch);
  // Simulate the database being completely unreachable.
  mockedGetDb.mockRejectedValue(
    new Error('MongoServerSelectionError: connection to cluster closed (simulated)')
  );
});

describe('homepage under total third-party failure', () => {
  it('renders the real page when Google is denying requests and MongoDB is down', async () => {
    const html = await renderHomepage();

    // Hero
    expect(html).toContain('We Help Illinois Families');

    // Practice areas - the substance a visitor came for
    expect(html).toContain('Practice Areas');
    expect(html).toContain('Estate Planning');
    expect(html).toContain('Trust Administration');
    expect(html).toContain('Probate');
    expect(html).toContain('Guardianship');
    expect(html).toContain('Real Estate');

    // Conversion paths
    expect(html).toContain('Two ways to begin');
    expect(html).toContain('Frequently Asked Questions');

    // Not a shell: a real page's worth of markup.
    expect(html.length).toBeGreaterThan(20000);
  });

  it('renders the reviews block from constants, with no call to Google', async () => {
    const html = await renderHomepage();

    expect(html).toContain('Based on 50 Google reviews');
    expect(html).toContain('Stress-Free and Transparent Estate Planning Experience');
  });

  it('makes no outbound HTTP request at all while rendering', async () => {
    await renderHomepage();
    expect(forbiddenFetch).not.toHaveBeenCalled();
  });

  it('drops the article strip instead of failing, when the database throws', async () => {
    const html = await renderHomepage();

    expect(html).not.toContain('From the Learning Center');
    await expect(RecentArticlesStrip()).resolves.toBeNull();
  });

  it('survives a data source that hangs rather than throws', async () => {
    // A hang is worse than a throw: it holds the render open until something
    // upstream gives up and the visitor gets nothing.
    mockedGetDb.mockImplementation(() => new Promise(() => {}) as never);

    const html = await renderHomepage();

    expect(html).toContain('We Help Illinois Families');
    expect(html).toContain('Practice Areas');
    expect(html).not.toContain('From the Learning Center');
  });

  it('renders the article strip when the database is healthy', async () => {
    // The inverse case, so the suite cannot pass by rendering nothing at all.
    const posts = [
      {
        title: 'What Makes a Will Valid in Illinois',
        slug: 'what-makes-a-will-valid-in-illinois',
        metaDescription: 'The formalities an Illinois will has to meet.',
        publishedDate: '2026-08-01',
        topic: 'Wills',
      },
    ];

    mockedGetDb.mockResolvedValue({
      collection: () => ({
        find: () => ({
          sort: () => ({
            limit: () => ({
              toArray: async () => posts,
            }),
          }),
        }),
      }),
    } as never);

    const html = await renderHomepage();

    expect(html).toContain('From the Learning Center');
    expect(html).toContain('What Makes a Will Valid in Illinois');
  });
});
