import { getDashboardData } from "@/app/lib/db/dashboard";
import { createClient } from "@/app/lib/supabase/server";
import DashboardView from "@/components/dashboard/DashboardView";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("DASHBOARD USER:", user?.email);

  const dashboardData = await getDashboardData(user.id);

  return <DashboardView dashboardData={dashboardData} />;
}
