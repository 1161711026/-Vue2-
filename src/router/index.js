import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Error from '../views/error/404'
import Recommend from '@/views/home/recommend/Recommend.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "Recommend"
  },
  {
    path: "/home",
    component: Home,
    children:[
      {
        path: '/recommend',
        name: 'Recommend',
        component: Recommend
      }
    ]
  },
  {
    path: "*",
    name: "Error",
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
