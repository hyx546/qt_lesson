<template>
  <div class="junior_shuxue_page">
     <MenuList :menuList="menuList"  :subject="subject"  :mainpage="mainpage"></MenuList>


     <div class="all_course">
      <Title message="全部课程"></Title>
      <div class="all_course_list">
        <course class="course" v-for="(item,i) in all_course" :key="i" :hot_Course="item"></course>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import MenuList from '@/components/menu_common_components/menu_list.vue'
import CarouselCourse from '@/components/menu_common_components/carousel_course'
import Title from '@/components/common_components/title'
import course from '@/components/common_components/course'

export default {
  data() {
    return {
      menuList:[],
      all_course: [],
      mini_course: [],
      subject: '',
      mainpage:''
    }
  },
  components: {
    MenuList,
    CarouselCourse,
    Title,
    course,
  },
  created () {
    api.getJunior_shuxue_info_list().then(res => {
      // console.log(res)
      this.menuList = res.subTag
      this.all_course = res.courses
      this.mini_course = res.column
      this.subject = res.subject
      this.mainpage = res.mainpage

    })
  }
}
</script>

<style >
.container{
  display: inline-block;
}
.tag-slide{
  display: block;
  color: #222;
  font-size: 16px;
  position: relative;
  margin-left: -14px;
  margin-top: 20px;
  /* margin-bottom: 10px; */
}
.tag-slide-title{
  color: #705e55;
  height: 275px;
  width: 275px;
  font-size: 24px;
  line-height: 272px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  font-weight: 400;
  margin: 10px 10px 0 ;
  /* margin-left: 1px; */
  border-radius: 4px;
  position: relative;
}
.tag-slide-detail{
  width: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  line-height: 1.5;
}
.tag-slide-title{
  /* position: absolute; */
  float: left;
}
.tag-slide>.CarouselCourse{
  position: absolute;
}
.tag-slide-bgc2{
  margin-top: 293px;
}
</style>
