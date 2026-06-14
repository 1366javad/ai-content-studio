import { runGemini } from "../../providers/gemini";

const SECTION_PROMPTS = {
  market: `
Generate a detailed Market Research report.

Include:
- Market size
- Market growth
- Industry overview
- Key insights
`,

  competitor: `
Generate a Competitor Analysis.

Include:
- Main competitors
- Strengths
- Weaknesses
- Positioning
`,

  audience: `
Generate an Audience Analysis.

Include:
- Demographics
- Psychographics
- Motivations
- Buying behavior
`,

  trends: `
Generate a Trend Analysis.

Include:
- Current trends
- Emerging trends
- Opportunities
- Threats
`,

  painpoints: `
Generate a Pain Point Analysis.

Include:
- Main customer problems
- Frustrations
- Objections
- Risks
`,

  opportunities: `
Generate an Opportunity Analysis.

Include:
- Market gaps
- Growth opportunities
- Differentiation ideas
- Strategic recommendations
`,
};

export async function generateResearchTool({ campaign, section }) {
  const systemPrompt = `
You are an expert market research analyst.

Return clean Markdown only.

Use:
- headings
- bullet points
- short paragraphs

Do not return HTML.
Do not wrap in code fences.
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
