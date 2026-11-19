/**
 * Online sign-up wording for buy buttons: price, attorney promise, and the
 * "skip the consultation" incentive.
 *
 * Prices come from lib/pricing.ts only. Nothing here changes a price.
 *
 * To change or remove the online-purchase incentive, edit or empty
 * ONLINE_DISCOUNT_LINE (an empty string hides it everywhere). It shows with
 * every buy button that hands off to the portal (lib/portal-handoff.ts), because
 * the portal takes 10% off any catalog-priced purchase that arrives with
 * from=website and has no consultation on file.
 */
import { A_LA_CARTE, ESTATE_PLANNING, PROBATE, REAL_ESTATE, TRUST_ADMIN, usd } from './pricing';
import { portalHandoffUrl } from './portal-handoff';

export type ClientType = 'individual' | 'joint';

/** Shown with every buy button that hands off to the portal. */
export const ONLINE_DISCOUNT_LINE: string = 'Buy online without a consultation and save 10%.';

/** The attorney promise shown with estate planning buy buttons. */
export const ATTORNEY_PROMISE = 'Attorney planning session included';

/** Estate planning packages that carry the attorney promise. */
export const ATTORNEY_PROMISE_SERVICE_IDS: readonly string[] = [
  'will-package',
  'probate-avoidance-package',
  'trust-package',
  'estate-tax-planning-package',
  'medicaid-asset-protection-trust',
  'irrevocable-life-insurance-trust',
];

type PackagePrice = { individual: number; joint?: number; per?: string };

/**
 * Fixed prices for services that can be bought online, read from lib/pricing.ts.
 * Services without a single fixed price (court matters with retainers or
 * starting fees, percentage-based fees) are left out on purpose, so their
 * buttons keep a plain label.
 */
const PACKAGE_PRICES: Record<string, PackagePrice> = {
  'trust-package': { individual: ESTATE_PLANNING.trustPackageIndividual, joint: ESTATE_PLANNING.trustPackageJoint },
  'probate-avoidance-package': { individual: ESTATE_PLANNING.probateAvoidanceIndividual, joint: ESTATE_PLANNING.probateAvoidanceJoint },
  'will-package': { individual: ESTATE_PLANNING.willPackageIndividual, joint: ESTATE_PLANNING.willPackageJoint },
  'diy-estate-plan-review': { individual: ESTATE_PLANNING.diyReviewIndividual, joint: ESTATE_PLANNING.diyReviewJoint },
  'estate-tax-planning-package': { individual: ESTATE_PLANNING.estateTaxPackageIndividual, joint: ESTATE_PLANNING.estateTaxPackageJoint },
  'medicaid-asset-protection-trust': { individual: ESTATE_PLANNING.medicaidAssetProtectionTrust },
  'irrevocable-life-insurance-trust': { individual: ESTATE_PLANNING.irrevocableLifeInsuranceTrust },
  'revocable-living-trust': { individual: A_LA_CARTE.revocableTrustIndividual, joint: A_LA_CARTE.revocableTrustJoint },
  'last-will-testament': { individual: A_LA_CARTE.willIndividual, joint: A_LA_CARTE.willJoint },
  'power-of-attorney': { individual: A_LA_CARTE.powersOfAttorneyIndividual, joint: A_LA_CARTE.powersOfAttorneyJoint },
  'healthcare-directive': { individual: A_LA_CARTE.healthcareDirective },
  'trust-restatement': { individual: A_LA_CARTE.trustRestatementIndividual, joint: A_LA_CARTE.trustRestatementJoint },
  'will-amendment': { individual: A_LA_CARTE.willAmendmentIndividual, joint: A_LA_CARTE.willAmendmentJoint },
  'special-needs-planning': { individual: A_LA_CARTE.specialNeedsPlanning },
  'estate-tax-planning': { individual: A_LA_CARTE.estateTaxPlanningAddOn },
  'quit-claim-deed': { individual: A_LA_CARTE.deed },
  'transfer-on-death': { individual: A_LA_CARTE.deed },
  'life-estate-deed': { individual: A_LA_CARTE.deed },
  'small-estate-administration': { individual: PROBATE.smallEstateAdministration },
  'standard-probate': { individual: PROBATE.standard },
  'probate-reopening': { individual: PROBATE.reopening },
  'heir-representation': { individual: PROBATE.heirRepresentation },
  'partial-probate': { individual: PROBATE.partialProbate },
  'spousal-representation': { individual: PROBATE.spousalRepresentation },
  'document-review': { individual: PROBATE.documentReview },
  'bond-in-lieu-of-probate': { individual: REAL_ESTATE.bondInLieuOfProbate },
  'residential-closing': { individual: REAL_ESTATE.saleRepresentation },
  'fsbo-representation': { individual: REAL_ESTATE.fsboRepresentation },
  'trust-admin-consulting': { individual: TRUST_ADMIN.consultingAnnual, per: 'a year' },
};

const BUTTON_VERBS: Record<string, string> = {
  'trust-package': 'Start my trust',
  'revocable-living-trust': 'Start my trust',
  'medicaid-asset-protection-trust': 'Start my trust',
  'irrevocable-life-insurance-trust': 'Start my trust',
  'will-package': 'Start my will',
  'last-will-testament': 'Start my will',
  'probate-avoidance-package': 'Start my plan',
  'estate-tax-planning-package': 'Start my plan',
  'diy-estate-plan-review': 'Start my review',
  'standard-probate': 'Start probate',
};

/** "$3,500", "$5,000" (joint), "from $3,500" (when no client type is chosen), "$3,500 a year". */
export function packagePriceText(serviceId: string, clientType?: ClientType): string | null {
  const price = PACKAGE_PRICES[serviceId];
  if (!price) return null;
  let text: string;
  if (clientType === 'joint' && price.joint != null) text = usd(price.joint);
  else if (!clientType && price.joint != null && price.joint !== price.individual) text = `from ${usd(price.individual)}`;
  else text = usd(price.individual);
  return price.per ? `${text} ${price.per}` : text;
}

/**
 * Short buy-button label carrying the price, e.g. "Start my trust, $3,500".
 * `verb` overrides the default wording (the service finder uses "Start this package").
 * Returns `fallback` when the service has no single fixed price.
 */
export function buyButtonLabel(serviceId: string, options: { clientType?: ClientType; verb?: string; fallback?: string } = {}): string {
  const priceText = packagePriceText(serviceId, options.clientType);
  const verb = options.verb ?? BUTTON_VERBS[serviceId] ?? 'Start online';
  if (!priceText) return options.fallback ?? verb;
  return `${verb}, ${priceText}`;
}

export function hasAttorneyPromise(serviceId: string): boolean {
  return ATTORNEY_PROMISE_SERVICE_IDS.includes(serviceId);
}

/**
 * True when the button for this service (and tier) hands off to the portal, where
 * the 10% applies. /start-online/ fallbacks and consultation-only services are excluded.
 */
export function hasOnlineDiscount(serviceId: string, clientType?: ClientType): boolean {
  return ONLINE_DISCOUNT_LINE !== '' && portalHandoffUrl(serviceId, { clientType }) !== null;
}
