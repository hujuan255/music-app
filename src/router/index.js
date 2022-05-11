import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlaylistDetail from '../views/PlaylistDetail.vue'
import Search from '../views/Search.vue'
import UserInfo from '../views/user/userInfo.vue'
import Login from '../views/user/Login.vue'
import PhoneLogin from '../views/user/PhoneLogin.vue'
import { useStore } from 'vuex'
import store from '@/store'
const sotre = useStore();
const routes = [
  //首页
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //歌单列表
  {
    path: '/playlistDetail',
    name: 'playlistDetail',
    component: PlaylistDetail
  },
  //搜索页面
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  //登录页面
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  //手机号码登录页面
  {
    path: '/phoneLogin',
    name: 'phoneLogin',
    component: PhoneLogin
  },
  //个人中心(点击我的)
  {
    path: '/userInfo',
    name: 'userInfo',
    // 路由守卫，判断是否登录，如果登录则进入，否则进入登录页面
    beforeEnter: (to, from, next) => {
      if (store.state.userInfo.isLogin) {
        next();
      } else {
        next('/login');
      }
    },
    component: UserInfo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
