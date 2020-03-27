<template>
  <div class="chinese">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <div class="serial">
      <serial-course class="serialcourseItem" v-for="(item,i) in serialCourse" :key="i" :serialCourse="item"></serial-course>
    </div>
    <tag-slide :column="item.courseCards"  v-for="(item,index) in column" :key="index"
    :img="item.img" :title="item.title"></tag-slide>
    <all-course :courses="courses"></all-course>
  </div>
</template>

<script>
import menuList from 'components/content/navbar/menuList.vue';
import serialCourse from 'components/content/course/serialCourse.vue'
import AllCourse from 'components/content/course/AllCourse.vue';
import tagSlide from 'components/content/tagslide/tagSlide.vue';

import {getGradeSixMathData} from 'network/primary/gradesix.js';
  export default {
    data() {
      return {
        courses: [],
        subTag:[],
        name: '',
        id:0,
        column: [],
        serialCourse: []
      }
    },
    components: {
      menuList,
      AllCourse,
      serialCourse,
      tagSlide
    },
    created() {
      // 请求数据
      getGradeSixMathData().then(res => {
        console.log(res)
        this.id = res.data.pTag.id
        this.name = res.data.pTag.name;
        this.subTag = res.data.pTag.subTag
        this.courses = res.data.courses // 全部课程
        this.serialCourse = res.data.serialCourse
        this.column = res.data.column // 精品课程  
      })
     
    },
  }
</script>

<style scoped>
.chinese{
  margin-top: 66px;
}
.serial,.chineseCourse{
  width: 1180px;
  margin: 0 auto;
}
.serialcourseItem,.courseItem{
  display: inline-block;
  width: 25%;
}
</style>