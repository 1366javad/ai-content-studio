import { createBrandMemory, getBrandMemories } from "@/app/lib/db/brandMemory";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const projectId = searchParams.get("projectId");

    if (!projectId) {
      return Response.json(
        {
          error: "projectId is required",
        },
        {
          status: 400,
        },
      );
    }

    const memories = await getBrandMemories(projectId);

    return Response.json({
      success: true,
      memories,
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

    const memory = await createBrandMemory({
      user_id: body.userId,
      project_id: body.projectId,
      title: body.title,
      content: body.content,
      memory_type: body.memoryType || "brand_voice",
      metadata: body.metadata || {},
    });

    return Response.json({
      success: true,
      memory,
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
