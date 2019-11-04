<template>
  <div id="math_page">
    <PrimaryMenuList />
    <div class="container all_course">
       <course v-for="(item, i) in coursesList" :key="i" :hot_Course="item"></course>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
import PrimaryMenuList from '@/components/primary_page/primary_menu_list.vue'
import course from '@/components/common_components/course'

export default {
  data() {
    return {
      coursesList: []
    }
  },
  components: {
      PrimaryMenuList,
      course
  },

  created () {
    api.getMath_course_Info_list().then(res => {
      // console.log(res)
      this.coursesList= res.courses
      this.subject = res.subject
    })
  }
}
</script>

<style scoped>

#math_page{
  background-color: #f5f5f5;
  /* margin-left: -60px; */
}
#math_page>.all_course{
  margin-top: 25px;
  /* margin-left: -5px; */
}
#math_page>.all_course>.course{
  margin-left: -3px;

}
</style>
