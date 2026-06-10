import { createClient } from "@/app/lib/supabase/server";

export async function createVersion(payload) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("versions")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getVersionsByDocument(documentId) {
  const { data, error } = await supabase
    .from("versions")
    .select("*")
    .eq("document_id", documentId)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data || [];
}
