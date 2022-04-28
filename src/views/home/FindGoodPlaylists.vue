// 发现好歌单lists
<template>
  <div class="findGoodPlaylist">
    <div class="topText">
      <div class="left">发现好歌单</div>
      <div class="right">查看更多</div>
    </div>
    <div class="imgContent">
      <div class="imgs">
        <img src="" alt="" />
      </div>
      <div class="text">
        <div class="title"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.findGoodPlaylist {
  width: 7.5rem;
  height: 3.5rem;
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
}
</style>