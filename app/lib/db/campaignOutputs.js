import { createClient } from "@/app/lib/supabase/server";

export async function createCampaignOutput({
  campaignId,
  module,
  type,
  title,
  prompt = null,
  content,
  metadata = {},
}) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaign_outputs")
    .insert({
      campaign_id: campaignId,

      module,

      type,

      title,

      prompt,

      content,

      metadata,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}
