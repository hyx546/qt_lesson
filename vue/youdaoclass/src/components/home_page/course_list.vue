<template>
  <div class="container fifth"  >
    <div v-for="(item , index) in course_list " :key="index">
       <div class="course CET" >
      <div class="course_title" >
        <Title :message="item.tag.name"></Title><more-course></more-course>
      </div>
      <course-item :course_item_img="item"
      ></course-item>
    </div>
    </div>
   
  </div>
</template>

<script>
import api from '@/api/index'
import Title from '../common_components/title'
import courseItem from '../common_components/course_item'
import moreCourse from '../common_components/more_course'
export default {
  data () {
    return {
      course_list: []
    }
  },
  components:{
    Title,
    courseItem,
    moreCourse
  },
  created () {
    api.getCourse_listInfo().then(res => {
      console.log(res)
      this.course_list= res.tagRecommendCourses
    })
  }
}
</script>

<style>
.container.fifth{
  display: inline-block;
}
</style>