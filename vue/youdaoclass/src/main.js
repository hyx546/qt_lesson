// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/js/bootstrap.min.js';

Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})
new Vue({
  el: '#app',
  router,
  components: { App ,
  },
  template: '<App/>'
})