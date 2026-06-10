import { getCampaigns } from "@/app/lib/db/campaigns";
import { createClient } from "@/app/lib/supabase/server";

import SEO from "@/components/campaing/SEO";

export default async function SEOPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const campaigns = await getCampaigns(user.id);
  return <SEO campaigns={campaigns} />;
}
