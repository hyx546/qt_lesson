import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    // redirect
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('views/download/Download.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('components/common/login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
