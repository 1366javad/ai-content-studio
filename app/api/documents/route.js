import { createDocument } from "@/app/lib/db/documents";
import { createClient } from "@/app/lib/supabase/server";

function countWords(text = "") {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
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
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const document = await createDocument({
      user_id: user.id,
      project_id: body.projectId,
      title: body.title || "Untitled Document",
      content: body.content || "",
      content_type: body.contentType || "generated_content",
      ai_prompt: body.aiPrompt || "",
      word_count: countWords(body.content || ""),
      status: body.status || "draft",
    });

    return Response.json({ success: true, document });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
