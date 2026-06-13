import { createClient } from "@/app/lib/supabase/server";

export async function createAiRun({
  userId,
  campaignId,
  workflow,
  input = {},
  model = null,
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ai_runs")
    .insert({
      user_id: userId,
      campaign_id: campaignId,
      workflow,
      status: "running",
      current_step: "planner",
      input,
      model,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updateAiRun({ runId, updates }) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ai_runs")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", runId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function completeAiRun({ runId, output }) {
  return updateAiRun({
    runId,
    updates: {
      status: "completed",
      output,
      completed_at: new Date().toISOString(),
    },
  });
}

export async function failAiRun({ runId, errorMessage }) {
  return updateAiRun({
    runId,
    updates: {
      status: "failed",
      error: errorMessage,
      completed_at: new Date().toISOString(),
    },
  });
}
