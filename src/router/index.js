import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlaylistDetail from '../views/PlaylistDetail.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
