import { createClient } from "@/app/lib/supabase/server";

export async function getCampaignVideos(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_outputs")
    .select("*")
    .eq("campaign_id", campaignId)
    .eq("module", "video")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}
export async function getVideoTypes() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("video_types")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error) throw error;

  return data ?? [];
}
