<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// help developer by checking config
const config = useRuntimeConfig();
const route = useRoute();
if (!config.public.baseURL) {
  if (route.name !== "config-error") {
    navigateTo({ name: "config-error" });
  }
}
</script>
