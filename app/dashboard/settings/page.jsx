import SettingsView from "@/components/settings/SettingsView";

import { getUserSettings } from "@/app/lib/db/settings";

import { createClient } from "@/app/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const settings = await getUserSettings(user.id);

  return <SettingsView settings={settings} />;
}
