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
      if (state.lyric == null) {
        return
      }
      //歌词换行并循环,分隔内容和时，分，秒
      let list = state.lyric.split(/\n/).map((item, i) => {
        let min = parseInt(item.slice(1, 3));//截取分钟
        let sec = parseInt(item.slice(4, 6));//截取秒
        let ms = parseInt(item.slice(7, 11));//截取毫秒
        let time = ms + sec * 1000 + min * 60 * 1000//歌词时间
        return {
          min, sec, ms, time,
          lyric: item.slice(12, item.length),//截取歌词
          item,//歌词内容
        }
      })
      //加入pre属性，判断当前歌词到那一句了
      list.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0
        } else {
          item.pre = list[i - 1].time
        }
      })
      let arr = [...list]
      arr.forEach((item, i) => {
        item.pre = item.time
        if (i + 1 > arr.length - 1) {
          item.time = arr[i].time
        } else {
          item.time = arr[i + 1].time
        }
      })
      return arr;
    }
  },
  mutations: {
    setPlaylist(state, playlist) {
      state.playlist = playlist
    },
    setPlayIndex(state, playCurrentIndex) {
      state.playCurrentIndex = playCurrentIndex
      console.log(playCurrentIndex)
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
