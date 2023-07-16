import type { LoginPayload, User } from "./types";

function loginUser(payload: LoginPayload) {
  type LoginAPIResponse = {
    user: User;
  };

  return useFetcher<{
    user: {
      user: User;
    };
  }>("/users/login", {
    method: "POST",
    body: {
      user: payload,
    },
  });
}

async function registerUser(payload: {
  email: string;
  password: string;
  username: string;
}) {
  return useFetcher<{
    user: User;
  }>("/users", {
    method: "POST",
    body: {
      user: payload,
    },
  });
}

async function getUser() {
  return useFetcher<{
    user: User;
  }>("/user");
}

export default {
  loginUser,
  registerUser,
  getUser,
};
