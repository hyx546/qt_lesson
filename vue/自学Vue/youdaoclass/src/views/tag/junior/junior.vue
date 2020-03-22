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

import {getJuniorData,getJuniorElseData,getJuniorElseData2} from 'network/junior/junior.js';
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
      getJuniorData().then(res => {
        this.id = res.data.id
        this.name = res.data.name;
        this.subTag = res.data.subTag

        this.banners = res.data.banner
        this.column = res.data.column // 精品课程  
        this.courses = res.data.courses // 全部课程
      })

       // 上拉加载第一次的课程
      getJuniorElseData().then(res => {
        this.courses.push(...(res.data.course))
      })
      // 上拉加载第二次的课程
      getJuniorElseData2().then(res => {
        this.courses.push(...(res.data.course))
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