<template>
  <div class="container">
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="border border-gray-300 mt-8 w-8/12 mx-auto"
    >
      <p class="p-6">
        {{ comment.body }}
      </p>
      <div class="bg-gray-200 text-xs flex gap-2 px-6 py-3 font-extralight">
        <img :src="comment.author.image" class="h-5 w-5 rounded-full" />
        <span class="text-green-1">{{ comment.author.username }}</span>
        <span class="text-gray-500">{{ comment.updatedAt }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import articleService from "../articleService";

type Props = {
  article: Article | undefined;
};
const props = defineProps<Props>();
const { data, error } = await articleService.fetchComments(
  props.article?.slug!
);
const comments = computed(() => {
  return data.value?.comments;
});
</script>

<style scoped></style>
