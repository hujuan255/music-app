// 首页头部
<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span class="navBtn" @click="$router.push('/userInfo')">我的</span>
      <span class="navBtn active" @click="$router.push('/')">发现</span>
      <span class="navBtn">云村</span>
      <span class="navBtn">视频</span>
    </div>
    <div class="topRight" @click="$router.push('search')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.topNav {
  width: 7.5rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  color: #838284;
  margin: 0 auto;
  .icon {
    width: 0.3rem;
    height: 0.3rem;
  }
  .topCenter {
    width: 5rem;
    display: flex;
    justify-content: space-around;
    font-size: 0.3rem;
    .active {
      font-weight: 900;
    }
  }
}
</style>