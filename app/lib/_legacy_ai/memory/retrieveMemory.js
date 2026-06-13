import { getBrandMemories } from "@/lib/db/brandMemory";

export async function retrieveMemory(projectId) {
  const memories = await getBrandMemories(projectId);

  return memories || [];
}
