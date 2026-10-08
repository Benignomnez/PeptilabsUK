import { createClient } from '@supabase/supabase-js'

// Falls back to a placeholder instead of throwing at import time when the
// env vars are missing — createClient() validates eagerly, and this module
// is imported by statically prerendered routes, so a missing/misconfigured
// env var would otherwise crash the entire build instead of just failing
// the query that uses it (already handled with a .catch(() => []) fallback).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn('[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set — Supabase calls will fail until they are configured.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
