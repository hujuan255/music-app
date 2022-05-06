import { createStore } from 'vuex'
import { getSongLyricApi } from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{ al: {} }],//歌单列表
    playCurrentIndex: 0,//当前播放歌曲索引
    lyric: {},//歌曲歌词
  },
  getters: {
  },
  mutations: {
    setPlaylist(state, playlist) {
      state.playlist = playlist
    },
    setPlayIndex(state, playCurrentIndex) {
      state.playCurrentIndex = playCurrentIndex
    },
    setLyric(state, lyric) {
      state.lyric = lyric
    }
  },
  actions: {
    async reqLyric(content, payload) {
      console.log(payload);
      let res = await getSongLyricApi(payload)
      console.log(res)
      //content.commit('setLyric', res.data.lrc.lyric)
      //console.log(res.data.lrc.lyric)
    }
  },
  modules: {
  }
})
