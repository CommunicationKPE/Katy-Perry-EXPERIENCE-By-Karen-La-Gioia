import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ixbdrboucavhgezkcwud.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4YmRyYm91Y2F2aGdlemtjd3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODk1MTUsImV4cCI6MjA4MDY2NTUxNX0.DM4no2u5hMZZzgTehCgEpk6OOVH4gCa4GMNjE7MsWaY";

export const supabase = createClient(supabaseUrl, supabaseKey);
