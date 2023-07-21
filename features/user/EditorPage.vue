<template>
  <div class="container flex flex-col items-center mt-8">
    <form @submit.prevent="onSubmit" class="flex flex-col items-center">
      <ul v-if="form.errors" class="mb-3 font-bold text-red-1">
        <li v-for="err in errorsList" :key="err">{{ err }}</li>
      </ul>
      <input
        v-model="form.title"
        type="text"
        name="title"
        placeholder="Article Title"
        class="input w-full !text-xl"
      />
      <input
        v-model="form.description"
        type="text"
        name="description"
        placeholder="What is this article about?s"
        class="input w-full !text-base"
      />
      <textarea
        v-model="form.body"
        name="body"
        placeholder="Write your article (in markdown)"
        rows="8"
        cols="50"
        class="input w-full !text-base"
      ></textarea>
      <input
        v-model="form.tagListStr"
        type="text"
        name="tagList"
        placeholder="Enter tags"
        class="input w-full !text-base"
      />
      <button class="btn btn-primary self-end">Publish Article</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { NewArticleForm } from "./types";
import userService from "./userService";

const emptyForm = {
  title: "",
  description: "",
  body: "",
  tagListStr: "",
  errors: null,
};
const form = reactive<NewArticleForm>({ ...emptyForm });
const isLoading = ref<boolean>(false);
const errorsList = computed(() => {
  return form.errors
    ? Object.entries(form.errors).map(([key, value]) => `${key} ${value[0]}`)
    : null;
});

async function onSubmit() {
  form.errors = null;
  form.tagList = form.tagListStr?.trim().split(",").filter(Boolean);
  delete form.tagListStr;
  isLoading.value = true;
  const { data, error } = await userService.createArticle(form);
  if (!error) {
    navigateTo(`/article/${data?.article.slug}`);
  } else {
    form.errors = error?.data?.errors;
  }
  isLoading.value = false;
}
</script>
