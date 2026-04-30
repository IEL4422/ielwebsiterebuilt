/**
 * One-time migration: Supabase → MongoDB
 *
 * Required env vars (set before running):
 *   SUPABASE_URL            e.g. https://ipfposyjkgealvpnjtyy.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY  (from Supabase dashboard → Project Settings → API)
 *   MONGODB_URI             (from MongoDB Atlas → Connect → Drivers)
 *   MONGODB_DB              database name, e.g. "illinoisestatelaw"
 *
 * Run:
 *   node scripts/migrate-supabase-to-mongo.js
 */

const { MongoClient } = require('mongodb');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB  = process.env.MONGODB_DB || 'illinoisestatelaw';

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}
if (!MONGODB_URI) {
  console.error('Missing MONGODB_URI');
  process.exit(1);
}

// ── Supabase REST helper ────────────────────────────────────────────────────

async function fetchAll(table) {
  const rows = [];
  let from = 0;
  const PAGE = 1000;

  while (true) {
    const url = `${SUPABASE_URL}/rest/v1/${table}?select=*&order=created_at.asc&offset=${from}&limit=${PAGE}`;
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'count=exact',
      },
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Supabase error on ${table}: ${res.status} ${txt}`);
    }

    const page = await res.json();
    if (!page.length) break;
    rows.push(...page);
    if (page.length < PAGE) break;
    from += PAGE;
  }

  return rows;
}

// ── Transform helpers ───────────────────────────────────────────────────────

function toDate(v) {
  return v ? new Date(v) : null;
}

function transformGuide(r) {
  return {
    _id: r.id,           // keep Supabase UUID as _id string
    title: r.title,
    description: r.description,
    category: r.category,
    slug: r.slug,
    content: r.content || null,
    createdAt: toDate(r.created_at),
  };
}

function transformBlogPost(r) {
  return {
    _id: r.id,
    title: r.title,
    slug: r.slug,
    excerpt: r.excerpt || null,
    content: r.content || null,
    featuredImage: r.featured_image || null,
    publishedDate: toDate(r.published_date),
    author: r.author || 'Illinois Estate Law',
    metaDescription: r.meta_description || null,
    internalLinks: r.internal_links || null,
    topic: r.topic || 'Estate Planning',
    createdAt: toDate(r.created_at),
    updatedAt: toDate(r.updated_at),
  };
}

function transformServicePurchase(r) {
  return {
    _id: r.id,
    clientName: r.client_name,
    clientEmail: r.client_email,
    clientPhone: r.client_phone || null,
    serviceType: r.service_type,
    serviceName: r.service_name,
    servicePrice: r.service_price,
    clientType: r.client_type,
    agreementSignature: r.agreement_signature || null,
    agreementSignedAt: toDate(r.agreement_signed_at),
    stripeSessionId: r.stripe_session_id || null,
    agreementSigned: r.agreement_signed || false,
    stripePaymentStatus: r.stripe_payment_status || 'pending',
    addOns: r.add_ons || null,
    createdAt: toDate(r.created_at),
    updatedAt: toDate(r.updated_at),
  };
}

// ── Main ────────────────────────────────────────────────────────────────────

async function migrate() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(MONGODB_DB);

    const tables = [
      { name: 'guides',            transform: transformGuide,           collection: 'guides' },
      { name: 'blog_posts',        transform: transformBlogPost,        collection: 'blogPosts' },
      { name: 'service_purchases', transform: transformServicePurchase, collection: 'servicePurchases' },
    ];

    for (const { name, transform, collection } of tables) {
      console.log(`\nFetching ${name} from Supabase...`);
      const rows = await fetchAll(name);
      console.log(`  → ${rows.length} rows`);

      if (!rows.length) continue;

      const docs = rows.map(transform);
      const col  = db.collection(collection);

      // Upsert so re-running the script is safe
      const ops = docs.map(doc => ({
        replaceOne: { filter: { _id: doc._id }, replacement: doc, upsert: true },
      }));

      const result = await col.bulkWrite(ops, { ordered: false });
      console.log(`  → inserted: ${result.upsertedCount}, updated: ${result.modifiedCount}`);
    }

    // ── Indexes ─────────────────────────────────────────────────────────────
    console.log('\nCreating indexes...');

    await db.collection('guides').createIndexes([
      { key: { slug: 1 }, unique: true },
      { key: { category: 1 } },
    ]);

    await db.collection('blogPosts').createIndexes([
      { key: { slug: 1 }, unique: true },
      { key: { publishedDate: -1 } },
      { key: { topic: 1 } },
    ]);

    await db.collection('servicePurchases').createIndexes([
      { key: { clientEmail: 1 } },
      { key: { stripeSessionId: 1 } },
      { key: { createdAt: -1 } },
    ]);

    console.log('\nMigration complete.');
  } finally {
    await client.close();
  }
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
