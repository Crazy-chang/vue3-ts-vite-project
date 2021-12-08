<template>
  <div class="home">
    <layout></layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import layout from "../layout/index.vue";

// var Mock = require('mockjs');
export default defineComponent({
  name: "Home",
  components: {
    layout,
  },
  setup() {
    const val = ref("666");
    return {
      val,
    };
  },
  mounted() {
    // console.log("虚拟",Mock)
  },
});
</script>
<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
