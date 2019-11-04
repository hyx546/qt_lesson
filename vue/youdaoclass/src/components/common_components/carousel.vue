<template>
  <div class="container first" >
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel"
    v-if="carouselList">
      <!-- Indicators -->
      <ol class="carousel-indicators" >
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        <li data-target="#carousel-example-generic" data-slide-to="4" v-if="carouselList.length===5"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox" >
        <div class="item" :class="{'active':!i}" v-for="(item,i) in carouselList" :key="i">
          <a :href="item.url">
            <img :src="item.img" alt="" >
          </a>
        </div>

      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
$(".item").eq(0).addClass("active")
import course from './course'
export default {
  data() {
    return{
    }
  },
  components: {
    course,
  },
  props: [
    'carouselList'

  ]
}
</script>

<style >
.container.first{
  display: inline-block;
  border-radius: 4px;
  margin-top: 10px;
  margin-left: -5px;
}
.carousel{
  border-radius: 4px;
}
.carousel img{
  border-radius: 4px;
}
.carousel-indicators{
  bottom: 0;
}
.carousel-indicators li {
    display: inline-block;
    width: 25px;
    height: 2px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #cccc;
    border-radius: 10px;
}
.carousel-indicators .active {
  width: 25px;
  height: 2px;
  border: 1px solid #fff;
  margin: 1px;

}
.container.first>#carousel-example-generic>.sr-only{
  display: none;
  z-index: 10000;
}
.container.first>#carousel-example-generic:hover>.sr-only{
  display: block;
  z-index: 100000;
}
.carousel-inner>.item.active>a>.course{
  display: inline-block;
}
</style>
