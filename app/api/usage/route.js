import { createClient } from "@/app/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return Response.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const { data, error } = await supabase
      .from("ai_usage")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    const totalRequests = data.length;

    const totalTokens = data.reduce(
      (sum, item) => sum + (item.tokens_used || 0),
      0,
    );

    const totalCost = data.reduce(
      (sum, item) => sum + Number(item.cost || 0),
      0,
    );

    return Response.json({
      success: true,

      stats: {
        totalRequests,
        totalTokens,
        totalCost,
      },

      activity: data,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
