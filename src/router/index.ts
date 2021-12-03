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
        component: () => import("@/views/other/one.vue"),
      },
      {
        path: "two",
        name: "Two",
        component: () => import("@/views/other/two.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/other/About.vue"),
      },
      {
        path: "/editor",
        name: "Editor",
        component: () => import("@/views/editor/editor.vue"),
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/visitor",
    name: "Visitor",
    component: () => import("@/views/visitor/visitor.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
