<template>
  <div class="container first">
      <div v-if="carouselList.length">
        <Carousel :carouselList="carouselList"></Carousel>
      </div>
  </div>

</template>

<script>
import api from '@/api/index'
import Carousel from '../common_components/carousel'
export default {
  data (){
    return {
      carouselList: []
    }
  },
  components:{
    Carousel,
  },
  created () {
    api.getCarouselListInfo().then(res => {
      console.log(res)
      this.carouselList= res.carouselList

    })
  }
}
</script>

<style>



</style>