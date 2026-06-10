import { createClient } from "@/app/lib/supabase/server";

export async function getUserSettings(userId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
}

export async function updateUserSettings(userId, payload) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("profiles")
    .update({
      preferred_model: payload.preferredModel,
      temperature: payload.temperature,
      max_tokens: payload.maxTokens,
      ai_suggestions_enabled: payload.suggestionsEnabled,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}
