import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import globalRouter from "./globalRouter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: { name: "One" },
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "one",
        name: "One",
        component: () => import("@/views/one.vue"),
      },
      {
        path: "two",
        name: "Two",
        component: () => import("@/views/two.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
