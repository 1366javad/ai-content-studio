export const mockDocuments = [
  {
    id: "doc-1",
    projectId: "p1",
    title: "My First Document",
    createdAt: "2024-01-01",
  },
  {
    id: "doc-2",
    projectId: "p1",
    title: "Landing Page Copy",
    createdAt: "2024-01-02",
  },
];

export function getDocumentById(id) {
  return mockDocuments.find((d) => d.id === id) || null;
}
