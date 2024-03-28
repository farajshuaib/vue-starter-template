import {ERoutesName} from "@/core/constant/ERoutesName";
import {RouteRecordRaw, RouterView} from "vue-router";

const routes: RouteRecordRaw = {
    path: "/",
    component: RouterView,
    name: ERoutesName.MAIN,
    redirect: {name: ERoutesName.DASHBOARD},
    meta: {
        breadcrumb: [
            {
                text: "Dashboard",
                router_name: ERoutesName.DASHBOARD,
            },
        ],
    },
    children: [
        {
            path: "/dashboard/",
            component: () => import("@/features/dashboard/pages/Dashboard.vue"),
            name: ERoutesName.DASHBOARD,
            meta: {
                breadcrumb: [
                    {
                        text: "home",
                        router_name: ERoutesName.MAIN,
                    },
                    {
                        text: "dashboard",
                        router_name: ERoutesName.DASHBOARD,
                    },
                ],
            },
        },
    ],
};

export default routes;
