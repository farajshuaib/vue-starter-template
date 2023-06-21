import { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  path: "/auth/",
  component: () => import("@/modules/auth/components/Layout.vue"),
  meta: {
    guest: true,
  },
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("@/modules/auth/screens/Login.vue"),
      meta: {
        guest: true,
      },
    },
    {
      path: "",
      redirect: "/auth/login",
    },
  ],
};


export default route;