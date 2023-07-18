<template>
  <IntroHeader />
  <div class="container flex gap-6 items-start justify-between">
    <div class="">
      <div v-if="pending">Loading articles...</div>
      <div v-else>
        <div>
          <ArticlePost
            v-for="article in data?.articles"
            :key="article.slug"
            :article="article"
            class="article mb-6 pt-4"
            @toggle-favorite="toggleFav"
          />
        </div>
        <Pagination
          v-model="currentPage"
          :itemsPerPage="itemsPerPage"
          :totalItems="data?.articlesCount"
          class="my-8"
        />
      </div>
    </div>
    <PopularTag />
  </div>
</template>

<script lang="ts" setup>
import IntroHeader from "./components/IntroHeader.vue";
import Pagination from "./components/Pagination.vue";
import ArticlePost from "./components/ArticlePost.vue";
import PopularTag from "./components/PopularTag.vue";

import homeService from "./homeService";
import { useUserStore } from "~/features/user/useUserStore";

const userStore = useUserStore();
const itemsPerPage = 10;
const currentPage = ref<number>(1);
const query = computed(() => {
  return {
    limit: itemsPerPage,
    offset: (currentPage.value - 1) * itemsPerPage,
  };
});

const { data, pending, refresh } = await homeService.fetchArticles(query);

async function toggleFav(article: Article) {
  if (!userStore.isUserLogin) {
    navigateTo("/login");
    return;
  }
  const articleIndex = data.value?.articles.findIndex(
    (a) => a.slug === article.slug
  );
  if (articleIndex !== undefined && articleIndex >= 0) {
    const resp = await homeService.toggleFavorite(article);
    data.value?.articles.splice(articleIndex, 1, resp.data.article);
  }
}
</script>

<style lang="postcss" scoped>
.article {
  & + & {
    border-top: 1px solid var(--gray-4);
  }
}
</style>
