<template>
  <div class="nav-header">
    <img class="logo" src="../../../static/img/logo.png" alt="" />
    <div class="nav-box">
      <div @click="changeIsCollapse" class="iconfont cebianlan"></div>
      <div class="nav-but">
        <div>Crazy</div>
        <div @click="logOut">退出登录</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import request from "@/api/request.js";
import as from "axios"
import {artist} from "@/api/api"
const store = useStore();
const router = useRouter();

const changeIsCollapse = () => {
  // 通过 commit 去触发 mutations 下的方法
  // 触发mutations下的方法，如果是引入的，需要拼接模块名
  store.commit("layoutdata/changeCollapse");

};

const logOut = () => {
  getData()
  localStorage.clear();
  ElMessage({
    message: "退出成功",
    type: "success",
    duration: 600,
  });
  router.push({ name: "Login" });
};
const  getData = () => {
    as.get('http://localhost:3000/song/url?id=33894312&proxy=http://192.168.1.144:8080')
    // console.log("axios==", artist());
};
</script>
<style lang="scss" scoped>
.nav-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  .logo {
    width: 100px;
    padding: 0 40px;
  }
  .nav-box {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    align-content: center;
    justify-content: space-between;
    .nav-but {
      min-width: 200px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
