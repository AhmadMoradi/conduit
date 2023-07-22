<template>
  <EditorPage />
</template>

<script setup lang="ts">
import EditorPage from "~/features/user/EditorPage.vue";

definePageMeta({
  middleware: ["auth"],
});
</script>
