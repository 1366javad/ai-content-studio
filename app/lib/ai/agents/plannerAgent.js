import { generateWithGemini } from "../provider";

export async function plannerAgent({ input, memory }) {
  const system = `
You are a senior content strategist inside an AI Content Studio.
Create a clear content plan.
Return concise structured text with:
- audience
- goal
- angle
- outline
- recommended tone
- key messages
Brand memory:
${memory || "No brand memory yet."}
`;

  return generateWithGemini({
    system,
    prompt: JSON.stringify(input, null, 2),
  });
}
