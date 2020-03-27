<template>
  <div class="Carousel">
      <VueSlickCarousel class="vscarousel" v-bind="settings" v-if="banners.length">
        <div v-for="(item,index) in banners" :key="index">
          <a :href="item.url">
          <img class="swiperImg" :src="item.img" alt="">
          </a>
        </div>
      </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'Carousel',
    data() {
      return {
        settings: {
          dots: true,
          dotsClass: "slick-dots",
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
        },
      }
    },
    components: { VueSlickCarousel },
    props: {
      banners:{
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped >
.Carousel{
  margin: 0 auto;
  width: 1180px;
  height: 360px;
  position: relative;
}
/* .slick-prev{
  position: absolute;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 36px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.1) url(https://shared-https.ydstatic.com/ke/web/v1.2.0/20f22b83.png) center center no-repeat;
}
.slick-next{
  position: absolute;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 36px;
  z-index: 10;
   background: rgba(0, 0, 0, 0.1) url(https://shared-https.ydstatic.com/ke/web/v1.2.0/30d608cd.png) center center no-repeat;
} */


</style>