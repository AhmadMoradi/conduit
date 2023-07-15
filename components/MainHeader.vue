<template>
  <header class="container px-4 py-3 flex items-center justify-between">
    <span class="text-2xl font-bold text-green-1"> conduit </span>

    <nav class="text-gray-1">
      <NuxtLink class="hover:text-gray-2" to="/">Home</NuxtLink>
      <NuxtLink class="hover:text-gray-2" :to="{ name: 'login' }"
        >Sign in</NuxtLink
      >
      <NuxtLink class="hover:text-gray-2" :to="{ name: 'register' }"
        >Sign up</NuxtLink
      >
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
nav a {
  padding: 0.425rem;

  & + a {
    margin-left: 1rem;
  }

  &.router-link-active {
    color: var(--gray-3);
  }
}
</style>
