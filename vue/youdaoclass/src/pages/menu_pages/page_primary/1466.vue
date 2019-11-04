<template>
  <div class="chusan_yuwen_page">
     <MenuList :menuList="menuList"  :subject="subject"  :mainpage="mainpage"></MenuList>

     <serial v-for="(item1,i1) in serial" :key="i1" :hot_Course="item1"></serial>

     <div class="container ">
      <div class="all_course">
       <div class="all_course_list">
         <course class="course" v-for="(item,i) in all_course" :key="i" :hot_Course="item"></course>
       </div>
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
import serial from '@/components/common_components/serial'

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
    serial
  },
  created () {
    api.getChusan_shuxue_info_list().then(res => {
      // console.log(res)
      this.menuList = res.subTag
      this.all_course = res.courses
      this.mini_course = res.column
      this.subject = res.subject
      this.mainpage = res.mainpage
      this.serial = res.serial
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
.serial {
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
.all_course{
  /* display: block; */
  float: left;
  margin-top: 40px;
  margin-left: -10px;

}
</style>
