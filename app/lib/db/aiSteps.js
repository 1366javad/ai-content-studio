import { createClient } from "@/app/lib/supabase/server";

export async function createAiStep({
  runId,
  stepName,
  agentName,
  providerName,
  input = {},
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ai_steps")
    .insert({
      run_id: runId,

      step_name: stepName,

      agent_name: agentName,

      provider_name: providerName,

      status: "running",

      input,

      started_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function completeAiStep({ stepId, output }) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ai_steps")
    .update({
      status: "completed",
      output,
      completed_at: new Date().toISOString(),
    })
    .eq("id", stepId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function failAiStep({ stepId, errorMessage }) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ai_steps")
    .update({
      status: "failed",
      error: errorMessage,
      completed_at: new Date().toISOString(),
    })
    .eq("id", stepId)
    .select()
    .single();

  if (error) throw error;

  return data;
}
