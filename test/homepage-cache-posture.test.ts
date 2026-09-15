/**
 * Guard: a route that reads MongoDB while rendering must never be served out of
 * Next's incremental (ISR) response cache.
 *
 * Why this test exists, stated as precisely as the evidence supports.
 *
 * On 6 September 2026 and again on 9 September 2026 the homepage went dark: "/"
 * answered 304 with no body to every visitor, including clients that provably
 * held no cached copy, while every other route on the site served 200
 * throughout. Both times it was found by Mary rather than by us.
 *
 * What is established: "/" was the only route in this application that combined
 * a render-time database read with the ISR cache. Every other database-backed
 * route - app/blog/[slug], app/learning-center, app/learning-center/[slug], and
 * every API route that calls getDb - was already force-dynamic. "/" was the
 * outlier, and "/" is the only route that has ever gone dark.
 *
 * What is NOT established, and is deliberately not asserted anywhere below: the
 * internal reason a given background regeneration produced a bodyless entry. A
 * plausible streaming-SSR story could be told here. It is not told, because the
 * fix does not depend on it and a plausible story is what caught us out twice.
 *
 * The distinction that makes this class of bug survivable: the existing suite in
 * homepage-outage.test.tsx asserts six things about the RENDER, and the render
 * was never the problem - no render error appeared in the runtime logs during
 * either outage. The page was fine. The stored artefact was not. Nothing
 * protected the WRITE.
 *
 * So this file pins the class rather than the instance. PR #43 removed the
 * Google Places call from "/" and left the mechanism in place, and the site went
 * down again three days later. Removing one cause while the shape stays
 * available is this repo's whole failure history. A route that can read the
 * database and can also store a regenerable artefact is that shape.
 */
import { describe, expect, it } from 'vitest';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const ROOT = join(__dirname, '..');

/** Every database read in this application goes through this module. */
const DB_MODULE = join(ROOT, 'lib/mongodb.ts');

const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'out', 'dist']);
const RESOLVE_EXTS = ['.ts', '.tsx', '.js', '.jsx'];

/** Files Next treats as a route entry point. */
const ROUTE_ENTRY = /^(page|route)\.(ts|tsx|js|jsx)$/;

/**
 * `from '...'`, bare `import '...'`, and `require('...')`.
 * lib/mongodb.ts itself reaches the driver through a lazy require, so the
 * require form has to be walked or the graph would be incomplete.
 */
const IMPORT_SPECIFIER = /(?:\bfrom|\bimport|\brequire\s*\()\s*['"]([^'"]+)['"]/g;

const DECLARES_FORCE_DYNAMIC = /export\s+const\s+dynamic\s*=\s*['"]force-dynamic['"]/;
const DECLARES_REVALIDATE = /export\s+const\s+revalidate\s*=\s*(\d+)/;

/** Resolve an import specifier to a file inside this repo, or null if external. */
function resolveModule(spec: string, fromFile: string): string | null {
  let base: string;
  if (spec.startsWith('@/')) {
    base = join(ROOT, spec.slice(2));
  } else if (spec.startsWith('./') || spec.startsWith('../')) {
    base = join(dirname(fromFile), spec);
  } else {
    // A bare package specifier. Not ours, and not a path to the database.
    return null;
  }

  if (existsSync(base) && statSync(base).isFile()) return base;
  for (const ext of RESOLVE_EXTS) {
    if (existsSync(base + ext)) return base + ext;
  }
  for (const ext of RESOLVE_EXTS) {
    const indexFile = join(base, `index${ext}`);
    if (existsSync(indexFile)) return indexFile;
  }
  return null;
}

/**
 * Every in-repo module reachable from `entry`, following imports transitively.
 * The database is usually several hops from the route: "/" reaches it as
 * app/page.tsx -> components/home/RecentArticlesStrip.tsx -> lib/mongodb.ts.
 * A check that only looked at the route file itself would have passed on the
 * morning of both outages.
 */
function reachableModules(entry: string): Set<string> {
  const seen = new Set<string>();
  const queue = [entry];

  while (queue.length > 0) {
    const file = queue.pop() as string;
    if (seen.has(file)) continue;
    seen.add(file);

    let source: string;
    try {
      source = readFileSync(file, 'utf8');
    } catch {
      continue;
    }

    for (const match of source.matchAll(IMPORT_SPECIFIER)) {
      const resolved = resolveModule(match[1], file);
      if (resolved && !seen.has(resolved)) queue.push(resolved);
    }
  }

  return seen;
}

function findRouteEntries(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) findRouteEntries(full, out);
    else if (ROUTE_ENTRY.test(name)) out.push(full);
  }
  return out;
}

const routeEntries = findRouteEntries(join(ROOT, 'app'));

const databaseBackedRoutes = routeEntries
  .filter((entry) => reachableModules(entry).has(DB_MODULE))
  .map((entry) => relative(ROOT, entry))
  .sort();

describe('ISR cache posture on database-backed routes', () => {
  it('finds the route graph at all', () => {
    // If the walk silently resolved nothing, every assertion below would pass
    // vacuously, which is the failure mode of a test like this one.
    expect(routeEntries.length).toBeGreaterThan(20);
    expect(databaseBackedRoutes.length).toBeGreaterThan(0);
    expect(databaseBackedRoutes).toContain('app/page.tsx');
  });

  it('declares force-dynamic on every route that can reach the database', () => {
    const offenders: string[] = [];

    for (const rel of databaseBackedRoutes) {
      const source = readFileSync(join(ROOT, rel), 'utf8');
      if (!DECLARES_FORCE_DYNAMIC.test(source)) {
        offenders.push(
          `${rel} reads MongoDB while rendering but does not declare ` +
            `export const dynamic = 'force-dynamic'`,
        );
      }
    }

    expect(
      offenders,
      'A route that can reach lib/mongodb.ts must not be able to store a ' +
        'regenerable cache entry. This is the exact combination that blanked ' +
        '"/" on 2026-09-06 and 2026-09-09:\n' +
        offenders.join('\n'),
    ).toEqual([]);
  });

  it('never sets a positive revalidate on a route that can reach the database', () => {
    const offenders: string[] = [];

    for (const rel of databaseBackedRoutes) {
      const source = readFileSync(join(ROOT, rel), 'utf8');
      const match = source.match(DECLARES_REVALIDATE);
      // `revalidate = 0` is fine: it means no cache entry, same intent as
      // force-dynamic. Anything above zero schedules a background regeneration,
      // and a background regeneration is a write.
      if (match && Number(match[1]) > 0) {
        offenders.push(`${rel} sets revalidate = ${match[1]}`);
      }
    }

    expect(
      offenders,
      'A positive revalidate schedules a background regeneration, and a ' +
        'regeneration is a write. "/" carried revalidate = 3600 through both ' +
        'outages:\n' + offenders.join('\n'),
    ).toEqual([]);
  });
});

describe('the homepage specifically', () => {
  const homepage = readFileSync(join(ROOT, 'app/page.tsx'), 'utf8');

  it('is force-dynamic', () => {
    expect(homepage).toMatch(DECLARES_FORCE_DYNAMIC);
  });

  it('does not schedule a background regeneration', () => {
    const match = homepage.match(DECLARES_REVALIDATE);
    expect(match === null || Number(match[1]) === 0).toBe(true);
  });

  it('still reads the database, so this posture keeps mattering', () => {
    // If the article strip is ever removed, "/" could safely become static and
    // this guard would stop applying to it. Until then it must not be relaxed.
    expect(reachableModules(join(ROOT, 'app/page.tsx')).has(DB_MODULE)).toBe(true);
  });
});
