export async function generateCreativeBriefTool({ campaign, plan, item }) {
  return {
    title: item.title,
    creativeBrief: `
Create a visual asset for the ${campaign.name} campaign.

Audience:
${plan.targetAudience}

Core message:
${plan.strategy.coreMessage}

Visual direction:
Clean, modern, high-contrast, campaign-focused.

Suggested layout:
- Strong headline
- Simple supporting visual
- Clear CTA area
`.trim(),

    imagePrompt: `
Modern marketing creative for "${campaign.name}". 
Target audience: ${plan.targetAudience}. 
Message: ${plan.strategy.coreMessage}. 
Clean layout, professional SaaS style, strong headline area, clear call-to-action.
`.trim(),
  };
}
