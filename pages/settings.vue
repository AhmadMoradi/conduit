<template>
  <SettingsPage />
</template>

<script setup lang="ts">
import SettingsPage from "~/features/user/SettingsPage.vue";

definePageMeta({
  middleware: ["auth"],
});
</script>
