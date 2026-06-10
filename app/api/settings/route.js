import { NextResponse } from "next/server";

import { createClient } from "@/app/lib/supabase/server";

import { getUserSettings, updateUserSettings } from "@/app/lib/db/settings";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = await getUserSettings(user.id);

  return NextResponse.json(settings);
}

export async function PUT(req) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const settings = await updateUserSettings(user.id, {
    preferredModel: body.preferredModel || "google/gemini-3.5-flash",

    temperature: Number(body.temperature ?? 0.7),

    maxTokens: Number(body.maxTokens ?? 2000),

    suggestionsEnabled: body.suggestionsEnabled ?? true,
  });

  return NextResponse.json(settings);
}
