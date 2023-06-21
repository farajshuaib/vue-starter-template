import { useAuth } from "@/modules/auth/stores/auth";
import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export default async function (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {

  document.getElementById("InitScreenDOM")?.remove();
  return next(); // remove this line to enable auth guard

  const auth = useAuth();

  // if the route is guest only then let the user continue
  if (to.meta.guest) {
    document.getElementById("InitScreenDOM")?.remove();
    return next();
  }

  if (!auth.user) {
    try {
      const res = await auth.getProfile();
      document.getElementById("InitScreenDOM")?.remove();

      if (res) {
        // continue to the route
        return next();
      }

      // if the user is not logged in and the route is not guest only then redirect to login
      if (to.meta.guest) {
        return next();
      }

      return next("/auth/login");
    } catch (error) {
      return next("/auth/login");
    }
  }

  // otherwise continue to the route
  document.getElementById("InitScreenDOM")?.remove();
  next();

  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
}
