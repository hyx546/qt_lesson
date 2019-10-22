<template>
  <div class="container second">
    <Title message="热门课程"></Title>
    <div class="hot_course_content">
      <course class="course1" classify="逻辑英语" course_title="5天用公式巧学英语" course_time="时间：2019.10.17 20:00" course_hour="5课时"
        course_item_img="https://oimagec7.ydstatic.com/image?id=2375325558000401482&product=bisheng"
        course_item_name="钟平" course_buy="已有12062人购买" course_cost="免费"></course>

      <course class="course2" classify="高中" course_title="高考历史选择题得分攻略" course_time="时间：2019.10.19 20:00" course_hour="5课时"
        course_item_img="https://oimagec5.ydstatic.com/image?id=-2947027196845513391&product=xue"
        course_item_name="张治浩" course_buy="已有2320人购买" course_cost="免费"></course>

      <course class="course3" classify="兴趣" course_title="最强大脑教你快速提升记忆力" course_time="时间：2019.10.17 20:00" course_hour="1.5课时"
        course_item_img="https://oimagea4.ydstatic.com/image?id=2626196081448541742&product=xue"
        course_item_name="卢菲菲" course_buy="已有413人购买" course_cost="免费"></course>

      <course class="course4" classify="四六级" course_title="四六级听力养成计划" course_time="时间：2019.10.17 19:00" course_hour="0.8课时"
        course_item_img="https://oimagea5.ydstatic.com/image?id=-3886508646568186875&product=xue"
        course_item_name="欧阳萍" course_buy="已有10548人购买" course_cost="免费"></course>
    </div>
    
  </div>
</template>

<script>
import Title from '../common_components/title'
import course from '../common_components/course'
export default {
  components:{
    Title,course
  },
  
}
</script>

<style>
.container.second{
  display: inline-block;
  /* margin-top: 75px; */
  border-radius: 4px;
  margin-left: -3px;
}
.hot_course_content{
  display: flex;
}
.course1>.course_item:hover{
  border-top: 2px solid green;
}
.course2>.course_item:hover{
  border-top: 2px solid orange;
}
.course3>.course_item:hover{
  border-top: 2px solid blue;
}
.course4>.course_item:hover{
  border-top: 2px solid purple;
}
</style>