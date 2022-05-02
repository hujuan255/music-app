import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: [],
    playCurrentIndex: 0,
  },
  getters: {
  },
  mutations: {
    setPlaylist(state, playlist) {
      state.playlist = playlist
    }
  },
  actions: {
  },
  modules: {
  }
})
