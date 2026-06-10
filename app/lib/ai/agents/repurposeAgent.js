import { generateWithGemini } from "../provider";

export async function repurposeAgent({ input, memory, previousOutputs }) {
  const system = `
You are a content repurposing agent.
Create these final outputs:
1. Blog post
2. LinkedIn post
3. Instagram caption
4. Email newsletter
5. Short ad teaser script

Return with clear headings.
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
