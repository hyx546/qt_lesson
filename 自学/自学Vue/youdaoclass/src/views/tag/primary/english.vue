<template>
  <div class="english">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <div class="englishCourse">
      <Course class="courseItem" v-for="(item,i) in courses" :key="i" :course="item"></Course>
    </div>
  </div>
</template>

<script>
import menuList from 'components/content/navbar/menuList.vue';
// import primarySwiper from './childComp/primarySwiper';
import Course from 'components/content/course/Course.vue'

import {getPrimaryEnglishData} from 'network/primary/primary.js';
  export default {
    data() {
      return {
        courses: [],
        subTag:[],
        name: '',
        id:null
      }
    },
    components: {
      menuList,
      Course
    },
    created() {
      // 请求数据
      getPrimaryEnglishData().then(res => {
        this.id = res.data.pTag.id
        this.name = res.data.pTag.name;
        this.subTag = res.data.pTag.subTag
        this.courses = res.data.courses // 全部课程
      })
     
    },
  }
</script>

<style scoped>
.english{
  margin-top: 66px;
}
.englishCourse{
  width: 1180px;
  margin: 0 auto;
}
.courseItem{
  display: inline-block;
  width: 25%;
}
</style>