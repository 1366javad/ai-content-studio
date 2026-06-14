import { NextResponse } from "next/server";
import { runFlux } from "@/app/lib/ai/providers/flux";

export async function POST(request) {
  try {
    const body = await request.json();
    const userPrompt = body.prompt?.trim();

    if (!userPrompt || userPrompt.length < 15) {
      return NextResponse.json(
        {
          success: false,
          error: "The prompt must be at least 15 characters long.",
        },
        { status: 400 },
      );
    }

    console.log(
      "Starting Flux generation for prompt:",
      userPrompt.substring(0, 50) + "...",
    );

    const result = await runFlux({ prompt: userPrompt });

    return NextResponse.json({
      success: true,
      imageData: result.imageData,
      mimeType: result.mimeType,
      provider: result.provider,
    });
  } catch (error) {
    console.error("🚨 Creative Generate FULL ERROR:", error.message);
    console.error("Error Stack:", error.stack);

    let errorMsg = error.message;

    if (errorMsg.includes("HUGGINGFACE_API_KEY")) {
      errorMsg = "HUGGINGFACE_API_KEY is not set in Netlify.";
    } else if (
      errorMsg.includes("fetch failed") ||
      errorMsg.includes("Failed to fetch")
    ) {
      errorMsg = "Unable to connect to Hugging Face. Check API key.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMsg,
      },
      { status: 500 },
    );
  }
}
