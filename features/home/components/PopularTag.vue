<template>
  <div v-show="data" class="bg-gray-7 p-2 rounded min-w-[280px] max-w-[300px]">
    <h3 class="mb-2">Popular Tags</h3>
    <TagBadge
      v-for="tag in data?.tags"
      :key="tag"
      class="text-white bg-gray-6 !mr-1 mx-0 mb-1"
      >{{ tag }}</TagBadge
    >
  </div>
</template>

<script setup lang="ts">
import homeService from "../homeService";

const { data, error } = await homeService.fetchAllTags();
</script>

<style scoped></style>
