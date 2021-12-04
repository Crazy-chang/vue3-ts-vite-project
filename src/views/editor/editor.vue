<template>
  <div>
    <h1>富文本在线玩儿</h1>
    <div ref="edite"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import E from "wangeditor";

const edite = ref(null);
onMounted(() => {
  const editor = new E(edite.value);
  editor.create();
});
</script>
<style lang="scss" scoped>
h1 {
  box-sizing: border-box;
  padding: 20px;
}
</style>
