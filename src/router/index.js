import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlaylistDetail from '../views/PlaylistDetail.vue'
import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/playlistDetail',
    name: 'playlistDetail',
    component: PlaylistDetail
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
