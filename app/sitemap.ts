import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts-data';
import { staticGuides, isHiddenGuide } from '@/lib/guides-data';
import { cityLocations, countyProbateLocations } from '@/lib/locations-data';
import { guardianshipCounties } from '@/lib/guardianship-counties';
import { ASSETS_PROBATE_SLUG, ASSETS_CORRECTED_ON } from '@/lib/blog-content-corrections';
import { getDb } from '@/lib/mongodb';

const SITE_URL = 'https://www.illinoisestatelaw.com';

export const revalidate = 3600;

const corePaths = [
  '/',
  '/about/',
  '/adult-guardianship-lawyer/',
  '/areas-we-serve/',
  '/blog/',
  '/book-consultation/',
  '/chicago-deeds-lawyer/',
  '/chicago-healthcare-directives-lawyer/',
  '/chicago-powers-of-attorney-lawyer/',
  '/chicago-probate-lawyer/',
  '/chicago-real-estate-closings-lawyer/',
  '/chicago-revocable-trusts-lawyer/',
  '/chicago-wills-lawyer/',
  '/compare-packages/',
  '/contact/',
  '/diy-vs-attorney-estate-planning-illinois/',
  '/estate-planning/',
  '/flat-fee-vs-hourly-probate-illinois/',
  '/frequently-asked-questions/',
  '/get-started/',
  '/guardianship/',
  '/guardianship-referrals/',
  '/illinois-estate-law-answers/',
  '/illinois-estate-tax-calculator/',
  '/in-person-consultations/',
  '/learning-center/',
  '/locations/',
  '/power-of-attorney-and-guardianship/',
  '/privacy-policy/',
  '/process/',
  '/services-pricing/',
  '/small-business/',
  '/submit-referral/',
  '/terms-of-service/',
  '/why-we-re-different/',
];

function url(path: string) {
  return `${SITE_URL}${path}`;
}

async function getDatabaseGuidePaths(): Promise<string[]> {
  try {
    const db = await getDb();
    const guides = await db
      .collection('guides')
      .find({}, { projection: { _id: 0, slug: 1, category: 1 } })
      .toArray();

    return guides
      .filter((guide) => !isHiddenGuide({
        slug: typeof guide.slug === 'string' ? guide.slug : undefined,
        category: typeof guide.category === 'string' ? guide.category : undefined,
      }))
      .map((guide) => String(guide.slug || ''))
      .filter(Boolean)
      .map((slug) => `/learning-center/${slug}/`);
  } catch {
    // The static guides still produce a valid sitemap during a database outage.
    return [];
  }
}

// Known published CMS articles remain discoverable during a database outage.
const publishedCmsFallbacks = [
  { url: url(`/blog/${ASSETS_PROBATE_SLUG}/`), lastModified: ASSETS_CORRECTED_ON },
  { url: url('/blog/who-has-priority-to-serve-as-administrator-of-an-estate-in-illinois/') },
];

function verifiedDate(value: unknown): string | undefined {
  if (!(typeof value === 'string' || value instanceof Date)) return undefined;
  const date = new Date(value);
  return Number.isFinite(date.getTime()) && date.getTime() <= Date.now() ? date.toISOString() : undefined;
}

async function getPublishedBlogEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const db = await getDb();
    const posts = await db.collection('blogPosts').find(
      { publishedDate: { $lte: new Date() } },
      { projection: { _id: 0, slug: 1, publishedDate: 1, contentUpdatedAt: 1 } },
    ).toArray();
    return posts.filter(post => typeof post.slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) && verifiedDate(post.publishedDate))
      .map(post => {
        // Only a substantive content-update date, never ingestion time or request time.
        const lastModified = post.slug === ASSETS_PROBATE_SLUG ? ASSETS_CORRECTED_ON : verifiedDate(post.contentUpdatedAt);
        return { url: url(`/blog/${post.slug}/`), ...(lastModified ? { lastModified } : {}) };
      });
  } catch { return []; }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const core: MetadataRoute.Sitemap = corePaths.map((path) => ({ url: url(path) }));

  const articles: MetadataRoute.Sitemap = blogPosts.filter(post => verifiedDate(post.date)).map(post => ({ url: url(post.url) }));

  const staticGuidePaths = staticGuides
    .filter((guide) => !isHiddenGuide(guide))
    .map((guide) => `/learning-center/${guide.slug}/`);
  const [databaseGuidePaths, databaseArticles] = await Promise.all([getDatabaseGuidePaths(), getPublishedBlogEntries()]);
  const guides: MetadataRoute.Sitemap = Array.from(new Set([...staticGuidePaths, ...databaseGuidePaths]))
    .map((path) => ({ url: url(path) }));

  const cities: MetadataRoute.Sitemap = cityLocations.map((location) => ({
    url: url(`/${location.slug}-estate-planning-lawyer/`),
  }));

  const probateCounties: MetadataRoute.Sitemap = [
    { url: url('/probate/cook-county/') },
    { url: url('/probate/dupage-county/') },
    ...countyProbateLocations.map((location) => ({
      url: url(`/probate/${location.slug}-county/`),
    })),
  ];

  const guardianshipCountiesMap: MetadataRoute.Sitemap = guardianshipCounties.map((location) => ({
    url: url(`/guardianship/${location.slug}-county/`),
  }));

  return Array.from(new Map([...core, ...articles, ...publishedCmsFallbacks, ...databaseArticles, ...guides, ...cities, ...probateCounties, ...guardianshipCountiesMap].map(entry => [entry.url, entry])).values());
}
