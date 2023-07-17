function fetchAllTags() {
  return useLazyFetcher<{ tags: string[] }>("/tags");
}

function fetchArticles(payload: { offset: number; limit: number }) {
  const { limit = 10, offset = 0 } = payload || {};

  interface ArticlesAPIResponse {
    articles: Array<Article>;
    articlesCount: number;
  }

  return useLazyFetcher<ArticlesAPIResponse>("/articles", {
    baseURL: useRuntimeConfig().public.baseURL,
    query: {
      limit,
      offset,
    },
  });
}

export default { fetchAllTags, fetchArticles };
