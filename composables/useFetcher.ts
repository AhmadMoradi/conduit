import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export const useFetcher: typeof useFetch = (url, opts) => {
  const config = useRuntimeConfig();
  return useFetch(
    url,
    defu(opts, { baseURL: config.public?.baseURL as string })
  );
};
