<template>
  <div class="container second">
    <Title message="热门课程"></Title>
    <div class="hot_course_content" >

        <course v-for="(item,i) in popularCourse" :key="i" :hot_Course ="item"></course>
        <!-- <div v-for="(item,i) in popularCourse" :key="i"> 
          {{item.categoryName}}
          
        </div> -->
    </div>
    
  </div>
</template>

<script>
import api from '@/api/index'
import Title from '../common_components/title'
import course from '../common_components/course'
export default {
  data () {
    
    return{
      popularCourse: []
    }
  },
  components:{
    Title,course
  },
  created () {
    api.getPopularCourseInfo().then(res => {
      console.log(res)
      this.popularCourse= res.popularCourse
    })
  }
}
</script>

<style>
.container.second{
  display: inline-block;
  /* margin-top: 75px; */
  border-radius: 4px;
  margin-left: -3px;
}
.hot_course_content{
  display: flex;
}
.course1>.course_item:hover{
  border-top: 2px solid green;
}
.course2>.course_item:hover{
  border-top: 2px solid orange;
}
.course3>.course_item:hover{
  border-top: 2px solid blue;
}
.course4>.course_item:hover{
  border-top: 2px solid purple;
}
</style>