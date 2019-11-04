<template>
  <div class="junior_page">
    <juniorMenuList />
    <juniorCarousel />
    <MiniCourse />
    <AllCourse />
  </div>
</template>

<script>
import juniorCarousel from '@/components/junior_page/junior_carousel.vue'
import juniorMenuList from '@/components/junior_page/junior_menulist.vue'
import MiniCourse from '@/components/junior_page/mini_course.vue'
import AllCourse from '@/components/junior_page/all_course.vue'
export default {
 components: {
    juniorCarousel,
    juniorMenuList,
    MiniCourse,
    AllCourse
 }
}
</script>

<style>

</style>
