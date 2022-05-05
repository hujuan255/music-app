import { createStore } from 'vuex'
import { reactive } from 'vue'

export default createStore({
  state: {
    playlist: [{ al: {} }],
    playCurrentIndex: 0,
  },
  getters: {
  },
  mutations: {
    setPlaylist(state, playlist) {
      state.playlist = playlist
    },
    setPlayIndex(state, playCurrentIndex) {
      state.playCurrentIndex = playCurrentIndex
    }
  },
  actions: {
  },
  modules: {
  }
})
