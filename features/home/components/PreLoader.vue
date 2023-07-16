<template>
  <div
    v-show="status !== 'loading'"
    class="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center"
  >
    <Loader />
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/features/user/useUserStore";

const userStore = useUserStore();
const status = ref("loading");

watch(
  () => userStore.user.isLoadingUser,
  (isLoading) => {
    if (isLoading) {
      status.value = "loading";
    } else {
      status.value = "ready";
    }
  }
);
</script>
<style scoped></style>
