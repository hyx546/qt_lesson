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
    component: () => import('components/common/login/Login.vue'),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('views/user/User.vue'),
    meta: {
      isLogin: true
    }
  },

  // 小学
  {
    path: '/tag/430',
    name: 'primary',
    component: () => import('views/tag/primary/primary.vue'),
  },
  {
    path: '/tag/996',
    name: 'chinese',
    component: () => import('views/tag/primary/chinese.vue'),
  },
  {
    path: '/tag/998',
    name: 'math',
    component: () => import('views/tag/primary/math.vue'),
  },
  {
    path: '/tag/1044',
    name: 'english',
    component: () => import('views/tag/primary/english.vue'),
  },
  {
    path: '/tag/1528',
    name: 'childProgram',
    component: () => import('views/tag/primary/childProgram.vue'),
  },
  {
    path: '/tag/2084',
    name: 'childArt',
    component: () => import('views/tag/primary/childArt.vue'),
  },
  {
    path: '/tag/2546',
    name: 'childChess',
    component: () => import('views/tag/primary/childChess.vue'),
  },
  {
    path: '/tag/1928',
    name: 'parentsChannel',
    component: () => import('views/tag/primary/parentsChannel.vue'),
  },

  //  学前
  {
    path: '/tag/1276',
    name: 'preschool',
    component: () => import('views/tag/preschool/preSchool.vue'),
  },
  {
    path: '/tag/2370',
    name: 'childArt',
    component: () => import('views/tag/preschool/childArt.vue'),
  },
  {
    path: '/tag/2368',
    name: 'youdaoRead',
    component: () => import('views/tag/preschool/youdaoRead.vue'),
  },
  {
    path: '/tag/2366',
    name: 'cardProgram',
    component: () => import('views/tag/preschool/cardProgram.vue'),
  },

  // 六年级
  {
    path: '/tag/1072',
    name: 'gradeSix',
    component: () => import('views/tag/gradesix/gradeSix.vue'),
  },
  {
    path: '/tag/1446',
    name: 'chinese',
    component: () => import('views/tag/gradesix/chinese.vue'),
  },
  {
    path: '/tag/1448',
    name: 'math',
    component: () => import('views/tag/gradesix/math.vue'),
  },
  {
    path: '/tag/1450',
    name: 'english',
    component: () => import('views/tag/gradesix/english.vue'),
  },
  {
    path: '/tag/1874',
    name: 'newJunio',
    component: () => import('views/tag/gradesix/newJunio.vue'),
  },


  // 初中
  {
    path: '/tag/432',
    name: 'junior',
    component: () => import('views/tag/junior/junior.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
