<template>
  <div id="app">  
    <nav-bar></nav-bar>
    <keep-alive >
     <router-view></router-view>
    </keep-alive>
  </div>

</template>
<script>
import navBar from 'components/content/navbar/navBar';

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style>
  @import "~assets/css/base.css";
</style>
