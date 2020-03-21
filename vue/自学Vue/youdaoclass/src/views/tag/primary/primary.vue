<template>
  <div class="primary">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <carousel class="carousel" :banners="banners"></carousel>
    <mini-course :column="column"></mini-course>
    <all-course :courses="courses"></all-course>
  </div>
</template>

<script>
import Carousel from 'components/content/carousel/Carousel.vue';
import menuList from 'components/content/navbar/menuList.vue';
// import primarySwiper from './childComp/primarySwiper';
import MiniCourse from './childComp/MiniCourse';
import AllCourse from 'components/content/course/AllCourse.vue';

import {getPrimaryData,getPrimaryElseCourse,getPrimaryElseCourse2} from 'network/primary.js';
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
      getPrimaryData().then(res => {
        
        this.data = res.data;
        this.id = res.data.id
        this.name = this.data.name;
        this.subTag = this.data.subTag

        this.banners = this.data.banner
        this.column = this.data.column // 精品课程  
        this.courses = this.data.courses // 全部课程
      })
      // 上拉加载第一次的课程
      getPrimaryElseCourse().then(res => {
        this.courses.push(...(res.data.course))
        // console.log(this.courses)
      })
      // 上拉加载第二次的课程
      getPrimaryElseCourse2().then(res => {
        this.courses.push(...(res.data.course))
        // console.log(this.courses)
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