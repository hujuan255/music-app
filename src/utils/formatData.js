//用格式化播放量：超过五位数用万位分隔，超过十万用亿位分隔
const utils = {
  formatPlayCount: (count) => {
    if (count >= 10000) {
      count = Math.floor(count / 10000) + '万';
    } else if (count >= 100000000) {
      count = Math.floor(count / 100000000) + '亿';
    }
    return count;
  },
  // 格式化名称的长度
  formatTitle: (title) => {
    if (title.length > 15) {
      return title.slice(0, 15) + "...";
    } else {
      return title;
    }
  }
}
export default utils;