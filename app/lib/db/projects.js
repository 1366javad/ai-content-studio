import { createProject, getProjects } from "../mock/projects";

export async function getAllProjects() {
  return getProjects();
}

export async function addProjects(name) {
  return createProject(name);
}
