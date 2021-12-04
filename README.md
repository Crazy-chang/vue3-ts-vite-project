# vue3-ts-vite-project

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


## Vue3语法说明
### vuex 使用说明
页面需要引入 import {useStore} from "vuex";
通过 commit 去触发 mutations 下的方法
通过 dispatch 去触发 actions 下的方法
触发 mutations 下的方法时如果是引入的，则需要拼接模块名
store.commit('layoutdata/changeCollapse')
store.dispatch('layoutdata/changeCollapse')


// 需要使用 computed 来获取vuex里的数据 
    const isCollapse = computed(()=>{
      return store.state.layoutdata.isCollapse
    })
# vue3-ts-vite-project
