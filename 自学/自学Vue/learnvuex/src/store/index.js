import Vue from 'vue'
import Vuex from 'vuex';

// 1.安装插件

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations:{

  },
  actions: {

  },
  getters: {

  }
}

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    increment(state){
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state,count){
      state.counter += count;
    },
    updateInfo(state) {
      setTimeout(() => {
        state.info.name= 'coderway'
      },1000)
    }
  },
  actions: {
    // context:上下文 可以看作store
    aUpdateInfo(context,payload){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('1111')
        },1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    }
  },
  modules: {
    a: moduleA
  }
})

// 3. 导出
export default store;
