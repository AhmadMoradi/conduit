import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export const useFetcher: typeof useFetch = (url, opts) => {
  const token = useCookie<string>("token");
  const config = useRuntimeConfig();
  const defaulOpts = {
    baseURL: config.public?.baseURL,
    headers: {
      ...(token.value && { Authorization: `Token ${token.value}` }),
    },
  };
  return useFetch(url, defu(opts, defaulOpts));
};
