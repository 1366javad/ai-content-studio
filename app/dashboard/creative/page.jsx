import { getCreativeTypes } from "@/app/lib/db/creative";
import Creative from "@/components/campaing/Creative";

export default async function CreativePage() {
  const creativeTypes = await getCreativeTypes();

  return <Creative creativeTypes={creativeTypes} />;
}
