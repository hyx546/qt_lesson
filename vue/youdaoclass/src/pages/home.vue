<template>
  <div id="home_page">
    <NavigationBar />
    <CarouselBar />
    <TitleCourse />
    <HotCourse />
    <FindCourse />
    <CourseList />
    <FooterBar  />
    <SideBar  />
    
  </div>
</template>
<script>
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import CarouselBar from '@/components/home_page/carousel_bar.vue'
import TitleCourse from '@/components/home_page/title_course.vue'
import HotCourse from '@/components/home_page/hot_course.vue'
import FindCourse from '@/components/home_page/find_course.vue'
import CourseList from '@/components/home_page/course_list.vue'
import FooterBar from '@/components/home_page/footer_bar.vue'
import SideBar from '@/components/home_page/side_bar.vue'
export default {
  components: {
    NavigationBar,
    CarouselBar,
    TitleCourse,
    HotCourse,
    FindCourse,
    CourseList,
    FooterBar,
    SideBar
  }
}
</script>

<style>

</style>