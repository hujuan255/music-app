//获取当前设备的宽度
function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  //设置设计稿的最大宽度，如果大于750则设置为750
  if (deviceWidth > 750) {
    deviceWidth = 750
  }
  //设置设计稿的最小宽度，如果小于320则设置为320
  if (deviceWidth < 320) {
    deviceWidth = 320
  }
  /**
   * 设计稿为750px
   * 设置1半的宽度，就是375px
   * 1rem = 100px的设计稿的宽度
   * 一半的宽度就时3.75rem
   */
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  document.querySelector('body').style.fontSize = 0.3 + 'rem';
}
//调用函数
remSize()
//当窗口发生变化的时候也调用一下函数
window.onresize = function () {
  remSize()
}