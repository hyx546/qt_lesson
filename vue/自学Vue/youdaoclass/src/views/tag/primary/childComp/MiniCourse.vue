<template>
  <div class="MiniCourse">
    <Title message="课程精选"></Title>
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue';


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
      Title
    }
  }
</script>

<style scoped>
.MiniCourse{
  width: 1180px;
  margin: 0 auto;
}
</style>