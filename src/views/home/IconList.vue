// 图标列表组件
<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon icon-rili" aria-hidden="true">
        <use xlink:href="#icon-rili"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-radio1"></use>
      </svg>
      <span>私人fm</span>
    </div>
    <div class="iconItem">
      <svg class="icon icon-gedan" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-daochu1024-02"></use>
      </svg>
      <span>排行榜</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>直播</span>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.iconList {
  width: 7.5rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
    span {
      font-size: 0.24rem;
      margin-top: 0.2rem;
    }
  }
}
</style>