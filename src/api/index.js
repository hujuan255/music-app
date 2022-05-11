import requests from '@/utils/requests.js';

// 调用此接口 , 可获取 banner( 轮播图 ) 数据,type:资源类型,对应以下类型,默认为 0 即 PC
//0: pc 1: android 2: iphone 3: ipad
export const getBannerApi = (type = 0) => {
  //发请求：axios发请求返回结果Promise对象
  return requests({
    url: `http://localhost:3000/banner?type=${type}`,
    method: 'get'
  })
}
//获取推荐歌单 可选参数 : limit: 取出数量 , 默认为 10 
export const getGoodPlaylistsApi = (limit = 10) => {
  return requests({
    url: `http://localhost:3000/personalized?limit=${limit}`,
    method: 'get'
  })
}
//根据歌单id获取该歌单下的歌曲详情
export const getPlaylistDetailApi = (id) => {
  return requests({
    url: `http://localhost:3000/playlist/detail?id=${id}`,
    method: 'get'
  })
}
//根据歌曲id获取该歌曲下的歌词
export const getSongLyricApi = (id) => {
  return requests({
    url: `http://localhost:3000/lyric?id=${id}`,
    method: 'get'
  })
}
//根据输入的关键词搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 )
export const getSongByKeywordsApi = (keywords) => {
  return requests({
    url: `http://localhost:3000/search?keywords=${keywords}`,
    method: 'get'
  })
}