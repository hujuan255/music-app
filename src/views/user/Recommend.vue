<template>
  <div class="top">
    <div class="bg">
      <div class="top-title">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-houtuijiantou"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { getRecommendPlaylistApi, getIsLoginApi } from "@/api/index.js";
const store = useStore();
const recommendPlaylist = ref([]);
const isLogin = ref(false);
onMounted(() => {
  getRecommendPlaylist();
});
const getRecommendPlaylist = async () => {
  let res = await getIsLoginApi();
  if (res.status == 200) {
    console.log(store.state.userInfo.isLogin);
    let result = await getRecommendPlaylistApi();
  }
  console.log(result);
};
</script>
<style lang='less' scoped>
</style>