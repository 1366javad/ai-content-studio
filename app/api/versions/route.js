import { createVersion } from "@/app/lib/db/versions";

export async function POST(request) {
  try {
    const body = await request.json();

    const version = await createVersion({
      document_id: body.documentId,

      content: body.content,

      metadata: body.metadata || {},
    });

    return Response.json({
      success: true,
      version,
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
