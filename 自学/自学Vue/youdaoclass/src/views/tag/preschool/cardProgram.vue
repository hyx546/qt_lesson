<template>
  <div class="preSchool">
    <menu-list :subTag="subTag" :name="name" :id="id"></menu-list>
    <tag-slide :column="item.courseCards"  v-for="(item,index) in column" :key="index"
    :img="item.img" :title="item.title"></tag-slide>
    <all-course :courses="courses"></all-course>
  </div>
</template>

<script>
import menuList from 'components/content/navbar/menuList.vue';
import tagSlide from 'components/content/tagslide/tagSlide.vue';
import AllCourse from 'components/content/course/AllCourse.vue';

import {getPreSchoolCardProgramData} from 'network/primary/preschool.js';
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
      tagSlide,
      AllCourse
    },
    created() {
      // 请求数据
      getPreSchoolCardProgramData().then(res => {
        this.id = res.data.pTag.id
        this.name = res.data.pTag.name;
        this.subTag = res.data.pTag.subTag

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