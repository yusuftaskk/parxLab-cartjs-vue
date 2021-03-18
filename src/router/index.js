import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/network',
    name: 'Network',

    component: () => import( /* webpackChunkName: "about" */ '../views/Network.vue')
  },
  {
    path: '/detections',
    name: 'Detections',

    component: () => import( /* webpackChunkName: "about" */ '../views/Detections.vue')
  },
  {
    path: '/map',
    name: 'Map',

    component: () => import( /* webpackChunkName: "about" */ '../views/Map.vue')
  },
  {
    path: '/help',
    name: 'Help',

    component: () => import( /* webpackChunkName: "about" */ '../views/Help.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router