// 底部控制音乐播放的组件
<template>
  <div
    class="playController"
    v-if="store.state.playlist[store.state.playCurrentIndex].al"
  >
    <div class="left" @click="show = !show">
      <img
        :src="store.state.playlist[store.state.playCurrentIndex].al.picUrl"
      />
      <div class="content">
        <div class="title" @click="showLyric">
          {{ store.state.playlist[store.state.playCurrentIndex].name }}
        </div>
        <div class="desc">横滑可以切换上下首哦</div>
      </div>
    </div>
    <div class="right">
      <svg
        v-if="isShowAudio"
        class="icon icon-bofang2"
        aria-hidden="true"
        @click="play"
      >
        <use xlink:href="#icon-bofang2"></use>
      </svg>
      <svg v-else class="icon icon-zanting" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon icon-24gf-playlist" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlist"></use>
      </svg>
    </div>
    <!-- @back 触发返回事件   设置props将playMusicDetail的数据，isShowAudio的值，及play的方法传给子组件-->
    <PlayMusicDetail
      :isShowAudio="isShowAudio"
      :play="play"
      @back="show = !show"
      v-show="show"
      :playMusicDetail="store.state.playlist[store.state.playCurrentIndex]"
      :showLyric="showLyric"
    ></PlayMusicDetail>
    <!-- timeupdate 时间更新，持续时间的变化 -->
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${
        store.state.playlist[store.state.playCurrentIndex].id
      }.mp3`"
      @timeupdate="timeUpdateListener"
      @durationchange="durationChangeListener"
    ></audio>
  </div>
</template>
<script setup>
import PlayMusicDetail from "@/components/PlayMusicDetail.vue";
import PlaylistDetailListVue from "@/components/PlaylistDetailList.vue";
import { onUpdated, ref } from "vue";
import { useStore } from "vuex";
const audio = ref(null); //播放器
const isShowAudio = ref(true); //是否显示播放按钮
const show = ref(false);
const store = useStore();

//播放方法，如果播放器没有播放，点击播放按钮则播放，如果播放器正在播放，点击暂停则暂停
const play = () => {
  if (audio.value.paused) {
    audio.value.play();
    isShowAudio.value = false;
    updateTime();
  } else {
    audio.value.pause();
    isShowAudio.value = true;
    clearInterval(store.state.intervalId);
  }
};
//将当前播放歌曲的id传给store中异步请求的方法
const showLyric = () => {
  if (
    store.state.playlist[store.state.playCurrentIndex].id != "" &&
    store.state.playlist[store.state.playCurrentIndex].id != undefined
  ) {
    store.dispatch("reqLyric", {
      id: store.state.playlist[store.state.playCurrentIndex].id,
    });
  }
};
//更新
onUpdated(() => {
  //当播放的曲目发生变化时，更新歌词
  showLyric();
});
//更新播放时间
const updateTime = () => {
  //设置间隔1秒钟更新一次
  store.state.intervalId = setInterval(() => {
    if (
      audio.value.currentTime != null &&
      audio.value.currentTime != undefined
    ) {
      store.commit("setCurrentTime", audio.value.currentTime);
    }
  }, 1000);
};
</script>
<style lang='less' scoped>
.playController {
  background-color: #fff;
  border-top: 1px solid #ddd;
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  .left {
    display: flex;
    align-items: center;
    margin-left: 0.2rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 1rem;
    }
    .content {
      display: flex;
      flex-direction: column;
      margin-left: 0.2rem;
      .title {
        width: 3.8rem;
        font-size: 0.28rem;
        font-weight: 500;
        overflow: hidden;
        // 超出用省略号
        text-overflow: ellipsis;
        //垂直布局
        display: -webkit-box;
        //每列1行
        -webkit-line-clamp: 1;
        //溢出隐藏
        -webkit-box-orient: vertical;
      }
      .desc {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .right {
    align-content: center;
    margin-right: 0.2rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .icon-bofang2,
    .icon-zanting {
      margin: 0 0.4rem;
    }
  }
}
</style>