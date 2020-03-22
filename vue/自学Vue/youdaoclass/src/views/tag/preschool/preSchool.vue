<template>
  <div class="preSchool">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <carousel class="carousel" :banners="banners"></carousel>
    <mini-course :column="column"></mini-course>
    <all-course :courses="courses"></all-course>
  </div>
</template>

<script>
import Carousel from 'components/content/carousel/Carousel.vue';
import menuList from 'components/content/navbar/menuList.vue';
import MiniCourse from 'components/content/course/MiniCourse';
import AllCourse from 'components/content/course/AllCourse.vue';

import {getPreSchoolData} from 'network/primary/preschool.js';
  export default {
    data() {
      return {
        id: 0,
        name: '',
        subTag: [],
        banners: [],
        column: [],
        courses: []
      }
    },
    components: {
      menuList,
      Carousel,
      // primarySwiper,
      MiniCourse,
      AllCourse
    },
    created() {
      // 请求数据
      getPreSchoolData().then(res => {
        this.id = res.data.id
        this.name = res.data.name;
        this.subTag = res.data.subTag

        this.banners = res.data.banner
        this.column = res.data.column // 精品课程  
        this.courses = res.data.courses // 全部课程
      })
    },
  }
</script>

<style scoped>
.preSchool{
  margin-top: 66px;
}
.primary-swiper{
  width: 100%;
  text-align: center;
}
</style>