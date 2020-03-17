<template>
 <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide  v-for="(item,index) in banners" :key="index"><img class="swiperImg" :src="item.img" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
      return {
        swiperOption:{
          // 参数选项,显示小点
           pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
          //循环
          loop:true,
          //每张播放时长3秒，自动播放
          autoplay:2000,
          //滑动速度
          speed:1000,
          slidesPerView: 'auto',
          centeredSlides: true,
        },
      }
    },
}

</script>
<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
        background #fff !important
    .wrapper
        overflow:hidden
        width 100%
        height:0
        padding-bottom:26.6666667%
        background :#ccc
        .swiper-item
            width:100%
            .swiper-img
                width:100%
.swiperImg
    position relative
.swiper-button-prev,.swiper-button-next
    position absolute
    color #eee
    top 160px
    height 60px
    width 36px
    background rgba(0, 0, 0, 0.1)
    z-index 10
    cursor pointer
.swiper-button-prev,.swiper-button-next
  &:hover
    background rgba(0, 0, 0, .3)
.swiper-button-prev
  left 8%
.swiper-button-next
  right 8%
</style>