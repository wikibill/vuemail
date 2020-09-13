import Vue from 'vue'
import  VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () => import('@/views/home/home.vue')
const cart = () => import('@/views/cart/cart.vue')
const category = () => import('@/views/category/category.vue')
const profile = () => import('@/views/profile/profile.vue')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/profile',
    component:profile
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
