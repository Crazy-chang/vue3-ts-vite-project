import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue"
// import globalRouter from "./globalRouter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: { name: "One" },
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/one",
        name: "One",
        meta:{
          title:'名'
        },
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
        path: "/line",
        name: "Line",
        component: () => import("@/views/echarts/line.vue"),
      },
    ],
  },
  {
    path: "/wan",
    name: "Wan",
    component: layout,
    redirect:'/wan/editor',
    children:[
      {
        path: "/wan/editor",
        name: "Editor",
        component: () => import("@/views/editor/editor.vue"),
      },
      {
        path: "/wan/pie",
        name: "Pie",
        component: () => import("@/views/echarts/pie.vue"),
      },
    ]
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
