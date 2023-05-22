import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | undefined;
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (supabaseURL !== undefined && supabaseKey !== undefined) {
  supabase = createClient(supabaseURL, supabaseKey)
}

export default supabase;
