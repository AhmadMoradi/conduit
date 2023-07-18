<template>
  <div class="flex flex-col items-center mt-8 mx-auto max-w-lg w-11/12">
    <h1 class="text-4xl mb-2">Sign in</h1>
    <NuxtLink to="/login" class="text-green-1"> Need an account? </NuxtLink>
    <form @submit.prevent="onSubmit" class="flex flex-col grow w-full mt-4">
      <ul v-if="form.errors" class="mb-3 font-bold text-red-1">
        <li v-for="err in errorsList" :key="err">{{ err }}</li>
      </ul>
      <input
        reqired
        v-model="form.email"
        type="text"
        placeholder="email"
        class="input"
      />
      <input
        reqired
        v-model="form.password"
        type="password"
        placeholder="Password"
        class="input"
      />
      <button type="submit" class="self-end btn btn-primary btn-lg">
        <span v-if="isLoading">...</span>
        <span v-else> Sign in </span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "./useUserStore";

type LoginForm = {
  email: string;
  password: string;
  errors?: null | Record<string, string[]>;
};

const userStore = useUserStore();
const form = reactive<LoginForm>({
  email: "",
  password: "",
  errors: null,
});
const isLoading = ref<boolean>(false);
const errorsList = computed(() => {
  return form.errors
    ? Object.entries(form.errors).map(([key, value]) => `${key} ${value[0]}`)
    : null;
});

async function onSubmit() {
  isLoading.value = true;
  form.errors = null;
  const { email, password } = form;
  const { error } = await userStore.login({ email, password });
  if (error) {
    form.errors = error.data?.errors;
  }
  isLoading.value = false;
}
</script>

<style scoped></style>
