<template>
  <div class="Carousel" >
      <VueSlickCarousel   class="vscarousel" v-bind="settings" v-if="column.length">
        <div v-for="(item,index) in column" :key="index">
          <Course :course="item"></Course>
        </div>
      </VueSlickCarousel>
      
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Course from 'components/content/course/Course.vue'
 
  export default {
    name: 'Carousel',
    data() {
      return {
        settings: {
          "focusOnSelect": true,
          "infinite": false,
          "speed": 500,
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "touchThreshold": 5
        },
      }
    },
    components: { VueSlickCarousel,Course },
    props: {
      column:{
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      showNext() {
        this.$refs.carousel.next()
      },
    },
  }
</script>

<style scoped>
.Carousel{
  margin-left: 10px;
}

</style>