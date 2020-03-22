<template>
  <div class="tagSlide">
    <div class="tagImage" :style="{backgroundImage: 'url(' +img+ ')'}">
      <div class="tagImageTitle" >{{title}}</div>
    </div>
    <div class="course">
       <course-swiper :column="column" ></course-swiper>
    </div>
   
  </div>
</template>

<script>
import CourseSwiper from 'components/content/carousel/CourseSwiper.vue';

  export default {
    props: {
      column:{
        type: Array,
        default() {
          return []
        }
      },
      title:{
        type: String
      },
      img:{
        type: String
      }
    },
    components: {
      CourseSwiper
    }
  }
</script>

<style  scoped>
.tagSlide{
  width: 1200px;
  margin: 0 auto;
}
.tagImage{
  height: 272px;
  width: 280px;
  font-size: 24px;
  line-height: 272px;
  text-align: center;
  display: inline-block;
  vertical-align: top;
  font-weight: 400;
  border-radius: 4px;
  margin: 0 10px 0;
  position: relative;
}
.tagImageTitle{
  width: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  line-height: 1.5;
}
.course {
  display: inline-block;
  width: 900px;
  vertical-align: top;
  box-sizing: border-box;
  height: 290px;
}
</style>