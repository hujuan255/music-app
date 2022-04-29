// 轮播图banner
<template>
  <Carousel class="carousel" :autoplay="2000" :wrap-around="true">
    <Slide v-for="(item, i) in imgs" :key="i">
      <img :src="item.pic" />
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { onMounted, ref } from "vue";
import { getBannerApi } from "@/api/index.js";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    //初始化图片
    const imgs = ref([]);
    onMounted(() => {
      getBanner();
    });
    const getBanner = async () => {
      let res = await getBannerApi(2);
      imgs.value = res.data.banners;
    };
    return {
      imgs,
    };
  },
};
</script>
<style lang='less' scoped>
.carousel {
  width: 7.1rem;
  height: 3rem;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .carousel__pagination {
    position: relative;
    bottom: 0.5rem;
    // .carousel__pagination-button .carousel__pagination-button--active {
    //   background-color: #ff5a00;
    // }
  }
}
</style>