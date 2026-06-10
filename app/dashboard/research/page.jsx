import Research from "@/components/campaing/Research";

import { getCampaigns } from "@/app/lib/db/campaigns";
import { createClient } from "@/app/lib/supabase/server";

export default async function ResearchPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const campaigns = await getCampaigns(user.id);

  return <Research campaigns={campaigns} />;
}
