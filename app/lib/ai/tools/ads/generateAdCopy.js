export async function generateAdCopyTool({ campaign, plan, item }) {
  return {
    title: `${campaign.name} ${item.platform} ad`,
    copy: {
      platform: item.platform,
      headlines: [
        `Launch ${campaign.name}`,
        `Smarter Marketing Campaigns`,
        `Create Campaign Assets Faster`,
      ],
      descriptions: [
        `Turn one campaign brief into content, creatives, videos, and ads.`,
        `Plan and generate connected marketing assets in one workspace.`,
      ],
      ctas: ["Get Started", "Create Campaign", "Try Now"],
    },
  };
}
