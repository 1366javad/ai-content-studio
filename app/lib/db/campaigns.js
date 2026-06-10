import { createClient } from "@/app/lib/supabase/server";

export async function getCampaigns(userId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("getCampaigns error:", error);
    return [];
  }

  return data || [];
}

export async function getCampaignById(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .eq("id", campaignId)
    .single();

  if (error) {
    console.error("getCampaignById error:", error);
    return null;
  }

  return data;
}
