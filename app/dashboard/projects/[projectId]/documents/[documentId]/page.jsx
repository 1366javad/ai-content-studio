import Editor from "@/components/editor/Editor";

const PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export default async function DocumentEditorPage({ params }) {
  const { projectId, documentId } = params;

  const res = await fetch(`${PUBLIC_BASE_URL}/api/documents/${documentId}`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    return <div className="p-6">Document not found.</div>;
  }

  const { document, latestVersion } = data;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">{document.title}</h1>

      <Editor initialContent={latestVersion?.content || ""} />
    </div>
  );
}
