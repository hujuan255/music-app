import { createStore } from 'vuex'
import { getSongLyricApi, getPhoneNumloginApi, getUserInfoByIdApi } from '@/api/index.js'

export default createStore({
  state: {
    playlist: [{ al: {} }],//歌单列表
    playCurrentIndex: 0,//当前播放歌曲索引
    lyric: '',//歌曲歌词
    currentTime: 0,//当前播放时间
    intervalId: 0,//定时器id
    // 用户信息
    userInfo: {
      isLogin: false,//是否登录，默认没有登录
      account: {},//用户账号信息
      profile: {},//用户个人信息
    }
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
    //修改歌单
    setPlaylist(state, playlist) {
      state.playlist = playlist
    },
    //把歌曲的索引添加到歌单中
    pushPlaylist(state, song) {
      state.playlist.push(song);
    },
    //修改当前播放歌曲索引
    setPlayIndex(state, playCurrentIndex) {
      state.playCurrentIndex = playCurrentIndex
    },
    //修改歌词
    setLyric(state, lyric) {
      state.lyric = lyric
    },
    //修改当前播放时间
    setCurrentTime(state, currentTime) {
      state.currentTime = currentTime
    },
    //修改用户信息
    setUserInfo(state, user) {
      state.userInfo = user
    }
  },
  actions: {
    //获取歌词
    async reqLyric(content, payload) {
      let res = await getSongLyricApi(payload.id)
      content.commit('setLyric', res.data.lrc.lyric)
    },
    //登录
    async reqPhoneNumLogin(content, palyload) {
      let result = await getPhoneNumloginApi(palyload.phoneNum, palyload.password)
      if (result.data.code == 200) {
        content.state.userInfo.isLogin = true;
        content.state.userInfo.account = result.data.account;
        let profile = await getUserInfoByIdApi(result.data.account.id)
        content.state.userInfo.profile = profile.data;
        localStorage.userData = JSON.stringify(content.state.userInfo);
        content.commit('setUserInfo', content.state.userInfo)
      }
      console.log(result);
      return result;
    },
  },

  modules: {
  }
})
