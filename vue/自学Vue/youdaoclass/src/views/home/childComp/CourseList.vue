<template>
  <div class="CourseList" id="CourseList">
      <div v-for="(item,index) in tagRecommendCourses " :key="index" >
        <div class="course" v-if="index<2 ">
          <div class="course_title" >
            <Title :message="item.tag.name"><a :href="'/tag/'+item.tag.id" class="more" slot="more">更多课程</a></Title>
          </div>
          <course-item :course_item_img="item"></course-item>
        </div>
        <div class="course" v-show="isLoading && index >= 2">
          <div class="course_title" >
            <Title :message="item.tag.name"><a :href="'/tag/'+item.tag.id" class="more" slot="more">更多课程</a></Title>
          </div>
          <course-item :course_item_img="item"></course-item>
        </div>
      </div>
  </div>
</template>

<script>
import Title from 'components/content/title/Title.vue'
import CourseItem from 'components/content/course/CourseItem.vue'

export default {
  data() {
    return {
      isLoading: false,
      page:1
    }
  },
  props: {
    tagRecommendCourses: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Title,
    CourseItem,
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      //可滚动容器的高度
      let innerHeight = document.querySelector('#CourseList').clientHeight;
      //屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight;
      //可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.documentElement.scrollTop;
      //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
      console.log(innerHeight + " " + outerHeight + " " + scrollTop);
      if (scrollTop > 2000 ) {
          //加载更多操作
          console.log("loadmore");
          this.isLoading = true
      }
    }
  },
}
</script>

<style scoped>
.CourseList{
  width: 1180px;
  margin: 0 auto;
  
}
.course_title{
  position: relative;
}
.more{
  font-size: 14px;
  color: #848a90;
  position: absolute;
  top: 10px;
  right: 0;
  padding-right: 20px;
  background-image: url(https://shared-https.ydstatic.com/ke/web/v1.1.5/77224470.png);
  background-repeat: no-repeat;
  background-position: 100%;
}
</style>