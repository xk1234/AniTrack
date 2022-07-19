import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://bvdfbzafkqrigsrqsvul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZGZiemFma3FyaWdzcnFzdnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc4NjU0NDQsImV4cCI6MTk3MzQ0MTQ0NH0.r8wEKoUqgiDbwMGqcrvF53gsFan0pWoaD8LCfKztDVQ"
);
