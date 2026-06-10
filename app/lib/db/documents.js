import { createClient } from "@/app/lib/supabase/server";

export async function getDocumentById(documentId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("id", documentId)
    .single();

  if (error) throw error;
  return data;
}

export async function getDocumentsByProject(projectId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("project_id", projectId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function createDocument(payload) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("documents")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateDocument(documentId, updates) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("documents")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", documentId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteDocument(documentId) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("documents")
    .delete()
    .eq("id", documentId);

  if (error) throw error;
  return true;
}
