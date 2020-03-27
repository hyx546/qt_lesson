// 配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';


// 1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)
// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    //redirect重定向
    redirect:'/home/news'
  },
  {
    path: '/home',
    component: () => import('../components/Home'),
    children: [
      {
        path: 'news',
        component: () => import('../components/HomeNews'),
      },
      {
        path: 'message',
        component: () => import('../components/HomeMessage'),
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../components/About')
  },
  {
    path: '/user/:userId',
    component: () => import('../components/User')
  }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'//谁出于活跃，就会添加上这个类
})

export default router;
// 3.将router对象传入到Vue实例中
