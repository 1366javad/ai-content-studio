import { createProject, getProjects } from "@/app/lib/db/projects";
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
        {
          status: 401,
        },
      );
    }

    const projects = await getProjects(user.id);

    return Response.json({
      success: true,
      projects,
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

    const project = await createProject({
      user_id: user.id,

      title: body.title,

      desc: body.desc || "",

      source: body.source || "project",

      status: body.status || "draft",

      word_count: 0,

      starred: false,
    });

    return Response.json({
      success: true,
      project,
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
