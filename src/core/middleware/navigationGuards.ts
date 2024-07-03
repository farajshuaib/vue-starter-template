import { useAuth } from "@/features/Auth/controllers/auth";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export const navigationGuards = async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  document.getElementById("InitScreenDOM")?.remove();
    return next();

    // remove comment when you need to implement navigation guards
  
  // if (to.meta.guest) {
  //   document.getElementById("InitScreenDOM")?.remove();
  //   return next();
  // }

  // if (!localStorage.getItem("token")) {
  //   document.getElementById("InitScreenDOM")?.remove();
  //   return next("/auth/login");
  // }

  // const auth = useAuth();

  // if (!auth.user) {
  //   await auth.getProfile();
  // }

  // next();

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
};
