/**
 * Booking / scheduling links — Illinois Estate Law.
 *
 * ALL links are TEAM links under the Lunacal team workspace
 * `schedule.illinoisestatelaw.com/team/illinois-estate-law/`. NEVER use a
 * personal-workspace link (e.g. `schedule.illinoisestatelaw.com/illinoisestatelaw/…`)
 * or an individual attorney's personal event page.
 *
 * Slugs verified 2026-07-16 directly against the live Lunacal team booking page
 * (the team's "Initial Consultation" event-type list). Do not invent or alter
 * these URLs; each consultation type routes to its correct team event so the
 * round-robin/assignment and intake are scoped correctly.
 */

const BASE = 'https://schedule.illinoisestatelaw.com/team/illinois-estate-law';

/** Estate planning — the team's general Initial Consultation (round robin). */
export const BOOKING_ESTATE_PLANNING = `${BASE}/initial-consultation`;

/** Real estate — team event "Initial Consultation - Real Estate". */
export const BOOKING_REAL_ESTATE = `${BASE}/initial-consultation-yassmin`;

/** Trust administration — team event "Initial Consultation - Trust Administration". */
export const BOOKING_TRUST_ADMIN = `${BASE}/initial-consultation-trust-administration`;

/** Uncontested / general probate — team event "Initial Consultation Probate". */
export const BOOKING_UNCONTESTED_PROBATE = `${BASE}/initial-consultation-probate`;

/** Contested probate / will contests / estate litigation — team event. */
export const BOOKING_CONTESTED_PROBATE = `${BASE}/initial-consultation-contested-probate`;

/** Guardianship — adult + minor, contested + uncontested — team event. */
export const BOOKING_GUARDIANSHIP = `${BASE}/initial-consultation-guardianship`;

/** The firm's default consultation flow (the on-site selector page). */
export const BOOKING_DEFAULT = 'https://www.illinoisestatelaw.com/book-consultation/';
