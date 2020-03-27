<template>
  <div class="HomeSwiper" >
    <Carousel :banners="banners"></Carousel>
  </div>
</template>
<script>
import Carousel from 'components/content/carousel/Carousel.vue';

export default {
  components: {
    Carousel
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style  scoped>

</style>