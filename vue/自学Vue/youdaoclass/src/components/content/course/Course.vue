<template>
  <div class="course">
    <a :href="'#/menu_pages/page_primary/'+course.id" class="course_item" v-if="course">
      <span class="course_item_classify">{{course.categoryName}}</span>
      <h5 class="course_item_title">{{course.courseTitle}}</h5>
      <div class="course_item_time">
        时间：{{course.courseTime}}
        <ins>|</ins>{{course.lessonNum}}
      </div>
      <div class="course_item_teachers" v-if="course.teacherList">
        <div class="course_item_teacher" v-for="(item,i) in course.teacherList" :key="i" >
          <div v-if="i<3" >
             <img :src="item.imgUrl" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="course_item_footer">
        <span class="course_item_buy">已有{{course.courseSaleNum}}人购买</span>
        <span class="course_item_cost" v-if="course.iosSalePrice!=0.0">¥{{course.iosSalePrice}}</span>
        <span class="course_item_cost" v-else>免费</span>
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
    'course'
  ]

}
</script>

<style scoped>
.course_item{
  height: 272px;
    width: 280px;
    overflow: hidden;
    display: inline-block;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
    margin: 0 20px 20px 0;
    vertical-align: top;
}
.course_item:hover {
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;

}
.course_item:hover>.course_item_classify{
  background-color: rgb(6, 189, 6);
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.course_item_time{
  font-size: 12px;
    color: #818a92;
    font-weight: 300;
}
.course_item_time ins{
  margin: 0 2px;
  text-decoration: none;
}
.course_item_teachers{
  font-weight: 300;
  color: #818a92;
  margin: 16px 10px 15px 0;
}
.course_item_teacher{
  display: inline-block;
    text-align: center;
    margin: 0 10px 0 0;
}

.course_item_teacher img{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid #f5f5f5;
  margin-bottom: 5px;
}
.course_item_teacher span{
  display: block;
  font-size: 12px;
  color: #818a92;
}
.course_item_footer{
  display: block;
  border-top: 1px solid #f5f5f5;
  padding-top: 32px;
  position: relative;
  font-weight: 400;
}
.course_item_buy{
  color: #818a92;
  font-weight: 300;
  font-size: 12px;
}
.course_item_cost{
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 22px;
  color: #ff773a;
  display: inline-block;
}
.course:hover>.course_item_classify{
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;
}
</style>
