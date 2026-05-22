import { getProjectById } from "@/app/lib/mock/projects";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { projectId } = context.params;

  const project = getProjectById(projectId);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
