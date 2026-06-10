import { createClient } from "@/app/lib/supabase/server";

const supabase = createClient();

export async function getUsageStats(userId) {
  const { data, error } = await supabase
    .from("ai_usage")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw error;
  }

  return data || [];
}

export async function createUsageEvent(payload) {
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
