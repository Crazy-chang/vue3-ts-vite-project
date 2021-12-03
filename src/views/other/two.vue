<template>
   <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { provide, ref } from 'vue'
export default {
    components:{
        HelloWorld
    },
    setup() {
        // 为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive。
        // 如果这 property 中有任何更改，HelloWorld 组件也将自动更新！
        const value = ref('这是值') 

        provide('name',value)
    },
}
</script>