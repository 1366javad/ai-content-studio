import { createClient } from "@/app/lib/supabase/server";

export async function getTemplates(userId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .or(`user_id.eq.${userId},is_system.eq.true`)
    .order("updated_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}
