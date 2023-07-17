<template>
  <IntroHeader />
  <div class="container flex gap-8 items-start">
    <div>
      <div v-if="pending">Loading articles...</div>
      <div v-else>
        <div>
          <ArticlePost
            v-for="article in data?.articles"
            :key="article.title"
            :article="article"
            class="article mb-6 pt-4"
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

const itemsPerPage = 10;
const currentPage = ref<number>(1);
const query = computed(() => {
  return {
    limit: itemsPerPage,
    offset: (currentPage.value - 1) * itemsPerPage,
  };
});

const { data, error, pending } = await homeService.fetchArticles(query.value);
</script>

<style lang="postcss" scoped>
.article {
  & + & {
    border-top: 1px solid var(--gray-4);
  }
}
</style>
