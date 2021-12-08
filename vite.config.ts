import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue"; //通过@vitejs/plugin-vue这个插件来支持Vue

export default defineConfig({
  plugins: [vue()],
  // 为服务器设置代理规则
  server: {
    open: true // 是否自动在浏览器打开
  },
  // 样式相关规则
  css:{
      preprocessorOptions:{
          scss:{
            additionalData:`@import "@/static/css/global.scss"`
          }
      }
  },
  // 打包相关规则
  build:{
    outDir: "dist", //指定打包输出路径
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
});
