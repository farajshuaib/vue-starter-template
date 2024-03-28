import { ERoutesName } from "@/core/constant/ERoutesName";
import { RouteRecordRaw } from "vue-router";
import Layout from "./components/Layout.vue";

const routes: RouteRecordRaw = {
  path: "/auth/",
  component: Layout,
  name: ERoutesName.AUTH,
  redirect: { name: ERoutesName.LOGIN },
  meta: {
    guest: true,
  },
  children: [
    {
      path: "login",
      name: ERoutesName.LOGIN,
      component: () => import("@/features/Auth/pages/Login.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "reset-password/:token",
      name: ERoutesName.RESET_PASSWORD,
      component: () => import("@/features/Auth/pages/ResetPassword.vue"),
      meta: {
        guest: true,
      },
    },
  ],
};

export default routes;
