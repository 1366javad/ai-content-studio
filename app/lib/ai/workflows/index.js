import { blogWorkflow } from "./blogWorkflow";
import { linkedinWorkflow } from "./linkedinWorkflow";
import { instagramWorkflow } from "./instagramWorkflow";
import { contentPackageWorkflow } from "./contentPackageWorkflow";

export const workflows = {
  blog: blogWorkflow,
  linkedin: linkedinWorkflow,
  instagram: instagramWorkflow,
  content_package: contentPackageWorkflow,
};
export function getWorkflow(workflowId) {
  const workflow = workflows[workflowId];

  if (!workflow) {
    throw new Error(`Workflow "${workflowId}" not found.`);
  }

  return workflow;
}
