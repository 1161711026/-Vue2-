import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Error from '../views/error/404'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "Home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
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
