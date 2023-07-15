function fetchArticles(payload?: { limit: number; offset: number }) {
  const { limit = 10, offset = 0 } = payload || {};

  interface ArticlesAPIResponse {
    articles: Array<Article>;
    articlesCount: number;
  }

  return useFetcher<ArticlesAPIResponse>("/articles", {
    baseURL: useRuntimeConfig().public.baseURL,
    query: {
      limit,
      offset,
    },
  });
}

export default {
  fetchArticles,
};
