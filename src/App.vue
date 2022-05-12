<template>
  <router-view />
</template>
<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
// 设置进入即登录
onMounted(() => {
  let userData = JSON.parse(localStorage.userData);
  store.commit("setUserInfo", userData);
});
</script>
<style>
/* 设置全局样式 */
* {
  margin: 0;
  padding: 0;
  /* 设置盒子模型 border-box 设置width包含边框+内边距 */
  box-sizing: border-box;
  font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #535353;
}
html,
body,
#app {
  height: 100%;
}
a {
  text-decoration: none;
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
</style>
