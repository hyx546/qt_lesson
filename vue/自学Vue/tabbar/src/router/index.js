import Vue from 'vue'
import Router from 'vue-router';

const Home = () => import('../pages/home/Home')
const Cart = () => import('../pages/cart/Cart')
const Profile = () => import('../pages/profile/Profile')
const Category = () => import('../pages/category/Category')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/cart',
      component: Cart
    },
    {
      path:'/profile',
      component: Profile
    },
    {
      path:'/category',
      component: Category
    },
  ],
  mode: 'history'
})
