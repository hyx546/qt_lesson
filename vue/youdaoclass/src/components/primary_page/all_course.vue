  <template>
    <div class="all_course">
      <Title message="全部课程"></Title>
      <div class="all_course_list">
        <course class="course" v-for="(item,i) in all_course" :key="i" :hot_Course="item"></course>



      </div>
    </div>

  </template>

  <script>
  import api from '@/api/index'
  import Title from '../common_components/title'
  import course from '../common_components/course'
  export default {
    data() {
      return {
        all_course: []
      }
    },
    components: {
      Title,
      course
    },
    created () {
      api.getJunior_all_course_info_list().then(res => {
      this.all_course= res.courses
    })
  }
  }

  </script>

  <style>
  .all_course_list>.course{
    display: inline-block;
  }
  </style>
