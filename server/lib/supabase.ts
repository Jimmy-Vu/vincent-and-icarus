import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

let supabase: SupabaseClient | undefined;
const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (supabaseURL !== undefined && supabaseKey !== undefined) {
  supabase = createClient(supabaseURL, supabaseKey)
} else {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY environment variable');
}

export default supabase;
