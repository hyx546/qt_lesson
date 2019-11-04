<template>
  <div class="course">
    <a :href="'#/menu_pages/page_primary/'+hot_Course.id" class="course_item" v-if="hot_Course">
      <span class="course_item_classify">{{hot_Course.categoryName}}</span>
      <h5 class="course_item_title">{{hot_Course.courseTitle}}</h5>
      <div class="course_item_time">
        时间：{{hot_Course.courseTime}}
        <ins>|</ins>{{hot_Course.lessonNum}}
      </div>
      <div class="course_item_teachers" v-if="hot_Course.teacherList">
        <div class="course_item_teacher" v-for="(item,i) in hot_Course.teacherList" :key="i" >
          <div v-if="i<3" >
             <img :src="item.imgUrl" alt="">
            <span>{{item.name}}</span>
          </div>

        </div>
      </div>
      <div class="course_item_footer">
        <span class="course_item_buy">已有{{hot_Course.courseSaleNum}}人购买</span>
        <span class="course_item_cost" v-if="hot_Course.iosSalePrice!=0.0">¥{{hot_Course.iosSalePrice}}</span>
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
    'hot_Course'
  ]

}
</script>

<style >
*{
  margin: 0;
  padding: 0;
}
.course{
  padding: 10px;
  display: inline-block;
}
.course_item{
  /* display: inline-block; */
  float: left;
  border-radius: 0 0 4px 4px;
  border-top: 2px solid #e4f0e2;
  height: 272px;
  width: 270px;
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 16px;
  background: #fff;
  /* margin: 0 20px 20px 0px; */
  transition: All 0.2s ease-in-out;
  margin-top: -15px;
  /* margin-left: -10px; */
  margin-left: -2px;
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
.course:hover>.course_item_classify{
  transform: translate(0, -10px);
  box-shadow: 10px 10px 5px #eaeaea;
}
</style>
