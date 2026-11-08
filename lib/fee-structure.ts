import { CONTESTED, usd } from './pricing';

/** The asterisk footnote. Use wherever the "Transparent Pricing*" claim appears. */
export const FEE_STRUCTURE_NOTE =
  'Flat fees for estate planning and uncontested probate. Uncontested adult and minor guardianship require a $5,000 retainer with hourly billing. ' +
  `Contested probate starts with ${usd(CONTESTED.probateInitialFlatFee)} and contested guardianship starts with ${usd(CONTESTED.guardianshipInitialFlatFee)}, each for a defined initial scope, not the entire contest. ` +
  'Contested cases may incur additional flat fees only when listed litigation events actually occur.';

/** Short form, for tight UI (badges, bars, cards). */
export const FEE_STRUCTURE_NOTE_SHORT =
  `Contested probate starts with ${usd(CONTESTED.probateInitialFlatFee)}; contested guardianship starts with ${usd(CONTESTED.guardianshipInitialFlatFee)}. Additional event-based flat fees may apply.`;

/** Where the asterisk should link. */
export const FEE_STRUCTURE_HREF = '/services-pricing/';

export type MatterPosture = 'uncontested' | 'contested';
export type FeeStructure = 'flat' | 'staged-flat' | 'hourly-retainer';

/** Guardianship is hourly unless a separate contested scope applies. */
export function feeStructureFor(posture: MatterPosture, practiceArea?: 'guardianship'): FeeStructure {
  return posture === 'contested' ? 'staged-flat' : practiceArea === 'guardianship' ? 'hourly-retainer' : 'flat';
}

export const FEE_STRUCTURE_LABEL: Record<FeeStructure, string> = {
  flat: 'Flat fee',
  'hourly-retainer': 'Retainer with hourly billing',
  'staged-flat': 'Starts with a flat fee',
};

