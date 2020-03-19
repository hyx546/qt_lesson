<template>
<div>
  <div class="download_content">
    <a href="http://c.youdao.com/dict/download.html?app=course&platform=iphone&title=有道精品课-为你精选好课" class="ios"></a>
    <a href="http://c.youdao.com/dict/download.html?app=course&platform=android&title=有道精品课-为你精选好课" class="android"></a>
    <div  class="scan">
      <div class="erweima"></div>
    </div>
  </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.download_content{
  position: relative;
  background-image: url(https://shared-https.ydstatic.com/ke/web/v1.1.3/9eabf128.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  max-width: 1920px;
  height: 789.188px;
  margin: 0 auto;
  margin-top: 66px;
}
.download_content a{
  position: absolute;
  cursor: pointer;
}
.ios{
  left: 36.1%;
}
.ios,.android,.scan{
  width: 9.375%;
  height: 5.556%;
  top: 33.241%;
}
.scan{
  left: 56.927%;
  position: absolute;
  cursor: pointer;
}
.erweima{
  position: absolute;
  left: -14.354%;
  top: -387.481%;
  display: none;
  width: 128.889%;
  height: 386.667%;
  background-image: url(https://shared-https.ydstatic.com/ke/web/v1.1.3/18c487c8.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.scan:hover>.erweima{
  display: block;
}
</style>