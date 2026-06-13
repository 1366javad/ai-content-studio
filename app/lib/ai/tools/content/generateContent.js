import { runGemini } from "../../providers/gemini";

export async function generateContentTool({ campaign, plan, item }) {
  const systemPrompt = `
You are a senior marketing strategist and copywriter.

Write professional, high-converting marketing content.

Be persuasive.
Be clear.
Be actionable.
Be conversion-focused.

Return clean Markdown only.

Use:
- Headings (##)
- Subheadings (###)
- Bullet points
- Short paragraphs
- Clear spacing

Do not return raw HTML.

Do not wrap the response inside code blocks.

Do not explain what you are doing.

Output only the final content.

The content should be ready to publish with minimal editing.
`;

  const userPrompt = `
Campaign Name:
${campaign.name}

Industry:
${campaign.industry || ""}

Goal:
${campaign.goal || ""}

Audience:
${plan.targetAudience}

Content Type:
${item.type}

Title:
${item.title}

Core Message:
${plan.strategy.coreMessage}

Please generate the content.
`;

  const result = await runGemini({
    systemPrompt,
    userPrompt,
    temperature: 0.7,
  });

  return {
    title: item.title,
    type: item.type,
    content: result.text,
  };
}
