import { createClient } from "@/app/lib/supabase/server";

export async function getCampaignAds(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_outputs")
    .select("*")
    .eq("campaign_id", campaignId)
    .eq("module", "ads")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function getAdPlatforms() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("ad_platforms")
    .select(
      `
      *,
      ad_output_types(*)
    `,
    )
    .eq("is_active", true)
    .order("sort_order");

  if (error) throw error;

  return data ?? [];
}
