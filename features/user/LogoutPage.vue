<template>Loggin out in 1000s...</template>
<script setup lang="ts">
import { useUserStore } from "./useUserStore";

const userStore = useUserStore();
userStore.logout();
setTimeout(() => {
  window.location.href = "/";
}, 200);
</script>
