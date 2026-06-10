import { createBrandMemory } from "@/lib/db/brandMemory";

export async function saveMemory({
  userId,
  projectId,
  title,
  content,
  metadata = {},
}) {
  return createBrandMemory({
    user_id: userId,
    project_id: projectId,
    title,
    content,
    metadata,
  });
}
