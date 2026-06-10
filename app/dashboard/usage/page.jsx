import { createClient } from "@/app/lib/supabase/server";
import UsageView from "@/components/dashboard/UsageView";

export default async function UsagePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: usage } = await supabase
    .from("ai_usage")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  const stats = {
    totalRequests: usage?.length || 0,

    totalTokens:
      usage?.reduce((sum, item) => sum + (item.tokens_used || 0), 0) || 0,

    totalCost:
      usage?.reduce((sum, item) => sum + Number(item.cost || 0), 0) || 0,
  };

  return <UsageView usage={usage || []} stats={stats} />;
}
