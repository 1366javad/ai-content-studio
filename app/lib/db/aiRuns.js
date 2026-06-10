import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function createAiRun(payload) {
  const { data, error } = await supabase
    .from("ai_runs")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateAiRun(runId, updates) {
  const { data, error } = await supabase
    .from("ai_runs")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", runId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getAiRunById(runId) {
  const { data, error } = await supabase
    .from("ai_runs")
    .select("*")
    .eq("id", runId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
