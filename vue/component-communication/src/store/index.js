import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.9.20',
  money: 100
}

const mutations = {
  add(state){
    state.count++
  },
  reduce(state){
    state.count--
  },
  makeMoney (state) {
    state.money += 1
  }
}
const getters = {
    count: function(state) {
      return state.count += 100
    }
}

const actions = {
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    },2000)
    console.log('你挣你的钱')
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})