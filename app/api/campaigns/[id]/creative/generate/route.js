import { createClient } from "@/app/lib/supabase/server";

import { getCampaignById } from "@/app/lib/db/campaigns";

import { createCampaignOutput } from "@/app/lib/db/campaignOutputs";

import { generateCreative } from "@/app/lib/ai/tools/creative/generateCreative";

export async function POST(request, { params }) {
  try {
    const { id } = await params;

    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const campaign = await getCampaignById(id);

    const generated = await generateCreative({
      campaign,
      category: body.category,
    });

    const imageUrl = `data:image/png;base64,${generated.imageData}`;

    const saved = await createCampaignOutput({
      campaignId: campaign.id,

      module: "creative",

      type: generated.type,

      title: generated.title,

      prompt: generated.prompt,

      content: imageUrl,

      metadata: {},
    });

    return Response.json({
      success: true,

      imageUrl,

      output: saved,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
