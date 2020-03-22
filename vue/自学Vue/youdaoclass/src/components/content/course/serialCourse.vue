<template>
  <div class="course">
    <router-link :to="'/course/detai/' + serialCourse.id" class="course_item" v-if="serialCourse">
      <span class="course_item_classify">小学</span>
      <h5 class="course_item_title">{{serialCourse.title}}</h5>
      <div class="course_item_time">
        {{serialCourse.serialType}}
         / 共 2 门课
      </div>
      <!-- <div class="course_item_teachers" v-if="course.teacherList">
        <div class="course_item_teacher" v-for="(item,i) in course.teacherList" :key="i" >
          <div v-if="i<3" >
             <img :src="item.imgUrl" alt="">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div> -->
      <!-- <div class="course_item_footer">
        <span class="price">
          <span v-if="course.courseOriginalPrice && course.courseOriginalPrice!= course.iosSalePrice" class="courseOriginalPrice" >¥{{course.courseOriginalPrice}}</span>
          <span class="course_item_cost" v-if="course.iosSalePrice!=0.0">¥{{course.iosSalePrice}}</span>
          <span class="course_item_cost" v-else>免费</span>
        </span>
      </div> -->
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'serialCourse'
  ],

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
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  margin: 0 20px 20px 0;
  vertical-align: top;

}
.course_item:hover {
  transform: translate(0, -2.5px);
  box-shadow:  -5px 5px 2.5px #eaeaea;
  transition:all .5s ease 0s;
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
  height: 19px;
  width: fit-content;
  text-align: center;
  line-height: 17px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  vertical-align: center;
  color: #ff905d;
  background: #fff7f3;
  border: 1px solid #ffe3d6;
  border-radius: 2px;
  padding: 0 10px;
  margin: -1px 0;
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
.buy{
  /* padding-top: 5px; */
  font-weight: 300;
  font-size: 10px;
  margin-bottom: 4px;
  display: inline-block;
  color: #ff773a;
}
.price{
  font-size: 22px;
  float: right;
}
.courseOriginalPrice{
  text-decoration: line-through;
  font-size: 14px;
    color: #a7b0b8;
    margin-right: 5px;
}
.course_item_buy{
  color: #818a92;
  font-weight: 300;
  font-size: 12px;
  margin-top: 2px;
}
.course_item_cost{
  font-size: 22px;
  color: #ff773a;
}
</style>
