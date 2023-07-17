import { ofetch } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { baseURL },
  } = useRuntimeConfig();
  const token = useCookie<string>("token");
  const instance = ofetch.create({
    baseURL,
    headers: {
      ...(token && { Authorization: `Token ${token.value}` }),
    },
  });

  globalThis.$fetch = instance;
});
