import { ofetch } from "ofetch";

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { baseURL },
  } = useRuntimeConfig();
  const token = useCookie<string>("token");
  debugger;
  const instance = ofetch.create({
    baseURL,
    headers: {
      ...(token.value && { Authorization: `Token ${token.value}` }),
    },
  });

  globalThis.$fetch = instance;
});
