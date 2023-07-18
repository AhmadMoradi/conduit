import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { useUserStore } from "~/features/user/useUserStore";

export const useLazyFetcher: typeof useFetch = (url, opts) => {
  const token = useCookie<string>("token");
  const config = useRuntimeConfig();
  const defaulOpts = {
    baseURL: config.public?.baseURL,
    headers: {
      ...(token.value && { Authorization: `Token ${token.value}` }),
    },
  };
  return useLazyFetch(url, defu(opts, defaulOpts));
};
