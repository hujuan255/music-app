<template>
  <div class="playlist">
    <Carousel
      class="imgsContent"
      :settings="settings"
      :autoplay="2000"
      :breakpoints="breakpoints"
      :wrap-around="true"
    >
      <Slide
        class="imgContent"
        v-for="(item, i) in props.userPlaylist"
        :key="item.id"
      >
        <router-link :to="{ path: '/playlistDetail', query: { id: item.id } }">
          <img :src="item.coverImgUrl" />
          <div class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaishi"></use>
            </svg>
            <span>{{ utils.formatPlayCount(item.playCount) }}</span>
          </div>
          <div class="title">{{ utils.formatTitle(item.name) }}</div>
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import utils from "@/utils/formatData.js";
const props = defineProps(["userPlaylist"]);
</script>
<style lang='less' scoped>
.playlist {
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
      height: 0.7rem;
      overflow: hidden;
      width: 2rem;
      margin: 0.2rem 0;
      font-size: 0.24rem;
    }
  }
}
</style>