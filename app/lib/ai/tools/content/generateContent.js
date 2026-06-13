import { runGemini } from "../../providers/gemini";

export async function generateContentTool({ campaign, plan, item }) {
  const systemPrompt = `
You are an expert marketing copywriter.

Write high-quality marketing content.

Be persuasive.
Be clear.
Be conversion-focused.
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
