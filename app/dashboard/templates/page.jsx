import Templates from "@/components/campaing/Templates";

import { getTemplates } from "@/app/lib/db/templates";
import { createClient } from "@/app/lib/supabase/server";

export default async function TemplatesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const templates = await getTemplates(user.id);

  return <Templates initialTemplates={templates} />;
}
