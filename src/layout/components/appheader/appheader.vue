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
    duration: 600,
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
