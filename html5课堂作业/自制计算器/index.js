//点击数字可以在显示屏显示出来



var num="";
// 声明一个变量char，来存放运算符
var char = "";
var num2="";
var result;
var state = false;//是否点击了等号,初始为未点击

$('.number input').click(function() {
  // 获取点击的value值,该值为字符串
  var value = $(this).val();
  // 如果char为空，则存取第一个数字，否则开始存取第二个📖
  if (char == ""){
    // 如果点击等号，清空num num2 ，重新存取新的值
    if(state) {
      num="";
      num2="";
      state = false;
    }
    num += value;
    // 用num替换掉input里面的value值
    $("input[type='text']").val(num);
  }else{
    num2 = num2+value;
    $("input[type='text']").val(num+char+num2);
  }
 
})
// 添加运算符
  $('.char input').click(function() {
    //如果num2存在时
    if (num2) {
      switch (char) {
        case "+":
          result = parseFloat(num) + parseFloat(num2);break;
        case "-":
          result = parseFloat(num) - parseFloat(num2);break;
        case "*":
          result = parseFloat(num) * parseFloat(num2);break;
        case "/":
          result = parseFloat(num) / parseFloat(num2);break;
      }
      num = result; //把值传给num显示在显示器上面
      num2 = ""; //把num2初始化
      $("input[type='text']").val(num+char);
    }
    char = $(this).val();
    $("input[type='text']").val(num+char);
  })

// 计算结果
$('.result input').click(function() {
  // 根据不同的运算符，来做不同的运算
  switch (char) {
    case "+":
      result = parseFloat(num) + parseFloat(num2);break;
    case "-":
      result = parseFloat(num) - parseFloat(num2);break;
    case "*":
      result = parseFloat(num) * parseFloat(num2);break;
    case "/":
      result = parseFloat(num) / parseFloat(num2);break;
  }
  $("input[type='text']").val(result);
  // 把字符串设为空，方便下一步清空处理
  char ="";
  state = true;

})

// 清零操作
$('.delete input').click(function() {
  num="";
  num2="";
  result="";
  char="";
  $("input[type='text']").val(num);
})

// 返回上一步操作

$('.back input').click(function() {
  if (num2) {
    num2 = num2.slice(0, -1);
    $("input[type='text']").val(num+char+num2);
  }
  else if (char) {
    char = char.slice(0, -1);
    $("input[type='text']").val(num+char);
  }
  else if (num) {
      num = num.slice(0, -1);
      $("input[type='text']").val(num);
  }
  else {
    $("input[type='text']").val(result);
  }
})