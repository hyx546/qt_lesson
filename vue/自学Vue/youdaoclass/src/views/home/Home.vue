<template>
  <div class="home">
    <listBar :fixedEntries="fixedEntries"></listBar>
    <home-swiper class="home-swiper" :banners="banners" ></home-swiper>
    <hot-course :popularCourse="popularCourse"></hot-course>
    <find-course :discover="discover"></find-course>
    <course-list :tagRecommendCourses="tagRecommendCourses"></course-list>
  </div>
</template>

<script>
import listBar from 'views/home/childComp/listBar.vue';

import HomeSwiper from './childComp/HomeSwiper';
import HotCourse from './childComp/HotCourses';
import FindCourse from './childComp/FindCourse';
import CourseList from './childComp/CourseList';

import {getHomeData,getHomeListData} from 'network/home.js';

export default {
  name: 'Home',
  data() {
    return {
      data: null,
      tagRecommends: [],
      banners: [],
      popularCourse: [],
      discover:[],
      tagRecommendCourses: [],
      fixedEntries: [], //标题栏
    }
  },
  components: {
    listBar,
    HomeSwiper,
    HotCourse,
    FindCourse,
    CourseList,
  },
  created() {
    //1.请求全部数据
    getHomeData().then(res => { 
      // console.log(res)
      this.data = res.data;
      this.tagRecommends = this.data.tagRecommends;
      this.banners = this.data.head;
      this.popularCourse = this.data.popularCourse;
      this.discover = this.data.discover;
      this.fixedEntries = this.data.fixedEntries;
      
    //2.
    getHomeListData().then(res => {
      this.tagRecommendCourses = res.data.tagRecommendCourses;
    })
    })
  },
}
</script>

<style scoped>
.home-swiper{
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>
