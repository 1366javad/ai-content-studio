import { createClient } from "@/app/lib/supabase/server";

export async function getDashboardData(userId) {
  const supabase = await createClient();

  const { data: campaigns } = await supabase
    .from("campaigns")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  const safeCampaigns = campaigns || [];

  return {
    campaigns: safeCampaigns,

    totalCampaigns: safeCampaigns.length,

    totalContent: safeCampaigns.reduce(
      (s, c) => s + (c.generated_content_count || 0),
      0,
    ),

    totalImages: safeCampaigns.reduce(
      (s, c) => s + (c.generated_images_count || 0),
      0,
    ),

    totalVideos: safeCampaigns.reduce(
      (s, c) => s + (c.generated_videos_count || 0),
      0,
    ),

    totalExports: safeCampaigns.reduce((s, c) => s + (c.exports_count || 0), 0),

    recentCampaigns: safeCampaigns.slice(0, 6),
  };
}
