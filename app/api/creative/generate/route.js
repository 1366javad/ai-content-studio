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

    const result = await runFlux({
      prompt: userPrompt,
    });

    return NextResponse.json({
      success: true,
      imageData: result.imageData,
      mimeType: result.mimeType,
      provider: result.provider,
    });
  } catch (error) {
    console.error("Creative Generate Error:", error.message);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
