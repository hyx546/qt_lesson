<template>
  <div class="contaier sixth">
    <div class="course_item_list">
      <a href=""><img :src="course_item_img" alt=""></a>
      <course class=" p1" classify="四六级" course_title="有道考神 新四级全程班·4班 （开课倒计时1天！）" course_time="时间：2019.10.17 21:00" course_hour="106.5课时"
        course_item_img="https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng"
        course_item_name="曲根" course_buy="已有1795购买" course_cost="¥199"></course>

      <course class=" p2" classify="四六级" course_title="有道考神 新六级全程班·4班 （开课倒计时1天！）" course_time="时间：2019.10.17 21:00" course_hour="106.5课时"
        course_item_img="https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng"
        course_item_name="曲根" course_buy="已有1099购买" course_cost="¥199"></course>
    </div>
    <div class="course_item_list">
      <course class="" classify="四六级" course_title="有道考神 新四级全程班·4班 （开课倒计时1天！）" course_time="时间：2019.10.17 21:00" course_hour="106.5课时"
        course_item_img="https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng"
        course_item_name="曲根" course_buy="已有1795购买" course_cost="¥199"></course>
      
      <course class="" classify="四六级" course_title="有道考神 新四级全程班·4班 （开课倒计时1天！）" course_time="时间：2019.10.17 21:00" course_hour="106.5课时"
        course_item_img="https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng"
        course_item_name="曲根" course_buy="已有1795购买" course_cost="¥199"></course>

      <course class="" classify="四六级" course_title="有道考神 新四级全程班·4班 （开课倒计时1天！）" course_time="时间：2019.10.17 21:00" course_hour="106.5课时"
        course_item_img="https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng"
        course_item_name="曲根" course_buy="已有1795购买" course_cost="¥199"></course>

      <course class="" classify="四六级" course_title="有道考神 新四级全程班·4班 （开课倒计时1天！）" course_time="时间：2019.10.17 21:00" course_hour="106.5课时"
        course_item_img="https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng"
        course_item_name="曲根" course_buy="已有1795购买" course_cost="¥199"></course>
    </div>
  </div>
</template>

<script>
import course from './course'
export default {
  components: {
    course
  },
  props:[
    'course_item_img'
  ]
}
</script>

<style >
.course_item_list{
  display: flex;

}
.course_item_list>a{
  display: inline-block;
  width: 580px;
  height: 272px;
  border-radius: 4px;
}
.course_item_list>a>img{
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
.course_item_list>a:hover>img{
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;
}
.p2{
  margin-right: -40px;
}
.p1{
  margin-left: 7px;
}
.course_item:hover .course_item_classify{
  background-color: rgb(6, 189, 6);
}
</style>