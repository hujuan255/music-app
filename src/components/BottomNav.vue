<template>
  <div class="bottomNva">
    <div class="iconList">
      <div class="iconContent">
        <i class="iconfont icon-faxian"></i>
        <div class="title">发现</div>
      </div>
      <div class="iconContent">
        <i class="iconfont icon-xinhao"></i>
        <div class="title">播客</div>
      </div>
      <div class="iconContent">
        <i class="iconfont icon-yinle1"></i>
        <div class="title">我的</div>
      </div>
      <div class="iconContent">
        <i class="iconfont icon-users"></i>
        <div class="title">关注</div>
      </div>
      <div class="iconContent">
        <i class="iconfont icon-yinle"></i>
        <div class="title">云村</div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.bottomNva {
  width: 7.5rem;
  height: 1.2rem;
  border: none;
  border-top: 1px solid #e5e5e5;
  position: fixed;
  bottom: 0;
  left: 0;
  .iconList {
    width: 7.1rem;
    margin: 0.2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .title {
      font-size: 0.24rem;
      color: #999;
    }
    .icon {
      width: 0.4rem;
      height: 0.4rem;
    }
    .iconfont {
      font-size: 0.5rem;
    }
  }
}
</style>