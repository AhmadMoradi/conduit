<template>
  <div>
    <div class="flex justify-between items-start">
      <div class="flex flex-col">
        <span>{{ props.article.author.username }}</span>
        <span>{{ props.article.createdAt }}</span>
      </div>
      <button
        @click="toggleFavorite(props.article)"
        :class="{
          favorited: props.article.favorited,
          favorating: isToggling,
        }"
        class="border px-3 py-2 rounded border-green-1 text-xs"
      >
        <span v-if="isToggling">...</span>
        <span v-else>{{ props.article.favoritesCount }}</span>
      </button>
    </div>

    <NuxtLink :to="`/article/${props.article.slug}`">
      <h2 class="font-semibold text-2xl">{{ props.article.title }}</h2>
      <p class="text-gray-5">{{ props.article.description }}</p>
    </NuxtLink>
    <div class="flex items-center justify-between">
      <NuxtLink
        :to="`/article/${props.article.slug}`"
        class="!text-gray-5 !text-xs"
        >Read more...</NuxtLink
      >
      <NuxtLink :to="`/article/${props.article.slug}`">
        <TagBadge v-for="tag in props.article.tagList" :key="tag">{{
          tag
        }}</TagBadge>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  article: Article;
};

const props = defineProps<Props>();
const emit = defineEmits(["toggle-favorite"]);
const isToggling = ref<boolean>(false);

function toggleFavorite(article: Article) {
  if (isToggling.value) return;
  isToggling.value = true;
  emit("toggle-favorite", article);
}

watch(
  () => props.article.favorited,
  () => {
    isToggling.value = false;
  }
);
</script>

<style scoped>
button {
  &.favoriting {
    cursor: wait;
  }

  &.favorited {
    background-color: var(--green-1);
    color: white;
  }
}
</style>
