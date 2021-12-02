import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import permission from "./utils/permission";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/static/css/iconfont.css";
import "@/static/css/index.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(permission, router)
  .use(ElementPlus)
  .mount("#app");
