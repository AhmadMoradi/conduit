<template>
  <div class="flex flex-col items-center mt-8 mx-auto max-w-lg w-11/12">
    <h1 class="text-4xl mb-2">Sign in</h1>
    <NuxtLink to="/login" class="text-green-1"> Need an account? </NuxtLink>
    <form @submit.prevent="onSubmit" class="flex flex-col grow w-full mt-4">
      <input type="text" placeholder="Username" class="input" />
      <input type="text" placeholder="Email" class="input" />

      <button type="submit" class="self-end btn btn-primary btn-lg">
        Sign in
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
function onSubmit() {}
</script>

<style scoped></style>
