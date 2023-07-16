import { defineStore } from "pinia";
import userService from "./userService";

import type { LoginPayload } from "./types";

interface User {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
  isLogingIn: boolean;
  isRegistering: boolean;
  isLoadingUser: boolean;
}

export const useUserStore = defineStore("user", () => {
  const defaultUser = {
    email: "",
    username: "",
    bio: null,
    image: "",
    token: "",
    isLogingIn: false,
    isRegistering: false,
    isLoadingUser: true,
  };

  const user = reactive<User>({ ...defaultUser });

  const isUserLogin = computed(() => user.token);

  async function initialize() {
    user.isLoadingUser = true;
    const token = localStorage.getItem("token");
    if (token) {
      user.token = token;
      const { data, error } = await userService.getUser();
      Object.assign(user, data.value?.user);
    }
    user.isLoadingUser = true;
  }

  async function login(payload: LoginPayload) {
    user.isLogingIn = true;
    const { data, error } = await userService.loginUser(payload);
    if (!error.value) {
      Object.assign(user, data.value?.user);
      user.isLogingIn = false;
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
    user.isRegistering = true;
    const { data, error } = await userService.registerUser(payload);
    if (!error.value) {
      Object.assign(user, data.value?.user);
      storeToken();
      navigateTo("/");
    }
    user.isRegistering = false;
    return { data, error };
  }

  function storeToken() {
    localStorage.setItem("token", user.token);
  }

  function removeToken() {
    localStorage.removeItem("token");
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
