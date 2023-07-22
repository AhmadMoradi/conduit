<template>
  <div class="p-16 text-center">Loggin out...</div>
</template>
<script setup lang="ts">
import { useUserStore } from "./useUserStore";

const userStore = useUserStore();
userStore.logout();
setTimeout(() => {
  window.location.href = "/";
});
</script>
