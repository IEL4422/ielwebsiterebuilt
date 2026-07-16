/**
 * Booking / scheduling links. Provided verbatim by the firm 2026-07-15.
 *
 * Do not invent or alter these URLs. Each practice area routes to the correct
 * consultation type so the calendar and intake are scoped correctly.
 */

const BASE = 'https://schedule.illinoisestatelaw.com/team/illinois-estate-law';

/* ── CONFIRMED by the firm (provided verbatim 2026-07-15) ─────────────────── */

/** Guardianship — adult + minor, contested + uncontested. CONFIRMED. */
export const BOOKING_GUARDIANSHIP = `${BASE}/initial-consultation-guardianship`;

/** Contested probate / will contests / estate litigation. CONFIRMED. */
export const BOOKING_CONTESTED_PROBATE = `${BASE}/initial-consultation-contested-probate`;

/* ── FOUND IN THE EXISTING SITE (already live in app/book-consultation) ────── */
/* These are the Lunacal slugs the current /book-consultation/ embeds already   */
/* use in production. They are reused here, NOT guessed — but Mary should still */
/* confirm each maps to the intended consultation type before we rely on them   */
/* on outbound CTAs. See the mapping report.                                    */

/** Estate planning — the firm's general initial-consultation calendar. */
export const BOOKING_ESTATE_PLANNING = `${BASE}/initial-consultation`;

/** Uncontested / general probate. (Contested probate has its own link above.) */
export const BOOKING_UNCONTESTED_PROBATE = `${BASE}/initial-consultation-probate`;

/** Real estate — currently Yassmin Koudmani's calendar. CONFIRM slug with Mary. */
export const BOOKING_REAL_ESTATE = `${BASE}/initial-consultation-yassmin`;

/**
 * Trust administration — NO dedicated Lunacal link exists yet; the current site
 * routes trust-administration bookings to the general initial-consultation
 * calendar. NEEDS a dedicated link from Mary. Until then it falls back to the
 * general calendar.
 */
export const BOOKING_TRUST_ADMIN = `${BASE}/initial-consultation`;

/** The firm's default consultation flow (the on-site selector page). */
export const BOOKING_DEFAULT = 'https://www.illinoisestatelaw.com/book-consultation/';
