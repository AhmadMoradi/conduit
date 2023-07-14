<template>
  <header class="container px-4 py-2 flex items-center justify-between">
    <span class="text-2xl font-bold"> conduit </span>

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
  & + a {
    margin-left: 1rem;
  }

  &.router-link-active {
    color: var(--gray-3);
  }
}
</style>
