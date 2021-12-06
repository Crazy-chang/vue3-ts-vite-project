import { RouteRecordRaw } from "vue-router";

const globalRouters: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/other/About.vue"),
  },
];

export default globalRouters;
