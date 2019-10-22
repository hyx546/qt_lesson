import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)
const _import_ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import_('home'),
      meta: {
        title: '有道精品课 - 为你精选好课'
      }
    },
    {
      path: '/download/',
      name: 'download',
      component: _import_('download'),
      meta: {
        title: 'APP下载-有道精品课'
      }
    },
    {
      path: '/login/',
      name: 'login',
      component: _import_('login'),
      meta: {
        title: '登录-有道精品课 - 为你精选好课'
      }
    }
  ]
})
