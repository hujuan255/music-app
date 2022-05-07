// 歌单列表组件(注入了歌单列表头部组件，跟单列表组件)
<template>
  <div class="playlistDetail">
    <!-- 歌单详情头部组件 -->
    <PlaylistTop :playlist="playlist"></PlaylistTop>
    <!-- 歌单详情列表组件 :playlist将歌单通过props传给子组件-->
    <PlaylistDetailList :playlist="playlist"></PlaylistDetailList>
  </div>
</template>
<script setup>
import PlaylistTop from "../components/PlaylistTop.vue";
// 引入获得推荐歌单的api
import PlaylistDetailList from "../components/PlaylistDetailList.vue";
import { getPlaylistDetailApi } from "@/api/index.js";
import { onMounted } from "vue";
import { ref } from "vue";
import store from "@/store/index.js";
import { useRoute } from "vue-router";

let playlist = ref({});
let tracks = ref([]);

const route = useRoute();
//在onMounted中调用歌单;
onMounted(() => {
  getPlaylist();
});
// 获得推荐歌单列表
const getPlaylist = async () => {
  let res = await getPlaylistDetailApi(route.query.id);
  if (res.status == 200) {
    playlist.value = res.data.playlist;
    tracks.value = res.data.playlist.tracks;
    store.commit("setPlaylist", tracks.value);
    // console.log(tracks.value + "tracks");
  }
};
</script>
<style lang='less' scoped>
</style>