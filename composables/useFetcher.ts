import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";
import { useUserStore } from "~/features/user/useUserStore";

export const useFetcher: typeof useFetch = (url, opts) => {
  const {
    user: { token },
  } = useUserStore();
  const config = useRuntimeConfig();
  const defaulOpts = {
    baseURL: config.public?.baseURL,
    headers: {
      ...(token && { Authorization: `Token ${token}` }),
    },
  };
  return useFetch(url, defu(opts, defaulOpts));
};
