<template>
  <p class="container">
    Please create .env file if it doesn't exist and check BASE_URL key in it.
    <br />
    You can create .env file using .env.exampel as a template.
    <br />
    example: #BASE_URL=https://api.realworld.io/api
  </p>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
if (config.public?.baseURL) {
  navigateTo("/", { replace: true });
}
</script>
