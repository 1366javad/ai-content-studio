import { createClient } from "@/app/lib/supabase/server";

export async function getResearch(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_research")
    .select("*")
    .eq("campaign_id", campaignId)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function createResearch(campaignId, values = {}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_research")
    .insert({
      campaign_id: campaignId,
      ...values,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function updateResearch(campaignId, values = {}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_research")
    .update({
      ...values,
      updated_at: new Date().toISOString(),
    })
    .eq("campaign_id", campaignId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}
