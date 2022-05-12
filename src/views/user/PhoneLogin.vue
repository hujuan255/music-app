<template>
  <div class="bg">
    <div class="top">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-guanbi1"></use>
      </svg>
      <div class="title">手机号登录</div>
    </div>
    <div class="content">
      <div class="tag1">登录体验更所精彩</div>
      <div class="tag2">未注册手机号登录后将自动创建账号</div>
      <input
        v-model="phoneNum"
        type="text"
        name="phoneNum"
        placeholder="输入手机号"
      />
      <input
        v-model="password"
        type="password"
        name="password"
        placeholder="输入密码"
      />
      <button @click="phoneNumLogin">下一步</button>
      <div class="recover">找回账号</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const phoneNum = ref("");
const password = ref("");
const store = useStore();
const router = useRouter();
const phoneNumLogin = async () => {
  let result = await store.dispatch("reqPhoneNumLogin", {
    phoneNum: phoneNum.value,
    password: password.value,
  });
  console.log(result);
  if (result.data.code == 200) {
    router.push("/userInfo");
  }
};
</script>
<style lang='less' scoped>
.bg {
  width: 7.5rem;
  height: 100%;
  background-color: #242424;
  box-shadow: inset 1px 2px 1px #999;
  .top {
    width: 100%;
    height: 1.2rem;
    background-color: #58585862;
    box-shadow: inset 2px 2px 3px #999;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
      margin: 0 0 0.2rem 0.2rem;
    }
    .title {
      color: #fff;
      font-size: 0.4rem;
      margin: 0.2rem 2rem;
    }
  }
  .content {
    margin: 0.4rem 0;
    .tag1 {
      font-size: 0.4rem;
      color: #fff;
      margin: 0.2rem 0.3rem;
    }
    .tag2 {
      font-size: 0.28rem;
      color: #999;
      margin: 0.1rem 0.3rem;
    }
    input {
      width: 5rem;
      height: 1rem;
      margin: 0.2rem 0.3rem;
      border: none;
      background-color: #242424;
      border-bottom: 1.5px solid #999;
      font-size: 0.3rem;
    }
    button {
      width: 5rem;
      height: 1rem;
      margin: 1.2rem 1.2rem;
      border-radius: 0.5rem;
      border: none;
    }
    .recover {
      text-align: center;
    }
  }
}
</style>