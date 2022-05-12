<template>
  <div class="home">
    <!-- 引入头部组件 -->
    <TopNav></TopNav>
    <!-- 引入swiper轮播图组件 -->
    <Swiper></Swiper>
    <!-- 引入图标列表组件 -->
    <IconList></IconList>
    <!-- 引入查找好歌单组件 -->
    <FindGoodPlaylists></FindGoodPlaylists>
    <!-- 引入播放歌曲组件，如果没有当前真在播放的歌曲则隐藏 -->
    <PlayController v-if="playCurrentIndex"></PlayController>
    <!-- 引入底部导航组件 -->
    <BottomNav></BottomNav>
  </div>
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
import Swiper from "@/utils/Swiper.vue";
import IconList from "@/views/home/IconList.vue";
import FindGoodPlaylists from "@/views/home/FindGoodPlaylists.vue";
import PlayController from "@/components/PlayController.vue";
import BottomNav from "@/components/BottomNav.vue";
import { useStore } from "vuex";
const store = useStore();
const playCurrentIndex = store.state.playCurrentIndex;
</script>
<style lang="less" scoped>
</style>