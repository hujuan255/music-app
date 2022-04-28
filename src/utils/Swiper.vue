// 轮播图banner
<template>
  <div class="swiper-container" id="swiperIndex">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, i) in imgs.value" :key="i">
        <img :src="item.pic" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { reactive, onMounted } from "vue";
import { getBannerApi } from "@/api/index.js";
export default {
  setup() {
    //初始化图片
    const imgs = reactive([
      (require = { pic: require("../assets/img/swiper1.gif") }),
      (require = { pic: require("../assets/img/swiper2.webp") }),
      (require = { pic: require("../assets/img/swiper3.webp") }),
    ]);
    onMounted(() => {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: true,
        direction: "horizontal", // shuip切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },
      });
      getBanner();
    });
    const getBanner = async () => {
      let res = await getBannerApi(2);
      if ((res.status = 200)) {
        imgs.value = res.data.banners;
      }
    };
    return {
      imgs,
      getBanner,
    };
  },
};
</script>
<style lang='less'>
#swiperIndex,
.swiper-container {
  width: 7.1rem;
  height: 3rem;
  border-radius: 10px;
  .img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet-active {
    background-color: #ff5c5c;
  }
}
</style>