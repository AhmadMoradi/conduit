import { useUserStore } from "~/features/user/useUserStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (!userStore.isUserLogin) {
    return navigateTo("/login");
  }
});
