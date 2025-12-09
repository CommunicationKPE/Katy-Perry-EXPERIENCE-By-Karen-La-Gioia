import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const serviceID = "service_dn2i078";
const templateFromAPP = "template_0ktsajm";
const templateAutoReply = "template_yfs6d2a";
const publicKey = "udrPtWt6rj3Nf0ltC";

export const supabase = createClient(supabaseUrl, supabaseKey);
export const emailjs = {
  serviceID,
  templateFromAPP,
  templateAutoReply,
  publicKey,
};
