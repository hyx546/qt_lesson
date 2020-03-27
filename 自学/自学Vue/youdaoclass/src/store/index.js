import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  // 设置属性
  state: {
    isLogin: false,
    current: 0,
  },
  // 获取属性的状态
  getters: {
    // 获取登陆状态
    isLogin: state => state.isLogin,
    current: state => state.current
  },
  // 设置属性状态
  mutations: {
    // 保存登陆状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    getCurrent(state,current) {
      state.current = current
    }
  },
  //  应用mutations
  actions: {
    // 获取登陆状态
    userLogin({commit} , flag){
      commit("userStatus", flag)
    }
  },
  modules: {
  }
})

export default store;