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
        <el-main class="el-main">
          <el-scrollbar>
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
</script>

<style land="scss" scoped>
.el-header {
  background-color: rgb(225, 242, 248);
}
.el-scrollbar {
  height: 100%;
}
.el-aside {
  background-color: rgb(243, 251, 253);
}

</style>
