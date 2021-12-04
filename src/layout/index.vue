<template>
  <div class="home">
    <el-container>
      <!-- 顶部导航 -->
      <el-header class="el-header">
        <appheader></appheader>
      </el-header>
      <el-container>
        <!-- 侧边导航 -->
        <el-aside width="auto" class="el-aside">
          <el-scrollbar class="el-scrollbar">
            <sidebar></sidebar>
          </el-scrollbar>
        </el-aside>
        <!-- 主内容 -->
        <el-main>
          <el-scrollbar ref="scrollbar" height="800px">
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import sidebar from "./components/sidebar/sidebar.vue";
import appheader from "./components/appheader/appheader.vue";
import { nextTick, ref } from "vue";
const scrollbar = ref();
nextTick(() => {
  // 更新滚动高度
  scrollbar.value.update();
});
</script>

<style land="scss" scoped>
.el-header {
  background-color: rgb(225, 242, 248);
}
.el-aside {
  background-color: rgb(243, 251, 253);
}
</style>
