import { retrieveMemory } from "./retrieveMemory";

export async function buildBrandMemoryContext(projectId) {
  const memories = await retrieveMemory(projectId);

  if (!memories?.length) {
    return "";
  }

  return memories
    .map((memory) => `TITLE: ${memory.title}\nCONTENT: ${memory.content}`)
    .join("\n\n");
}
