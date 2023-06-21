import { RouteRecordRaw, RouterView } from "vue-router";

const route: RouteRecordRaw = {
  path: "/users/",
  component: RouterView,
  name: "UsersManagement",
  meta: {
    allowedPermission: ["admin"],
    title: "Users Management",
    Breadcrumb: [
      {
        text: "Users Management",
        router_name: "UsersManagement",
      },
    ],
  },
  children: [
    {
      path: "index",
      name: "UsersIndex",
      component: () => import("@/modules/users/screens/index.vue"),
      meta: {
        allowedPermission: ["admin"],
        title: "Users List",
        Breadcrumb: [
          {
            text: "Users Management",
            router_name: "UsersManagement",
          },
          {
            text: "Users List",
            router_name: "UsersIndex",
          },
        ],
      },
    },
  ],
};

export default route;
