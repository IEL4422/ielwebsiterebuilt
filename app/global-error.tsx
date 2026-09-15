'use client';

import { useEffect } from 'react';

/**
 * Root-level error boundary for the App Router.
 *
 * Next.js renders this (REPLACING the root layout, so it must ship its own
 * <html>/<body>) whenever an error is thrown in the root layout or escapes the
 * segment-level app/error.tsx boundary. Before this file existed the app had no
 * error boundary at all, so any uncaught client-side exception during render or
 * hydration unmounted the React tree and left a BLANK WHITE PAGE across the
 * whole site. This reproduced on iOS Safari/Chrome (WebKit) while desktop
 * Chrome (Blink) rendered normally.
 *
 * Styling is intentionally inline (no Tailwind, no imported components) so the
 * fallback can never depend on the same code path that failed.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the real error so it can be captured via Safari Web Inspector on
    // an iPhone (Settings > Safari > Advanced > Web Inspector, then connect to a Mac).
    // eslint-disable-next-line no-console
    console.error('[global-error]', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          boxSizing: 'border-box',
          background: '#232D36',
          color: '#ffffff',
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px' }}>
            Illinois Estate Law
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 24px',
            }}
          >
            Something went wrong while loading this page. Please try again, or
            reach us directly and we&rsquo;ll help right away.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => reset()}
              style={{
                background: '#7E9CC0',
                color: '#ffffff',
                border: 0,
                borderRadius: 9999,
                padding: '12px 22px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <a
              href="tel:3123730731"
              style={{
                background: 'transparent',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.8)',
                borderRadius: 9999,
                padding: '10px 22px',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Call (312) 373-0731
            </a>
          </div>

          {(error?.message || error?.digest) && (
            <details
              style={{
                marginTop: 24,
                textAlign: 'left',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 12,
              }}
            >
              <summary style={{ cursor: 'pointer' }}>Technical details</summary>
              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  marginTop: 8,
                }}
              >
                {error?.message}
                {error?.digest ? `\n\nReference: ${error.digest}` : ''}
              </pre>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}
