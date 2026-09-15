import { createElement, type ReactNode } from 'react';

/** Test stub for next/link - renders a plain anchor. */
export default function Link({
  href,
  children,
  prefetch: _prefetch,
  replace: _replace,
  scroll: _scroll,
  shallow: _shallow,
  passHref: _passHref,
  legacyBehavior: _legacyBehavior,
  ...rest
}: {
  href: string | { pathname?: string };
  children?: ReactNode;
  [key: string]: unknown;
}) {
  const resolved = typeof href === 'string' ? href : href?.pathname ?? '#';
  return createElement('a', { href: resolved, ...rest }, children);
}
