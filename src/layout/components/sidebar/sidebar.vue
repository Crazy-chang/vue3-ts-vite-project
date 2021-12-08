<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="(item, index) in treeList" :key="index">
      <el-sub-menu v-if="item.list" :index="index">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ item.title }}</span>
        </template>

        <el-menu-item
          v-for="(it, indexs) in item.list"
          :key="indexs"
          :index="it.url"
          >{{ it.title }}</el-menu-item
        >
      </el-sub-menu>
      <!-- 无子列表 -->
      <el-menu-item v-else :index="item.url">
        <i class="el-icon-menu"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const isCollapse = computed(() => {
      return store.state.layoutdata.isCollapse;
    });
    // 在线路由调试
    let treeList = ref([
      {
        title: "首页",
        url: "/one",
      },
      {
        title: "管理",
        list: [
          {
            title: "个人设置",
            url: "/man/about",
          },
        ],
      },
      {
        title: "权限",
        url: "/man/two",
      },
      {
        title: "集成",
        url: "/wan",
        list: [
          {
            title: "图表",
            url: "/wan/pie",
          },
          {
            title: "富文本",
            url: "/wan/editor",
          },
        ],
      },
    ]);
    let defaultActive = ref(null);
    defaultActive = router.options.history.location;
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      treeList,
      defaultActive,
    };
  },
});
</script>
<style land="scss" scoped>
.el-menu-vertical-demo {
  background-color: rgb(243, 251, 253);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
  /* min-height: 600px; */
}
</style>
