import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateFromAPP = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const emailjs = {
  serviceID,
  templateFromAPP,
  publicKey,
};
