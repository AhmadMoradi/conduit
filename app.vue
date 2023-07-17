<template>
  <PreLoader />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useUserStore } from "~/features/user/useUserStore";

import PreLoader from "~/features/home/components/PreLoader.vue";

const userStoer = useUserStore();

// help developer by checking config
const config = useRuntimeConfig();
const route = useRoute();
if (!config.public.baseURL) {
  if (route.name !== "config-error") {
    navigateTo({ name: "config-error" });
  }
}

userStoer.initialize();
</script>
