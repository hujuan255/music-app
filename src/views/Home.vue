<template>
  <div class="home">
    <TopNav></TopNav>
    <Swiper></Swiper>
    <IconList></IconList>
    <FindGoodPlaylists></FindGoodPlaylists>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import Swiper from "@/utils/Swiper.vue";
import IconList from "@/views/home/IconList.vue";
import FindGoodPlaylists from "@/views/home/FindGoodPlaylists.vue";

export default {
  name: "Home",
  components: { TopNav, Swiper, IconList, FindGoodPlaylists },
};
</script>
<style lang="less" scoped>
</style>