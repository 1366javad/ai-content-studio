import { createClient } from "@/app/lib/supabase/server";

export async function getProjects(userId) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data || [];
}

export async function getProjectById(projectId) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createProject(payload) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateProject(projectId, updates) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", projectId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteProject(projectId) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", projectId);

  if (error) {
    throw error;
  }

  return true;
}
