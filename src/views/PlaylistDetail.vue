// 歌单列表组件(注入了歌单列表头部组件，跟单列表组件)
<template>
  <div class="playlistDetail">
    <PlaylistTop :playlist="playlist"></PlaylistTop>
    <PlaylistDetailList :playlist="playlist"></PlaylistDetailList>
  </div>
</template>
<script setup>
import PlaylistTop from "../components/PlaylistTop.vue";
import PlaylistDetailList from "../components/PlaylistDetailList.vue";
import { getPlaylistDetailApi } from "@/api/index.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import store from "@/store/index.js";

const route = useRoute();

let playlist = ref({});
let tracks = ref([]);
onMounted(() => {
  getPlaylist();
});
const getPlaylist = async () => {
  let res = await getPlaylistDetailApi(route.query.id);
  if (res.status == 200) {
    playlist.value = res.data.playlist;
    tracks.value = res.data.playlist.tracks;
    store.commit("setPlaylist", tracks.value);
    console.log(tracks.value + "tracks");
  }
};
</script>
<style lang='less' scoped>
</style>