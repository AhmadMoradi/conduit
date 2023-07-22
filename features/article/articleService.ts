import apiCaller from "~/utiles/apiCaller";

function fetchArticle(slug: string) {
  return apiCaller<{
    article: Article;
  }>(() => $fetch(`/articles/${slug}`));
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

export default {
  fetchArticle,
  postComment,
};
