<template>
  <div class="c">

    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item " :class="{'active':i===0}" v-for="(item,i) in mini_course.courseCards" :key="i" >
          <div  class="item1" >
            <course  v-for="(item1,i1) in mini_course.courseCards" :key="i1" :hot_Course="item1" ></course>
          </div>
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="left carousel-control course" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control course" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


  </div>


</template>

<script >
import course from '../common_components/course'
export default {
  data() {
    return{
    }
  },
  components: {
    course
  },
  props: [
    'mini_course'
  ]
}
</script>

<style scoped>
.c{
  width: 870px;
  float: right;
  /* float: left; */
  overflow: hidden;
  margin-top: -283px;
}
#myCarousel{
  width: 870px;
  overflow: hidden;
}
.carousel-inner{
  margin-left: 10px;
  /* border: 1px solid #000; */
}
.item>.course{
  display: inline-block;
  margin-top: 15px;
}
.item{
  margin-left: 0px;
  white-space: nowrap;
  overflow: hidden;
}
.item1{
  margin-left: 0px;
  white-space: nowrap;
  overflow: hidden;
}
.item1>.course{
  display: inline-block;
}
.carousel-control.course{
  opacity: 0;
  background: rgba(0, 0, 0, 0.05) url(https://shared-https.ydstatic.com/ke/web/v1.1.3/30d608cd.png) center center no-repeat;
  top: 110px;
  height: 60px;
  width: 36px;
  cursor: pointer;
}

#myCarousel:hover>.carousel-control.course{
  opacity: 1;
}
.carousel-control.course.left{
  margin-left: 40px;
}
.carousel-indicators{
  display: block;
  position: absolute;
  height: 2px;
  top: 260px;
  left: 0px;
  width: 270px;
  text-align: center;
  z-index: 1000;
}
.carousel-indicators li{
  display: inline-block;
  height: 2px;
  width: 30px;
  background: rgba(255, 255, 255, 0.5)!important;
  line-height: 2px;
  vertical-align: top;
  margin: 0 2px;
  border-radius: 2px;

}
</style>
