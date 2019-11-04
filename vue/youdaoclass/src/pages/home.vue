<template>
  <div id="home_page">
    <ListBar />
    <CarouselBar />
    <TitleCourse />
    <HotCourse />
    <FindCourse />
    <CourseList />
    
  </div>
</template>
<script>
import ListBar from '@/components/home_page/list_bar.vue'
import CarouselBar from '@/components/home_page/carousel_bar.vue'
import TitleCourse from '@/components/home_page/title_course.vue'
import HotCourse from '@/components/home_page/hot_course.vue'
import FindCourse from '@/components/home_page/find_course.vue'
import CourseList from '@/components/home_page/course_list.vue'
import { resolve } from 'q'
export default {
  components: {
    ListBar,
    CarouselBar,
    TitleCourse,
    HotCourse,
    FindCourse,
    CourseList:resolve => {
      require(['../components/home_page/course_list.vue'],resolve)
    },
    CourseList:() => import('../components/home_page/course_list.vue'),
  }
}
</script>

<style>

</style>