import { createClient } from "@supabase/supabase-js";

// For client-side usage, Next.js replaces process.env.NEXT_PUBLIC_* at build time
// We need to ensure these are not empty strings
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === '' || supabaseAnonKey === '') {
  console.error('Supabase URL:', supabaseUrl ? 'present' : 'missing');
  console.error('Supabase Key:', supabaseAnonKey ? 'present' : 'missing');
  throw new Error("Missing Supabase environment variables. Check .env file and restart dev server.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
