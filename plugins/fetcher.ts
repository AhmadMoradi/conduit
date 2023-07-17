import { ofetch } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { baseURL },
  } = useRuntimeConfig();

  const instance = ofetch.create({
    baseURL,
  });

  globalThis.$fetch = instance;
});
