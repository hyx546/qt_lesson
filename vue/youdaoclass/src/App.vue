<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <transition name="tab_router_view">
      <router-view/>
    </transition>
    <FooterBar></FooterBar>
    <SideBar></SideBar>
  </div>
</template>

<script>
import api from '@/api/index'
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import FooterBar from '@/components/home_page/footer_bar.vue'
import SideBar from '@/components/home_page/side_bar.vue'
export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar,
    SideBar
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
  background-color: #f5f5f5;
}
</style>
