<template>
  <div class="nav-header">
    <div @click="changeIsCollapse" class="iconfont cebianlan"></div>
    <div @click="logOut">退出登录</div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const store = useStore();
const router = useRouter();

const changeIsCollapse = () => {
  // 通过 commit 去触发 mutations 下的方法
  // 触发mutations下的方法，如果是引入的，需要拼接模块名
  store.commit("layoutdata/changeCollapse");

  // console.log("这是获取",store.state.layoutdata.isCollapse);
};

const logOut = () => {
  localStorage.clear();
  ElMessage({
    message: "退出成功",
    type: "success",
    duration:600,
  });
  router.push({ name: "Login" });
};
</script>
<style lang="scss" scoped>
.nav-header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  box-sizing: border-box;
  padding-left: 200px;
  justify-content: space-between;
}
</style>
