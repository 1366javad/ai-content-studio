import { NextResponse } from "next/server";

let SETTINGS = {
  theme: "dark",
  preferredModel: "GPT-4o",
  temperature: 0.7,
  maxTokens: 2000,
  suggestionsEnabled: true,
};

export async function GET() {
  return NextResponse.json(SETTINGS);
}

export async function PUT(req) {
  const body = await req.json().catch(() => null);

  if (!body) return new NextResponse("Invalid JSON", { status: 400 });

  // basic validation
  const theme = body.theme === "light" ? "light" : "dark";
  const preferredModel = [
    "GPT-4",
    "GPT-4o",
    "Claude 3.5 Sonnet",
    "Claude 3 Opus",
  ].includes(body.preferredModel)
    ? body.preferredModel
    : "GPT-4o";

  const temperature = Math.max(0, Math.min(1, Number(body.temperature ?? 0.7)));
  const maxTokens = Math.min(
    4000,
    Math.max(100, Math.round(Number(body.maxTokens ?? 2000) / 100) * 100),
  );
  const suggestionsEnabled = Boolean(body.suggestionsEnabled);

  SETTINGS = {
    theme,
    preferredModel,
    temperature,
    maxTokens,
    suggestionsEnabled,
  };

  return NextResponse.json(SETTINGS);
}
