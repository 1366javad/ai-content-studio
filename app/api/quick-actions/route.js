import { createClient } from "@/app/lib/supabase/server";
import { createQuickAction, getQuickActions } from "@/app/lib/db/quickActions";

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
        {
          status: 401,
        },
      );
    }

    const quickActions = await getQuickActions(user.id);

    return Response.json({
      success: true,
      quickActions,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

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
        {
          status: 401,
        },
      );
    }

    const quickAction = await createQuickAction({
      user_id: user.id,

      title: body.title,

      prompt: body.prompt,

      instructions: body.instructions,

      content: body.content,

      language: body.language || "English",

      tone: body.tone || "Professional",

      emoji: body.emoji || "⚡",
    });

    return Response.json({
      success: true,
      quickAction,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
