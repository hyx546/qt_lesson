<template>
  <div class="chinese">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <div class="serial">
      <serial-course class="serialcourseItem" v-for="(item,i) in serialCourse" :key="i" :serialCourse="item"></serial-course>
    </div>
    <div class="chineseCourse">
      <Course class="courseItem" v-for="(item,i) in courses" :key="i" :course="item"></Course>
    </div>
  </div>
</template>

<script>
import menuList from 'components/content/navbar/menuList.vue';
import serialCourse from 'components/content/course/serialCourse.vue'
import Course from 'components/content/course/Course.vue'

import {getGradeSixChineseData} from 'network/primary/gradesix.js';
  export default {
    data() {
      return {
        courses: [],
        subTag:[],
        name: '',
        id:0,
        serialCourse: []
      }
    },
    components: {
      menuList,
      Course,
      serialCourse
    },
    created() {
      // 请求数据
      getGradeSixChineseData().then(res => {
        console.log(res)
        this.id = res.data.pTag.id
        this.name = res.data.pTag.name;
        this.subTag = res.data.pTag.subTag
        this.courses = res.data.courses // 全部课程
        this.serialCourse = res.data.serialCourse
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