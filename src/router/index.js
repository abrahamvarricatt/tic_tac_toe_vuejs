import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Game from '../views/Game'
import HowToPlay from '../views/HowToPlay'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '/howtoplay',
    name: 'HowToPlay',
    component: HowToPlay
  }
]

const router = new VueRouter({
  routes
})

export default router
