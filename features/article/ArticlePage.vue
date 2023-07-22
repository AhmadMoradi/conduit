<template>
  <div>
    <article>
      <header class="bg-black-2 mb-8">
        <div class="container text-white text-4xl py-8">
          <h1 class="mb-4">{{ article?.title }}</h1>
          <div class="flex items-center text-sm">
            <img class="h-8 w-8 rounded-full" :src="article?.author.image" />
            <div class="ml-2">
              <div>{{ article?.author.username }}</div>
              <div>{{ article?.updatedAt }}</div>
            </div>
          </div>
        </div>
      </header>
      <section class="container text-xl mb-8">
        {{ article?.body }}
      </section>
      <div class="container mb-8">
        <TagBadge v-for="tag in article?.tagList" :key="tag"
          >{{ tag }}
        </TagBadge>
      </div>
      <hr class="container border-gray-400" />
    </article>
    <div v-if="userStore.isUserLogin" class="container mt-8">
      <CommentForm :article="article" class="mt-8 w-8/12 mx-auto" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommentForm from "./components/CommentForm.vue";

import articleService from "./articleService";
import { useUserStore } from "~/features/user/useUserStore";

const userStore = useUserStore();
const route = useRoute();
const { data, error } = await articleService.fetchArticle(
  route.params.slug.toString()
);

const article = computed(() => {
  return data?.article;
});
</script>

<style scoped></style>
