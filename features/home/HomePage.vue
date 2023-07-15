<template>
  <IntroHeader />
  <div class="container">
    <div v-if="pending">Loading articles...</div>
    <div v-else>
      <div>
        <ArticlePost v-for="article in data?.articles" :key="article.title" />
      </div>
      <Pagination
        v-model="currentPage"
        :itemsPerPage="itemsPerPage"
        :totalItems="data?.articlesCount"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IntroHeader from "./components/IntroHeader.vue";
import Pagination from "./components/Pagination.vue";
import ArticlePost from "./components/ArticlePost.vue";

import articleService from "~/services/articles";

const itemsPerPage = 10;
const currentPage = ref<number>(1);
const query = computed(() => {
  return {
    limit: itemsPerPage,
    offset: (currentPage.value - 1) * itemsPerPage,
  };
});

const { data, error, pending } = await articleService.fetchArticles(
  query.value
);
</script>
