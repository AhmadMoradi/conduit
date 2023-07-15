<template>
  <div class="flex flex-col items-center mt-8 mx-auto max-w-lg w-11/12">
    <h1 class="text-4xl mb-2">Sign up</h1>
    <NuxtLink to="/login" class="text-green-1"> Have an account? </NuxtLink>
    <form @submit.prevent="onSubmit" class="flex flex-col grow w-full mt-4">
      <input type="text" placeholder="Username" class="input" />
      <input type="text" placeholder="Email" class="input" />
      <input type="text" placeholder="Password" class="input" />

      <button type="submit" class="self-end btn btn-primary btn-lg">
        Sign up
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
function onSubmit() {}
</script>

<style lang="postcss" scoped></style>
