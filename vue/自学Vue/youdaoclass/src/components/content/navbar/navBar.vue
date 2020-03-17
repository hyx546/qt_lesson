<template>
  <div class="navigation_bar_header">
    <div class="navigation_bar_title">
      <ul class="navigation_bar_ttList">
        <li class="ttList_item_logo" @click="homeClick"><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/0dfa30bc.png" alt="" width="139px" height="32px"></li>
        <div class="bd"></div>
        <li  @click="homeClick">首页</li>
        <li  @click="appClick">APP下载</li>
        <li >同道计划</li>
        <li class=" search">
            <img class="search-logo" src="https://shared-https.ydstatic.com/ke/web/v1.1.3/32aac580.png" alt="">
            <input type="text" class="form-search" placeholder="输入课程或者老师名称" >
        </li>
        <li class="login">
          <span @click="loginClick">登录</span> 
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    homeClick() {
      this.$router.replace('/');
    },
    appClick() {
      this.$router.replace('/download');
    },
    loginClick() {
      this.$router.replace('/login');
    }
  },
}
</script>

<style  scoped>
.navigation_bar_header{
  width: 100%;
  position: absolute;
  color: #fff;
  top: 0;
  height: 60px;
}
.navigation_bar_title{
  background-image: linear-gradient(-90deg,#00d87d,#00db9d);
  position: relative;
}
.navigation_bar_ttList{
  display: flex;
  text-align: center;
  line-height: 56px;
  font-size: 16px;
}
.ttList_item_logo{
  margin-left: 6%;
  margin-right: 10%;
  width: 10%;
}
.ttList_item_logo img{
  margin-top: 10px;
}
.navigation_bar_ttList>li{
  cursor: pointer;
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