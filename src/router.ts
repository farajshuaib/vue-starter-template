import { RouterView, createRouter, createWebHistory } from "vue-router";
import navigationGuards from "./core/middleware/navigationGuards";

import authRoute from "@/modules/auth/config/router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: RouterView, children: [authRoute] }],
});

router.beforeEach(navigationGuards);

export default router;
