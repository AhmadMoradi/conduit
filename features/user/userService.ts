function registerUser(payload: {
  email: string;
  password: string;
  username: string;
}) {
  return useFetcher("/users", {
    method: "POST",
    body: {
      user: payload,
    },
  });
}

function loginUser(payload: { username: string; password: string }) {
  return useFetcher("/users/login", {
    method: "POST",
    body: {
      user: payload,
    },
  });
}

export default {
  registerUser,
  loginUser,
};
