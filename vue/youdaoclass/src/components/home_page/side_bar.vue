<template>
  <div>
    <div class="side_bar">
      <div class="side_bar-first">
        <span>
          <div class="bgc1"></div>
          <p>
            在线
            <br>
            客服
          </p>
        </span>
      </div>
      <div class="side_bar-second">
        <div class="bgc2"></div>
        <p>
          App <br/>
          下载
        </p>
        <div class="side_bar-second-img">
          <img src="https://oimageb4.ydstatic.com/image?id=-6617113928986162471&product=xue" alt="精品课二维码">
          <p>
            扫描二维码<br/>
            下载有道精品课
          </p>
        </div>
      </div>
      <div class="side_bar-third">
        <a href="" id="scrollSearchDiv">
          <div class="bgc3"></div>
          <p>返回<br/>顶部</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
 $(function () {            
            //绑定滚动条事件
              //绑定滚动条事件
            $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 130) {
                    if (!$("#scrollSearchDiv").is(":visible")) {
                        try {
                            $("#scrollSearchDiv").slideDown();
                        } catch (e) {
                            $("#scrollSearchDiv").show();
                        }                      
                    }
                }
                else {
                    if ($("#scrollSearchDiv").is(":visible")) {
                        try {
                            $("#scrollSearchDiv").slideUp();
                        } catch (e) {
                            $("#scrollSearchDiv").hide();
                        }                       
                    }
                } 
            });
        })


export default {

}
</script>

<style>
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
a{
  color: #818a92;
}
.side_bar{
  color: #818a92;
  border: 1px solid #ebebeb;
  background: #fff;
  position: fixed;
  right: 10px;
  bottom: 100px;
  width: 60px;
  border-radius: 4px;
  text-align: center;
  padding: 15.2px 0 10px;
  font-size: 12px;
  z-index: 100;
}
.side_bar-first{
  cursor: pointer;
}
.bgc1{
  background-image: url(../../assets/kefu.png);
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.side_bar-first:hover,.side_bar-second:hover,.side_bar-third:hover>a{
  color: green;
}


.side_bar-second:hover>.side_bar-second-img{
  display: block;
  right: 0;
}
.side_bar-second{
  position: relative;
  cursor: pointer;
}
.side_bar-second-img{
  position: absolute;
  display: none;
  top: -67px;
  left: -160px;
  width: 160px;
  height: 210px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border: 1px solid #ebebeb;
  background: #fff;
}
.side_bar-second-img img{
  background: #fff;
  border: 1px solid #ebebeb;
  width: 140px;
  height: 140px;
  margin: 10px 0 12px;
}
.side_bar-second-img p{
  font-size: 14px;
  margin-top: -8px;
  color: #818a92!important;
}
.side_bar-third:before, .side_bar-second:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 42px;
  height: 1px;
  background-color: #f5f5f5;
  margin-top: 10px;
  margin-bottom: 12px;
}
.bgc2{
  background-image: url(../../assets/shouji.png);
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bgc3{
  background-image: url(../../assets/huidaodingbu.png);
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.side_bar-first:hover .bgc1{
  background-image: url(../../assets/kefu-2.png);
}
.side_bar-second:hover .bgc2{
  background-image: url(../../assets/shouji-2.png);
}
.side_bar-third:hover .bgc3{
  background-image: url(../../assets/huidaodingbu-2.png);
}
</style>