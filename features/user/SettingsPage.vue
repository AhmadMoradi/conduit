<template>
  <div class="container flex flex-col items-center mt-8">
    <h1 class="text-4xl mb-4">Your Settings</h1>
    <form @submit.prevent="onSubmit" class="flex flex-col items-center">
      <input
        v-model="form.image"
        placeholder="URL of profile picture"
        class="input w-full"
        type="text"
        name="image"
        required
      />
      <input
        v-model="form.username"
        placeholder="Username"
        class="input w-full"
        type="text"
        name="username"
        required
      />
      <textarea
        v-model="form.bio"
        placeholder="Short bio about you"
        class="input w-full"
        name="bio"
        rows="8"
        cols="50"
      ></textarea>
      <input
        v-model="form.email"
        placeholder="Email"
        class="input w-full"
        type="email"
        name="email"
        required
      />
      <input
        v-model="form.password"
        placeholder="New Password"
        class="input w-full"
        type="password"
        name="password"
      />
      <button type="submit" class="btn bg-green-1 self-end text-white">
        <span v-if="isLoading">...</span>
        <span v-else>Update Settings</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "./useUserStore";

import { User, Settings } from "./types";

const userStore = useUserStore();
await userStore.initialize();

const form = reactive<Settings>({ ...userStore.user });
const isLoading = ref<boolean>(false);

async function onSubmit() {
  isLoading.value = true;
  const { data, error } = await userStore.updateSettings(form);
  console.log({ ...data });
  isLoading.value = false;
}
</script>

<style scoped></style>
