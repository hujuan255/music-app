// 跟单列表头部组件
<template>
  <div class="playlistTop">
    <img class="bg" :src="playlist.coverImgUrl" />
    <div class="playlistTopNav">
      <div class="back">
        <svg class="icon" aria-hidden="true" @click="$router.push('/')">
          <use xlink:href="#icon-arrow_left"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="rignt">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-Search"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo1"></use>
        </svg>
      </div>
    </div>
    <div class="playlistTopCenter">
      <img :src="playlist.coverImgUrl" />
      <div class="right">
        <div class="title">{{ playlist.name }}</div>
        <div class="name" v-if="playlist && playlist.creator">
          <img :src="playlist.creator.avatarUrl" />
          <div class="nickname">{{ playlist.creator.nickname }}</div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg>
        </div>
        <div class="playlistTopCenterBottom">
          <div class="desc">{{ playlist.description }}</div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow"></use>
          </svg>
        </div>
      </div>
    </div>
    <div class="playlistTopBottom">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xinxi"></use>
        </svg>
        <div class="text">{{ playlist.commentCount }}</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31fenxiang"></use>
        </svg>
        <div class="text">{{ playlist.shareCount }}</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <div class="text">下载</div>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--Checked"></use>
        </svg>
        <div class="text">多选</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
const props = defineProps({
  playlist: {
    creator: {},
  },
});
onMounted(() => {
  console.log(props.playlist);
});
</script>
<style lang='less' scoped>
.playlistTop {
  width: 7.1rem;
  height: 4rem;
  margin: 0.2rem auto 0 auto;
  .playlistTopNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .back {
      display: flex;
      align-items: center;
      .icon {
        margin-right: 0.5rem;
      }
      .title {
        font-size: 0.44rem;
        font-weight: 700;
        color: #fff;
      }
    }
    .rignt {
      .icon {
        margin-left: 0.4rem;
      }
    }
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      fill: #fff;
    }
  }
  .bg {
    width: 7.5rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(80px);
  }
  .playlistTopCenter {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    margin: 0.5rem auto 0 auto;
    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 5px;
      margin-right: 0.4rem;
    }
    .right {
      display: flex;
      flex-direction: column;

      .title {
        color: #fff;
        font-size: 0.32rem;
        font-weight: bold;
      }
      .name {
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          margin: 0.2rem;
        }
        .nickname {
          font-size: 0.28rem;
          color: #eeeeee;
          margin-right: 0.01rem;
        }
        .icon {
          fill: #eeeeee;
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .playlistTopCenterBottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .desc {
          width: 4rem;
          color: #ccc;
          font-size: 0.25rem;
          height: 0.66rem;
          overflow: hidden;
          // 超出用省略号
          text-overflow: ellipsis;
          //垂直布局
          display: -webkit-box;
          //每列2行
          -webkit-line-clamp: 2;
          //溢出隐藏
          -webkit-box-orient: vertical;
        }
        .icon {
          fill: #eeeeee;
        }
      }
    }
  }
  .playlistTopBottom {
    display: flex;
    justify-content: space-between;
    width: 6rem;
    margin: 0 auto;
    .iconItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: #fff;
        margin-bottom: 0.1rem;
      }
      .text {
        color: #fff;
        font-size: 0.2rem;
      }
    }
  }
}
</style>