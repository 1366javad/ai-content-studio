import { addProjects, getAllProjects } from "@/app/lib/db/projects";

export async function GET() {
  const projects = await getAllProjects();

  return Response.json(projects);
}

export async function POST(req) {
  const body = await req.json();

  const project = await addProjects(body.name);

  return Response.json(project);
}
