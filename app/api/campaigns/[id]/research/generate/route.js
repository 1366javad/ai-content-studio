import { createClient } from "@/app/lib/supabase/server";

import { getCampaignById } from "@/app/lib/db/campaigns";

import { createCampaignOutput } from "@/app/lib/db/campaignOutputs";

import { generateResearchTool } from "@/app/lib/ai/tools/research/searchResearch";

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

    const generated = await generateResearchTool({
      campaign,
      section: body.section,
    });

    const saved = await createCampaignOutput({
      campaignId: campaign.id,

      module: "research",

      type: body.section,

      title: generated.title,

      prompt: generated.prompt,

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
