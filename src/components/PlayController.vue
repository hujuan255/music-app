<template>
  <div class="playController">
    <div class="left">
      <img src="" />
      <div class="content">
        <div class="title"></div>
        <div class="desc">横滑可以切换上下首</div>
      </div>
    </div>
    <div class="right">
      <svg class="icon icon-arrow" aria-hidden="true">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg class="icon icon-arrow" aria-hidden="true">
        <use xlink:href="#icon-24gf-playlist"></use>
      </svg>
    </div>
  </div>
</template>
<script setup>
import store from "@/store/index.js";
import { mapState, mapMutations } from "vuex";
import { computed } from "vue";
computed(mapState(["playlist", "playCurrentIndex"]));
</script>
<style lang='less' scoped>
.playController {
  width: 7.5rem;
  height: 2rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>