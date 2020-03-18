<template>
  <div class="footer">
    <div class="footer_bar ">
      <div class="footer_bar_border"></div>
      <div class="footer_bar_header container">
        <div class="footer_bar_header-first">
          <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/9a05619c.png" alt="">
          <a href="">同道计划</a>
        </div>
        <div class="footer_bar_header-second">
          <h3>新手指南</h3>
          <a href="">课程说明</a>
          <a href="">如何使用</a>
          <a href="">常见问题</a>
        </div>
        <div class="footer_bar_header-third">
          <h3>联系我们</h3>
          <p>客服： 400 867 1360</p>
          <p style="font-size: 10px;font-weight:300;margin-left:45px;">周一至周日 9:00-24:00（春节除外）</p>
          <p>邮箱：youdao_kecheng@163.com</p>
        </div>
        <div class="footer_bar_header-fourth">
          <h3>学习工具</h3>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/57cd0277.png" alt=""><span>有道<br/>精品课</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/839b452a.png" alt=""><span>有道<br/>翻译官</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/8710dd18.png" alt=""><span>有道<br/>词典</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/6d12f441.png" alt=""><span>有道<br/>背单词</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/adf959a0.png" alt=""><span>有道<br/>少儿词典</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/1a468766.png" alt=""><span>有道<br/>口语</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/d1e302f9.png" alt=""><span>有道<br/>乐读</span></a>
          <a href=""><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/723619cb.png" alt=""><span>有道<br/>卡搭</span></a>
        </div>
      </div>
      <div class="footer_bar_bottom container">
        <div class="footer_bar_bottom-top">
          友情链接：
          <a href="">网易云课堂</a>
          <a href="">网易公开课</a>
          <a href="">网易云音乐</a>
          <a href="">有道词典</a>
          <a href="">有道云笔记</a>
          <a href="">有道背单词</a>
          <a href="">有道卡搭</a>
          <a href="">有道智选</a>
          <a href="">有道人工翻译</a>
          <a href="">有道翻译官</a>
          <a href="">惠惠网</a>
          <a href="">网易严选</a>
          <a href="">考拉海购</a>
          <a href="">网易邮箱</a>
        </div>
        <div class="footer_bar_bottom-foot">
          <span class="footer_bar_foot-left">©2019 
             
            <a href="">网易公司</a>
            <a href="">隐私政策</a>
            <a href="">服务条款</a>
            京ICP证080268号  京公网安备 11010802020092号
          </span>
          <span class="footer_bar_foot-right"> 
            <a href="">官方博客</a><span style="margin-left:5px;">|</span>
            <a href="">技术博客</a><span style="margin-left:5px;">|</span>
            <a href="">诚聘英才</a>
            <a href="">
              <img  src="https://shared-https.ydstatic.com/ke/web/v1.1.3/242aaf24.png" alt="">
            </a>
            <div>
              <img style="margin:2px 0 0 3px;" src="https://shared-https.ydstatic.com/ke/web/v1.1.3/a7da983b.png" alt="" class="chat">
              <div id="footer_bar_foot-right-img">
                <img src="http://oimagea2.ydstatic.com/image?id=-6055380789725164346&product=xue" alt="">
                <p>扫码关注有道精品课</p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// $(function() {
//   $(".chat").hover (
//     function () {
//       $("#footer_bar_foot-right-img").css('display','block');
//     },
//     function () {
//       $("#footer_bar_foot-right-img").css('display','none');
//     }
//   )
// })
export default {

}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 300px;
}
.footer_bar{
  height: 300px;
  margin-top: 50px;
  font-weight: 300;
  background: #fff;
  border: 1px solid #000;
}
.footer_bar div{
  vertical-align: top;
  display: inline-block;
}
.footer_bar h3{
  font-size: 16px;
  color: #31404c;
  margin-bottom: 17px;
  font-weight: 600;
}
.footer_bar_border{
  height: 2px;
  width: 100%;
  background-image: linear-gradient(-90deg,#16d470,#1bd3af);
}
.footer_bar_header{
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
  margin-left: 8%;
  width: 1180px;
  margin-top: 2%;
  
}
.footer_bar_header a{
  color: #818a92;
}
.footer_bar_header-first>img{
  width: 137px;
  height: 32px;
  margin-bottom: 24px;
  display: block;
}
.footer_bar_header-first>a{
  font-size: 14px;
  display: block;
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background-color: #00db9d;
  background-image: linear-gradient(90deg,#00d87d,#00db9d);
  box-shadow: 0 4px 8px 0 rgba(0,218,147,.3);
  border-radius: 4px;
  color: #fff;
}
.footer_bar_header-second{
  margin-left: 5%;
  font-size: 14px;
  color: #31404c;
}
.footer_bar_header-second a{
  display: block;
  padding: 9px;
  margin-left: -12%;
}
.footer_bar_header-second>a:hover{
  color: #000;
 
}
.footer_bar_header-third {
  text-align: left;
  margin-left: 4.5%;
  font-size: 16px;
  color: #818a92;
  margin-bottom: 20px;
}
.footer_bar_header-third>p{
  display: block;
  font-weight: 430;
  font-size: 14px;
  padding: 2px 0;
}
.footer_bar_header-third>p:nth-of-type(2) {
  margin: 6px 0 14px 50px;
  font-size: 14px;
  color: #a7b0b8;
}
.footer_bar_header-fourth{
  margin-left: 5%;
}
.footer_bar_header-fourth h3{
  text-align: left;
}
.footer_bar_header-fourth a{
  display: inline-block;
  text-align: center;
  vertical-align: top;
  width: 44px;
}
.footer_bar_header-fourth a:not(:last-child) {
  margin-right: 24px;
}
.footer_bar_header-fourth span{
  width: 44px;
  font-size: 10px;
}
.footer_bar_bottom{
  color: #a7b0b8;
  margin-top: 20px;
  font-size: 12px;
  margin-left: 8%;
}
.footer_bar_bottom a{
  color: #818a92;
}
.footer_bar_bottom-top{
  float: left;
}
.footer_bar_bottom-top a:not(:last-child){
  border-right: 1px solid #a7b0b8;
  padding-right: 5px;
}
.footer_bar_bottom-top a{
  height: 100%;
}
.footer_bar_bottom-top a:not(:first-child){
    padding-left: 5px;
}
.footer_bar_bottom-foot{
  margin-top: 16px;
  position: relative;
}
.footer_bar_bottom-foot{
  display: block;
}
.footer_bar_bottom-foot .footer_bar_foot-right{
  margin-left: 499px;
}
.footer_bar_foot-right a{
  padding: 5px;
}
#footer_bar_foot-right-img {
  display: none;
  width: 160px;
  height: 170px;
  border: 1px solid #ebebeb;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  text-align: center;
  position: absolute;
  top: -200px;
  right: 0px;
  background: #fff;
  z-index: 100;
}
#footer_bar_foot-right-img img{
  height: 140px;
  width: 140px;
}
#footer_bar_foot-right-img p{
  font-size: 13px;
  color: #818a92;
}
</style>