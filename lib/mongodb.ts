import type { MongoClient, Db, MongoClientOptions } from 'mongodb';

const dbName = process.env.MONGODB_DB || 'illinoisestatelaw';

/**
 * Bound every database call at the client, not at each call site.
 *
 * The driver's defaults are built for long-lived back-end jobs: server
 * selection alone waits 30s before giving up. A server component that awaits
 * getDb() therefore holds the render open for that whole window, and a page
 * that takes 30s to render is, to a visitor, a page that is down — even though
 * every call site already has a try/catch.
 *
 * Setting the timeouts here fixes all callers at once, including the ones that
 * do not wrap their own query in a timeout. These numbers are deliberately far
 * below any human patience threshold: it is better to render the page without
 * the database-backed block than to make the visitor wait for it.
 */
export const MONGO_CLIENT_OPTIONS: MongoClientOptions = {
  // How long to look for a reachable node before failing.
  serverSelectionTimeoutMS: 3000,
  // How long a single TCP connection attempt may take.
  connectTimeoutMS: 3000,
  // How long an idle-but-open socket may block a pending operation.
  socketTimeoutMS: 8000,
};

declare global {
  // eslint-disable-next-line no-var
  var _mongo: { client: MongoClient; connected: boolean } | undefined;
}

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');

  // Lazy require keeps the import off the module-level critical path
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { MongoClient: MC } = require('mongodb') as typeof import('mongodb');

  if (!global._mongo) {
    global._mongo = { client: new MC(uri, MONGO_CLIENT_OPTIONS), connected: false };
  }

  if (!global._mongo.connected) {
    try {
      await global._mongo.client.connect();
      global._mongo.connected = true;
    } catch (err) {
      // Drop the half-open client instead of caching it forever. Without this,
      // one failed connect leaves a client on the global that every later
      // request reuses and that can never succeed, so a transient database
      // blip becomes a permanent one until the service is redeployed.
      const stale = global._mongo;
      global._mongo = undefined;
      try {
        await stale.client.close();
      } catch {
        // Closing a client that never connected can itself throw; ignore it,
        // the original error is the one worth surfacing.
      }
      throw err;
    }
  }

  return global._mongo.client.db(dbName);
}
