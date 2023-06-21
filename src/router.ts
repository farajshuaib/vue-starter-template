import {
  RouteRecordRaw,
  RouterView,
  createRouter,
  createWebHistory,
} from "vue-router";
import navigationGuards from "./core/middleware/navigationGuards";

import Dashboard from "@/core/layout/Dashboard.vue";
import authRoute from "@/modules/auth/router";
import userRoute from "@/modules/users/router";

export const dashboardRoutes: RouteRecordRaw = {
  path: "/",
  component: Dashboard,
  name: "Dashboard",
  children: [userRoute],
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [authRoute, dashboardRoutes],
});

router.beforeEach(navigationGuards);

export default router;
