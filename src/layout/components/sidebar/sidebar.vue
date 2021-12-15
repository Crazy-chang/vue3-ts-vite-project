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
      <template v-if="item.meta">
        <!-- 多层 -->
        <el-sub-menu v-if="item.children.length>1" :index="index">
          <template #title>
            <i class="el-icon-location"></i>
            <span>{{ item.meta.title }}</span>
          </template>

          <el-menu-item
            v-for="(it, indexs) in item.children"
            :key="indexs"
            :index="it.path"
            >{{ it.meta.title }}</el-menu-item
          >
        </el-sub-menu>
        <!-- 无子列表 -->
        <el-menu-item v-else :index="item.children[0].path">
          <i class="el-icon-menu"></i>
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </template>
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

    const arrs = JSON.parse(JSON.stringify(store.state.layoutdata.ruleRouters));
    
    // console.log("路由=", router.options.routes);
    // 获取动态路由列表
    let treeList = ref([...router.options.routes,...arrs]);
    
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
