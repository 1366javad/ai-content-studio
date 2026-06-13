import { runProvider } from "../../providers";
import { createAgentResult } from "../../core/createAgentResult";
import { getProvider } from "../../core/getProvider";

export async function runCreativeAgent({ campaign, plan }) {
  const prompt = `
Marketing campaign creative.

Campaign:
${campaign.name}

Audience:
${plan.targetAudience}

Goal:
${plan.goal}
`;

  const provider = getProvider("creative");

  const image = await runProvider(provider, {
    prompt,
  });

  return createAgentResult({
    agent: "creative",

    input: {
      prompt,
    },

    output: {
      image,
    },
  });
}
