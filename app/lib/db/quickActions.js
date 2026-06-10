import { createClient } from "@/app/lib/supabase/server";

export async function createQuickAction(payload) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("quick_actions")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getQuickActions(userId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("quick_actions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data || [];
}
export async function updateQuickAction({
  id,
  user_id,
  title,
  prompt,
  instructions,
  content,
  language,
  tone,
  emoji,
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("quick_actions")
    .update({
      title,
      prompt,
      instructions,
      content,
      language,
      tone,
      emoji,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("user_id", user_id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
