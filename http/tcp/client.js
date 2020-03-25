const net = require('net')

// 创建客户端于udp不同
// net.Socket
// 1.new net.Socket
// 2.net.createConnection()

//  要连接的目标主机的地址和端口号
const clientSocker = net.createConnection(1234,'192.168.0.104')

// 监听数据传输

clientSocker.on('data',data => {
  // console.log('服务器返回'+data);

  // clientSocker.write('get money')
  // clientSocker.write('getBaby')
  console.log('数据：'+ data);
})

//  当数据接受完成的时候触发
clientSocker.on('end', (data) => {
  // console.log('数据包接受完成');

  // 把接受到的数据组合起
})