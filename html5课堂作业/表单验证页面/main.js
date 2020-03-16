// 用户名正则，以字母开头，长度为5-15位
var userRegular = /^[a-zA-Z]{5,15}$/
// 手机号码正则
var phoneRegular = /^1[34578]\d{9}$/
// 邮箱正则
var emailRegular = /^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/
// 密码正则
var pswRegular = /^[a-zA-Z0-9]{6,8}$/

function $(str) {
  return document.querySelector(str);
}
var username = $("#username");
var password =  $("#password");
var myform =  $("#myform");

username.oninput = function() {
  
}

// 验证
$("#sub").onclick = function() {
  // 验证密码和用户名
  if (username.value === "admin" && password.value === "123456")  {
    send();
  }else if(!(userRegular.test(this.value) || !phoneRegular.test(this.value) || !emailRegular.test(this.value))){
    alert('手机号/用户名/邮箱 输入有误，请重新输入');
    username.value='';
    username.focus();
    password.value='';
    password.focus();
  }
  else if(!(pswRegular.test(password.value))){
    alert('密码应为6-8位的字母或数字的组合，请重新输入');
    password.value='';
    password.focus();
  }
  else{
    alert('用户名或密码不正确，请重新输入');
    password.value='';
    password.focus();
    username.value='';
    username.focus();
  }
}

function send() {
  var username = $("#username").value;
  var password = $("#password").value;
  var url = "success.html" + "?" + "username=" + encodeURI(username) + "&password=" + encodeURI(password);
  window.location.href = url;
  //		
}



