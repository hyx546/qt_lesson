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
              <div class="login_cxt">
                <div class="before-ip">
                 <svg t="1575637132325" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3633" width="24" height="24" style="margin-top:10px;"><path d="M256 153.6v716.8h512V153.6H256z m0-51.2h512a51.2 51.2 0 0 1 51.2 51.2v716.8a51.2 51.2 0 0 1-51.2 51.2H256a51.2 51.2 0 0 1-51.2-51.2V153.6a51.2 51.2 0 0 1 51.2-51.2z" fill="#8a8a8a" p-id="3634"></path><path d="M409.6 716.8h204.8v51.2H409.6z" fill="#8a8a8a" p-id="3635"></path></svg>
                </div>
                <div class="ip">
                  
                   <input  type="text " v-model="username" placeholder="请输入手机号码">
                </div>
                <div class="before-psw">
                 <svg t="1575636989812" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2809" width="24" height="24" style="margin-top:10px;"><path d="M829.109677 990.967742h-660.645161c-92.490323 0-165.16129-72.670968-165.16129-165.16129V429.419355c0-92.490323 72.670968-165.16129 165.16129-165.16129h660.645161c92.490323 0 165.16129 72.670968 165.161291 165.16129v396.387097c0 92.490323-72.670968 165.16129-165.161291 165.16129z m-660.645161-660.645161c-56.154839 0-99.096774 42.941935-99.096774 99.096774v396.387097c0 56.154839 42.941935 99.096774 99.096774 99.096774h660.645161c56.154839 0 99.096774-42.941935 99.096775-99.096774V429.419355c0-56.154839-42.941935-99.096774-99.096775-99.096774h-660.645161z" p-id="2810" fill="#8a8a8a"></path><path d="M498.787097 710.193548c-9.909677 0-16.516129-6.606452-16.516129-16.516129v-165.16129c0-9.909677 6.606452-16.516129 16.516129-16.516129s16.516129 6.606452 16.516129 16.516129v165.16129c0 9.909677-6.606452 16.516129-16.516129 16.516129z" p-id="2811" fill="#8a8a8a"></path><path d="M498.787097 726.709677c-19.819355 0-33.032258-13.212903-33.032258-33.032258v-165.16129c0-19.819355 13.212903-33.032258 33.032258-33.032258s33.032258 13.212903 33.032258 33.032258v165.16129c0 19.819355-13.212903 33.032258-33.032258 33.032258z m0-33.032258v16.516129-16.516129z" p-id="2812" fill="#8a8a8a"></path><path d="M763.045161 330.322581h-528.516129V264.258065c0-145.341935 118.916129-264.258065 264.258065-264.258065s264.258065 118.916129 264.258064 264.258065v66.064516z m-462.451613-66.064516h396.387097c0-109.006452-89.187097-198.193548-198.193548-198.193549s-198.193548 89.187097-198.193549 198.193549z" p-id="2813" fill="#8a8a8a"></path></svg>
                </div>
                <div class="psw">
                   
                  <input type="text" v-model="password"  placeholder="请输入密码">
                </div>
                <div class="but-login" @click="login">
                 <!-- <a class="btn" >登录</a> -->
                 <input type="submit" value="登录" class="btn">
                </div>

              </div>
            </div>
            <div class="autologin">
              <!-- <img src="https://shared-https.ydstatic.com/ke/web/v1.1.3/8b28f254.png" alt="勾选"> -->
              <input class="checkbox " type="checkbox">
              <label for="true">自动登录</label>
              <a href="" target="_blank" style="float:right;">遇到问题？</a>
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
          <div class="anotherlogin-bottom">
            登录代表已同意
            <a href="" class="zhengche">隐私政策</a>和
            <a href="" class="zhengche">未成年人保护规则</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
    }
  },
 created () {
      this.$axios.post("/login", {user:this.userName,password:this.password})
    .then(data => {
        //登录失败,先不讨论
        if (data.data.status != 200) {
          //iViewUi的友好提示
          this.$Message.error(data.data.message);
        //登录成功
        } else {
          //设置Vuex登录标志为true，默认userLogin为false
          this.$store.dispatch("userLogin", true);
          //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
          localStorage.setItem("Flag", "isLogin");
          //iViewUi的友好提示
          this.$Message.success(data.data.message);
          //登录成功后跳转到指定页面
          this.$router.push("/home");
        }
  });
 },
}
</script>
<style scoped>
.login_content{
  position: relative;
  width: 422px;
  height: 522px;
  margin: 120px auto 80px;
  border: 1px solid #f1f2f2;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
  background-color: white;
  text-align: center;
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
  position: absolute;
  font-size: 18px;
}
.login_area{
  position: absolute;
  top: 20%;
  font-size: 12px;
}
.login_area input::placeholder{
  padding-left: 6px;
}
.before-ip{
  position: absolute;
  left: 12%;
  border: 1px solid #ccc;
  border-right: none;
  width: 36px;
  height: 46px;
  text-align: center;
  border-radius: 2px;
}
.ip{
  margin-top: 10px;
}
.ip input{
  margin-left: 8%;
  width: 284px;
  height: 46px;
  border: 1px solid #ccc;
  border-radius: 2px;
  border-left:  none;
  outline:none
}
.before-psw{
  position: absolute;
  left: 12%;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-right: none;
  width: 36px;
  height: 46px;
  text-align: center;
  border-radius: 2px;
}
.psw{
  margin-top: 20px;
}
.psw input{
  margin-left: 8%;
  width: 284px;
  height: 46px;
  border: 1px solid #ccc;
  border-radius: 2px;
  border-left:  none;
  outline:none;
}
.but-login{
  width: 320px;
  height: 46px;
  background-image: linear-gradient(45deg,#1ec864 0,#0dda5b 100%);
  box-shadow: 0 4px 8px 0 rgba(26,212,151,0.3);
  border-radius: 4px;
  margin-left: 12%;
  margin-top: 20px;
  cursor: pointer;
}
.btn{
  display: inline-block;
  font-size: 22px;
  color: #fff;
  margin: 0 auto;
  padding: 10px;
}
.autologin{
  position: absolute;
  top: 70%;
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
.autologin>.checkbox{
  display: block;
  float: left;
  cursor: pointer;
  font-size: 12px;
  width: 14px;
  height: 14px;
  border: 1px solid #ebeced;
  border-radius: 2px;
  color: #999;
  margin-top: 1px;
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
  top: 65%;
  padding: 40px 0 0 50px;
  box-sizing: border-box;
}
.anotherlogin-title{
  padding-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(170, 165, 165);
  float: left;
}
.anotherlogin-content{
  display: flex;
  padding-bottom: 30px;
}
.anotherlogin-img{
  padding-right: 5px;
  cursor: pointer;
  margin-left: 16px;
  margin-top: -7px;
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
.anotherlogin-bottom{
  position: absolute;
  left: 60%;
  top: 120%;
  transform: translateX(-55%);
  width: 100%;
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  font-weight: 400;
  color: #30404c;
}
.zhengche{
  color: #239eff;
}
</style>
