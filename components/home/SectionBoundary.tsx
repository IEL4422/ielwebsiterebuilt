'use client';

import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = {
  /** Name used in the server log when this section is skipped. */
  name: string;
  children: ReactNode;
  /** Rendered instead of the section when it fails. Defaults to nothing. */
  fallback?: ReactNode;
};

type State = { failed: boolean };

/**
 * Renders `null` (or `fallback`) instead of letting one section take the whole
 * page down.
 *
 * app/error.tsx and app/global-error.tsx did not fire during the 6 September
 * 2026 homepage outage because no exception ever reached the client: the render
 * failed server-side and Next answered with an empty 304. This boundary is the
 * belt to that braces - a render error inside a wrapped subtree is contained to
 * that subtree, and the rest of the page still paints.
 */
export class SectionBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      `[SectionBoundary] section "${this.props.name}" failed to render and was skipped:`,
      error,
      info.componentStack
    );
  }

  render() {
    if (this.state.failed) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}
