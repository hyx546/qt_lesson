<template>
  <div id="primary_page">
    <PrimaryMenuList />
    <PrimaryCarousel />
    <MiniCourse />
    <AllCourse />
  </div>
</template>

<script>

import PrimaryCarousel from '@/components/primary_page/primary_carousel.vue'
import PrimaryMenuList from '@/components/primary_page/primary_menu_list.vue'
import MiniCourse from '@/components/primary_page/mini_course.vue'
import AllCourse from '@/components/primary_page/all_course.vue'

export default {
  components: {
    PrimaryCarousel,
    PrimaryMenuList,
    MiniCourse,
    AllCourse,
  }
}
</script>

<style>

</style>