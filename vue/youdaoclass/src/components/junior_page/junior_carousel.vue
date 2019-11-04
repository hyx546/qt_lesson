<template>
  <div class="junior_carousel">
    <Carousel :carouselList="carouselList"
    ></Carousel>
  </div>
</template>

<script>
import api from '@/api/index'
import Carousel from '../common_components/carousel'
export default {
  data() {
    return {
      carouselList: []
    }
  },
  components:{
      Carousel,
  },
  created () {
    api.getJunior_carousel_info_list().then(res => {
      console.log(res)
      this.carouselList= res.banner;
    })
  }
}
</script>

<style>
.junior_carousel{
  display: block;
}
</style>
