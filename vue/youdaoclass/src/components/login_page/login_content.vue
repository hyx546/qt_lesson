<template>
  <div>
    <div class="login_content">
      <header>
        <div class="iphone">手机号登录</div>
      </header>
      <div>
        <div>
          <div class="login_area">
            <div id="mobileLogin" class="mobileLogin" style="width:420px; height: 290px">
              <iframe src="" frameborder="0"></iframe>
            </div>
            <div class="autologin">
              <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/8b28f254.png" alt="勾选">
              <label for="true">自动登录</label>
              <a href="" target="_blank" >遇到问题？</a>
            </div>
          </div>
        </div>
        <div class="anotherlogin">
          <div class="anotherlogin-title">其他账号登录</div>
          <div class="anotherlogin-content">
            <div class="anotherlogin-img"><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/bc61c84f.png" alt="qq"></div>
            <div class="anotherlogin-img"><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/03397ad1.png" alt="qq"></div>
            <div class="anotherlogin-img"><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/42259865.png" alt="qq"></div>
            <div class="anotherlogin-img"><img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/7645b6e5.png" alt="qq"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.login_content{
  position: relative;
  width: 422px;
  height: 522px;
  margin: 120px auto 80px;
  border: 1px solid #f1f2f2;
  border-radius: 4px;
  background: #fff;
  -webkit-box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
  background-color: white;
}
.login_content header{
  width: 320px;
  height: 20px;
  padding: 40px 50px 0;
  cursor: pointer;
}
.login_content .iphone{
  color: #31404c;
  font-weight: 500;
}
.login_area{
  position: relative;
}
.autologin{
  width: 100%;
  padding: 0 50px;
  font-size: 12px;
  line-height: 14px;
  font-family: PingFang-SC-Regular;
  color: #a7b0b8;
}
.autologin>img{
  display: block;
  float: left;
  cursor: pointer;
  font-size: 12px;
  width: 14px;
  height: 14px;
  border: 1px solid #ebeced;
  border-radius: 2px;
  color: #999;
}
.autologin>label{
  height: 16px;
  padding-left: 8px;
  color: #a7b0b8;
  line-height: 17px;
  display: block;
  float: left;
  cursor: pointer;
  font-size: 12px;
}
.autologin>a{
  float: right;
  text-decoration: none;
  height: 16px;
  padding-left: 8px;
  color: #a7b0b8;
  line-height: 17px;
  display: block;
  float: left;
  cursor: pointer;
  font-size: 12px;
}
.autologin:after{
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  content: ".";
}
.anotherlogin{
  position: absolute;
  bottom: 0;
  padding: 40px 0 0 50px;
  box-sizing: border-box;
}
.anotherlogin-title{
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #31404c;
}
.anotherlogin-content{
  display: flex;
  padding-bottom: 30px;
}
.anotherlogin-img{
  padding-right: 23px;
  cursor: pointer;
}
.anotherlogin-img img{
  width: 38px;
  height: 38px;
  vertical-align: middle;
  border-style: none;
}
.login_content:after{
  display: block;
  clear: both;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  content: ".";
}
</style>