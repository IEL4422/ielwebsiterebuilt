import { createElement } from 'react';

/** Test stub for next/image - renders a plain img, dropping Next-only props. */
export default function Image({
  src,
  alt,
  fill: _fill,
  priority: _priority,
  quality: _quality,
  loader: _loader,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  sizes: _sizes,
  loading: _loading,
  ...rest
}: {
  src: string | { src?: string };
  alt?: string;
  [key: string]: unknown;
}) {
  const resolved = typeof src === 'string' ? src : src?.src ?? '';
  return createElement('img', { src: resolved, alt: alt ?? '', ...rest });
}
