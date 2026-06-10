import { agents } from "../agents";

export async function runStep({ step, input, memory, previousOutputs }) {
  const agent = agents[step.agent];

  if (!agent) {
    throw new Error(`Agent not found: ${step.agent}`);
  }

  const output = await agent({
    input,
    memory,
    previousOutputs,
  });

  return {
    stepId: step.id,
    agent: step.agent,
    label: step.label,
    output,
  };
}
