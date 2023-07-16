<template>
  <div class="flex flex-col items-center mt-8 mx-auto max-w-lg w-11/12">
    <h1 class="text-4xl mb-2">Sign up</h1>
    <NuxtLink to="/login" class="text-green-1"> Have an account? </NuxtLink>
    <form @submit.prevent="onSubmit" class="flex flex-col grow w-full mt-4">
      <ul v-if="form.errors" class="mb-3 font-bold text-red-1">
        <li v-for="err in errorsList" :key="err">{{ err }}</li>
      </ul>

      <input
        required
        v-model="form.username"
        type="text"
        placeholder="Username"
        class="input"
      />
      <input
        required
        v-model="form.email"
        type="text"
        placeholder="Email"
        class="input"
      />
      <input
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="input"
      />

      <button type="submit" class="self-end btn btn-primary btn-lg">
        Sign up
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "./useUserStore";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  errors: null | { username?: string[]; password?: string[]; email?: string[] };
};

const userStore = useUserStore();
const form = reactive<RegisterForm>({
  username: "ahmad",
  email: "ahmad@email.com",
  password: "123456",
  errors: null,
});

const errorsList = computed(() => {
  return form.errors
    ? Object.entries(form.errors).map(([key, value]) => `${key} ${value[0]}`)
    : null;
});

async function onSubmit() {
  form.errors = null;
  const { data, error } = await userStore.register({ ...form });
  if (error.value) {
    form.errors = { ...error.value.data?.errors };
  }
}
</script>

<style lang="postcss" scoped></style>
