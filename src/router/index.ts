import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue"
// import globalRouter from "./globalRouter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    // redirect: { name: "One" },
    component: layout,
  },
  {
    path: "/home",
    name: "Home",
    redirect: { name: "One" },
    meta:{
      title:'首页',
    },
    component: layout,
    children: [
      {
        path: "/one",
        name: "One",
        meta:{
          title:'首页数据',
          damin:true
        },
        component: () => import("@/views/other/one.vue"),
      },
    ],
  },
  {
    path: "/wan",
    name: "Wan",
    component: layout,
    meta:{
      title:'插件',
    },
    redirect:'/wan/editor',
    children:[
      {
        path: "/wan/editor",
        name: "Editor",
        meta:{
          title:'富文本',
          ico:''
        },
        component: () => import("@/views/editor/editor.vue"),
      },
      {
        path: "/wan/pie",
        name: "Pie",
        meta:{
          title:'图表',
        },
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
