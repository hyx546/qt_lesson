import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue() //vue实例可以作为事件总线

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
