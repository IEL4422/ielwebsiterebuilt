/**
 * Google Ads conversion tracking.
 *
 * The gtag.js loader and the AW- config live in app/layout.tsx, alongside the
 * existing GA4 (G-DDLGV7ZF0Z) config — one loader, two destinations.
 */

/** Google Ads conversion ID for Illinois Estate Law. */
export const GOOGLE_ADS_ID = 'AW-17838400184';

/** Conversion action "IEL — Contact Form Lead" (Primary, count = One). */
export const CONTACT_FORM_CONVERSION = 'AW-17838400184/XKXvCOTE0c8cELjFgbpC';

export const CONTACT_FORM_CONVERSION_VALUE = 1.0;
export const CURRENCY = 'USD';

/**
 * Fire a Google Ads conversion. Safe to call anywhere: if gtag hasn't loaded
 * (blocked, offline, SSR) this is a silent no-op and never breaks the form.
 */
export function trackGoogleConversion(
  sendTo: string = CONTACT_FORM_CONVERSION,
  value: number = CONTACT_FORM_CONVERSION_VALUE
): void {
  if (typeof window === 'undefined') return;
  try {
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'function') return;
    gtag('event', 'conversion', {
      send_to: sendTo,
      value,
      currency: CURRENCY,
    });
  } catch (err) {
    console.warn('[gtag] conversion failed', err);
  }
}
