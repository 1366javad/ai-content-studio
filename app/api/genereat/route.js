import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { title, language, tone, instructions, prompt } = body || {};
  if (!prompt || typeof prompt !== "string") {
    return new NextResponse("Prompt is required.", { status: 400 });
  }

  // ✅ Fake output (replace with your real AI call)
  const content =
    `# ${title || "Untitled"}\n\n` +
    `Language: ${language || "English"}\n` +
    `Tone: ${tone || "Professional"}\n\n` +
    (instructions ? `Instructions: ${instructions}\n\n` : "") +
    `---\n\n` +
    `Generated Content:\n\n` +
    `You asked:\n${prompt}\n\n` +
    `Here is a demo output. Replace /api/generate with your real model call.`;

  return NextResponse.json({ content });
}
