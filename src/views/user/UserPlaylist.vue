
<template>
  <div class="userPlaylist">
    <div class="top">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-houtuijiantou"></use>
      </svg>
      <span>歌单广场</span>
    </div>

    <div class="nav">
      <div class="left">
        <div class="nav-item">推荐</div>
        <div class="nav-item">官方</div>
        <div class="nav-item">精品</div>
        <div class="nav-item">共享歌单</div>
        <div class="nav-item">华语</div>
        <div class="nav-item">流行</div>
        <div class="nav-item">电子</div>
        <div class="nav-item">轻音乐</div>
        <div class="nav-item">摇滚</div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo11"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.userPlaylist {
  width: 7.5rem;
  height: 100%;
  .top {
    width: 7.1rem;
    height: 1.2rem;
    margin: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: space-start;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    span {
      font-size: 0.36rem;
      color: #242424;
      font-weight: 600;
      text-align: center;
      margin: 0 auto;
    }
  }
  .nav {
    width: 7.1rem;
    margin: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 6.5rem;
      overflow: hidden;
      .nav-item {
        width: 1.5rem;
        height: 0.4rem;
        font-size: 0.28rem;
        margin: 0 0.2rem;
      }
    }
  }
}
</style>