<template>
  <div id="app">
    <router-view/>
    <!-- <child1 :addC="countAdd" @addCount="countAdd" :msg='msg' :fn="appFunc" v-bind="test" :count="count"></child1>
    <child2></child2>
    <p>------------3</p>
    <child3 @fromChild="fromChild"></child3>
    <span>{{message}}</span> -->
  </div>
</template>

<script>
import child1 from '@/components/common/child1';
import child2 from '@/components/common/child2';
import child3 from '@/components/common/child3';
import count from '@/components/count';
export default {
  name: 'App',
  components:{
    child1,
    child2,
    child3,
    count
  },
  data(){
    return {
      msg:'gift for child',
      msg2:'msg2  gift',
      test:{
        a:3,
        b:2
      },
      count:1,
      message:'父组件默认的数据'
    }
  },
  methods:{
    appFunc(){
      console.log('app.vue\'s func')
    },
    countAdd(){
      this.count++;
    },
    fromChild(e){
      this.message = e;
    }
  }
}
</script>

<style>

</style>