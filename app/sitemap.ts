import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts-data';
import { staticGuides, isHiddenGuide } from '@/lib/guides-data';
import { cityLocations, countyProbateLocations } from '@/lib/locations-data';
import { guardianshipCounties } from '@/lib/guardianship-counties';
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const core: MetadataRoute.Sitemap = corePaths.map((path) => ({ url: url(path) }));

  const articles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(post.url),
    lastModified: new Date(post.date),
  }));

  const staticGuidePaths = staticGuides
    .filter((guide) => !isHiddenGuide(guide))
    .map((guide) => `/learning-center/${guide.slug}/`);
  const databaseGuidePaths = await getDatabaseGuidePaths();
  const guides: MetadataRoute.Sitemap = [...new Set([...staticGuidePaths, ...databaseGuidePaths])]
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

  return [...core, ...articles, ...guides, ...cities, ...probateCounties, ...guardianshipCountiesMap];
}
