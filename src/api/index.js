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
export const getGoodPlaylistsApi = (limit = 10, offset = 0) => {

}