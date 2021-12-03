<template>
  <div class="visitor">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="4" @click="goLogin">管理</el-menu-item>
    </el-menu>
    <div class="content-box">
      <h1>游客</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const handleSelect = (e: any) => {
  console.log("handleSelect=", e);
};
const goLogin = () => {
  router.push("/login");
};
</script>
<style lang="scss" scoped>
.visitor {
  .content-box {
    width: 100%; 
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
