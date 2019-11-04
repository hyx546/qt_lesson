<template>
  <div class="container">
    <Title message="精选课程"></Title>
     <div class="tag-slide" v-for="(item ,index) in mini_course" :key="index">
      <div class="tag-slide-title " :style="{background: 'url('+item.img+') no-repeat'}">
        <div class="tag-slide-detail ">{{item.title}}</div>
      </div>
      <CarouselCourse :mini_course="item"></CarouselCourse>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import Title from '../common_components/title'
import CarouselCourse from '../menu_common_components/carousel_course'
export default {
  data() {
    return {
      mini_course: []
    }
  },
  components: {
    Title,
    CarouselCourse,
  },
  created () {
    api.getJunior_mini_course_info_list().then(res => {
      // console.log(res)
      this.mini_course= res.column
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
