// 歌曲的详情(单曲播放界面)
<template>
  <div class="playMusic">
    <!-- 动态获取模糊背景图片 -->
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playMusicDetail.al.picUrl})` }"
    ></div>
    <div class="top">
      <div class="back" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-arrow_left"></use>
        </svg>
      </div>
      <div class="title">
        <marquee behavior="scroll" direction="left">
          {{ playMusicDetail.name }}
        </marquee>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31fenxiang"></use>
        </svg>
      </div>
    </div>
    <div class="playContent">
      <img src="" />
      <img src="" />
      <img src="" />
    </div>
    <div class="lyrics"></div>
    <div class="iconList"></div>
    <div class="progress"></div>
    <div class="footer"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  playMusicDetail: {},
});
</script>
<style lang='less' scoped>
.playMusic {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    filter: blur(90px);
    z-index: -1;
  }
  .top {
    width: 7.1rem;
    height: 1.4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    marquee {
      color: #fff;
      width: 5rem;
      flex: 1;
    }
  }
}
</style>