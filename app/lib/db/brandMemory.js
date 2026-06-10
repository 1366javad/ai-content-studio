import { createClient } from "@/app/lib/supabase/server";

export async function createBrandMemory(payload) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("brand_memories")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getBrandMemories(projectId) {
  const { data, error } = await supabase
    .from("brand_memories")
    .select("*")
    .eq("project_id", projectId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data || [];
}
