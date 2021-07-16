import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)

import axios from 'axios'
Vue.prototype.$axios = axios

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

//导入全局样式表
import "./assets/css/global.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
