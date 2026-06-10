import Content from "@/components/campaing/Content";
import { getCampaigns } from "@/app/lib/db/campaigns";
import { getContentTypes } from "@/app/lib/db/content";
import { createClient } from "@/app/lib/supabase/server";

export default async function ContentPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const campaigns = await getCampaigns(user.id);
  const contentTypes = await getContentTypes();

  return <Content campaigns={campaigns} contentTypes={contentTypes} />;
}
