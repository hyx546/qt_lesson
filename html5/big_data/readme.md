- 网页上显示大量的html也是负担
    http 请求 3000 伺服状态 Server
    / index.html  传输给浏览器Client
    127.0.0.1 localhost 本地开发
    172.20.10.8 局域网   远程
    浏览器 访问代理Client   ip:8080 下载下来（1.5s say bay）
    远程 服务器 （IP, domain）  伺服状态 live-server

    分页    ?limit=20&page=1 //第一页的20行
    html5   来实现
    
    http 超文本传输协议
    文件太大 分几次， 等时间长 对大数据做分页
    http 状态码 304 文件没有修改，    使用浏览器缓存

    - 得益于 es6 Array.from({length:n},(v,k)=>`新闻${k}`) 前端模拟大数据  //k代表第几条
    - 将大的数据按页分割 分割好,    Array.from({length:Math.ceil(arr.length/size), (v,k)=> Array.from({
        length:size,()=>{}
    })})



