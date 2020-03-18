<template>
    <div class="course_item_list">
      <a :href="'/course/detail/'+course_item_img.head_courseId"><img :src="course_item_img.head_img" alt=""></a>
      <course class="course-item" v-for="(item,i) in course_item_img.courses" :key="i" :course ="item"></course>
    </div>
</template>

<script>
import Course from 'components/content/course/Course.vue'

export default {
  components: {
    Course
  },
  props:[
    'course_item_img'
  ]
}
</script>

<style scoped>
.course_item_list{
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
.course_item_list>a{
  display: inline-block;
  vertical-align: top;
  font-size: 0;
  margin-right: 20px;
  transition: .3s;
  width: 580px;
  height: 272px;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}
.course_item_list>a>img{
  width: 100%;
  height: 100%;
}
.course_item_list>a:hover>img{
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;
}

</style>
