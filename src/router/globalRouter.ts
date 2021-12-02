import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    redirect: { name: "Home" },
  },
];
const globalRouters: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
];

export default globalRouters;
