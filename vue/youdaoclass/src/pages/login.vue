<template>
  <div id="login_page">
    <NavigationBar />
    <LoginContent />
    <FooterBar  />
    <SideBar  />
  </div>
</template>

<script>
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import FooterBar from '@/components/home_page/footer_bar.vue'
import SideBar from '@/components/home_page/side_bar.vue'
import LoginContent from '@/components/login_page/login_content'
export default {
  components: {
    NavigationBar,
    FooterBar,
    SideBar,
    LoginContent

  }
}
</script>

<style>

</style>