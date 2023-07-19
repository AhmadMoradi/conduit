import { defineStore } from "pinia";
import userService from "./userService";

import type { LoginPayload, Settings } from "./types";
import apiCaller from "~/utiles/apiCaller";

interface User {
  email: string;
  username: string;
  bio: string;
  image: string;
  token: string;
}

export const useUserStore = defineStore("user", () => {
  const defaultUser = {
    email: "",
    username: "",
    bio: "",
    image: "",
    token: "",
  };

  const user = reactive<User>({ ...defaultUser });
  const token = useCookie<string | undefined>("token");
  const isUserInitialized = ref<boolean>(false);

  const isUserLogin = computed(() => token.value);

  async function initialize(force: boolean = false) {
    if (isUserInitialized.value && !force) return;
    if (token.value) {
      user.token = token.value;
      const { data } = await userService.getUser();
      Object.assign(user, data?.user);
    }
    isUserInitialized.value = true;
  }

  async function login(payload: LoginPayload) {
    const { data, error } = await userService.loginUser(payload);

    if (!error) {
      Object.assign(user, data?.user);
      storeToken();
      navigateTo("/");
    }

    return { data, error };
  }

  async function register(payload: {
    username: string;
    password: string;
    email: string;
  }) {
    const { data, error } = await userService.registerUser(payload);
    if (!error) {
      Object.assign(user, data?.user);
      storeToken();
      navigateTo("/");
    }
    return { data, error };
  }

  function storeToken() {
    token.value = user.token;
  }

  function removeToken() {
    token.value = undefined;
  }

  function logout() {
    Object.assign(user, { ...defaultUser });
    removeToken();
  }

  async function updateSettings(settings: Settings) {
    const { data, error } = await userService.updateSettings(settings);
    if (!error && data) {
      Object.assign(user, data?.user);
    }
    return { data, error };
  }

  return {
    user,
    isUserLogin,
    initialize,
    login,
    register,
    logout,
    updateSettings,
  };
});
