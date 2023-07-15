<template>
  <div>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span>{{ props.article.author.username }}</span>
        <span>{{ props.article.createdAt }}</span>
      </div>
      <button>
        {{ props.article.favoritesCount }}
      </button>
    </div>

    <a href="">
      <h2 class="font-semibold text-2xl">{{ props.article.title }}</h2>
      <p class="text-gray-5">{{ props.article.description }}</p>
    </a>
    <div class="flex items-center justify-between">
      <a class="!text-gray-5 !text-xs">Read more...</a>
      <a>
        <TagBadge v-for="tag in props.article.tagList" :key="tag">{{
          tag
        }}</TagBadge>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  article: Article;
};

const props = defineProps<Props>();
</script>

<style scoped></style>
