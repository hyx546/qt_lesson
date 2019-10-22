<template>
  <div class="container fifth">
    <div class="course CET">
      <div class="course_title">
        <Title message="四六级"></Title><more-course></more-course>
      </div>
      <course-item course_item_img="https://oimagea3.ydstatic.com/image?id=-3721152036420584707&product=xue"
      
      ></course-item>
    </div>

    <div class="course test">
      <Title message="考研"></Title><more-course></more-course>
      <course-item course_item_img="https://oimageb8.ydstatic.com/image?id=-4463525778536611222&product=xue"
      ></course-item>
    </div>


    <div class="course senior">
      <Title message="高中"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagea3.ydstatic.com/image?id=-4505058495654743039&product=xue"
      ></course-item>
    </div>

    <div class="course junior">
      <Title message="初中"></Title><more-course></more-course>
      <course-item course_item_img="https://oimageb7.ydstatic.com/image?id=-1941020100909025910&product=xue"
      ></course-item>
    </div>

    <div class="course primary">
      <Title message="小学"></Title><more-course></more-course>
      <course-item course_item_img="https://oimageb7.ydstatic.com/image?id=-8085261583554033953&product=xue"
      ></course-item>
    </div>

    <div class="course english-improve">
      <Title message="英语提升"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagec5.ydstatic.com/image?id=-7899130492529792312&product=xue"
      ></course-item>
    </div>

    <div class="course english-logic">
      <Title message="逻辑英语"></Title><more-course></more-course>
      <course-item course_item_img="https://oimageb3.ydstatic.com/image?id=-8908165291609549768&product=xue"
      ></course-item>
    </div>
    
    <div class="course IELTS">
      <Title message="雅思托福"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagea8.ydstatic.com/image?id=381608466416685325&product=xue"
      ></course-item>
    </div>

    <div class="course teacher-qualification">
      <Title message="教师资格"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagea4.ydstatic.com/image?id=300067614539439381&product=xue"
      ></course-item>
    </div>

    <div class="course professional">
      <Title message="职业考证"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagea1.ydstatic.com/image?id=8121756053368984247&product=xue"
      ></course-item>
    </div>

    <div class="course four-eight">
      <Title message="专四专八"></Title><more-course></more-course>
      <course-item course_item_img="https://oimageb4.ydstatic.com/image?id=-4375399932259536152&product=xue"
      ></course-item>
    </div>

    <div class="course interest-skills">
      <Title message="兴趣技能"></Title><more-course></more-course>
      <course-item course_item_img="https://oimageb7.ydstatic.com/image?id=1135092604242204999&product=xue"
      ></course-item>
    </div>

    <div class="course minority">
      <Title message="小语种"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagea4.ydstatic.com/image?id=-6439977194962041807&product=xue"
      ></course-item>
    </div>

    <div class="course program">
      <Title message="编程开发"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagea8.ydstatic.com/image?id=8467689823040581718&product=xue"
      ></course-item>
    </div>

    <div class="course preprimary">
      <Title message="学前儿童"></Title><more-course></more-course>
      <course-item course_item_img="https://oimagec5.ydstatic.com/image?id=-2693042111113513705&product=xue"
      ></course-item>
    </div>
  </div>
</template>

<script>
import Title from '../common_components/title'
import courseItem from '../common_components/course_item'
import moreCourse from '../common_components/more_course'
export default {
  data () {
    return {

    }
  },
  components:{
    Title,
    courseItem,
    moreCourse
  },
}
</script>

<style>
.container.fifth{
  display: inline-block;
}
</style>