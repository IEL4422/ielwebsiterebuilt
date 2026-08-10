'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Segment-level error boundary for the App Router.
 *
 * Rendered INSIDE the root layout (so no <html>/<body> here) whenever a page or
 * a component below it throws during render. Together with app/global-error.tsx
 * this guarantees that a single client-side exception degrades to a usable
 * fallback instead of a blank white page.
 *
 * Inline styles only, so the fallback never depends on the failed code path.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('[route-error]', error);
  }, [error]);

  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
        <h1
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: '#33414E',
            margin: '0 0 12px',
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.6,
            color: '#547298',
            margin: '0 0 24px',
          }}
        >
          This page hit an unexpected error. You can try again, or head back to
          the homepage.
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
          <Link
            href="/"
            style={{
              background: '#33414E',
              color: '#ffffff',
              borderRadius: 9999,
              padding: '12px 22px',
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
            }}
          >
            Back to homepage
          </Link>
        </div>

        {(error?.message || error?.digest) && (
          <details
            style={{
              marginTop: 24,
              textAlign: 'left',
              color: '#94a3b8',
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
    </section>
  );
}
