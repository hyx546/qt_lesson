<template>
  <div class="contaier sixth">
    <div class="course_item_list">
      <a href=""><img :src="course_item_img.head_img" alt=""></a>
      <course v-for="(item ,index) in course_item_img.courses" :key="index" :hot_Course="item" 
      :class="{'active':index<=0}"></course>
    </div>
  </div>
</template>

<script>
import course from './course'
export default {
  components: {
    course
  },
  props:[
    'course_item_img'
  ]
}
</script>

<style scoped>
.course_item_list{
  display: flex;
  flex-wrap: wrap;
}
.course_item_list>a{
  display: inline-block;
  width: 565px;
  height: 272px;
  border-radius: 4px;
  margin-left: -8px;
  margin-right: 3px;
}
.course_item_list >.course{
  width: 271px;
  height: 262px;
  margin: 10px;
  margin-left: -5px;
  flex: 1;
}
/* .course_item_list >.course.active{
  margin-left: 10px;
  padding-left: 5px;
  width: 260px;
  height: 262px;
  z-index: 1000;
} */
.course_item_list>a>img{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.course_item_list>a:hover>img{
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;
}
.p2{
  margin-right: -40px;
}
.p1{
  margin-left: 7px;
}
.course_item:hover .course_item_classify{
  background-color: rgb(6, 189, 6);
}
</style>