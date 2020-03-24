import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit
} from '../views'

export const mainRoutes =  [
  {
  pathname: '/login',
  component: Login
  },
  {
    pathname: '/404',
    component: NotFound
  },
  
]

export const adminRoutes = [
  {
    pathname: '/admin/dashboard',
    title: '仪表盘',
    component: Dashboard,
    isNav: true
  },
  {
    pathname: '/admin/article',
    component: ArticleList,
    title: '文章管理',
    exact: true,
    isNav: true
  },
  {
    pathname: '/admin/article/edit/:id',
    title: '设置',
    component: ArticleEdit
  },
  {
    pathname: '/admin/settings',
    title: '设置',
    component: Settings,
    isNav: true
  },
]