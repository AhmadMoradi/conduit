<template>
  <IntroHeader />
  <div class="container">
    <div v-if="pending">Loading articles...</div>
    <div v-else>
      <div>
        <ArticlePost v-for="article in data?.articles" :key="article.id" />
      </div>
      <Pagination
        v-model="currentPage"
        :totalPages="data?.articlesCount"
        :itemsPerPage="itemsPerPage"
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

const offset = computed<number>(() => {
  return (currentPage.value - 1) * itemsPerPage;
});

const query = reactive({
  limit: 10,
  offset: offset.value,
});

const { data, error, pending } = await articleService.fetchArticles(query);
</script>
