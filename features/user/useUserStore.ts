import { defineStore } from "pinia";
import userService from "./userService";

interface User {
  email: string;
  username: string;
  bio: string | null;
  image: string;
  token: string;
  isLogingIn: boolean;
}

export const useUserStore = defineStore("user", () => {
  const defaultUser = {
    email: "",
    username: "",
    bio: null,
    image: "",
    token: "",
    isLogingIn: false,
  };

  const user = reactive<User>(defaultUser);

  async function login(payload: { username: string; password: string }) {
    user.isLogingIn = true;
    const { data, error, pending } = await userService.loginUser(payload);
    if (error.value) {
    } else {
      Object.assign(user, data?.user);
      user.isLogingIn = false;
      storeToken();
    }
    return { data, error, pending };
  }

  function logout() {
    Object.assign(user, defaultUser);
    removeToken();
  }

  async function register(payload: {
    username: string;
    password: string;
    email: string;
  }) {}

  function storeToken() {
    localStorage.setItem("token", user.token);
  }

  function removeToken() {
    localStorage.removeItem("token");
  }

  return {
    login,
    logout,
  };
});
