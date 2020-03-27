<template>
  <div class="PrimarySwiper" >
    <course-swiper :banners="banners"></course-swiper>
  </div>
</template>
<script>
import CourseSwiper from 'components/content/swiper/CourseSwiper.vue';

export default {
  components: {
    CourseSwiper
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>
<style  scoped>

</style>