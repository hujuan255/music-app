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
        <div class="historyList" v-for="(keyword, i) in keywordList" :key="i">
          {{ keyword }}
        </div>
      </div>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shanchu"></use>
      </svg>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount } from "vue";
const placeholder = ref("陈奕迅");
const keywordList = ref([]); // 历史搜索关键词列表
const searchKeyword = ref(""); // 搜索关键词
//在挂载之前将获取的历史搜索关键词放入keywordList中,如果没有则初始化为空数组
onBeforeMount(() => {
  keywordList.value = localStorage.keywordList
    ? JSON.parse(localStorage.keywordList)
    : [];
});
// 输入后按下回车获取历史搜索关键词
const saveKeyword = () => {
  keywordList.value.push(searchKeyword.value);
  localStorage.keywordList = JSON.stringify(keywordList.value);
  searchKeyword.value = "";
};
</script>
<style lang='less' scoped>
.searchTop {
  width: 7.1rem;
  height: 4rem;
  margin: 0.2rem auto 0 auto;
  .searchTopNav {
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
    display: flex;
    margin: 0.4rem 0;
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
}
</style>