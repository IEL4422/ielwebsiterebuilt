import { defineConfig } from 'vitest/config';
import path from 'node:path';

/**
 * Test config for the homepage resilience suite.
 *
 * Deliberately dependency-light: no @vitejs/plugin-react, no jsdom. The suite
 * renders React to a static string in plain Node, so `vitest` is the only extra
 * package CI has to install. Nothing here is added to package.json's
 * dependencies, so package-lock.json stays in sync and the Railway build (which
 * runs `npm ci`) cannot be broken by the test setup.
 *
 * next/script, next/link and next/image are aliased to trivial stubs so the page
 * tree can be rendered outside the Next runtime.
 */
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: [
      { find: /^next\/script$/, replacement: path.resolve(__dirname, 'test/stubs/next-script.tsx') },
      { find: /^next\/link$/, replacement: path.resolve(__dirname, 'test/stubs/next-link.tsx') },
      { find: /^next\/image$/, replacement: path.resolve(__dirname, 'test/stubs/next-image.tsx') },
      { find: /^@\/(.*)$/, replacement: path.resolve(__dirname, './$1') },
    ],
  },
  test: {
    environment: 'node',
    include: ['test/**/*.test.{ts,tsx}'],
    testTimeout: 20000,
  },
});
