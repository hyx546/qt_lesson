- JS 是单线程语言，
  中台 让大型公司更好的复用开发能力/资源
  node 的性能就有了要求，可以像java一样多线程？
  node app.js 1234 端口给了你
  前端 mount #app CPU
  进程 process 操作系统挂载运用程序的单元
  拥有独立的资源
  工作交给子进程， 一个人做事
  招人， 企业 
  req => 请求？ {n} 天生是多线程的
  分配资源给它 完成这次请求+响应 
  线程是运行调度的单元， 进程计算都在一个线程上跑
  内存，计算资源 用户的并发， 电脑可以运行正常
  ？？ ab test
  1. 一个进程， 1234使用资源 内存， 读写IO， CPU进程， 线程{n}, 物理上限
  2. node, cluster
    2个cpu 4个， 16
    1个在跑 能不能把另n-1个也用起来？

创业， cpu 跑起来，多核跑， 尽可能多的去为更多的用户服务， cluster
横向扩容， 请求分配给这些机器？
负载均衡 nginx  apache tomcat //web服务器
www.taobao.com/search? a=1 （浏览器proxy, 手机， 小程序 app)中央服务器发出请求 -> ngnix -> 选择一台当前还有运算能力的服务器, IP -> 用户返回 （TCP/IP三次）分布式，每个CPU都会跑同样的程序
ip 响应服务
每台机器上都要去部署同样的代码，同样的运行环境（docker），


证据 性能？ docker + ab test + node cluster + nginx 压力测试
代码好？ 证明？ 测试驱动开发 mocha

- docker
  集装箱, 50台机器 百万并发 
  开发环境镜像
  统一所有机器的开发环境 centos 7 取代来虚拟机， 不用提前分配超大空间以及内存，操作特别快，全命令行化

-docker 镜像文件 docker pull 
docker images
docker run -p 5200:5200 -it edsdssd /bin/bash
mkdir abtest
cd abtest
ls
touch app.js
ls
touch index.js
touch index.html
vi app.js  拷贝

yum install wget
wget -c https://nodejs.org/dist/latest/node-v13.5.0-linux-x64.tar.gz

ls 
cd ../
cp abtest/node-v13.5.0-linux-x64.tar.gz./
ls
tar -zxvf
yum install tar
tar -zxvf
tar -zxvf node-v13.5.0-linux-x64.tar.gz
export PATH=/node-v13.5.0-linux-x64/bin:$PATH
echo $PATH
node -v
cd abtest/
ls
node app.js
vi app.js  改端口号5200
node app.js
yum -y install httped-tools
ls
node app.js
npm config set registry https://registry.npm.taobao.org
npm install -g pm2
pm2 --v
pm2 start app.js
ab -V
ab -c50 -n400  http://127.0.0.1:5200/
pm2 stop 0
pm2 start index.js



