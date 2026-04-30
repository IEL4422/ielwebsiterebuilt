import type { MongoClient, Db } from 'mongodb';

const dbName = process.env.MONGODB_DB || 'illinoisestatelaw';

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
    global._mongo = { client: new MC(uri), connected: false };
  }

  if (!global._mongo.connected) {
    await global._mongo.client.connect();
    global._mongo.connected = true;
  }

  return global._mongo.client.db(dbName);
}
