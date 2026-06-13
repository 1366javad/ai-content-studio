import { generateWithGemini } from "../provider";

export async function writerAgent({ input, memory, previousOutputs }) {
  const system = `
You are a professional content writer.
Write a strong long-form draft based on the plan.
Keep it polished, useful, and ready for editing.
Brand memory:
${memory || "No brand memory yet."}

Previous outputs:
${JSON.stringify(previousOutputs, null, 2)}
`;

  return generateWithGemini({
    system,
    prompt: JSON.stringify(input, null, 2),
  });
}
