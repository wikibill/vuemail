import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import  VueRouter from 'vue-router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
