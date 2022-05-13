<template>
  <div class="userInfo">
    <div class="bg">
      <div class="top">
        <svg class="icon" aria-hidden="true" @click="$router.push('/')">
          <use xlink:href="#icon-31liebiao"></use>
        </svg>
        <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </div>
      <div class="topNav">
        <div class="avatar">
          <img :src="store.state.userInfo.profile.profile.avatarUrl" />
        </div>
        <div class="account">
          <div class="name">
            {{ store.state.userInfo.profile.profile.nickname }}
          </div>
          <div class="tag">
            <div class="focus">
              <span class="count">{{
                store.state.userInfo.profile.profile.follows
              }}</span>
              <span class="text">关注</span>
            </div>
            <div class="fan">
              <span class="count">{{
                store.state.userInfo.profile.profile.sCount
              }}</span>
              <span class="text">粉丝</span>
            </div>
            <div class="focus">
              <span class="text">Lv.</span>
              <span class="count">0</span>
            </div>
          </div>
        </div>
      </div>
      <div class="iconList">
        <div class="top">
          <div class="iconContent">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yunhang"></use>
            </svg>
            <div class="title">最近播放</div>
          </div>
          <div class="iconContent">
            <i class="icon iconfont icon-yinlewenjian"></i>
            <div class="title">本地、下载</div>
          </div>
          <div class="iconContent">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shangchuan"></use>
            </svg>
            <div class="title">云盘</div>
          </div>
          <div class="iconContent">
            <i class="icon iconfont icon-gongwenbao"></i>
            <div class="title">已购</div>
          </div>
        </div>
        <div class="bottom">
          <div class="iconContent">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-haoyoutuijie"></use>
            </svg>
            <div class="title">我的好友</div>
          </div>
          <div class="iconContent">
            <i class="icon iconfont icon-shoucang"></i>
            <div class="title">收藏和赞</div>
          </div>
          <div class="iconContent">
            <i class="icon iconfont icon-xinhao"></i>
            <div class="title">我的播客</div>
          </div>
          <div class="iconContent">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg>
            <div class="title">音乐罐子</div>
          </div>
        </div>
        <div class="moreApps">
          <svg class="icon icon-plus1" aria-hidden="true">
            <use xlink:href="#icon-plus1"></use>
          </svg>
          <div class="title">音乐应用</div>
        </div>
      </div>
      <BottomNav></BottomNav>
    </div>
  </div>
</template>
<script setup>
import BottomNav from "@/components/BottomNav.vue";
import { useStore } from "vuex";
const store = useStore();
</script>
<style lang='less' scoped>
.userInfo {
  width: 7.5rem;
  height: 100%;
  .bg {
    width: 7.5rem;
    height: 100%;
    background-color: #242424;
    box-shadow: inset 1px 2px 1px #999;
    .top {
      width: 7.5rem;
      display: flex;
      justify-content: space-between;
      fill: #fff;
      .icon {
        margin: 0.2rem;
        width: 0.4rem;
        height: 0.4rem;
      }
    }
    .topNav {
      margin: 1.5rem auto 0.4rem;
      display: flex;
      flex-direction: column;

      .avatar,
      img {
        position: fixed;
        left: calc(50% - 0.75rem);
        top: 1.55rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: #fff;
        z-index: 1;
      }
      .account {
        margin: 0 auto;
        width: 6.7rem;
        height: 2.3rem;
        background-color: #58585862;
        box-shadow: inset 1px 1px 500px rgba(153, 153, 153, 0.132);
        border-radius: 0.2rem;
        color: #fff;

        .name {
          text-align: center;
          font-size: 0.28rem;
          color: #fff;
          margin: 1rem 0 0.1rem;
        }
        .tag {
          width: 3rem;
          margin: 0.2rem auto 0;
          display: flex;
          justify-content: space-between;
          .count,
          .text {
            font-size: 0.24rem;
            color: #bbb;
          }
          .count {
            padding: 0 0.1rem;
          }
        }
      }
    }
    .iconList {
      width: 6.7rem;
      height: 4.5rem;
      border: 1px solid rgba(88, 88, 88, 0.148);
      box-shadow: inset 3px 3px 200px rgba(88, 88, 88, 0.148);
      opacity: 1;
      margin: 0 auto;
      border-radius: 0.2rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      .bottom {
        border-bottom: 1px solid rgba(88, 88, 88, 0.326);
      }
      .top,
      .bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0.2rem;
        .iconContent {
          font-size: 0.24rem;
          display: flex;
          flex-direction: column;
          width: 1.2rem;
          align-items: center;
          .title {
            font-size: 0.24rem;
            color: #bbb;
            padding-bottom: 0.3rem;
          }
          .icon {
            fill: #c4ddff;
            width: 0.5rem;
            height: 0.5rem;
          }
          .iconfont {
            color: #c4ddff;
            font-size: 0.5rem;
          }
        }
      }
      .moreApps {
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        margin: 0.2rem;
        .icon-plus1 {
          fill: #999;
          width: 0.3rem;
          height: 0.3rem;
          margin: 0 0.1rem;
        }
        .title {
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
  }
}
</style>