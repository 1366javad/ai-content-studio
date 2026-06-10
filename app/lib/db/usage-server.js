import { createClient } from "@/app/lib/supabase/server";

export async function createUsageEvent(payload) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ai_usage")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
