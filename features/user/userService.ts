import nuxtConfig from "nuxt.config";
import type { LoginPayload, User } from "./types";
import { FetchError } from "ofetch";

type LoginAPIResponse = {
  user: User;
};

async function loginUser(payload: LoginPayload) {
  return await $fetch<LoginAPIResponse>("/users/login", {
    method: "post",
    body: { user: payload },
  })
    .then((data) => ({ data, error: null }))
    .catch((error: FetchError<{ errors: Record<string, string[]> }>) => ({
      data: null,
      error,
    }));
}

async function registerUser(payload: {
  email: string;
  password: string;
  username: string;
}) {
  return $fetch<{
    user: User;
  }>("/users", {
    method: "POST",
    body: {
      user: payload,
    },
  })
    .then((data) => ({ data, error: null }))
    .catch((error) => ({ data: null, error }));
}

async function getUser() {
  return $fetch<{
    user: User;
  }>("/user");
}

export default {
  loginUser,
  registerUser,
  getUser,
};
