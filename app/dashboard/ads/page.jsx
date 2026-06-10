import { getAdPlatforms } from "@/app/lib/db/ads";
import AdsView from "@/components/campaing/AdsView";

export default async function AdsPage() {
  const platforms = await getAdPlatforms();
  return <AdsView platforms={platforms} />;
}
