export async function searchSeoTool({ serpResults }) {
  return {
    organicResults: serpResults?.organic_results || [],

    relatedQuestions: serpResults?.related_questions || [],

    relatedSearches: serpResults?.related_searches || [],
  };
}
