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
  };

  const user = reactive<User>({ ...defaultUser });

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
    login,
    register,
    logout,
  };
});
