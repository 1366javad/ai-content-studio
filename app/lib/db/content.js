import { createClient } from "@/app/lib/supabase/server";

export async function getCampaignContent(campaignId) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_outputs")
    .select("*")
    .eq("campaign_id", campaignId)
    .eq("module", "content")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}

export async function createContentOutput({
  campaignId,
  type,
  prompt,
  content,
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_outputs")
    .insert({
      campaign_id: campaignId,
      module: "content",
      type,
      prompt,
      content,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getContentTypes() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("content_types")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}
