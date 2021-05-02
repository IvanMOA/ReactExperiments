import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://yflgjjgcxmwnmtvsftrg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxOTk4NDc3OSwiZXhwIjoxOTM1NTYwNzc5fQ.x6h3cskBJ5BUAB54yMmxj5TMTz7K6aadUGmAvm_vwPU"
);

export const auth = supabase.auth;
