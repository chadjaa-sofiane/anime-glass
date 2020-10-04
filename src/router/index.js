import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/global/Home.vue'
import Info from '../components/global/Info.vue'
import Help from '../components/global/Help.vue'
import Search from '../components/global/Search.vue'
import Season from '../components/global/Season.vue'
import Player from '../components/player.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/season',
    name: 'Season',
    component: Season
  },
  {
    path: '/player/:title',
    name: 'Player',
    component: Player,
    props:true
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
