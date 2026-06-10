import { getCampaignById } from "@/app/lib/db/campaigns";
import { getResearch } from "@/app/lib/db/research";
import { getSEO } from "@/app/lib/db/seo";
import { getCampaignContent } from "@/app/lib/db/content";
import { getCampaignCreatives } from "@/app/lib/db/creative";
import { getCampaignVideos } from "@/app/lib/db/video";
import { getCampaignAds } from "@/app/lib/db/ads";
import { getCampaignAssets } from "@/app/lib/db/assets";
import CampaignWorkspace from "@/components/campaing/CampaignWorkspace";

export default async function CampaignIdPage({ params }) {
  const { campaignId } = await params;

  const campaign = await getCampaignById(campaignId);

  const research = await getResearch(campaignId);

  const seo = await getSEO(campaignId);

  const contentOutputs = await getCampaignContent(campaignId);

  const creatives = await getCampaignCreatives(campaignId);

  const videos = await getCampaignVideos(campaignId);

  const ads = await getCampaignAds(campaignId);
  const assets = await getCampaignAssets(campaignId);

  if (!campaign) {
    return (
      <div className="p-10">
        <h1 className="text-xl font-semibold">Campaign not found</h1>
      </div>
    );
  }

  return (
    <CampaignWorkspace
      campaign={campaign}
      research={research}
      seo={seo}
      contentOutputs={contentOutputs}
      creatives={creatives}
      videos={videos}
      ads={ads}
      assets={assets}
    />
  );
}
