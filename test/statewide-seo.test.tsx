import React from 'react';
import {beforeEach, describe, expect, it, vi} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFileSync, statSync} from 'node:fs';
vi.mock('@/lib/mongodb', () => ({getDb: vi.fn()}));
import {getDb} from '@/lib/mongodb';
import sitemap from '@/app/sitemap';
import BlogPage from '@/app/blog/[slug]/page';
import EstatePlanning, {metadata as planningMeta} from '@/app/estate-planning/page';
import ProbatePage from '@/app/chicago-probate-lawyer/page';
import {metadata as probateMeta} from '@/app/chicago-probate-lawyer/layout';
import AreasPage from '@/app/areas-we-serve/page';
import {correctedBlogContent, ASSETS_PROBATE_SLUG} from '@/lib/blog-content-corrections';
const mockedDb = vi.mocked(getDb);
beforeEach(() => vi.resetAllMocks());

it('keeps statewide coverage, Chicago intent, package prices and useful local links together', () => {
 for (const page of [<EstatePlanning/>, <ProbatePage/>]) {
  const html = renderToStaticMarkup(page);
  expect(html.match(/<h1\b/g)).toHaveLength(1);
  for (const text of ['Chicago', 'Cook County', '/areas-we-serve/', '/probate/cook-county/', 'Mary Liberty']) expect(html).toContain(text);
  expect(html).not.toContain('Reviewed by');
 }
 expect(JSON.stringify(planningMeta)).toContain('Serving All Illinois');
 expect(JSON.stringify(probateMeta)).toContain('Illinois Statewide');
 const areas = renderToStaticMarkup(<AreasPage/>);
 expect(areas).toContain('not limits on our statewide coverage');
 expect(areas).not.toContain('physical offices throughout Illinois');
 const hero = readFileSync('components/home/HeroSection.tsx', 'utf8');
 expect(hero).toContain('We Help Illinois Families');
 expect(hero).toContain('Illinois estate planning, probate, guardianship, and real estate attorneys');
 expect(hero).toContain('media="(min-width: 1024px)"');
 expect(statSync('public/hero-illinois-1584.webp').size).toBeLessThan(statSync('public/hero_option_1_hq.png').size * 0.1);
});

describe('sitemap publication and freshness', () => {
 it('retains both known published CMS articles during outages, with no invented lastmod', async () => {
  mockedDb.mockRejectedValue(new Error('offline fixture'));
  const result = await sitemap();
  expect(result.some(row => row.url.endsWith(`/blog/${ASSETS_PROBATE_SLUG}/`))).toBe(true);
  const admin = result.find(row => row.url.includes('who-has-priority-to-serve-as-administrator'))!;
  expect(admin).toBeTruthy(); expect(admin.lastModified).toBeUndefined();
  expect(new Set(result.map(row => row.url)).size).toBe(result.length);
 });
 it('includes valid published CMS articles once, excludes future/malformed rows and only uses substantive update dates', async () => {
  const find = vi.fn(() => ({toArray: async () => [
   {slug:'new-published-article',publishedDate:'2026-04-01',contentUpdatedAt:'2026-09-01',updatedAt:'2026-10-05'},
   {slug:'no-content-change',publishedDate:'2026-04-01',updatedAt:'2026-10-05'},
   {slug:ASSETS_PROBATE_SLUG,publishedDate:'2026-04-28'},
   {slug:'future',publishedDate:'2099-01-01'}, {slug:'../bad',publishedDate:'2026-04-01'},
  ]}));
  mockedDb.mockResolvedValue({collection: (name: string) => name === 'blogPosts' ? {find} : {find: () => ({toArray:async()=>[]})}} as any);
  const result = await sitemap();
  expect(find.mock.calls[0][0]).toHaveProperty('publishedDate.$lte');
  expect(result.filter(row => row.url.endsWith(`/blog/${ASSETS_PROBATE_SLUG}/`))).toHaveLength(1);
  expect(result.find(row => row.url.includes('/new-published-article/'))?.lastModified).toBe('2026-09-01T00:00:00.000Z');
  expect(result.find(row => row.url.includes('/no-content-change/'))?.lastModified).toBeUndefined();
  expect(result.some(row => row.url.includes('/future/') || row.url.includes('../bad'))).toBe(false);
 });
});

it('corrects all five legacy threshold passages without rewriting historical CMS data or applying 2027 law early', () => {
 const stored = readFileSync('supabase/migrations/20260428165920_add_do_all_assets_go_through_probate_blog_post.sql','utf8');
 const html = correctedBlogContent(ASSETS_PROBATE_SLUG, stored);
 expect(stored).toContain('If probate assets total $100,000 or less');
 for (const obsolete of ['exceeds <strong>$100,000', 'is <strong>$100,000 or less', 'The $100,000 threshold only', 'toward the $100,000 probate threshold', 'If probate assets total $100,000']) expect(html).not.toContain(obsolete);
 for (const fact of ['$150,000', 'on or after August 15, 2025', 'Earlier deaths', 'prior $100,000', 'does not transfer real estate', 'no outstanding letters', 'January 1, 2027', 'not the rule in effect']) expect(html).toContain(fact);
 expect(html).toContain('A vehicle-specific affidavit');
 const other = '<p>For an earlier death the limit was $100,000.</p>';
 expect(correctedBlogContent('other-article',other)).toBe(other);
});

it('renders a CMS article with one H1, original publication date and truthful publisher/update attribution', async () => {
 const stored = {slug:ASSETS_PROBATE_SLUG,title:'Assets and probate',publishedDate:'2026-04-28T12:00:00Z',topic:'Probate',content:'<h1>Imported title</h1><p>If probate assets total $100,000 or less, heirs may use an affidavit.</p>',metaDescription:'Asset guide',internalLinks:[]};
 mockedDb.mockResolvedValue({collection:()=>({findOne:async()=>stored})} as any);
 const html = renderToStaticMarkup(await BlogPage({params:{slug:ASSETS_PROBATE_SLUG}}));
 expect(html.match(/<h1\b/g)).toHaveLength(1);
 expect(html).toContain('April 28, 2026');
 expect(html).toContain('October 5, 2026');
 expect(html).toContain('Original article by');
 expect(html).toContain('Mary Liberty');
 expect(html).not.toContain('Reviewed by');
 expect(stored.content).toContain('$100,000');
});
