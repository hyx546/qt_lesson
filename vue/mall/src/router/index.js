import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const home = r => require.ensure([],() => r(require('@/pages/home/home')), 'home');
const category = r => require.ensure([],() => r(require('@/pages/category/category')), 'category');

Vue.use(Router);



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',//根路径
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      meta: {
        index: 1
      },
      component: home
     },
    //目录
    {
      path: 'category',
      meta: {
        index: 2
      },
      component: category
    }
    // //搜索
    // {
    //   path: 'search',
    //   component: search
    // },

    // //购物车
    // {
    //   path: '/shopcart',
    //   component:shopcart
    // },
    // // 订单
    // {
    //   path: '/order',
    //   component: order
    // },
    // // 我的
    // {
    //   parh: '/user',
    //   component: user
    // },
    // {
    //   parh: '/register',
    //   component: register
    // },
    // // 登陆
    // {
    //   parh: '/login',
    //   component: login
    // },
    // // 邮寄
    // {
    //   path: '/shipping',
    //   component: shipping
    // },
    // // 支付
    // {
    //   path: '/payment',
    //   component: payment
    // },
    // // 动态支付
    // {
    //   path: '/product/:id',
    //   component: productDetail
    // },
    // // 个人信息页
    // {
    //   path: '/profile',
    //   component: profile
    // },
    // // 忘记密码
    // {
    //   path: '/forgetPassword',
    //   component: forgetPassword
    // },
    // // 更新信息
    // {
    //   path: '/update-info',
    //   component: update-info
    // }

  ]
})


