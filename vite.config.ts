import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue"; //通过@vitejs/plugin-vue这个插件来支持Vue

export default defineConfig({
  plugins: [vue()],
  server: {
    open: true // 是否自动在浏览器打开
  },
  css:{
      preprocessorOptions:{
          scss:{
            additionalData:`@import "@/static/css/global.scss"`
          }
      }
  }
});
