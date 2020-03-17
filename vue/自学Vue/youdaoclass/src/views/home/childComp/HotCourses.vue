<template>
  <div class="hot_course">
    <Title class="title" message="热门课程"></Title>
    <div class="hot_course_content" >
        <course class="course-item" v-for="(item,i) in popularCourse.slice(0,4)" :key="i" :course ="item"></course>
    </div>
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue'
import Course from 'components/content/course/Course.vue'

export default {
  data () {
    return{ 
    }
  },
  props:{
    popularCourse: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Title,Course
  },
}
</script>

<style scoped>
.hot_course{
  border-radius: 4px;
  width: 1180px;
  margin: 0 auto;
}
.hot_course_content{
  display: flex;
}
.course-item{
  flex: 1;
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