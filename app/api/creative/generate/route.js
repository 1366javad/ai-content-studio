import { NextResponse } from "next/server";
import { runFlux } from "@/app/lib/ai/providers/flux";

export async function POST(request) {
  try {
    const body = await request.json();

    const result = await runFlux({
      prompt: body.prompt,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
