import { MongoClient, Db } from 'mongodb';

const dbName = process.env.MONGODB_DB || 'illinoisestatelaw';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
  // eslint-disable-next-line no-var
  var _mongoConnected: boolean | undefined;
}

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not set');

  let client: MongoClient;

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(uri);
      global._mongoConnected = false;
    }
    client = global._mongoClient;
    if (!global._mongoConnected) {
      await client.connect();
      global._mongoConnected = true;
    }
  } else {
    client = new MongoClient(uri);
    await client.connect();
  }

  return client.db(dbName);
}
