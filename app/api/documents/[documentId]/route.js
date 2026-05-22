import { getDocumentById } from "@/app/lib/mock/documents";
import { getLatestVersion } from "@/app/lib/mock/versions";

export async function GET(request, { params }) {
  const { documentId } = params;

  const document = getDocumentById(documentId);

  if (!document) {
    return Response.json({ error: "Document not found" }, { status: 404 });
  }

  const latestVersion = getLatestVersion(documentId);

  return Response.json({
    document,
    latestVersion,
  });
}
