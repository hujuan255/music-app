<template>
  <div class="login">
    <div class="top">立即体验</div>
    <div class="LoginMethod">
      <button class="phoneLogin" @click="$router.push('/phoneLogin')">
        手机号登录
      </button>
      <button class="wechatLogin">微信登录</button>
    </div>
    <div class="agree">
      <div class="agreeInput">
        <i
          v-if="isShowAgreeChecked"
          @click="isShowAgreeChecked = !isShowAgreeChecked"
          class="iconfont icon-weixuanzhongyuanquan"
        ></i>
        <i
          v-else
          class="iconfont icon-yuanxingxuanzhongfill"
          @click="isShowAgreeChecked = !isShowAgreeChecked"
        ></i>
        <span class="agreeFont">同意</span>
        <span class="terms">服务条款、隐私政策</span>
      </div>
    </div>
    <div class="bottom">
      <svg class="icon partner" aria-hidden="true">
        <use xlink:href="#icon-icon_xinlang-chunselogo"></use>
      </svg>
      <svg class="icon partner" aria-hidden="true">
        <use xlink:href="#icon-apple"></use>
      </svg>
      <div class="question">登录遇到问题</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const isShowAgreeChecked = ref(true);
</script>
<style lang='less' scoped>
.login {
  background-color: #c20c0f;
  width: 7.5rem;
  height: 100%;
  border-radius: 0.2rem;
  .top {
    margin: 0.8rem 0.5rem;
    float: right;
    color: rgba(193, 184, 180, 0.886);
  }
  .LoginMethod {
    position: fixed;
    top: calc(35%);
    left: 1.25rem;
    .phoneLogin,
    .wechatLogin {
      background-color: #fff;
      width: 5rem;
      height: 1rem;
      border: none;
      border-radius: 2rem;
      color: #c20c0f;
      font-weight: 500;
      font-size: 0.38rem;
    }
    .wechatLogin {
      margin-top: 0.3rem;
      background-color: #c20c0f;
      color: #fff;
      border: 1.5px solid #fff;
    }
  }
  .agree {
    position: absolute;
    width: 4rem;
    top: calc(58%);
    left: 1.75rem;
    font-size: 0.2rem;
    text-align: center;
    .iconfont {
      font-size: 0.26rem;
      color: rgba(193, 184, 180, 0.886);
    }
    .agreeFont {
      color: rgba(193, 184, 180, 0.886);
      margin: 0 0.1rem;
    }
    .terms {
      color: #fff;
    }
  }
  .bottom {
    position: absolute;
    width: 4rem;
    top: calc(80%);
    left: 2.75rem;
    .partner {
      font-size: 0.8rem;
      width: 0.8rem;
      height: 0.8rem;
      background: #fff;
      border-radius: 50%;
      margin-left: 0.2rem;
    }
    .question {
      color: rgba(193, 184, 180, 0.886);
      font-size: 0.28rem;
      margin: 0.5rem 0.24rem;
    }
  }
}
</style>