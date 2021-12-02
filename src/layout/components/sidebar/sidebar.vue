<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <div v-for="(item, index) in treeList" :key="index">
      <!-- 第一层 -->
      <el-sub-menu v-if="item.list" :index="index">
        <template #title>
          <i class="el-icon-location"></i>
          <span>{{ item.title }}</span>
        </template>
        <!-- 第二层 -->
        <el-menu-item
          v-for="(it, indexs) in item.list"
          :key="indexs"
          :index="`${index}-${indexs}`"
          @click="changeRoute(it.url)"
          >{{ it.title }}</el-menu-item
        >
      </el-sub-menu>
      <!-- 第一层无下拉 -->
      <el-menu-item v-else :index="index" @click="changeRoute(item.url)">
        <i class="el-icon-menu"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </div>
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

    let treeList = ref([
      {
        title: "首页",
        url: "/one",
      },
      {
        title: "第一级",
        list: [
          {
            title: "二级",
            url: "/about",
          },
        ],
      },
      {
        title: "第一级",
        url: "/two",
      },
    ]);
    let defaultActive = ref(null);

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const changeRoute = (data) => {
      defaultActive = data;
      router.push(data)
    };
    return {
      isCollapse,
      changeRoute,
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
  background-color: $injectedColor;
  /* background-color: rgb(243, 251, 253); */
}
</style>
