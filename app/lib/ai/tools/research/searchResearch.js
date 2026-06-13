export async function searchResearchTool({ tavilyResults }) {
  const results = tavilyResults?.results || [];

  return {
    competitors: results.slice(0, 5),

    insights: results.map((item) => ({
      title: item.title,
      url: item.url,
      content: item.content,
    })),
  };
}
