import { generateWithGemini } from "../provider";

export async function seoAgent(input) {
  const prompt = `
Optimize this content for SEO.

CONTENT:
${input}

Requirements:
- improve readability
- improve keyword placement
- create SEO title
- create meta description
- improve headings
`;

  const output = await generateWithGemini({
    system: "You are an SEO optimization expert.",
    prompt,
  });

  return output;
}
