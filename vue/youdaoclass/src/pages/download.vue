<template>
  <div class="download_page">
    <NavigationBar />


    <DownloadContent />
    <FooterBar  />
    
  </div>
  
</template>

<script>
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import FooterBar from '@/components/home_page/footer_bar.vue'
import DownloadContent from '@/components/download_page/download_content'
export default {
  components: {
    NavigationBar,
    FooterBar,
    DownloadContent
  }
}
</script>

<style>

</style>