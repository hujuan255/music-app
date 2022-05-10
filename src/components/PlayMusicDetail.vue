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
    <div v-if="isShowPlayImg" class="playContent" @click="showMuscirWord">
      <img
        class="needle"
        :class="{ active: !isShowAudio }"
        src="@/assets/img/needle-ab.png"
      />
      <img class="disc-plus" src="@/assets/img/disc-plus.png" />
      <img class="pic" :src="playMusicDetail.al.picUrl" />
    </div>
    <div v-else class="lyrics" ref="lyrics" @click="showMuscirWord">
      <div class="scroll-lrc">
        <p
          :class="{
            active:
              store.state.currentTime * 1000 >= item.pre &&
              store.state.currentTime * 1000 < item.time,
          }"
          v-for="(item, i) in store.getters.lyricList"
          :key="i"
        >
          {{ item.lyric }}
        </p>
      </div>
    </div>
    <div v-show="!isLyrics" class="iconList">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yichang"></use>
      </svg>
      <div class="iconfont icon-xiaoxi"></div>
      <div class="iconfont icon-a-gengduoyuanxing"></div>
    </div>
    <div class="progress"></div>
    <div class="footerIcon">
      <div class="iconfont icon-xunhuan"></div>
      <div class="iconfont icon-24gl-previous" @click="goPlay(-1)"></div>
      <svg
        v-if="isShowAudio"
        class="icon icon-bofang"
        aria-hidden="true"
        @click="play"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon icon-zanting" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <div class="iconfont icon-24gl-next" @click="goPlay(1)"></div>
      <div class="iconfont icon-24gf-playlist"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
// props接收父组件传递的参数：对象playMusicDetail，isShowAudio是否显示音乐播放按钮，play方法是否播放音乐
const props = defineProps({
  playMusicDetail: {},
  isShowAudio: false,
  play: function () {
    $emit("play");
  },
  showLyric: function () {
    $emit("showLyric");
  },
});
//是否显示歌词
const isLyrics = ref(false);
//是否显示播放界面
const isShowPlayImg = ref(true);
const store = useStore();
const lyrics = ref("");
if (isLyrics) {
  //监听如果当前歌曲播放的时间发生变化，则更新歌词，即滚动和声音匹配
  watch(
    props.showLyric(),
    () => store.state.currentTime, //监听state中的currentTime属性
    () => {
      let p = document.querySelector("p.active"); //获取当前歌词
      let offsetTop = p.offsetTop; //获取当前歌词的offsetTop值
      lyrics.value.scrollTop = offsetTop; //设置歌词的scrollTop值为当前歌词的offsetTop值
    }
  );
}
//歌词与播放界面切换的方法
const showMuscirWord = () => {
  if (isShowPlayImg.value) {
    isLyrics.value = true;
    isShowPlayImg.value = false;
  } else {
    isLyrics.value = false;
    isShowPlayImg.value = true;
  }
};

//实现播放上一首、下一首的方法(参数为正负1)
const goPlay = (num) => {
  const playCurrentIndex = store.state.playCurrentIndex;
  const playlist = store.state.playlist;
  //获取当前歌曲的索引+num
  let index = playCurrentIndex + num;
  //如果索引小于0，则播放最后一首歌曲
  if (index < 0) {
    index = playlist.length - 1;
    //如果索引大于歌曲总数，则播放第一首歌曲
  } else if (index == playlist.length) {
    index = 0;
  }
  if (props.isShowAudio == false) {
    props.play("play", index);
  }
  //更新当前歌曲的索引
  return store.commit("setPlayIndex", index);
};
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
  .playContent {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5rem;
    .needle {
      width: 1.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      transform-origin: 0.3rem 0;
      transform: rotate(-10deg);
      transition: all 1s;
      z-index: 10;
    }
    .needle.active {
      width: 1.5rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      // 设置指针的旋转角度
      transform-origin: 0.3rem 0;
      transform: rotate(30deg);
      transition: all 1s;
      z-index: 10;
    }
    .disc-plus {
      width: 5rem;
      height: 5rem;
      position: absolute;
      height: auto;
      left: 1.3rem;
      top: 2rem;
    }
    .pic {
      position: absolute;
      left: 2.25rem;
      top: 2.95rem;
      width: 3.15 rem;
      height: 3.15rem;
      border-radius: 50%;
    }
  }
  .lyrics {
    position: relative;
    width: 7.5rem;
    height: 7.1rem;
    left: 0;
    top: 1.5rem;
    overflow: scroll;
    text-align: center;
    padding: 0.2rem 0;
    .scroll-lrc {
      width: 7.1rem;
      position: absolute;
      overflow: hidden;
      top: 1.5rem;
      left: calc(50% - 3.55rem);
      p {
        color: #fff;
      }
      p.active {
        color: #ff0000;
      }
    }
  }
  .iconList {
    display: flex;
    justify-content: space-around;
    width: 7.5rem;
    align-items: center;
    position: absolute;
    top: 10rem;
    .icon,
    .icon-xiaoxi,
    .icon-a-gengduoyuanxing {
      width: 0.45rem;
      height: 0.45rem;
      font-size: 0.45rem;
      fill: #fff;
      color: #fff;
    }
  }
  .footerIcon {
    display: flex;
    justify-content: space-around;
    width: 7.5rem;
    align-items: center;
    position: absolute;
    bottom: 0.8rem;
    .iconfont {
      font-size: 0.4rem;
      color: #fff;
    }
    .icon {
      width: 0.8rem;
      height: 0.8rem;
      fill: #fff;
    }
  }
}
</style>