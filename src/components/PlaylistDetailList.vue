// 歌单详情列表
<template>
  <div class="playlistTop">
    <div class="bg">
      <div class="left">
        <svg class="icon icon-wodeVIP" aria-hidden="true">
          <use xlink:href="#icon-wodeVIP"></use>
        </svg>
        <div class="title">含6首VIP专项歌曲</div>
      </div>
      <div class="right">
        <div class="vipAdv">首开VIP仅5元</div>
        <svg class="icon icon-arrow" aria-hidden="true">
          <use xlink:href="#icon-arrow"></use>
        </svg>
      </div>
    </div>
  </div>
  <div class="playlist">
    <div class="top" v-if="playlist && playlist.tracks">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yunhang"></use>
        </svg>
        <div class="title-context">播放全部</div>
        <div class="title-count">(共{{ playlist.tracks.length }}首)</div>
      </div>
      <div class="right">
        <div class="iconfont icon-plus1"></div>
        <div class="collect">收藏</div>
        <div class="collectCount">
          ({{ utils.formatPlayCount(playlist.subscribedCount) }})
        </div>
      </div>
    </div>
    <div
      class="musiclist"
      v-if="playlist && playlist.tracks"
      v-for="(track, index) in playlist.tracks"
      :key="track.id"
    >
      <div class="left">
        <div class="index">{{ index + 1 }}</div>
        <div class="context">
          <div class="name" @click="setPlayMusicIndex(index)">
            {{ track.name }}
          </div>
          <div class="details">
            <div
              class="tags"
              v-if="playlist.tags"
              v-for="(tag, i) in playlist.tags"
              :key="i"
            >
              {{ tag }}
            </div>
            <div class="desc">{{ track.al.name }}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-caozuo-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg>
      </div>
    </div>
  </div>
  <PlayController></PlayController>
</template>
<script setup>
import utils from "@/utils/formatData.js";
import PlayController from "./PlayController.vue";
import { useStore } from "vuex";
const props = defineProps({
  playlist: {
    tracks: [],
  },
  playCurrentIndex: {},
});
const store = useStore();
const setPlayMusicIndex = (index) => {
  return store.commit("setPlayIndex", index);
};
</script>
<style lang='less' scoped>
.playlistTop {
  width: 7.5rem;
  margin: 1.4rem auto 0 auto;
  background-color: rgba(227, 227, 227, 0.7);
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .bg {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    .left,
    .right {
      display: flex;
      align-items: center;
      font-size: 0.3rem;
      .title {
        font-weight: bold;
        color: #555;
      }
      .vipAdv {
        color: #999;
        font-size: 0.28rem;
      }
      .icon-wodeVIP {
        margin-left: 0.1rem;
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.2rem;
      }
      .icon-arrow {
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 0.2rem 0 0.1rem;
        fill: #999;
      }
    }
  }
}
.playlist {
  /*   position: fixed;
  top: 6.5rem;
  bottom: 0px;
  height: calc(100% - 6.5rem); */
  display: flex;

  flex-direction: column;
  width: 7.5rem;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .top {
    width: 7.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    margin: 0 auto;
    .left {
      display: flex;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
        fill: #555;
        margin-right: 0.2rem;
      }
      .title-context {
        color: #555;
        font-size: 0.3rem;
        font-weight: bold;
      }
      .title-count {
        color: #999;
      }
    }
    .right {
      display: flex;
      width: 2.2rem;
      height: 0.76rem;
      background-color: #ff1818;
      border-radius: 30px;
      align-items: center;
      font-size: 0.26rem;

      .iconfont,
      .collect,
      .collectCount {
        color: #fff;
      }
      .iconfont {
        margin: 0.2rem;
      }
    }
  }
  .musiclist {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0.3rem;
    .left {
      display: flex;
      align-items: center;
      color: #999;
      .context {
        padding-left: 0.4rem;
        .name {
          width: 2.8rem;
          font-size: 0.3rem;
          font-weight: bold;
          overflow: hidden;
        }
        .details {
          display: flex;
          align-items: center;

          .tags {
            border: 0.1px solid #ff1818;
            border-radius: 3px;
            margin: 0.1rem 0.1rem 0.1rem 0;
            font-size: 0.2rem;
            color: #ff1818;
          }
          .desc {
            width: 2.5rem;
            color: #999;
            font-size: 0.26rem;
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
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        fill: #999;
      }
      .icon-caozuo-bofang {
        margin-right: 0.4rem;
      }
    }
  }
}
</style>