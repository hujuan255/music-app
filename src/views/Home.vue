<template>
  <div class="home">
    <TopNav></TopNav>
    <Swiper></Swiper>
    <IconList></IconList>
    <FindGoodPlaylists></FindGoodPlaylists>
    <PlayController></PlayController>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Swiper from "@/utils/Swiper.vue";
import IconList from "@/views/home/IconList.vue";
import FindGoodPlaylists from "@/views/home/FindGoodPlaylists.vue";
import PlayController from "@/components/PlayController.vue";

export default {
  name: "Home",
  components: { TopNav, Swiper, IconList, FindGoodPlaylists, PlayController },
};
</script>
<style lang="less" scoped>
</style>