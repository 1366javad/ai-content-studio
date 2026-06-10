import { getWorkflow } from "../workflows";
import { runStep } from "./runStep";
import { createUsageEvent } from "@/app/lib/db/usage-server";

function sendEvent(controller, event) {
  controller.enqueue(
    new TextEncoder().encode(`data: ${JSON.stringify(event)}\n\n`),
  );
}

export async function runWorkflowStream({
  workflowId,
  input,
  projectId,
  documentId,
  userId,
}) {
  const workflow = getWorkflow(workflowId);

  return new ReadableStream({
    async start(controller) {
      const previousOutputs = {};

      try {
        sendEvent(controller, {
          type: "status",
          status: "initializing",
          message: "Starting AI workflow...",
        });

        for (const step of workflow.steps) {
          sendEvent(controller, {
            type: "step_started",
            step: step.id,
            label: step.label,
            message: `${step.label}...`,
          });

          const result = await runStep({
            step,
            input: {
              ...input,
              projectId,
              documentId,
              userId,
            },
            memory: input?.brandMemory || "",
            previousOutputs,
          });

          previousOutputs[step.id] = result.output;
          // Streaming chunks
          const text = result.output || "";

          for (let i = 0; i < text.length; i += 10) {
            sendEvent(controller, {
              type: "stream",
              step: step.id,
              chunk: text.slice(i, i + 10),
            });

            await new Promise((r) => setTimeout(r, 8));
          }

          sendEvent(controller, {
            type: "step_completed",
            step: step.id,
            label: step.label,
            output: result.output,
          });
        }

        sendEvent(controller, {
          type: "final",
          status: "completed",
          outputs: previousOutputs,
        });

        const finalOutput =
          previousOutputs.repurposeAgent ||
          previousOutputs.editorAgent ||
          previousOutputs.writerAgent ||
          previousOutputs.plannerAgent ||
          "";

        try {
          await createUsageEvent({
            user_id: userId,

            document_id: documentId || null,

            project_id: projectId || null,

            provider: "Mock",

            model: "Mock Model",

            tokens_used: finalOutput.length,

            words_generated: finalOutput.trim().split(/\s+/).length,

            request_type: "generation",

            cost: 0,

            action: input.title || "Content Generation",

            duration_seconds: 0,
          });
        } catch (error) {
          console.error("Usage tracking failed:", error);
        }

        controller.close();
      } catch (error) {
        sendEvent(controller, {
          type: "error",
          status: "failed",
          message: error.message || "AI workflow failed.",
        });

        controller.close();
      }
    },
  });
}
