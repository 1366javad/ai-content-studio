import { createClient } from "@/app/lib/supabase/server";

import { getCampaignById } from "@/app/lib/db/campaigns";

import { createCampaignOutput } from "@/app/lib/db/campaignOutputs";

import { generateContentTool } from "@/app/lib/ai/tools/content/generateContent";

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

    if (!campaign) {
      return Response.json({ error: "Campaign not found" }, { status: 404 });
    }

    const item = {
      type: body.type,
      title: body.title,
    };

    const plan = {
      targetAudience: campaign.target_audience,

      strategy: {
        coreMessage: body.prompt,
      },
    };

    const generated = await generateContentTool({
      campaign,
      plan,
      item,
    });

    const saved = await createCampaignOutput({
      campaignId: campaign.id,

      module: "content",

      type: generated.type,

      title: generated.title,

      prompt: body.prompt,

      content: generated.content,

      metadata: {},
    });

    return Response.json({
      success: true,
      output: saved,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message || "Generation failed",
      },
      {
        status: 500,
      },
    );
  }
}
