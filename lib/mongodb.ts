import { MongoClient, Db } from 'mongodb';

const dbName = process.env.MONGODB_DB || 'illinoisestatelaw';

// Single shared client — reused across requests in both dev and prod
declare global {
  // eslint-disable-next-line no-var
  var _mongo: { client: MongoClient; connected: boolean } | undefined;
}

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');

  if (!global._mongo) {
    global._mongo = { client: new MongoClient(uri), connected: false };
  }

  if (!global._mongo.connected) {
    await global._mongo.client.connect();
    global._mongo.connected = true;
  }

  return global._mongo.client.db(dbName);
}
