<template>
  <div class="MiniCourse">
    <Title message="课程精选"></Title>
    <tag-slide class="tag-slide" :column="item.courseCards"  v-for="(item,index) in column" :key="index"
    :img="item.img" :title="item.title"></tag-slide>
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue';
import tagSlide from 'components/content/tagslide/tagSlide.vue'

  export default {
    props: {
      column: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Title,
      tagSlide
    }
  }
</script>

<style scoped>
.MiniCourse{
  width: 1200px;
  margin: 0 auto;
}
.Title{
  margin-left: 10px;
}
</style>