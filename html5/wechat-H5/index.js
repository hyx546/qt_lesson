var send = document.getElementById('send');
var parent = document.getElementById('content-items');
send.addEventListener('click',function(){

    //jq
    var html=$(
    '<li class="content-item">'+
        '<div class="left-pic">'+
            '<img src="./images/user.jpg" alt="">'+
        '</div>'+
        '<div class="message">'+
            '<p class="name">韩雨汐</p>'+
           '<p class="datail">晚上一起吃饭？</p>'+
       '</div>'+
        '<div class="time">'+
            '<span>下午 3:50</span>'+
       '</div>'+
    '</li>');
    html.appendTo(parent);








    // 原声js
    // var li= document.createElement('li');
    // li.setAttribute('class','content-item');//创建属性
    // var divPic=document.createElement('div');
    // divPic.setAttribute('class','left-pic');
    // // 子节点放入父节点
    // li.appendChild(divPic);
    // var img = document.createElement('img');
    // img.setAttribute('src','./images/user.jpg')
    // divPic.appendChild(img);
    // var message=document.createElement('div');
    // message.setAttribute('class','message');
    // li.appendChild(message);
    // var p1=document.createElement('p');
    // p1.setAttribute('class','name');
    // var p1Txt=document.createTextNode('韩雨汐');//创建文本节点
    // p1.appendChild(p1Txt);
    // message.appendChild(p1);
    // var p2=document.createElement('p');
    // p2.setAttribute('class','detail');
    // var p2Txt=document.createTextNode('你在干嘛');//创建文本节点
    // p2.appendChild(p2Txt);
    // message.appendChild(p2);
    // var time=document.createElement('div');
    // time.setAttribute('class','time')
    // li.appendChild(time);
    // var time=document.createElement('div');
    // time.setAttribute('class','time')
    // li.appendChild(time);
    // var span=document.createElement('span');
    // var spanTxt=document.createTextNode('上午 4：30');
    // span.appendChild(spanTxt);
    // time.appendChild(span);
    // li.appendChild(time);

    // parent.appendChild(li);











})