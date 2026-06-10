import { getVideoTypes } from "@/app/lib/db/video";
import VideoStudio from "@/components/campaing/VideoStudio";

export default async function VideoPage() {
  const videoTypes = await getVideoTypes();

  return <VideoStudio videoTypes={videoTypes} />;
}
