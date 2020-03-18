<template>
  <div id="app">  
    <nav-bar></nav-bar>
    <keep-alive >
     <router-view></router-view>
    </keep-alive>
    <foot-bar></foot-bar>
  </div>

</template>
<script>
import navBar from 'components/content/navbar/navBar.vue';
import footBar from 'components/content/footbar/footBar.vue';

export default {
  name: 'App',
  components: {
    navBar,
    footBar
  }
}
</script>

<style>
  @import "~assets/css/base.css";
</style>
