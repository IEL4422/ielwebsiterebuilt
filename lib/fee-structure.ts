/**
 * CANONICAL FEE-STRUCTURE STATEMENT.
 *
 * The firm's fee structure is a property of the MATTER POSTURE (contested vs.
 * uncontested), NOT of the practice area. This distinction is not cosmetic and
 * getting it wrong is expensive in both directions:
 *
 *   - Say "probate is hourly" and you misrepresent the firm's single most common
 *     offering (the uncontested Standard Probate flat-fee package) and scare off
 *     the most common client.
 *   - Say "no hourly billing, ever" and you are stating something that is false,
 *     on a law firm's website, about how that law firm charges money.
 *
 * The truth is the fork:
 *
 *   UNCONTESTED  -> FLAT FEE. Scope is knowable: a finite list of documents and
 *                   a finite list of appearances. Includes uncontested probate
 *                   AND uncontested guardianship.
 *   CONTESTED    -> STARTS WITH A $5,000 FLAT FEE for a defined initial scope.
 *                   Additional flat fees apply only when listed litigation
 *                   events actually occur under a written engagement.
 *
 * Anywhere the site makes a claim about how the firm bills, it must import from
 * here. Do not restate it in prose — that is how "No hourly billing, ever" ended
 * up live on the homepage while the services page said "NOT A FLAT FEE."
 */

/** The asterisk footnote. Use wherever the "100% Flat-Fee*" claim appears. */
export const FEE_STRUCTURE_NOTE =
  'Flat fees on all standard matters, including uncontested probate and uncontested guardianship. ' +
  'Contested matters start with a $5,000 flat fee for a defined initial scope—not the entire contest. ' +
  'Contested cases may incur additional flat fees only when listed litigation events actually occur.';

/** Short form, for tight UI (badges, bars, cards). */
export const FEE_STRUCTURE_NOTE_SHORT =
  'Contested matters start with a $5,000 initial flat fee and may incur additional event-based flat fees.';

/** Where the asterisk should link. */
export const FEE_STRUCTURE_HREF = '/services-pricing/';

export type MatterPosture = 'uncontested' | 'contested';
export type FeeStructure = 'flat' | 'staged-flat';

/** Fee structure is determined by posture, not by practice area. */
export function feeStructureFor(posture: MatterPosture): FeeStructure {
  return posture === 'contested' ? 'staged-flat' : 'flat';
}

export const FEE_STRUCTURE_LABEL: Record<FeeStructure, string> = {
  flat: 'Flat fee',
  'staged-flat': 'Starts with a flat fee',
};
