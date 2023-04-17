import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/normalize.css";
import "@/assets/css/common.scss";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//设置axios的基础路径
import axios from 'axios'
axios.defaults.baseURL = "http://81.68.219.201:3000/";

//配置$api
import api from '@/https/api'
Vue.prototype.$api = api;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
