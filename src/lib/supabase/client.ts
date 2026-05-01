import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || !supabaseUrl.startsWith('http')) {
    console.warn("Supabase credentials missing or invalid. Check your .env.local file.");
    return null as any;
  }

  return createBrowserClient(supabaseUrl, supabaseKey);
}
