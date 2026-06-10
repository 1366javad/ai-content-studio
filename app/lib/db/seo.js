import { createClient } from "@/app/lib/supabase/server";

export async function getSEO(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_seo")
    .select("*")
    .eq("campaign_id", campaignId)
    .single();

  if (error) {
    return null;
  }

  return data;
}

export async function createSEO(campaignId, values = {}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_seo")
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

export async function updateSEO(campaignId, values = {}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_seo")
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
