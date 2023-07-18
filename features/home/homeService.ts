import apiCaller from "~/utiles/apiCaller";

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

function toggleFavorite(article: Article) {
  const url = `articles/${article.slug}/favorite`;
  return apiCaller(() =>
    $fetch<{ article: Article }>(url, {
      method: article.favorited ? "DELETE" : "POST",
    })
  );
}

export default { fetchAllTags, fetchArticles, toggleFavorite };
