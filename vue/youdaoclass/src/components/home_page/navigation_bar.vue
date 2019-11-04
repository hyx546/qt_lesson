<template>
  <div id="navigation_bar" class="navigation_bar_header">
    <div class="navigation_bar_title">
      <ul class="navigation_bar_ttList">
        <a href="" class="ttList_item_logo"><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/0dfa30bc.png" alt="" width="139" height="32"></a>
        <div class="bd"></div>
        <li class="ttList_item "><a href="#/">首页</a></li>
        <li class="ttList_item"><a href="#/download">APP下载</a></li>
        <li class="ttList_item"><a href="#">同道计划</a></li>
        <li class="ttList_item search">
            <img class="search-logo" src="https://shared-https.ydstatic.com/ke/web/v1.1.3/32aac580.png" alt="">
            <input type="text" class="form-search" placeholder="输入课程或者老师名称" >
        </li>
        <li class="ttList_item login">
          <a href="#/login" class="logini">登录</a>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style >
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
}
ul,li{
  list-style:none;
}
img{
  border: none;
}
a{
  text-decoration: none;
  color: #000;
}
a:hover{
  color: #fff;
  text-decoration: none;
}
.navigation_bar_header{
  width: 100%;
  position: absolute;
  top: 0;
}
.navigation_bar_title{
  background-image: linear-gradient(-90deg,#00d87d,#00db9d);
  position: relative;
}
.navigation_bar_title a{
  color: #fff;
}
.navigation_bar_ttList{
  display: flex;
  text-align: center;
  line-height: 56px;
  font-size: 16px;
}
.navigation_bar_ttList>a{
  width: 27%;
}
.navigation_bar_ttList>li{
  padding: 2px 20px 0px 25px;
  text-align: center;
  vertical-align: middle;
}
.navigation_bar_ttList>li>input{
  padding-left: 38px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  color: #fff;
  background-color: hsla(0,0%,100%,.2);
  border-radius: 4px;
  z-index: 1000;
}
.bd {
    background: hsla(0,0%,100%,.3);
    width: 1px;
    height: 32px;
    margin-top: 15px;
    margin-left: -80px;
}
.search{
  width: 410px;
  height: 44px;
  position: relative;
  color: #fff;
}
.search-logo{
  position: absolute;
  left: 20px;
  top: 18px;
  cursor: pointer;
}
.search>input{
  padding-left: 38px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: hsla(0,0%,100%,.2);
  border-radius: 4px;
  margin-left: -18px;
}
.search>input:focus{
  background-color: #fff;
  color: #31404c;
  outline: transparent;
}
.search>input::-webkit-input-placeholder{
  color:#ffff;
}
.login{
  margin-left: 17%;
}


</style>