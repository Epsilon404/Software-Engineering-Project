import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from '../router'
import './assets/less/index.less'
import http from'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
