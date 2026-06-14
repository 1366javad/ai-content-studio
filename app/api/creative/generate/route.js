import { NextResponse } from "next/server";
import { runGeminiImage } from "@/app/lib/ai/providers/flux";

export async function POST(request) {
  try {
    const body = await request.json();

    const userPrompt = body.prompt?.trim();

    if (!userPrompt || userPrompt.length < 10) {
      return NextResponse.json(
        {
          error: "The prompt must be at least 10 characters long.",
          success: false,
        },
        { status: 400 },
      );
    }

    const result = await runGeminiImage({
      prompt: userPrompt,
      model: process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image",
    });

    return NextResponse.json({
      success: true,
      imageData: result.imageData,
      mimeType: result.mimeType || "image/png",
      model: result.model,
    });
  } catch (error) {
    console.error("❌ Creative Generate Error:", error.message);

    let errorMessage = error.message;

    if (errorMessage.includes("Quota") || errorMessage.includes("429")) {
      errorMessage =
        "Gemini quota has run out. Please wait a few minutes and try again.";
    } else if (errorMessage.includes("Image not generated")) {
      errorMessage =
        "Image not generated. Please write the prompt more precisely.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 },
    );
  }
}
