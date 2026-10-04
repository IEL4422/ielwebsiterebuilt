/** Prospective fixed-fee policy approved by Mary on October 4, 2026. */
export const FEE_STRUCTURE_NOTE = 'Standard and contested services use fixed fees for a defined scope. Complex matters are screened and quoted one higher fixed fee upfront. Ordinary work within a retained litigation package is included, without stacked charges, extra trial-day fees or hourly conversion. Existing signed engagements are honored.';
export const FEE_STRUCTURE_NOTE_SHORT = 'Fixed fees for defined work; complex matters require an upfront fixed quote. Existing signed engagements are honored.';
export const FEE_STRUCTURE_HREF = '/services-pricing/#additional-fixed-fees';
export type MatterPosture = 'uncontested' | 'contested';
export type FeeStructure = 'flat' | 'retainer-hourly';
export function feeStructureFor(_posture: MatterPosture): FeeStructure { return 'flat'; }
export const FEE_STRUCTURE_LABEL: Record<FeeStructure,string> = {flat:'Fixed fee','retainer-hourly':'Legacy signed engagement'};
