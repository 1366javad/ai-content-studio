import { createClient } from "@/app/lib/supabase/server";

export async function getCampaignCreatives(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_outputs")
    .select("*")
    .eq("campaign_id", campaignId)
    .eq("module", "creative")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function getCreativeTypes() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("creative_asset_types")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
