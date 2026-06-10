import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export async function createAiStep(payload) {
  const { data, error } = await supabase
    .from("ai_steps")
    .insert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateAiStep(stepId, updates) {
  const { data, error } = await supabase
    .from("ai_steps")
    .update(updates)
    .eq("id", stepId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getStepsByRun(runId) {
  const { data, error } = await supabase
    .from("ai_steps")
    .select("*")
    .eq("run_id", runId)
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data || [];
}
