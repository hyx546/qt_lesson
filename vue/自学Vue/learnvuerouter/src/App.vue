<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
     <keep-alive>
       <router-view></router-view>
     </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'list',
      imgURL: 'http://www.baidu.com/logo.png'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
