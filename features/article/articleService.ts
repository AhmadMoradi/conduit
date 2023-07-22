import apiCaller from "~/utiles/apiCaller";

import type { Comment } from "./types";

function fetchArticle(slug: string) {
  return useLazyFetcher<{
    article: Article;
  }>(`/articles/${slug}`);
}

function postComment(payload: { slug: string; body: string }) {
  return apiCaller(() =>
    $fetch(`/articles/${payload.slug}/comments`, {
      method: "POST",
      body: {
        comment: { body: payload.body },
      },
    })
  );
}

function fetchComments(slug: string) {
  return useFetch<{
    comments: Comment[];
  }>(`/articles/${slug}/comments`);
}

export default {
  fetchArticle,
  postComment,
  fetchComments,
};
