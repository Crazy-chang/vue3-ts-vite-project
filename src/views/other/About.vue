<template>
  <div class="about">
    <h1>{{ status }}</h1>
    
    <div>这里是2222</div>
  </div>
</template>
<script lang="ts">
import { defineComponent,onMounted, ref } from "vue";
export default defineComponent({
  setup() {
    var status = ref("false");
    onMounted(() => {
      console.log("onMounted11", status.value);
    });
    return {
      status,
    };
  },
  mounted() {
    console.log("onMounted22", this.status);
  },
});
</script>
