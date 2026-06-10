import { createClient } from "@/app/lib/supabase/server";
import { getCampaigns } from "@/app/lib/db/campaigns";
import Campaigns from "@/components/campaing/Campaigns";

export default async function CampaignPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const campaigns = user ? await getCampaigns(user.id) : [];

  return <Campaigns campaigns={campaigns} />;
}
