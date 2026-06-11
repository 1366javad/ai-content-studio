import Templates from "@/components/campaing/Templates";

import { getTemplates } from "@/app/lib/db/templates";
import { createClient } from "@/app/lib/supabase/server";
import { getDashboardData } from "@/app/lib/db/dashboard";

export default async function TemplatesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const templates = await getTemplates(user.id);
    const dashboardData = await getDashboardData(user.id);

  return <Templates initialTemplates={templates} dashboardData={dashboardData}/>;
}
