import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Validate and ensure the environment variables are defined
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || (() => {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
})();

const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || (() => {
    throw new Error('NEXT_PUBLIC_SUPABASE_KEY is not defined');
})();

// Initialize and export the Supabase client
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

