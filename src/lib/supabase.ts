import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUP_URL;
const supabaseKey = import.meta.env.VITE_APP_SUP_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
