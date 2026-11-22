/**
 * Hand-off from a website buy button to the client portal's Get Started screen.
 *
 * The portal page (StaffPortal frontend/src/pages/ClientSignupPage.js, route
 * /get-started) already reads two URL parameters:
 *   service  = the portal category key (estate-planning, probate, deeds, ...)
 *   package  = the portal get-started option id inside that category
 *              (tier-specific, e.g. will-individual / will-joint)
 * With both present it pre-selects the package, so the visitor does not pick
 * the service again. We also send:
 *   from=website
 *   answers=<base64url JSON>  (service finder answers only; never names,
 *                              emails or phone numbers; at most ~1.5 KB)
 *   utm_*                     (whatever the visitor arrived with)
 *
 * PORTAL_PACKAGES below is the one place that maps a website service id to the
 * portal. A service is mapped only when the portal option exists and its price
 * matches lib/pricing.ts; anything else keeps the website's /start-online/ page
 * (see UNMAPPED_REASONS). test/portal-handoff.test.ts checks every mapping
 * against a snapshot of the portal catalog.
 */
import type { ClientType } from './online-signup';

export const PORTAL_GET_STARTED_URL = 'https://portal.illinoisestatelaw.com/get-started';

export type PortalCategory = 'estate-planning' | 'probate' | 'trust-administration' | 'real-estate' | 'deeds';

export type PortalPackage = {
  /** Portal category key, sent as `service`. */
  category: PortalCategory;
  /** Portal get-started option id for one person (or the only tier). */
  individual: string;
  /** Portal option id for a couple, where the portal sells a joint tier. */
  joint?: string;
  /** Portal service-catalog entry (backend/service_catalog_seed.py) the option belongs to. */
  catalogId: string;
};

export const PORTAL_PACKAGES: Record<string, PortalPackage> = {
  // Estate planning packages
  'trust-package': { category: 'estate-planning', individual: 'trust-individual', joint: 'trust-joint', catalogId: 'trust-package' },
  'probate-avoidance-package': { category: 'estate-planning', individual: 'probate-avoidance-individual', joint: 'probate-avoidance-joint', catalogId: 'probate-avoidance-package' },
  'will-package': { category: 'estate-planning', individual: 'will-individual', joint: 'will-joint', catalogId: 'will-package' },
  'diy-estate-plan-review': { category: 'estate-planning', individual: 'diy-review-individual', joint: 'diy-review-joint', catalogId: 'diy-estate-plan-review' },
  'estate-tax-planning-package': { category: 'estate-planning', individual: 'estate-tax-individual', joint: 'estate-tax-joint', catalogId: 'estate-tax-planning-package' },
  // Estate planning a la carte
  'revocable-living-trust': { category: 'estate-planning', individual: 'trust-individual-alc', joint: 'trust-joint-alc', catalogId: 'revocable-living-trust-alc' },
  'last-will-testament': { category: 'estate-planning', individual: 'will-individual-alc', joint: 'will-joint-alc', catalogId: 'last-will-alc' },
  'power-of-attorney': { category: 'estate-planning', individual: 'poa-individual', joint: 'poa-joint', catalogId: 'poa-alc' },
  'healthcare-directive': { category: 'estate-planning', individual: 'healthcare-directive-individual', catalogId: 'healthcare-directive-alc' },
  'trust-restatement': { category: 'estate-planning', individual: 'trust-restatement', joint: 'trust-restatement-joint', catalogId: 'trust-restatement-alc' },
  'will-amendment': { category: 'estate-planning', individual: 'will-amendment', joint: 'will-amendment-joint', catalogId: 'will-amendment-alc' },
  'estate-tax-planning': { category: 'estate-planning', individual: 'estate-tax-standalone', catalogId: 'estate-tax-planning-addon' },
  // The website sells one MAPT price, so only the one-person tier is mapped (see UNMAPPED_TIERS).
  'medicaid-asset-protection-trust': { category: 'estate-planning', individual: 'mapt-individual', catalogId: 'mapt-trust' },
  'special-needs-planning': { category: 'estate-planning', individual: 'special-needs', catalogId: 'special-needs-planning' },
  // The portal sells one Irrevocable Trust option at the same $4,000; the hand-off
  // tells staff the client asked for an ILIT (see HANDOFF_NOTES).
  'irrevocable-life-insurance-trust': { category: 'estate-planning', individual: 'irrevocable-trust', catalogId: 'irrevocable-trust-alc' },
  'annual-review-membership': { category: 'estate-planning', individual: 'annual-plan-review', catalogId: 'annual-plan-review' },
  // Probate
  'small-estate-administration': { category: 'probate', individual: 'small-estate-administration', catalogId: 'small-estate-administration' },
  'standard-probate': { category: 'probate', individual: 'standard-probate', catalogId: 'standard-probate' },
  // Group option: the portal resolves it to Probate + Guardianship ($7,500) and then
  // has the client choose minor or adult guardianship, which selects the real catalog
  // entry (probate-minor-guardianship or probate-adult-guardianship, both $7,500).
  'probate-guardianship': { category: 'probate', individual: 'probate-guardianship', catalogId: 'probate-guardianship' },
  'large-estate-probate': { category: 'probate', individual: 'large-estate-probate', catalogId: 'large-estate-probate' },
  'probate-reopening': { category: 'probate', individual: 'probate-reopening', catalogId: 'probate-reopening' },
  'heir-representation': { category: 'probate', individual: 'heir-representation', catalogId: 'heir-representation' },
  'partial-probate': { category: 'probate', individual: 'partial-probate', catalogId: 'partial-probate' },
  'spousal-representation': { category: 'probate', individual: 'spousal-representation', catalogId: 'spousal-representation' },
  'document-review': { category: 'probate', individual: 'document-review', catalogId: 'document-review' },
  // Trust administration
  'trust-admin-consulting': { category: 'trust-administration', individual: 'trust-admin-consulting', catalogId: 'trust-admin-consulting' },
  // Real estate (the portal files Bond in Lieu under real estate)
  'residential-closing': { category: 'real-estate', individual: 'real-estate-representation', catalogId: 'residential-closing' },
  'fsbo-representation': { category: 'real-estate', individual: 'real-estate-fsbo', catalogId: 'real-estate-fsbo' },
  'bond-in-lieu-of-probate': { category: 'real-estate', individual: 'bond-in-lieu', catalogId: 'bond-in-lieu' },
  // Deeds
  'quit-claim-deed': { category: 'deeds', individual: 'quit-claim', catalogId: 'quitclaim-deed' },
  'transfer-on-death': { category: 'deeds', individual: 'tod-deed', catalogId: 'todi' },
  'life-estate-deed': { category: 'deeds', individual: 'life-estate', catalogId: 'life-estate-deed' },
};

/** Website services deliberately NOT deep-linked, and why. They keep /start-online/. */
export const UNMAPPED_REASONS: Record<string, string> = {
  'contested-probate': 'Court matter; starts with a consultation, no fixed-price checkout.',
  'adult-guardianship': 'Consultation only.',
  'emergency-temporary-adult-guardianship': 'Consultation only.',
  'minor-guardianship': 'Consultation only.',
  'annual-report-ward': 'Consultation only.',
  'contested-guardianship': 'Consultation only.',
};

/**
 * Single tiers deliberately NOT deep-linked, keyed "<service id>:<tier>". A
 * visitor choosing that tier keeps /start-online/ instead of landing on the
 * wrong portal option.
 */
export const UNMAPPED_TIERS: Record<string, string> = {
  'medicaid-asset-protection-trust:joint':
    'Portal mapt-joint is $5,000; the website has no couple price for this trust (one price, $4,000).',
};

export type QuizAnswers = Record<string, string>;

/**
 * Fixed notes sent with a hand-off (as `answers`) when the portal option is broader
 * than the website service, so staff see exactly what the client chose.
 */
export const HANDOFF_NOTES: Record<string, QuizAnswers> = {
  'irrevocable-life-insurance-trust': { website_service: 'Irrevocable Life Insurance Trust (ILIT)' },
};

/** Largest encoded `answers` value we send. */
export const MAX_ANSWERS_BYTES = 1500;

/** Keys that could carry personal details are never sent. */
const PERSONAL_KEY = /name|email|phone|address|dob|birth|ssn/i;

function base64url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  const b64 = typeof btoa === 'function' ? btoa(binary) : Buffer.from(binary, 'binary').toString('base64');
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/** Encode quiz answers for the hand-off, or undefined when nothing safe fits. */
export function encodeAnswers(answers: QuizAnswers | undefined): string | undefined {
  if (!answers) return undefined;
  const safe: QuizAnswers = {};
  for (const [key, value] of Object.entries(answers)) {
    if (PERSONAL_KEY.test(key) || typeof value !== 'string' || value.includes('@')) continue;
    safe[key] = value.slice(0, 60);
  }
  if (Object.keys(safe).length === 0) return undefined;
  const encoded = base64url(JSON.stringify(safe));
  return encoded.length <= MAX_ANSWERS_BYTES ? encoded : undefined;
}

export function hasPortalPackage(serviceId: string): boolean {
  return serviceId in PORTAL_PACKAGES;
}

/**
 * Deep link to the portal's Get Started screen with the package pre-selected,
 * or null when the service is not mapped (callers then keep /start-online/).
 */
export function portalHandoffUrl(
  serviceId: string,
  options: { clientType?: ClientType; answers?: QuizAnswers; utm?: Record<string, string> } = {},
): string | null {
  const pkg = PORTAL_PACKAGES[serviceId];
  if (!pkg) return null;
  if (options.clientType && UNMAPPED_TIERS[`${serviceId}:${options.clientType}`]) return null;
  const params = new URLSearchParams();
  params.set('service', pkg.category);
  params.set('package', options.clientType === 'joint' && pkg.joint ? pkg.joint : pkg.individual);
  params.set('from', 'website');
  const answers = encodeAnswers(HANDOFF_NOTES[serviceId] ? { ...options.answers, ...HANDOFF_NOTES[serviceId] } : options.answers);
  if (answers) params.set('answers', answers);
  for (const [key, value] of Object.entries(options.utm ?? {})) {
    if (/^utm_[a-z_]{1,30}$/.test(key) && value) params.set(key, value.slice(0, 200));
  }
  return `${PORTAL_GET_STARTED_URL}?${params.toString()}`;
}

/** The website's own review page, used for services the portal cannot pre-select. */
export function startOnlineUrl(serviceId: string, clientType: ClientType = 'individual', source = 'website'): string {
  return `/start-online/?service=${encodeURIComponent(serviceId)}&clientType=${clientType}&source=${encodeURIComponent(source)}`;
}

/** Portal deep link when mapped, otherwise the website's /start-online/ page. */
export function buyHref(serviceId: string, options: { clientType?: ClientType; source?: string; answers?: QuizAnswers } = {}): string {
  return portalHandoffUrl(serviceId, options) ?? startOnlineUrl(serviceId, options.clientType ?? 'individual', options.source);
}

/* ---------------- utm pass-through (browser only) ---------------- */

const UTM_STORAGE_KEY = 'iel_utm';

/** Remember utm_* parameters from the landing URL for this browser tab. */
export function captureUtm(search: string): void {
  try {
    const params = new URLSearchParams(search);
    const utm: Record<string, string> = {};
    params.forEach((value, key) => { if (/^utm_[a-z_]{1,30}$/.test(key) && value) utm[key] = value.slice(0, 200); });
    if (Object.keys(utm).length) window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  } catch { /* storage unavailable: nothing to remember */ }
}

export function storedUtm(): Record<string, string> {
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Add stored utm_* values to a portal URL (never to other URLs). */
export function withUtm(href: string, utm: Record<string, string>): string {
  if (!href.startsWith(PORTAL_GET_STARTED_URL) || !Object.keys(utm).length) return href;
  const url = new URL(href);
  for (const [key, value] of Object.entries(utm)) {
    if (/^utm_[a-z_]{1,30}$/.test(key) && value && !url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  return url.toString();
}
