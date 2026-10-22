import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

/** True only when both public Supabase settings are present. */
export const SUPABASE_ENABLED = Boolean(url && anonKey);

let client: SupabaseClient | null = null;

/**
 * Browser Supabase client. The anon key is public by design; all data is
 * protected by row level security (see supabase/migrations/0001_accounts.sql).
 * Never put the service-role key in this project's client code or NEXT_PUBLIC_ variables.
 */
export function getSupabase(): SupabaseClient | null {
  if (!SUPABASE_ENABLED) return null;
  if (!client) {
    client = createClient(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });
  }
  return client;
}

export const PENDING_ROADMAP_KEY = "sf_pending_roadmap";
