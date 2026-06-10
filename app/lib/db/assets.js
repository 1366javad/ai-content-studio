import { createClient } from "@/app/lib/supabase/server";

export async function getCampaignAssets(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_assets")
    .select("*")
    .eq("campaign_id", campaignId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}
