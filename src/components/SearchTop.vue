// 歌单列表头部组件
<template>
  <div class="searchTop">
    <div class="searchTopNav">
      <div class="back">
        <svg class="icon" aria-hidden="true" @click="$router.push('/')">
          <use xlink:href="#icon-arrow_left"></use>
        </svg>
      </div>
      <input
        v-model="searchKeyword"
        type="text"
        :placeholder="placeholder"
        @keydown.enter="saveKeyword"
      />
    </div>
    <div class="searchHistory">
      <div class="historyTitle">历史</div>
      <div class="historyContent">
        <div
          @click="searchByHistoryKeyword(keyword)"
          class="historyList"
          v-for="(keyword, i) in keywordList"
          :key="i"
        >
          {{ keyword }}
        </div>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanchu"></use>
      </svg>
    </div>
    <div class="searchSongsList">
      <div class="top">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yunhang"></use>
          </svg>
          <div class="title-context">播放全部</div>
          <div class="title-count">(共{{ searchSongsList.length }}首)</div>
        </div>
      </div>
      <div
        class="musiclist"
        v-if="searchSongsList"
        v-for="(song, index) in searchSongsList"
        :key="song.id"
      >
        <div class="left">
          <div class="index">{{ index + 1 }}</div>
          <div class="context">
            <div class="name" @click="playMusic(song, index)">
              {{ song.name }}
            </div>
            <div class="details">
              <div class="desc">{{ song.album.name }}</div>
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
  </div>
  <PlayController v-show="isShowPlayController"></PlayController>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
import { getSongByKeywordsApi } from "@/api/index.js";
import PlayController from "./PlayController.vue";
import { useStore } from "vuex";
const placeholder = ref("陈奕迅");
const keywordList = ref([]); // 历史搜索关键词列表
const searchKeyword = ref(""); // 搜索关键词
const searchSongsList = ref([]); //根据关键词搜索出来的歌曲
const isShowPlayController = ref(false); //是否显示播放器组件
//在挂载之前将获取的历史搜索关键词放入keywordList中,如果没有则初始化为空数组
onBeforeMount(() => {
  keywordList.value = localStorage.keywordList
    ? JSON.parse(localStorage.keywordList)
    : [];
});
// 输入后按下回车获取历史搜索关键词,并将搜索到的歌曲列表展示
const saveKeyword = async () => {
  keywordList.value.push(searchKeyword.value);
  //将收集的关键字不能重复，set只出现一次
  keywordList.value = Array.from(new Set(keywordList.value));
  //收集的关键字最长为10个
  if (keywordList.value.length > 10) {
    keywordList.value = keywordList.value.slice(
      keywordList.value.length - 10,
      keywordList.value.length
    );
  }
  localStorage.keywordList = JSON.stringify(keywordList.value);
  searchKeyword.value = "";
  let res = await getSongByKeywordsApi(searchKeyword);
  console.log(res);
  if (res.status == 200) {
    searchSongsList.value = res.data.result.songs;
  }
};
//点击历史搜索中的关键字，搜索歌曲
const searchByHistoryKeyword = (keyword) => {
  searchKeyword.value = keyword;
  saveKeyword();
};
const store = useStore();
//点击播放歌曲
const playMusic = (song, index) => {
  song.al = song.album;
  song.playCurrentIndex = song.album.id;
  song.al.picUrl = song.album.artist.img1v1Url;
  store.commit("pushPlaylist", song);
  store.commit("setPlayIndex", store.state.playlist.length - 1);
  isShowPlayController.value = true;
};
</script>
<style lang='less' scoped>
.searchTop {
  width: 7.1rem;
  margin: 0.4rem auto 0 auto;
  .searchTopNav {
    position: fixed;
    .back {
      float: left;
      .icon {
        margin-right: 0.3rem;
        width: 0.5rem;
        height: 0.5rem;
        fill: rgb(60, 60, 60);
      }
    }

    input {
      height: 0.6rem;
      width: 6rem;
      border: none;
      border-bottom: 2px solid #ccc;
    }
    ::placeholder {
      color: #eee;
      font-size: 0.36rem;
    }
  }
  .searchHistory {
    position: fixed;
    top: 1.2rem;
    display: flex;
    width: 7.1rem;
    margin: 0.4rem auto;
    .historyTitle {
      width: 1rem;
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.32rem;
      color: rgb(88, 88, 88);
      font-weight: 700;
    }
    .historyContent {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .historyList {
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #eee;
        border-radius: 0.4rem;
        padding: 0 0.15rem;
        margin: 0.1rem;
      }
    }

    .icon {
      width: 0.36rem;
      height: 0.36rem;
      fill: #999;
    }
  }
  .searchSongsList {
    position: fixed;
    top: 4rem;
    display: flex;
    flex-direction: column;
    width: 7.1rem;
    height: 100%;
    background-color: #fff;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    overflow: scroll;
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
            // 超出用省略号
            text-overflow: ellipsis;
            //垂直布局
            display: -webkit-box;
            //每列1行
            -webkit-line-clamp: 1;
            //溢出隐藏
            -webkit-box-orient: vertical;
          }
          .details {
            display: flex;
            align-items: center;
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
}
</style>