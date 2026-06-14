import { runGemini } from "../../providers/gemini";

const SECTION_PROMPTS = {
  keywords: `
Generate Keyword Research.

Include:
- Primary keywords
- Secondary keywords
- Long-tail keywords
- Search intent
`,

  clusters: `
Generate Keyword Clusters.

Group keywords by:
- Topic
- Intent
- Funnel stage
`,

  topics: `
Generate Topic Clusters.

Include:
- Pillar pages
- Supporting content
- Internal linking ideas
`,

  strategy: `
Generate an SEO Strategy.

Include:
- Quick wins
- Medium-term actions
- Long-term actions
- Priorities
`,

  meta: `
Generate SEO Meta Content.

Include:
- Meta titles
- Meta descriptions
- CTR optimization ideas
`,

  faq: `
Generate SEO FAQs.

Include:
- Common questions
- Search intent
- Featured snippet opportunities
`,
};

export async function searchSeoTool({ campaign, section }) {
  const systemPrompt = `
You are a senior SEO strategist.

Return clean Markdown only.

Use:
- headings
- bullet points
- short paragraphs

Do not return HTML.
Do not use code fences.
`;

  const userPrompt = `
Campaign Name:
${campaign.name}

Product:
${campaign.product_name || ""}

Industry:
${campaign.industry || ""}

Target Audience:
${campaign.target_audience || ""}

Brand Description:
${campaign.brand_description || ""}

${SECTION_PROMPTS[section] || ""}
`;

  const result = await runGemini({
    systemPrompt,
    userPrompt,
  });

  return {
    title: section,
    type: section,
    prompt: userPrompt,
    content: result.text,
  };
}
