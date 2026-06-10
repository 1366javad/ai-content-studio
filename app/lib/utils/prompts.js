export const SYSTEM_PROMPT = `
You are an elite AI content strategist.

Your role:
- create high-quality content
- maintain strong structure
- optimize readability
- improve clarity
- write naturally
- create engaging content
- adapt to the user's tone
`;

export function buildContentPrompt({ title, instructions, tone, language }) {
  return `
TITLE:
${title}

LANGUAGE:
${language}

TONE:
${tone}

INSTRUCTIONS:
${instructions}

Generate high-quality content.
`;
}
