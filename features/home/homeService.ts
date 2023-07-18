function fetchAllTags() {
  return useLazyFetcher<{ tags: string[] }>("/tags");
}

function fetchArticles(
  payload: ComputedRef<{
    limit: number;
    offset: number;
  }>
) {
  interface ArticlesAPIResponse {
    articles: Array<Article>;
    articlesCount: number;
  }

  return useLazyFetcher<ArticlesAPIResponse>("/articles", {
    baseURL: useRuntimeConfig().public.baseURL,
    query: payload,
  });
}

export default { fetchAllTags, fetchArticles };
