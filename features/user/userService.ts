import type { LoginPayload, User } from "./types";

function loginUser(payload: LoginPayload) {
  type LoginAPIResponse = {
    user: User;
  };

  return useFetcher<LoginAPIResponse>("/users/login", {
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
  type RegisterAPIResponse = {
    user: User;
  };

  return await useFetcher<RegisterAPIResponse>("/users", {
    method: "POST",
    body: {
      user: payload,
    },
  });
}

export default {
  loginUser,
  registerUser,
};
