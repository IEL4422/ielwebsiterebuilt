import { describe, it, expect } from 'vitest';
import { MONGO_CLIENT_OPTIONS } from '@/lib/mongodb';

/**
 * On 6 September 2026 the homepage went dark for ~2.5 days because a data
 * dependency failed inside the render. The fix for that page was to remove the
 * dependency. The remaining database-backed pages (/learning-center,
 * /learning-center/[slug], /blog/[slug]) still query MongoDB during render, and
 * they all catch errors — but catching does not help if the driver simply never
 * answers. The MongoDB driver waits 30s for server selection by default, and a
 * page that renders in 30s is a page that is down.
 *
 * These assertions exist so that the client-level bound cannot be silently
 * dropped or relaxed to a value a visitor would notice.
 */
describe('MongoDB client timeouts', () => {
  it('bounds server selection well below a visitor-visible delay', () => {
    expect(MONGO_CLIENT_OPTIONS.serverSelectionTimeoutMS).toBeTypeOf('number');
    expect(MONGO_CLIENT_OPTIONS.serverSelectionTimeoutMS).toBeGreaterThan(0);
    expect(MONGO_CLIENT_OPTIONS.serverSelectionTimeoutMS).toBeLessThanOrEqual(5000);
  });

  it('bounds the initial connection attempt', () => {
    expect(MONGO_CLIENT_OPTIONS.connectTimeoutMS).toBeTypeOf('number');
    expect(MONGO_CLIENT_OPTIONS.connectTimeoutMS).toBeGreaterThan(0);
    expect(MONGO_CLIENT_OPTIONS.connectTimeoutMS).toBeLessThanOrEqual(5000);
  });

  it('bounds a socket that opens but never answers', () => {
    expect(MONGO_CLIENT_OPTIONS.socketTimeoutMS).toBeTypeOf('number');
    expect(MONGO_CLIENT_OPTIONS.socketTimeoutMS).toBeGreaterThan(0);
    expect(MONGO_CLIENT_OPTIONS.socketTimeoutMS).toBeLessThanOrEqual(15000);
  });
});
