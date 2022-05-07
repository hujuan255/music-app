import { createStore } from 'vuex'
import { getSongLyricApi } from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{ al: {} }],//歌单列表
    playCurrentIndex: 0,//当前播放歌曲索引
    lyric: '',//歌曲歌词
    currentTime: 0,//当前播放时间
    intervalId: 0,//定时器id
  },
  getters: {
    // 设置歌词
    lyricList: state => {
      let list = state.lyric.split(/\n/).map((item, i) => {
        let min = parseInt(item.slice(1, 3));//截取分钟
        let sec = parseInt(item.slice(4, 6));//截取秒
        let ms = parseInt(item.slice(7, 10));//截取毫秒

        return {
          min, sec, ms,
          lyric: item.slice(12, item.length),//截取歌词
          content: item,//歌词内容
          time: ms + sec * 1000 + min * 60 * 1000//歌词时间
        }
      })
      list.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0
        } else {
          item.pre = list[i - 1].time
        }
      })
      return list
    }
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
    },
    setCurrentTime(state, currentTime) {
      state.currentTime = currentTime
    }
  },
  actions: {
    //获取歌词
    async reqLyric(content, payload) {
      let res = await getSongLyricApi(payload.id)
      content.commit('setLyric', res.data.lrc.lyric)
    },
  },
  modules: {
  }
})
