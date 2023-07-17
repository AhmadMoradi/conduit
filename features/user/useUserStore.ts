import { defineStore } from "pinia";
import userService from "./userService";

import type { LoginPayload } from "./types";

interface User {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
}

export const useUserStore = defineStore("user", () => {
  const defaultUser = {
    email: "",
    username: "",
    bio: null,
    image: "",
    token: "",
  };

  const user = reactive<User>({ ...defaultUser });
  const token = useCookie<string>("token");

  const isUserLogin = computed(() => token.value);

  async function initialize() {
    if (token.value) {
      user.token = token.value;
      const { data } = await userService.getUser();
      Object.assign(user, data?.user);
    }
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
    token.value = "";
  }

  function logout() {
    Object.assign(user, { ...defaultUser });
    removeToken();
  }

  return {
    user,
    isUserLogin,
    initialize,
    login,
    register,
    logout,
  };
});
