import {
  getProjectById,
  updateProject,
  deleteProject,
} from "@/app/lib/db/projects";

export async function GET(request, context) {
  try {
    const { projectId } = await context.params;

    const project = await getProjectById(projectId);

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

export async function PATCH(request, context) {
  try {
    const { projectId } = await context.params;

    const body = await request.json();

    const project = await updateProject(projectId, body);

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

export async function DELETE(request, context) {
  try {
    const { projectId } = await context.params;

    await deleteProject(projectId);

    return Response.json({
      success: true,
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
