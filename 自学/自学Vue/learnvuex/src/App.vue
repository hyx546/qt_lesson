<template>
  <div id="app">
    <h2>-----------App内容:modules的内容-----------</h2>

    <h2>{{$store.state.a.name}}</h2>


     <h2>-----------App内容:info对象的内容是否是响应式-----------</h2>
      <h2>{{$store.state.info}}</h2>
      <button @click="updateInfo">修改信息</button>


    <h2>-----------App内容-----------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subreaction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>-----------App内容： getters相关信息---------</h2>
      <h2>{{$store.getters.powerCounter}}</h2>
    <h2>-----------Hello Vuex内容-----------</h2>
    <HelloVuex ></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue';

export default {
  name: 'App',
  data() {
    return {
      message: '我是app组件',
    }
  },
  components:{
    HelloVuex
  },
  methods: {
    subreaction(){
      this.$store.commit('decrement')

    },
    addition() {
      this.$store.commit('increment')
    },
    addCount(count){
      this.$store.commit('incrementCount',count);
    },
    updateInfo(){
      // this.$store.commit('updateInfo');
      // this.$store.dispatch('aUpdateInfo',{
      //     message: '我是携带的信息',
      //     success: () => {
      //       console.log('里面已经完成了')
      //     }
      // })
      this.$store.dispatch('aUpdateInfo','我是携带的信息').then(res => {
        console.log('里面完成了提交')
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
