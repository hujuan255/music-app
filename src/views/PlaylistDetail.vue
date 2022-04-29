<template>
  <div class="playlistDetail"></div>
</template>
<script setup>
import { getPlaylistDetailApi } from "@/api/index.js";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();

let playlist = ref([]);
onMounted(() => {
  getPlaylist();
});
const getPlaylist = async () => {
  //let idValue = route.query;
  //console.log(id.id);
  let res = await getPlaylistDetailApi(route.query.id);
  if (res.status == 200) {
    playlist = res.data.playlist;
  }
};
</script>
<style lang='less' scoped>
</style>