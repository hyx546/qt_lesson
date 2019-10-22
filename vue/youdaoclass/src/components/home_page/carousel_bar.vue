<template>
  <div class="container first">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <a href="">
            <img src="https://oimagea8.ydstatic.com/image?id=4093790872345661997&product=xue" alt="...">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="https://oimagec5.ydstatic.com/image?id=-512443087054403802&product=xue" alt="...">
          </a>
        </div>
        <div class="item ">
          <a href="">
             <img src="https://oimagea4.ydstatic.com/image?id=6485232986202482792&product=xue" alt="...">
          </a>
        </div>
        <div class="item ">
          <a href="">
             <img src="https://oimageb3.ydstatic.com/image?id=-5312201389197843643&product=xue" alt="...">
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
import Title from '../common_components/title'
export default {

}
</script>

<style>

.container.first{
  display: inline-block;
  border-radius: 4px;
  margin-top: 75px;
  margin-left: 20px;
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
</style>