<template>
  <div class="CourseList">
    <div v-for="(item,index) in tagRecommendCourses " :key="index">
       <div class="course" >
        <div class="course_title" >
          <Title :message="item.tag.name"><a :href="'/tag/'+item.tag.id" class="more" slot="more">更多课程</a></Title>
        </div>
      <course-item :course_item_img="item"
      ></course-item>
    </div>
    </div>
   
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue'
import CourseItem from 'components/content/course/CourseItem.vue'

export default {
  props: {
    tagRecommendCourses: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Title,
    CourseItem
  },
}
</script>

<style scoped>
.CourseList{
  width: 1180px;
  margin: 0 auto;
  
}
.course_title{
  position: relative;
}
.more{
  font-size: 14px;
  color: #848a90;
  position: absolute;
  top: 10px;
  right: 0;
  padding-right: 20px;
  background-image: url(https://shared-https.ydstatic.com/ke/web/v1.1.5/77224470.png);
  background-repeat: no-repeat;
  background-position: 100%;
}
</style>