<template>
  <div class="container border border-gray-300 rounded">
    <form @submit.prevent="onSubmit" class="flex flex-col items-center">
      <ul v-if="form.errors" class="mb-3 font-bold text-red-1 w-full">
        <li v-for="err in errorsList" :key="err">{{ err }}</li>
      </ul>
      <textarea
        v-model="form.body"
        placeholder="Write a comment..."
        rows="3"
        class="p-4 mb-4 w-full"
      >
      </textarea>
      <div class="border-t border-gray-300 p-3 w-full text-end">
        <button type="submit" class="btn btn-primary self-end">
          <span v-if="isLoading">...</span>
          <span v-else>Post Comment</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import articleService from "../articleService";

type Props = {
  article: Article | undefined;
};

const props = defineProps<Props>();
const form = reactive<{
  body: string;
  errors?: null | Record<string, string[]>;
}>({
  body: "",
});
const isLoading = ref<boolean>(false);
const errorsList = computed(() => {
  return form.errors
    ? Object.entries(form.errors).map(([key, value]) => `${key} ${value[0]}`)
    : null;
});

async function onSubmit() {
  isLoading.value = true;
  const { data, error } = await articleService.postComment({
    slug: props.article?.slug!,
    body: form.body,
  });
  if (error) {
    form.errors = error?.data;
  } else {
    form.body = "";
  }
  isLoading.value = false;
}
</script>
