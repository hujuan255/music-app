// 发现好歌单lists
<template>
  <div class="findGoodPlaylist">
    <div class="topText">
      <div class="left">发现好歌单</div>
      <div class="right">查看更多</div>
    </div>
    <Carousel
      class="imgsContent"
      :settings="settings"
      :autoplay="2000"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide class="imgContent" v-for="(img, i) in playlist" :key="img.id">
        <router-link :to="{ path: '/playlistDetail', query: { id: img.id } }">
          <img :src="img.picUrl" />
          <div class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaishi"></use>
            </svg>
            <span>{{ utils.formatPlayCount(img.playCount) }}</span>
          </div>
          <div class="title">{{ utils.formatTitle(img.name) }}</div>
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { computed, onMounted, ref } from "vue";
import { getGoodPlaylistsApi } from "@/api/index.js";
//import { formatPlayCount } from "@/utils/formatPlayCount.js";
import utils from "@/utils/formatData.js";

const settings = ref({
  itemsToShow: 3.3,
  snapAlign: "center",
});
const breakpoints = ref({
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
});
onMounted(() => {
  getFindGoodPlaylist();
});
const playlist = ref([]);
const getFindGoodPlaylist = async () => {
  let res = await getGoodPlaylistsApi(10);
  playlist.value = res.data.result;
  console.log(playlist.value);
};
</script>
<style lang='less'>
.findGoodPlaylist {
  width: 7.5rem;
  height: 3.3rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem;
  .topText {
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 0.36rem;
      color: #666;
      font-weight: 900;
    }
    .right {
      width: 1.26rem;
      height: 0.42rem;
      line-height: 0.42rem;
      text-align: center;
      font-size: 0.24rem;
      border: 1px solid #dadada;
      border-radius: 1rem;
    }
  }

  .imgContent {
    display: flex;
    flex-direction: column;
    margin: 0.2rem 0.02rem;
    img {
      // width: 100%;
      border-radius: 15px;
      width: 2rem;
      height: 2rem;
    }
    .playCount {
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
      width: 1rem;
      font-size: 0.24rem;
      border-radius: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        width: 0.28rem;
        height: 0.28rem;
        fill: #fff;
      }
      span {
        color: #fff;
      }
    }
    .title {
      height: 0.6rem;
      overflow: hidden;
      width: 2rem;
      margin: 0.2rem 0;
      font-size: 0.24rem;
    }
  }
}
</style>