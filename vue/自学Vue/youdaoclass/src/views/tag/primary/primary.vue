<template>
  <div class="primary">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <!-- <primary-swiper class="primary-swiper" :banners="banners"></primary-swiper> -->
    <!-- <mini-course :column="column"></mini-course> -->
    <carousel class="carousel" :banners="banners"></carousel>
  </div>
</template>

<script>
import Carousel from 'components/content/swiper/Carousel.vue'
import menuList from 'components/content/navbar/menuList.vue';
// import primarySwiper from './childComp/primarySwiper';
// import MiniCourse from './childComp/MiniCourse';

import {getPrimaryData} from 'network/primary.js';
  export default {
    data() {
      return {
        id: 0,
        name: '',
        subTag: [],
        banners: [],
        column: []
      }
    },
    components: {
      menuList,
      Carousel
      // primarySwiper,
      // MiniCourse
    },
    created() {
      // 请求数据
      getPrimaryData().then(res => {
        console.log(res)
        this.data = res.data;
        this.id = res.data.id
        this.name = this.data.name;
        this.subTag = this.data.subTag

        this.banners = this.data.banner
        this.column = this.data.column // 精品课程  
      })
    },
  }
</script>

<style scoped>
.primary{
  margin-top: 66px;
}
.primary-swiper{
  width: 100%;
  text-align: center;
}
</style>