import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

/**
 * Resolves async React Server Components inside a tree so the whole thing can
 * be handed to react-dom/server.
 *
 * react-dom/server in React 18 cannot render a component that returns a
 * promise, which is exactly what an async server component does. This walks the
 * tree, invokes only the async function components, awaits their output and
 * splices the result back in. Synchronous components - including every 'use
 * client' component on the homepage - are left untouched so React renders them
 * normally with working hooks.
 *
 * If an async component is ever missed, react-dom throws "Objects are not valid
 * as a React child (found: [object Promise])" and the test fails loudly rather
 * than quietly asserting less than it claims to.
 */

function isAsyncComponent(type: unknown): type is (props: unknown) => Promise<ReactNode> {
  if (typeof type !== 'function') return false;
  const proto = (type as { prototype?: { isReactComponent?: unknown } }).prototype;
  if (proto && proto.isReactComponent) return false; // class component
  const tag = (type as { constructor?: { name?: string } }).constructor?.name;
  if (tag === 'AsyncFunction') return true;
  // Belt and braces for transpilers that erase the AsyncFunction constructor.
  return /^\s*async\s+function|^\s*async\s*\(/.test(Function.prototype.toString.call(type));
}

export async function resolveServerTree(node: ReactNode): Promise<ReactNode> {
  if (Array.isArray(node)) {
    return Promise.all(node.map((child) => resolveServerTree(child)));
  }

  if (!isValidElement(node)) {
    return node;
  }

  const element = node as ReactElement<{ children?: ReactNode }>;

  if (isAsyncComponent(element.type)) {
    const output = await (element.type as (props: unknown) => Promise<ReactNode>)(element.props);
    return resolveServerTree(output);
  }

  const children = element.props?.children;
  if (children === undefined || children === null) {
    return element;
  }

  const resolvedChildren = await resolveServerTree(children);
  return cloneElement(element, undefined, resolvedChildren);
}
