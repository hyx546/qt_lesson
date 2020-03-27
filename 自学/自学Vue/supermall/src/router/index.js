import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('pages/home/Home')
const Cart = () => import('pages/cart/Cart')
const Profile = () => import('pages/profile/Profile')
const Category = () => import('pages/category/Category')
const Detail = () => import('pages/detail/Detail')

Vue.use(VueRouter);

const routes = [
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
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;