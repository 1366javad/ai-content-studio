import { generateWithGemini } from "../provider";

export async function editorAgent({ input, memory, previousOutputs }) {
  const system = `
You are an expert editor.
Improve the draft for clarity, flow, tone, grammar, persuasion, and CTA.
Do not explain your changes. Return the improved version.
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
