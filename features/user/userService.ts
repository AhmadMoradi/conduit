import type { LoginPayload, Settings, User } from "./types";
import apiCaller from "~/utiles/apiCaller";

type LoginAPIResponse = {
  user: User;
};

async function loginUser(payload: LoginPayload) {
  return await apiCaller<
    LoginAPIResponse,
    { errors: Record<string, string[]> }
  >(() =>
    $fetch("/users/login", {
      method: "post",
      body: { user: payload },
    })
  );
}

async function registerUser(payload: {
  email: string;
  password: string;
  username: string;
}) {
  return apiCaller<{
    user: User;
  }>(() =>
    $fetch("/users", {
      method: "POST",
      body: {
        user: payload,
      },
    })
  );
}

async function getUser() {
  return apiCaller<{
    user: User;
  }>(() => $fetch("/user"));
}

async function updateSettings(settings: Settings) {
  return apiCaller<{ user: User }>(() =>
    $fetch("/user", {
      method: "PUT",
      body: { user: settings },
    })
  );
}

export default {
  loginUser,
  registerUser,
  getUser,
  updateSettings,
};
