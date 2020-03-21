<template>
  <div class="allAourse">
    <Title message="全部课程"></Title>
      <Course v-for="(item,index) in courses" :key="index" :course="item" ></Course>
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue';
import Course from 'components/content/course/Course.vue';

  export default {
    props: {
      courses:{
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Title,
      Course
    }
  }
</script>

<style  scoped>
.allAourse{
  width: 1194px;
  margin: 0 auto;
}
.Title{
  margin-left: 10px;
}
.course{
  display: inline-block;
  padding: 7px;
  width: 25%;
}
</style>