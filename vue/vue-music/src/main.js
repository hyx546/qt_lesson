// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick' // 引入fastclick
import VueLazyLoad from 'vue-lazyload' // 引入vue-lazyload
import def_lazy_img from '../static/img/loading.gif'
import store from './vuex/store'
import './assets/css/base.css'

fastclick.attach(document.body) // 使用fastclick中的attach的方法取消移动端的300ms的延时

Vue.use(VueLazyLoad, {
  loading: def_lazy_img
})  // 使用vue-lazyload
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 自带的模块如vuex,router等不需要Vue.use但是需要在这里要声明
  components: { App },
  template: '<App/>'
})
