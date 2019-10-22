<template>
  <div class="course">
    <a href="" class="course_item">
      <span class="course_item_classify">{{classify}}</span>
      <h5 class="course_item_title">{{course_title}}</h5>
      <div class="course_item_time">
        {{course_time}}
        <ins>|</ins>{{course_hour}}
      </div>
      <div class="course_item_teachers">
        <div class="course_item_teacher">
          <img :src="course_item_img" alt="">
          <span>{{course_item_name}}</span>
        </div>
        <div class="course_item_teacher">
          <img :src="course_item_img" alt="">
          <span>{{course_item_name}}</span>
        </div>
        <div class="course_item_teacher">
          <img :src="course_item_img" alt="">
          <span>{{course_item_name}}</span>
        </div>
      </div>
      <div class="course_item_footer">
        <span class="course_item_buy">{{course_buy}}</span>
        <span class="course_item_cost">{{course_cost}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'classify',
    'course_title',
    'course_time',
    'course_hour',
    'course_item_img',
    'course_item_name',
    'course_buy',
    'course_cost'
  ]
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.course{
  padding: 10px;
}
.course_item{
  display: inline-block;
  border-radius: 0 0 4px 4px;
  border-top: 2px solid #e4f0e2;
  height: 260px;
  width: 270px;
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  /* margin: 0 20px 20px 0; */
  transition: All 0.2s ease-in-out;
}
.course_item:hover {
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;
}
.course_item_classify{
  display: block;
  height: 18px;
  width: 60px;
  background: #a7b0b8;
  border-radius: 2px;
  font-size: 12px;
  color: #fff;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
}
.course_item_title{
  font-size: 18px;
  font-weight: 600;
  color: #31404c;
  line-height: 1.2;
  height: 42px;
  margin-bottom: 5px;
  display: -webkit-box;
  overflow: hidden;
}
.course_item_time{
  font-size: 12px;
  color: #818a92;
  font-weight: 300;
  position: absolute;
}
.course_item_time ins{
  margin: 0 2px;
  text-decoration: none;
}
.course_item_teachers{
  font-weight: 300;
  color: #818a92;
  margin: 16px 10px 15px 0;
  /* border: 1px solid #000; */
}
.course_item_teacher{
  display: inline-block;
  text-align: center;
  margin: 15px 35px 0 -40px;
  padding: 5px;
}
.course_item_teacher img{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #f5f5f5;
  margin-bottom: 5px;
}
.course_item_teacher span{
  font-size: 12px;
  color: #818a92;
  display: block;
}
.course_item_footer{
  border-top: 1px solid #f5f5f5;
  padding-top: 16px;
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: #818a92;
}
.course_item_buy{
  color: #818a92;
  font-weight: 300;
  position: absolute;
  left: 0;
}
.course_item_cost{
  font-size: 22px;
  color: #ff773a;
  display: inline-block;
  position: absolute;
  right: 0;
}

</style>